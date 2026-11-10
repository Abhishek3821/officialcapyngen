async page=>{
 await page.goto('http://localhost:3000/education');
 await page.setViewportSize({width:1440,height:1000});
 const section=page.getByRole('region',{name:'Learning showcase',exact:true});
 const gallery=page.getByRole('region',{name:'Learning concept gallery',exact:true});
 await page.waitForFunction(()=>document.querySelector('[aria-label="Learning concept gallery"]').firstElementChild.style.transform);
 if(await page.getByRole('searchbox').count()||await page.getByRole('button',{name:/^Save /}).count()) throw new Error('Search or favorite controls remain');
 if(await section.getByRole('group',{name:'Filter learning concepts'}).count()) throw new Error('Filters remain');
 const sample=()=>gallery.evaluate(el=>({x:new DOMMatrix(getComputedStyle(el.firstElementChild).transform).m41,scroll:el.scrollLeft}));
 const settle=async()=>{let last=(await sample()).x;for(let i=0;i<40;i++){await page.waitForTimeout(50);const next=(await sample()).x;if(Math.abs(last-next)<.01)return;last=next;}throw new Error('Animation not settling');};
 const start=(await sample()).x;
 for(let i=0;i<12;i++){await page.getByRole('button',{name:'Next learning concepts',exact:true}).click();await settle();}
 if(Math.abs((await sample()).x-start)<1) throw new Error('Next control does not move');
 for(let i=0;i<12;i++){await page.getByRole('button',{name:'Previous learning concepts',exact:true}).click();await settle();}
 if(Math.abs((await sample()).x-start)>2) throw new Error('Infinite loop did not return');
 await gallery.scrollIntoViewIfNeeded();
 const box=await gallery.boundingBox();
 await page.mouse.move(box.x+box.width*.7,box.y+150);await page.mouse.down();await page.mouse.move(box.x+box.width*.3,box.y+150,{steps:12});await page.mouse.up();await settle();
 if(Math.abs((await sample()).x-start)<1) throw new Error('Mouse drag did not move');
 if(await page.getByRole('dialog').isVisible()) throw new Error('Drag opened modal');
 await gallery.getByRole('button',{name:'Explore Learning without limits',exact:true}).focus();await page.keyboard.press('Enter');
 await page.getByRole('dialog').getByRole('heading',{name:'Learning without limits',exact:true}).waitFor();
 await page.keyboard.press('Escape');await page.getByRole('dialog').waitFor({state:'hidden'});
 for(const width of [1440,820,390,320]){
  await page.setViewportSize({width,height:1000});
  if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)) throw new Error('Overflow '+width);
  const heading=await section.getByRole('heading').boundingBox();const arrows=await section.getByRole('button',{name:'Previous learning concepts',exact:true}).boundingBox();
  if(arrows.x<heading.x+heading.width-1) throw new Error('Arrows are not at heading right');
  if(width===1440||width===390) await section.screenshot({path:`output/playwright/education-loop-${width}.png`});
 }
 await page.setViewportSize({width:390,height:844});await gallery.scrollIntoViewIfNeeded();
 const mobile=await gallery.boundingBox();const beforeTouch=(await sample()).x;
 const cdp=await page.context().newCDPSession(page);
 await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:mobile.x+310,y:mobile.y+140}]});
 for(let i=1;i<=12;i++)await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:mobile.x+310-i*18,y:mobile.y+140}]});
 await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await settle();await cdp.detach();
 if(Math.abs((await sample()).x-beforeTouch)<1) throw new Error('Touch swipe did not move');
 if(await page.getByRole('dialog').isVisible()) throw new Error('Swipe opened modal');
}
