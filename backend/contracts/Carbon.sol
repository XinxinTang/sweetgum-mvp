// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CarbonNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping(address => string[]) public nft_list;

    constructor() ERC721("Carbon Footprint", "Carbon-NFT") {}

    function addItem(address user, string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(user, newItemId);
        _setTokenURI(newItemId, tokenURI);
        nft_list[user].push(tokenURI);


        return newItemId;
    }

    function allItems(address user) 
        public view 
        returns (string[] memory)
    {

        return nft_list[user];
    }
}