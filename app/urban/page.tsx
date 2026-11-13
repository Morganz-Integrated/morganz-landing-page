import type { Metadata } from "next";
import HeroVisual from "@/components/hero-visual";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const metadata: Metadata = {
  title: "CyberFlow- Urban® | Morganz Integrated Solutions",
  description: "CyberFlow- Urban® irrigation controller for landscapes and gardens.",
  alternates: { canonical: "https://morganz.cloud/urban.html" },
};

const URBAN_IMG =
  "https://images.unsplash.com/photo-1703243056931-265dbc9be205?auto=format&fit=crop&fm=jpg&ixid=M3w3Mjg2OTd8MHwxfHNlYXJjaHwxfHxzcHJpbmtsZXJzJTIwcGFya3xlbnwwfHx8fDE3NTgyOTAyMDB8MA&ixlib=rb-4.1.0&q=80&w=1200";

export default function UrbanPage() {
  return (
    <main id="main-content" className="container">
      <section className="split">
        <div>
          <span className="badge">CyberFlow- Urban®</span>
          <h1>Urban Irrigation Control for Landscapes and Gardens.</h1>
          <p className="lead">Lush Yard. Zero Effort. Unbelievable Savings.</p>
        </div>
        <HeroVisual visualClass="urban" src={URBAN_IMG} alt="Park sprinklers watering an urban landscape" />
      </section>

      <section>
        <h2>Technical Features</h2>
        <div className="grid grid-2">
          <article className="info-block">
            <ul className="list">
              <li>Solenoid valve control (Up to 16 valves per controller).</li>
              <li>Pump control.</li>
              <li>Mist control.</li>
              <li>Easy to use via mobile App/Google Home App.</li>
              <li>Ability to keep functioning even when electricity is cut-off.</li>
            </ul>
          </article>
          <article className="info-block">
            <ul className="list">
              <li>Excellent mobility and minimum wiring is required.</li>
              <li>Highly flexible scheduling algorithm.</li>
              <li>Sensors may be connected easily.</li>
              <li>Water/ weather proof enclosure.</li>
              <li>Easy to connect water proof sockets, no need for professional technician.</li>
            </ul>
          </article>
        </div>
      </section>

      <section>
        <h2>Model Comparison</h2>
        <div className="table-wrap">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Model</TableHead>
                <TableHead>Valve channels</TableHead>
                <TableHead>Sensors</TableHead>
                <TableHead>App features</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>ME-Dv01</TableCell>
                <TableCell>1 valve</TableCell>
                <TableCell>1</TableCell>
                <TableCell>Mobile App / Google Home App</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>ME-Dv02</TableCell>
                <TableCell>2 valves</TableCell>
                <TableCell>1</TableCell>
                <TableCell>Mobile App / Google Home App</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>ME-Dv04</TableCell>
                <TableCell>4–16 valves</TableCell>
                <TableCell>0</TableCell>
                <TableCell>Mobile App / Google Home App</TableCell>
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
            <p className="small">The system controls your irrigation from a mobile app.</p>
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