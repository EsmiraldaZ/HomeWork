"use strict"


/*ЗАДАНИЕ №1. Инкапсуляция
Напишите конструктор для объектов Аудиоплеер, в котором есть приватное свойство громкость звука, для доступа к этому свойству реализуйте: 
1. Методы геттер и сеттер;
2. Единый метод геттер-сеттер. 
Громкость может быть в диапазоне от 0 до 100.*/


function Mediaplayer(volumeCap) {
	var _currentVolume;
	function volume(volumeCap) {
	    if ((volumeCap >= 0) && (volumeCap <= 100)) {
         return _currentVolume = volumeCap;
    	};
    }
    this.getVolume = function () {
    	return _currentVolume;
    };
    this.setVolume = function (volumeCap) {
    	volume(volumeCap);
    }
}*/

function Mediaplayer(volumeCap) {
	var _currentVolume;
	function volume(volumeCap) {
		if ((volumeCap >= 0) && (volumeCap <= 100)) {
        return _currentVolume = volumeCap;
    	};
	}
	this.currentVolume = function (volumeCap) {
		if (volumeCap === undefined) {
			return _currentVolume;
		} else {
			volume(volumeCap);		
		}
	}
}


var player = new Mediaplayer(56);
console.log(player.getVolume());
player.setVolume(89);
console.log(player.getVolume());


var player = new Mediaplayer(56);
console.log(player.currentVolume());
player.currentVolume(89);
console.log(player.currentVolume());


/*ЗАДАНИЕ №2. Инкапсуляция
 Напишите конструктор для объектов Сумматор, со следующим функционалом:
 1. Приватное свойство firstNumber;
 2. Приватное свойство secondNumber;
 3. Публичное свойство result;
 4. Приватный метод calc(), который записывает в result сумму свойств firstNumber и secondNumber;
 5. Единые методы геттер-сеттер для свойств firstNumber и secondNumber, во время работы методов как сеттер, должна происходить валидация
   (устанавливать можно только значения типа Number), если валидация происходит успешно, должен вызываться метод calc(). Получается, что при
   успешной установке либо firstNumber либо secondNumber, происходит перерасчет result.*/

function Summ() {
	var _firstNumber; 
	var _secondNumber;
	var selfProp = this;
	this.result; 
	function calc() { 
		return selfProp.result = _firstNumber + _secondNumber;
	} 
	this.firstNumber = function (firstNumber) {
		if (firstNumber === undefined) {
			return _firstNumber;
		} else {
			if (typeof firstNumber === "number") {
				_firstNumber = firstNumber;
				calc(_firstNumber);		
			}
		}
	};
	this.secondNumber = function (secondNumber) {
		if (secondNumber === undefined) {
			return _secondNumber;
		} else {
			if (typeof secondNumber === "number") {
				_secondNumber = secondNumber;
				calc(_secondNumber);		
			}
		}
	};
}

var summator = new Summ();
summator.firstNumber(69);
console.log(summator.result);
summator.secondNumber(8);
console.log(summator.result);
summator.firstNumber(15);
console.log(summator.result);*/


/*ЗАДАНИЕ №3. Функциональное наследование
Создайте конструктор объектов Геометрическая фигура, определите в нем приватные свойства для задания центра фигуры. 
Для доступа к этим свойствам определите необходимые метод/методы.
На основе этого конструктора создайте два новых (наследники) – Прямоугольник и Круг.
 В этих конструкторах определите особые приватные свойства. 
 (Например, длина диагонали для Квадрата и радиус для Круга).
В каждый из конструкторов добавьте публичный метод info(), 
который выводит на экран всю доступную информацию о фигуре.*/


function GeometricFigure(centerByHor, centerByVert) {      
	var _centerByHorizontal;							   
	var _centerByVertical;								   
	this.centerByHorizontal = function (centerByHor) {
		if (centerByHorizontal === undefined) {
			return _centerByHorizontal;
		}
		_centerByHorizontal = centerByHorizontal;
	};
	this.centerByVertical = function (centerByVert) {
		if (centerByVertical === undefined) {
			return _centerByVertical;
		}
		_centerByVertical = centerByVertical;
	};
}

function Foursquare(centerByHor, centerByVert, diagLength) {
	GeometricFigure.call(this, centerByHor, centerByVert)
	var _diagonalLength;
	this.diagonalLength = function (diagLength) {
		if (diagLength === undefined) {
			return _diagonalLength;
		}
		_diagonalLength = diagLength;
	};
	this.info = function() {
		console.log("X:" + " " + Foursquare.centerByHorizontal + ", Y:" + " " + Foursquare.centerByVertical + ", diag:" + " " + _diagonalLength);
	};
}

var fs = new Foursquare(1, 5, 38); 	
fs.centerByHorizontal(2);			
fs.centerByVertical(6);
fs.diagonalLength(39);
fs.info();
console.dir(fs);


/*ЗАДАНИЕ №4. Задание №4. Функциональное наследование. Полиморфизм
Создайте конструктор для объектов Квадрат, определите защищенное свойство для хранения значения стороны.
Для доступа к этому свойству определите необходимые метод/методы. Также определите публичный метод, который возвращает периметр.
На основе этого конструктора создайте конструктор Куб и переопределите метод получения периметра.
Реализуйте 2 версии текущего задания, используя следующие способы переопределения:
1. Без расширения (полностью переопределить метод родителя);
2. С расширением (использовать результат метода родителя для дальнейших расчетов).*/

function Square(side) {
	this._sideLength = side;					
	this.sideLength = function (side) {
		if (side === undefined) {
			return this._sideLength;
		}
		this._sideLength = side;
	};
	this.perimeter = function() {
		return this._sideLength * 4; 
	};
}

var sq = new Square(5);
console.log(sq.perimeter());

function Cube(side) {
	Square.call(this, side);
	this.sideLength = function (side) {
		if (side === undefined) {
			return this._sideLength;
		}
		this._sideLength = side;
	};
	this.perimeter = function() {
		return this._sideLength * 12; 
	};	
}

var cube1 = new Cube(4);
console.log(cube1.perimeter());*/

function Cube(side) {
	Square.call(this, side);
	this.sideLength = function (side) {
		if (side === undefined) {
			return this._sideLength;
		}
		this._sideLength = side;
	};
	var parentPerimeter = this.perimeter;
	this.perimeter = function() {					
		return parentPerimeter.call(this) * 3;
	};	
}

var cube2 = new Cube(6);
console.log(cube2.perimeter());