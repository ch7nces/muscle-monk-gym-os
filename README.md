# Muscle Monk Gym OS

# MASTER DEVELOPMENT PROMPT — MUSCLE MONK GYMNASIUM | GYM OS

## YOUR ROLE

Act as an elite full-stack software architect, senior SaaS engineer, product strategist, UI/UX designer, database architect, cybersecurity specialist, fitness business consultant, and automation engineer.

Build a premium, production-ready, fully functional website and gym management SaaS platform for **Muscle Monk Gymnasium**, located in Rau, Indore, Madhya Pradesh, India.

The product must combine:

1. A visually exceptional public gym website.
2. A secure gym owner administration dashboard.
3. A digital membership management platform.
4. A real, functional QR-code attendance system.
5. A dedicated member portal.
6. A dedicated trainer portal.
7. A receptionist and staff dashboard.
8. A payment, invoicing, and expense management system.
9. A lead generation and sales CRM.
10. An automated retention and revenue growth system.
11. A complete analytics and reporting platform.
12. A scalable multi-tenant SaaS architecture for future gym clients.

**IMPORTANT:** This is not a static website project. Build a working full-stack application connected to a real database, with secure authentication, functional forms, meaningful actions, and production-ready architecture.

Do not generate decorative dashboards with fake numbers. All business data must come from actual database records.

---

# 1. BUSINESS INFORMATION

**Business Name:** Muscle Monk Gymnasium

**Hindi Name:** मसल मोंक जिम्नेजियम

**Business Category:** Gym / Fitness Centre

**Address:** 1st Floor, Above Cooperative Bank, In Front of Mamaji Complex, Sai Vihar Colony, Rau, Indore, Madhya Pradesh 453331, India.

**Phone:** +91 97559 66358

**WhatsApp:** +91 97559 66358 (make configurable and confirm WhatsApp availability before production)

**Google Rating:** 4.0 / 5 based on 4 reviews, as provided in the business brief. Do not represent this as a live rating unless integrated with an authorized source.

**Location:** Rau, Indore, Madhya Pradesh.

**Business Hours:** Configurable through the owner dashboard. Do not invent opening hours. The supplied listing mentions closing at 10 PM but does not establish the full weekly schedule.

**Primary Target Audience:**
- College students.
- Working professionals.
- Beginners.
- Bodybuilding enthusiasts.
- Weight-loss clients.
- Strength training enthusiasts.
- People seeking personal training.
- Residents of Rau and surrounding Indore areas.

**Primary Website Goal:** Convert website visitors into gym enquiries, free-trial bookings, WhatsApp conversations, and paid memberships.

**Primary SaaS Goal:** Help the gym owner manage operations, increase renewals, reduce missed payments, improve retention, and track financial performance.

---

# 2. DESIGN DIRECTION — PREMIUM FITNESS BRAND

Create a visually outstanding fitness website with the quality of a professionally designed premium fitness brand.

Avoid generic AI-generated templates.

## Visual Identity

Primary background: #090909

Secondary background: #141414

Card background: #1C1C1C

Primary accent: #E11D2E

Accent hover: #FF3045

Primary text: #F9FAFB

Secondary text: #A1A1AA

Borders: #292929

Success: #22C55E

Warning: #F59E0B

Danger: #EF4444

Use red sparingly to highlight important actions, progress, and key fitness branding elements.

## Typography

Use premium modern typography:
- Bold condensed display typography for hero headings.
- Inter or Geist for dashboard and body text.
- Strong hierarchy and comfortable spacing.
- Large, confident headlines.
- Minimal unnecessary text.

## Visual Style

- Cinematic gym photography.
- Dark atmospheric imagery.
- Strong contrast.
- Subtle red gradient lighting.
- Premium glass-like overlays where appropriate.
- Smooth hover interactions.
- Professional page transitions.
- Carefully designed loading skeletons.
- Refined cards and tables.
- Accessible forms and navigation.
- Excellent mobile responsiveness.
- Respect reduced-motion preferences.

Do not overuse animations, glowing borders, or gradients.

