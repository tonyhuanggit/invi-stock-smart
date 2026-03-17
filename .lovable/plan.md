

# Invi Website Accuracy Overhaul

This document identified numerous inaccuracies across the entire site. Invi is an **iMessage-only** AI inventory assistant that reads/writes a **Google Sheet** — not a Slack/Teams/SMS tool with POS integrations. Here's the implementation plan organized by priority.

---

## Phase 1: Critical Fixes (C1-C6)

### C1 + C2 — Replace all Slack/Teams/SMS with iMessage
**Files:** Hero.tsx, SolutionSection.tsx, FeaturesSection.tsx, PlatformIntegrationSection.tsx, FAQSection.tsx

- Hero subheadline: "No dashboards. No spreadsheets." → "Just text your AI inventory manager on iMessage. No app. No dashboard. Just your phone."
- Hero chat bubbles (right side): Replace matcha/reorder with real demo exchange:
  - User: "What's running low?"
  - Invi: "Coffee Beans — 4 Lb, need 13. Napkins — 3 Pack, need 18. Everything else is good."
- **PlatformIntegrationSection**: Complete rewrite — remove 3-card Slack/Teams/SMS layout. Replace with single iMessage demo showcase with the demo number: +1 (305) 336-9541
- FeaturesSection #5: "Works on Any Device" → change from "Slack, Teams, or SMS" to iMessage framing
- All FAQ answers referencing Slack/Teams/SMS → rewrite for iMessage

### C3 — Google Sheets, not POS
**Files:** HowItWorksSection.tsx, WhyChooseInviSection.tsx, FAQSection.tsx, PlatformIntegrationSection.tsx

- HowItWorksSection: Replace entire Watch/Compare/Forecast/Act model (see H5 below)
- WhyChooseInviSection comparison table: "POS + E-Commerce" → "Google Sheets", "Real-time Dashboard" → "Live Google Sheet + Text Analysis"
- FAQ #7: Remove Square/Clover/Toast/Shopify reference
- PlatformIntegrationSection trust box: Remove "Works with all major POS systems"

### C4 — Remove "order placed" language
**Files:** Hero.tsx, SolutionSection.tsx, HowItWorksSection.tsx, HowInviWorksSection.tsx

- Hero chat: Remove "Done! Order placed with your usual supplier"
- Solution chat: Remove "Done! Order placed"
- HowInviWorksSection Alerts tab conversation: "Reorder prepared: 12 units" → "Coffee Beans: order 9 Lb. Napkins: order 15 Pack."
- Replace with recommendation language: Invi tells you what to order, you decide

### C5 — Remove invoice verification
**Files:** ProblemSection.tsx, Hero.tsx (stats), StatsSection.tsx, PricingSection.tsx

- ProblemSection: Replace "Invoice Errors" card with "No Visibility Into Usage"
- Hero stats: Remove "99% Invoice Accuracy" → replace with demo-appropriate stat
- StatsSection: Remove "99% Invoice Accuracy" stat
- PricingSection Professional plan: Remove "Invoice verification"

### C6 — Remove/replace fabricated statistics
**Files:** Hero.tsx, StatsSection.tsx, CTASection.tsx

- Hero badge: "Trusted by 500+ stores worldwide" → "Built for small business owners"
- Hero stats grid + StatsSection: Replace with demo-honest stats like "7 SKUs tracked in real time", "Responses in under 3 seconds", "Text the demo: +1 (305) 336-9541"
- CTASection: "Join hundreds of businesses" → "See what Invi can do for your store"

---

## Phase 2: High Priority (H1-H6)

