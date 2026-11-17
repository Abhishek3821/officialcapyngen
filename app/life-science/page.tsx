import type {Metadata} from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta from "../components/cleaning-cta";
import LifeScienceExperience from "../components/industries/life-science";
export const metadata:Metadata={title:"Life Science Software Development | Capyngen",description:"Build future for life science software development. Integrating art, science and technology to help improve patient care."};
export default function LifeSciencePage(){return <><Navbar/><LifeScienceExperience/><CleaningCta /><Footer/></>;}
