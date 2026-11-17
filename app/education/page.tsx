import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import EducationExperience from "../components/industries/education";
export const metadata: Metadata = {title:"Education IT Services Built for Future Learning | Capyngen",description:"End-to-end EdTech software development for schools, universities, and learning ventures, from custom LMS and cloud-based virtual classrooms to eLearning app development."};
export default function EducationPage(){return <><Navbar/><EducationExperience/><Footer/></>;}
