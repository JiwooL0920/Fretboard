CREATE TABLE "users" (
  "username" varchar PRIMARY KEY,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);