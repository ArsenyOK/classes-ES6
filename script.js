// Creating Classes Person and Man

class Person {
  constructor(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }

  // With using `this` we get access the values although It works the same like `this` context on function
  getName() {
    return this.name;
  }
}

// Man extends Person class
// this class has the same methods and values as Person class. And it's opened for creating other methods, values
// super method works like call() method that is it for transmission context

class Man extends Person {
  constructor(name, age, hobby, job) {
    super(name, age, hobby);

    this.job = job;
  }
}

const p = new Person("Arseny", 22, "Football");
const m = new Man("John", 22, "Games", "Programmer");
console.log(m.getName());
console.log(m);

class Point {
  // x = 5; // initial value (It'll put If your constructor is empty)
  // y = 40; // initial value

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const point1 = new Point(4, 10);

console.log(point1.x, "Point.x");

console.log(point1, "point1");
const point2 = new Point(2, 1);

// point.distance(4, 1); // here we have an issue `Uncaught ReferenceError: point is not defined` because we have static method

console.log(Point.distance(point1, point2));

// Class Movie

class Movie {
  name = "It";
  #time = "0";

  constructor(name, time) {
    this.#time = time;
    this.name = name;
  }

  getTime() {
    console.log(this.#time, "this.#time Class");
  }
}

// symbol # before name of value it means our value is private and we don't have direct access to the value

const film = new Movie("SomeTimes", 2.4);

console.log(film.time, "film.time"); // undefined
console.log(film.name, "film.name"); // SomeTimes
film.getTime(); // 2.4
