const desertImages = {
  dunes: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1000&q=85",
  landscape: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=1000&q=85",
  adventure: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",
  sand: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85",
};

const tiles = [
  { id: "top-dunes", path: "M25 8H429Q455 8 438 29L241 226Q228 240 214 225L13 29Q-3 8 25 8Z", image: desertImages.dunes, x: 0, y: 0, width: 455, height: 240 },
  { id: "top-landscape", path: "M492 8H675Q701 8 683 30L489 225Q475 240 461 225L347 111Q333 97 348 82L411 19Q422 8 436 8Z", image: desertImages.landscape, x: 330, y: 0, width: 370, height: 240 },
  { id: "center-dunes", path: "M370 134 478 242Q490 254 478 268L369 380Q356 394 342 380L232 268Q219 254 232 240L342 134Q356 120 370 134Z", image: desertImages.dunes, x: 220, y: 123, width: 273, height: 275 },
  { id: "right-adventure", path: "M684 77Q697 63 697 86V432Q697 459 678 440L507 268Q493 254 507 240Z", image: desertImages.adventure, x: 490, y: 62, width: 210, height: 401 },
  { id: "bottom-landscape", path: "M216 285 394 465Q415 487 385 487H208Q193 487 182 477L112 406Q98 392 112 378L190 285Q203 271 216 285Z", image: desertImages.sand, x: 100, y: 270, width: 320, height: 225 },
  { id: "bottom-dunes", path: "M497 285 682 469Q701 487 675 487H444Q429 487 417 475L381 439Q367 425 381 411L469 285Q483 271 497 285Z", image: desertImages.landscape, x: 366, y: 270, width: 335, height: 225 },
];

function DesertCollage() {
  return (
    <svg viewBox="0 0 705 495" role="img" aria-labelledby="mood-collage-title" className="block h-auto w-full">
      <title id="mood-collage-title">Desert landscapes arranged in a geometric brand inspiration collage</title>
      <defs>
        {tiles.map((tile) => <clipPath key={tile.id} id={`mood-${tile.id}`}><path d={tile.path} /></clipPath>)}
      </defs>
      {tiles.map((tile) => (
        <g key={tile.id} clipPath={`url(#mood-${tile.id})`}>
          <path d={tile.path} fill="#df8a30" />
          <image href={tile.image} x={tile.x} y={tile.y} width={tile.width} height={tile.height} preserveAspectRatio="xMidYMid slice" />
        </g>
      ))}
    </svg>
  );
}

export default function MoodBoard() {
  return (
    <section aria-labelledby="mood-board-heading" className="overflow-hidden bg-black px-5 py-8 text-white sm:px-7 lg:px-8 lg:py-5">
      <div className="mx-auto grid max-w-[1440px] items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-6">
        <div className="relative z-10 flex h-full flex-col lg:py-1">
          <p className="text-[10px] font-semibold tracking-[0.35em] sm:text-xs">WWW.EXAMPLE.COM</p>

          <div className="mt-9 sm:mt-12 lg:mt-14">
            <p className="font-serif text-[46px] leading-[.8] font-normal italic tracking-[-0.07em] text-[#f5cf80] sm:text-[54px]">Brand</p>
            <h2 id="mood-board-heading" className="mt-2 text-[clamp(30px,3.5vw,52px)] leading-none font-extrabold tracking-[-0.035em]">MOOD BOARD</h2>
          </div>

          <div className="mt-9 max-w-[440px] lg:mt-12">
            <h3 className="text-xs font-bold sm:text-sm">PROJECT NAME</h3>
            <p className="mt-3 max-w-[400px] text-[10px] leading-[1.35] uppercase text-white/85 sm:text-[11px]">
              A brand inspired by wide-open spaces, warm desert light, and the freedom to explore. Natural textures and bold geometry bring a sense of adventure to every detail.
            </p>
          </div>

          <div className="mt-8 grid max-w-[440px] grid-cols-1 items-center gap-5 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] sm:gap-5">
            <div>
              <h3 className="text-xs font-bold">COLOR</h3>
              <div className="mt-3 flex gap-3">
                {[{ color: "#ffffff", label: "#000000" }, { color: "#df8a30", label: "#DF8A30" }, { color: "#f5c160", label: "#F5C160" }].map((swatch) => (
                  <div key={swatch.label} className="min-w-0 flex-1">
                    <div className="h-9 w-full sm:h-10" style={{ backgroundColor: swatch.color }} />
                    <p className="mt-2 text-[8px] sm:text-[9px]">{swatch.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-y border-white/55 py-3 text-[clamp(11px,1.3vw,18px)] leading-[1.25] tracking-[.22em]" aria-label="Brand typography specimen">
              <p>ABCDEFGHIJKL</p>
              <p>MNOPQRSTUVW</p>
              <p>XYZ0123456</p>
            </div>
          </div>

          <div className="mt-8 grid max-w-[440px] grid-cols-2 gap-5 border-y border-white/55 py-5 sm:gap-7">
            <div>
              <h3 className="text-[11px] font-bold sm:text-xs">MOOD BOARD 2025–29</h3>
              <p className="mt-3 text-[9px] leading-[1.35] uppercase text-white/85 sm:text-[10px]">Warm tones, sculptural landscapes, and quiet moments. A visual direction rooted in nature and exploration.</p>
            </div>
            <div className="border-l-2 border-white/80 pl-5 sm:pl-7">
              <h3 className="text-[11px] font-bold sm:text-xs">NOTES</h3>
              <p className="mt-3 text-[9px] leading-[1.35] uppercase text-white/85 sm:text-[10px]">Pair minimal typography with cinematic imagery. Keep the palette earthy and give each composition room to breathe.</p>
            </div>
          </div>

          <div className="mt-3 flex max-w-[440px] flex-wrap items-end justify-between gap-3 text-[9px] font-semibold">
            <div><p className="text-xs font-bold sm:text-sm">MATTHEW SMITH</p><p className="mt-1">DESIGN BY</p></div>
            <span aria-hidden="true" className="text-[#df8a30]">▮</span>
            <span>MINIMAL</span>
            <span aria-hidden="true" className="text-[#df8a30]">▮</span>
            <span>BRAND</span>
          </div>
        </div>

        <div className="min-w-0"><DesertCollage /></div>
      </div>
    </section>
  );
}
