<h1 align="center">
  <img src="https://ibb.co/K5dP6P6" alt="FSW Store" border="0">
</h1>

## 📖 About

FSW Store is a simple e-commerce website where you can buy some products. Built with Next.js, NextAuth, TypeScript, Tailwind, Shadcn, Stripe API, Prisma and Supabase.

## 🧪 Technologies

[![My Skills](https://skillicons.dev/icons?i=nextjs,tailwind,ts,prisma,supabase)](https://skillicons.dev)

## 🚀 Running the project

```bash
# Clone repo
$ git clone https://github.com/d0ugui/mycontacts

# Install deps
$ cd fsw-store
$ yarn or npm install

# Create local environment variables (.env)
$ DATABASE_URL
$ GOOGLE_CLIENT_ID
$ GOOGLE_CLIENT_SECRET
$ NEXT_PUBLIC_STRIPE_PUBLIC_KEY
$ STRIPE_SECRET_KEY
$ STRIPE_WEBHOOK_SECRET_KEY

# Create database tables
$ npx prisma migrate dev --name init

# Run project
$ npm run dev or yarn dev
```

## 📝 License

This software is available under the following licenses:

- [MIT](https://rem.mit-license.org)
