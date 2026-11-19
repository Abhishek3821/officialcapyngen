import type { Metadata } from "next";
import InfoPage, { type InfoSection } from "../components/info-page";

export const metadata: Metadata = {
  title: "Privacy Policy | Capyngen",
  description: "How Capyngen Private Limited collects, uses and protects your personal information.",
};

const sections: InfoSection[] = [
  { id: "introduction", title: "Introduction", body: <>
    <p>Capyngen Private Limited (&quot;Capyngen&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to handling personal information responsibly. This Privacy Policy explains how we collect, use, store, process, and protect information when you visit our website, contact us, or use our products and services.</p>
    <p>Capyngen Private Limited develops and operates software products and digital solutions, including Orinite, a proprietary SaaS product brand offering business management solutions such as Orinite HRMS and Orinite CRM.</p>
    <p>By accessing our website or using our services, you acknowledge that you have read this Privacy Policy.</p>
  </> },
  { id: "information-we-collect", title: "Information We May Collect", body: <>
    <p>Depending on how you interact with us, we may collect the following categories of information:</p>
    <p><strong>Personal Information</strong></p>
    <ul><li>Name and contact details, such as email address and phone number.</li><li>Company name, job title, and business-related information.</li><li>Information submitted through contact forms, enquiries, or support requests.</li></ul>
    <p><strong>Account and Service Information</strong></p>
    <ul><li>Login and account details required to access our services.</li><li>User preferences and configuration information.</li><li>Information entered or uploaded while using our software products.</li></ul>
    <p><strong>Technical Information</strong></p>
    <ul><li>IP address, browser type, device information, and operating system.</li><li>Website usage information, pages visited, and interaction data.</li><li>Cookies and similar technologies, where applicable.</li></ul>
    <p>We collect only the information reasonably required for the relevant business or service purpose.</p>
  </> },
  { id: "how-we-use-information", title: "How We Use Your Information", body: <>
    <p>We may use collected information to:</p>
    <ul><li>Provide, operate, and maintain our websites and software products.</li><li>Create and manage user accounts.</li><li>Respond to enquiries and customer support requests.</li><li>Improve product functionality, performance, and user experience.</li><li>Communicate important service updates and relevant information.</li><li>Maintain website security and prevent misuse.</li><li>Meet legal, regulatory, and contractual obligations.</li></ul>
    <p>We do not use personal information for purposes unrelated to the reason it was collected unless permitted by applicable law or with appropriate consent.</p>
  </> },
  { id: "cookies", title: "Cookies and Tracking Technologies", body: <>
    <p>Our website may use cookies and similar technologies to improve functionality, understand website usage, remember preferences, and support security.</p>
    <p>You can manage cookies through your browser settings. Disabling certain cookies may affect some website features.</p>
  </> },
  { id: "sharing", title: "Sharing of Information", body: <>
    <p>Capyngen Private Limited does not sell personal information as part of its ordinary business operations.</p>
    <p>We may share information with:</p>
    <ul><li><strong>Service Providers:</strong> Vendors supporting hosting, infrastructure, analytics, communication, and technical operations.</li><li><strong>Business Partners:</strong> Where sharing is necessary to provide a requested service or support a business relationship.</li><li><strong>Legal Authorities:</strong> When disclosure is required by applicable law, legal process, or a valid government request.</li><li><strong>Business Transfers:</strong> In connection with a merger, restructuring, acquisition, or transfer of business assets, subject to applicable legal requirements.</li></ul>
    <p>Third-party service providers are expected to handle information in accordance with applicable contractual and legal obligations.</p>
  </> },
  { id: "security", title: "Data Storage and Security", body: <>
    <p>We take reasonable technical and organisational measures designed to protect information against unauthorised access, loss, misuse, alteration, or disclosure.</p>
    <p>These measures may include access controls, authentication practices, monitoring, and secure infrastructure, depending on the service and information involved.</p>
    <p>However, no method of online transmission or electronic storage can be guaranteed to be completely secure.</p>
  </> },
  { id: "retention", title: "Data Retention", body: <>
    <p>We retain personal information only for as long as reasonably necessary to fulfil the purposes described in this Policy, provide our services, resolve disputes, maintain business records, and meet applicable legal requirements.</p>
    <p>When information is no longer required, we take appropriate steps to delete, anonymise, or securely dispose of it, subject to legal and operational requirements.</p>
  </> },
  { id: "your-rights", title: "Your Privacy Rights", body: <>
    <p>Depending on applicable law, you may have rights to:</p>
    <ul><li>Request access to personal information held about you.</li><li>Request correction or updating of inaccurate information.</li><li>Request deletion of information where legally applicable.</li><li>Withdraw consent where processing is based on consent.</li><li>Raise questions or complaints about how your information is handled.</li></ul>
    <p>To submit a privacy-related request, contact us using the details provided below. We may need to verify your identity before responding.</p>
  </> },
  { id: "third-party", title: "Third-Party Websites and Services", body: <>
    <p>Our website or products may contain links to third-party websites, tools, or services. These services operate under their own privacy policies. Capyngen Private Limited is not responsible for the privacy practices or content of external websites.</p>
  </> },
  { id: "children", title: "Children's Privacy", body: <>
    <p>Our business services are intended for organisations and their authorised users, not for children to use independently. We do not knowingly collect children&apos;s personal information without the required authorisation or legal basis.</p>
  </> },
  { id: "changes", title: "Changes to This Privacy Policy", body: <>
    <p>We may update this Privacy Policy from time to time to reflect changes in our services, business practices, or applicable laws. Updated versions will be published on this page with a revised &quot;Last Updated&quot; date.</p>
  </> },
  { id: "contact", title: "Contact Us", body: <>
    <p>For questions, concerns, or requests related to this Privacy Policy, contact:</p>
    <ul><li><strong>Company Name:</strong> Capyngen Private Limited</li><li><strong>Email:</strong> <a href="mailto:sales@capyngen.com">sales@capyngen.com</a></li><li><strong>Registered Address:</strong> Tower B3, Spaze i-Tech Park, Sector 49, Gurugram, Haryana 122018</li><li><strong>Website:</strong> <a href="https://capyngen.com">https://capyngen.com</a></li></ul>
  </> },
];

export default function PrivacyPolicyPage() {
  return <InfoPage current="/privacy-policy" eyebrow="Legal" title="Privacy Policy" intro="How Capyngen Private Limited collects, uses and protects your personal information." sections={sections} />;
}
