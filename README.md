![Badges]([https://img.shields.io/github/repo-size/macsnoeren/python-p2p-network](https://img.shields.io/github/repo-size/ascender1729/maze-runner-onchain?style=plastic))

# On-Chain Maze Runner

Welcome to the On-Chain Maze Runner project! This project is a decentralized maze game built on Ethereum using smart contracts and React.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

To run this project locally, you need to have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- Ethereum client (e.g., Ganache) for local development and testing
- MetaMask browser extension for interacting with the Ethereum network

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/on-chain-maze-runner.git
```

2. Install the dependencies:

```bash
cd on-chain-maze-runner
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and navigate to http://localhost:3000 to play the game.

## Project Structure

The project structure is organized as follows:

- `/contracts`: Contains the Solidity smart contracts for the maze game.
- `/src`: Contains the React application source code.
  - `/components`: Contains reusable React components used in the game.
  - `/pages`: Contains the main pages/components of the game.
  - `/utils`: Contains utility functions for interacting with smart contracts and the Ethereum network.
- `/test`: Contains test scripts for testing the smart contracts.

## Features

- On-chain maze generation and rendering.
- Player movement through the maze.
- Collision detection to prevent players from moving through walls.
- Smart contract integration to track player progress.
- Game UI with a maze view and player information.
- Start and finish line rendering.

## Contributing

Contributions are welcome! If you have any ideas or suggestions to improve this project, feel free to submit a pull request. Please make sure to follow the coding conventions and provide detailed information about your changes.

## License

This project is licensed under the [MIT License](LICENSE).


