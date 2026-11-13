import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import EcommerceDesignHero from "../components/ecommerce-design/hero";
import BrandVision from "../components/brand-vision";
import EcommerceWhyChoose from "../components/ecommerce-design/why-choose";
import BrandsShine from "../components/brands-shine";
import SocialProjects from "../components/social-projects";
import { StepsSection } from "../components/custom-ai/services";
import CrmGrowth from "../components/crm-growth";
import EcommerceFaq from "../components/ecommerce-design/faq";
import WebDevelopmentCta from "../components/web-development-cta";

export const metadata: Metadata = {
  title: "Ecommerce Website Design Company in India | Capyngen",
  description: "We are one of the leading ecommerce website development companies in India. We design & develop E-Commerce solutions that Drive Growth & Conversions.",
};

const processSteps = [
  { number: "01", title: "Brainstorm", description: "Listening to the customer is the most important step in any business. To lay a strong foundation, the first step is to hear them out." },
  { number: "02", title: "Design", description: "Design is in Capyngen's favour; we let our designs say the right thing and have a more influential touch. We communicate through what we show." },
  { number: "03", title: "Develop", description: "Ecommerce development is the act of actually starting to bring into reality the idea that has taken shape in your mind. We are excited to ensure that you have the best possible version of yourself." },
  { number: "04", title: "Deliver", description: "Capyngen makes sure that we never fail to deliver to you what we promised whenever we promised to do so. Our implementation comes with dedicated teams to make sure your everyday problems are taken care of." },
];

export default function EcommerceDesignPage() {
  return <>
    <Navbar />
    <main id="main-content" tabIndex={-1} className="w-full min-w-0 max-w-full overflow-x-clip outline-none">
      <EcommerceDesignHero />
      <BrandVision />
      <EcommerceWhyChoose />
      <BrandsShine />
      <SocialProjects />
      <StepsSection id="ecommerce-process" headingId="ecommerce-process-heading" eyebrow="Brainstorm. Design. Develop. Deliver." heading="Our Process" items={processSteps} />
      <CrmGrowth />
      <EcommerceFaq />
      <WebDevelopmentCta />
    </main>
    <Footer />
  </>;
}
