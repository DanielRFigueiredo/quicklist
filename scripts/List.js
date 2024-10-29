import { Item } from './Item.js';

class List {
  constructor() {
    this.items = [
      { name: 'Comprar um livro 1', id: '1' },
      { name: 'Comprar um livro 2', id: '5' }];
    this.active = false;
  }

  add(item) {
    const newItem = new Item(item);
    this.items = [...this.items, newItem];
    this.attDisplay();

  }

  remove(idItem) {
    this.active = true;
    this.fadeOut(idItem);
    setTimeout(() => {
      const newItems = this.items.filter(item => item.id !== idItem);
      this.items = newItems;
      this.attDisplay();
      this.alert.classList.add('flex');
      this.active = false;
    }, 250)
  }



}


export class ListView extends List {
  constructor() {
    super();
    this.ul = document.querySelector('ul[role="list"]');
    this.alert = document.querySelector('.alert');
    this.attDisplay();
    this.addItem();
    this.removeAlert();
  }

  attDisplay() {
    this.ul.innerHTML = '';
    this.items.forEach(item => {
      const newLi = document.createElement('li');
      newLi.id = item.id;
      newLi.innerHTML = `
       <span>
          <input type="checkbox">
          <span class="check">
            <img src="./assets/check.svg" alt="check">
          </span>
        </span>
        <span class="flex-1">${item.name}</span>
        <button class="remove">
          <img src="./assets/bin.svg" alt="remover item">
        </button>
      `
      this.ul.append(newLi);
    })
    this.removeItem()
  }

  addItem() {
    const button = document.querySelector('.input-wrapper button');
    button.addEventListener('click', () => {
      const { value } = document.querySelector('.input-wrapper input');
      this.add(value);

    })

  }

  removeItem() {
    const buttonRemove = document.querySelectorAll('.remove')
    buttonRemove.forEach(button => {
      button.addEventListener('click', (e) => {
        if (this.active) return;
        this.remove(button.parentElement.id)
      })
    })
  }

  removeAlert() {
    const button = document.querySelector('.alert button');
    button.addEventListener('click', () => {
      this.alert.classList.remove('flex');
    })
  }

  fadeOut(idItem) {
    const item = document.getElementById(idItem);
    item.classList.add('fade-out');
  }


}




