"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import DismissibleDialog from "../dismissible-dialog";
import styles from "./villa-plans.module.css";

const villas = [
  { name: "Villa A1", beds: 3, baths: 3, area: 180, price: "445,000", scene: 0, description: "A warm, open home with generous terraces, natural stone finishes and a pool at the heart of outdoor living." },
  { name: "Villa B2", beds: 4, baths: 4, area: 220, price: "675,000", scene: 1, description: "Bold architectural lines meet a peaceful mountain setting, with light-filled rooms and space to gather." },
  { name: "Villa C3", beds: 5, baths: 5, area: 300, price: "890,000", scene: 2, description: "Expansive living spaces, layered terraces and a generous pool create an effortless connection to the outdoors." },
];

export default function BankingVillaPlans() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(0);
  const [allOpen, setAllOpen] = useState(false);
  const villa = villas[selected];

  function open(index: number) {
    setSelected(index);
    setAllOpen(false);
    dialog.current?.showModal();
  }

  return <section className={styles.section} aria-labelledby="villa-plans-title">
    <header className={styles.heading}><div><p className={styles.eyebrow}>The villa collection</p><h2 id="villa-plans-title">Plans & pricing</h2></div><button type="button" className={styles.viewAll} onClick={() => { setAllOpen(true); dialog.current?.showModal(); }}>View all villas <span aria-hidden="true">→</span></button></header>
    <div className={styles.cards}>{villas.map((item,index)=><article className={styles.card} key={item.name}>
      <button type="button" className={styles.imageButton} aria-label={`Explore ${item.name}`} onClick={()=>open(index)}><span role="img" aria-label={`${item.name}: contemporary villa with a landscaped garden and swimming pool`} className={styles.image} style={{backgroundPosition:`50% ${item.scene*50}%`}} /></button>
      <div className={styles.cardBody}><h3>{item.name}</h3><dl className={styles.details}><div><dt className={styles.srOnly}>Bedrooms</dt><dd>{item.beds} bedrooms</dd></div><div><dt className={styles.srOnly}>Bathrooms</dt><dd>{item.baths} bathrooms</dd></div><div><dt className={styles.srOnly}>Floor area</dt><dd>{item.area} m²</dd></div></dl><div className={styles.priceRow}><p><span>From</span> €{item.price}</p><button type="button" className={styles.arrow} onClick={()=>open(index)} aria-label={`View ${item.name} plans and pricing`}>→</button></div></div>
    </article>)}</div>
    <p className={styles.note}>Illustrative villa concepts and starting prices.</p>
    <DismissibleDialog ref={dialog} className={styles.dialog} aria-labelledby="villa-dialog-title">
      <button type="button" className={styles.close} onClick={()=>dialog.current?.close()} aria-label="Close villa details">×</button>
      {allOpen ? <div className={styles.allVillas}><p className={styles.eyebrow}>Explore the collection</p><h3 id="villa-dialog-title">A space for every possibility.</h3><div className={styles.list}>{villas.map((item,index)=><button type="button" key={item.name} onClick={()=>{setSelected(index);setAllOpen(false);}}><span role="img" aria-label={item.name} className={styles.thumbnail} style={{backgroundPosition:`50% ${item.scene*50}%`}} /><span><strong>{item.name}</strong><span>{item.beds} bedrooms · {item.area} m²</span><span>From €{item.price}</span></span><span aria-hidden="true">↗</span></button>)}</div></div> : <><div role="img" aria-label={`${villa.name} with private pool`} className={styles.dialogImage} style={{backgroundPosition:`50% ${villa.scene*50}%`}} /><div className={styles.dialogBody}><p className={styles.eyebrow}>A considered way of living</p><h3 id="villa-dialog-title">{villa.name}</h3><p className={styles.dialogDescription}>{villa.description}</p><p className={styles.dialogMeta}>{villa.beds} bedrooms · {villa.baths} bathrooms · {villa.area} m²</p><p className={styles.dialogPrice}>From €{villa.price}</p><Link href="/contact-us" className={styles.contact}>Discuss your project <span aria-hidden="true">↗</span></Link><p className={styles.note}>Illustrative villa concept and starting price.</p></div></>}
    </DismissibleDialog>
  </section>;
}
