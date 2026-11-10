async page => {
  await page.goto('http://localhost:3000/banking');
  for(const width of [1440,820,390,320]) {
    await page.setViewportSize({width,height:1000});
    const section=page.getByRole('region',{name:'Here’s what warm words from our clients sound like.'});
    await section.scrollIntoViewIfNeeded();
    await section.locator('img').evaluate(image=>image.decode());
    if(width===1440||width===390) await section.screenshot({path:`output/playwright/banking-testimonial-${width}.png`});
    if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)) throw new Error('Horizontal overflow at '+width);
    if(await section.locator('svg').count()!==6) throw new Error('Partner marks missing');
  }
}
