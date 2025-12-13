require("dotenv").config();

const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const { Pool } = require("pg");

// Correct pool configuration
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// Pass pool into PrismaPg
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

async function test() {
  try {
    const orders = await prisma.order.findMany();
    console.log("Connected successfully!");
    console.log("Orders:", orders);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await prisma.$disconnect();
  }
}

test();
