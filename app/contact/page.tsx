import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Morganz Integrated Solutions",
  description: "Contact Morganz Integrated Solutions for CyberFlow® irrigation control solutions.",
  alternates: { canonical: "https://morganz.cloud/contact.html" },
};

export default function ContactPage() {
  return (
    <main id="main-content" className="container">
      <section>
        <h1>Contact</h1>
        <p className="lead">For business solutions and customized controllers, please contact:</p>
      </section>

      <section className="grid grid-2">
        <article className="plain-block">
          <h2>Company Contact Info</h2>
          <p className="small">Morganz Integrated Solutions</p>
          <p className="small">
            Technology innovation &amp; entrepreneurship center (TIEC), Smart-Village, Building (B5). Cairo-Alexandria
            Desert Road, Giza, Egypt, P.O. Box: 2577
          </p>
          <p className="small">
            <a href="tel:+201280008532">+20 1280008532</a>
          </p>
          <p className="small">
            <a href="mailto:smart@morganz.cloud">smart@morganz.cloud</a>
          </p>
          <p className="small">
            <a href="https://morganz.cloud" target="_blank" rel="noopener noreferrer">
              www.morganz.cloud
            </a>
          </p>
        </article>

        <article className="plain-block">
          <h2>Contact Form</h2>
          <ContactForm />
        </article>
      </section>

      <section>
        <div className="grid grid-2">
          <article className="info-block">
            <h3>Business Inquiries</h3>
            <p className="small">For business solutions and customized controllers, contact our team.</p>
          </article>
          <article className="info-block">
            <h3>Support</h3>
            <p className="small">Our help center can access systems remotely via WiFi or hotspot.</p>
          </article>
        </div>
      </section>
    </main>
  );
}