# Recruiter Message & Job Posting Sanity Check

*User Guide*

This tool is a single web page (recruiter-message-checker.html) that screens either a suspicious recruiter message or a job posting against known scam patterns — entirely in your browser. Unlike every other tool in this family, it doesn't generate a prompt for Claude: paste your text, click Run the check, and you get a scored, explained result immediately, with nothing sent anywhere.

## Claude Settings You'll Need Before You Start

None. This tool runs entirely client-side — no web search, no code execution, no Claude conversation at all. That's a deliberate design choice: the check is fast and repeatable enough that routing it through a chat would only slow it down.

## 1. How This Fits With the Other Tools

This is one of two "ongoing" tools in the suite (the other is LinkedIn Article Share Builder) — not a step in the four-tool research-to-outreach funnel. Use it any time, whether or not you're actively job hunting: whenever a recruiter message or a job posting feels off.

## 2. The Mode Toggle

At the top of the page: **Checking a: Recruiter Message / Job Posting**. This switches the entire input panel, checklist, and pattern library underneath it — not just a couple of fields. The two modes check genuinely different things:

- **Recruiter Message mode** asks whether the *person or account contacting you* is likely legitimate.
- **Job Posting mode** asks whether the *listing itself* is likely legitimate.

A message can come from a real recruiter about a fake listing, or a fake account can forward a real listing — they're independent questions, which is why each mode gets its own full field set rather than a handful of shared fields with the rest bolted on. Switching modes resets the results panel to its empty state, since a message-mode report showing while posting-mode inputs are visible would be confusing.

## 3. Recruiter Message Mode

### Inputs

- **The message text** — paste the full InMail or message.
- **Company they claim to represent** (optional) — used for a domain-mismatch check against the sender's email.
- **Sender's email** (optional) — if given alongside the company name, the tool checks whether the email domain plausibly matches the claimed employer.

### Profile signals checklist

Manual checkboxes for things the tool can't read from the message text alone: a recently created profile, fewer than ~50 connections, no verification badge, a profession unrelated to recruiting or the pitch, a generic/AI-generated-looking photo, not listed as an employee on the company's own LinkedIn page, few mutual connections, little posting history. The photo-related checks link out to free tools (Google Images, TinEye, Bing Visual Search for reverse image search; Is It AI?, Quillbot for AI-detection) so you can check without leaving the page — these are clearly marked optional and never auto-run; you decide whether to click through.

### Text patterns checked automatically

The message text itself is scanned for known scam-message patterns: pushing the conversation off-platform (WhatsApp/Telegram/Signal), vague or "under discussion" title/pay/team, asking for personal contact details before any formal process, an unnamed intermediary you can't verify, urgency language, upfront fee requests, requests for financial information, generic flattery with no specifics, a generic "opportunity" pitch, being asked to download an app, cryptocurrency mentions, unrealistically high pay, and communicating from a free personal email address.

### Structural checks

Two checks flag what's *missing* rather than present: no company or employer named anywhere in the message, and no job title or role type mentioned at all. Absence is often more telling than presence — a message that avoids naming anything concrete is a common way to keep a pitch vague enough to fit any recipient.

## 4. Job Posting Mode

### Inputs

- **The posting text** — paste the full listing.
- **Company the posting is for** (optional) — used for the same domain-mismatch logic as message mode, checked against the apply-contact field below.
- **How to apply — email or link** (optional) — if the posting gives an application email, the tool checks whether its domain plausibly matches the claimed company.
- **Where you found this posting** (optional, for your own reference) — company's own careers page, LinkedIn, Indeed, a text message, etc.

### Listing signals checklist

Manual checkboxes for things the tool can't verify automatically: the listing has been active or reposted for 60+ days, the exact wording appears verbatim for a different company (check by searching a distinctive sentence in quotes), no specific team or hiring manager is named, the company has little to no independent online presence (no reviews, thin LinkedIn page, no verifiable official website), no application deadline ever (an "evergreen" listing), the interview process is described as entirely text/chat-based with no live call ever offered, the listing isn't found on the company's own official careers page when checked directly, and no employee reviews exist on Glassdoor or Indeed at all. Several of these link out to free tools (Google for text-duplication search, Glassdoor/Indeed for reviews) — same rule as message mode: optional, never auto-run.

### Text patterns checked automatically

The posting text is scanned for known scam-listing patterns: requiring you to purchase your own equipment or a "starter kit," any processing/registration/training fee or deposit to start, descriptions of receiving-and-reshipping packages or processing payments as the job itself (a well-documented scam category), unusually high pay advertised alongside "no experience necessary," requests for banking details/SSN/ID copies at the application stage, being asked to apply via WhatsApp/Telegram/text instead of a normal process, urgency language, vague buzzword-heavy language with no concrete responsibilities, a free personal email as the application contact, and cryptocurrency/trading/investment mentions.

