# ⚡ Rakesh Kumar — Developer Portfolio & AI Systems Engine

<div align="center">

[![Live Portfolio](https://img.shields.io/badge/Live%20Demo-developer--portfolio.vercel.app-0ea5e9?style=for-the-badge&logo=vercel&logoColor=white)](https://developer-portfolio-nu-rouge.vercel.app/)
[![React 19](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.3-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Gemini API](https://img.shields.io/badge/AI_Engine-Gemini_2.5_Flash-8E75B2?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![License](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](LICENSE)

<p align="center">
  <strong>Full-Stack Developer & AI Systems Builder</strong><br>
  <em>"I build systems that don't just work — they prove they work. From temporal root-cause engines with 89.5% measured accuracy to real-time CRDT collaborative studios, I engineer for correctness, not guesses."</em>
</p>

[Explore Systems](#-flagship-systems) • [Interactive Terminal](#-grounded-ai-terminal-apiask) • [Architecture & Telemetry](#-engineering--telemetry-highlights) • [Tech Stack](#-technical-capability-matrix) • [Local Setup](#-getting-started)

---

</div>

## 📌 Overview

This repository powers **[developer-portfolio-nu-rouge.vercel.app](https://developer-portfolio-nu-rouge.vercel.app/)**, a high-performance, dark-mode terminal-grade portfolio engineered with **React 19**, **Tailwind CSS v4**, and **Vite**.

Rather than presenting static resume bullet points, this platform functions as an empirical proof-of-work showcase featuring **live architectural schematics**, **real-time hardware telemetry**, and a **grounded serverless AI terminal assistant** powered by **Gemini 2.5 Flash**.

---

## 🏛 Flagship Systems

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                   CORE SYSTEMS SUITE                                   │
├───────────────┬───────────────────┬────────────────────────────┬───────────────────────┤
│ SYSTEM        │ CODENAME          │ PRIMARY ARCHITECTURE       │ VERIFIED BENCHMARK    │
├───────────────┼───────────────────┼────────────────────────────┼───────────────────────┤
│ SYS-01        │ TRACE             │ Temporal Root-Cause DAG    │ 89.5% vs 73.7% naive  │
│ SYS-02        │ CHRONOS           │ Constraint Backtracking    │ 2,328 vs 46 nodes     │
│ SYS-03        │ SyncPad           │ Yjs CRDT + Pyodide WASM    │ 0ms conflict res.     │
│ SYS-04        │ IncidentHub AI    │ SRE Concurrency & OAuth    │ 236/236 passing tests │
└───────────────┴───────────────────┴────────────────────────────┴───────────────────────┘
```

### 1. [SYS-01] TRACE — Temporal Root-Cause Analysis & Causal Engine
* **Purpose**: Investigates unseen production outages by executing adversarial multi-hypothesis falsification loops instead of naive single-shot LLM guesses.
* **Empirical Benchmark**: **89.5% root-cause accuracy** vs. 73.7% naive baseline across 19 hidden-ground-truth incident scenarios.
* **Stack**: Python, FastAPI, PostgreSQL, `pgvector`, Gemini API, Next.js, TypeScript, D3.js, GSAP.
* **Key Components**:
  - Multi-hypothesis competition engine running real-time falsification checks.
  - Synthetic production sandbox testing 3 incident archetypes with hidden ground truth.
  - Vector similarity telemetry retrieval with `pgvector` and PostgreSQL.
  - Interactive temporal DAG causal graph visualized with D3.js and smooth GSAP morphing.

### 2. [SYS-02] CHRONOS — Constraint-Based Timetable Scheduling Engine
* **Purpose**: Solves high-dimension Constraint Satisfaction Problems (CSP) for academic and organizational timetable scheduling.
* **Empirical Benchmark**: **98% search-space reduction** (signature demo shows naive backtracking taking **2,328 backtracks** vs. **46 nodes** with heuristic search on the identical problem).
* **Stack**: React, Node.js, PostgreSQL, Gemini API, D3.js, Tailwind CSS.
* **Key Components**:
  - MRV (Minimum Remaining Values) and LCV (Least Constraining Value) heuristic search.
  - Forward-checking constraint propagation preventing dead-end branch expansion.
  - Side-by-side live D3.js visualization rendering search-tree traversal steps in real-time.

### 3. [SYS-03] SyncPad — Real-Time Collaborative Code Studio
* **Purpose**: In-browser collaborative IDE featuring zero-conflict concurrent document synchronization and sandboxed execution.
* **Empirical Benchmark**: **0ms conflict resolution** with Yjs CRDTs + 100% client-side isolated runtime.
* **Stack**: React, TypeScript, Monaco Editor, Yjs, WebSockets, Web Workers, Pyodide (WebAssembly).
* **Key Components**:
  - Conflict-free Replicated Data Types (CRDTs) with multi-user awareness & remote cursor projection.
  - Dual sandboxed runtimes: Web Workers for JS/TS and Pyodide WebAssembly for Python.

### 4. [SYS-04] IncidentHub AI — Production SRE Intelligence Platform
* **Purpose**: Multi-tenant incident triage platform correlating telemetry across GitHub, Sentry, Slack, and Jira.
* **Empirical Benchmark**: **236/236 passing automated tests** + 4 complete OAuth 2.0 flows.
* **Stack**: React 19, TypeScript, Node.js, Express, PostgreSQL, Redis, Socket.io.
* **Key Components**:
  - Real OAuth 2.0 integrations with automated webhook ingestion pipelines.
  - Distributed concurrency lock control with Redis Redlock to eliminate triage race conditions.
  - Real-time incident war rooms powered by WebSockets.

---

## 🤖 Grounded AI Terminal (`/api/ask`)

The portfolio embeds an interactive terminal (`rakesh@core:~$`) directly connected to a serverless Gemini AI agent trained strictly on verified profile context.

```
                  ┌─────────────────────────────────────────┐
                  │          USER TERMINAL PROMPT           │
                  └────────────────────┬────────────────────┘
                                       │
                        Normalized Cache Lookup?
                                      / \
                               YES  /     \  NO
                                  /         \
            ┌──────────────────────┐       ┌───────────────────────────────┐
            │ Return Instant Cache │       │ Invoke Gemini 2.5 Flash       │
            │   (0ms Round-Trip)   │       │ (Strict Context + 8s Timeout) │
            └──────────────────────┘       └───────────────┬───────────────┘
                                                           │
                                             Response Arrived < 8.5s?
                                                          / \
                                                   YES  /     \  TIMEOUT/ERR
                                                      /         \
                                ┌──────────────────────┐       ┌───────────────────────────┐
                                │ Streamed Character   │       │ Local Grounded Evidence   │
                                │ Terminal Telemetry   │       │ Fallback Notice           │
                                └──────────────────────┘       └───────────────────────────┘
```

* **Model Pipeline**: Direct ultra-low-latency calls to `gemini-2.5-flash` (~1.5s–2.5s response time).
* **Multi-Tier Response Cache**: In-memory caching on client and edge ensures standard suggestion chips (*"What makes TRACE unique?"*, *"Why did you build CHRONOS?"*, *"What's your tech stack?"*) return with **0ms latency**.
* **Zero Hallucination Guardrails**: Programmed to answer exclusively using verifiable facts from `profile-context.json`. Out-of-scope inquiries trigger transparent disclosures.
* **Circuit Breaker**: An 8.5-second `AbortController` timeout prevents indefinite hangs, gracefully triggering local evidence grounding if network latency spikes.
* **Interactive Controls**: Supports standard bash commands (`whoami`, `projects --list`, `skills --list`, `experience --show`, `contact`, `help`, `clear`).

---

## 🛠 Engineering & Telemetry Highlights

### ⚡ Rolling-Average Hardware FPS Telemetry
* **Problem**: Standard `(frameCount * 1000) / elapsed` counters drop to misleading values like `FPS 1` during initial component mounting or when tabs are backgrounded.
* **Solution**: Implemented a **18-frame rolling ring buffer** using `performance.now()` and `requestAnimationFrame`.
* **Spike Filtering**: Discards long frame intervals ($\Delta t > 120\text{ms}$) caused by React mounting or GC pauses so lag spikes do not pull down the rolling average.
* **Believable Window**: Restricts numeric readout strictly between **30–240 FPS**. If throttled or backgrounded, it gracefully renders **`LIVE`** via the **Page Visibility API** (`visibilitychange`), preserving layout symmetry without DOM shifts.

### 🧭 35% Viewport Focal-Line Scroll-Spy
* **Zero-Lag Calculation**: Avoids layout thrashing by executing `getBoundingClientRect()` within a throttled `requestAnimationFrame` loop synced with Lenis.
* **Mathematical Precision**: A section is active if and only if `rect.top <= focalY && rect.bottom > focalY` where `focalY = window.innerHeight * 0.35`. Eliminates the classic `IntersectionObserver` partial-entry jumping bug.
* **Unified Subsystems**: Seamlessly maps both `#architect` and `#matrix` to the `$architect` navigation highlight.

### 🏎 Fluid Inertial Scrolling (Lenis)
* Configured `html.lenis, html.lenis-scrolling { scroll-behavior: auto !important; }` to eliminate fighting between CSS smooth scrolling and JavaScript micro-stepping.
* Calibrated wheel physics (`duration: 1.0`, `wheelMultiplier: 1.0`) for 1:1 physical response on desktop mouse wheels.
* Capped long navbar jump durations at **0.7s (700ms)** for brisk, snappy navigation.

### 🔒 Session-Persistent Bootloader
* Intro startup animation runs only on first arrival per browser session (`sessionStorage.getItem('bootComplete')`). Subsequent navigations, section hashes (`#systems`, `#matrix`), and page refreshes render instantly.

---

## 💻 Technical Capability Matrix

| Category | Primary Technologies & Frameworks | Supporting Stack & Tools |
| :--- | :--- | :--- |
| **Languages** | `JavaScript (ES6+)`, `TypeScript`, `Python` | `C++`, `SQL`, `HTML5`, `CSS3` |
| **Frontend** | `React.js`, `Next.js`, `Tailwind CSS v4` | `Redux Toolkit`, `Monaco Editor`, `Framer Motion`, `D3.js`, `GSAP` |
| **Backend & APIs** | `Node.js`, `Express.js`, `FastAPI`, `REST APIs` | `Socket.io (WebSockets)`, `JWT Auth`, `3-Tier RBAC` |
| **AI & LLM** | `Gemini API`, `Vector Embeddings`, `Prompt Engineering` | `pgvector`, `Deterministic Falsification Evaluation` |
| **Databases & Cache** | `PostgreSQL`, `MongoDB`, `Redis (Redlock)` | `SQLite`, `Mongoose ODM`, `Prisma` |
| **Cloud & Tools** | `Git`, `GitHub`, `Docker`, `Postman`, `Vercel` | `Render`, `Linux / Bash`, `VS Code` |
| **Core Fundamentals** | `Data Structures & Algorithms` (175+ LeetCode) | `DBMS`, `Operating Systems`, `Computer Networks`, `OOP` |

---

## 📂 Project Structure

```
Developer-Portfolio/
├── api/
│   ├── ask.js                 # Serverless Gemini 2.5 Flash agent endpoint with caching & timeout
│   └── profile-context.json   # Ground truth profile data for AI evaluation
├── public/
│   ├── Rakesh_Kumar_Resume.pdf# Production downloadable resume
│   └── favicon.svg            # Cybernetic terminal favicon
├── src/
│   ├── components/
│   │   ├── About.jsx          # Bio & quick-facts overview
│   │   ├── Architect.jsx      # Operator spec sheet, 7-box capability matrix & certifications
│   │   ├── Contact.jsx        # Terminal comms portal with copy-to-clipboard telemetry
│   │   ├── Footer.jsx         # Symmetrical bottom bracket & social anchors
│   │   ├── Hero.jsx           # Terminal headline, developer.json card & live CTAs
│   │   ├── HudFrame.jsx       # Fixed corner brackets, system load & rolling FPS counter
│   │   ├── InteractiveTerminal.jsx # Bash emulator with grounded AI streaming & suggestion chips
│   │   ├── Navbar.jsx         # Sticky header with focal-line scroll-spy indicator
│   │   ├── OpenSource.jsx     # 6-card GitHub open-source signal grid
│   │   ├── Principles.jsx     # Engineering tenets (Hypothesis Testing, Determinism, Correctness)
│   │   ├── Projects.jsx       # 4 Deep-dive flagship systems with live architecture schematics
│   │   └── SystemBootloader.jsx# Session-persistent startup sequence
│   ├── data/
│   │   ├── portfolioData.js   # Portfolio content constants & system specifications
│   │   └── profile-context.json # Client-side ground-truth profile mirror
│   ├── App.jsx                # Application root container
│   ├── main.jsx               # Entrypoint, Lenis smooth scroll initialization & routing
│   └── styles.css             # Tailwind CSS v4 imports, custom scrollbar & Lenis styling
├── index.html                 # Semantic HTML5 template, Open Graph, Twitter & JSON-LD metadata
├── package.json               # Dependencies & build scripts
├── vite.config.js             # Vite configuration with local /api/ask proxy
└── README.md                  # Complete technical documentation
```

---

## ⚙️ Getting Started

### Prerequisites
* **Node.js**: `v18.x` or `v20.x+` (Recommended: `v20.18.x`)
* **Package Manager**: `npm` (v9+) or `pnpm`

### 1. Clone the Repository
```bash
git clone https://github.com/rakeshkumar0804/Developer-Portfolio.git
cd Developer-Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```env
# Required for Interactive Terminal AI Agent (/api/ask)
GEMINI_API_KEY=your_google_gemini_api_key_here
```
> *Tip: Obtain a Gemini API key from [Google AI Studio](https://aistudio.google.com/). The application also includes offline local evidence fallback if no key is configured.*

### 4. Launch Local Development Server
```bash
npm run dev
```
The application will be accessible at `http://localhost:5173`.

### 5. Build for Production
```bash
npm run build
```
Build output will be bundled into the `dist/` directory.

### 6. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment

The project is pre-configured for zero-configuration deployment on **Vercel**:
* Build Command: `npm run build`
* Output Directory: `dist`
* Serverless Function: `api/ask.js` automatically deployed as an edge-ready serverless function.
* Set `GEMINI_API_KEY` in the Vercel Project Environment Variables.

---

## 👨‍💻 Author

**Rakesh Kumar**  
*Full-Stack Developer & AI Systems Builder*  
*Gurugram, Haryana, India*

* 🌐 **Live Portfolio**: [developer-portfolio-nu-rouge.vercel.app](https://developer-portfolio-nu-rouge.vercel.app/)
* 💼 **LinkedIn**: [linkedin.com/in/rakesh-kumar-520754246](https://www.linkedin.com/in/rakesh-kumar-520754246/)
* 🐙 **GitHub**: [@rakeshkumar0804](https://github.com/rakeshkumar0804)
* 🧩 **LeetCode**: [leetcode.com/u/Rakesh__Kumar_](https://leetcode.com/u/Rakesh__Kumar_/) *(175+ Solved)*
* ✉️ **Email**: [rakeshchauhan6651@gmail.com](mailto:rakeshchauhan6651@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
