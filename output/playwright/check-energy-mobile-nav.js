async page=>{
 await page.setViewportSize({width:390,height:844});
 await page.goto('http://localhost:3000/education');
 await page.evaluate(()=>scrollTo(0,0));
 const banner=page.getByRole('banner');
 await banner.getByRole('button',{name:'Open navigation',exact:true}).click();
 await banner.getByRole('button',{name:'Industries',exact:true}).filter({visible:true}).click();
 await banner.getByRole('link',{name:'Energy, Resources & Utilities',exact:true}).filter({visible:true}).click();
 await page.waitForURL('**/energy-resources-utilities');
 await page.getByRole('heading',{name:'The art of powering possibilities.',exact:true}).waitFor();
 if(await banner.getByRole('button',{name:'Open navigation',exact:true}).getAttribute('aria-expanded')!=='false')throw new Error('Mobile menu stayed open');
}
