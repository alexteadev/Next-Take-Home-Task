
# Next.js Client Application

This project is a client-side application built using Next.js, TypeScript. It uses Tailwind CSS for styling and Redux Toolkit for state management.

---

## Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/)

---

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Add the necessary environment variables, e.g.:
     ```env
     NEXT_PUBLIC_API_URL=http://localhost:3001/api
     ```

---

## Running the Application

### Development Mode
To start the development server:
```bash
npm run dev
```
The application will be available at:
```
http://localhost:3000
```

### Production Mode

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

The application will be available at:
```
http://localhost:3000
```
