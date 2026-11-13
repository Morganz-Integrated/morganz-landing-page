import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Solutions | Morganz Integrated Solutions",
  description: "Solutions for open-field agriculture, urban landscapes, and custom control projects.",
  alternates: { canonical: "https://morganz.cloud/solutions.html" },
};

export default function SolutionsPage() {
  return (
    <main id="main-content" className="container">
      <section>
        <h1>Solutions</h1>
        <p className="lead">Smart control systems for infrastructure, automation, and resource management.</p>
      </section>

      <section>
        <h2>Solutions By Environment</h2>
        <div className="grid grid-3">
          <article className="info-block">
            <h3>Agriculture / Open Field</h3>
            <p className="small">Open field automatic controller.</p>
            <ul className="list">
              <li>Wireless controller, no wiring hassle around the field.</li>
              <li>Water saving irrigation system.</li>
              <li>Save water and energy by applying accurate irrigation schedule.</li>
              <li>Ready to connect sensors / weather station.</li>
            </ul>
            <div className="buttons">
              <Button asChild className="btn">
                <Link href="/field">CyberFlow- Field®</Link>
              </Button>
            </div>
          </article>

          <article className="info-block">
            <h3>Urban Landscapes</h3>
            <p className="small">Control your landscape irrigation from a mobile app.</p>
            <ul className="list">
              <li>Solenoid valve control (Up to 16 valves per controller).</li>
              <li>Easy to use via mobile App/Google Home App.</li>
              <li>Water/ weather proof enclosure.</li>
              <li>Easy online /offline access.</li>
            </ul>
            <div className="buttons">
              <Button asChild className="btn">
                <Link href="/urban">CyberFlow- Urban®</Link>
              </Button>
            </div>
          </article>

          <article className="info-block">
            <h3>Custom Control Projects</h3>
            <p className="small">
              Custom-built automation and control systems for your specific project requirements.
            </p>
            <ul className="list">
              <li>Easy to customize upon request.</li>
              <li>Scoped, engineered, and supported by our in-house team.</li>
            </ul>
            <div className="buttons">
              <Button asChild className="btn">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}