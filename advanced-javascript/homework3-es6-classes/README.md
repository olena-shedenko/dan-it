## Теоретический вопрос
Обьясните своими словами, как вы понимаете, как работает прототипное наследование в Javascript

## Ответ на вопрос
Прототипное наследование - это внутренняя ссылка одного объекта на другой объект, который является прототипом этого объекта. У объекта-прототипа также есть ссылка на свой собственный прототип и так будет до тех пор, пока цепочка не завершится объектом, у которого прототип равен null. При попытке получить доступ к какому-либо свойству объекта, свойство вначале ищется в самом объекте, затем в прототипах объекта, в прототипах прототипа и т.д., пока не будет найдено нужное свойство или пока не будет достигнут конец цепочки прототипов.



## Задание
1. Реализовать класс Employee, в котором будут следующие свойства - name (имя), age (возраст), salary (зарплата). Сделайте так, чтобы эти свойства заполнялись при создании объекта. 
2. Создайте геттеры и сеттеры для этих свойств.
3. Создайте класс Programmer, который будет наследоваться от класса Employee, и у которого будет свойство lang (список языков).
4. Для класса Programmer перезапишите геттер для свойства salary. Пусть он возвращает свойство salary, умноженное на 3.
5. Создайте несколько экземпляров обьекта Programmer, выведите их в консоль.

## Примечание
Задание должно быть выполнено на "чистом" Javascript без использования библиотек типа jQuery или React.

#### Литература:
- [Классы на MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes)
- [Классы в ECMAScript 6](https://frontender.info/es6-classes-final/)