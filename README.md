# Crowd Recrutr

### Next.js application with Dockerized Postgres DB and Prisma ORM

Created by David Larsson 2023

### Prerequisites

- Docker or Docker Desktop

### Installation instructions

1. Install Docker or Docker Desktop and start it.
2. Run command `npm install`
3. Run `docker-compose up -d`. It will create the docker container with a postgres database and run it in the background.
4. Run command `npm run db:migrate` to apply a table to the DB.
5. Run command `npm run db:seed` to seed data into the DB.
6. Run `npm run dev` that will start the docker containers and run the development server.
7. Go to `localhost:3000` in the browser and carpe diem.
