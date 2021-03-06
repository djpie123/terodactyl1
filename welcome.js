const Canvas = require("canvas");
const Discord = require("discord.js");
const { registerFont, createCanvas } = require('canvas')
registerFont('./TigeriousItalic-9YyJn.otf', { family: 'Roboto' })
registerFont('./Debrosee-ALPnL.ttf', { family: 'deb' })
registerFont('./BieksaFreeTrial-RpdWE.otf', { family: 'bi' })

module.exports = function (client) {

    const description = {
        name: "WelcomeImages",
        filename: "welcome.js",
        version: "4.8"
    }
    //log that the module is loaded
    console.log(` :: ⬜️ Module: ${description.name} | Loaded version ${description.version} from ("${description.filename}")`)
    //fires every time when someone joins the server
    client.on("guildMemberAdd", async member => {
      const db = client.db
  let c = db.fetch(`${member.guild.id}`)
	
	if(c == null) c = "./welcome.png";
	
	if(!c) return;
const wc = db.get(`wc_${member.guild.id}`)
if(wc == null) ;
      if(!member.guild) return;
      //create a new Canvas
      const canvas = Canvas.createCanvas(1772, 633);
      //make it "2D"
      const ctx = canvas.getContext('2d');
      //set the Background to the welcome.png
      const background = await Canvas.loadImage(c);
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#000000';
      ctx.strokeRect(0, 0, canvas.width, canvas.height);
      //set the first text string 
      var textString3 = `${member.user.username}`;
      //if the text is too big then smaller the text
      if (textString3.length >= 14) {
        ctx.font = 'bold 100px "Roboto"';
        ctx.fillStyle = '#f2f2f2';
        ctx.fillText(textString3, 720, canvas.height / 2 + 20);
      }
      //else dont do it
      else {
        ctx.font = 'bold 150px "Roboto"';
        ctx.fillStyle = '#000000';
        ctx.fillText(textString3, 720, canvas.height / 2 + 20);
      }
      //define the Discriminator Tag
      var textString2 = `#${member.user.discriminator}`;
      ctx.font = 'bold 40px "Roboto"';
      ctx.fillStyle = '#000000';
      ctx.fillText(textString2, 730, canvas.height / 2 + 58);
      //define the Member count
      var textString4 = `YOU ARE THE ${member.guild.memberCount}th MEMBER`;
      ctx.font = 'bold 60px "deb"';
      ctx.fillStyle = '#000000';
      ctx.fillText(textString4, 750, canvas.height / 2 + 125);
      //get the Guild Name
      var textString4 = `${member.guild.name}`;
      ctx.font = 'bold 60px "bi"';
      ctx.fillStyle = '#000000';
      ctx.fillText(textString4, 700, canvas.height / 2 - 150);
      //create a circular "mask"
      ctx.beginPath();
      ctx.arc(315, canvas.height / 2, 250, 0, Math.PI * 2, true);//position of img
      ctx.closePath();
      ctx.clip();
      //define the user avatar
      const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
      //draw the avatar
      ctx.drawImage(avatar, 65, canvas.height / 2 - 250, 500, 500);
      //get it as a discord attachment
      const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
      //define the welcome embed
      const welcomeembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Welcome", member.guild.iconURL({ dynamic: true }))
        .setDescription(`**Welcome to ${member.guild.name}!**
      Hi!, read and accept the rules!`)
if(isNaN(wc)){
    if(wc === ("dm" || "Dm" || "DM")){
    member.send(welcomeembed)
    member.send(attachment)
    }
if(wc === ("off" || "Off" || "OFF")){
console.log("welcome is off")
}
}else {
member.guild.channels.cache.get(wc).send(`<@${member.id}>`)
member.guild.channels.cache.get(wc).send(welcomeembed)
member.guild.channels.cache.get(wc).send(attachment)
}
     })

 }