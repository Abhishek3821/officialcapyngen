import Image from "next/image";

const posts = [
  { image: "/images/brands-shine/floral.webp", alt: "A fashion model wearing a bold yellow outfit", background: "#f2ac50", headline: "NEW", label: "A fresh perspective", variant: "launch" },
  { image: "/images/web-development/portrait.webp", alt: "A beauty portrait with blue and lilac lighting", background: "#c4e7e3", headline: "SOCIAL MEDIA", label: "Make your brand impossible to scroll past.", variant: "editorial" },
  { image: "/images/web-development/product.webp", alt: "A minimal beauty product styled in soft light", background: "#f3bacc", headline: "YOUR DAILY GLOW", label: "Made for your everyday", variant: "product" },
  { image: "/images/brands-shine/blue.webp", alt: "A fashion portrait with sunglasses and a burgundy coat", background: "#f5a76d", headline: "a little more you.", label: "Velora / Everyday confidence", variant: "quote" },
  { image: "/images/hero-woman.jpg", alt: "A beauty editorial portrait beside glowing studio lights", background: "#e9d4d5", headline: "MAKE IT A MOMENT", label: "Beauty without the rules", variant: "moment" },
  { image: "/images/brands-shine/green.webp", alt: "A playful streetwear portrait in a bright red sweatshirt", background: "#c2d5b5", headline: "Your vibe. Your rules.", label: "Express yourself", variant: "stickers" },
  { image: "/images/brands-shine/coral.webp", alt: "A fashion campaign featuring a pastel-blue outfit", background: "#e1c7ea", headline: "THE STYLE EDIT", label: "A little inspiration for your feed", variant: "collage" },
  { image: "/images/web-development/portrait.webp", alt: "A contemporary portrait with blue-toned beauty lighting", background: "#c6b2e9", headline: "stay playful", label: "Good energy looks great on you", variant: "playful" },
  { image: "/images/hero-woman.jpg", alt: "An expressive portrait for a beauty campaign", background: "#92cbdc", headline: "BEAUTY IN EVERY MOMENT", label: "Velora Beauty", variant: "beauty" },
];

