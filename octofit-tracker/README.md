# OctoFit Tracker

A modern multi-tier application for fitness tracking built with React 19, Node.js/Express, and MongoDB.

## Architecture

- **Frontend (Presentation Tier):** React 19 with Vite
  - Port: 5173
  - Technology: React, TypeScript, Vite

- **Backend (Logic Tier):** Node.js + Express + TypeScript
  - Port: 8000
  - Technology: Express.js, TypeScript, Mongoose

- **Database (Data Tier):** MongoDB
  - Port: 27017
  - Technology: MongoDB with Mongoose ODM

## Project Structure

```
octofit-tracker/
├── frontend/          # React 19 Vite application
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
└── backend/           # Express.js API server
    ├── src/
    ├── package.json
    └── tsconfig.json
```

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB running locally or via Docker

### Frontend Setup

```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd octofit-tracker/backend
npm install
npm run dev
```

### MongoDB Setup

```bash
# Using Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

## Environment Variables

Copy `.env.example` to `.env` and update as needed.

## Development

- Frontend runs on `http://localhost:5173`
- Backend API runs on `http://localhost:8000`
- MongoDB runs on `localhost:27017`
