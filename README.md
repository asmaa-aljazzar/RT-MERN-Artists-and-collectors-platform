# RT

RT is a platform where artists can share their artwork and art lovers can discover and collect works they enjoy. Future versions may support collaborative artwork for projects such as manga and animation.

## MVP features

See the [MVP feature list](./MVP.md).

## Technology stack

### Current backend

- Node.js
- Express
- MongoDB
- Mongoose

### Planned frontend

- React
- Vite

## Project structure

```text
client/                 Planned React frontend
server/
├── config/             Configuration and database connection
├── controllers/        Request-handling logic
├── models/             Mongoose schemas
├── routes/             API route definitions
└── server.js           Application entry point
```

## Requirements

- Node.js
- npm
- A MongoDB Atlas database or local MongoDB installation

## Environment setup

Environment configuration will be documented after `.env.example` is added.

## Running the server

From the project root:

```bash
cd server
npm install
npm run dev
```
