import 'code-prettify';

declare const PR: {
	prettyPrint(): void;
};

addEventListener(
	'load',
	function() {
		PR.prettyPrint();
	},
	false
);
