import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { FeesWithdrawn } from "../generated/schema"
import { FeesWithdrawn as FeesWithdrawnEvent } from "../generated/SybexAutomatedMarketV2/SybexAutomatedMarketV2"
import { handleFeesWithdrawn } from "../src/sybex-automated-market-v-2"
import { createFeesWithdrawnEvent } from "./sybex-automated-market-v-2-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#tests-structure

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let amount = BigInt.fromI32(234)
    let token = Address.fromString("0x0000000000000000000000000000000000000001")
    let recipient = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newFeesWithdrawnEvent = createFeesWithdrawnEvent(
      amount,
      token,
      recipient
    )
    handleFeesWithdrawn(newFeesWithdrawnEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#write-a-unit-test

  test("FeesWithdrawn created and stored", () => {
    assert.entityCount("FeesWithdrawn", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "FeesWithdrawn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "FeesWithdrawn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "token",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "FeesWithdrawn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "recipient",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#asserts
  })
})
