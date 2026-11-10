import type {Metadata} from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HealthcareExperience from "../components/industries/healthcare";
export const metadata:Metadata={title:"Healthcare & Fitness | Capyngen",description:"Thoughtful digital experiences that bring wellbeing closer to everyday life."};
export default function HealthcarePage(){return <><Navbar/><HealthcareExperience/><Footer/></>;}
