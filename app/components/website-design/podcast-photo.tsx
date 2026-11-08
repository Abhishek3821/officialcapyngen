import Image from "next/image";
import styles from "./sections.module.css";

export default function PodcastPhoto({
  index,
  className = "",
  alt,
  sizes = "(max-width: 600px) 100vw, 35vw",
}: {
  index?: number;
  className?: string;
  alt: string;
  sizes?: string;
}) {
  return (
    <div className={`${styles.photo} ${className}`}>
      <div
        className={styles.cropFrame}
        style={index === undefined ? undefined : { width: "300%", left: `${index * -100}%` }}
      >
        <Image
          src="/images/website-design/podcast-studio.webp"
          alt={alt}
          fill
          sizes={sizes}
          className={styles.image}
          style={index === undefined ? undefined : { objectPosition: "center 38%" }}
        />
      </div>
    </div>
  );
}