### Structural checks

Three checks flag what's missing: no salary or pay range anywhere in the posting, no actual day-to-day responsibilities or duties described, and no specific company named (checked only when you haven't filled in the company field yourself and the text doesn't obviously name one).

## 5. Custom Red Flags (Both Modes)

Each mode has its own custom-phrase box — add a phrase you've personally seen in scam messages or postings, and it's checked in addition to the built-in list for that session. These are per-mode and don't carry over between message and posting checks.

## 6. Reading the Result

- **Stamped verdict** — Low signal detected / Proceed with caution / High risk, based on a weighted score out of 100.
- **Score and caption** — labeled "Pattern match strength" in message mode or "Listing risk signal strength" in posting mode, with an explicit note that this reflects overlap with known patterns, not a probability of fraud.
- **Every flag found**, with severity (High/Medium/Low) and a plain-language explanation of why it matters, sorted highest severity first.
- **The text itself, with flagged phrases highlighted in place** — labeled "Message with flagged phrases marked" or "Posting with flagged phrases marked" depending on mode.
- **Reporting links** (score ≥ 25) — LinkedIn's report form, the FBI's IC3, and the FTC's ReportFraud site. These apply regardless of which mode flagged the result.
- **A mode-appropriate next step** (caution range only, score 25-54) — see Section 7.

A score of 0 or a clean checklist doesn't confirm legitimacy, and a flagged result isn't proof of a scam. Always verify independently through the company's own careers page or domain before making a decision based on this tool alone.

## 7. The Caution-Range Next Step

This only appears for results that land specifically in the "Proceed with caution" band (25-54) — not clearly clean, not clearly high-risk. The two modes generate genuinely different content here, both built from the specific flags that were actually raised for your input:

- **Message mode — "Follow-up message to send":** a ready-to-copy reply asking the sender for the specifics a real recruiter can always provide (official company name, a link to the specific posting or a requisition ID, the job title and team) plus mode-specific asks if relevant flags fired (e.g. asking an unnamed intermediary for a way to verify them directly, or asking to keep communication on a company email rather than WhatsApp).
- **Posting mode — "Verify before you apply":** a checklist of independent verification steps (confirm the posting on the company's own careers page, check Glassdoor/Indeed for reviews, search a distinctive sentence from the posting in quotes to check for duplication) plus a closing reminder never to pay a fee or share banking/ID details before a signed offer.

A high-risk result doesn't get either of these, on purpose — that result calls for disengaging, not a more carefully worded reply or a longer verification process.

## 8. History

Every check you run — either mode — is added to a running history list for the session, tagged `[MESSAGE]` or `[POSTING]` so a mixed session stays legible, with a color-coded verdict badge and score. History is in-memory only:

- **Download history** saves it as a JSON file you can keep.
- **Load history** lets you bring a previously downloaded file back in, appending it to whatever's already in the current session.
- **Clear history** wipes the current session's list (does not affect any downloaded file).

Nothing is saved automatically, and nothing uses browser storage — closing the tab loses anything you haven't downloaded.

## 9. Printing / Saving a Report

The Print button opens your browser's print dialog with the input panels, mode toggle, and buttons hidden, showing just the case-file report — useful for keeping a record or sharing a specific result. Copy report copies a plain-text summary of the verdict, score, and flags to your clipboard.

## 10. Try a Sample

Three sample chips appear under the header, and they change depending on which mode you're in:

- **Message mode:** a vague-title/WhatsApp-handoff message, an upfront-equipment-fee message, and an ordinary low-flag message from a real-looking recruiter.
- **Posting mode:** a reshipping/evergreen-listing scam, an equipment-fee/pay-to-start scam, and an ordinary low-flag posting from a real-looking company.

Each one fills in every relevant field so you can see how a full result looks before trying your own text.

## 11. Quick Troubleshooting

| Problem | Fix |
|---|---|
| Nothing happens when I click Run the check | The text box for the active mode needs something in it — an empty message or posting field won't run. |
| Wrong panel is showing | Check the mode toggle at the top — switching modes swaps the entire input panel, not just a couple of fields. |
| A checkbox item doesn't seem to affect the score | Some checklist items are marked "optional" with links to external verification tools — checking the box after you've verified externally is what contributes to the score, the links themselves don't auto-check anything. |
| The follow-up/checklist box isn't showing | It only appears for results in the caution band (score 25-54) — a clean or high-risk result won't show it, by design. |
| History disappeared | History is session-only unless you download it — reloading the page or closing the tab clears it. |
| I want to check both a message and a posting from the same company | Run them as two separate checks — switch modes between them. Both will show up in history, tagged so you can tell them apart. |
| A reverse-image-search or text-duplication link didn't turn anything up | These are pointers to external tools, not built-in automated checks — the tool can't run them for you, since that would mean sending your data somewhere outside your browser. |
