async page => {
 const pages=[['Education','/education'],['Capital Market','/capital-market'],['Life Science','/life-science'],['Healthcare & Fitness','/healthcare-fitness']];
 await page.setViewportSize({width:1440,height:1000});
 await page.goto('http://localhost:3000/');
 const original=await page.getByRole('button',{name:'Industries',exact:true}).evaluate(el=>getComputedStyle(el).fontSize);
 for(const [label,path] of pages){
  const banner=page.getByRole('banner');
  await banner.getByRole('button',{name:'Industries',exact:true}).click();
  await banner.getByRole('link',{name:label,exact:true}).filter({visible:true}).click();
  await page.waitForURL('**'+path);
  if(await banner.getByRole('button',{name:'Industries',exact:true}).evaluate(el=>getComputedStyle(el).fontSize)!==original) throw new Error('Navbar size differs on '+path);
  await page.evaluate(async()=>{const urls=Array.from(document.querySelectorAll('main div,main span')).map(el=>getComputedStyle(el).backgroundImage).filter(url=>url.startsWith('url('));await Promise.all([...new Set(urls)].map(url=>{const image=new Image();image.src=url.slice(5,-2);return image.decode();}));});
  await page.screenshot({path:`output/playwright/industry-${path.slice(1)}-desktop.png`,fullPage:true});
  for(const width of [820,390,320]){
   await page.setViewportSize({width,height:900});
   if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)) throw new Error('Overflow '+path+' '+width);
   if(width===390) await page.screenshot({path:`output/playwright/industry-${path.slice(1)}-mobile.png`,fullPage:true});
  }
  await page.setViewportSize({width:1440,height:1000});
 }
 await page.goto('http://localhost:3000/education');
 await page.getByRole('button',{name:'Schools',exact:true}).click();
 const search=page.getByRole('searchbox');
 await search.fill('New York');
 await page.getByRole('status').filter({hasText:'1 design concepts'}).waitFor();
 await page.getByRole('button',{name:'Save Room to grow',exact:true}).click();
 if(await page.getByRole('button',{name:'Save Room to grow',exact:true}).getAttribute('aria-pressed')!=='true') throw new Error('Save did not toggle');
 await page.getByRole('button',{name:'Explore Room to grow',exact:true}).click();
 await page.getByRole('dialog').waitFor({state:'visible'});
 await page.keyboard.press('Escape');
 await page.getByRole('dialog').waitFor({state:'hidden'});
 await page.goto('http://localhost:3000/capital-market');
 const before=await page.locator('h1').textContent();
 await page.getByRole('button',{name:'Next capital market slide'}).click();
 if(before===await page.locator('h1').textContent()) throw new Error('Hero did not change');
 await page.getByRole('button',{name:'Explore A stronger foundation',exact:true}).click();
 await page.getByRole('dialog').waitFor({state:'visible'});
 await page.mouse.click(2,2);
 await page.getByRole('dialog').waitFor({state:'hidden'});
 await page.goto('http://localhost:3000/life-science');
 await page.getByRole('button',{name:'Explore Digital foundations',exact:true}).click();
 await page.getByRole('dialog').getByRole('heading',{name:'Digital foundations'}).waitFor();
 await page.keyboard.press('Escape');
 await page.getByRole('dialog').waitFor({state:'hidden'});
 await page.goto('http://localhost:3000/healthcare-fitness');
 await page.getByRole('button',{name:'Active living',exact:true}).click();
 if(await page.getByRole('button',{name:'Active living',exact:true}).getAttribute('aria-pressed')!=='true') throw new Error('Catalog filter failed');
 await page.getByRole('tab',{name:'Research',exact:true}).click();
 await page.keyboard.press('ArrowRight');
 if(await page.getByRole('tab',{name:'Concept',exact:true}).getAttribute('aria-selected')!=='true') throw new Error('Keyboard tabs failed');
 await page.getByRole('button',{name:'Explore Active living',exact:true}).click();
 await page.getByRole('dialog').waitFor({state:'visible'});
 await page.keyboard.press('Escape');
 await page.getByRole('dialog').waitFor({state:'hidden'});
 await page.setViewportSize({width:390,height:844});
 for(const [label,path] of pages){
  const banner=page.getByRole('banner');
  await banner.getByRole('button',{name:'Open navigation'}).click();
  await banner.getByRole('button',{name:'Industries',exact:true}).filter({visible:true}).click();
  await banner.getByRole('link',{name:label,exact:true}).filter({visible:true}).click();
  await page.waitForURL('**'+path);
 }
}
