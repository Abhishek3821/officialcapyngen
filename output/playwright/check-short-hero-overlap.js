async page=>{
 for(const route of ['education','banking']){
  await page.goto('http://localhost:3000/'+route);
  for(const [width,height] of [[320,568],[375,667],[390,844]]){
   await page.setViewportSize({width,height});await page.evaluate(()=>scrollTo(0,0));
   const result=await page.evaluate(route=>{
    const hero=document.querySelector('[data-industry-hero]');
    if(route==='education'){
     const actions=hero.querySelector('a').parentElement.getBoundingClientRect();
     const info=hero.querySelector('aside').getBoundingClientRect();
     return {overlap:actions.bottom>info.top+1,first:actions.bottom,second:info.top};
    }
    const copy=hero.querySelector('h1').parentElement.querySelector('p').getBoundingClientRect();
    const button=Array.from(hero.querySelectorAll('a')).find(el=>el.textContent.includes('Start a conversation')).getBoundingClientRect();
    return {overlap:copy.bottom>button.top-8,first:copy.bottom,second:button.top};
   },route);
   if(result.overlap) throw new Error(JSON.stringify({route,width,height,...result}));
   if(width===320) await page.screenshot({path:`output/playwright/hero-small-${route}.png`});
  }
 }
}
