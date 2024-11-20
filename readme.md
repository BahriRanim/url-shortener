# URL Shortener

A simple URL shortener application built using React for the frontend and Node.js with Express for the backend.


## Tech Stack

- **Frontend**: React (with TypeScript)
- **Backend**: Node.js, Express (with TypeScript)
- **Storage**: In-memory storage (for simplicity)


## Architecture

This project uses **Hexagonal Architecture** (also known as Ports and Adapters). 
- **Core**: Contains entities and services related to the business logic.
- **Ports**: Defines interfaces (repositories, services) that are used to interact with the outside world.
- **Adapters**: Implements the ports to interact with external systems.

