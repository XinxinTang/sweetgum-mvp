// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

// Possible ways to improve this: https://dev.to/rounakbanik/writing-an-nft-collectible-smart-contract-2nh8

contract Carbon is ERC721URIStorage {
  // Allow us to increment the minted NFT counter
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;


  constructor()ERC721('The MarketPlace Tokens', 'TMT'){}

  function createToken(string memory tokenURI) public returns (uint256) {
    _tokenIds.increment();
    uint256 newItemId = _tokenIds.current();

    _mint(msg.sender, newItemId);

    _setTokenURI(newItemId, tokenURI);

    return newItemId;
  }
}