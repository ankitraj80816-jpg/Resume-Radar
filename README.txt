Resume Radar — Standalone (No Install Needed)
===============================================

How to run in VS Code:
1. Open VS Code -> File > Open Folder -> select this "ResumeRadar" folder.
2. Right-click index.html in the file explorer -> "Open with Live Server"
   (install the free "Live Server" extension once if you don't have it).
   -- OR --
   Just double-click index.html directly to open it in your browser.
   No Node.js, no npm install, no server needed either way.

What it does:
- Upload a resume (PDF/DOCX) -> parsed entirely in your browser
- Pick a job role or paste a real job description
- Get: an Overall Readiness grade (A+ to F), skill match %, matched/
  missing/suggested skills, ATS score, a section checklist, a
  "what to prepare" roadmap for every missing skill, and pre-filled
  LinkedIn job-search links
- Download the full report as a PDF (uses your browser's print-to-PDF)
- Copy a plain-text summary to share on WhatsApp/email in one click
- Progress tracker: past attempts for the same role are saved locally
  (in your browser only) so you can see if your score improved over time,
  including a small trend chart (Overall / Match% / ATS across attempts)

Files:
- index.html  -> page structure
- style.css   -> all styling (incl. print-friendly report layout)
- script.js   -> all logic (parsing, matching, ATS scoring, prep guide,
                 grading, PDF export, history tracking)

Notes:
- Needs internet the first time to load two small parsing libraries
  (pdf.js, mammoth.js) from a CDN. Your resume file itself is never
  uploaded anywhere — everything runs locally in the browser.
- Progress history is stored in your browser's localStorage only —
  clearing browser data will clear it too. Use the "Clear history"
  link in the app to reset it manually.
