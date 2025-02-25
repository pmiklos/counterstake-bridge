"use strict";
const conf = require('ocore/conf.js');
const EvmChain = require('./evm-chain.js');
const { getProvider } = require("./evm/provider.js");

let bCreated = false;

class BSC extends EvmChain {

	constructor() {
		if (bCreated)
			throw Error("BSC class already created, must be a singleton");
		bCreated = true;
		
		const provider = getProvider('BSC');
		super('BSC', conf.bsc_factory_contract_address, conf.bsc_assistant_factory_contract_address, provider);
	}

	getNativeSymbol() {
		return 'BNB';
	}

	getMaxBlockRange() {
		return 5000;
	}


}

module.exports = BSC;
