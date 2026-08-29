<div align="center">

# 👋 Hi, I'm Chandan Singh
### Software Engineer building backend systems & AI applications

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-22d3ee?style=for-the-badge&logo=vercel&logoColor=white)](https://chandann22.github.io/personal-portfolio-website/)
[![Resume](https://img.shields.io/badge/Resume-Download-2dd4bf?style=for-the-badge&logo=readdotcv&logoColor=white)](assets/Chandan_Singh_Resume.pdf)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chandan-singh-23869b310)
[![LeetCode](https://img.shields.io/badge/LeetCode-Profile-FFA116?style=for-the-badge&logo=leetcode&logoColor=white)](https://leetcode.com/u/24bcs12108/)

<br>

This is the source code for my personal developer portfolio — a fast, fully responsive, single-page
site built from scratch with **plain HTML, CSS and JavaScript** (no frameworks, no build step).
It showcases my projects, skills, live coding stats, certifications and resume in one place.

</div>

<br>

## ✨ Features

| | |
|---|---|
| 🌗 **Light / Dark Theme** | Auto-detects system preference, remembers your choice via `localStorage` |
| 🧭 **Smooth Scroll Navigation** | Sticky nav bar with active section links + mobile hamburger menu |
| 🎈 **Floating Skill Labels** | Animated tags orbiting the profile photo in the hero section |
| 🕸️ **Live Canvas Network Animation** | A drifting node-graph background in the hero, theme-aware and reduced-motion safe |
| 🗂️ **Rich Project Cards** | Highlighted metrics, tech-stack chips, GitHub/Live Demo links |
| 🖼️ **Sliding Screenshot Gallery** | Click "View Screenshots" on any project → opens a slick modal carousel with prev/next, dots, and keyboard arrow support |
| 📊 **Live GitHub & LeetCode Stats** | Auto-refreshing stat cards (repos, streaks, top languages, problems solved) — no manual updates needed |
| 🏆 **Certifications Timeline** | Numbered rows with issuer, date, what I learned, and a direct "View Certificate" link |
| 🛤️ **Journey Timeline** | A visual path from "Started B.E. CSE" to "Now: Seeking SDE Internships" |
| 📄 **Inline Resume Preview** | Embedded PDF viewer with dedicated **View** and **Download** buttons |
| 🎬 **Scroll Reveal Animations** | Sections fade/slide into view via `IntersectionObserver` |
| ♿ **Accessible & Responsive** | Semantic HTML, `prefers-reduced-motion` support, mobile-first breakpoints |

<br>

## 🧰 Built With

<div align="left">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![No Frameworks](https://img.shields.io/badge/Frameworks-None%20%F0%9F%98%8E-333333?style=flat-square)

</div>

No React, no Tailwind, no bundler — just hand-written, semantic markup, CSS custom properties for
theming, and vanilla JS for interactivity. Everything runs directly in the browser.

<br>

## 📁 Project Structure

```
personal-portfolio-website/
├── index.html                  # All page markup & sections
├── css/
│   └── style.css               # Theming, layout, components, animations
├── js/
│   └── script.js               # Theme toggle, nav, reveal-on-scroll, gallery, canvas animation
├── assets/
│   ├── Chandan_Singh_Resume.pdf
│   ├── images/                 # Project screenshots (Voxa AI, SMS, etc.)
│   ├── projects/                # Additional project screenshots
│   └── certificates/            # Certificate images linked from Achievements
├── me.jpg                       # Profile photo
└── README.md
```

<br>

## 🖥️ Sections

| Section | What's in it |
|---|---|
| **Hero** | Intro, CTAs (Resume / Projects / Contact), quick stats, animated network canvas |
| **About** | Background, focus areas, education |
| **Skills** | Languages, frameworks, databases, core CS concepts |
| **Projects** | Voxa AI, Personal Portfolio, Student Management System, Fraud Detection System |
| **Stats** | Live GitHub stats, streak, top languages, LeetCode heatmap |
| **Achievements** | Academic honors + certifications with descriptions and certificate links |
| **Journey** | Timeline from starting CSE to the present internship search |
| **Resume** | Inline PDF preview + view/download buttons |
| **Contact** | Email (copy-to-clipboard), GitHub, LinkedIn, LeetCode |

<br>

## 🚀 Getting Started

Since this is a static site, there's no build step — just open it or serve it locally.

```bash
# Clone the repo
git clone https://github.com/chandann22/personal-portfolio-website.git
cd personal-portfolio-website

# Option 1 — just open it
open index.html          # macOS
start index.html         # Windows

# Option 2 — serve it locally (recommended, avoids file:// quirks)
python3 -m http.server 5500
# then visit http://localhost:5500
```

<br>

## 🛠️ Customizing This For Yourself

1. **Profile photo** → replace `me.jpg`
2. **Resume** → replace `assets/Chandan_Singh_Resume.pdf`
3. **Projects** → edit the `.project-feature` cards in `index.html`; update `data-images` on each
   `.gallery-btn` to point at your own screenshots
4. **GitHub / LeetCode stats** → swap the usernames in the `#stats` section's image URLs
   (`github-readme-stats`, `github-readme-streak-stats`, `leetcard.jacoblin.cool`)
5. **Certifications** → edit the `.cert-row` blocks under `#achievements`
6. **Colors / theme** → tweak the CSS custom properties at the top of `css/style.css`
   (`:root` for light, `[data-theme="dark"]` for dark)

<br>

## 🌐 Deployment

This site is deployed for free on **GitHub Pages**:

```bash
git push origin main
```

Then enable Pages in **Settings → Pages → Deploy from branch → main**. That's it.

<br>

## 📬 Contact

<div align="center">

📧 **chandansinghatwork22@gmail.com**

[![GitHub](https://img.shields.io/badge/GitHub-chandann22-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/chandann22)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Chandan%20Singh-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chandan-singh-23869b310)
[![LeetCode](https://img.shields.io/badge/LeetCode-24bcs12108-FFA116?style=for-the-badge&logo=leetcode&logoColor=white)](https://leetcode.com/u/24bcs12108/)

<br>

⭐ **If you like this portfolio's design, feel free to fork it and make it your own!**

</div>
