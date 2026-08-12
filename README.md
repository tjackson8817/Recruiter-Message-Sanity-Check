# Recruiter Message & Job Posting Sanity Check

A single-file, browser-based tool that screens either a recruiter message (LinkedIn InMails, emails, etc.) or a job posting for wording and behavior patterns commonly seen in scams — pick the mode at the top of the page. Built for job hunters who want a quick sanity check before replying to an unsolicited "opportunity" or applying to a listing that feels off.

**This is a heuristic screening tool, not a fraud detector.** It flags known scam patterns; it does not verify anyone's real identity, employer, or a listing's legitimacy.

## Files in this repo

| File | What it's for |
|---|---|
| `recruiter-message-checker.html` | The tool itself. Open it in any browser — no install, no server, no dependencies. |
| `index.html` | Redirects to `recruiter-message-checker.html` — lets the GitHub Pages root URL land on the tool directly. |
| `Recruiter_Message_Sanity_Check_User_Guide.md` | Full usage guide — every field, mode, and feature explained, covering both Recruiter Message and Job Posting modes. |
| `Recruiter_Message_Sanity_Check_User_Guide.docx` | Same guide, as a Word document. |

## Quick start

1. Open `recruiter-message-checker.html` (via GitHub Pages, or download and double-click it).
2. Choose a mode at the top: **Recruiter Message** or **Job Posting**. This switches the entire input panel, checklist, and pattern library.
3. Paste the message or posting text into the box.
4. Optionally, fill in the company name and (for messages) the sender's email, or (for postings) the application contact and where you found it — and check off any relevant items in that mode's checklist.
5. Click **Run the check**.
6. Review the verdict, the risk-signal score, and the flagged phrases highlighted inline.

See `Recruiter_Message_Sanity_Check_User_Guide.md` for the full walkthrough of both modes, including what each flag means, how to add your own custom red flags, and how to save/reload your check history.

## Features

- **Two full modes, not a shared form** — Recruiter Message and Job Posting each get their own input fields, checklist, and pattern library, since they check genuinely different things (a message's sender vs. a listing's own legitimacy).
- **Recruiter Message mode** scans for off-platform pushes to WhatsApp/Telegram, vague title/comp, upfront fees, requests for bank/SSN details, urgency language, crypto mentions, unnamed "friend of a friend" go-betweens, and more.
- **Job Posting mode** scans for equipment/activation fees, reshipping and payment-processing scam structures, unrealistic pay for no experience, financial info requested at the application stage, off-platform apply flows, and more — plus a checklist for evergreen/repeatedly-reposted listings, duplicated listing text, and thin-to-nonexistent company presence.
- Flags what's *missing*, not just what's present — a message with no company name and no job title scores as a flag even with no scammy keywords at all; a posting with no salary range, no responsibilities, and no named company gets the same treatment.
- Flags a mismatch between the sender's/application's email domain and the claimed employer.
- Manual checklist for signals the tool can't read automatically (account age, connection count, verification badge, reverse-image-search hits for messages; listing duplication, company review presence for postings).
- Custom red-flag phrases per mode, session-only.
- Inline highlighting of every flagged phrase in the original text.
- For results in the caution range, generates a mode-appropriate next step: a ready-to-send follow-up message for Recruiter Message mode, or a pre-application verification checklist for Job Posting mode.
- Direct links to LinkedIn's reporting flow, IC3, and the FTC when a result scores in the caution/high range.
- Three sample messages and three sample postings to try either mode without real text on hand.
- Session history with manual download/reload, tagged by mode — no accounts, no browser storage APIs.

## Privacy

Everything runs client-side in JavaScript. Nothing typed into the tool is sent anywhere — there's no backend, no analytics, no network calls, in either mode.

## Limitations

- Regex-based matching will miss scams that avoid the specific wording checked for, and can occasionally flag legitimate messages or postings using similar phrasing.
- The domain-mismatch check is a rough heuristic and can misfire on abbreviated or rebranded company names.
- Job Posting mode's listing-duplication and company-presence checks are self-report checklist items, not automated — verifying them means clicking out to Google/Glassdoor/Indeed yourself, since the tool never makes outbound requests.
- This tool cannot confirm anyone's identity, employment, or a company's/listing's legitimacy — always verify independently through the company's official careers page or domain.
