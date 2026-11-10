async page => {
 await page.goto('http://localhost:3000/banking');
 await page.evaluate(async()=>{const image=new Image();image.src='/images/banking/villa-collection-wide.png';await image.decode();});
 for(const width of [1440,820,390,320]){
  await page.setViewportSize({width,height:1000});
  const section=page.getByRole('region',{name:'Plans & pricing'});
  await section.scrollIntoViewIfNeeded();
  if(width===1440||width===390) await section.screenshot({path:`output/playwright/banking-villas-${width}.png`});
  if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)) throw new Error('Overflow '+width);
 }
 await page.setViewportSize({width:1440,height:1000});
 for(const name of ['Villa A1','Villa B2','Villa C3']){
  await page.getByRole('button',{name:`View ${name} plans and pricing`,exact:true}).click();
  const modal=page.getByRole('dialog');
  await modal.getByRole('heading',{name,exact:true}).waitFor({state:'visible'});
  await modal.getByRole('heading',{name,exact:true}).click();
  if(!await modal.isVisible()) throw new Error('Content click closed modal');
  await page.keyboard.press('Escape');
  await modal.waitFor({state:'hidden'});
 }
 await page.getByRole('button',{name:'View all villas',exact:true}).click();
 const modal=page.getByRole('dialog');
 await modal.getByRole('heading',{name:'A space for every possibility.'}).waitFor({state:'visible'});
 await modal.getByRole('button',{name:/Villa B2/}).click();
 await modal.getByRole('heading',{name:'Villa B2',exact:true}).waitFor({state:'visible'});
 await page.mouse.click(2,2);
 await modal.waitFor({state:'hidden'});
}
