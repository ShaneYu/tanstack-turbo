import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/client/client.js";

const adapter = new PrismaPg({
  connectionString: process.env.SERVER_DATABASE_URL,
});

const db = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding database...");
  await db.todo.deleteMany();

  await db.todo.createMany({
    data: [
      { id: 1, title: "First todo", description: "This is the very first todo entry.", completed: false },
      { id: 2, title: "Second todo", completed: false },
      { id: 3, title: "Third todo", completed: false },
    ],
  });
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
