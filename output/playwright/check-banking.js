async page => {
  console.log(await page.evaluate(() => ({
    width: innerWidth,
    contentWidth: document.documentElement.scrollWidth,
    imageLoaded: document.querySelector('main img').complete,
    links: Array.from(document.querySelectorAll('main a')).map(a => a.getAttribute('href'))
  })));
  await page.getByRole('link', { name: 'Explore our banking solutions' }).click();
  console.log('Solutions anchor:', new URL(page.url()).hash);
}
