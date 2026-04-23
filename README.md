# [8-Bit Jam](https://8bitjam.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-black?style=for-the-badge&logo=vercel)

![Website homepage screenshot](/public/banner.png)

This is a retro 8-bit-themed landing website for the game hackathon, 8-Bit Jam, I’m hosting this August! You can register, check out the schedule, and learn more about the event on this website. 8-Bit Jam is a fun and unique hackathon happening this summer in Herndon, Virginia that's focused on game dev, with fun challenges, sidequests, and even game tournaments to make this the most fun and memorable hackathon you've ever attended! This landing page is meant to answer all your questions about the hackathon, as well as providing a place for you to fill out the interest RSVP form and register for an account early. Since this is a game jam focused around the number 8 (hence the octopus), I decided to go with this cool 8-bit design style to make the website fit the event better and have a fun personality.

## Pages

- Homepage: hero section with interest form, about info, and interactive cards
- Sponsors: a page for sponsors to reach out and be displayed (temporary placeholders)
- About: about the hackathon, more info, and the team
- Sign in: sign up/sign in to an account
- Dashboard: place to manage your account and registration

## Tech stack

This is a [Next.js](https://nextjs.org) app hosted on [Vercel](https://vercel.com) and [Neon](https://neon.com), built with [React](https://react.dev), [TypeScript](https://typescriptlang.org), [Prisma](https://www.prisma.io/), [PostgreSQL](https://www.postgresql.org/), and [Tailwind](https://tailwindcss.com), and the libraries [Better Auth](https://www.better-auth.com), [Framer Motion](https://motion.dev), and [React Icons](https://react-icons.github.io). The app folder contains the frontend page routes and the backend API endpoints. The components folder contains frontend layout and UI components. The prisma folder contains the Prisma schema, and the lib and types folders contain extra stuff for setup. Finally, the public folder contains frontend assets like icons and logos.

## Quick start

To host my portfolio on your machine (why?) for local development or other purposes, simply follow these steps below:

1. Clone the GitHub [repository](https://github.com/8bitjam/site) using the command
   ```bash
   git clone https://github.com/8bitjam/site.git
   ```
2. Open it with your favorite code editor or through the terminal
3. If you don't have a local Postgres database or a cloud Neon/Supabase cluster/connection string, only the non-admin pages will be available because of obvious reasons
4. Open the terminal and run the commands

   ```bash
   npm install
   npm run dev
   ```

   to start the Next.js dev server at localhost:3000 and see the magic!

## Contribution

Any kind of contribution is welcome (but why?), but please follow the guideline below!

- Submit an issue if there's a bug/issue or if you want to suggest new features/subscriptions to be added.
- Submit a pull request if you want to add or improve the code base!
- Commit messages should be specific and address the issue
- Please don't submit random issues that aren't specific
- Please don't submit pull requests that "fix typo" or "improve formatting"
