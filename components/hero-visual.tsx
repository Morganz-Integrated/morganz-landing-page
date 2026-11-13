/**
 * Hero visual. The live site layered a Three.js animation over this photo and
 * fell back to the photo when WebGL was unavailable. In practice it only ever
 * showed the image, so the animation is dropped and the photo is always shown.
 */
export default function HeroVisual({
  src,
  alt,
  visualClass = "",
}: {
  src: string;
  alt: string;
  /** Optional extra class, e.g. "field" / "urban" for per-page tinted backgrounds. */
  visualClass?: string;
}) {
  return (
    <div className={`hero-visual fallback${visualClass ? ` ${visualClass}` : ""}`} aria-hidden="true">
      <img className="hero-fallback-image" src={src} alt={alt} width="1200" height="800" decoding="async" />
    </div>
  );
}