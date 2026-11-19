import type { Metadata } from "next";
import InfoPage, { type InfoSection } from "../components/info-page";

export const metadata: Metadata = {
  title: "Data Safety Declaration | Capyngen",
  description: "How Capyngen's products handle, secure and share user data.",
};

const sections: InfoSection[] = [
  { id: "commitment", title: "Our Commitment to Data Safety", body: <>
    <p>At Capyngen Private Limited, we understand the importance of protecting personal and business information. We are committed to handling data responsibly and maintaining appropriate safeguards across our websites, software products, and digital services.</p>
    <p>Our approach to data safety focuses on transparency, responsible data handling, controlled access, and appropriate security practices.</p>
    <p>Capyngen Private Limited develops and operates Orinite, a proprietary SaaS product brand that includes Orinite HRMS, Orinite CRM, and Orinite Business Management solutions.</p>
  </> },
  { id: "types-of-data", title: "Types of Data We May Handle", body: <>
    <p>Depending on the product, features used, and information provided by customers, our services may handle the following categories of data:</p>
    <p><strong>Personal and Contact Information</strong></p>
    <ul><li>Name and contact details.</li><li>Email address and phone number.</li><li>Organisation and professional details.</li></ul>
    <p><strong>Account Information</strong></p>
    <ul><li>Account registration details.</li><li>Login credentials and authentication-related information.</li><li>User roles and account preferences.</li></ul>
    <p><strong>Business and Operational Information</strong></p>
    <ul><li>Employee and workforce-related records.</li><li>Customer and contact information.</li><li>Sales and business-related records.</li><li>Information entered by authorised users while using our products.</li></ul>
    <p><strong>Technical and Usage Information</strong></p>
    <ul><li>Device, browser, and operating system details.</li><li>IP address and technical logs.</li><li>Website or product usage information, where applicable.</li></ul>
    <p>The exact information handled may differ according to the product, configuration, and services used.</p>
  </> },
  { id: "how-we-use-data", title: "How We Use Data", body: <>
    <p>Information handled through our websites and products may be used for the following purposes:</p>
    <ul><li>Providing and maintaining software services.</li><li>Creating and managing user accounts.</li><li>Supporting HR, CRM, and business management functions.</li><li>Responding to customer enquiries and support requests.</li><li>Improving product performance and user experience.</li><li>Monitoring service functionality and security.</li><li>Identifying suspicious activity and preventing misuse.</li><li>Meeting applicable legal and regulatory requirements.</li></ul>
    <p>We aim to use information only for relevant business, operational, and service-related purposes.</p>
  </> },
  { id: "storage-and-protection", title: "Data Storage and Protection", body: <>
    <p>Capyngen Private Limited takes reasonable technical and organisational measures to protect information handled through its services.</p>
    <p>Depending on the product and infrastructure, security measures may include:</p>
    <ul><li>Access controls and user permissions.</li><li>Authentication and account security measures.</li><li>Secure infrastructure and hosting practices.</li><li>Monitoring for suspicious or unauthorised activity.</li><li>Data backup and recovery practices, where implemented.</li><li>Procedures for managing security incidents.</li></ul>
    <p>No digital system or method of data transmission can be guaranteed to be completely secure. We continuously review our practices to address security requirements and improve data protection.</p>
  </> },
  { id: "sharing", title: "Data Sharing and Third-Party Services", body: <>
    <p>Capyngen Private Limited does not sell personal information as part of its ordinary business operations.</p>
    <p>Information may be shared with authorised service providers when necessary to operate, maintain, or support our websites and products. These may include hosting providers, infrastructure vendors, communication services, and technical support providers.</p>
    <p>Information may also be disclosed where required by applicable law, legal process, or a valid request from an authorised authority.</p>
    <p>Third-party services may process information under their own terms and privacy policies, as applicable.</p>
  </> },
  { id: "data-control", title: "Customer and User Data Control", body: <>
    <p>For business products such as Orinite HRMS and Orinite CRM, customers may enter or manage information relating to their employees, customers, and business operations.</p>
    <p>Customers are responsible for ensuring that they have the necessary rights, permissions, and lawful basis to provide such information through the services.</p>
    <p>Access to business information should be managed through appropriate user permissions and account controls. Users should keep their login credentials confidential and avoid sharing account access with unauthorised individuals.</p>
  </> },
  { id: "retention-and-deletion", title: "Data Retention and Deletion", body: <>
    <p>Information is retained for the period reasonably required to provide services, fulfil business purposes, maintain records, and comply with applicable legal obligations.</p>
    <p>Where information is no longer required, appropriate steps may be taken to delete, anonymise, or securely dispose of it, subject to applicable retention requirements and contractual arrangements.</p>
    <p>Customers and users may contact us to raise data access, correction, or deletion requests. Such requests will be handled in accordance with applicable law and relevant service agreements.</p>
  </> },
  { id: "incident-management", title: "Data Security and Incident Management", body: <>
    <p>We aim to maintain appropriate processes for identifying, reviewing, and responding to potential data security incidents.</p>
    <p>Where a reportable incident occurs, we will take appropriate steps in accordance with applicable legal requirements and contractual obligations. This may include investigating the incident, taking corrective action, and providing required notifications.</p>
  </> },
  { id: "privacy-and-rights", title: "User Privacy and Rights", body: <>
    <p>Depending on applicable laws, individuals may have rights to request access to their personal information, seek correction, request deletion, or withdraw consent where processing is based on consent.</p>
    <p>For privacy or data safety-related questions, users can contact Capyngen Private Limited through the contact details provided below.</p>
  </> },
  { id: "updates", title: "Updates to This Declaration", body: <>
    <p>We may update this Data Safety Declaration when our products, services, data practices, or applicable legal requirements change. The latest version will be available on this page with the updated date.</p>
  </> },
  { id: "contact", title: "Contact Us", body: <>
    <p>For questions or concerns about data safety and information handling, contact:</p>
    <ul><li><strong>Company Name:</strong> Capyngen Private Limited</li><li><strong>Email:</strong> <a href="mailto:sales@capyngen.com">sales@capyngen.com</a></li><li><strong>Registered Address:</strong> Tower B3, Spaze i-Tech Park, Sector 49, Gurugram, Haryana 122018</li><li><strong>Website:</strong> <a href="https://capyngen.com">https://capyngen.com</a></li></ul>
  </> },
];

export default function DataSafetyDeclarationPage() {
  return <InfoPage current="/data-safety-declaration" eyebrow="Trust & Safety" title="Data Safety Declaration" intro="How Capyngen's products handle, secure and share user data." sections={sections} />;
}
