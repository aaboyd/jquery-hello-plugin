### A hello world jQuery plugin that provides structure

There are many different approaches to writing jQuery plugins, but this is one that I found useful.
It should provide a little insight of how to structure a jQuery plugin.

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="../src/jq.hello.js"></script>
	```

3. Call the plugin:

	```javascript
	$("#element").hello({
		name: '{Your Name}'
	});
	```

## Structure

Basic project structure.  Nothing crazy here

```
├── demo/
│   └── index.html
├── src/
│   └── jq.hello.js
├── README.md
```