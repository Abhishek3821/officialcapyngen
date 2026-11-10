async page=>{
 await page.goto('http://localhost:3000/healthcare-fitness');
 for(const [width,height] of [[1920,1080],[1440,900],[820,1180],[390,844],[320,568]]){
  await page.setViewportSize({width,height});await page.evaluate(()=>scrollTo(0,0));
  const result=await page.evaluate(()=>{
   const hero=document.querySelector('[data-industry-hero]').getBoundingClientRect();
   const nav=document.querySelector('header nav').getBoundingClientRect();
   const footer=document.querySelector('footer').getBoundingClientRect();
   return{left:hero.left,right:hero.right,top:hero.top,bottom:hero.bottom,navTop:nav.top,footerWidth:footer.width,overflow:document.documentElement.scrollWidth>innerWidth};
  });
  if(result.left!==0||Math.abs(result.right-width)>1||Math.abs(result.top-result.navTop)>1||Math.abs(result.bottom-height)>1||Math.abs(result.footerWidth-width)>1||result.overflow)throw new Error(JSON.stringify({width,height,...result}));
  if(width===1440)await page.screenshot({path:'output/playwright/healthcare-edge-to-edge.png'});
 }
}