Use actual gym photos uploaded by the owner when available. Until then, use clearly identified replaceable licensed placeholder images. Never claim stock images depict the actual gym.

---

# 3. PUBLIC WEBSITE

Build a fully responsive, conversion-focused public website.

## Header

Logo: MUSCLE MONK

Subtitle: GYMNASIUM

Navigation:
- Home
- About
- Facilities
- Membership
- Trainers
- Transformations
- Contact

Right-side actions:
- Book Free Trial
- Member Login

On mobile, implement a polished navigation drawer.

Use a sticky navigation bar that changes appearance slightly on scroll.

## Hero Section

Full-width cinematic gym image or optimized video background.

Large headline:

**BUILD STRENGTH. BREAK LIMITS.**

Supporting text:

"Your fitness journey starts at Muscle Monk Gymnasium. Train with purpose, build confidence, and push beyond your limits in Rau, Indore."

Primary CTA: START YOUR JOURNEY

Secondary CTA: BOOK A FREE TRIAL

Additional CTA: WHATSAPP US

Add subtle visual motion and a premium gradient overlay.

Do not fabricate gym statistics.

## About Section

Heading:

**MORE THAN A GYM. A STRONGER YOU.**

Introduce Muscle Monk Gymnasium as a fitness destination in Rau, Indore.

Highlight the gym's focus on:
- Strength training.
- Fitness improvement.
- Consistent training.
- Supportive gym environment.
- Personal fitness goals.

Only display facilities and services confirmed by the gym owner.

## Facilities Section

Create attractive image cards for configurable facilities:

- Strength Training Zone
- Cardio Training Zone
- Free Weights
- Resistance Machines
- Functional Training
- Personal Training
- Changing Facilities
- Parking

All facilities must be controlled from the admin dashboard.

Unverified facilities should remain unpublished until confirmed.

## Membership Plans

Create a pricing section supporting configurable plans.

Possible plan categories:
- Monthly
- Quarterly
- Half-Yearly
- Annual
- Personal Training
- Custom Membership

Do not invent prices.

Each plan card should display:
- Plan name.
- Actual configured price.
- Duration.
- Included services.
- Joining fee if applicable.
- Discount if applicable.
- Membership benefits.
- Join Now button.

Highlight a recommended plan only when the owner selects one.

## Trainers

Display trainer profiles with:
- Profile photograph.
- Name.
- Specialization.
- Qualifications.
- Experience.
- Available services.
- Book Consultation button.

All information must come from approved trainer records.

## Transformations

Create a before-and-after transformation gallery.

Include:
- Client stories.
- Progress descriptions.
- Optional duration.
- Consent-controlled photographs.

Never generate fake client transformations or testimonials.

## Testimonials

Display approved customer testimonials.

Include real review attribution where permitted.

Do not create fictional reviews.

## Free Trial Booking

Create a fully functional booking form.

Fields:
- Full name.
- Phone number.
- Email (optional).
- Preferred date.
- Preferred time slot.
- Fitness goal.
- Consent to be contacted.

On submission:
1. Validate data server-side.
2. Save the booking to Supabase.
3. Check configured slot availability.
4. Notify authorized gym staff.
5. Show a confirmation message.
6. Add the booking to the CRM.
7. Prevent duplicate submissions.

## Contact Section

Show:
- Business address.
- Phone number.
- WhatsApp contact.
- Configurable operating hours.
- Embedded Google Maps.
- Contact form.
- Directions button.

Create a floating WhatsApp contact button on mobile and desktop.

## SEO

Implement:
- LocalBusiness and ExerciseGym structured data.
- Unique metadata.
- Open Graph tags.
- XML sitemap.
- Robots configuration.
- Canonical URLs.
- Optimized image alt text.
- Fast page loading.
- Semantic headings.
- Local SEO content.

Target relevant search terms naturally, such as:

"Gym in Rau Indore"

"Fitness Centre in Rau"

"Gym near Sai Vihar Colony"

"Strength Training Gym in Rau"

"Personal Trainer in Rau Indore" (only if offered)

Do not promise guaranteed Google rankings.

---

# 4. AUTHENTICATION AND USER ROLES

