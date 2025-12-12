import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
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
} from "../generated/SybexOracle/SybexOracle"

export function createAnswerProvidedEvent(
  questionId: BigInt,
  resolver: Address,
  answerData: Bytes
): AnswerProvided {
  let answerProvidedEvent = changetype<AnswerProvided>(newMockEvent())

  answerProvidedEvent.parameters = new Array()

  answerProvidedEvent.parameters.push(
    new ethereum.EventParam(
      "questionId",
      ethereum.Value.fromUnsignedBigInt(questionId)
    )
  )
  answerProvidedEvent.parameters.push(
    new ethereum.EventParam("resolver", ethereum.Value.fromAddress(resolver))
  )
  answerProvidedEvent.parameters.push(
    new ethereum.EventParam("answerData", ethereum.Value.fromBytes(answerData))
  )

  return answerProvidedEvent
}

export function createFeeRecipientUpdatedEvent(
  newFeeRecipient: Address
): FeeRecipientUpdated {
  let feeRecipientUpdatedEvent = changetype<FeeRecipientUpdated>(newMockEvent())

  feeRecipientUpdatedEvent.parameters = new Array()

  feeRecipientUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newFeeRecipient",
      ethereum.Value.fromAddress(newFeeRecipient)
    )
  )

  return feeRecipientUpdatedEvent
}

export function createFeeUpdatedEvent(newFee: BigInt): FeeUpdated {
  let feeUpdatedEvent = changetype<FeeUpdated>(newMockEvent())

  feeUpdatedEvent.parameters = new Array()

  feeUpdatedEvent.parameters.push(
    new ethereum.EventParam("newFee", ethereum.Value.fromUnsignedBigInt(newFee))
  )

  return feeUpdatedEvent
}

export function createQuestionAskedEvent(
  questionId: BigInt,
  questionType: i32,
  questionText: string,
  timeout: BigInt,
  asker: Address
): QuestionAsked {
  let questionAskedEvent = changetype<QuestionAsked>(newMockEvent())

  questionAskedEvent.parameters = new Array()

  questionAskedEvent.parameters.push(
    new ethereum.EventParam(
      "questionId",
      ethereum.Value.fromUnsignedBigInt(questionId)
    )
  )
  questionAskedEvent.parameters.push(
    new ethereum.EventParam(
      "questionType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(questionType))
    )
  )
  questionAskedEvent.parameters.push(
    new ethereum.EventParam(
      "questionText",
      ethereum.Value.fromString(questionText)
    )
  )
  questionAskedEvent.parameters.push(
    new ethereum.EventParam(
      "timeout",
      ethereum.Value.fromUnsignedBigInt(timeout)
    )
  )
  questionAskedEvent.parameters.push(
    new ethereum.EventParam("asker", ethereum.Value.fromAddress(asker))
  )

  return questionAskedEvent
}

export function createResolverAddedEvent(resolver: Address): ResolverAdded {
  let resolverAddedEvent = changetype<ResolverAdded>(newMockEvent())

  resolverAddedEvent.parameters = new Array()

  resolverAddedEvent.parameters.push(
    new ethereum.EventParam("resolver", ethereum.Value.fromAddress(resolver))
  )

  return resolverAddedEvent
}

export function createResolverRemovedEvent(resolver: Address): ResolverRemoved {
  let resolverRemovedEvent = changetype<ResolverRemoved>(newMockEvent())

  resolverRemovedEvent.parameters = new Array()

  resolverRemovedEvent.parameters.push(
    new ethereum.EventParam("resolver", ethereum.Value.fromAddress(resolver))
  )

  return resolverRemovedEvent
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
