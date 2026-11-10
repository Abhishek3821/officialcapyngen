async page => {
  await page.goto('http://localhost:3000/banking');
  for (const [width, height] of [[1440, 900], [390, 844]]) {
    await page.setViewportSize({ width, height });
    await page.evaluate(() => document.fonts.ready);
    const section = page.getByRole('region', { name: 'Great experiences. Everyday confidence.' });
    await section.scrollIntoViewIfNeeded();
    await section.screenshot({ path: `output/playwright/banking-collage-${width}.png` });
    if (await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)) throw new Error('Horizontal overflow');
  }
}
