This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It uses eslint, prettier, husky, lint-staged, and commitlint for code quality and commit message linting. It also uses tailwindcss for styling.

To learn more, take a look at the following resources:
 
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Routing](https://nextjs.org/docs/routing/introduction) - learn about Next.js routing.
- [Javascript Fetch API](https://www.javascripttutorial.net/javascript-fetch-api/) - learn about the fetch api.
- [Tailwindcss Documentation](https://tailwindcss.com/docs) - learn about tailwindcss.
- [React Use State](https://react.dev/learn/reacting-to-input-with-state) - learn about react.
  > note that we are using nextjs version 14.0.4, and tailwindcss 3.3.0. We are not using typescript.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## AuthContext in Our Project

We are using the AuthContext to manage the user authentication state and user data that include user's id.
To use the AuthContext, you can import the AuthContext and use the useContext hook to access the user data and the login and logout functions.

```javascript
import { useContext } from "react";
import { AuthContext } from "@/app/(dashboard)/AuthProvider";

function TestComponent() {
  const { userData, isAuthenticated } = useContext(AuthContext);
  {
    /*return ( 
    <div>
      <h1>{userData.name}</h1>
      <h2>{userData.email}</h2>
      <h3>{userData.role}</h3>
      <h4>{userData.contactNumber}</h4>
      <h5>{userData.customerId}</h5>
    </div>
  );*/
  }
}
```

Here is userData object structure:

```javascript
{
  customerId: string,
  email: string,
  name: string,
  role: string,
  contactNumber: string,
}
```
