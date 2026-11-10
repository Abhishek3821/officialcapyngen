async page => {
  await page.goto('http://localhost:3000/banking');
  for (const [width, height] of [[1920, 1080], [1440, 900], [1366, 768], [1280, 720]]) {
    await page.setViewportSize({ width, height });
    await page.evaluate(() => document.fonts.ready);
    const result = await page.evaluate(() => {
      const hero = document.querySelector('main > section');
      const box = hero.getBoundingClientRect();
      const elements = Array.from(hero.querySelectorAll('a, h1, h2, p'));
      return {
        viewport: innerHeight,
        heroBottom: box.bottom,
        clipped: elements.filter(el => el.getBoundingClientRect().bottom > innerHeight + 1).map(el => el.textContent),
        horizontalOverflow: document.documentElement.scrollWidth > innerWidth,
      };
    });
    console.log(width, height, JSON.stringify(result));
    if (Math.abs(result.heroBottom - height) > 1 || result.clipped.length || result.horizontalOverflow) throw new Error('Hero does not fit viewport');
  }
  await page.screenshot({ path: 'output/playwright/banking-viewport.png' });
}
