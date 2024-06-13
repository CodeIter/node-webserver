#!/usr/bin/env -S node

"use strict"

// Define the application
export const app = async (req, res) => {
  // Check the URL of the request
  if (req.url === '/') {
    // If the URL is '/', write 'Hello, World!' to the response
    res.write('Hello, World!');
    // End the response
    res.end();
  } else {
    // If the URL is not '/', send a 404 error
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    // Write the error message to the response
    res.end('404 Not Found\n');
  }
};

// Export the application
export default app;