Use Supabase Auth with secure sessions.

Support the following roles:

**Platform Super Admin**
- Manages SaaS tenants, subscriptions, and platform operations.
- Cannot casually browse private gym data.
- Any exceptional support access must be explicitly authorized, scoped, time-limited, and audited.

**Gym Owner**
- Full management access to their own gym.

**Gym Manager**
- Operational access based on permissions.

**Receptionist**
- Member registration.
- Check-ins.
- Payments.
- Enquiries.
- Trial bookings.

**Trainer**
- Assigned members.
- Training schedules.
- Workout plans.
- Training sessions.

**Member**
- Own membership.
- Own attendance.
- Own payments.
- Own workout plans.
- Own profile.

Implement real database-enforced authorization.

Do not rely only on hiding buttons.

---

# 5. OWNER DASHBOARD

Create a sophisticated admin dashboard similar in polish to modern financial and business intelligence software.

## Sidebar

- Overview
- Members
- Membership Plans
- QR Attendance
- Leads & CRM
- Payments
- Invoices
- Expenses
- Trainers
- Training Sessions
- Workout Plans
- Renewals
- Campaigns
- Referrals
- Reports
- Notifications
- Website Manager
- Staff Management
- Settings

## Dashboard KPI Cards

Display:
- Total Members
- Active Members
- New Joins This Month
- Expired Memberships
- Monthly Collections
- Outstanding Membership Dues
- Monthly Expenses
- Estimated Operating Surplus
- Today's Check-ins
- Upcoming Renewals
- Trial Bookings
- Lead Conversion Rate

Every metric must be calculated from database records.

## Charts

Use Recharts for:
- Monthly collections.
- Membership growth.
- Daily attendance.
- Revenue trends.
- Lead conversion.
- Expenses by category.
- Membership plan distribution.
- Renewal performance.

Add date-range filters.

## Action Centre

Show actionable notifications:
- Membership expires in 3 days.
- Payment overdue.
- Trial booking pending.
- Member inactive for 7 days.
- New lead requires follow-up.
- Personal training session upcoming.

Alerts must be derived from actual records.

---

# 6. MEMBER MANAGEMENT

Create a complete member directory.

## Member Profile

Fields:
- Member ID.
- Full name.
- Profile photo.
- Phone.
- Email.
- Date of birth (optional).
- Emergency contact (optional).
- Joining date.
- Membership plan.
- Membership start date.
- Membership expiry date.
- Payment status.
- Assigned trainer.
- Member status.
- Notes with restricted access.

Provide:
- Create member.
- Edit member.
- View member.
- Archive member.
- Search.
- Filters.
- Sorting.
- Pagination.
- CSV export.
- Membership renewal.
- Payment history.
- Attendance history.

## Membership Status

Statuses:
- Active
- Expiring Soon
- Expired
- Frozen
- Cancelled

Membership status should be derived from dates and approved membership state transitions, not manually fabricated.

## Membership Freeze

Allow authorized staff to freeze memberships with:
- Freeze start date.
- Freeze end date.
- Reason.
- Approval details.
- Configurable freeze policy.

Ensure expiry extensions are calculated consistently.

---

# 7. ADVANCED QR ATTENDANCE SYSTEM

This is a core feature and must actually work.

Build a real, secure QR-based attendance solution.

## Member QR Identity

Every member receives a digital membership card with:
- Gym branding.
- Member name.
- Membership ID.
- Membership status.
- Membership expiry date.
- QR check-in option.

Do not put sensitive personal information inside QR payloads.

## Check-In Methods

Implement three check-in methods:

### Method A — Reception QR Scanner

Receptionist opens:

/dashboard/attendance/scanner

The system uses the device camera to scan a member's QR code.

On successful scan:
1. Validate the QR token server-side.
2. Identify the correct gym and member.
3. Check membership eligibility.
4. Check whether the member has already checked in within the configured window.
5. Record the check-in in PostgreSQL.
6. Display the member's name, photo, and membership status.
7. Show a success or rejection message.

### Method B — Gym Entrance Dynamic QR

