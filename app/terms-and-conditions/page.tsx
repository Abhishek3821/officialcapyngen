import type { Metadata } from "next";
import Link from "next/link";
import InfoPage, { type InfoSection } from "../components/info-page";

export const metadata: Metadata = {
  title: "Terms & Conditions | Capyngen",
  description: "The terms that govern your access to and use of Capyngen Private Limited's website, software products, digital platforms, and related services.",
};

const sections: InfoSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    body: <>
      <p>Welcome to Capyngen Private Limited. These Terms &amp; Conditions govern your access to and use of our website, software products, digital platforms, and related services.</p>
      <p>Capyngen Private Limited is an IT technology and digital solutions company that develops software products, SaaS platforms, enterprise applications, and digital business solutions. Our product portfolio includes Orinite, a proprietary SaaS product brand owned, developed, managed, and operated by Capyngen Private Limited.</p>
      <p>By accessing our website or using our services, you agree to these Terms &amp; Conditions. If you do not agree with any part of these terms, please do not use the relevant website or service.</p>
    </>,
  },
  {
    id: "use-of-website",
    title: "Use of Our Website and Services",
    body: <>
      <p>You agree to use our website and services only for lawful purposes. You must not:</p>
      <ul>
        <li>Use our website for any unlawful, fraudulent, or unauthorised activity.</li>
        <li>Attempt to access restricted systems, accounts, or information.</li>
        <li>Disrupt, damage, or interfere with website functionality or security.</li>
        <li>Upload malicious code, harmful files, or unauthorised content.</li>
        <li>Copy, reproduce, or misuse our website content or intellectual property without permission.</li>
      </ul>
      <p>You are responsible for ensuring that the information you provide to us is accurate and up to date.</p>
    </>,
  },
  {
    id: "products-and-services",
    title: "Our Products and Services",
    body: <>
      <p>Capyngen Private Limited develops and operates technology solutions across different business areas. Our product portfolio includes:</p>
      <ul>
        <li><strong>Orinite HRMS:</strong> Human Resource Management System.</li>
        <li><strong>Orinite CRM:</strong> Customer Relationship Management Platform.</li>
        <li><strong>Orinite Business Management:</strong> Integrated business management solutions.</li>
      </ul>
      <p>Product features, availability, functionality, and service terms may vary. Specific subscription plans, pricing, support arrangements, and usage conditions may be governed by separate agreements or product-specific terms.</p>
    </>,
  },
  {
    id: "user-accounts",
    title: "User Accounts and Responsibilities",
    body: <>
      <p>Certain services may require account registration. If you create an account, you are responsible for:</p>
      <ul>
        <li>Providing accurate registration information.</li>
        <li>Keeping your login credentials confidential.</li>
        <li>Restricting unauthorised access to your account.</li>
        <li>Informing us promptly if you suspect unauthorised account activity.</li>
        <li>Ensuring that your use of the service complies with applicable laws.</li>
      </ul>
      <p>Capyngen may restrict or suspend access where there is a reasonable concern about misuse, security risks, or violation of these Terms, subject to applicable law and contractual obligations.</p>
    </>,
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property Rights",
    body: <>
      <p>All content and materials on the Capyngen website, including text, graphics, logos, designs, software, and other proprietary materials, are owned by or licensed to Capyngen Private Limited unless stated otherwise.</p>
      <p>Orinite is a proprietary SaaS product brand of Capyngen Private Limited. Its product development, brand ownership, technology management, and commercial operations are held by Capyngen Private Limited, subject to applicable third-party licences.</p>
      <p>You may not copy, modify, distribute, reproduce, reverse engineer, or commercially exploit our intellectual property without prior written permission, except where permitted by applicable law or a relevant licence.</p>
    </>,
  },
  {
    id: "third-party",
    title: "Third-Party Services and Links",
    body: <>
      <p>Our website or products may include links, integrations, or references to third-party websites and services. These third parties operate independently and may have separate terms and privacy policies.</p>
      <p>We are not responsible for third-party content, availability, services, or practices. Your use of third-party services is subject to their applicable terms.</p>
    </>,
  },
  {
    id: "service-availability",
    title: "Service Availability and Changes",
    body: <>
      <p>We aim to maintain the availability and functionality of our website and services. However, uninterrupted or error-free operation cannot be guaranteed.</p>
      <p>We may update, modify, suspend, or discontinue website features or services where necessary for maintenance, security, product improvement, or business requirements, subject to applicable agreements and laws.</p>
    </>,
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: <>
      <p>Our website and general information are provided for informational and business purposes. While we make reasonable efforts to keep information accurate and updated, we do not guarantee that all content will always be complete, current, or free from errors.</p>
      <p>Any product-specific commitments, warranties, or service-level obligations will be governed by the applicable agreement.</p>
    </>,
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    body: <>
      <p>To the extent permitted by applicable law, Capyngen Private Limited will not be liable for indirect, incidental, special, or consequential losses arising from the use of, or inability to use, our website or services.</p>
      <p>Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited under applicable law.</p>
    </>,
  },
  {
    id: "indemnification",
    title: "Indemnification",
    body: <p>You agree to be responsible for losses, claims, or expenses arising from your unlawful use of our website or services, violation of these Terms, or infringement of another party&apos;s rights, to the extent permitted by applicable law.</p>,
  },
  {
    id: "privacy",
    title: "Privacy and Data Protection",
    body: <>
      <p>Your use of our website and services is also subject to our Privacy Policy, which explains how we collect, use, store, and protect personal information.</p>
      <p><strong>Privacy Policy:</strong> <Link href="/privacy-policy">https://capyngen.com/privacy-policy</Link></p>
    </>,
  },
  {
    id: "governing-law",
    title: "Governing Law and Jurisdiction",
    // TODO: replace [Insert City/State] with the jurisdiction confirmed by the company.
    body: <p>These Terms &amp; Conditions shall be governed by the laws of India. Subject to applicable law, courts having jurisdiction at [Insert City/State] shall have jurisdiction over disputes arising in connection with these Terms.</p>,
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    body: <p>We may revise these Terms &amp; Conditions from time to time. Any updated version will be published on this page with a revised &quot;Last Updated&quot; date. Continued use of our website or services after the updated terms become effective will be subject to the revised terms, to the extent permitted by law.</p>,
  },
  {
    id: "contact",
    title: "Contact Information",
    body: <>
      <p>For questions regarding these Terms &amp; Conditions, contact:</p>
      <ul>
        <li><strong>Company Name:</strong> Capyngen Private Limited</li>
        <li><strong>Email:</strong> <a href="mailto:sales@capyngen.com">sales@capyngen.com</a></li>
        <li><strong>Registered Address:</strong> Tower B3, Spaze i-Tech Park, Sector 49, Gurugram, Haryana 122018</li>
        <li><strong>Website:</strong> <Link href="/">https://capyngen.com</Link></li>
      </ul>
    </>,
  },
];

export default function TermsAndConditionsPage() {
  return (
    <InfoPage
      current="/terms-and-conditions"
      eyebrow="Legal"
      title="Terms & Conditions"
      intro="These Terms & Conditions govern your access to and use of our website, software products, digital platforms, and related services."
      sections={sections}
    />
  );
}
