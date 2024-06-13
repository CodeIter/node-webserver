# Node.js Web Server with Continuous Integration

[![Docker image build](https://github.com/CodeIter/node-webserver/actions/workflows/publish-cr.yml/badge.svg)](https://github.com/CodeIter/node-webserver/actions/workflows/publish-cr.yml)

This project demonstrates building and publishing Docker images for a Node.js web server using Git and continuous integration (CI).

Streamline your development workflow by leveraging Git and CI.

After committing your code to your GitHub repository, the CI server automatically takes over, triggered by events defined in the `.github/workflows/publish-cr.yml` file.

These events can include:

* Pushing code to branches (e.g., `main`) or tags (e.g., `v1.1.1`, `alpha`, `beta`, `rc`).
* Pull requests to branches (e.g., `main`), enabling automated testing and image building before merging.

The CI server securely builds the Docker image using secrets stored in GitHub Secrets, eliminating the need to manage credentials in your code.

Finally, the built image is effortlessly pushed to your configured container registries (like ghcr.io, Docker Hub, or GitLab container registry).

This ensures your application is readily available for deployment across various environments.

## Features:

* Serves a simple "Hello, World!" message on the root path (`/`).
* Includes a `.dockerignore` file to optimize image size.
* Uses a multi-stage Docker build process for efficiency.
* Defines a GitHub Actions workflow to automate building, running, and publishing the Docker image to various container registries.

## How it Works

The project consists of the following files:

* `index.js`: The main Node.js application that defines a simple web server.
* `server.js`: Creates a Node.js server and delegates requests to the application defined in `index.js`.
* `package.json`: Contains metadata about the Node.js application.
* `.dockerignore`: Specifies files and folders to exclude from the Docker image.
* `Dockerfile`: Defines a multi-stage Docker build process for the application.
* `.github/workflows/publish-cr.yml` (optional): Defines a GitHub Actions workflow to automate building, running, and publishing the Docker image to various container registries.

## License

This project is licensed under the AGPL-3.0-or-later license.

See the `LICENSE` file for details.

