const {Client, GatewayIntentBits, Message} = require("discord.js");
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

client.on("messageCreate",(message)=>{
  if(message.author.bot) return;
  if(message.content.startsWith("Hi")||message.content.startsWith("Hello")||message.content.startsWith("Hey")||message.content.startsWith("hi")||message.content.startsWith("hello")||message.content.startsWith("hey")) {
    message.reply("Hello Buddy!");};

  if(message.content.startsWith("Bye")||message.content.startsWith("bye")) {
    message.reply("Bye Buddy!");};

  if(message.content.startsWith("Good Morning")||message.content.startsWith("Good Afternoon")||message.content.startsWith("Good Evening")||message.content.startsWith("good morning")||message.content.startsWith("good afternoon")||message.content.startsWith("good evening")) {
    message.reply("Good Day Buddy!");};

  if(message.content.startsWith("Good Night")||message.content.startsWith("good night")) {
    message.reply("Good Night Buddy!");};

  if(message.content.startsWith("How are you")||message.content.startsWith("how are you")) {
    message.reply("I am fine, what about you?");};

  if(message.content.startsWith("I am fine")||message.content.startsWith("i am fine")) {
    message.reply("Good to hear that!");};

  if(message.content.startsWith("I am not fine")||message.content.startsWith("i am not fine")) {  
    message.reply("Don't worry everything be all right. Talk to someone");};

  if(message.content.startsWith("Friendly tip")||message.content.startsWith("friendly tip")) {
    const reply = [
    "Be a good listener.",
    "Use open-ended questions.",
    "Find common ground.",
    "Maintain a positive attitude.",
    "Use humor.",
    "Show empathy.",
    "Be respectful.",
    "Share personal experiences.",
    "Be mindful of body language.",
    "Be authentic."];
    message.reply(reply[Math.floor(Math.random() * reply.length)]);};
    
  if(message.content.startsWith("Flirty tip")||message.content.startsWith("flirty tip")) {
    const reply = [
    "Use playful compliments.",
    "Embrace teasing.",
    "Send flirty emojis or GIFs.",
    "Use subtle innuendos or double entendres.",
    "Maintain a confident and charismatic tone.",
    "Engage in witty and clever banter.",
    "Create inside jokes or shared secrets.",
    "Use light physical compliments.",
    "Send flirty and playful texts or messages.",
    "Don't be afraid to show your interest and flirtatious intent."];
    message.reply(reply[Math.floor(Math.random() * reply.length)]);};

    if(message.content.startsWith("Poor Joke")||message.content.startsWith("poor joke") || message.content.startsWith("Bad Joke")||message.content.startsWith("bad joke")) {
    const reply = [
    "What do you call a fake noodle? An Impasta.",
    "Want to hear a joke about paper? Nevermind it's tearable.",
    "I just watched a program about beavers. It was the best dam program I've ever seen.",
    "Why did the coffee file a police report? It got mugged.",
    "How does a penguin build it's house? Igloos it together.",
    "Dad, did you get a haircut? No I got them all cut.",
    "What do you call a Mexican who has lost his car? Carlos.",
    "Dad, can you put my shoes on? No, I don't think they'll fit me.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why don't skeletons ever go trick or treating? Because they have no body to go with.",
    "I'll call you later. Don't call me later, call me Dad."];
    message.reply(reply[Math.floor(Math.random() * reply.length)]);};
});

client.on("interactionCreate",(interaction)=>{
  if(!interaction.isCommand()) return;
  if(interaction.commandName === "ping") {
    interaction.reply("Pong!");};
  if(interaction.commandName === "no") {
    interaction.reply("YES");};
  if(interaction.commandName === "yes") {
    interaction.reply("NO");};
  });
client.login("MTEwOTAzNzQzNDM0OTU2ODAzMA.GCVyH3.CaUmAX6ZD7nXX4a2rNVYCMejZnHt8Oq61Mq2jU");
