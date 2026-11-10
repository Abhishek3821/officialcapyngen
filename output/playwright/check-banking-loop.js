async page => {
  await page.goto('http://localhost:3000/banking');
  await page.setViewportSize({width:1440,height:1000});
  const gallery = page.getByRole('region', {name:'Creative project gallery'});
  await gallery.scrollIntoViewIfNeeded();
  const sample = () => gallery.evaluate(el => {
    const strip = el.firstElementChild;
    const pitch = strip.children[1].getBoundingClientRect().left - strip.children[0].getBoundingClientRect().left;
    return {x:new DOMMatrix(getComputedStyle(strip).transform).m41,pitch,cycle:pitch*5,overflow:getComputedStyle(el).overflowX};
  });
  const settle = async () => {
    let previous = (await sample()).x;
    for(let i=0;i<40;i++) {
      await page.waitForTimeout(50);
      const next = (await sample()).x;
      if(Math.abs(next-previous)<.01) return;
      previous=next;
    }
    throw new Error('Animation did not settle');
  };
  const start = await sample();
  for(let i=0;i<12;i++) { await page.getByRole('button',{name:'Next projects',exact:true}).click(); await settle(); }
  const forward = await sample();
  if(Math.abs(start.x-forward.x)<1) throw new Error('Next arrows did not move');
  for(let i=0;i<12;i++) { await page.getByRole('button',{name:'Previous projects',exact:true}).click(); await settle(); }
  const back = await sample();
  if(Math.abs(start.x-back.x)>2) throw new Error('Loop did not return to initial position');
  const box = await gallery.boundingBox();
  const beforeDrag = (await sample()).x;
  await page.mouse.move(box.x+box.width*.65,box.y+160);
  await page.mouse.down();
  await page.mouse.move(box.x+box.width*.25,box.y+160,{steps:12});
  await page.mouse.up();
  await settle();
  if(Math.abs(beforeDrag-(await sample()).x)<1) throw new Error('Mouse drag did not move gallery');
  if(await page.getByRole('dialog').isVisible()) throw new Error('Drag opened project dialog');
  await gallery.focus();
  await page.keyboard.press('ArrowRight');
  await settle();
  await page.screenshot({path:'output/playwright/banking-infinite-desktop.png'});
  await page.setViewportSize({width:390,height:844});
  await gallery.scrollIntoViewIfNeeded();
  const mobile = await sample();
  if(mobile.overflow !== 'hidden') throw new Error('Scrollbar still visible');
  await page.screenshot({path:'output/playwright/banking-infinite-mobile.png'});
  if(await page.evaluate(() => document.documentElement.scrollWidth>innerWidth)) throw new Error('Page overflow');
}
