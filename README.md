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

## Pages

The routing in nextjs is based on the file system. So, if you want to create a new page, just create a new file in the pages directory. For example, if you want to create a page for the url /about, create a file called about.js in the pages directory. You can also create nested pages. For example, if you want to create a page for the url /about/me, create a file called me.js in the about directory inside the pages directory.

For example, if you want to create a page for the url `localhost:port/property-list`, create a file called searchDialog.jsx in the property-list directory inside the pages directory.

- `src/app/property-list/searchDialog.jsx`

## Links and Navigation

```js
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
```

## Routing

```js
import { useRouter } from "next/navigation";

function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? "red" : "black",
  };

  function handleClick(e) {
    e.preventDefault();
    router.push(href);
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

export default ActiveLink;
```
