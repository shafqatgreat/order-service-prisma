# 🚀 Node.js Microservices — Prisma & PostgreSQL Integration

This repository contains the **latest code update** from the ongoing **Node.js Microservices: Zero to Cloud** series.

In this episode, we focus on **connecting a Node.js service with PostgreSQL using Prisma ORM**, following **production-grade structure and best practices**.

---

## 📌 What This Episode Covers

In this update, we implemented and explained:

* ✅ Proper **project structure** for a microservice
* ✅ Environment configuration using **dotenv**
* ✅ **Prisma ORM** setup from scratch
* ✅ PostgreSQL database connection
* ✅ Prisma Client initialization
* ✅ Database schema modeling
* ✅ Running Prisma migrations
* ✅ Clean service-level database access
* ✅ Safe connection testing & disconnection

This episode builds a **strong data layer foundation** for future services.

---

## 🧱 Tech Stack Used

* **Node.js**
* **Express.js**
* **Prisma ORM**
* **PostgreSQL**
* **dotenv** for environment management
* **Thunder Client** for API testing

---

## 📂 Project Structure (Simplified)

```
order-service-prisma/
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   └── app.js
│
├── .env
├── package.json
└── README.md
```

Each layer has a **single responsibility**, keeping the service maintainable and scalable.

---

## ⚙️ Environment Setup

Create a `.env` file in the root:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

> ⚠️ Make sure PostgreSQL is running before starting the service.

---

## 🗄️ Prisma Setup & Migration

Initialize Prisma:

```bash
npx prisma init
```

Run migrations:

```bash
npx prisma migrate dev --name init
```

Generate Prisma Client:

```bash
npx prisma generate
```

---

## ▶️ Running the Service

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm run dev
```

Test endpoints using **Thunder Client** or any REST client.

---

## 🧪 Database Connection Test

A test script is included to:

* Verify Prisma ↔ PostgreSQL connectivity
* Fetch records safely
* Disconnect Prisma gracefully

This ensures **no connection leaks** in production.

---

## 🧠 Why Prisma in Microservices?

* Type-safe database access
* Clean schema-driven development
* Predictable migrations
* Excellent performance with PostgreSQL

Perfect fit for **scalable microservices**.

---

## 🔄 What’s Coming Next

Upcoming updates will include:

* 🔐 Authentication service
* 🔁 Service-to-service communication
* 📦 API Gateway
* 🐳 Dockerization
* ☁️ Cloud deployment

---

## 📺 Video Reference

This code corresponds to the **latest YouTube episode** in the series:

> *(Link will be added once published)*

---

## 💬 Feedback & Contributions

If you find issues or have suggestions:

* Open an issue
* Fork and experiment
* Share feedback in comments

---

**This repository evolves with every episode — stay tuned.**
