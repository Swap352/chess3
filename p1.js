const Redis = require('ioredis');

// Create a new Redis client instance
const publisher = new Redis(); // You can pass connection options here if needed

// Handle Redis client errors
publisher.on('error', (err) => {
    console.error('Redis client error:', err);
});

// Publishes a message to a channel
function publishMessage(channel, message) {
    publisher.publish(channel, message, (err) => {
        if (err) {
            console.error('Error publishing message:', err);
        } else {
            console.log(`Message "${message}" published to channel "${channel}"`);
        }
    });
}

// Export the publishMessage function
module.exports = publishMessage;
