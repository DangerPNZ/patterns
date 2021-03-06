/* 
  Паттерн PROTOTYPE

Любой Разработчик JavaScript либо видел ключевое слово prototype, озадаченный прототипным наследованием, 
либо реализовывал прототипы в своем коде. Шаблон прототип основывается на прототипном наследовании 
JavaScript. 
Модель прототипа используется в основном для создания объектов в ситуациях, требующих высокой 
производительности. 
Созданные объекты являются  пустыми клонами исходного объекта.
Один из случаев использования паттерна «прототип» –  проведение обширных операций с базой данных для создания 
объекта, используемого для других частей приложения. Если другой процесс необходим для использования этого 
объекта, то вместо того, чтобы выполнять эти операции с базой данных, целесообразнее клонировать ранее 
созданный объект.
*/

/* Для клонирования объекта должен существовать конструктор для того чтобы создать экземпляр первого объекта. 
Далее, с помощью ключевого слова prototype переменные и методы привязываются к структуре объекта. 
Давайте рассмотрим простой пример:
*/

var TeslaModelS = function() {
  this.numWheels = 4;
  this.manufacturer = "Tesla";
  this.make = "Model S";
}
TeslaModelS.prototype.go = function() {
  //  Вращаются колеса
}
TeslaModelS.prototype.stop = function() {
  // Применяются тормозные колодки
}

/* Конструктор позволяет создавать один объект TeslaModelS. 
При создании нового объекта TeslaModelS, он сохранит состояние, инициализированное в конструкторе. 
Кроме того, поддержание функции go и  stop несложно, так как мы объявили их при помощи прототипов. 
Такой же способ  расширения функции с использованием прототипа описан ниже: */

var TeslaModelS = function() {
  this.numWheels    = 4;
  this.manufacturer = "Tesla";
  this.make = "Model S";
}
TeslaModelS.prototype = {
  go: function() {
      // Вращаются колеса
},
  stop: function() {
      // Применяются тормозные колодки
  }
}


/*
REVEALING PROTOTYPE PATTERN
Так же как и  шаблон модуль шаблон прототип  имеет вариацию Revealing . 
Revealing паттерн обеспечивает инкапсуляцию  с  публичными и приватными членами.
Поскольку мы возвращаем объект, мы добавим объекту-прототипу префикс функции. 
Дополнив наш пример, мы можем выбрать что мы хотим показать в текущем прототипе, 
чтобы сохранить свои уровни доступа:
*/

var TeslaModelS = function() {
  this.numWheels = 4;
  this.manufacturer = "Tesla";
  this.make = "Model S";
}
TeslaModelS.prototype = function() {
  var go = function() {
      // Вращаются колеса
  };
  var stop = function() {
      // Применяются тормозные колодки
  };
  return {
      pressBrakePedal: stop,
      pressGasPedal: go
  }
}();

/*
Обратите внимание, как функции Stop и Go будут защищены от возвращенного объекта в связи с нахождением 
за пределами области видимости возвращаемого объекта. 
Поскольку JavaScript изначально поддерживает прототипное наследование, нет необходимости переписывать 
базовые элементы(или особенности или черты).
*/

