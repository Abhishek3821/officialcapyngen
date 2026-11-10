async page => {
  await page.setViewportSize({width:1440,height:1000});
  await page.emulateMedia({reducedMotion:'reduce'});
  const cases = [
    ['/banking', 'View Quiet Form'],
    ['/cms-design', 'Our Story'],
    ['/cms-design', 'Read A More Conscious Tomorrow'],
    ['/cms-design', /Subscribe Now/],
    ['/digital-marketing', 'Explore the Casual Style collection'],
    ['/website-design', 'View episode preview: Finding Your Voice in a Noisy World'],
    ['/', 'Discover location'],
  ];
  for(const [path,name] of cases) {
    let phase=0;
    const visible = async modal => { phase++; try { await modal.waitFor({state:'visible',timeout:5000}); } catch { throw new Error(path+' '+String(name)+' phase '+phase+' did not open'); } };
    await page.goto('http://localhost:3000'+path);
    if(path==='/banking') await page.waitForFunction(()=>document.querySelector('[aria-label="Creative project gallery"]').firstElementChild.style.transform);
    const opener=page.getByRole('button',{name,exact:typeof name==='string'});
    await opener.click();
    const modal=page.getByRole('dialog');
    await visible(modal);
    await modal.getByRole('heading').first().click();
    if(!await modal.isVisible()) throw new Error('Inside click closed '+path);
    await page.keyboard.press('Tab');
    if(!await modal.evaluate(el=>el.contains(document.activeElement))) throw new Error('Focus escaped '+path);
    await page.mouse.click(2,2);
    await modal.waitFor({state:'hidden'});
    await opener.focus();
    await page.keyboard.press('Enter');
    await visible(modal);
    await page.keyboard.press('Escape');
    await modal.waitFor({state:'hidden'});
    if(!await opener.evaluate(el=>el===document.activeElement)) throw new Error('Focus not restored '+path);
    await opener.click();
    await visible(modal);
    await modal.getByRole('button',{name:/^Close /}).first().focus();
    await page.keyboard.press('Space');
    await modal.waitFor({state:'hidden'});
  }
  await page.goto('http://localhost:3000/banking');
  for(const width of [1440,390]) {
    await page.setViewportSize({width,height:900});
    const section=page.getByRole('region',{name:'Interior architecture: a fresh perspective'});
    await section.scrollIntoViewIfNeeded();
    await section.locator('img').evaluate(image=>image.decode());
    await section.screenshot({path:`output/playwright/banking-pavilion-${width}.png`});
    if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)) throw new Error('Page overflow');
  }
}
