/* Паттерн FABRIC (Фабрика)
Основная идея в том, что мы создаем фабрику, которая может создавать нам обьекты.
И сразу же возникает вопрос, а почему мы не можем просто использовать оператор new, 
чтобы создавать обьекты? Есть ситуации, когда мы хотим скрыть снаружи реализацию создания обьекта 
и в этом случае поможет паттерн Factory.
Давайте разберем на простом примере. 
Давайте создадим с вами фабрику Employee у которой будет метод create.*/

class Employee {
  create (type) {
    let employee
    if (type === 'fulltime') {
      employee = new FullTime()
    } else if (type === 'parttime') {
      employee = new PartTime()
    } else if (type === 'temporary') {
      employee = new Temporary()
    } else if (type === 'contractor') {
      employee = new Contractor()
    }
    employee.type = type
    employee.say = function () {
      console.log(`${this.type}: rate ${this.rate}/hour`)
    }
  }
}
/*В методе create мы создаем по типу разные экземпляры класса, 
таким образом скрывая от конечного пользователя экземпляры какого класса мы используем.
На выходе мы получаем только обьект с нужными полями и методом say.
Теперь нам нужно создать недостающие классы.*/

class Fulltime {
  constructor () {
    this.rate = '$12'
  }
}

class PartTime {
  constructor () {
    this.rate = '$11'
  }
}

class Temporary {
  constructor () {
    this.rate = '$10'
  }
}

class Contractor {
  constructor () {
    this.rate = '$15'
  }
}
/*Эти классы имеют в конструкторе только рейт в час.
Теперь давайте вызовем нашу фабрику */

const factory = new Employee()
fulltime = factory.create('fulltime')
parttime = factory.create('parttime')
temporary = factory.create('temporary')
contractor = factory.create('contractor')

fulltime.say()
parttime.say()
temporary.say()
contractor.say()

/* Фабрику стоит использовать, если в конструкторе у вас очень высокая сложность создания обьекта, 
чаще всего, когда он может создаваться из нескольких источников. 
Также она отлично подходит, когда вам нужно создавать много обьектов с одинаковыми полями. 
Но также, она может создать дополнительную сложность в приложении там, где ее можно было бы избежать. */