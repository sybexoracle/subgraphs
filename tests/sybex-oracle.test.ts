import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { AnswerProvided } from "../generated/schema"
import { AnswerProvided as AnswerProvidedEvent } from "../generated/SybexOracle/SybexOracle"
import { handleAnswerProvided } from "../src/sybex-oracle"
import { createAnswerProvidedEvent } from "./sybex-oracle-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#tests-structure

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let questionId = BigInt.fromI32(234)
    let resolver = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let answerData = Bytes.fromI32(1234567890)
    let newAnswerProvidedEvent = createAnswerProvidedEvent(
      questionId,
      resolver,
      answerData
    )
    handleAnswerProvided(newAnswerProvidedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#write-a-unit-test

  test("AnswerProvided created and stored", () => {
    assert.entityCount("AnswerProvided", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AnswerProvided",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "questionId",
      "234"
    )
    assert.fieldEquals(
      "AnswerProvided",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "resolver",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AnswerProvided",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "answerData",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#asserts
  })
})
