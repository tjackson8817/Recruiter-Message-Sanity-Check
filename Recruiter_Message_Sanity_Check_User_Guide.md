# Recruiter Message & Job Posting Sanity Check

*User Guide, version 2.1*

This tool is a single web page (`recruiter-message-checker.html`) that screens a suspicious recruiter message or job posting against known scam patterns, entirely in your browser. Paste the text, click **Run the check**, and you get a scored, explained result immediately. Nothing you type is sent anywhere.

> **Disclaimer:** This tool offers automated guidance only, based on pattern-matching against known scam wording, link, domain, and email-header patterns. It is not guaranteed to be accurate, complete, or up to date, and its output should never be treated as a definitive determination that a message or posting is or is not fraudulent. Results can include false positives and false negatives. It does not replace independent judgment, professional advice, or direct verification with the company in question, and Sale Fish Marketing and Consulting accepts no liability for decisions made based on its results.

## What This Tool Is and Isn't

It's good for quickly triaging a suspicious recruiter message or job posting, so you can decide how much scrutiny it deserves before you reply or apply. It is a fast first pass, not a final verdict.

It is **not an identity or background check**. It doesn't verify who someone is, where they work, or whether a company is legitimate. It is **not comprehensive**: new or unusual scam wording can slip through. And it is **not a replacement for judgment**. A clean result doesn't confirm legitimacy, and a flagged result isn't proof of a scam.

This is one of two "ongoing" tools in the suite (the other is LinkedIn Article Share Builder), not a step in the four-tool research-to-outreach funnel. Use it any time a message or listing feels off.

**Claude settings you'll need:** none for the check itself, which runs entirely in your browser. If you use the optional deep check in Section 8, turn on **web search** in the Claude conversation you paste the prompt into.

## 1. Getting Started

1. Open the tool at https://tjackson8817.github.io/Recruiter-Message-Sanity-Check/ or download `recruiter-message-checker.html` and double-click it. Chrome, Safari, Edge, and Firefox all work.
2. Choose a mode at the top: **Recruiter Message** or **Job Posting**.
3. To see how it works first, click one of the sample buttons under the header. Each fills in every field.

No login, install, or account is required.

**What you need to provide.** Only the message or posting text is required. Everything else is optional, and each field you fill in makes the result more accurate. The practical minimum is three things: the text, the company name, and the company's real website domain. Text alone catches the obvious scams. The company name and real domain catch the convincing ones, like a polished message sent from a lookalike domain. Email headers, the profile photo check, and the checklists are for digging further when a result lands in the caution range.

## 2. The Mode Toggle

**Checking a: Recruiter Message / Job Posting** switches the entire input panel, checklist, and pattern library. The two modes ask different questions. Recruiter Message mode asks whether the *person contacting you* is likely legitimate. Job Posting mode asks whether the *listing itself* is likely legitimate. A real recruiter can forward a fake listing, and a fake account can forward a real one, so each mode has its own fields. Switching modes clears the report panel.

## 3. Recruiter Message Mode

### Inputs

