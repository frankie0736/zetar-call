import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env" });
config({ path: ".env.development" });
config({ path: ".env.local" });

export default defineConfig({
  out: "./drizzle/sqlite/migration",
  schema: "./drizzle/sqlite/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.SQLITE_URL!,
  },
});