Display a time-limited QR code on a reception tablet or monitor.

The member logs into their own portal and scans the gym's QR code.

The system validates:
- Member authentication.
- Gym identity.
- QR expiration.
- Token authenticity.
- Membership eligibility.
- Duplicate check-in prevention.

A screenshot of an old QR must not work.

Use short-lived signed challenges, nonce validation, and server-side verification.

Do not rely solely on GPS for attendance verification.

### Method C — Manual Check-In

Authorized receptionists can manually record attendance.

Require:
- Member selection.
- Check-in time.
- Optional reason.
- Staff identity.

Maintain an audit trail.

## QR Security

Implement:
- Cryptographically secure tokens.
- Token expiry.
- Replay prevention.
- Tenant validation.
- Rate limiting.
- Duplicate check-in protection.
- Server-side verification.
- Audit logging.
- Secure camera permission handling.

Never use plain predictable member IDs as an authorization credential.

## Attendance Dashboard

Show:
- Today's check-ins.
- Currently checked-in members.
- Daily attendance trends.
- Weekly attendance trends.
- Monthly attendance reports.
- Member attendance history.
- Low-attendance alerts.
- Peak visit periods.

Support check-out functionality where configured.

Only show "currently inside" counts when check-out data is available and reliable.

---

# 8. PAYMENTS AND FINANCIAL MANAGEMENT

Build a complete financial management system using real database records.

## Membership Billing

Support:
- Cash.
- UPI.
- Bank transfer.
- Online payment gateway.
- Partial payments.
- Discounts.
- Refunds.
- Outstanding balances.

## Online Payments

Design an integration for Razorpay.

All payment orders must be created server-side.

Verify gateway signatures and webhooks.

Use idempotency keys and unique gateway transaction references.

Never trust client-side payment success alone.

Never store raw card details.

If gateway credentials are not configured, clearly disable online payment and provide setup instructions.

## Invoices

Generate professional invoices with:
- Invoice number.
- Gym details.
- Member details.
- Plan.
- Billing period.
- Subtotal.
- Discount.
- Applicable tax.
- Amount due.
- Paid amount.
- Outstanding balance.
- Payment status.

Support printable and downloadable PDF invoices and receipts.

Make tax configuration explicit and do not assume GST registration.

## Expense Management

Categories:
- Rent.
- Electricity.
- Staff salaries.
- Equipment maintenance.
- Marketing.
- Cleaning.
- Internet.
- Repairs.
- Other expenses.

Allow recurring expenses and one-time expenses.

## Financial Dashboard

Distinguish:
- Invoiced revenue.
- Actual collections.
- Outstanding receivables.
- Refunds.
- Operating expenses.
- Estimated operating surplus.

Do not label operating surplus as accounting net profit.

---

# 9. LEADS AND SALES CRM

Create a full gym sales pipeline.

Stages:
1. New Lead
2. Contacted
3. Trial Scheduled
4. Trial Completed
5. Follow-up
6. Converted
7. Lost

## Lead Sources

Track:
- Website.
- Google Search.
- Google Maps.
- Instagram.
- Facebook.
- WhatsApp.
- Walk-in.
- Referral.
- Other.

## CRM Features

- Lead capture.
- Staff assignment.
- Follow-up reminders.
- Notes.
- Trial scheduling.
- Lead history.
- Conversion tracking.
- Lost-lead reasons.
- Search and filtering.
- Kanban pipeline.
- Lead-to-member conversion.

Track marketing source attribution when available.

---

# 10. MEMBERSHIP RENEWAL AUTOMATION

Create a dedicated retention system.

## Renewal Alerts

Configurable reminders:
- 7 days before expiry.
- 3 days before expiry.
- 1 day before expiry.
- On expiry.
- 3 days after expiry.

## Messaging

Support:
- In-app notifications.
- Email notifications.
- WhatsApp Business API integration.

Use consent-based messaging.

Use approved templates when required by WhatsApp.

Do not simulate successful delivery.

Maintain notification delivery status.

## Renewal Campaigns

