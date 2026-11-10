async page => {
 await page.goto('http://localhost:3000/banking');
 await page.evaluate(()=>{
   window.modalEvents=[];
   const gallery=document.querySelector('[aria-label="Creative project gallery"]');
   for(const name of ['pointerdown','pointerup','pointermove','click','focusin']) gallery.addEventListener(name,e=>window.modalEvents.push({name,target:e.target.getAttribute('aria-label'),detail:e.detail,x:e.clientX}),true);
 });
 const opener=page.getByRole('button',{name:'View Quiet Form',exact:true});
 await opener.click();
 const report=await page.evaluate(()=>({events:window.modalEvents,dialog:document.querySelector('dialog').outerHTML.slice(0,300),active:document.activeElement.outerHTML.slice(0,120)}));
 throw new Error(JSON.stringify(report));
}
