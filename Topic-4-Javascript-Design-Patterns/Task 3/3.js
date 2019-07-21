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
        callback();
      })
    }
  };

  off(eventName, callback){
    this.events[eventName] = this.events[eventName].filter(eventCallback => callback !== eventCallback);
  };

}

class Actor {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  };
}

class Logger {
  constructor(){};
  log(info){
    console.log(info)
  }
}

class Movie extends EventEmitter {
  constructor(name,year,duration) {
    super();
    this.title = name;
    this.year = year;
    this.duration = duration;
    this.castList = [];
    this.logger = new Logger();
    this.on("play",(x=>{this.logger.log(`the play event has been emitted on ${this.title}`)}));    
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

  addCast(cast){
    if (Array.isArray(cast)){
      this.castList = this.castList.concat(cast);
      return;
    }
    this.castList.push(cast);
  }
}

const titanic = new Movie("Titanic",1997,195);
const bttf = new Movie("Back To The Future",1985,115);

const michael = new Actor("Michael Fox", 58);
const actors = [
  new Actor("Christopher Lloyd",70),
  new Actor("Lea Thompson", 60),
  new Actor("Crispin Glover", 65)
];

bttf.addCast(michael);
bttf.addCast(actors);