Allow the gym owner to create:
- Renewal offers.
- Seasonal promotions.
- Student discounts.
- Referral offers.
- Premium membership upgrades.
- Personal training offers.

Track campaign performance from actual conversions.

---

# 11. TRAINER MANAGEMENT

Build trainer profiles and a trainer operations system.

Features:
- Trainer onboarding.
- Trainer availability.
- Assigned members.
- Session scheduling.
- Training package management.
- Session completion tracking.
- Trainer performance summaries.
- Personal training revenue attribution.
- Trainer schedules.

## Trainer Portal

Route:

/trainer

Trainer can:
- View assigned members.
- View today's sessions.
- Manage assigned workout plans.
- Record session completion.
- Add training notes.
- View their schedule.
- View permitted performance metrics.

Trainer must not access unrelated members or owner financial data.

---

# 12. MEMBER PORTAL

Route:

/member

Create a premium mobile-first member experience.

## Member Home

Display:
- Digital membership card.
- QR attendance.
- Active membership.
- Renewal date.
- Days remaining.
- Attendance this month.
- Assigned trainer.
- Upcoming sessions.
- Recent announcements.

## Member Features

- Profile management.
- Membership details.
- Renewal history.
- Invoice downloads.
- Payment history.
- Attendance calendar.
- Workout plans.
- Exercise instructions.
- Session booking.
- Referral code.
- Notifications.
- Support requests.

## Workout Plans

Allow trainers to assign workouts with:
- Exercise name.
- Training day.
- Sets.
- Repetitions.
- Rest period.
- Notes.
- Completion tracking.

Support optional exercise demonstration links.

Do not automatically generate personalized medical or injury-related training prescriptions.

---

# 13. ADDITIONAL REVENUE GROWTH FEATURES

Implement these as modular capabilities.

## Referral Programme

Every eligible member receives a unique referral code.

Track:
- Referred leads.
- Successful conversions.
- Referral rewards.
- Reward redemption.

Prevent self-referrals and duplicate rewards.

## Personal Training Upsells

Allow staff to sell:
- One-to-one training packages.
- Session bundles.
- Monthly coaching.
- Premium training add-ons.

Track package balances and completed sessions.

## Inactive Member Recovery

Identify members with no check-in for configurable periods:
- 7 days.
- 14 days.
- 30 days.

Create staff follow-up tasks.

Only send marketing messages to consenting members.

## Birthday and Milestone Messages

Support optional:
- Birthday greetings.
- Membership anniversaries.
- Attendance milestones.

Respect member preferences and consent.

## Digital Announcements

Owner can publish:
- Holiday notices.
- Timing changes.
- Equipment updates.
- New offers.
- Special events.

Show relevant announcements inside the member portal.

## Website Content Manager

Owner should be able to update:
- Gym logo.
- Hero images.
- About section.
- Facilities.
- Membership plans.
- Trainer profiles.
- Testimonials.
- Contact details.
- Business hours.
- FAQs.
- Promotional banners.

Updates should reflect on the public website without code changes.

---

# 14. REPORTS AND BUSINESS INTELLIGENCE

Create downloadable and filterable reports.

Reports:
- Daily collections.
- Monthly collections.
- Outstanding payments.
- Membership growth.
- New memberships.
- Expired memberships.
- Renewals.
- Churn.
- Attendance.
- Peak gym hours.
- Lead conversion.
- Referral performance.
- Trainer utilization.
- Personal training revenue.
- Expense breakdown.
- Operating surplus estimates.

Support:
- Date filtering.
- Comparison periods.
- CSV export.
- Print-friendly reports.
- Clear metric definitions.
- Empty states when records do not exist.

Do not display fabricated data in production.

---

# 15. DATABASE ARCHITECTURE

Use Supabase PostgreSQL.

Create a normalized relational schema.

Required tables:

- gyms
- gym_settings
- gym_branding
- user_profiles
- roles
- user_gym_roles
- members
- membership_plans
- memberships
- membership_freezes
- membership_renewals
- invoices
- invoice_items
- payments
- refunds
- expenses
- expense_categories
- attendance
- attendance_qr_challenges
- attendance_checkin_tokens
- leads
- lead_activities
- lead_followups
- trial_bookings
- trainers
- trainer_assignments
- training_packages
- training_sessions
- workout_plans
- workout_exercises
- workout_assignments
- referrals
- referral_rewards
- promotions
- campaigns
- notification_templates
- notifications
- notification_preferences
- announcements
- website_content
- media_assets
- audit_logs

