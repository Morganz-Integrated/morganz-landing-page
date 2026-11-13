import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroVisual from "@/components/hero-visual";

const HERO_IMG =
  "https://images.pexels.com/photos/18699404/pexels-photo-18699404.jpeg?cs=srgb&dl=pexels-mibernaa-18699404.jpg&fm=jpg";

export default function HomePage() {
  return (
    <main id="main-content" className="container">
      <section className="hero hero-overlay">
        <div>
          <span className="badge">CyberFlow® irrigation control platform</span>
          <h1>Smart Irrigation Control. Anywhere.</h1>
          <p className="lead">
            We build smart control systems for infrastructure, automation, and resource management.
            Our mission is to simplify complex systems using reliable, connected, and customizable
            technology.
          </p>
          <div className="buttons">
            <Button asChild className="btn primary">
              <Link href="/products">Explore Products</Link>
            </Button>
            <Button asChild className="btn accent">
              <Link href="/contact">Contact an Engineer</Link>
            </Button>
          </div>
        </div>
        <HeroVisual src={HERO_IMG} alt="Sprinklers watering a wide open field" />
      </section>

      <section>
        <h2>Value Propositions</h2>
        <div className="grid grid-3">
          <article className="info-block">
            <h3>Systems</h3>
            <p className="small">Wireless controller, no wiring hassle around the field.</p>
            <p className="small">Excellent mobility and minimum wiring is required.</p>
          </article>
          <article className="info-block">
            <h3>Custom Solutions</h3>
            <p className="small">
              Custom-built control and automation systems, engineered to your exact requirements by our
              in-house specialists.
            </p>
          </article>
          <article className="info-block">
            <h3>Remote Support</h3>
            <p className="small">
              MIS help center connects to your system and fixes problems in seconds over WiFi or a
              mobile hotspot.
            </p>
            <p className="small">Easy online /offline access.</p>
          </article>
        </div>
      </section>

      <section>
        <h2>CyberFlow® Platform Family</h2>
        <div className="grid grid-2">
          <article className="card">
            <h3>CyberFlow- Field®</h3>
            <p className="small">Open field automatic controller.</p>
            <p className="small">
              Keep irrigation controller in your hands anywhere while saving water and energy.
            </p>
            <Button asChild className="btn">
              <Link href="/field">Learn More</Link>
            </Button>
          </article>
          <article className="card">
            <h3>CyberFlow- Urban®</h3>
            <p className="small">Control your landscape irrigation from a mobile app.</p>
            <p className="small">Water saving with flexible scheduling and power cut-off protection.</p>
            <Button asChild className="btn">
              <Link href="/urban">Learn More</Link>
            </Button>
          </article>
        </div>
      </section>

      <section>
        <h2>Feature Highlights</h2>
        <div className="grid grid-3">
          <article className="info-block">
            <h3 className="highlight">Solar</h3>
            <p className="small">
              Each riser pipe has a stand alone controller powered via a photovoltaic panel to control
              back to back solenoid valves.
            </p>
            <p className="small">Solar panel support Optional.</p>
          </article>
          <article className="info-block">
            <h3 className="highlight">Power Cut-Off Protection</h3>
            <p className="small">Ability to keep functioning even when electricity is cut-off.</p>
          </article>
          <article className="info-block">
            <h3 className="highlight">Remote MIS Support</h3>
            <p className="small">
              MIS help center connects to your system and fixes problems in seconds over WiFi or a
              mobile hotspot.
            </p>
          </article>
        </div>
      </section>

      <section>
        <h2>Use Case Snippets</h2>
        <div className="grid grid-2">
          <article className="info-block">
            <h3>Open Field</h3>
            <p className="small">Save water and energy by applying accurate irrigation schedule.</p>
            <p className="small">
              Keep your workers free to take care of your crop instead of running around to control
              irrigation valves.
            </p>
          </article>
          <article className="info-block">
            <h3>Urban Landscapes</h3>
            <p className="small">Control your landscape irrigation on your mobile and enjoy peace of mind.</p>
          </article>
        </div>
      </section>
    </main>
  );
}