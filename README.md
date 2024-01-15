# Node.js/Express/React/HTMX Server

This is an example music player server which sends down (partial) views via React + HTMX.

## Main Tech Used

- Page content swaps and requests via [HTMX](https://htmx.org/)
- Server-side templating via [React](https://react.dev/)
- Routing/middleware via [Express.js](https://expressjs.com/)
- Server run using [Node.js](https://nodejs.org/)

## Getting Started

Type checking is provided via TypeScript + JSDoc annotations. No build step is required to run the server (after
dependencies are installed).

### Prerequisites

- You will need to have Node.js 20 LTS (or newer) installed on your machine. You can download Node.js from
  the [official website](https://nodejs.org).
- After installing Node.js, you'll have access to the `npm` package manager for installing the other dependencies.

### Setup

Download the source code and install dependencies using the following commands. Run them one at a time.

```bash
git clone https://github.com/lanceturbes/simple-node-react-htmx.git
cd simple-node-react-htmx
npm install
```

To add music to the server, simply copy/paste your `.mp3` files into `public/music`. Please name your files in
kebab-case, and avoid special characters in the file name.

### Launching

After installing, you can use the following command to run the server:

```bash
npm start
```

This will launch the server on `http://localhost:5000` (if you want, you can change the port variable
inside `src/main.js`).

## License

- MIT License. See `LICENSE.md`