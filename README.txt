# 📡 Resume Radar

**Match your resume against any job role or job description — right in your browser.**

Upload a PDF or DOCX resume, pick a role (or paste a real job description), and instantly get a skill match score, ATS score, an A+ to F readiness grade, and a personalised prep roadmap. No sign-up, no server, no install.

🔗 **Live demo:** [ankitraj80816-jpg.github.io/Resume-Radar](https://ankitraj80816-jpg.github.io/Resume-Radar/)

<!-- Add a screenshot or GIF here:
![Resume Radar screenshot](screenshots/preview.png)
-->

---

## ✨ Features

- **Resume parsing in the browser** — supports PDF and DOCX; your file is never uploaded anywhere
- **Role or JD matching** — choose a job role or paste a real job description
- **Skill match %** — see matched, missing, and suggested skills
- **ATS score** — check how friendly your resume is to Applicant Tracking Systems
- **Readiness grade (A+ to F)** — one overall score combining match and ATS results
- **Section checklist** — quickly spot which resume sections are missing
- **Prep roadmap** — a "what to prepare" guide for every missing skill
- **LinkedIn job search links** — pre-filled links based on your target role
- **Progress tracker** — past attempts for the same role are saved locally, with a trend chart (Overall / Match % / ATS)
- **PDF report** — download the full report using your browser's print-to-PDF
- **One-click share** — copy a plain-text summary for WhatsApp or email

---

## 🚀 Getting Started

No Node.js, no npm, no build step.

### Option 1: Open directly
1. Download or clone this repository
2. Double-click `index.html` to open it in your browser

### Option 2: VS Code + Live Server
1. Open the project folder in VS Code (`File > Open Folder`)
2. Install the free **Live Server** extension (one time)
3. Right-click `index.html` → **Open with Live Server**

```bash
git clone https://github.com/ankitraj80816-jpg/Resume-Radar.git
cd Resume-Radar
```

---

## 🧭 How to Use

1. **Upload** your resume (PDF or DOCX)
2. **Select** a job role, or paste a job description
3. **Analyze** and review your grade, match %, ATS score, and missing skills
4. **Follow** the prep roadmap, then re-run to see your progress improve
5. **Download** the PDF report or copy the summary to share

---

## 📁 Project Structure

```
Resume-Radar/
├── index.html   # Page structure
├── style.css    # Styling (includes print-friendly report layout)
├── script.js    # Parsing, matching, ATS scoring, prep guide, grading, PDF export, history tracking
└── README.md
```

---

## 🛠️ Built With

- HTML, CSS, and vanilla JavaScript
- [pdf.js](https://mozilla.github.io/pdf.js/) — PDF text extraction
- [mammoth.js](https://github.com/mwilliamson/mammoth.js) — DOCX text extraction

---

## 🔒 Privacy

- Your resume is processed **entirely in your browser** and never leaves your device
- Progress history is stored in your browser's `localStorage` only
- Clearing browser data erases history; you can also use the **Clear history** link inside the app

> **Note:** An internet connection is needed the first time to load pdf.js and mammoth.js from a CDN.

---

## 🤝 Contributing

Suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repo
2. Create your branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push and open a Pull Request

---

## 👤 Author

**Ankit Raj** — [@ankitraj80816-jpg](https://github.com/ankitraj80816-jpg)

---

⭐ If you found this useful, consider giving the repo a star!
