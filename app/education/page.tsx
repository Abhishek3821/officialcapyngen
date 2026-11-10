import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import EducationExperience from "../components/industries/education";
export const metadata: Metadata = {title:"Education | Capyngen",description:"Thoughtful digital experiences and connected spaces for education."};
export default function EducationPage(){return <><Navbar/><EducationExperience/><Footer/></>;}
