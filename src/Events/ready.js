const Event = require('../Structure/Event');

module.exports = class extends Event {
  
  constructor(...args) {
    super(...args, {
      once: true
    });
  }
  
  run(message, client) {
    console.log([
      `Logged in as ${this.client.user.tag}`
      `Loaded ${this.client.commands.size} commands`
      `Loaded ${this.client.events.size} events`
      ].join('\n'));
  }
  

};