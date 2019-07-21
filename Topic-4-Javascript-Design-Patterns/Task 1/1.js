/*
  Point 1
*/

class Movie {
  constructor(name,year,duration) {
    this.title = name;
    this.year = year;
    this.duration = duration;
  };

  play() {};
  pause() {};
  resume() {}; 
}

/*
  Point 2
*/

const titanic = new Movie("Titanic",1997,195);
const bttf = new Movie("Back To The Future",1985,115);

/*
  Point 3
*/

class Actor {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  };
}

/*
  Point 4
*/

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
