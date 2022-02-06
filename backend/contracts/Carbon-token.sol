
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GLDToken is ERC20 {
    address private owner;


    constructor() ERC20("Carbon", "OCO-Dev") {}

    function mileage_to_oco(address user, uint256 mileage) 
        public 
    {
        uint256 new_oco = mileage * 1;
        _mint(user, new_oco);
    }




}