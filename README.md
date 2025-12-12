# Sybex Oracle Subgraph

This project is a Graph Protocol subgraph that indexes events from the Sybex Oracle smart contract on the Binance Smart Chain (BSC). The subgraph tracks all oracle-related activities including questions, answers, resolver management, and fee updates.

## Overview

The Sybex Oracle is a decentralized oracle service that allows users to ask questions and receive answers from trusted resolvers. This subgraph provides an efficient way to query all oracle activities and data through GraphQL.

## Contract Details

- **Network**: Binance Smart Chain (BSC)
- **Contract Address**: `0xa2E97a955dbFE75c4BEa91c80a6F821654f77b7B`
- **Start Block**: 71224956
- **Contract Name**: SybexOracle

## Features

The subgraph tracks the following events from the Sybex Oracle contract:

### Core Oracle Events
- **QuestionAsked**: Emitted when a user submits a question to the oracle
- **AnswerProvided**: Emitted when a resolver provides an answer to a question

### Management Events
- **ResolverAdded**: Emitted when a new resolver is added to the oracle
- **ResolverRemoved**: Emitted when a resolver is removed from the oracle
- **FeeUpdated**: Emitted when the oracle fee structure is updated
- **FeeRecipientUpdated**: Emitted when the fee recipient address is changed

### Access Control Events
- **RoleAdminChanged**: Emitted when an admin role configuration changes
- **RoleGranted**: Emitted when a role is granted to an account
- **RoleRevoked**: Emitted when a role is revoked from an account

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Graph CLI

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/sybexoracle/subgraphs.git sybex-subgraphs
cd sybex-subgraphs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Generate the code from the schema:
```bash
npm run codegen
# or
yarn codegen
```

4. Build the subgraph:
```bash
npm run build
# or
yarn build
```

## Deployment

### Hosted Service (The Graph Studio)

Deploy to The Graph's hosted service:

```bash
npm run deploy
# or
yarn deploy
```

### Local Node

1. Create the subgraph on your local node:
```bash
npm run create-local
```

2. Deploy to your local node:
```bash
npm run deploy-local
```

3. Remove from local node (if needed):
```bash
npm run remove-local
```

## Schema

The subgraph defines the following entities in GraphQL:

### AnswerProvided
```graphql
type AnswerProvided @entity(immutable: true) {
  id: Bytes!
  questionId: BigInt!
  resolver: Bytes!
  answerData: Bytes!
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}
```

### QuestionAsked
```graphql
type QuestionAsked @entity(immutable: true) {
  id: Bytes!
  questionId: BigInt!
  questionType: Int!
  questionText: String!
  timeout: BigInt!
  asker: Bytes!
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}
```

### FeeRecipientUpdated
```graphql
type FeeRecipientUpdated @entity(immutable: true) {
  id: Bytes!
  newFeeRecipient: Bytes!
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}
```

### FeeUpdated
```graphql
type FeeUpdated @entity(immutable: true) {
  id: Bytes!
  newFee: BigInt!
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}
```

### Resolver Management
```graphql
type ResolverAdded @entity(immutable: true) {
  id: Bytes!
  resolver: Bytes!
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}

type ResolverRemoved @entity(immutable: true) {
  id: Bytes!
  resolver: Bytes!
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}
```

### Role Management
```graphql
type RoleAdminChanged @entity(immutable: true) {
  id: Bytes!
  role: Bytes!
  previousAdminRole: Bytes!
  newAdminRole: Bytes!
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}

type RoleGranted @entity(immutable: true) {
  id: Bytes!
  role: Bytes!
  account: Bytes!
  sender: Bytes!
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}

type RoleRevoked @entity(immutable: true) {
  id: Bytes!
  role: Bytes!
  account: Bytes!
  sender: Bytes!
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}
```

## Query Examples

### Get All Questions
```graphql
{
  questionAskeds(first: 10, orderBy: blockTimestamp, orderDirection: desc) {
    id
    questionId
    questionType
    questionText
    timeout
    asker
    blockTimestamp
  }
}
```

### Get Answers for a Specific Question
```graphql
{
  answerProvideds(where: { questionId: "123" }) {
    id
    questionId
    resolver
    answerData
    blockTimestamp
  }
}
```

### Get All Resolver Activities
```graphql
{
  resolverAddeds(orderBy: blockTimestamp, orderDirection: desc) {
    resolver
    blockTimestamp
  }
  resolverRemoveds(orderBy: blockTimestamp, orderDirection: desc) {
    resolver
    blockTimestamp
  }
}
```

### Get Recent Fee Updates
```graphql
{
  feeUpdateds(first: 5, orderBy: blockTimestamp, orderDirection: desc) {
    newFee
    blockTimestamp
  }
  feeRecipientUpdateds(first: 5, orderBy: blockTimestamp, orderDirection: desc) {
    newFeeRecipient
    blockTimestamp
  }
}
```

## Testing

Run the test suite:

```bash
npm run test
# or
yarn test
```

## Project Structure

```
sybex-subgraphs/
├── abis/                  # Contract ABIs
│   └── SybexOracle.json
├── src/                   # AssemblyScript mapping handlers
│   └── sybex-oracle.ts
├── tests/                 # Test files
│   ├── sybex-oracle.test.ts
│   └── sybex-oracle-utils.ts
├── schema.graphql         # GraphQL schema definition
├── subgraph.yaml          # Subgraph manifest
├── networks.json          # Network configuration
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
└── docker-compose.yml     # Docker configuration for local development
```

## Development

### Code Generation

Whenever you modify `schema.graphql`, run:

```bash
npm run codegen
```

This will regenerate the AssemblyScript types in `generated/`.

### Local Development with Docker

Use the provided docker-compose.yml for local Graph Node setup:

```bash
docker-compose up
```

### Mapping Handlers

The mapping handlers are located in `src/sybex-oracle.ts`. Each handler processes a specific event type and creates/updates entities accordingly.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests to ensure everything works
5. Submit a pull request

## License

This project is licensed under the terms specified in the license file.

## Support

For support or questions regarding this subgraph, please open an issue in the repository.