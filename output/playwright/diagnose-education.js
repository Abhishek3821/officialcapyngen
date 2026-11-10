async page => {
 await page.goto('http://localhost:3000/education');
 await page.setViewportSize({width:820,height:1000});
 const report=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,photos:Array.from(document.querySelectorAll('main [role="img"]')).slice(0,7).map(el=>{const child=el.firstElementChild;return {label:el.getAttribute('aria-label'),box:[el.clientWidth,el.clientHeight],child:[child.clientWidth,child.clientHeight],background:getComputedStyle(child).backgroundImage,position:getComputedStyle(child).position};}),overflow:Array.from(document.querySelectorAll('body *')).filter(el=>{const r=el.getBoundingClientRect();return r.width>innerWidth&&getComputedStyle(el).position!=='absolute';}).map(el=>({tag:el.tagName,class:el.className,width:el.getBoundingClientRect().width}))}));
 throw new Error(JSON.stringify(report));
}
