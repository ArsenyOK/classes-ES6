# Class in ES6
Classes in JavaScript were introduced in ECMAScript 2015 and are syntactic sugar over JavaScript's existing prototype inheritance mechanism. 
The class syntax does not introduce a new object-oriented model, but provides a simpler and more understandable way to create objects and organize inheritance.

## Class declaration

Way to define a class - **class declaration**

*Example:*

```high-light
class Person {
  constructor(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }

  getName() {
    return this.name;
  }
}
```

With using `this` we get access the values although It works the same like `this` context on function*

## Class Inheritance

*Example:*

```high-light
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
```

* Man extends Person class
* This class has the same methods and values as Person class. And it's opened for creating other methods, values
* super method works like `call()` method that is it for transmission context

## **Static methods**

*Example:*

```high-light
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
// point.distance(4, 1)
```

`point.distance(4, 1)` -  *here we have an issue `Uncaught ReferenceError: point is not defined` because we have static method*

*We should use it If we want to have access:*

```high-light
console.log(Point.distance(point1, point2));
```

## Private values

Symbol `#` before name of value it means our value is private and we don't have direct access to the value

*Example:*

```high-light
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

const film = new Movie("SomeTimes", 2.4);

console.log(film.time, "film.time"); // undefined
console.log(film.name, "film.name"); // SomeTimes
film.getTime(); // 2.4
```




