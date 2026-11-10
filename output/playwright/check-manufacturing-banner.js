async page=>{
 await page.goto('http://localhost:3000/manufacturing-automotive');
 for(const width of [1440,820,390]){
  await page.setViewportSize({width,height:1000});
  const banner=page.getByRole('region',{name:'Your journey, simplified.',exact:true});
  await banner.scrollIntoViewIfNeeded();await banner.locator('img').evaluate(image=>image.decode());
  await banner.screenshot({path:`output/playwright/manufacturing-banner-${width}.png`});
  if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw new Error('Banner overflow '+width);
 }
}
