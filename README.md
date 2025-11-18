# Communication Design 2025: Digital Addiction - A Multi-Article Web Experience

This project is a multi-article journalistic web experience exploring the psychological and societal impact of excessive screen time, specifically focusing on the phenomena of **doomscrolling** and **"brain rot."** We designed the platform to convey complex issues using distinct, immersive visual themes and extensive interactivity.

## Table of Contents

1.  [Getting Started](#getting-starting)
2.  [Project Concept](#project-concept)
3.  [Article Summaries](#article-summaries)
4.  [Features & Interactivity](#features--interactivity)
5.  [Responsiveness Note](#responsiveness-note)

---

## 1. Getting Started

To run the website locally, ensure you have Node.js installed, and then follow these steps:

1.  **Install Dependencies:**
    ```bash
    npm install
    # or yarn install
    ```

2.  **Run the Development Server:**
    ```bash
    npm run dev
    # or yarn dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 2. Project Concept

The project functions as a dynamic, four-part journalistic series dissecting the modern digital addiction crisis. Our goal was to go beyond merely identifying the problem, by differentiating between various forms of screen consumption (e.g., focused gaming versus aimless scrolling) and analyzing the underlying systemic mechanisms—from personal habits to the deliberate, profit-driven design of social media platforms.

The narrative is structured across four unique articles, each utilizing a distinct visual language to match its topic:

| Navigation Label | Article Theme |
| :--- | :--- |
| **DRUG** | Classic Newspaper/Journalistic Style |
| **HABITS** | Bold Comic Book Style |
| **SYSTEM** | Technical Blueprint/Drafting Style |
| **ROT** | Modern Digital/Social Media Style |

---

## 3. Article Summaries

| Tab | Article Title | Content Summary | Theme |
| :--- | :--- | :--- | :--- |
| **DRUG** (Article One) | **You are looking at a drug, right now.** | Defines doomscrolling as an addictive behavior that evolved from pandemic anxiety to boredom-driven content consumption. It highlights the serious mental health consequences, including increased risks of anxiety and depression. | Newspaper |
| **HABITS** (Article Two) | **Screens and Childhood: Gaming vs. Doomscrolling** | Compares focused gaming (the "iPad Kid" habit) against endless scrolling in young children, using family interviews. The conclusion argues that purpose-driven gaming is generally less detrimental than perpetual, mindless scrolling. | Comic Book |
| **SYSTEM** (Article Three) | **WHEN WE FINALLY LOOK UP, IT WILL BE TOO LATE** | Features an anonymous professor who asserts that doomscrolling is a **"system-built addiction"** designed by tech companies to exploit the **Fear Of Missing Out (FOMO)**. Includes a dynamic stock trend chart to visualize the financial price of attention. | Blueprint |
| **ROT** (Article Four) | **Your brain's rotting, and you call it entertainment** | Explores the concept of **"Brain Rot"**—the resulting mental fogginess and cognitive decline. The article includes a student's personal account, a comprehensive digital detox guide, a quiz comparing guessed vs. actual screen time, and a dynamic visualization of social media's impact. | Digital/Social Media |

---

## 4. Features & Interactivity

The platform utilizes a broad spectrum of visual and interactive media to engage the user and deliver the content.

| Feature Type | Medium / Component | Article(s) | Description |
| :--- | :--- | :--- | :--- |
| **Scroll Interactions** | Scroll-Triggered Sequences (Illustrations) | One, Two | Animations that play and progress precisely based on the user's scroll depth. |
| **Hover & Click** | Hover-to-Play Animation | Three | Short animation sequence that loops when the user hovers over the element. |
| | Clickable Toggles / Accordion | One, Four | Sections of text that expand or collapse upon clicking. |
| | Navigation Tabs | All | Primary navigation system to switch between articles. |
| **Data & Surveys** | Interactive Survey/Quiz (`BrainRotSurvey`) | Four | A multi-step quiz comparing self-estimated screen time to actual reported usage, providing a personalized assessment. |
| | Live-Animated Graph / Timeline (`StockTrendChart`) | Three | Line chart visualizing normalized tech stock trends for Meta and Alphabet, with togglable data lines and path animations. |
| **Visualizations & Motion** | Animated Beams (Network Diagram) | Four | Visual representation of different social media platforms connecting to a central "brain" node. |
| | Animated Lists (`AnimatedList`) | Four | Content elements appearing sequentially within the phone frame. |
| | Animated Number Ticker (`NumberTicker`) | Four | Numerical counter for shock statistics (e.g., video count). |
| | Terminal Sequence (`Terminal`) | Four | Simulated command-line output to enhance a digital/coding aesthetic. |
| | Looping Animations (`LoopingSequence`) | Three | Continuous background animations (e.g., street sequence). |
| | Marquee (Scrolling Text) | Four | Horizontally scrolling list of "brain rot" slang terms and definitions. |
| | Stylized Text & Illustrations | All | Custom-drawn/vector illustrations, highly stylized headings, and unique font combinations to establish the theme. |
| **Multimedia** | Embedded Video & Sound | Four | A blurred video collage playing in a simulated browser, accompanied by a user-toggleable, looping background audio track. |
| | Simulated Devices (`Iphone`, `Safari`) | Four | Custom frames to embed content within smartphone and browser interfaces. |
| | External Links | All | Direct links to referenced studies, definitions, and articles for source verification. |

---

## 5. Responsiveness Note

The entire website is built to be fully **responsive** and optimized for a seamless experience across all screen sizes (mobile, tablet, and desktop).

**Exception:** The **"ROT" (Addiction) page (`ArticleFour.tsx`)** contains highly complex and dense interactive layouts (e.g., nested device mockups, animated network diagrams). Therefore, this page is primarily optimized for **desktop and larger tablet** screens. While it is functional on mobile, the visual impact and layout integrity are best experienced on larger viewports.