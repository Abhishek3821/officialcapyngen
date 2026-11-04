import Image from "next/image";

export function Photo({ src, alt, className = "", sizes = "(max-width: 768px) 100vw, 35vw", imageClassName = "object-cover" }: { src: string; alt: string; className?: string; sizes?: string; imageClassName?: string }) {
  return <div className={`${className.includes("absolute") ? "" : "relative"} overflow-hidden ${className}`}><Image src={src} alt={alt} fill sizes={sizes} className={imageClassName} /></div>;
}

export function Polaroid({ src, alt, className = "", sizes = "(max-width: 768px) 35vw, 15vw" }: { src: string; alt: string; className?: string; sizes?: string }) {
  return <div className={`${className.includes("absolute") ? "" : "relative"} bg-white p-2 pb-7 shadow-[0_12px_30px_#102b3f35] ${className}`}><div className="relative h-full w-full overflow-hidden bg-[#e6f0f3]"><Image src={src} alt={alt} fill sizes={sizes} className="object-cover" /></div></div>;
}

export const appBlue = "bg-[linear-gradient(115deg,#0c4268_0%,#2f79ab_58%,#79aad0_100%)]";
