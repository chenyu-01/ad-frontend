## Overview

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It uses eslint, prettier, husky, lint-staged, and commitlint for code quality and commit message linting. It also uses tailwindcss for styling.

### Features

- **User Authentication**: Utilizes `AuthContext` for managing user authentication states and data, ensuring secure access to the application.
- **Property Management**: Includes functionality for adding, updating, and listing properties. This is handled through various components and pages under `src/app/(dashboard)/`.
- **Appointments**: Features an appointment management system allowing users to view and manage their appointments via `AppoinmentTable.jsx` and related components.
- **Search and Filtering**: Advanced search and filtering capabilities to find properties based on various criteria, implemented in `src/app/(dashboard)/search/advanced/`.
- **Responsive Design**: Tailored to provide a seamless experience across different devices, leveraging Tailwind CSS for styling.

### Technology Stack

- **Next.js**: The core framework providing server-side rendering and static site generation.
- **Tailwind CSS**: Used for styling, enabling a utility-first approach to design.
- **Node.js and npm**: Required for managing the project's dependencies.
- **ESLint, Prettier, Husky, lint-staged, and commitlint**: Ensures code quality and consistency.



## Pre-requisites

- Node.js and npm
  run `npm install` to install all the dependencies.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Related Repositories

- [**Frontend Next Js(*this project*)**](https://github.com/chenyu-01/ad-frontend)
- [Java Spring Boot](https://github.com/chenyu-01/ad-backend)
- [Android](https://github.com/preethivenkat5/ad_android)
- [ML Model](https://github.com/CsCesium/DNN-NCF-Transformer)

