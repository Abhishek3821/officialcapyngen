import type {Metadata} from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LifeScienceExperience from "../components/industries/life-science";
export const metadata:Metadata={title:"Life Science | Capyngen",description:"Strong foundations for life science. Thoughtful platforms, connected teams and trusted digital experiences."};
export default function LifeSciencePage(){return <><Navbar/><LifeScienceExperience/><Footer/></>;}
