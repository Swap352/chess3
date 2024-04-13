const Redis = require('ioredis');

// Create a new Redis client instance
const subscriber = new Redis(); // You can pass connection options here if needed

// Subscribes to a channel
function subscribeToChannel(channel) {
    subscriber.subscribe(channel);
    console.log(`Subscribed to channel "${channel}"`);

    // Listen for messages on the subscribed channel
    subscriber.on('message', (channel, message) => {
        console.log(`Received message "${message}" from channel '${channel}'`);
    });
}

// Export the subscribeToChannel function
module.exports = subscribeToChannel;
