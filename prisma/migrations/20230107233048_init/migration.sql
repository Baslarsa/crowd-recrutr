-- CreateEnum
CREATE TYPE "status" AS ENUM ('contact', 'dialogue', 'interview', 'offer', 'closed');

-- CreateTable
CREATE TABLE "candidates" (
    "email" VARCHAR NOT NULL,
    "first_name" VARCHAR NOT NULL,
    "last_name" VARCHAR NOT NULL,
    "position" VARCHAR,
    "phone" VARCHAR,
    "created_at" TIMESTAMP(6) NOT NULL,
    "image_url" VARCHAR,
    "current_status" "status" NOT NULL,

    CONSTRAINT "candidates_pkey" PRIMARY KEY ("email")
);
