async page=>{
 await page.goto('http://localhost:3000/');
 await page.setViewportSize({width:1440,height:1000});
 const banner=page.getByRole('banner');
 await banner.getByRole('button',{name:'Industries',exact:true}).click();
 await banner.getByRole('link',{name:'Energy, Resources & Utilities',exact:true}).filter({visible:true}).click();
 await page.waitForURL('**/energy-resources-utilities');
 const assetUrls=['energy-hiker','energy-coast','energy-destinations'].map(name=>'/images/industries/'+name+'.png');
 await page.evaluate(urls=>Promise.all(urls.map(url=>{const image=new Image();image.src=url;return image.decode();})),assetUrls);
 for(const [width,height] of [[1920,1080],[1440,900],[1366,768],[1280,720],[820,1180],[768,1024],[390,844],[375,667],[320,568]]){
  await page.setViewportSize({width,height});await page.evaluate(()=>scrollTo(0,0));await page.evaluate(()=>document.fonts.ready);
  const report=await page.evaluate(()=>{
   const hero=document.querySelector('[data-industry-hero]');const box=hero.getBoundingClientRect();const nav=document.querySelector('header nav').getBoundingClientRect();
   const clipped=Array.from(hero.querySelectorAll('h1,p,a')).filter(el=>{const r=el.getBoundingClientRect();return r.width&&r.height&&(r.bottom>innerHeight+1||r.right>innerWidth+1);}).map(el=>el.textContent);
   return{top:box.top,nav:nav.top,bottom:box.bottom,clipped,overflow:document.documentElement.scrollWidth>innerWidth};
  });
  if(Math.abs(report.top-report.nav)>1||Math.abs(report.bottom-height)>1||report.clipped.length||report.overflow)throw new Error(JSON.stringify({width,height,...report}));
  if(width===1440||width===390)await page.screenshot({path:`output/playwright/energy-page-${width}.png`,fullPage:true});
 }
 await page.setViewportSize({width:1440,height:1000});
 await page.getByRole('button',{name:'Renewables',exact:true}).click();
 await page.getByRole('heading',{name:'Renewables, connected.',exact:true}).waitFor();
 const gallery=page.getByRole('region',{name:'Energy possibilities gallery'});
 const sample=()=>gallery.evaluate(el=>new DOMMatrix(getComputedStyle(el.firstElementChild).transform).m41);
 const settle=async()=>{let last=await sample();for(let i=0;i<40;i++){await page.waitForTimeout(50);const next=await sample();if(Math.abs(next-last)<.01)return;last=next;}throw new Error('Carousel did not settle');};
 const start=await sample();for(let i=0;i<9;i++){await page.getByRole('button',{name:'Next energy possibilities',exact:true}).click();await settle();}for(let i=0;i<9;i++){await page.getByRole('button',{name:'Previous energy possibilities',exact:true}).click();await settle();}if(Math.abs(start-await sample())>2)throw new Error('Loop failed');
 await gallery.scrollIntoViewIfNeeded();const box=await gallery.boundingBox();const before=await sample();await page.mouse.move(box.x+box.width*.8,box.y+120);await page.mouse.down();await page.mouse.move(box.x+box.width*.2,box.y+120,{steps:12});await page.mouse.up();await settle();if(Math.abs(before-await sample())<1)throw new Error('Drag failed');if(await page.getByRole('dialog').isVisible())throw new Error('Drag opened modal');
 await page.getByRole('button',{name:'All possibilities',exact:true}).click();const modal=page.getByRole('dialog');await modal.getByRole('heading',{name:'A world of possibilities.',exact:true}).waitFor();await modal.getByRole('button',{name:/Powering tomorrow/}).click();await modal.getByRole('heading',{name:'Powering tomorrow',exact:true}).waitFor();await page.keyboard.press('Escape');await modal.waitFor({state:'hidden'});
 await page.getByRole('button',{name:'Purpose at the core',exact:true}).click();await modal.getByRole('heading',{name:'Purpose at the core',exact:true}).waitFor();await page.mouse.click(2,2);await modal.waitFor({state:'hidden'});
 await page.setViewportSize({width:390,height:844});await page.evaluate(()=>scrollTo(0,0));await banner.getByRole('button',{name:'Open navigation'}).click();await banner.getByRole('button',{name:'Industries',exact:true}).filter({visible:true}).click();await banner.getByRole('link',{name:'Energy, Resources & Utilities',exact:true}).filter({visible:true}).click();await page.waitForURL('**/energy-resources-utilities');
}