## Database Requirements

Every tenant-owned table must have appropriate gym ownership linkage.

Implement:
- UUID primary keys.
- Foreign keys.
- Unique constraints.
- Check constraints.
- Created and updated timestamps.
- Useful indexes.
- Transaction-safe financial operations.
- Appropriate soft deletion.
- Database migrations.
- Row-level security.

## Multi-Tenant Security

Every gym must have isolated records.

Use gym_id as the primary tenant scope.

Enforce tenant access using PostgreSQL RLS policies.

Use authenticated identity and verified role membership.

Do not trust a gym_id supplied by the browser without authorization.

Prevent cross-gym access through:
- Queries.
- APIs.
- Storage.
- Exports.
- Realtime subscriptions.
- Background jobs.

Do not allow arbitrary changes to privileged roles.

Use private storage buckets and signed URLs where appropriate.

---

# 16. TECHNOLOGY STACK

Preferred stack:

Frontend:
- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- shadcn/ui.
- Lucide Icons.
- Recharts.
- React Hook Form.
- Zod.

Backend:
- Next.js server actions or route handlers.
- Supabase PostgreSQL.
- Supabase Auth.
- Supabase Storage.
- Supabase Realtime where useful.

Payments:
- Razorpay integration.

QR:
- Secure QR generation.
- Camera-based scanning.
- Server-side token verification.

Email:
- Resend or a compatible provider.

Messaging:
- WhatsApp Business Platform integration.

Hosting:
- Vercel or compatible Next.js hosting.
- Supabase for database, authentication, and storage.

If the Lovable environment cannot directly support the specified framework, explain the limitation and use a compatible architecture only with explicit documentation. Do not silently replace the required stack.

---

# 17. FUNCTIONALITY REQUIREMENTS

Every visible button must perform a meaningful action.

Every form must include:
- Client-side validation.
- Server-side validation.
- Loading states.
- Error feedback.
- Success feedback.
- Proper database persistence.
- Permission checks.

Every data table should support:
- Search.
- Filters.
- Sorting.
- Pagination.
- Empty states.

Destructive operations must include confirmation dialogs.

Financial records should use reversals or auditable status changes rather than unsafe hard deletion.

Use reusable components and consistent patterns.

Avoid fake API calls, hardcoded dashboards, nonfunctional links, and placeholder buttons disguised as completed features.

---

# 18. SECURITY REQUIREMENTS

Implement:
- Supabase authentication.
- Secure role-based access control.
- PostgreSQL RLS.
- Server-side input validation.
- Tenant isolation.
- Secure payment webhooks.
- Rate limiting for sensitive endpoints.
- Safe file upload validation.
- Private data access controls.
- Audit logs.
- Secure session handling.
- Environment variable management.
- Idempotent financial operations.
- Duplicate QR scan prevention.
- Proper error handling.

Never expose Supabase service-role keys or Razorpay secret keys to the client.

Never store passwords manually.

Protect personal member data and restrict unnecessary collection.

---

# 19. RESPONSIVE MOBILE EXPERIENCE

The website and portals must be excellent on smartphones.

## Public Website

- Fast loading.
- Optimized hero.
- Mobile navigation.
- Sticky booking CTA.
- Easy WhatsApp access.
- Touch-friendly forms.

## Member Portal

- Mobile digital membership card.
- Easy QR check-in.
- Attendance calendar.
- Membership renewal.
- Trainer details.

## Owner Dashboard

- Responsive KPI cards.
- Mobile-friendly charts.
- Collapsible sidebar.
- Scrollable tables.
- Quick actions.

## Receptionist Interface

Design for tablets and phones with large scan controls, clear attendance confirmation, and rapid member lookup.

---

# 20. ADMIN SETTINGS

Create a settings centre where the owner can configure:

