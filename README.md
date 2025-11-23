# Communication Design 2025: Digital Addiction - A Multi-Article Web Experience

## Project Overview

This project is an interactive journalistic web experience exploring the psychological and societal impact of excessive screen time. The narrative is divided into four distinct articles, each utilizing a unique visual language—from a traditional newspaper aesthetic to a chaotic digital interface—to analyze phenomena such as **doomscrolling**, **"brain rot,"** and the systemic design of digital addiction.

We have developed a custom Next.js application that leverages scroll-based animations, data visualizations, and immersive UI components to convey these complex themes.

## Live Deployment & Access

The project is currently deployed and accessible via Vercel at the following link:

**[https://communication-design-website.vercel.app/](https://communication-design-website.vercel.app/)**

### Important Notes Regarding the Live Version

1.  **Loading Time:** This website relies heavily on high-resolution image sequences and complex animations (such as scroll-triggered frame sequences). Please allow a few seconds upon the initial visit for all assets to fully load and cache.
2.  **Deployment Duration:** The live hosting is currently running on a 14-day trial plan. If the website becomes inaccessible via the link above before the grading process is complete, please contact **Melisa Avci** immediately. We will extend the subscription or assist in running the project locally.

## Local Development Instructions

If you prefer to run the project locally or if the deployment link is unavailable, please follow the steps below.

### Prerequisites

* Node.js (Version 18 or higher recommended)
* npm (Node Package Manager)

### Installation and Execution

1.  Clone the repository or extract the project files to your local machine.
2.  Open your terminal or command prompt and navigate to the project directory.
3.  Install the necessary dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```
5.  Open your web browser and navigate to:
    ```
    http://localhost:3000
    ```

## Project Structure and Articles

The application is structured as a Single Page Application (SPA) with a custom navigation bar switching between four thematic components.

| Navigation Label | Component | Theme | Summary |
| :--- | :--- | :--- | :--- |
| **DRUG** | `ArticleOne.tsx` | **Newspaper** | Defines doomscrolling as a modern addiction. Features scroll-controlled animations (e.g., a syringe, an arm) and expandable text sections to highlight the shift from pandemic anxiety to boredom-driven consumption. |
| **HABITS** | `ArticleTwo.tsx` | **Comic Book** | Uses a bold, "pop-art" visual style with halftone overlays and comic fonts. It contrasts the focused habits of "iPad kids" (gaming) against the aimless nature of doomscrolling, based on family interviews. |
| **SYSTEM** | `ArticleThree.tsx` | **Blueprint** | Presents a technical, architectural aesthetic (`blueprint-bg`). It includes an interactive stock trend chart (`StockTrendChart`) comparing Meta and Alphabet stock prices against the timeline of digital addiction, alongside an interview about the "systematic" nature of these platforms. |
| **ROT** | `ArticleFour.tsx` | **Digital Chaos** | Simulates a modern digital environment with components like `Safari` windows, `Iphone` mockups, and `Terminal` logs. It explores "Brain Rot," featuring an interactive survey (`BrainRotSurvey`) that compares the user's guessed screen time against reality. |

## Key Technical Features

* **Framework:** Next.js (React) with TypeScript.
* **Styling:** Tailwind CSS for responsive design and custom theming (e.g., Blueprint and Comic styles).
* **Animations:**
    * **Framer Motion:** Used for UI transitions, hover effects, and complex element animations (`AnimatedList`, `AnimatedBeam`, `Terminal`).
    * **Canvas Scroll Sequences:** Custom `ScrollSequence2` component renders high-performance image sequences synced to the user's scroll position.
* **Interactive Data:**
    * **Stock Trend Chart:** A custom SVG visualization of normalized stock data.
    * **Screen Time Survey:** An interactive multi-step form that calculates the discrepancy between perceived and actual digital usage.

## Team Members

* Melisa Avci
* Raphael Tam-Dao
* Daniel Betto
* Ylva Romann Aas
* Ingrid Christensen Øvrelid