import type {Metadata} from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta from "../components/cleaning-cta";
import HealthcareExperience from "../components/industries/healthcare";
export const metadata:Metadata={title:"Healthcare Software Development Company | Capyngen",description:"As a leading Custom Healthcare IT solution provider, Capyngen builds hospital management software, telemedicine platforms, digital fitness solutions and patient management systems."};
export default function HealthcarePage(){return <><Navbar/><HealthcareExperience/><CleaningCta /><Footer/></>;}