### H1 — Remove "learns your communication style"
**Files:** FeaturesSection.tsx (#4), SolutionSection.tsx

- Replace with: "Understands context — knows what you mean when you say 'yes' or 'more' without re-explaining"

### H2 — Remove SOC 2 claim
**File:** FAQSection.tsx (#6)

- Replace with: "Your data lives in your own Google Sheet. You own it, you control it."

### H3 — Remove multi-location support
**Files:** PricingSection.tsx, HowInviWorksSection.tsx

- Remove "Multi-location support" from Professional plan
- HowInviWorksSection tab 4: Remove Ballard reference, replace with logging conversation

### H4 — Remove API access
**File:** PricingSection.tsx — remove from Professional plan

### H5 — Rewrite HowItWorksSection
**File:** HowItWorksSection.tsx — Replace Watch/Compare/Forecast/Act with actual flow:
1. You text counts → Invi logs them to your Google Sheet
2. You ask what's low → Invi checks stock vs minimums
3. You ask for analysis → Invi runs trend detection and usage calculations
4. Invi shows what to reorder and when you'll run out → you take action

Also fix dataFlow panel: Remove "Supplier emails, delivery notes" from inputs, "Drafted POs" from outputs

### H6 — Replace free trial CTA with demo number
**Files:** CTASection.tsx, PricingSection.tsx

- Remove "14-day free trial, no credit card required"
- Primary CTA: "Text the demo: +1 (305) 336-9541" (link to `sms:+13053369541`)
- Keep email form as secondary "Get notified about updates"

---

## Phase 3: Medium Priority (M1-M8)

### M2 — Rewrite SolutionSection benefits
**File:** SolutionSection.tsx — Replace benefits list with accurate capabilities (text counts, ask what's low, request analysis, sheet link, no app needed, context-aware)

### M3 — HowInviWorksSection conversations with real SKUs
**File:** HowInviWorksSection.tsx — Replace matcha/oat milk/mango with Coffee Beans, Napkins, Bagels per doc spec

### M4 — Fix WhyChooseInviSection table
**File:** WhyChooseInviSection.tsx — Already covered in C3

### M5 — Rewrite all 8 FAQ answers
**File:** FAQSection.tsx — Complete rewrite per the doc's Q&A spec

### M6 — Replace placeholder testimonials
**File:** TestimonialsSection.tsx — Replace with single demo CTA: "See for yourself — text Invi at +1 (305) 336-9541"

### M7 — Update Pricing to demo framing
**File:** PricingSection.tsx — Replace tiers with "Request Early Access" section, remove non-existent features

### M8 — Update CTA section
**File:** CTASection.tsx — Phone number CTA primary, email form secondary

---

## Phase 4: Low Priority Polish (L1-L3)

### L1 — Fix contact page
**File:** Contact.tsx — Remove fake phone (+1 555...), fake address. Add real demo number.

### L2 — Link nav CTAs
**File:** Navigation.tsx — "Request Demo" button → link to `sms:+13053369541`

### L3 — Clean up footer
**File:** Footer.tsx — "for retail businesses worldwide" → "for small business owners who text". Remove dead resource links (Documentation, Help Center, Community, API) or mark "Coming Soon". Remove social links that go to '#'.

---

## Summary of Files Changed

| File | Changes |
|------|---------|
| Hero.tsx | Badge, subheadline, chat bubbles, stats |
| SolutionSection.tsx | Benefits list, chat example, ordering language |
| FeaturesSection.tsx | Cards #4, #5 rewrite |
| PlatformIntegrationSection.tsx | Complete rewrite → iMessage showcase |
| HowItWorksSection.tsx | Complete rewrite of 4 steps + data flow |
| HowInviWorksSection.tsx | All 5 conversation examples, tab 4 rewrite |
| WhyChooseInviSection.tsx | 3 table rows |
| FAQSection.tsx | All 8 Q&As |
| PricingSection.tsx | Remove non-existent features, demo framing |
| TestimonialsSection.tsx | Replace with demo CTA |
| CTASection.tsx | Copy, CTA, benefits |
| StatsSection.tsx | Replace/remove fabricated stats |
| ProblemSection.tsx | Replace invoice card |
| Navigation.tsx | Link Request Demo to SMS |
| Footer.tsx | Tagline, dead links |
| Contact.tsx | Remove fake contact info |

This is approximately 16 files with changes ranging from single-line fixes to complete rewrites. I recommend implementing in 4 batches matching the priority phases above.