- **The message text (required).** Paste the full InMail or email, including the signature, since that's where emails, phone numbers, and links often appear.
- **Company they claim to represent.** Used to compare against the sender's email domain and any links.
- **Company's real website domain.** Optional, but it makes the domain checks far more accurate. Find it yourself by searching for the company, not from a link in the message. For example, Schneider Electric's is `se.com`.
- **Sender's name, as shown.** Used to build LinkedIn and Google searches for the person.
- **Sender's email.** Checked against the company name or official domain.
- **Email headers.** Optional, and for email only (LinkedIn messages don't have headers). Headers show where an email really came from. To copy them in Gmail, open the email, choose the ⋮ menu, then **Show original**. In Outlook on the web, use the ⋯ menu, then **View**, then **View message details**. In Outlook desktop, use **File**, **Properties**, **Internet headers**. In Apple Mail, use **View**, **Message**, **All Headers**. Paste everything above the message body.

### Checking the profile photo

Fake recruiter profiles usually use a stolen photo or an AI-generated face. The tool can't check the photo itself, because that would mean uploading it somewhere, so the **Check the profile photo** section gives you links to do it yourself.

First, save the photo: open the sender's LinkedIn profile, click the photo to enlarge it, then right-click and save it. On a phone, take a screenshot and crop it. Then upload it to these sites.

To see whether the photo is used elsewhere (reverse image search):

- Google Lens: https://lens.google.com/
- TinEye: https://tineye.com/
- Bing Visual Search: https://www.bing.com/visualsearch
- Yandex Images: https://yandex.com/images/ (often the best at matching faces, but a Russia-based service, so skip it if that concerns you)

To see whether the photo is AI-generated:

- Is It AI?: https://isitai.com/ai-image-detector
- Quillbot AI Image Detector: https://quillbot.com/ai-image-detector
- Hive AI-Generated Content Detection: https://hivemoderation.com/ai-generated-content-detection

AI detectors give false results both ways, so look for yourself too: mismatched earrings or glasses, warped backgrounds, blurry hairlines, unnaturally smooth skin, and eyes centered in exactly the same spot as other AI headshots. If a search turns up the photo under a different name or on a stock-photo site, tick that box in the checklist. The same links also appear in the report's "Verify it yourself" section.

### Profile signals checklist

Tick anything that applies after looking at the sender's LinkedIn profile:

- Profile created within the last 6 months. LinkedIn shows the join date under **About this profile** on their profile page.
- Fewer than about 50 connections.
- No verification badge (ID, employer, or workplace email verification).
- Few or no mutual connections in your industry.
- Little to no posting or comment history.
- No signature with a company email, phone number, or office address.
- Headline or profession unrelated to recruiting or the pitch.
- Profile photo looks AI-generated, stock, or oddly generic.
- Not listed as an employee on the company's own LinkedIn page.
- Reverse image search shows the photo used elsewhere.

**How to check whether someone is a listed employee:** search for the company in LinkedIn's top search bar and open its official company page. Click the **People** tab and search the sender's name. A genuine current employee will usually appear. No result isn't proof either way, since privacy settings can hide people, so weigh it alongside the other items. Also look at the sender's Experience section: a real company listing shows the company logo and links to the company page. Plain, unlinked text is a self-reported claim anyone can type.

### What's checked automatically

**Text patterns.** The message is scanned for: pushing you to WhatsApp, Telegram, Signal, or similar apps; vague or "under discussion" title, team, or pay; early requests for your personal email or phone; an unnamed "friend" or "colleague" go-between; hand-offs to a "project lead" or "onboarding manager"; urgency language; upfront fees or equipment purchases; requests for bank details, SSN, or ID copies; task scams (rating apps or products for commission); fake-check and "approved vendor" schemes; gift cards, Zelle, Cash App, and wire services; text-only "chat interviews"; being "selected" or "hired" with no interview; early requests for I-9, W-4, or direct deposit forms; generic flattery; app or remote-access software downloads; crypto; unusually high pay; and free personal email addresses.

**Disguised wording.** Before scanning, the tool undoes common tricks scammers use to dodge filters: spaced-out letters ("W h a t s A p p"), zero-width characters hidden inside words, look-alike letters from other alphabets, and symbol swaps like "Wh@tsApp." Highlights still point to the original text.

**Domain checks.** The sender's email domain is compared against the company:

- If you entered the official domain, the comparison is exact. A match counts in the message's favor. A near-match is flagged as an imitation: the same name on a different ending (`acme.co` vs `acme.com`), look-alike characters (`acmeanalytlcs.com`), the real name wrapped in extra words (`acmeanalytics-careers.com`), or a one- or two-letter typo.
- If you only entered the company name, the tool recognizes the full name, a short form, or an acronym (so `se.com` matches Schneider Electric), and flags hiring words bolted onto the name (`brightpath-jobs.net`) and unrelated domains.
- Free personal email providers, internationalized "punycode" domains, and cheap, often-abused extensions like `.xyz` or `.top` are also flagged.

**Links.** Every link in the message is pulled out and classified: messaging-app invites (`wa.me`, `t.me`), link shorteners that hide the real destination (`bit.ly`), free forms, file-sharing, and site-builder hosts (Google Forms, Dropbox, Wix), raw IP addresses, imitation domains, and recognized applicant-tracking systems such as Greenhouse, Lever, and Workday, which count in the message's favor.

**Email headers.** If you pasted headers, the tool reads the SPF, DKIM, and DMARC results your email provider recorded. It flags failures, a Reply-To address that sends your answer somewhere other than the sender, a display name that shows a different address than the real one, and a bounce address on a different domain. When all three checks pass, the report explains what that does and doesn't mean: the email really came from that domain, but that doesn't prove the domain belongs to the company.

**What's missing.** Two checks flag absence: no company named anywhere, and no job title or role type mentioned. A message that never names anything concrete gives you nothing to verify.

## 4. Job Posting Mode

### Inputs

- **The posting text (required).** Paste the full listing.
- **Company the posting is for**, and the **company's real website domain**, used the same way as in message mode.
- **How to apply.** An email address or a link. Either one is checked against the company.
- **Where you found this posting.** If you found it through a text, a cold email, or a messaging app, that's flagged. If you found it on the company's own careers page, that counts in its favor.

### Listing signals checklist

Tick anything that applies: listed or reposted for 60+ days; the exact wording appears for a different company (use the exact-sentence search link in the report); no team or hiring manager named; little to no independent online presence; no application deadline, ever; an interview process that's entirely text or chat; not found on the company's own careers page; no reviews on Glassdoor or Indeed.

### What's checked automatically

The posting is scanned for: required purchases of equipment or a "starter kit"; any fee or deposit to start; receiving and reshipping packages or processing payments as the job itself; task scams; fake checks and "approved vendors"; irreversible payment methods; high pay with no experience required; requests for banking, SSN, or ID at the application stage; applying through WhatsApp, Telegram, or text; chat-only interviews; "no interview required"; early tax or direct deposit paperwork; urgency; buzzword-heavy language with no real duties; free personal email contacts; and crypto. The same disguised-wording, domain, and link checks from message mode apply.

Three checks flag what's missing: no salary or pay range, no actual responsibilities, and no company named.

## 5. Custom Red Flags

Each mode has its own box for phrases you've seen in scams yourself. They're checked alongside the built-in list for the current session and don't carry over between modes.

## 6. Reading the Result

**The verdict and score.** The score out of 100 measures overlap with known scam patterns. It is not a probability of fraud.

| Verdict | Score | What it means |
|---|---|---|
| Low signal detected | 0-24 | Few or no known patterns matched. Still verify independently. |
| Some caution | 25-39 | A few patterns matched. A follow-up message or checklist appears. |
| Elevated caution | 40-54 | Several patterns matched. Verify before sharing anything. |
| High risk | 55-100 | Strong overlap with known scams. Stop engaging and consider reporting. |

**Automatic high risk.** Some signals are decisive on their own, and force a score of at least 60 no matter what else the text says: any fee, deposit, or required purchase; requests for banking details, SSN, or ID; task scams; fake-check or "vendor" schemes; reshipping or payment-processing jobs. Two combinations also trigger it: a messaging-app hand-off plus a crypto or high-pay pitch, and an imitation domain plus failed email authentication or a redirected Reply-To. The reason is shown in a red box under the score.

**Points in its favor.** A few details lower the score slightly: an email or link on the official domain you confirmed, email headers that authenticate as the official domain, a link to a recognized applicant-tracking system, a requisition or job ID, and (for postings) finding it on the company's careers page. The total reduction is capped at 25 points. These are ignored when a decisive red flag is found, because scammers often copy legitimate-looking details.

**Flags.** Every match, sorted by severity, with a plain-language explanation and the exact phrase that triggered it. Related flags count once: if a message mentions WhatsApp in the text and also includes a `wa.me` link, that's one off-platform flag, not two.

**What the email headers show.** A summary of the sender address and authentication results, when headers were pasted.

**Links found.** Every link with its classification, plus one-click lookups on VirusTotal, urlscan.io, and the domain's registration record. Use these instead of opening the link itself.

**Verify it yourself.** Ready-made searches built from what you entered: a LinkedIn people search for the sender at the company; Google searches for their profile, for the name next to "scam," and for any email address or phone number in the message; the photo-check sites from Section 3; the company's real careers page; impersonation warnings; Glassdoor and Indeed reviews; OpenCorporates for business registration; registration date, reputation, scan history, and Wayback Machine snapshots for each domain; and an exact-quote search on the most distinctive sentence, which reveals reused scam templates. Each link opens in a new tab and sends only that search term to that site. A domain registered a few weeks ago that claims to be a decades-old company is one of the strongest signals you can find.

**Reporting links** appear at a score of 25 or above: LinkedIn's reporting form, the FBI's IC3, and the FTC's ReportFraud site.

**The text with flagged phrases highlighted** appears at the bottom.

## 7. The Caution-Range Next Step

For scores from 25 to 54, the report adds a next step built from the flags that fired.

In **message mode**, it's a ready-to-send reply asking for what a real recruiter can always provide: the official company name, a link to the posting on the company's own site or a requisition ID, and the job title and team. It adds specific asks when relevant, such as a way to verify an unnamed intermediary, confirmation that correspondence comes from the company's main email domain, why replies are routed elsewhere, a direct link instead of a shortened one, and a request to keep things off WhatsApp and to interview by live call.

In **posting mode**, it's a verification checklist: find the company's real website yourself and confirm the role is listed, check reviews, run the exact-sentence search, and never pay a fee or share banking or ID details before a signed offer.

High-risk results don't get either one, on purpose. That result calls for disengaging, not a better-worded reply. And a smooth, professional answer to the follow-up doesn't clear a sender. Keep verifying through the company's own site.

## 8. Deep Check With Claude (Optional)

Every report includes a **Want a deeper look? Ask Claude** box with a ready-made prompt. Copy it into a Claude conversation with web search turned on. Claude will look for the company's real website and careers page, check whether the role is actually posted, look for the sender in public sources, search for scam and impersonation reports involving the company, domains, and phone numbers, and research any unofficial domains. It's told not to open links that aren't on the official domain, and to say what it couldn't verify.

The prompt includes the company, official domain, sender details, email-header results, extracted emails, phone numbers, and links, plus the local check's score and flags. By default it also includes the full text. Untick **Include the full text** to share only the extracted details.

This is the only step that shares anything with anyone, and only if you paste it. Use it when a result is in the caution range and you want more than the tool can tell you on its own.

## 9. History, Copying, and Printing

Every check is added to a session history, tagged `[MESSAGE]` or `[POSTING]`, with a verdict badge and score. It lives in memory only. **Download history** saves it as a JSON file, **Load history file** brings a saved file back, and **Clear history** wipes the current list. Closing the tab loses anything you haven't downloaded.

**Copy report** copies a plain-text summary of the verdict, flags, points in its favor, header findings, and links. **Print / Save as PDF** prints just the report, without the input panels, the verification links, or the Claude prompt.

## 10. Privacy

The check runs entirely in your browser: no server, no analytics, and no browser storage. This is enforced, not just promised. The page carries a security policy that tells your browser to block every outside request it might try to make, and its fonts are built into the file, so opening it contacts no one. Anyone can confirm this by viewing the page source: the policy is the `Content-Security-Policy` line near the top.

Things leave your device only when you choose: clicking a verification link sends that one search term to that site, uploading a photo to a search site sends the photo there, and pasting the Claude prompt shares its contents with Claude.

## 11. For Maintainers

**Customizing patterns.** All detection rules live in `messagePatterns` and `postingPatterns` in the page's script. Each entry has an `id`, a `label`, a `why` explanation, a `severity`, a `weight`, and either a `regex` or a `find()` function. Two optional fields control scoring: `group`, so related patterns count once, and `hardStop: true`, which forces High risk. Recognized domain lists (shorteners, messaging apps, free email providers, applicant-tracking systems, risky extensions) are arrays near the top of the script.

**The security policy.** If you ever add a feature that needs an outside connection, it will fail silently until you add that site to the `Content-Security-Policy` line. That's deliberate: nothing can start making requests without someone changing that line on purpose. The embedded fonts' licenses are in `FONT-LICENSES.txt`.

**Self-test.** Open the page with `?selftest` added to the address, for example `recruiter-message-checker.html?selftest`. A panel runs every sample plus extra edge cases (obfuscated wording, typosquats, clean headers, acronym domains, and a legitimate bank teller posting that mentions bank accounts) and reports whether each lands in its expected band. Run it after every pattern change, and add a case for any false positive or missed scam you find.

## 12. Limitations

- Pattern matching misses scams that avoid the wording it checks for, and can occasionally flag a legitimate message with similar phrasing.
- Domain comparison without an official domain is a heuristic. Rebranded companies, unusual abbreviations, and companies that recruit through an agency can misfire. Entering the official domain removes most of this.
- Passing email authentication only proves the email came from the sending domain. Scammers can set up authentication on domains they register themselves.
- The "what's missing" checks can give a short but legitimate message a small flag. They carry modest weight and rarely push a score into High risk on their own.
- The tool can't read LinkedIn profiles, look up domain registration dates, or search the web for you, since that would mean sending your data elsewhere. The verification links do that on your command.
- The follow-up message is a way to ask better questions, not a detector. How someone responds still needs your judgment.

## 13. Quick Troubleshooting

| Problem | Fix |
|---|---|
| Nothing happens when I click Run the check | The text box for the active mode needs something in it. |
| The wrong panel is showing | Check the mode toggle. It swaps the whole input panel. |
| A legitimate company's email is flagged as a mismatch | Enter the company's real website domain in the official domain field. That makes the comparison exact. |
| A checklist box doesn't seem to affect the score | Only ticking the box counts. The optional tool links don't check anything automatically. |
| The follow-up or checklist box isn't showing | It appears only for scores from 25 to 54. |
| The header section says it couldn't read anything | Paste the full raw header block, starting with lines like "Received:" or "From:". LinkedIn messages don't have headers. |
| "Points in its favor" are greyed out | A decisive red flag was found, so they aren't counted. |
| History disappeared | History is session-only unless you download it. |
| The photo-check links didn't find anything | That's common for real people with little online presence. It's evidence only when a match turns up under a different name or on a stock-photo site. |
| I want to check a message and a posting from the same company | Run them as two checks, switching modes between them. Both appear in history, tagged. |
