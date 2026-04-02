# Qiya Studio

An eye-catching MERN portfolio web app for a creator who works across content writing, editing, media, and social media management.

## Stack

- MongoDB
- Express
- React + Vite
- Node.js

## Quick start

```bash
npm install
npm run dev
```

Client runs on `http://localhost:5173` and the API runs on `http://localhost:5000`.

## Environment

Create `server/.env`:

```bash
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

## Deployment notes

- Deploy as a single Node service.
- Run `npm install` as the install command.
- Run `npm run build` as the build command.
- Run `npm start` as the start command.
- In production, Express serves the React build from `client/dist`.
- Add your MongoDB Atlas URI as `MONGODB_URI`.

## Fast deploy

### Render

1. Push this project to GitHub.
2. Create a new Web Service in Render.
3. Connect the GitHub repo.
4. Render will detect `render.yaml`, or use:
   - Build command: `npm install && npm run build`
   - Start command: `npm start`
5. Set `NODE_ENV=production`.
6. If you use MongoDB later, add `MONGODB_URI` in Render environment variables.

### Local production preview

```bash
npm run build
npm start
```
