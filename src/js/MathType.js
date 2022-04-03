export default class MathType {
  constructor(name, type, health = 100, level = 1) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.stoned = false;
    
  }

  set stoned(value) {
    this._stoned = value;
  }
  
  get stoned() {
    return this._stoned;
  }
 
  set attack(value) {
    this._attack = value;
  }

  get attack() {
    let damageLev;
    damageLev = this._attack - (this._attack * (this.distance - 1) * 0.1);
    if (this.stoned) {
      damageLev -= Math.log2(this.distance) * 5;
    }
    return damageLev;
  }
}