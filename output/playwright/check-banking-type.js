async page => {
  await page.goto('http://localhost:3000/banking');
  for (const [width, height] of [[1920,1080], [1440,900], [1366,768], [1280,720], [820,1180], [390,844], [320,568]]) {
    await page.setViewportSize({width,height});
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(() => scrollTo(0,0));
    const result = await page.evaluate(() => {
      const text = Array.from(document.querySelectorAll('main *')).filter(el => Array.from(el.childNodes).some(n => n.nodeType === 3 && n.textContent.trim()) && el.getBoundingClientRect().width && getComputedStyle(el).display !== 'none');
      const tooSmall = text.filter(el => parseFloat(getComputedStyle(el).fontSize) < 12).map(el => el.textContent);
      const hero = document.querySelector('main > section');
      const heroBox = hero.getBoundingClientRect();
      const clipped = innerWidth > 760 ? Array.from(hero.querySelectorAll('p,h1,h2,a')).filter(el => getComputedStyle(el).display !== 'none' && el.getBoundingClientRect().bottom > heroBox.bottom+1).map(el => el.textContent) : [];
      return { tooSmall, clipped, overflow: document.documentElement.scrollWidth > innerWidth, heroHeight: heroBox.height };
    });
    if(result.tooSmall.length || result.clipped.length || result.overflow) throw new Error(JSON.stringify({width,height,...result}));
    if(width===1440) await page.screenshot({path:'output/playwright/banking-type-desktop.png',fullPage:true});
    if(width===390) await page.screenshot({path:'output/playwright/banking-type-mobile.png',fullPage:true});
  }
}
