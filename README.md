## Notes
The prod version has limited capability so as to prevent billings from google cloud. To develop the app, you need to create a `.env.local` file in the root directory and add the following environment variables:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key
```
You can get the api key from the google cloud console. The key should have the following APIs enabled:
- Maps JavaScript API
- Places API

After enabling the APIs, you can create a new api key and use it in the `.env.local` file.
PS: The key should be prefixed with `NEXT_PUBLIC_` to be accessible in the client side code. Billing should also be enabled for the project to use the APIs.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
