import type {Metadata} from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CapitalMarketExperience from "../components/industries/capital-market";
export const metadata:Metadata={title:"Capital Market | Capyngen",description:"A new perspective on connected capital markets, platforms and digital experiences."};
export default function CapitalMarketPage(){return <><Navbar/><CapitalMarketExperience/><Footer/></>;}
