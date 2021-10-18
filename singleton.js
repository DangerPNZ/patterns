	/**
 *
 * ПАТТЕРН SINGLETON
 * 
 *	Паттерн Одиночка гарантирует, что класс имеет только один экземпляр, и предоставляет глобальную точку 
    доступа к этому экземпляру.
 *
 */



 var privateMethod = Symbol(); /* Создание приватного метода. */
 class Singleton {
     static #instance = null; // Объявляем статическое приватное свойство. # - значит приватное.
 
     constructor(num) {
         if (Singleton.#instance) { /* проверяем что значение #instance не равно null 
  (т.е. уже что-то присвоено), и прерываем инструкцию, чтобы в соответствии с принципом синглтон 
  сохранить значения присвоенные при первой инициации. */
             return Singleton.#instance;
         }
         this.state = "justtext";
         Singleton.#instance = this;
         this.publicMethod(num); /* автовызов публичного метода в конструкторе. 
         Можно не вызывать в конструкторе, а только вручную */
         this[privateMethod]() // call private
     }
 
     publicMethod(num='default string ') { // Публичный метод с примером дефолтного значения аргумента.
         console.log('publicMethod: ' + num + this.state);
     }
 
     [privateMethod]() { // Приватный метод, т.е. его нельзя вызывать вне класса.
         console.log('privateMethod:' + this.state + this.state);
     }
 }
 
 let first = new Singleton('first');
 Singleton.instance = 0; // Попытка внести изменения в приватное свойство не сработает, оно инкапсулировано.
 let second = new Singleton('second');
 second.privateMethod(); // Попытка вызвать приватный метод не сработает. 
 let third = new Singleton('3');
 
 console.log(first === third);