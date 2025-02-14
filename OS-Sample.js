// Description: OS module sample
const os = require('os');

console.log(`Platform: ${os.platform()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`Uptime: ${os.uptime()} seconds`);
console.log(`OS Version: ${os.version()}`);
console.log(`Free Memory: ${os.freemem()} bytes`);
console.log(`Total Memory: ${os.totalmem()} bytes`);
console.log(`CPU Count: ${os.cpus().length}`);
console.log(`CPU Model: ${os.cpus()[0].model}`);
console.log(`Home Directory: ${os.homedir()}`);
console.log(`Hostname: ${os.hostname()}`);
console.log(`Architecture: ${os.arch()}`);

// Extract IPv4 addresses from network interfaces
const networkInfo = os.networkInterfaces();
for (const [key, value] of Object.entries(networkInfo)) {
    console.log(`Network Interface: ${key}`);
    value.forEach(detail => {
        if (detail.family === 'IPv4') {
            console.log(`  IPv4 Address: ${detail.address}`);
        }
    });
}

console.log(`Directory Name: ${__dirname}`);
console.log(`File Name: ${__filename}`);
