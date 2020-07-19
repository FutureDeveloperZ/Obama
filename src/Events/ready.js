const Event = require('../Structure/Event');

module.exports = class extends Event {
  
  constructor(client, message, args) {
    super(args, {
      once: true
    });
  }
  
  run() {
    console.log([
      `Logged in as ${this.client.user.tag}`
      `Loaded ${this.client.commands.size} commands`
      `Loaded ${this.client.events.size} events`
      ].join('\n'));
  }
  

};