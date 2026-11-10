async page=>{
 await page.goto('http://localhost:3000/education');
 await page.evaluate(async()=>{const image=new Image();image.src='/images/industries/education.png';await image.decode();});
 for(const width of [1920,1440,1024,820,768,640,390,320]){
  await page.setViewportSize({width,height:1000});
  await page.evaluate(()=>document.fonts.ready);
  const report=await page.evaluate(()=>({viewport:innerWidth,content:document.documentElement.scrollWidth,images:Array.from(document.querySelectorAll('main [role="img"]')).map(el=>({label:el.getAttribute('aria-label'),width:el.clientWidth,height:el.clientHeight,background:getComputedStyle(el).backgroundImage}))}));
  if(report.content>report.viewport) throw new Error('Education overflow '+JSON.stringify(report));
  if(report.images.some(image=>image.width===0||image.height===0||!image.background.includes('education.png'))) throw new Error('Missing education image '+JSON.stringify(report));
  if(width===1440||width===390) await page.screenshot({path:`output/playwright/education-polished-${width}.png`,fullPage:true});
 }
 await page.setViewportSize({width:390,height:844});
 const search=page.getByRole('searchbox');await search.fill('Boston');
 if(await page.getByRole('status').textContent()!=='1 design concepts') throw new Error('Search result mismatch');
 await search.focus();
 await page.getByRole('region',{name:'Learning showcase'}).screenshot({path:'output/playwright/education-search-polished.png'});
 await page.getByRole('button',{name:'Save Learning without limits',exact:true}).click();
 if(await page.getByRole('button',{name:'Save Learning without limits',exact:true}).getAttribute('aria-pressed')!=='true') throw new Error('Favorite failed');
 await page.getByRole('button',{name:'Explore Learning without limits',exact:true}).click();
 await page.getByRole('dialog').waitFor({state:'visible'});
 await page.keyboard.press('Escape');await page.getByRole('dialog').waitFor({state:'hidden'});
 await search.fill('');await page.getByRole('button',{name:'Schools',exact:true}).click();
 if(await page.getByRole('status').textContent()!=='3 design concepts · 1 saved') throw new Error('Filter mismatch');
}
