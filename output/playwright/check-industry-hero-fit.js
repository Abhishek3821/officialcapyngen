async page=>{
 const routes=['banking','education','capital-market','life-science','healthcare-fitness'];
 const sizes=[[1920,1080],[1440,900],[1366,768],[1280,720],[820,1180],[768,1024],[390,844],[375,667],[320,568]];
 for(const route of routes){
  await page.goto('http://localhost:3000/'+route);
  for(const [width,height] of sizes){
   await page.setViewportSize({width,height});
   await page.evaluate(()=>scrollTo(0,0));
   await page.evaluate(()=>document.fonts.ready);
   const report=await page.evaluate(()=>{
    const hero=document.querySelector('[data-industry-hero]');
    const box=hero.getBoundingClientRect();
    const nav=document.querySelector('header nav').getBoundingClientRect();
    const visible=Array.from(hero.querySelectorAll('h1,h2,p,a,button')).filter(el=>el.getBoundingClientRect().width&&el.getBoundingClientRect().height&&getComputedStyle(el).visibility!=='hidden');
    const clipped=visible.filter(el=>{const r=el.getBoundingClientRect();return r.bottom>innerHeight+1||r.top<box.top-1||r.right>innerWidth+1||r.left < -1;}).map(el=>({text:el.textContent,top:el.getBoundingClientRect().top,bottom:el.getBoundingClientRect().bottom}));
    return {top:box.top,navTop:nav.top,bottom:box.bottom,clipped,overflow:document.documentElement.scrollWidth>innerWidth};
   });
   if(Math.abs(report.top-report.navTop)>1||Math.abs(report.bottom-height)>1||report.clipped.length||report.overflow) throw new Error(JSON.stringify({route,width,height,...report}));
   if(width===1440||width===390) await page.screenshot({path:`output/playwright/hero-fit-${route}-${width}.png`});
  }
 }
}
