import Link from "next/link";
import { asset } from "@/lib/base-path";

export default function SiteFooter() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <div className="brand">
            <img className="brand-mark" src={asset("/assets/morganz-logo.png")} alt="Morganz logo" width="128" height="128" />
            <span>MORGANZ</span>
          </div>
          <p className="small">Morganz Integrated Solutions</p>
          <p className="small">Smart control systems for infrastructure, water, and automation.</p>
          <p className="small">
            <a href="https://morganz.cloud" target="_blank" rel="noopener noreferrer">
              www.morganz.cloud
            </a>
          </p>
        </div>
        <div>
          <strong>Products</strong>
          <p className="small">CyberFlow</p>
          <p className="small">Farm Series (Coming Soon)</p>
          <strong>Contact</strong>
          <p className="small">
            <a href="mailto:smart@morganz.cloud">smart@morganz.cloud</a>
          </p>
          <p className="small">
            <a href="tel:+201280008532">+20 1280008532</a>
          </p>
        </div>
        <div>
          <strong>Company</strong>
          <p className="small">
            <Link href="/company">About</Link>
          </p>
          <p className="small">
            <Link href="/contact">Contact</Link>
          </p>
          <strong>Office</strong>
          <p className="small">
            Technology innovation &amp; entrepreneurship center (TIEC), Smart-Village, Building (B5).
            Cairo-Alexandria Desert Road, Giza, Egypt, P.O. Box: 2577
          </p>
        </div>
      </div>
    </footer>
  );
}