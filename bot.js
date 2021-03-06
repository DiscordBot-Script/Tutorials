const { token } = require('./config.json')
const Dlang = require('discordbot-script')
const bot = new Dlang({
    token: token,
    prefix: ['?', "!", "$getServerVar[prefix]", "<@767924177444667392>", "<@!767924177444667392>"]
})

const fs = require('fs');
const folders = fs.readdirSync("./commands/")

for (const files of folders) {
    const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

    for (const commands of folder) {
        const command = require(`./commands/${files}/${commands}`)
        bot.Command(command);
    }
}
bot.MessageEvent()

bot.Variables({
    prefix: ">"
})
bot.JoinedCommand({
  name: "836981346093367367",
  code: `$title[User Joined!]
  $description[Welcome $username[$authorID]#$discriminator[$authorID] to the server! Please read the rules.]
  $footer[Hello]
  $color[FF0000]`
})
bot.onJoined()
