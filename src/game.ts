import { log } from "@graphprotocol/graph-ts";
import {
  FoundersPackPurchased,
  NftLocked,
  TransferBatch,
  TransferSingle,
  WithdrawalConfirmed,
} from "../generated/Game/Game";

export function handleFoundersPackPurchased(
  event: FoundersPackPurchased
): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  // let entity = ExampleEntity.load(event.transaction.from.toHex());
  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  // if (!entity) {
  //   entity = new ExampleEntity(event.transaction.from.toHex());
  // Entity fields can be set using simple assignments
  // entity.count = BigInt.fromI32(0);
  // }
  // BigInt and BigDecimal math are supported
  // entity.count = entity.count + BigInt.fromI32(1);
  // Entity fields can be set based on event parameters
  // entity.owner = event.params.owner;
  // entity.characterNumber = event.params.characterNumber;
  // Entities can be written to the store with `.save()`
  // entity.save();
  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.
  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.getBorisAddress(...)
  // - contract.getBorisBalance(...)
  // - contract.getBotsFeePercentage(...)
  // - contract.getContractBalance(...)
  // - contract.getContractFundsRecipient(...)
  // - contract.getEggTransferAllowed(...)
  // - contract.getFirstStageUserGen0EggLimit(...)
  // - contract.getForgerAddress(...)
  // - contract.getForgerBalance(...)
  // - contract.getFoundingCharacterCount(...)
  // - contract.getGen0EggMintStatus(...)
  // - contract.getGen0EggUsdCosts(...)
  // - contract.getGen0EggsMintedCount(...)
  // - contract.getIsContractPaused(...)
  // - contract.getLastStageUserGen0EggLimit(...)
  // - contract.getNativeTokenPriceInUsdFixed(...)
  // - contract.getReservedGen0EggCount(...)
  // - contract.getRoles(...)
  // - contract.getWaitlisted(...)
  // - contract.getWhitelisted(...)
  // - contract.getNativeTokenPriceInUsd(...)
  // - contract.getFoundersPackCost(...)
  // - contract.getFoundersPackFullCost(...)
  // - contract.getFoundersPackPurchaseAllowed(...)
  // - contract.getFoundersPackPurchaseGasOffset(...)
  // - contract.getFoundersPackUsdCost(...)
  // - contract.getPurchasedFoundersPackByAddress(...)
  // - contract.getPurchasedFoundersPacksCount(...)
  // - contract.accountsByToken(...)
  // - contract.balanceOf(...)
  // - contract.balanceOfBatch(...)
  // - contract.contractURI(...)
  // - contract.getBaseTokenIds(...)
  // - contract.getGen0EggCost(...)
  // - contract.getGen0EggFullCost(...)
  // - contract.getGen0EggGasOffset(...)
  // - contract.getGen0EggUsdCost(...)
  // - contract.getGen0EggUsdCredits(...)
  // - contract.getMintedByMintId(...)
  // - contract.getNftsIndex(...)
  // - contract.getOwnerOf(...)
  // - contract.getPendingWithdrawalByApiId(...)
  // - contract.getPurchasedEggsCountByAddress(...)
  // - contract.getTotalMintedEggs(...)
  // - contract.getTotalSupply(...)
  // - contract.getWithdrawalGasOffset(...)
  // - contract.hatchEgg(...)
  // - contract.isApprovedForAll(...)
  // - contract.isNftLocked(...)
  // - contract.mintCharacter(...)
  // - contract.mintItem(...)
  // - contract.name(...)
  // - contract.royaltyInfo(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokensByAccount(...)
  // - contract.totalHolders(...)
  // - contract.totalSupply(...)
  // - contract.uri(...)
}

export function handleNftLocked(event: NftLocked): void {}

export function handleTransferBatch(event: TransferBatch): void {}

export function handleTransferSingle(event: TransferSingle): void {
  log.info("TRANSFER SINGLEEE", []);
}

export function handleWithdrawalConfirmed(event: WithdrawalConfirmed): void {}
