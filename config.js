const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_09_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgODMsXG4gICAgICAgIDU4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzksXG4gICAgICAgIDUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2MSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICA2LFxuICAgICAgICA0MCxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NyxcbiAgICAgICAgMixcbiAgICAgICAgNjEsXG4gICAgICAgIDEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExLFxuICAgICAgICAxMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk5LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDM4LFxuICAgICAgICAyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDU5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc4LFxuICAgICAgICA0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQzLFxuICAgICAgICA5MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxODksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUyLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI4LFxuICAgICAgICAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDk1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDg2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQzLFxuICAgICAgICA0MixcbiAgICAgICAgMTE3LFxuICAgICAgICA3NixcbiAgICAgICAgMTA2LFxuICAgICAgICA3MSxcbiAgICAgICAgODAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiKy9tMWlwS1F6eGVQdDdaTVRnRzdQNnlnSTM1SDEzbWFDTlY2Mldlbzd3VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5Njg3ODc2ODgxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEE2QjQ0MkQ4NDBERDNCQ0U4MzZBOTUzRDUzNjk1Q0JcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTkyMTg5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTY4Nzg3Njg4MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ5NEM3RDlDRTZGQjNGOUU5Q0RDRDRGOEU1MzA1RThFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDE5MjE5MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuekhfek83ZlRES3BUNHFkTDBaMllnXCIsXG4gIFwicGhvbmVJZFwiOiBcImEyMTUwOWM1LTY1YWEtNDUzMy1iMWU1LWFjNTc1MjBkZjI5OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICAxMjcsXG4gICAgICA0OCxcbiAgICAgIDE4MCxcbiAgICAgIDE3MyxcbiAgICAgIDAsXG4gICAgICAyNDgsXG4gICAgICAxMDMsXG4gICAgICAyMzMsXG4gICAgICAxNTAsXG4gICAgICA1OSxcbiAgICAgIDY5LFxuICAgICAgMTAxLFxuICAgICAgMjIyLFxuICAgICAgMTYsXG4gICAgICAyOSxcbiAgICAgIDExOCxcbiAgICAgIDI1NCxcbiAgICAgIDE5NCxcbiAgICAgIDUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDczLFxuICAgICAgNDcsXG4gICAgICAxODEsXG4gICAgICAxODgsXG4gICAgICAxMzgsXG4gICAgICAxNTEsXG4gICAgICAxMzAsXG4gICAgICAyNDksXG4gICAgICAxMzEsXG4gICAgICAxMzgsXG4gICAgICA3MyxcbiAgICAgIDIzMixcbiAgICAgIDgxLFxuICAgICAgMTU2LFxuICAgICAgMTQ3LFxuICAgICAgMTk5LFxuICAgICAgMTk2LFxuICAgICAgNzksXG4gICAgICAyMyxcbiAgICAgIDkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpYNVpZWTdaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5Njg3ODc2ODgxMjo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDI2NDQ2MzAzODQ3MTI6N0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJLSU5HIE9GIEhBTkNLSU5HIPCfkb/wn5G/8J+RiFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0txYTViMERFTFdab0xRR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibUZLZ2lRK0lKd3VJcUx2SFNPbDhTTnI3bzZxTHR4YjNlMG0ybjhPSDQydz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkcjBvM0xOczNUVlp5ZEVYSWdtSnZDTWNnZmQxM1hlTnhpUHoxSXNjTjJoWWlTVEg3NVplQlFmRW9QTE9Ea1E4ZnQ1YlpMbC80TnJHN2hDcDhSanJEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1NUVzbkpKL1JPZllWQTc2d3ZzVmRHb1pQTmJNcTNaZVQ5SU9aSEE4eHhMeS9pZHVKa1hHT3ZQSUkxZ0RTRjJUTmdwRERKdlRzSFBYd2RFbDV4dWJBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5Njg3ODc2ODgxMjo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE5MjE4NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUx1M1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHUzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiV0s1ZlRWaTFHR3lIUVhpSm0xenJqaFd4bmNQWEI2NVFoUXU3Sm9HTjlLUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MzQ4OTA3OTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
