async page=>{
 await page.goto('http://localhost:3000/energy-resources-utilities');
 for(const width of [1920,1440,1024,820,640,390,320]){
  await page.setViewportSize({width,height:1000});
  const report=await page.evaluate(()=>{
   const nav=document.querySelector('header nav').getBoundingClientRect();
   const panels=[document.querySelector('[aria-label="Our approach"]'),document.getElementById('energy-closing-title').closest('section')].map(el=>{const r=el.getBoundingClientRect();return{left:r.left,width:r.width};});
   return{nav:{left:nav.left,width:nav.width},panels,overflow:document.documentElement.scrollWidth>innerWidth};
  });
  if(report.overflow||report.panels.some(panel=>Math.abs(panel.left-report.nav.left)>1||Math.abs(panel.width-report.nav.width)>1))throw new Error(JSON.stringify({width,...report}));
 }
 await page.setViewportSize({width:1440,height:1000});
 await page.getByRole('region',{name:'Smarter systems for a connected world.'}).screenshot({path:'output/playwright/energy-closing-wide.png'});
}
