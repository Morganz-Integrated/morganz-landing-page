import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const metadata: Metadata = {
  title: "Products | Morganz Integrated Solutions",
  description: "CyberFlow® irrigation control platform products for field and urban landscapes.",
  alternates: { canonical: "https://morganz.cloud/products.html" },
};

export default function ProductsPage() {
  return (
    <main id="main-content" className="container">
      <section className="products-hero overlay-tile">
        <img
          src="https://images.pexels.com/photos/32974060/pexels-photo-32974060.jpeg?cs=srgb&dl=pexels-barbara-t-82951689-32974060.jpg&fm=jpg"
          alt="Automatic sprinkler watering a green lawn"
          width="1200"
          height="800"
          fetchPriority="high"
          decoding="async"
        />
        <div className="overlay-copy products-hero-top">
          <h1>CyberFlow® Product Family</h1>
          <p className="lead">Smart irrigation controllers for open field and urban landscapes.</p>
        </div>
        <div className="overlay-copy products-hero-bottom">
          <h2>Core Products</h2>
          <div className="grid grid-3">
            <article className="info-block">
              <h3>CyberFlow- Field®</h3>
              <p className="small">Open field automatic controller.</p>
              <p className="small">Keep irrigation controller in your hands anywhere while saving water and energy.</p>
              <Button asChild className="btn">
                <Link href="/field">Learn More</Link>
              </Button>
            </article>
            <article className="info-block">
              <h3>CyberFlow- Urban®</h3>
              <p className="small">Control your landscape irrigation from a mobile app with flexible scheduling.</p>
              <Button asChild className="btn">
                <Link href="/urban">Learn More</Link>
              </Button>
            </article>
          </div>
        </div>
      </section>

      <section>
        <h2>Expansion &amp; Custom Projects</h2>
        <div className="grid grid-2">
          <article className="info-block">
            <h3>Farm Controller</h3>
            <p className="small">
              Large-scale irrigation and infrastructure control system for agricultural projects. Coming soon.
            </p>
          </article>
          <article className="info-block">
            <h3>Custom Solutions</h3>
            <p className="small">
              We design and build customized controllers and automation systems for special business and
              infrastructure needs.
            </p>
            <Button asChild className="btn">
              <Link href="/contact">Contact Engineering</Link>
            </Button>
          </article>
        </div>
      </section>

      <section>
        <h2>CyberFlow® WiFi Irrigation Controller</h2>
        <p className="lead">
          Control your irrigation system from your mobile phone and enjoy peace of mind.
        </p>
        <div className="grid grid-3">
          <article className="info-block">
            <ul className="list">
              <li>Solenoid valve control (up to 16 valves)</li>
              <li>Pump control</li>
              <li>Mist control</li>
              <li>Mobile App / Google Home</li>
              <li>Works during power cut-off</li>
            </ul>
          </article>
          <article className="info-block">
            <ul className="list">
              <li>Flexible scheduling</li>
              <li>Easy sensor connection</li>
              <li>Water &amp; weather proof enclosure</li>
              <li>Online &amp; offline access</li>
              <li>Minimal wiring</li>
            </ul>
          </article>
          <article className="info-block">
            <ul className="list">
              <li>Remote support</li>
              <li>Easy waterproof connectors</li>
              <li>Customizable</li>
              <li>3 years warranty</li>
            </ul>
          </article>
        </div>
      </section>

      <section>
        <h2>Models Comparison</h2>
        <div className="table-wrap">
          <Table aria-label="CYBERFLOW product comparison">
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead>ME-Dv01</TableHead>
                <TableHead>ME-Dv02</TableHead>
                <TableHead>ME-Dv04</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Motor pump control</TableCell>
                <TableCell>✔</TableCell>
                <TableCell>✔</TableCell>
                <TableCell>✔</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Valve capacity</TableCell>
                <TableCell>1 valve</TableCell>
                <TableCell>2 valves</TableCell>
                <TableCell>4–16 valves</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Scheduling programs</TableCell>
                <TableCell>Up to 15</TableCell>
                <TableCell>Up to 5</TableCell>
                <TableCell>Up to 4</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Solar panel support</TableCell>
                <TableCell>Optional</TableCell>
                <TableCell>Optional</TableCell>
                <TableCell>—</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>12V adaptor</TableCell>
                <TableCell>✔</TableCell>
                <TableCell>✔</TableCell>
                <TableCell>✔</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mist system support</TableCell>
                <TableCell>Optional</TableCell>
                <TableCell>Optional</TableCell>
                <TableCell>Optional</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Connectable sensors</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sensor drift control</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Power cut-off protection</TableCell>
                <TableCell>✔</TableCell>
                <TableCell>✔</TableCell>
                <TableCell>—</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </main>
  );
}