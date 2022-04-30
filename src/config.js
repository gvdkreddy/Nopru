require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "OTUyMjM1MTUyMzU5MTYxODY2.YizEFw.F9rqj4k9FtV8T4f9cbH0dalL2hg",  // your bot token
    prefix: process.env.PREFIX || "!", // bot prefix
    ownerID: process.env.OWNERID || "795294090609557504", //your discord id
    mongourl: process.env.MONGO_URI || "mongodb+srv://user:tnJJuH6IyKy7qn6E@cluster0.iv60t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", // MongoDb URL
    embedColor: process.env.COlOR || "RANDOM", // embed colour
    logs: process.env.LOGS || "928277513053028395", // channel id for guild create and delete logs
    langs:  process.env.LANGS || "en", 

    nodes: [
    {
      host: process.env.NODE_HOST || "lava.link,
      identifer: process.env.NODE_ID || "local",
      port: parseInt(process.env.NODE_PORT || "443"),
      password: process.env.NODE_PASSWORD || "ihatemylyf",
      secure: parseBoolean(process.env.NODE_SECURE || "false"),

    }
  ],

}

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
