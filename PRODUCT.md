# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Confirmed by owner: a mix of three buyer categories, with current customers in each:

- Farm / orchard owners and managers (open-field irrigation control).
- Landscape owners / landscapers (urban gardens and yards).
- Residential / villa owners (urban home irrigation).

Secondary: landscape and irrigation contractors / installers, and custom automation buyers (B2B); distributors/resellers of the CyberFlow® platform (site addresses a dealer/buyer, not an end-consumer checkout).

## Product Purpose

Morganz Integrated Solutions builds smart control systems for irrigation, infrastructure, and resource management. Its mission: simplify complex systems with reliable, connected, customizable technology, helping users save water, energy, time, and operating effort. Success = delivering irrigation control a buyer can install with minimal wiring, operate remotely from a phone, and rely on during grid/connectivity faults.

## Positioning

Confirmed by owner: the meaningfully different mechanism is Remote MIS support with online/offline access — the MIS help center reaches into a customer's system over WiFi/hotspot and fixes problems remotely, and the system keeps functioning through connectivity interruptions.

Supporting differentiators (not the keystone): wireless, no-wiring-around-the-field control; solar-powered standalone per-riser controllers; power cut-off protection.

## Operating Context

- Site is Egypt-centric (TIEC, Smart-Village, Giza; Cairo-Alexandria Desert Road; +20 phone).
- Controllers used in open fields and urban landscapes; mobile app + Google Home control path.
- SI (systems integrator) / dealer contact model via contact form, email (smart@morganz.cloud), phone.
- English-language site with RTL scaffolding present in CSS (no Arabic copy shipped; no visible language toggle in the nav).

## Capabilities and Constraints

Confirmed from site content:

- CyberFlow® Field®: open-field automatic controller; one controller per riser pipe, solar/photovoltaic powered; controls back-to-back solenoid valves; each valve independently programmable; pump motor controller included; syncs pump with valves to prevent water hammer; wireless, no wiring around the field; weather-proof enclosures; sensor/weather-station ready; "five programs per zone" yearly programming; 3-year warranty.
- CyberFlow® Urban®: landscape/garden controller; solenoid valve control up to 16 valves; pump control; mist control; mobile App + Google Home; works on power cut-off; waterproof enclosure; waterproof sockets (no professional technician needed); flexible scheduling; 3-year warranty.
- Models: ME-Dv01 (1 valve), ME-Dv02 (2 valves), ME-Dv04 (4–16 valves). OPEN/CONFIRM: products page vs urban page previously conflicted (urban said "ME-AV04 / 4-22 valves / 1 sensor"); unified to ME-Dv04 / 4–16 / 0 sensor, but the true valve capacity and the real model name (Dv04 vs AV04) are UNCONFIRMED — engineering must verify before this becomes asserted product truth.
- Works during electricity cut-off (field & urban), remote MIS support, easy online/offline access.
- Custom / expansion: custom control projects, Farm Series controller (coming soon).
- Platform: web, static markup (Next.js 14 App Router, React, TypeScript, hand-rolled CSS). Contact form exists as a component.

## Brand Commitments

- Name: Morganz Integrated Solutions (MORGANZ); product family: CyberFlow® (Field® / Urban®).
- Logo asset: /assets/morganz-logo.png.
- Voice signals: plain engineering English, benefit-led ("save water and energy", "peace of mind"); brand tagline "Lush Yard. Zero Effort. Unbelievable Savings." (urban).
- Mission (verbatim): design and deliver smart, easy-to-use, reliable control systems that help users save resources, save time, operate systems with minimum effort.
- Vision: become a leading provider of smart irrigation and control solutions in the region.
- Domain: morganz.cloud; contact email smart@morganz.cloud.

## Evidence on Hand

Confirmed by owner: the site should surface ACTUAL customer reviews (real customers, spanning all three segments: farm, landscape, residential), plus a self-serve form so customers can add their own review from the site.

ABSENCE TO RESPECT: no reviews, installs, measured savings, case studies, or certifications are present in the repo yet. Future work must NOT fabricate reviews, customers, savings figures, or certifications — the review pool is empty until real ones are collected from customers.

OPEN requirements the review feature implies (not yet designed): submission form fields (name, rating, comment + verification/ownership check), where reviews are stored, moderation/approval to block spam/abuse, and how they render on the static site. The site is statically built and currently client-side only, so a real form needs an accepted storage/backend path before it is buildable.

Contact info: general line +20 1280008532, email smart@morganz.cloud. The former "technical office" number was a masked placeholder (+201****6538) — real number UNCONFIRMED, removed rather than fabricated.

## Product Principles

1. Save the owner's water, energy, time, and labour — lead with measurable outcomes, not features.
2. Simplify complex systems — reduce wiring, installation labour, and day-to-day operation.
3. Reliability under real conditions — keep functioning through power cut-offs and fixable remotely.
4. Customizable and extensible — tailor controllers to a customer's specific project.
5. Protect engineering credibility — no invented proof, no internal contradictions in specs.

## Accessibility & Inclusion

No product-specific accessibility requirement established. Site itself implements baseline a11y (skip-link, focus-visible, prefers-reduced-motion, RTL scaffold). RTL: CSS scaffolding exists but no Arabic copy or language toggle is shipped — Arabic locale remains an open, unshipped capability.