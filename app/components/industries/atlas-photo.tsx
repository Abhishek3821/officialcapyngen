"use client";

import { useEffect, useRef } from "react";
import styles from "./shared.module.css";

export default function AtlasPhoto({ image, scene = 0, label, className = "" }: { image: string; scene?: number; label: string; className?: string }) {
  const photo = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = photo.current;
    if (!element) return;
    const resize = () => {
      const width = element.clientWidth;
      const height = element.clientHeight;
      const tileWidth = Math.max(width, height * 1.5);
      const tileHeight = tileWidth / 1.5;
      element.style.backgroundSize = `${tileWidth * 2}px ${tileHeight * 2}px`;
      element.style.backgroundPosition = `${(width - tileWidth) / 2 - scene % 2 * tileWidth}px ${(height - tileHeight) / 2 - Math.floor(scene / 2) * tileHeight}px`;
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(element);
    return () => observer.disconnect();
  }, [scene]);
  return <div ref={photo} role="img" aria-label={label} className={`${styles.photo} ${className}`} style={{ backgroundImage: `url(${image})`, backgroundPosition: `${scene % 2 * 100}% ${Math.floor(scene / 2) * 100}%` }} />;
}