- Gym name.
- Logo.
- Brand colors.
- Contact information.
- Operating hours.
- Membership plans.
- Attendance rules.
- Membership freeze policy.
- Reminder intervals.
- Notification templates.
- Payment methods.
- Tax configuration.
- Staff roles.
- Public website content.
- QR attendance mode.
- Referral rewards.
- Trial booking availability.

All settings must persist in the database.

---

# 21. DEVELOPMENT ROADMAP

Do not attempt to generate an enormous disconnected UI in one pass.

Build the platform incrementally.

## PHASE 1 — Foundation

1. Inspect the existing repository.
2. Identify the actual framework and dependencies.
3. Explain the proposed architecture.
4. Set up the design system.
5. Configure Supabase.
6. Create migrations.
7. Implement authentication.
8. Implement tenant isolation.
9. Implement role-based permissions.
10. Verify authorization with tests.

## PHASE 2 — Public Website

Build:
- Home.
- About.
- Facilities.
- Membership.
- Trainers.
- Transformations.
- Contact.
- FAQ.
- Trial booking.
- Enquiry forms.
- SEO.

## PHASE 3 — Owner Operations

Build:
- Dashboard.
- Member management.
- Membership plans.
- Membership renewals.
- Attendance.
- QR check-in.
- Staff management.

## PHASE 4 — Finance and CRM

Build:
- Invoices.
- Payments.
- Expenses.
- Financial reports.
- Lead CRM.
- Trial management.

## PHASE 5 — Member and Trainer Portals

Build:
- Member portal.
- Digital membership card.
- QR access.
- Trainer portal.
- Workout assignments.
- Session scheduling.

## PHASE 6 — Growth Automation

Build:
- Renewal reminders.
- Referral programmes.
- Inactive-member follow-ups.
- Promotions.
- WhatsApp integration.
- Analytics.

## PHASE 7 — Production Hardening

Implement:
- Security testing.
- Cross-tenant authorization tests.
- QR replay tests.
- Payment webhook tests.
- Responsive testing.
- Accessibility checks.
- Performance optimization.
- Error handling.
- Deployment documentation.

---

# 22. DEMO MODE

Create a separate optional demo mode.

Demo data must be clearly labelled.

Never mix sample data with production gym records.

When the production database is empty, show helpful empty states.

Example:

"No members yet. Add your first member to get started."

Never show fabricated revenue, payments, or attendance in a live owner dashboard.

---

# 23. DELIVERY REQUIREMENTS

Provide:

1. Functional application code.
2. Database schema and migrations.
3. Supabase RLS policies.
4. Authentication and role setup.
5. Reusable UI components.
6. Functional QR attendance implementation.
7. Real database-connected dashboard.
8. Environment variable example.
9. External integration setup instructions.
10. Deployment instructions.
11. Optional seed data for demo environments.
12. Test instructions.
13. A list of features implemented.
14. A list of features requiring credentials.
15. Known limitations and remaining work.

Include clear setup steps for Supabase, Razorpay, Resend, WhatsApp Business Platform, and hosting where applicable.

Do not claim a feature is complete unless it is implemented and tested.

---

# 24. FINAL PRODUCT EXPERIENCE

The final experience should feel like two products working seamlessly together:

**MUSCLE MONK GYMNASIUM**

A powerful, cinematic, premium gym website designed to attract visitors and convert them into members.

**GYM OS**

A professional, secure gym operating system that helps owners manage members, attendance, revenue, trainers, sales, and retention.

The system should be suitable for Muscle Monk Gymnasium immediately and architected to support other gyms in the future.

Prioritize excellent visual quality, real functionality, operational simplicity, data accuracy, security, and long-term maintainability.

**START NOW:**

First inspect the existing project and report the architecture and dependencies.

Then implement Phase 1 with actual code, database migrations, authentication, and verified tenant isolation.

After Phase 1, continue module by module, testing and fixing each implementation before moving to the next.

Do not stop after generating a homepage or dashboard mockup.

Build a real product.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/222ccfb8-e550-4224-8fa4-85dcaa5c6ff3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
