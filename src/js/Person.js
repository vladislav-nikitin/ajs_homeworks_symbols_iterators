const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Person {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error(
        'Некорректные данные! name поддерживает только строковый тип данных. Длина name должна быть от 2 до 10 символов',
      );
    }

    if (!types.includes(type)) {
      throw new Error('Укажите корректный тип персонажа');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    if (type === 'Magician' || type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    } else if (type === 'Bowman' || type === 'Undead') {
      this.attack = 25;
      this.defence = 25;
    } else {
      this.attack = 40;
      this.defence = 10;
    }
  }
}
