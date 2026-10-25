# Search Engine Clone

A Google-inspired search application built with React, with live web results powered by the Brave Search API.

I built this project while learning front-end development to practice reusable components, client-side routing, API requests, and handling different interface states. The interface began with a tutorial and was extended with a Brave Search integration and a server-side API endpoint.

**[View the live project](https://my-search-engine-clone.vercel.app/)** · **[View the source code](https://github.com/cassiebezick/my-search-engine-clone)**


## Features

* Search the web and view result titles, links, and descriptions.
* Store search terms in the URL so results pages can be bookmarked and shared.
* Display loading, error, and empty-result messages.
* Keep the Brave API key on the server through a Vercel function.
* Validate search requests on the backend.

## Built With

* React
* React Router
* JavaScript
* Vite
* Material UI
* Emotion
* Brave Search API
* Vercel

## How Search Works

1. The user submits a search term.
2. React Router navigates to `/search?q=SEARCH_TERM`.
3. The results component requests `/api/search?q=SEARCH_TERM`.
4. A Vercel function calls Brave using a server-side API key.
5. The function returns JSON, and React displays the results.

## Run Locally

### Requirements

* A recent Node.js version compatible with the project's Vite version
* npm
* A Vercel account
* A Brave Search API key

### 1. Clone the repository

```bash
git clone https://github.com/cassiebezick/my-search-engine-clone.git
cd my-search-engine-clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the API key

Create a `.env.local` file in the project root:

```env
BRAVE_API_KEY=your_brave_search_api_key
```

Replace the placeholder with your own key. Environment files containing secrets should remain excluded from Git.

The backend reads `BRAVE_API_KEY` through `process.env`. Do not prefix this key with `VITE_`, which is used for variables exposed to frontend code.

### 4. Start the app

```bash
npx vercel dev
```

Follow the prompts to sign in and link or create a Vercel project. Select Vite if asked for the framework.

Open the local URL printed in the terminal.

Use `vercel dev` to test the complete application. `npm run dev` starts the Vite frontend but does not run the Vercel API function by itself.

## Development Commands

| Command           | Purpose                            |
| ----------------- | ---------------------------------- |
| `npx vercel dev`  | Run the frontend and API locally   |
| `npm run dev`     | Run the frontend with Vite         |
| `npm run lint`    | Check the code with ESLint         |
| `npm run build`   | Create a production frontend build |
| `npm run preview` | Preview the built frontend locally |

The frontend preview command does not run the search backend.

## Deployment

The project is hosted on Vercel and connected to its GitHub repository.

Build settings:

* **Framework:** Vite
* **Build command:** `npm run build`
* **Output directory:** `dist`

Add `BRAVE_API_KEY` to the Vercel project's environment variables before deploying.

The root `vercel.json` provides a routing rewrite so React Router pages load when opened directly or refreshed. API requests are excluded from that rewrite.

GitHub Pages alone cannot run the project's Vercel API function.

## Known Limitations

* This is a learning project inspired by Google's interface, not a complete search platform.
* The current search integration returns web results.
* Some Google-style controls are interface placeholders, including voice search and “I'm Feeling Lucky.”
* News, Shopping, Images, and Maps do not currently provide separate search experiences.
* Search availability depends on the Brave Search API, its usage limits, and valid server configuration.
* Search requests currently return up to 10 results without pagination.

## What I Learned

* Building and composing reusable React components.
* Managing input values and search interface states.
* Reading and updating URL query parameters with React Router.
* Fetching data asynchronously and handling failed requests.
* Using a backend function to keep API credentials out of frontend code.
* Understanding the difference between static hosting and hosting with server-side functions.
* Deploying a React application with client-side routing.

## Credits

Built by [Cassie Bezick](https://github.com/cassiebezick) as part of my front-end development learning journey.

The initial interface was developed while following a React search-clone tutorial. Search results are provided by Brave Search.

This project is for educational and portfolio purposes and is not affiliated with or endorsed by Google or Brave. Google branding belongs to its respective owner.
