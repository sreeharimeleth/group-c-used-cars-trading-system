# MilesMart UI

Frontend for a used car trading platform, built as part of a group project. This branch (`WIP-UI-Sreehari`) contains my individual UI contribution.

## My Contribution

- **Home Page** and **Sell Page** â€” ported and implemented
- **Product Detail Page** (`product/[vid]`) â€” dynamic vehicle detail view
- **Results Page** â€” search/listing results view
- **Profile Page**
- **Share and Buy Now** functionality
- **Auth-related flows** â€” login, logout, delete account (UI + server actions)
- Shared layout, loading states, and header/search bar components

## Tech Stack

- Next.js (App Router)
- React
- TypeScript (.tsx)

## Backend Dependency

Most pages in this branch are UI-only and can be viewed without any backend running.

However, the following actions call a real backend service expected at `http://localhost:5000`:
- Login
- Logout
- Delete Account

These specific actions will fail without the backend running. All other pages (home, sell, product detail, results, profile) should render independently.

## Running Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Notes

This is a work-in-progress branch from a group academic project. Other branches (`Backend`, `WIP-UI-Ansif`, `WIP-UI-Sanchu`, etc.) contain contributions from teammates and are not part of this summary.
