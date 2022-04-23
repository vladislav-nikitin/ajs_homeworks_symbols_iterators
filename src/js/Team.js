/* eslint-disable no-plusplus */

import Person from "./Person";

export default class Team {
  constructor(...args) {
    this.team = [];
    this.team.push(...args);
  }

  [Symbol.iterator]() {
    let count = 0;
    const { team } = this;
    return {
      next() {
        if (count >= team.length) {
          return { done: true, value: team[count] };
        }
        return { done: false, value: team[count++] };
      },
    };
  }
}

//const character = new Person('Лучник', 'Bowman');
