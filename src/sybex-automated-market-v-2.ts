import {
  FeesWithdrawn as FeesWithdrawnEvent,
  Initialized as InitializedEvent,
  MarketCanceled as MarketCanceledEvent,
  MarketCreated as MarketCreatedEvent,
  MarketResolved as MarketResolvedEvent,
  OrderPlaced as OrderPlacedEvent,
  RefudIssued as RefudIssuedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  WinningsClaimed as WinningsClaimedEvent,
} from "../generated/SybexAutomatedMarketV2/SybexAutomatedMarketV2"
import {
  SybexAutomatedMarketV2FeesWithdrawn as FeesWithdrawn,
  SybexAutomatedMarketV2Initialized as Initialized,
  MarketCanceled,
  SybexAutomatedMarketV2MarketCreated as MarketCreated,
  SybexAutomatedMarketV2MarketResolved as MarketResolved,
  SybexAutomatedMarketV2OrderPlaced as OrderPlaced,
  RefudIssued,
  SybexAutomatedMarketV2RoleAdminChanged as RoleAdminChanged,
  SybexAutomatedMarketV2RoleGranted as RoleGranted,
  SybexAutomatedMarketV2RoleRevoked as RoleRevoked,
  SybexAutomatedMarketV2WinningsClaimed as WinningsClaimed,
} from "../generated/schema"

export function handleFeesWithdrawn(event: FeesWithdrawnEvent): void {
  let entity = new FeesWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.amount = event.params.amount
  entity.token = event.params.token
  entity.recipient = event.params.recipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketCanceled(event: MarketCanceledEvent): void {
  let entity = new MarketCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.marketId = event.params.marketId
  entity.canceller = event.params.canceller

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketCreated(event: MarketCreatedEvent): void {
  let entity = new MarketCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.marketId = event.params.marketId
  entity.question = event.params.question
  entity.questionType = event.params.questionType
  entity.outcomeLabels = event.params.outcomeLabels
  entity.token = event.params.token
  entity.createdBy = event.params.createdBy
  entity.deadline = event.params.deadline

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketResolved(event: MarketResolvedEvent): void {
  let entity = new MarketResolved(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.marketId = event.params.marketId
  entity.winningOutcomeId = event.params.winningOutcomeId
  entity.resolver = event.params.resolver

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderPlaced(event: OrderPlacedEvent): void {
  let entity = new OrderPlaced(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.marketId = event.params.marketId
  entity.trader = event.params.trader
  entity.outcomeId = event.params.outcomeId
  entity.amount = event.params.amount
  entity.token = event.params.token

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRefudIssued(event: RefudIssuedEvent): void {
  let entity = new RefudIssued(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.marketId = event.params.marketId
  entity.trader = event.params.trader
  entity.amount = event.params.amount
  entity.token = event.params.token

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWinningsClaimed(event: WinningsClaimedEvent): void {
  let entity = new WinningsClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.marketId = event.params.marketId
  entity.trader = event.params.trader
  entity.amount = event.params.amount
  entity.token = event.params.token

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
