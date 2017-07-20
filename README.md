<div align="center">
  <br />
  <p>
    <a href="https://discord.gg/wsPz5rq"><img src="http://orig02.deviantart.net/a46c/f/2015/008/a/2/bulbasaur_banner_by_sakuraalexia-d8d2uht.png" width="546" alt="discord.js" /></a>
    </p>
  <p>
  <b>Join our Chat Today!</b>
  </p>
<p>
<a href="https://discord.gg/wsPz5rq"><img src="http://i.imgur.com/Nz5u2f2.jpg" alt="discord.js" /></a>
  </p>
</div>

# About

What is Bulba?  
**Bulba is a Powerful Discord Bot coded in the [Discord.js](https://discord.js.org) Library** 
**This bot has many features to show! But for now, we're not doing many.**  


# Installation

## Windows
**The installation for Windows Is Available!**  
**Requirements:** 
**NodeJS 8+** 
**Windows 7 and Above** 
**Now, install the file and open it, now that you've opened it. There's two .BAT Files. Install the dependencies by clicking the `installdep.bat` file and once you've done that, run it with `bulbago.bat`** 

***WARNING!***  
**If your CMD Auto Closes, it means node is not install and the dependencies are missing!**

## Linux
**Finally! We've Fixed it** 
**First install git on your OS for Linux**  
**Then type on your Terminal `git clone git@github.com:bouleytator/bulba-discordbot.git` if it doesn't work, use `git clone https://github.com/bouleytator/bulba-discordbot.git` so it will work.** 
**Now do `npm install discord.js --save` on the folder where you cloned the file, then once you've done that do `node discord-bot`**


## Version
**2.0**


# Making your Own Command

**It's really ezpz**  
**If you want, copy these.**  
```js 
client.on('message', bulba => {
  if (bulba.content.startsWith(config.prefix + 'hello')) {
      bulba.channel.send(`Hi ${bulba.author.tag}!`)
   }
 });
``` 

**It's really easy!**
