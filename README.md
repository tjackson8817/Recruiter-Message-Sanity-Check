# Recruiter Message Sanity Check

A single-file, browser-based tool that scans recruiter messages (LinkedIn InMails, emails, etc.) for wording and behavior patterns commonly seen in fake recruiter scams. Built for job hunters who want a quick sanity check before replying to an unsolicited "opportunity."

**This is a heuristic screening tool, not a fraud detector.** It flags known scam patterns; it does not verify anyone's real identity or employer.

## Files in this repo

| File | What it's for |
|---|---|
| `recruiter-message-checker.html` | The tool itself. Open it in any browser — no install, no server, no dependencies. |
| `Recruiter_Message_Sanity_Check_User_Guide.md` | Full usage guide — every field, step, and feature explained. |
| `Recruiter_Message_Sanity_Check_User_Guide.docx` | Same guide, as a Word document. |

## Quick start

1. Open `recruiter-message-checker.html` (via GitHub Pages, or download and double-click it).
2. Paste a recruiter message into the text box.
3. Optionally, add the claimed company name, the sender's email, and check off any profile red flags you've noticed.
4. Click **Run the check**.
5. Review the verdict, the pattern match strength score, and the flagged phrases highlighted inline.

See `Recruiter_Message_Sanity_Check_User_Guide.md` for the full walkthrough, including what each flag means, how to add your own custom red flags, and how to save/reload your check history.

## Features

- Scans pasted messages against a built-in list of known scam indicators (off-platform push to WhatsApp/Telegram, vague title/comp, upfront fees, requests for bank/SSN details, urgency language, crypto mentions, and more)
- Flags a mismatch between the sender's email domain and their claimed employer
- Manual checklist for profile-based signals the tool can't read automatically (account age, connection count, verification badge, reverse-image-search hits)
- Custom red-flag phrases, session-only
- Inline highlighting of every flagged phrase in the original message
- Direct links to LinkedIn's reporting flow, IC3, and the FTC when a message scores in the caution/high range
- Three sample messages to try the tool without a real one on hand
- Session history with manual download/reload — no accounts, no browser storage APIs

## Privacy

Everything runs client-side in JavaScript. Nothing typed into the tool is sent anywhere — there's no backend, no analytics, no network calls.

## Limitations

- Regex-based matching will miss scams that avoid the specific wording checked for, and can occasionally flag legitimate messages using similar phrasing.
- The domain-mismatch check is a rough heuristic and can misfire on abbreviated or rebranded company names.
- This tool cannot confirm anyone's identity, employment, or a company's legitimacy — always verify independently through the company's official careers page or domain.
