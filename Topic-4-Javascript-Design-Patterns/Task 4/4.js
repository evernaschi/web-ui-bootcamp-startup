/*
  Point 1
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
    if(event) {
      event.forEach(callback => {
        callback();
      })
    }
  };

  off(eventName, callback) {
    this.events[eventName] = this.events[eventName].filter(eventCallback => callback !== eventCallback);
  };

}

class Actor {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  };
}

class Movie extends EventEmitter {
  constructor(name,year,duration) {
    super();
    this.title = name;
    this.year = year;
    this.duration = duration;
    this.castList = [];
  };

  play() {
    this.emit("play");
  };

  pause() {
    this.emit("pause");    
  };

  resume() {
    this.emit("resume");
  };

  addCast(cast) {
    if (Array.isArray(cast)) {
      this.castList = this.castList.concat(cast);
      return;
    }
    this.castList.push(cast);
  }
}

const titanic = new Movie("Titanic", 1997, 195);
const bttf = new Movie("Back To The Future", 1985, 115);

let social = {
  share(friendName) {
    console.log(`${friendName} shares ${this.title}`);
  },
  like(friendName) {
    console.log(`${friendName} likes ${this.title}`);
  }
}

Object.assign(Movie.prototype, social);

titanic.share("Mike");
bttf.like("Nick");