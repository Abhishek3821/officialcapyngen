async page => {
  await page.goto('http://localhost:3000/banking');
  await page.setViewportSize({ width: 1440, height: 900 });
  const section = page.getByRole('region', { name: 'Great experiences. Everyday confidence.' });
  await section.scrollIntoViewIfNeeded();
  await page.evaluate(async () => {
    const response = await fetch('/images/banking/product-scenes.png');
    if (!response.ok) throw new Error('Generated product images failed to load');
    const image = new Image();
    image.src = '/images/banking/product-scenes.png';
    await image.decode();
    const tiles = Array.from(document.querySelectorAll('[role="img"]')).filter(el => getComputedStyle(el).backgroundImage.includes('product-scenes.png'));
    if (tiles.length !== 16) throw new Error(`Expected 16 image placements, found ${tiles.length}`);
  });
  await section.screenshot({ path: 'output/playwright/banking-images-verified.png' });
}
