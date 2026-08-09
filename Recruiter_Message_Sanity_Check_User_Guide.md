# Recruiter Message Sanity Check — User Guide

This guide covers how to use the Recruiter Message Sanity Check tool to screen suspicious recruiter messages — LinkedIn InMails, emails, or any unsolicited job outreach — before you respond to them.

## 1. What This Tool Does

Fake recruiter messages on LinkedIn and email have become increasingly common. This tool scans a message you paste in and checks it against a list of wording patterns that show up again and again in these scams — things like being pushed to WhatsApp, vague job titles, requests for upfront fees, or asks for banking details.

It also flags what's *missing*, not just what's present. A message that never names an employer, never states a job title, or routes the whole opportunity through an unnamed "friend of a friend" scores as suspicious even if it avoids obviously scammy language — because a real recruiter always has an answer for who they work for and what the role is.

It returns a plain-language verdict — Low, Caution, or High — along with a pattern match strength score out of 100. This is a starting point for your own judgment, not a final answer.

## 2. Getting Started

1. Open `recruiter-message-checker.html` in any web browser (Chrome, Safari, Edge, or Firefox). Double-click the file, or drag it into an open browser window.
2. No login, install, or internet connection is required to run a check — everything happens locally in your browser.
3. To see how it works before using a real message, click one of the three sample buttons at the top of the page to load an example.

## 3. Running a Check

**Step 1 — Paste the message**
Copy the full text of the recruiter message and paste it into the text box labeled "Paste the message text." Include as much of the original message as you can.

**Step 2 — Add what you know**
If known, enter the company the sender claims to represent and the sender's email address. These two fields let the tool flag a mismatch between the sender's email domain and the claimed company.

**Step 3 — Check off any profile red flags**
Some warning signs can't be read from the message text alone. Before running the check, look at the sender's LinkedIn profile and tick any that apply:

- Profile created recently (within the last 6 months)
- Fewer than about 50 connections
- No verification badge on the profile
- Sender's headline/profession has nothing to do with recruiting or the pitch (e.g. a nurse or engineer suddenly offering an unrelated "project")
- Profile photo looks AI-generated, stock, or oddly generic on closer look (asymmetric features, warped background, too-perfect skin)
- Reverse image search shows the photo used elsewhere / on a stock site — optional; the tool provides one-click links to Google Images, TinEye, and Bing Visual Search so you can check without leaving the page
- Not listed as an employee on the company's own LinkedIn page
- Few or no mutual connections in your industry
- Little to no posting or comment history

**Step 4 — Run the check**
Click "Run the check." Results appear on the right within a second or two.

## 4. Understanding Your Results

The report shows three things:

- **A stamped verdict** — Low signal detected, Proceed with caution, or High risk.
- **A pattern match strength score** out of 100 — how closely the message matches known scam wording. This is not a statistical probability of fraud; no dataset exists to calculate a true probability honestly.
- **A flag list** — every match found, labeled by severity (High/Medium/Low), with a short note on why it matters and the exact phrase that triggered it.

Below the flag list, the full message reappears with flagged phrases highlighted in place, so you can see exactly what raised concern in context.

If the result lands in the Proceed with caution range, a fourth block appears above the highlighted message: a ready-to-send follow-up message. See Section 6.

## 5. If a Message Scores Caution or High

At a score of 25 or above, a "Report this" section appears with direct links to:

- LinkedIn's reporting flow, for fake profiles or messages
- The FBI's Internet Crime Complaint Center (IC3.gov)
- The FTC's ReportFraud.ftc.gov

Avoid providing any personal, financial, or banking information in the meantime, regardless of how the message is framed.

## 6. Follow-Up Message (Caution-Range Results Only)

When a result lands in the Proceed with caution range (25–54), the report includes a suggested follow-up message and a **Copy follow-up message** button.

This is not a verification tool — it's wording you can send back to the sender to ask for the specifics a real recruiter can always provide, without volunteering any personal information of your own:

- The full, official company name
- A link to the job posting, or a requisition/job ID
- The job title and team the role sits on

If the flagged patterns included an unnamed intermediary (a "friend," "colleague," or similar go-between) or a mismatch between the sender's email and their claimed employer, the suggested message adjusts to ask for those specifically — for example, a way to verify the intermediary directly, or confirmation that correspondence is coming from a company email address.

This feature does not appear on High risk results. At that score, the recommended move isn't a more careful reply — it's to stop engaging and use the reporting links in Section 5 instead. A vague or evasive response to the follow-up message is itself informative, but a smooth, professional-sounding non-answer doesn't clear a sender either — keep verifying independently through the company's own site.

## 7. Other Features

**Custom red flags**
Add your own phrases under "Your own red flags" before running a check. These are checked in addition to the built-in list, for the current session only.

**Copy or print your results**
"Copy report" copies a plain-text summary — handy for pasting into an email to a friend or colleague. "Print / Save as PDF" generates a printable version.

**Session history — download and reload**
Every check run during the current session is logged at the bottom of the report panel (date, company, score). The tool uses no accounts or browser storage, so this list clears when the page closes — unless saved first:

1. Click **Download history (.json)** to save the session's log as a file.
2. Next time, click **Load history file** and select that file to bring past results back into view.

## 8. Customizing the Pattern List

All detection patterns live in a single array in the tool's source code, each with a label, an explanation, a severity, a score weight, and a matching rule. Anyone comfortable editing the HTML file directly can add, remove, or adjust entries there to tune detection over time.

## 9. Limitations

- Regex-based matching will miss scams that avoid the specific wording checked for, and can occasionally flag legitimate messages using similar phrasing.
- The domain-mismatch check is a rough heuristic and can misfire on abbreviated or rebranded company names.
- The "no company named" and "no job title mentioned" checks look for absence, not presence — an unusually short but entirely legitimate message (for example, "Are you the Tom who spoke at the OT security conference last year?") can occasionally pick up a low-weight flag. These checks carry modest weight for that reason, and rarely push a score into High risk on their own.
- The suggested follow-up message is a starting point for asking better questions, not a scam-detection tool in its own right — how someone responds still requires your own judgment.
- This tool cannot confirm anyone's identity, employment, or a company's legitimacy — always verify independently through the company's official careers page or domain.

## 10. Quick Reference

| Verdict | Score range | What it means |
|---|---|---|
| Low signal detected | 0–24 | Few or no known scam patterns matched. Still verify independently. |
| Proceed with caution | 25–54 | Several patterns matched. A follow-up message is suggested (see Section 6). Slow down and verify before sharing any personal information. |
| High risk | 55–100 | Strong overlap with known scam wording. Treat with significant skepticism and consider reporting. |
