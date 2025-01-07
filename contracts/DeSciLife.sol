// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.22;

import {ERC20} from "@openzeppelin/contracts@5.1.0/token/ERC20/ERC20.sol";

contract DeSciLife is ERC20 {
    constructor() ERC20("DeSciLife", "DSCI") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }
}