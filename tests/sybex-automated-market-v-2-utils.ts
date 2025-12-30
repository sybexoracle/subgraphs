import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  FeesWithdrawn,
  Initialized,
  MarketCanceled,
  MarketCreated,
  MarketResolved,
  OrderPlaced,
  RefudIssued,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  WinningsClaimed
} from "../generated/SybexAutomatedMarketV2/SybexAutomatedMarketV2"

export function createFeesWithdrawnEvent(
  amount: BigInt,
  token: Address,
  recipient: Address
): FeesWithdrawn {
  let feesWithdrawnEvent = changetype<FeesWithdrawn>(newMockEvent())

  feesWithdrawnEvent.parameters = new Array()

  feesWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  feesWithdrawnEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  feesWithdrawnEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )

  return feesWithdrawnEvent
}

export function createInitializedEvent(version: BigInt): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(version)
    )
  )

  return initializedEvent
}

export function createMarketCanceledEvent(
  marketId: BigInt,
  canceller: Address
): MarketCanceled {
  let marketCanceledEvent = changetype<MarketCanceled>(newMockEvent())

  marketCanceledEvent.parameters = new Array()

  marketCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  marketCanceledEvent.parameters.push(
    new ethereum.EventParam("canceller", ethereum.Value.fromAddress(canceller))
  )

  return marketCanceledEvent
}

export function createMarketCreatedEvent(
  marketId: BigInt,
  question: string,
  questionType: i32,
  outcomeLabels: Array<string>,
  token: Address,
  createdBy: Address,
  deadline: BigInt
): MarketCreated {
  let marketCreatedEvent = changetype<MarketCreated>(newMockEvent())

  marketCreatedEvent.parameters = new Array()

  marketCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  marketCreatedEvent.parameters.push(
    new ethereum.EventParam("question", ethereum.Value.fromString(question))
  )
  marketCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "questionType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(questionType))
    )
  )
  marketCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "outcomeLabels",
      ethereum.Value.fromStringArray(outcomeLabels)
    )
  )
  marketCreatedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  marketCreatedEvent.parameters.push(
    new ethereum.EventParam("createdBy", ethereum.Value.fromAddress(createdBy))
  )
  marketCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "deadline",
      ethereum.Value.fromUnsignedBigInt(deadline)
    )
  )

  return marketCreatedEvent
}

export function createMarketResolvedEvent(
  marketId: BigInt,
  winningOutcomeId: BigInt,
  resolver: Address
): MarketResolved {
  let marketResolvedEvent = changetype<MarketResolved>(newMockEvent())

  marketResolvedEvent.parameters = new Array()

  marketResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  marketResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "winningOutcomeId",
      ethereum.Value.fromUnsignedBigInt(winningOutcomeId)
    )
  )
  marketResolvedEvent.parameters.push(
    new ethereum.EventParam("resolver", ethereum.Value.fromAddress(resolver))
  )

  return marketResolvedEvent
}

export function createOrderPlacedEvent(
  marketId: BigInt,
  trader: Address,
  outcomeId: BigInt,
  amount: BigInt,
  token: Address
): OrderPlaced {
  let orderPlacedEvent = changetype<OrderPlaced>(newMockEvent())

  orderPlacedEvent.parameters = new Array()

  orderPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  orderPlacedEvent.parameters.push(
    new ethereum.EventParam("trader", ethereum.Value.fromAddress(trader))
  )
  orderPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "outcomeId",
      ethereum.Value.fromUnsignedBigInt(outcomeId)
    )
  )
  orderPlacedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  orderPlacedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return orderPlacedEvent
}

export function createRefudIssuedEvent(
  marketId: BigInt,
  trader: Address,
  amount: BigInt,
  token: Address
): RefudIssued {
  let refudIssuedEvent = changetype<RefudIssued>(newMockEvent())

  refudIssuedEvent.parameters = new Array()

  refudIssuedEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  refudIssuedEvent.parameters.push(
    new ethereum.EventParam("trader", ethereum.Value.fromAddress(trader))
  )
  refudIssuedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  refudIssuedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return refudIssuedEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createWinningsClaimedEvent(
  marketId: BigInt,
  trader: Address,
  amount: BigInt,
  token: Address
): WinningsClaimed {
  let winningsClaimedEvent = changetype<WinningsClaimed>(newMockEvent())

  winningsClaimedEvent.parameters = new Array()

  winningsClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  winningsClaimedEvent.parameters.push(
    new ethereum.EventParam("trader", ethereum.Value.fromAddress(trader))
  )
  winningsClaimedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  winningsClaimedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return winningsClaimedEvent
}
