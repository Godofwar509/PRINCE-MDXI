
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA61Ua4+iSBT9L/VVM/IUNOlkAREEURHfm/1QQoGlvKwqsHHif99gd89Mdmdne5PlU1GPe8+595z7FeQFpshFDRh+BSXBNWSoXbKmRGAI9CqOEQFdEEEGwRD4Zn1QnPVZmeV6drdfU8vuN9V5GQZF1MuP/d44FzQ6jfG2eAGPLiirY4rDXwScGY1mLLxZZiwTwx3lzoazdd7Z1bhX+pOp4RzU3pyZ6v7CvYBHGxFigvPELE8oQwSmLmoWEJPPwU9G+gSL89naN30MjTB37vONinlltT76yXZPqHO6LN1xsaGfg38YR3UwxTEnUpJO8/K4ccLbaUaY5GTS8m6FzUmyr8vsVdDe4FOc5CiaRChnmDWfrjsc1bv+stLMC+p5oTDlrLvbV1N/5E+Xgb6B7hYGym097WT7zwHfRit4Oy+YH08mnSA10lltNDdFVrw65Zi2aO4ZyTxFvjTcj8AX5EMrl/9S98BVtblT8Unj7uqxB4WJfrnMndV8itzx61SZbbPz/pjAePxJ+Fe3ExTmonSSq7uSuJ1OPQOtfNShltvRsm0mG8S0DlwVeN/hQ1aRX6Ec7esxmy4v9xDZwYUUyFfVeZ8eY10qZBjaXE/SlvceL4sNwUztJA7asirwr/zswDYKUePZQhzdVvkFRl5vDOeyl+Dk5cnogppJBIb8owsISjBlBDJc5O2ewA+6AEZ1gEKC2LO8YGWXxc5SVrJjYU0/qMzv6a6AubPMZcdcHwROw92j6atr0xfQBSUpQkQpimxMWUEaD1EKE0TB8Pdnp1rSBGUFQw6OwBDI3EAU+3xf5bjf6JfbCTIKy/JLjhjogpgUmYfAkJEKdcHzvspJsqLLvKQqoqiOdUU0JE2WpbE5GOumoLUMs7ecK5whymBWgiGvyKIo8QO+/+j+LzA0VdFUTVE0fdRX+pzJ67w44jVRUVRzIAvCv8BQH390QY5e2ZuK29qLfBfEmFC2zqsyLWD0IfGPQxiGRZWzoMlDo10gAoY/bCPGcJ7QlliVQxKecI2MlgcYxjCl6Fu7EUHRB5f3EWYU0VOFlj2ebbwRaLG3gf5ammFf+Ht1ctheBh5OUU4vpwZ0Qfp8yHOSIA4kReEGgqwI7eP24PENc5siQgzilIIhMDyX1HPVNr1O76T6lqVNEs1INPCd44dz3pS54zXrDOeVt1X6sPH3khXt6uU0GCwXs4F9Wbq9OrzOOaXg1ZefBAFDYDrm3ZzNN7EhbdK4Fj3WaA4Mr8UliwaH3eq2Uz05gffbEs0yOOXPE2s6amiqOZKZHnG0K6Br26XtXB0qnTdlxBFx1NqsCyJU4xD9mGxbO7vBvjRv6dSgrNdpknWC+bFlpYOFdV4JodXPhHC9PWihuJpb+z28x3a9MOqZuVN8ZJWvk6sA7yrpqNlmcT7uGb5h7c3Tz5mSvs9y/O42/PyNMXqOxvc2/Vs333C3muMe3R9CvM/af5hX+mbg64VwJudx1cnoxZrr+UbhAq5er+7xUjaDWhHdM5v3ZzF4tOIvU8jigmRgCGh2hKALSFG1Cp7kcfGLTIY2mZjvkyyFlGnfXfEzo/FvtxakKG1IT2AIBEvSsqqVeKOVZcAg+zAZ0NrPlCh4/AlF1XnDjQgAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "237677224245", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
