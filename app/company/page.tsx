import type { Metadata } from "next";
import { asset } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "Company | Morganz Integrated Solutions",
  description: "About Morganz Integrated Solutions and our mission, vision, and engineering capabilities.",
  alternates: { canonical: "https://morganz.cloud/company.html" },
};

export default function CompanyPage() {
  return (
    <main id="main-content" className="container">
      <section className="split overlay-pair company-intro">
        <div className="overlay-copy">
          <h1>Morganz Integrated Solutions</h1>
          <p className="lead">
            Morganz Integrated Solutions provides smart technical solutions using highly qualified
            teams from various technical fields, focusing on automation, control systems, and
            customized solutions.
          </p>
        </div>
        <div className="overlay-media">
          <img
            className="company-hero-image"
            src={asset("/assets/image-de199dd2-ce0f-4727-b629-a3186972748a.png")}
            alt="Solar-powered irrigation controller in a golden crop field"
            width="1200"
            height="800"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </section>

      <section>
        <div className="grid grid-2 company-overview">
          <article className="overlay-tile">
            <img
              src={asset("/assets/image-5cbbbeec-5fa6-4eba-ab5f-20016590f643.png")}
              alt="Solar-powered irrigation controller in an olive tree orchard"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
            />
            <div className="overlay-copy">
              <h2>Who We Are</h2>
              <p className="small">
                We design and build smart control systems for automation, water, and infrastructure —
                engineered and supported in-house.
              </p>
            </div>
          </article>
          <div className="mission-stack">
            <h2>Mission &amp; Vision</h2>
            <article className="plain-block">
              <h3>Our Mission</h3>
              <p className="small">
                To design and deliver smart, easy-to-use, and reliable control systems that help users
                save resources, save time, and operate systems with minimum effort.
              </p>
            </article>
            <article className="plain-block">
              <h3>Our Vision</h3>
              <p className="small">
                To become a leading provider of smart irrigation and control solutions in the region,
                transforming how water and infrastructure are managed through intelligent, reliable,
                and sustainable technology.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section>
        <h2>Engineering &amp; Support</h2>
        <div className="grid grid-2 overlay-pair">
          <article className="overlay-copy">
            <p className="small">
              We build custom controllers and tailored automation for your specific requirements.
            </p>
            <p className="small">
              For business solutions and customized controllers, please contact: Technology innovation
              &amp; entrepreneurship center (TIEC), Smart-Village, Building (B5). Cairo-Alexandria
              Desert Road, Giza, Egypt, P.O. Box: 2577
            </p>
          </article>
          <article className="plain-block media-block overlay-media">
            <img
              src="https://images.pexels.com/photos/27033658/pexels-photo-27033658.jpeg?cs=srgb&dl=pexels-jhovani-morales-1246961-27033658.jpg&fm=jpg"
              alt="Garden irrigation from above"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
            />
          </article>
        </div>
      </section>
    </main>
  );
}