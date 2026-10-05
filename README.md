# Recruiter Message & Job Posting Sanity Check

A single-file, browser-based tool that screens a recruiter message (LinkedIn InMail, email, text) or a job posting for the wording, link, domain, and email-header patterns common in scams. Built for job hunters who want a quick sanity check before replying to an unsolicited "opportunity" or applying to a listing that feels off.

**This is a heuristic screening tool, not a fraud detector.** It flags known scam patterns. It does not verify anyone's identity, employer, or a listing's legitimacy.

Live tool: https://tjackson8817.github.io/Recruiter-Message-Sanity-Check/

## Files in this repo

| File | What it's for |
|---|---|
| `recruiter-message-checker.html` | The tool. Open it in any browser. No install, server, or dependencies. |
| `index.html` | Redirects the GitHub Pages root URL to the tool. |
| `Recruiter_Message_Sanity_Check_User_Guide.md` | The full user guide. This is the single source for the documentation. |
| `Sale_Fish_Recruiter_Message_Sanity_Check_User_Guide.docx` | The branded Word version of the same guide, generated from the Markdown. |
| `FONT-LICENSES.txt` | Licenses for the fonts embedded in the tool (Apache 2.0 and SIL OFL 1.1). |
| `md2docx.js` | Regenerates the Word guide after editing the Markdown: `npm install docx`, then `node md2docx.js Recruiter_Message_Sanity_Check_User_Guide.md Sale_Fish_Recruiter_Message_Sanity_Check_User_Guide.docx`. |

## Quick start

1. Open the tool (live link above, or download the HTML file and double-click it).
2. Choose **Recruiter Message** or **Job Posting** at the top.
3. Paste the text. That's the only required field. Optionally add the company name, the company's real website domain, the sender's name and email (or the apply contact), and, for emails, the raw headers.
4. Tick any checklist items that apply and click **Run the check**.
5. Review the verdict, the flags, the links found, and the "Verify it yourself" searches.

## What it checks

- **Text patterns**, after undoing common disguises (spaced-out letters, hidden zero-width characters, look-alike letters, "Wh@tsApp"): messaging-app hand-offs, upfront fees and equipment purchases, requests for bank details/SSN/ID, task scams, fake-check and "approved vendor" schemes, gift cards and payment apps, chat-only interviews, "hired with no interview," early tax and direct deposit paperwork, reshipping jobs, crypto, unrealistic pay, urgency, and vague pitches.
- **Domains**: compares the sender or apply-contact domain against the company's official domain (exact) or name (heuristic, acronym-aware), and flags typosquats, look-alike characters, real names wrapped in hiring words (`acme-careers.com`), different extensions, punycode, free email providers, and cheap often-abused extensions.
- **Links**: extracts every link and flags messaging-app invites, shorteners, free form and file hosts, raw IP addresses, and imitation domains. Recognized applicant-tracking systems count in a message's favor.
- **Email headers**: reads SPF, DKIM, and DMARC results, and flags Reply-To redirection, display-name spoofing, and mismatched bounce domains.
- **What's missing**: no company named, no role, no responsibilities, no pay range.
- **Manual checklists** for things the tool can't see, such as profile age, connections, and employee listings for messages, or repost history and review presence for postings.

## Scoring

- Weighted flags add up to a score out of 100. Related flags count once.
- **Decisive red flags** (fees, banking or ID requests, task scams, fake checks, reshipping, and two dangerous combinations) force High risk regardless of anything else.
- **Points in its favor** (official-domain email, authenticated headers, applicant-tracking links, requisition IDs) lower the score by up to 25, and are ignored when a decisive red flag fires.
- Caution-range results (25-54) get a tailored follow-up message (messages) or verification checklist (postings).

## Verify it yourself

The message panel has a **Check the profile photo** section with links to reverse image search (Google Lens, TinEye, Bing Visual Search, Yandex Images) and AI-image detectors (Is It AI?, Quillbot, Hive). The user saves the photo and uploads it themselves; the tool never touches it.

Every report also includes one-click searches built from what you entered: LinkedIn and Google searches for the sender, Google searches for any email or phone number, the company's real careers page, scam warnings, reviews, OpenCorporates, domain registration date, VirusTotal, urlscan.io, the Wayback Machine, and an exact-quote search for reused scam templates.

## Deep check with Claude

Every report includes a ready-made prompt to paste into Claude with web search turned on. It packages the extracted company, domains, sender details, header results, links, phone numbers, and local flags, and asks Claude to verify the company, role, and sender and search for scam reports. Users can exclude the full message text and share only the extracted details.

## Privacy

The check runs entirely client-side, with no backend, analytics, or browser storage. A `Content-Security-Policy` tag makes the browser block every outside request the page could make, and the fonts are embedded, so opening the page contacts no one. Data leaves the device only when the user clicks a verification link (that search term goes to that site), uploads a photo to a search site, or pastes the Claude prompt.

## Testing

Open `recruiter-message-checker.html?selftest` to run every sample plus extra edge cases and confirm each lands in its expected verdict band. Run it after any pattern change, and add a test case for any false positive or missed scam.

## Limitations

- Pattern matching misses scams that avoid the checked wording and can occasionally flag legitimate text.
- Domain comparison without an official domain is a heuristic. Entering the official domain makes it exact.
- Passing SPF/DKIM/DMARC proves only that an email came from the sending domain, not that the domain belongs to the company.
- The tool never looks anything up on its own. Registration dates, reputation, reviews, and profile checks happen through the verification links, on your command.
