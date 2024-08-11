const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/kxQ6d5K/City-Scapes7.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello, I am maliya bot I am alive now!❤️",
};
