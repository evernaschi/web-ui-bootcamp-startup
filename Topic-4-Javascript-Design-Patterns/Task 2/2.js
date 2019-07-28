class EventEmitter {
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
        callback.call(null);
      })
    }
  };

  off(eventName, callback){
    this.events[eventName] = this.events[eventName].filter(eventCallback => callback !== eventCallback);
  };

}

/*
  Point 1
*/

class Movie extends EventEmitter {
  constructor(name,year,duration) {
    super();
    this.title = name;
    this.year = year;
    this.duration = duration;
  };

  play(){
    this.emit("play");
  };

  pause() {
    this.emit("pause");    
  };

  resume() {
    this.emit("resume");
  };
}

const titanic = new Movie("Titanic",1997,195);
const bttf = new Movie("Back To The Future",1985,115);