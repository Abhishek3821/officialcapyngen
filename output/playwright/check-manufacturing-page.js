async page=>{
 await page.setViewportSize({width:1440,height:1000});await page.goto('http://localhost:3000/');
 const banner=page.getByRole('banner');await banner.getByRole('button',{name:'Industries',exact:true}).click();await banner.getByRole('link',{name:'Manufacturing & Automotive',exact:true}).filter({visible:true}).click();await page.waitForURL('**/manufacturing-automotive');
 await page.waitForFunction(()=>!document.querySelector('[aria-label="Next manufacturing perspectives"]').disabled);
 await page.evaluate(urls=>Promise.all(urls.map(url=>{const image=new Image();image.src=url;return image.decode();})),['manufacturing-resort','manufacturing-destinations','manufacturing-experiences','manufacturing-travellers'].map(name=>'/images/industries/'+name+'.png'));
 for(const [width,height] of [[1920,1080],[1440,900],[1366,768],[1280,720],[1024,768],[820,1180],[768,1024],[390,844],[375,667],[320,568]]){
  await page.setViewportSize({width,height});await page.evaluate(()=>scrollTo(0,0));await page.evaluate(()=>document.fonts.ready);
  const result=await page.evaluate(()=>{
   const hero=document.querySelector('[data-industry-hero]');const box=hero.getBoundingClientRect();const nav=document.querySelector('header nav').getBoundingClientRect();const form=hero.querySelector('form').getBoundingClientRect();const copy=hero.querySelector('h1').parentElement.getBoundingClientRect();
   const clipped=Array.from(hero.querySelectorAll('h1,p,form')).filter(el=>{const r=el.getBoundingClientRect();return r.width&&r.height&&(r.bottom>innerHeight+1||r.right>innerWidth+1);}).map(el=>el.textContent);
   return{top:box.top,nav:nav.top,bottom:box.bottom,clipped,overlap:copy.bottom>form.top-10,copyBottom:copy.bottom,formTop:form.top,overflow:document.documentElement.scrollWidth>innerWidth};
  });
  if(Math.abs(result.top-result.nav)>1||Math.abs(result.bottom-height)>1||result.clipped.length||result.overlap||result.overflow)throw new Error(JSON.stringify({width,height,...result}));
  if(width===1440||width===390)await page.screenshot({path:`output/playwright/manufacturing-${width}.png`,fullPage:true});
  if(width===320)await page.screenshot({path:'output/playwright/manufacturing-small-hero.png'});
 }
 await page.setViewportSize({width:1440,height:1000});
 await page.getByRole('combobox',{name:'Industry focus',exact:true}).selectOption('Automotive');await page.getByRole('combobox',{name:'Your next step',exact:true}).selectOption('Connect workflows');await page.getByRole('button',{name:'Explore now',exact:true}).click();
 const gallery=page.getByRole('region',{name:'Manufacturing perspectives gallery',exact:true});
 if(await gallery.getByRole('button').count()!==3)throw new Error('Industry filter failed');
 if(!(await page.getByRole('main').getByRole('status').textContent()).includes('Automotive'))throw new Error('Explore status failed');
 await page.getByRole('combobox',{name:'Industry focus',exact:true}).selectOption('All industries');await page.getByRole('button',{name:'Explore now',exact:true}).click();
 const sample=()=>gallery.evaluate(el=>new DOMMatrix(getComputedStyle(el.firstElementChild).transform).m41);
 const settle=async()=>{let last=await sample();for(let i=0;i<40;i++){await page.waitForTimeout(50);const next=await sample();if(Math.abs(next-last)<.01)return;last=next;}throw new Error('Animation stuck');};
 await settle();const start=await sample();for(let i=0;i<8;i++){await page.getByRole('button',{name:'Next manufacturing perspectives',exact:true}).click();await settle();}for(let i=0;i<8;i++){await page.getByRole('button',{name:'Previous manufacturing perspectives',exact:true}).click();await settle();}if(Math.abs(start-await sample())>2)throw new Error('Loop failed');
 await gallery.scrollIntoViewIfNeeded();const box=await gallery.boundingBox();const before=await sample();await page.mouse.move(box.x+box.width*.7,box.y+130);await page.mouse.down();await page.mouse.move(box.x+box.width*.25,box.y+130,{steps:12});await page.mouse.up();await settle();if(Math.abs(before-await sample())<1)throw new Error('Drag failed');if(await page.getByRole('dialog').isVisible())throw new Error('Drag opened modal');
 await gallery.getByRole('button',{name:'Explore A stronger foundation',exact:true}).focus();await page.keyboard.press('Enter');const modal=page.getByRole('dialog');await modal.getByRole('heading',{name:'A stronger foundation',exact:true}).waitFor();await page.keyboard.press('Escape');await modal.waitFor({state:'hidden'});
 await page.getByRole('button',{name:'Explore the concept',exact:true}).click();await modal.getByRole('heading',{name:'Your journey, simplified.',exact:true}).waitFor();await page.mouse.click(2,2);await modal.waitFor({state:'hidden'});
 await page.getByRole('button',{name:'Next manufacturing experiences',exact:true}).click();
 const experienceGallery=page.getByRole('region',{name:'Manufacturing experiences gallery',exact:true});await experienceGallery.getByRole('button',{name:'Explore Make every detail count',exact:true}).focus();await page.keyboard.press('Enter');await modal.getByRole('heading',{name:'Make every detail count',exact:true}).waitFor();await page.keyboard.press('Escape');await modal.waitFor({state:'hidden'});
 await page.setViewportSize({width:390,height:844});await page.evaluate(()=>scrollTo(0,0));await banner.getByRole('button',{name:'Open navigation',exact:true}).click();await banner.getByRole('button',{name:'Industries',exact:true}).filter({visible:true}).click();await banner.getByRole('link',{name:'Manufacturing & Automotive',exact:true}).filter({visible:true}).click();await page.waitForURL('**/manufacturing-automotive');
}
