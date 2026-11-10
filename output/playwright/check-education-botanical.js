async page=>{
 await page.goto('http://localhost:3000/education');
 for(const width of [1440,820,760,390,320]){
  await page.setViewportSize({width,height:1000});
  const article=page.getByRole('article',{name:/Karelian wild plants/});
  await article.scrollIntoViewIfNeeded();
  await article.locator('img').evaluate(image=>image.decode());
  if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)) throw new Error('Botanical overflow '+width);
  if(width===1440||width===390) await article.screenshot({path:`output/playwright/education-botanical-${width}.png`});
 }
}
