export class Item {
  constructor(name) {
    this.name = name;
    this.id = Math.random().toString(32).substring(2,9);
    this.checked = false;
  }
}