function SocialPost({ post }: { post: (typeof posts)[number] }) {
  return (
    <figure className="group relative isolate aspect-square min-w-0 overflow-hidden bg-[#b5d8dc]" style={{ backgroundColor: post.background }}>
      <Image src={post.image} alt={post.alt} fill sizes="(max-width: 767px) 33vw, (max-width: 1600px) 20vw, 300px" className={`object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transform-none ${post.variant === "product" ? "object-center" : "object-[center_35%]"}`} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {post.variant === "launch" && <><span className="absolute inset-y-0 left-0 w-[37%] bg-[#f4ac52]/75" /><span className="absolute top-[12%] left-[6%] text-[clamp(30px,5vw,80px)] leading-[.85] font-black tracking-[-.08em] text-white [writing-mode:vertical-rl]">{post.headline}</span><span className="absolute right-3 bottom-3 -rotate-6 bg-[#eaf497] px-2 py-1 text-[clamp(7px,.8vw,12px)] font-semibold text-[#223b31]">{post.label}</span></>}
        {post.variant === "editorial" && <><span className="absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-[#d6eee8] to-transparent" /><span className="absolute top-[4%] left-[5%] text-[clamp(13px,2.2vw,34px)] leading-[.85] font-black tracking-[-.06em] text-[#18343c]">SOCIAL<br />MEDIA</span><span className="absolute right-[4%] bottom-[8%] w-[54%] rotate-[-7deg] bg-[#f49dbd] p-2 text-[clamp(7px,.85vw,13px)] leading-tight font-medium text-[#303141]">{post.label}</span></>}
        {post.variant === "product" && <><span className="absolute inset-x-0 top-0 bg-[#f3bacc]/90 px-[6%] py-[5%] text-[clamp(10px,1.3vw,20px)] leading-none font-bold tracking-[-.05em] text-[#53384c]">{post.headline}</span><span className="absolute right-[5%] bottom-[5%] flex size-[30%] rotate-12 items-center justify-center rounded-full border border-[#7e4878] bg-[#edc5ef] p-2 text-center font-serif text-[clamp(9px,1vw,15px)] leading-none italic text-[#6c3470]">Glow your own way</span></>}
        {post.variant === "quote" && <><span className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-[#ffcb9a]/95 to-transparent" /><span className="absolute top-[7%] left-[6%] max-w-[55%] font-serif text-[clamp(16px,2.4vw,38px)] leading-[.9] italic tracking-[-.06em] text-[#a63836]">{post.headline}</span><span className="absolute right-[5%] bottom-[5%] rounded-full bg-[#fff8e8] px-2 py-1 text-[clamp(6px,.7vw,10px)] text-[#463423]">{post.label}</span></>}
        {post.variant === "moment" && <><span className="absolute inset-0 bg-[#bba3cc]/15" /><span className="absolute top-[10%] right-[8%] left-[8%] rotate-[-8deg] border border-white/70 px-2 py-1 text-center text-[clamp(10px,1.5vw,23px)] font-black tracking-[-.05em] text-white">{post.headline}</span><span className="absolute right-[7%] bottom-[6%] font-serif text-[clamp(11px,1.5vw,23px)] italic text-white">Velora.</span></>}
        {post.variant === "stickers" && <><span className="absolute top-[8%] left-[7%] rounded-full bg-[#bde5de] px-3 py-1 text-[clamp(7px,.9vw,14px)] font-semibold text-[#244b41]">{post.label}</span><span className="absolute right-[5%] bottom-[18%] left-[5%] rotate-[-8deg] bg-[#d7ed76] px-2 py-1 text-center text-[clamp(11px,1.6vw,25px)] font-bold tracking-[-.05em] text-[#2e4225]">{post.headline}</span></>}
        {post.variant === "collage" && <><span className="absolute inset-y-0 right-0 w-[32%] bg-[#f0e7f3]/90" /><span className="absolute top-[9%] right-[3%] w-[25%] text-[clamp(9px,1.6vw,24px)] leading-[.9] font-black tracking-[-.06em] text-[#293748]">THE<br />STYLE<br />EDIT</span><span className="absolute bottom-[8%] left-[7%] -rotate-6 rounded-full bg-[#f2a8cf] px-3 py-1 text-[clamp(7px,.9vw,14px)] text-[#543048]">Wear your confidence.</span></>}
        {post.variant === "playful" && <><span className="absolute inset-0 bg-[#a16be3]/20" /><span className="absolute top-[7%] left-[7%] -rotate-12 text-[clamp(20px,3vw,46px)] text-[#e2db88]">✦</span><span className="absolute right-[5%] bottom-[9%] left-[5%] -rotate-6 font-serif text-[clamp(21px,3.4vw,52px)] leading-none italic tracking-[-.06em] text-[#ece2ff]">{post.headline}</span></>}
        {post.variant === "beauty" && <><span className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#193d55]/80 to-transparent" /><span className="absolute right-[7%] bottom-[8%] left-[7%] max-w-[75%] text-[clamp(12px,1.8vw,28px)] leading-[.95] font-bold tracking-[-.04em] text-[#fff6ee]">{post.headline}</span><span className="absolute top-[6%] right-[7%] text-[clamp(8px,1vw,15px)] font-medium text-white">VELORA</span></>}
      </div>
      <figcaption className="sr-only">{post.headline}. {post.label}. Social media design concept.</figcaption>
    </figure>
  );
}

export default function SocialProjects() {
  return (
    <section id="social-projects" aria-labelledby="social-projects-heading" className="bg-[#1c3b65] px-5 py-8 text-[#fffdf7] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
      <div className="mx-auto grid max-w-[1560px] grid-cols-1 gap-8 md:grid-cols-[minmax(0,.82fr)_minmax(0,1fr)] md:gap-8 lg:gap-12">
        <div className="flex min-w-0 flex-col items-start justify-between">
          <div className="pt-1 lg:pt-3">
            <h3 className="text-[clamp(25px,2.7vw,42px)] leading-[1.05] font-bold tracking-[-.045em]">Social Media For<br /><span className="text-[.8em] tracking-[-.02em]">VELORA BEAUTY</span></h3>
            <ul className="mt-6 max-w-[460px] space-y-2 font-[Georgia,'Times_New_Roman',serif] text-[13px] leading-[1.5] text-[#e0e8ee] lg:mt-8 lg:text-[16px]">
              <li className="flex gap-2"><span aria-hidden="true">•</span><span>Created engaging social media content aligned with the brand’s visual identity.</span></li>
              <li className="flex gap-2"><span aria-hidden="true">•</span><span>Planned and developed content for Instagram and other social platforms.</span></li>
              <li className="flex gap-2"><span aria-hidden="true">•</span><span>Crafted reels, posts, and educational graphics to increase engagement.</span></li>
            </ul>
          </div>
          <h2 id="social-projects-heading" className="mt-8 font-[family-name:var(--font-oswald)] text-[clamp(58px,8.4vw,132px)] leading-[.98] font-medium tracking-[-.045em] uppercase md:mt-5">Previous<br />Projects</h2>
        </div>
        <div className="grid min-w-0 grid-cols-3 gap-2.5 sm:gap-3 lg:gap-4">
          {posts.map((post) => <SocialPost key={post.variant} post={post} />)}
        </div>
      </div>
    </section>
  );
}
