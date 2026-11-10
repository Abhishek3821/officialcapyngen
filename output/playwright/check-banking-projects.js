async page => {
  await page.goto('http://localhost:3000/banking');
  await page.evaluate(async () => { const image = new Image(); image.src = '/images/banking/creative-interiors.png'; await image.decode(); });
  for (const width of [1440,390]) {
    await page.setViewportSize({width,height:900});
    const section = page.getByRole('region', { name: 'Creative projects that define our style.' });
    await section.scrollIntoViewIfNeeded();
    await section.screenshot({path:`output/playwright/banking-projects-${width}.png`});
    if(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)) throw new Error('Page overflow');
  }
  const gallery = page.getByRole('region', {name:'Creative project gallery'});
  const before = await gallery.evaluate(el => el.scrollLeft);
  await page.getByRole('button', {name:'Next projects',exact:true}).click();
  await page.waitForFunction(previous => document.querySelector('[aria-label="Creative project gallery"]').scrollLeft > previous, before);
  await page.getByRole('button', {name:'View Bohemian Rhapsody',exact:true}).click();
  await page.getByRole('dialog', {name:'Bohemian Rhapsody'}).waitFor({state:'visible'});
  await page.keyboard.press('Escape');
  await page.getByRole('dialog').waitFor({state:'hidden'});
}
