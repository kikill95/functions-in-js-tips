mainFnc.bam = function () {
	return 'bam';
};


function mainFnc () {
	this.foo = function () {
		return 'foo';
	};
	console.log(this.foo());//foo
	console.log(this.bar);//undefined
	return 'mainFnc';
}


mainFnc.bar = function () {
	return 'bar';
};

mainFnc.bar.baz = function () {
	console.log(mainFnc.foo);//undefined
	console.log(mainFnc.bar());//bar
	return 'baz';
};



console.log(mainFnc());//foo, undefined, mainFnc
console.log(mainFnc.bam());//bam
console.log(mainFnc.foo);//undefined
console.log(mainFnc.bar());//bar
console.log(mainFnc.bar.baz());//undefined, bar, baz
console.log(typeof mainFnc);//function