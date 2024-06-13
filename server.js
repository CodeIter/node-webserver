#!/usr/bin/env -S node

"use strict"

import http from 'http';

// Import the application
import { app } from './index.js';

const hostname = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 8000;

// Create the server
const server = http.createServer(app);

// Start the server
server.listen(port, hostname, () => {
  console.log(`Hello world`);
  console.log(`Server running at http://${hostname}:${port}/`);
});

