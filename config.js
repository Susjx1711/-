const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ixQlgJJI#mTv7sQkGVboSZuqNj9kcaKlupi-8dQMvRgxZPszWjo8",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Susjx1711/-/blob/main/images/_e95f73a0-cffe-4768-8d55-241dab8570f2.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 DAMMA-MD Is Alive Now😍*",
BOT_OWNER: '94762136979',  // Replace with the owner's phone number



};
