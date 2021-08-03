const express = require('express');
const prefix = "l!"
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

const discord = require("discord.js");

const client = new discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']});

client.on("ready", () => {
  console.log("bot on yay");
  client.user.setPresence({
    status:'idle',
    activity: {
      type: 'WATCHING',
      name: 'Po- YouTube?'
    }
  })
});

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

client.on("message", message => {
  //First segment, automod. #REMOVED
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;

  //Second segment, Games. Fourth and Third being done first.

  //Third segment, Economy. Being done after the Fourth segment.


  //Fourth segment, regular moderation commands.
  //Ban, Mute, Unmute, Kick, Noob.

  if(!message.content.startsWith(prefix)) return;
  let args = message.content.substring(prefix.length).split(" ");
  let command = args.shift();
  let member = message.member;
  if(!member.roles.cache.get("867081554828591114")) return

  if(command == "ban") {
    let persontoban = message.mentions.users.first();
    if(persontoban == null) {
      return message.channel.send("Incorrect input.");
    };
    let idofpersontoban = persontoban.id;
    let memberr = message.guild.members.cache.get(idofpersontoban);
    if(memberr == null) {
      return message.channel.send("No user found. Did they leave?");
    };
    memberr.ban({reason: `Banned by ${message.author.tag}.`})
    .then(memberrr => {
      return message.channel.send(`<:check:867094257700700202> ${memberr} has been banished.`);
    })
    .catch(err => {
      return message.channel.send("OOPS! An error occured. Send this to Vaneer: " + err);
    });
  };

  if(command == "mute") {
    let persontomute = message.mentions.users.first();
    if(persontomute == null) {
      return message.channel.send("Incorrect input.");
    };
    let idofpersontomute = persontomute.id;
    let memberr = message.guild.members.cache.get(idofpersontomute);
    if(memberr == null) {
      return message.channel.send("No user found. Did they leave?");
    };
    memberr.roles.add("721157481153298433")
    .then(memberrr => {
      return message.channel.send("<:check:867094257700700202> ${memberr} has been muted.")
      .catch(err => {
        return message.channel.send("OOPS! An error occured. Send this to Vaneer: " + err);
      });
    });
  }

  if(command == "unmute") {
    let persontomute = message.mentions.users.first();
    if(persontomute == null) {
      return message.channel.send("Incorrect input.");
    };
    let idofpersontomute = persontomute.id;
    let memberr = message.guild.members.cache.get(idofpersontomute);
    if(memberr == null) {
      return message.channel.send("No user found. Did they leave?");
    };
    memberr.roles.remove("721157481153298433")
    .then(memberrr => {
      return message.channel.send("<:check:867094257700700202> ${memberr} has been unmuted.")
      .catch(err => {
        return message.channel.send("OOPS! An error occured. Send this to Vaneer: " + err);
      });
    });
  };

  if(command == "kick") {
    let persontoban = message.mentions.users.first();
    if(persontoban == null) {
      return message.channel.send("Incorrect input.");
    };
    let idofpersontoban = persontoban.id;
    let memberr = message.guild.members.cache.get(idofpersontoban);
    if(memberr == null) {
      return message.channel.send("No user found. Did they leave?");
    };
    memberr.kick({reason: `Kicked by ${message.author.tag}.`})
    .then(memberrr => {
      return message.channel.send(`<:check:867094257700700202> ${memberr} has been kicked.`);
    })
    .catch(err => {
      return message.channel.send("OOPS! An error occured. Send this to Vaneer: " + err);
    });
  };

  if(command == "noob") {
    let persontoban = message.mentions.users.first();
    if(persontoban == null) {
      return message.channel.send("Incorrect input.");
    };
    let idofpersontoban = persontoban.id;
    let memberr = message.guild.members.cache.get(idofpersontoban);
    if(memberr == null) {
      return message.channel.send("No user found. Did they leave?");
    };
    
    return message.channel.send(`${persontoban}, you have been.. ***__noobed.__***`);
  }
});

