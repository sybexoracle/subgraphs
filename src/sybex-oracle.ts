import {
  AnswerProvided as AnswerProvidedEvent,
  FeeRecipientUpdated as FeeRecipientUpdatedEvent,
  FeeUpdated as FeeUpdatedEvent,
  QuestionAsked as QuestionAskedEvent,
  ResolverAdded as ResolverAddedEvent,
  ResolverRemoved as ResolverRemovedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent
} from "../generated/SybexOracle/SybexOracle"
import {
  AnswerProvided,
  FeeRecipientUpdated,
  FeeUpdated,
  QuestionAsked,
  ResolverAdded,
  ResolverRemoved,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked
} from "../generated/schema"

export function handleAnswerProvided(event: AnswerProvidedEvent): void {
  let entity = new AnswerProvided(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.questionId = event.params.questionId
  entity.resolver = event.params.resolver
  entity.answerData = event.params.answerData

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeRecipientUpdated(
  event: FeeRecipientUpdatedEvent
): void {
  let entity = new FeeRecipientUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newFeeRecipient = event.params.newFeeRecipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeUpdated(event: FeeUpdatedEvent): void {
  let entity = new FeeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newFee = event.params.newFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleQuestionAsked(event: QuestionAskedEvent): void {
  let entity = new QuestionAsked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.questionId = event.params.questionId
  entity.questionType = event.params.questionType
  entity.questionText = event.params.questionText
  entity.timeout = event.params.timeout
  entity.asker = event.params.asker

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleResolverAdded(event: ResolverAddedEvent): void {
  let entity = new ResolverAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.resolver = event.params.resolver

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleResolverRemoved(event: ResolverRemovedEvent): void {
  let entity = new ResolverRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.resolver = event.params.resolver

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
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
    event.transaction.hash.concatI32(event.logIndex.toI32())
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
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
