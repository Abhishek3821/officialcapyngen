async page=>{
 const routes=['/','/banking','/education','/capital-market','/life-science','/healthcare-fitness'];
 for(const width of [1440,390]){
  await page.setViewportSize({width,height:1000});
  let baseline;
  for(const route of routes){
   await page.goto('http://localhost:3000'+route);
   const result=await page.evaluate(()=>{
    const footer=document.querySelector('footer');
    const nav=document.querySelector('header nav');
    const sample=element=>{const css=getComputedStyle(element);return{font:css.fontSize,lineHeight:css.lineHeight,color:css.color,background:css.backgroundColor,padding:css.padding};};
    return{count:document.querySelectorAll('footer').length,width:footer.getBoundingClientRect().width,viewport:innerWidth,text:footer.textContent,footer:sample(footer),heading:sample(footer.querySelector('h2')),button:sample(footer.querySelector('button')),navHeight:nav.getBoundingClientRect().height,overflow:document.documentElement.scrollWidth>innerWidth};
   });
   if(result.count!==1||Math.abs(result.width-width)>1||result.overflow)throw new Error('Footer layout '+route+' '+JSON.stringify(result));
   if(!baseline)baseline=result;
   else if(JSON.stringify(result)!==JSON.stringify(baseline))throw new Error('Default shell mismatch '+route+' '+width);
  }
 }
}