client.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (user.bot) return;
  if (!reaction.message.guild) return;
  let message = reaction.message;

  if(reaction.message.channel.id == '721067357149331466') {
    if(reaction.message.id == "867111380142260244") {
      if(reaction.emoji.name == "👨") {
        //she/her
        //he/him
        //they/them
        await reaction.message.guild.members.cache.get(user.id).roles.add('852327178477895781');
        return
      }
      if(reaction.emoji.name == "👩") {
        await reaction.message.guild.members.cache.get(user.id).roles.add('852327264590102568');
        return
      }
      if(reaction.emoji.name == "😶") {
        await reaction.message.guild.members.cache.get(user.id).roles.add('852327315752878090');
        return
      }
    };

    if(reaction.message.id == '867111960821366814') {
      if(reaction.emoji.name == '👍') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('721767259747516477');
      }

      if(reaction.emoji.name == '⛔') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('721767359169429585');
      }
    };

    if(reaction.message.id == '867112309751021598') {
      if(reaction.emoji.name == '🖥️') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('755429953176076408');
      }
    };

    if(reaction.message.id == '867112657239670815') {
      if(reaction.emoji.name == '👍') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('721091996709814354');
      };

      if(reaction.emoji.name == '👎') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('721092090359971862');
      };

      if(reaction.emoji.name == '😶') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('721092180747354132');
      }
    };

    if(reaction.message.id == '867113422495809576') {
      if(reaction.emoji.name == '🐧') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('721082728509866057');
      };

      if(reaction.emoji.name == '🐢') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('721082620909322290');
      };

      if(reaction.emoji.name == '😕') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('721082143710773250');
      };

      if(reaction.emoji.name == '🔴') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('721081943533420675');
      }
    };

    if(reaction.message.id == '867114394843873300') {
      if(reaction.emoji.name == '🚌') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('721077605398478908');
      };

      if(reaction.emoji.name == '🚋') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('721077914128613407');
      };

      if(reaction.emoji.name == '🍁') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('721078004129857677');
      };

      if(reaction.emoji.name == '🍀') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('721078147042508904');
      };

      if(reaction.emoji.name == '❓') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('721078244736106497');
      }
    };

    if(reaction.message.id == '867145223958954034') {
      if(reaction.emoji.name == '🔵') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('721074767532261387');
      }

      if(reaction.emoji.name == '🟢') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('721074844346876057');
      };

      if(reaction.emoji.name == '🔴') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('721075140112285767');
      };

      if(reaction.emoji.name == '🟡') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('721074929206034493');
      }
    }

    if(reaction.message.id == '867145593901154346') {
      if(reaction.emoji.name == '➕') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('721072613522145341');
      }

      if(reaction.emoji.name == '➖') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('721072761686196287');
      }
    };

    if(reaction.message.id == '867164641595883540') {
      if(reaction.emoji.name == '🔵') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('721070924799148032');
      }

      if(reaction.emoji.name == '🟣') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('721070831379415073');
      }

      if(reaction.emoji.name == '❕') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('721071039009783950');
      }
    }
  };
});

client.on('messageReactionRemove', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (user.bot) return;
  if (!reaction.message.guild) return;
  let message = reaction.message;

  if(reaction.message.channel.id == '721067357149331466') {
    if(reaction.message.id == "867111380142260244") {
      if(reaction.emoji.name == "👨") {
        //she/her
        //he/him
        //they/them
        await reaction.message.guild.members.cache.get(user.id).roles.remove('852327178477895781');
        return
      }
      if(reaction.emoji.name == "👩") {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('852327264590102568');
        return
      }
      if(reaction.emoji.name == "😶") {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('852327315752878090');
        return
      }
    };

    if(reaction.message.id == '867111960821366814') {
      if(reaction.emoji.name == '👍') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('721767259747516477');
      }

      if(reaction.emoji.name == '⛔') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('721767359169429585');
      }
    }

    if(reaction.message.id == '867112309751021598') {
      if(reaction.emoji.name == '🖥️') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('755429953176076408');
      }
    }

    if(reaction.message.id == '867112657239670815') {
      if(reaction.emoji.name == '👍') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('721091996709814354');
      };

      if(reaction.emoji.name == '👎') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('721092090359971862');
      };

      if(reaction.emoji.name == '😶') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('721092180747354132');
      }
    };

    if(reaction.message.id == '867113422495809576') {
      if(reaction.emoji.name == '🐧') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('721082728509866057');
      }

      if(reaction.emoji.name == '🐢') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('721082620909322290');
      };

      if(reaction.emoji.name == '😕') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('721082143710773250');
      };

      if(reaction.emoji.name == '🔴') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('721081943533420675');
      }
    };

    if(reaction.message.id == '867114394843873300') {
      if(reaction.emoji.name == '🚌') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('721077605398478908');
      };

      if(reaction.emoji.name == '🚋') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('721077914128613407');
      };

      if(reaction.emoji.name == '🍁') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('721078004129857677');
      };

      if(reaction.emoji.name == '🍀') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('721078147042508904');
      };

      if(reaction.emoji.name == '❓') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('721078244736106497');
      }
    }

    if(reaction.message.id == '867145223958954034') {
      if(reaction.emoji.name == '🔵') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('721074767532261387');
      }

      if(reaction.emoji.name == '🟢') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('721074844346876057');
      };

      if(reaction.emoji.name == '🔴') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('721075140112285767');
      };

      if(reaction.emoji.name == '🟡') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('721074929206034493');
      }
    };

    if(reaction.message.id == '867145593901154346') {
      if(reaction.emoji.name == '➕') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('721072613522145341');
      }

      if(reaction.emoji.name == '➖') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('721072761686196287');
      }
    }

    if(reaction.message.id == '867164641595883540') {
      if(reaction.emoji.name == '🔵') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('721070924799148032');
      }

      if(reaction.emoji.name == '🟣') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('721070831379415073');
      }

      if(reaction.emoji.name == '❕') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('721071039009783950');
      }
    }
  };
});

client.login(process.env.token)