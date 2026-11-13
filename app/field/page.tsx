import type { Metadata } from "next";
import HeroVisual from "@/components/hero-visual";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const metadata: Metadata = {
  title: "CyberFlow- Field® | Morganz Integrated Solutions",
  description: "CyberFlow- Field® open field automatic controller with solar and wireless control.",
  alternates: { canonical: "https://morganz.cloud/field.html" },
};

const FIELD_IMG =
  "https://images.pexels.com/photos/31699602/pexels-photo-31699602.jpeg?cs=srgb&dl=pexels-stijn-dijkstra-1306815-31699602.jpg&fm=jpg";

export default function FieldPage() {
  return (
    <main id="main-content" className="container">
      <section className="split">
        <div>
          <span className="badge">CyberFlow- Field®</span>
          <h1>Open-Field Smart Irrigation. Solar &amp; Wireless.</h1>
          <p className="lead">
            Open field automatic controller. Keep irrigation controller in your hands anywhere while saving water
            and energy.
          </p>
        </div>
        <HeroVisual visualClass="field" src={FIELD_IMG} alt="Efficient irrigation in a sunlit field" />
      </section>

      <section>
        <h2>How It Works</h2>
        <ul className="list">
          <li>
            Each riser pipe has a stand alone controller powered via a photovoltaic panel to control back to back
            solenoid valves.
          </li>
          <li>Each solenoid valve could be programmed separately.</li>
          <li>Pump motor controller is included.</li>
          <li>Synchronizing pump control with valves protect your lines from water hammer.</li>
        </ul>
      </section>

      <section>
        <h2>Major Features</h2>
        <div className="grid grid-2">
          <article className="info-block">
            <ul className="list">
              <li>Wireless controller, no wiring hassle around the field.</li>
              <li>Water / weather proof enclosures.</li>
              <li>Ready to connect sensors / weather station.</li>
              <li>Easy online /offline access.</li>
            </ul>
          </article>
          <article className="info-block">
            <ul className="list">
              <li>Water saving irrigation system.</li>
              <li>Easy and flexible programming app.</li>
              <li>All year programming, five programs for each zone.</li>
              <li>Easy to customize upon request.</li>
            </ul>
          </article>
        </div>
      </section>

      <section>
        <h2>Specifications</h2>
        <div className="table-wrap">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Wireless controller, no wiring hassle around the field</TableCell>
                <TableCell>Wiring cost is null</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Each riser pipe has a stand alone controller powered via a photovoltaic panel to control back to back
                  solenoid valves
                </TableCell>
                <TableCell>Each solenoid valve could be programmed separately</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Pump motor controller is included</TableCell>
                <TableCell>Synchronizing pump control with valves protect your lines from water hammer</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>All year programming, five programs for each zone</TableCell>
                <TableCell>Easy and flexible programming app</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Water / weather proof enclosures</TableCell>
                <TableCell>Ready to connect sensors / weather station</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <section>
        <h2>Warranty &amp; Support</h2>
        <div className="grid grid-2">
          <article className="info-block">
            <p className="small">3 years warranty.</p>
            <p className="small">Enjoy 3 year warranty and after sale technical support.</p>
          </article>
          <article className="info-block">
            <p className="small">
              MIS help center connects to your system and fixes problems in seconds over WiFi or a
              mobile hotspot.
            </p>
            <p className="small">Easy online /offline access.</p>
          </article>
        </div>
      </section>
    </main>
  );
}