async page=>{
 await page.goto('http://localhost:3000/education');
 for(const width of [1440,820,640,390,320]){
  await page.setViewportSize({width,height:900});
  const section=page.getByRole('region',{name:'What we give / what we do not.'});
  await section.scrollIntoViewIfNeeded();
  await section.locator('img').evaluateAll(images=>Promise.all(images.map(image=>image.decode())));
  if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)) throw new Error('Nature section overflow at '+width);
  if(width===1440||width===390) await section.screenshot({path:`output/playwright/education-nature-${width}.png`});
 }
 await page.goto('http://localhost:3000/banking');
 await page.setViewportSize({width:390,height:844});
 const link=page.getByRole('link',{name:'Start a conversation',exact:true});
 if(!await link.evaluate(el=>{const r=el.getBoundingClientRect();return el.contains(document.elementFromPoint(r.x+r.width/2,r.y+r.height/2));})) throw new Error('Banking mobile CTA is covered');
 await link.click();await page.waitForURL('**/contact-us');
}
