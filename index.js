const redis = require('ioredis');
const publishMessage = require('./p1');
const subscribeToChannel = require('./s1');

// Subscribe to a channel
subscribeToChannel('example_channel');

// Publish a message to the channel
publishMessage('example_channel', 'Hello, world!');  