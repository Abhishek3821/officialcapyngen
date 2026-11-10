async page => {
  await page.goto('http://localhost:3000/banking');
  for (const [width, height] of [[1440, 900], [390, 844]]) {
    await page.setViewportSize({ width, height });
    const section = page.getByRole('region', { name: 'Good design makes room for better experiences.' });
    await section.scrollIntoViewIfNeeded();
    await section.locator('img').evaluateAll(async images => {
      await Promise.all(images.map(image => image.decode()));
    });
    await section.screenshot({ path: `output/playwright/banking-considered-${width}.png` });
    if (await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)) throw new Error('Horizontal overflow');
  }
}
