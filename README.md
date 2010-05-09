Chain.Runnable
==============

Chain.Runnable adds a "run" method to Chain. This method behaves like [Chain::chain](http://mootools.net/docs/core/Class/Class.Extras#Chain) except that it also calls [callChain](http://mootools.net/docs/core/Class/Class.Extras#Chain:callChain) if and only if the chain is not already running. This can be used in complex cases to maintain a robust chain.

For example, a page may have many clickable components, where a click on each is designed to execute a chain that should *not* be executed concurrently with other actions.

![Screenshot](http://github.com/michalc/Chain.Runnable/raw/master/Images/Chain.Runnable.png)

How to use
----------

Use just as [Chain::chain](http://mootools.net/docs/core/Class/Class.Extras#Chain), but no need to subsequently call [callChain](http://mootools.net/docs/core/Class/Class.Extras#Chain:callChain) to get the chain going.

Often this will be in response to the user clicking on an element

	var myChain = new Chain.Runnable();
	 
	someElement.addEvent('click', function() {  
	  myChain.run([
	    function() {
	      // Do something, that when finished calls myChain.callChain()
	    },
	    function() {
	      // Do something else, that when finished calls myChain.callChain()
	    }
	  ]);
	});


Why to use
----------

This class takes care of "remembering" if the chain is running, and so is a quick & easy way of keeping chains that run in response to user action robust. 
