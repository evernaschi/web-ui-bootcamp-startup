import Actor from './actor.js';
import EventEmitter from './eventEmitter.js';
import Logger from './logger.js';
import Movie from './movie.js';

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

console.log(bttf);
console.log(bttf.castList);