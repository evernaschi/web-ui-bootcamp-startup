import EventEmitter from './eventEmitter.js';

export default class Movie extends EventEmitter {
  constructor(name,year,duration) {
    super();
    this.title = name;
    this.year = year;
    this.duration = duration;
    this.castList = [];
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