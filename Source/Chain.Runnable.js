/*
---
description: Slightly more robust chaining

license: MIT-style

authors:
- Michal Charemza

requires:
- Core/Class.Extras
- Core/Array

provides: [Chain.Runnable]

...
*/

Chain.Runnable = new Class({

	Extends: Chain,
	
	run: function() {
		var funcs = Array.flatten(arguments);
		funcs.unshift(function() {
			this.$running = true;
			this.callChain();
		});
		funcs.push(function() {
			this.$running = false;
			this.callChain();
		});
		this.chain(funcs);
		this.$running || this.callChain();
			
		return this;
	}
	
});