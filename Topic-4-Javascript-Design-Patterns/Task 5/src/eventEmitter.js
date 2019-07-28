export default class EventEmitter {
  constructor() {
    this.events = [];    
  };

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
  };

  emit(eventName) {
    const event = this.events[eventName];
    if(event){
      event.forEach(callback => {
        callback();
      })
    }
  };

  off(eventName, callback){
    this.events[eventName] = this.events[eventName].filter(eventCallback => callback !== eventCallback);
  };

}