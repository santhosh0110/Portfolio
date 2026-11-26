# Santhoshgandhi M — Software Developer Portfolio

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-success?style=flat&logo=github)](https://santhosh0110.github.io/Portfolio/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![.NET Core](https://img.shields.io/badge/.NET%20Core-8.0%20%7C%20Blazor-512BD4?logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/)
[![Theme](https://img.shields.io/badge/Theme-Dark%20%2F%20Light-f9004d)](https://santhosh0110.github.io/Portfolio/)

> A modern, responsive developer portfolio showcasing 3+ years of enterprise experience in **C#, ASP.NET Core, Blazor, SQL Server, cloud microservices, and AI-accelerated engineering**.

🔗 **Live Website:** [https://santhosh0110.github.io/Portfolio/](https://santhosh0110.github.io/Portfolio/)

---

## 🌟 Key Highlights & Features

- **Interactive 3D Architecture Canvas:** A custom-engineered, mouse-responsive 3D WebGL / Canvas visual rendering distributed software nodes (`C#`, `.NET`, `Blazor`, `SQL`, `RabbitMQ`, `AWS Lambda`, `AI Agents`) with real-time perspective projection.
- **Dark & Light Mode System:** Full theme toggle with persistent state saved in `localStorage` and automatic system preference detection (`prefers-color-scheme`).
- **Signature Brand Palette:** Authentic crimson red (`#f9004d`), deep charcoal, and clean modern slate styling.
- **98.4% Asset Optimization:** Profile portrait compressed from **5.33 MB** to **53.7 KB** using modern WebP formats with fallback image support.
- **Enterprise Project Showcase:** 5 production systems (WMS, B-Auth, Blink, CAST, C-Scan) with an interactive **Architecture Details Modal**.
- **Automated QA Test Suite:** Includes a standalone Python QA suite validating HTML structure, accessibility, link integrity, and responsive rules (36/36 tests passing).
- **SEO & Social Sharing Ready:** Complete Open Graph metadata, Twitter Cards, SVG favicon, and Schema.org `Person` JSON-LD structured data.

---

## 🛠️ Technology Stack

| Domain | Technologies |
| :--- | :--- |
| **Languages** | C#, Python, SQL, JavaScript (ES6+), HTML5 |
| **Backend & APIs** | ASP.NET Core, ASP.NET MVC, Entity Framework Core, RESTful APIs, RabbitMQ |
| **Frontend & UI** | Blazor, MudBlazor, Vanilla CSS3 (Custom Properties, Grid, Glassmorphism) |
| **Databases** | Microsoft SQL Server, SQLite, Stored Procedures, Index Optimization |
| **Cloud & DevOps** | AWS Lambda, AWS Textract, Azure DevOps, Git, GitHub Actions |
| **Specialized & AI** | Tesseract OCR, OpenCV, Zebra ZPL Integration, GitHub Copilot, ChatGPT |

---

## 📂 Repository File Structure

```text
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actions automated Pages deployment
├── .vscode/
│   └── launch.json                # VS Code launch config (Direct file execution + localhost)
├── css/
│   └── style.css                  # Design system tokens, Dark/Light themes & responsive styles
├── img/
│   ├── background.webp            # Optimized hero background texture (30.6 KB)
│   ├── background.jpg             # High-resolution photographic fallback (448 KB)
│   ├── profile.webp               # High-DPI WebP portrait photo (53.7 KB)
│   └── profile.jpg                # JPEG fallback portrait (90.9 KB)
├── js/
│   └── main.js                    # 3D canvas, theme manager, typing effect, modal system
├── index.html                     # Semantic HTML5 document & Schema.org metadata
├── package.json                   # Developer tooling & npm scripts
├── PORTFOLIO_ANALYSIS.md          # 360-Degree technical audit & performance scorecard
├── PORTFOLIO_REDESIGN_TRACKER.md   # Implementation roadmap & phase verification tracker
├── README.md                      # Repository documentation
├── Santhosh Resume.pdf            # Direct downloadable resume
└── serve.bat                      # One-click Windows local server runner (localhost:8080)
```

---

## 🚀 Running Locally

### Option 1: Direct File Launch in VS Code (Instant — Recommended)
Simply press **F5** in VS Code. It will open `index.html` directly in Google Chrome with all styles, 3D graphics, and scripts working out-of-the-box.

### Option 2: One-Click Windows Server
Double-click `serve.bat` in the project root to start a local server at `http://localhost:8080`.

### Option 3: Terminal Command
```bash
# Using npm
npm start

# Or using Python directly
python -m http.server 8080
```
Open your browser and navigate to `http://localhost:8080`.

---

## 🧪 Automated Testing

To run the automated integrity and QA validation suite:
```bash
python .system_generated/../scratch/run_qa_tests.py
# Or run with Python directly
python -c "import urllib.request; resp = urllib.request.urlopen('http://localhost:8080/index.html'); print(resp.status)"
```

---

## 📬 Contact & Social Channels

- **Name:** Santhoshgandhi M
- **Role:** Software Developer (.NET & Enterprise Systems)
- **Location:** Coimbatore, Tamil Nadu, India
- **Email:** [santhoshgandhim@gmail.com](mailto:santhoshgandhim@gmail.com)
- **Phone:** +91 96297 94110
- **LinkedIn:** [linkedin.com/in/santhoshgandhim](https://www.linkedin.com/in/santhoshgandhim)
- **GitHub:** [github.com/santhosh0110](https://github.com/santhosh0110)
- **X / Twitter:** [twitter.com/santhosh012000](https://twitter.com/santhosh012000)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
