# TheBlock
A decentralised home-sharing web application using React, Truffle framework and local blockchain server Ganache

Tech stack: Solidity, React, Truffle, Ganache, Web3, React-bootstrap, HTML/CSS/JS

## Prerequisites

There are a few downloads required to run this project.

### NPM

The project uses NPM as a package manager which manages dependencies and allows us to install needed programs.

The download link for the installer is [Here](https://www.npmjs.com/get-npm)

### Truffle framework

Truffle is the development environment which we will use to compile, deploy and migrate the smart contracts.

Once NPM is installed, we can install truffle through a terminal:

```
npm install -g truffle
```

### Ganache

Ganache is an Ethereum client which runs a personal, local blockchain for development. We will use this to host and interact with our smart contracts

The installation for Ganache can be found [Here](https://www.trufflesuite.com/ganache)

## Installation

### Setting up Ganache

Open Ganache and set the RPC server settings:
Hostname: 127.0.0.1
Port: 8545

### Installing modules

Open a terminal in the /frondend folder

```
npm install
```

## Running the application

### Start Ganache

In order to have a functioning backend, Ganache should be running our RPC server in the background

### Compiling and migrating the smart contracts

Open a terminal in the /backend folder

```
truffle compile
truffle migrate
```

### Starting the frontend

Open a terminal in the /frontend folder

```
npm run
```

