import type {Metadata} from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CleaningCta from "../components/cleaning-cta";
import CapitalMarketExperience from "../components/industries/capital-market";
export const metadata:Metadata={title:"Capital Markets IT Services | Capyngen",description:"Bring your teams, systems, and data together on one platform. Capital market software development, trading platforms, KYC and portfolio management solutions."};
export default function CapitalMarketPage(){return <><Navbar/><CapitalMarketExperience/><CleaningCta /><Footer/></>;}
