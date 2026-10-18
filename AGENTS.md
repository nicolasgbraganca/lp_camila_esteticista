# Repository Guidelines

## Project Structure & Module Organization

This repository is a small Vite-powered landing page built with vanilla JavaScript and CSS. `index.html` contains the page structure and loads the application module. `src/main.js` holds interactive behavior and the service catalog; `src/style.css` contains the design tokens, layout, and responsive styling. `planejamento_landing_page.md` records product and content direction. There is no separate test directory or component framework.

## Build, Test, and Development Commands

Run `npm install` to install the locked dependencies, then use:

- `npm run dev` to start Vite’s local development server.
- `npm run build` to create the production bundle in `dist/`.
- `npm run preview` to serve the built bundle locally.

No test, lint, or formatting scripts are configured in `package.json`. Do not describe a build as a test suite.

## Coding Style & Naming Conventions

Follow the existing two-space indentation in JavaScript, CSS, and HTML. Keep browser code framework-free unless a change clearly requires a dependency. Use `camelCase` for JavaScript variables and functions, `kebab-case` for service IDs and CSS classes, and descriptive CSS custom properties for shared design values. Keep responsive rules and design tokens consistent with `src/style.css`.

## Content and Accuracy

Do not invent or present unverified details about Camila, her qualifications, services, prices, testimonials, or treatment outcomes as facts. Preserve or add clear `[CONFIRMAR COM CAMILA: ...]` markers for information that needs confirmation. Avoid adding dependencies without a concrete reason.

## Testing Guidelines

There is no automated test framework or coverage requirement. For changes, run `npm run build` to check that Vite can produce the production bundle. For visual or interaction changes, also inspect the page in the browser at desktop and mobile widths.

## Commits and Pull Requests

The provided checkout has no usable Git history, so existing commit conventions cannot be confirmed. Write concise imperative commit subjects, such as `Improve mobile service cards`. Pull requests should summarize the user-visible change, list relevant verification steps, link related work when available, and include screenshots for visual changes.
