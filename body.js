const Discord = require('discord.js');
const client = new Discord.Client();
const oneLinerJoke = require('one-liner-joke');

const inn = require('./token.js');

let getMyFavouriteTime = function (datumTed) {

  let fakeTime = datumTed;
  let happyTimeRano = new Date(null, null, null, 4, 20);
  let happyTimeOdpo = new Date(null, null, null, 16, 20);

  let reshours;

  if (fakeTime.getHours() > 4 && fakeTime.getHours() < 16) {
    reshours = (happyTimeOdpo.getHours() - fakeTime.getHours());
  } else if (fakeTime.getHours() >= 16 && fakeTime.getHours() < 24) {
    reshours = (28 - fakeTime.getHours());
  } else if (fakeTime.getHours() >= 0 && fakeTime.getHours() < 4) {
    reshours = (happyTimeRano.getHours() - fakeTime.getHours());
  } else {
    reshours = 0;
  }

  let resmins;

  if (fakeTime.getMinutes() > 20) {
    resmins = ( 80 - fakeTime.getMinutes())
    reshours--;
  } else {
    resmins = ( 20 - fakeTime.getMinutes())
  }

  if ((fakeTime.getHours() === 16 || fakeTime.getHours() === 4) && fakeTime.getMinutes() === 20) {
    return('ITS FO TWENTY BEJBY')
  } else {
    return('Je ' + datumTed.getHours() + ' hodin, a ' + datumTed.getMinutes() + ' minut. Do nejblizsiho blaze it holmes : ' + reshours + ' hodin, ' + resmins + ' minut.');
  }
  
};


client.on('ready', () => {
  console.log('ready!');
  // let channel = client.channels.find('name', 'general');
  // channel.send('Whattap human fags')
});

client.on('message', (message) => {
  // console.log(message.author + ': ' + message.content);
  
  if (message.content === '420') {
    const datumTed = new Date();
    // console.log(message.channel)
    message.reply(getMyFavouriteTime(datumTed));
  }

  if(message.content === '421') {
    const channel = message.channel;
    channel.send('špatnej kód kámo');
  }

  if(message.content === 'bot info?') {
    const channel = message.channel;
    channel.send('in development biatch, no time for silly bots atm.')
  }

  if (message.content === 'somebody tell me a joke') {
    const channel = message.channel;
    let getRandomJoke = oneLinerJoke.getRandomJoke();

    channel.send(message.author + ' ' + getRandomJoke.body);
    // channel.send('Putting a bell around a cow\'s neck to circumvent its stealthiness is just wrong. I say let them hunt.');
  }
});

client.login(inn.token);


    // 
    // channel.send('ejjj');
    // console.log(message.channel);
    // client.sendMessage(message.channel, 'LOL')
    // client.sendMessage('the_four_owls', 'test');

    // let channel = message.channel;
    // channel.send(getMyFavouriteTime(datumTed));