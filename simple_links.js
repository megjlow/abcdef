//Original version created by savaka2

new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'open link %s', 'openLink', 'http://scratch.mit.edu/'],
			[' ', 'open link %s in new window', 'openLinkNewTab', 'http://scratch.mit.edu/'],
		],
		url: 'https://github.com/savaka2/scratch-extensions/wiki/Link-Opener-extension'
	};
	
	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.openLink = function(url) {
		window.location = url
	};
	
	ext.openLinkNewTab = function(url) {
		window.open(url);
	};
	
	ScratchExtensions.register('Link Opener', descriptor, ext);
})();