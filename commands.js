const {REST, Routes} = require('discord.js');
const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
    {    
        name: 'no',
        description: 'Replies with YES',
    },
    {    
        name: 'yes',
        description: 'Replies with NO',
    }
];
const rest = new REST({ version: '10' }).setToken("MTEwOTAzNzQzNDM0OTU2ODAzMA.GCVyH3.CaUmAX6ZD7nXX4a2rNVYCMejZnHt8Oq61Mq2jU");
(async () => {
try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands("1109037434349568030"), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }})();