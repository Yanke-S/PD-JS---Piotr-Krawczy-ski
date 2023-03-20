//--------------------------
// 1. ZMIENNE I TYPY
//--------------------------

//a) zdefiniuj zmienne const z wartościami w następujących typach: boolean, number, string. Wyloguj w konsoli te zmienne oraz użyj typeof aby wyświetlić również typy danych
const bool = true;
const number = 10;
const string = 'test';

console.log('================= AD 1a ================');
console.log(bool, typeof bool, number, typeof number, string, typeof string);

//b) użyj console log i wyświetl wyniki poniższych działań, dodatkowo wyjaśnij: jaki jest typ wyniku i z czego wynika.
console.log('================= AD 1b ================');
// 2 + "2"
console.log(2 + '2'); // Typ wyniku to string, dodaliśmy numer do stringu więc wyszło nam 22 zamiast 4
// 2 + 2
console.log(2 + 2); // Typ to number ponieważ dodalismy number do numbera
// 2 * "2"
console.log(2 * '2'); // Typ to number, mnożąc number ze stringiem dostajemy number
// 2 * 2
console.log(2 * 2); // Typ to number, mnożymy number przez number więc wynik to number
// 1 == true
console.log(1 == true); // Typ to boolean, 1 jest równe true
// 0 == false
console.log(0 == false); // Typ to boolean, 0 jest równe false
// 0 == null
console.log(0 == null); // Typ to boolean, 0 nie jest równe null więc wynik to false
// null == undefined
console.log(null == undefined); // Typ to boolean, wynik to true ponieważ null jak i undefined oznaczają że coś jest puste

//napisz dodatkowo czym różnią się następujące zapisy: "=", "==", "==="

// = jest operatorem przypisania
// == jest operatorem porównania wartości z obu stron nie uwzględniając ich typu
// === jest operatorem porównania wartości z obu stron uwzględniając ich typ

//c) napisz krótko czym różni się typ referencyjny od typu prostego, oraz podaj przykłady tych typów. Odpowiedź wyświetl w konsoli
console.log('================= AD 1c ================');
console.log(
	'Typy proste przechowywane są w pamięci komputera a typy referencyjne przechowują adresy obiektów'
);

const primitiveType = 1;
const referenceType = [1, 2];

//d) spróbuj przekonwertować i wyświetlić w konsoli poniższe wartości:
// let val = 0 (przekonwertuj na typ Boolean)
console.log('================= AD 1d ================');
let val = 0;
console.log(Boolean(val));
// let num = "2137" (przekonwertuj na typ Number)
let num = '2137';
console.log(Number(num));
// let str = 007 (przekonwertuj na String)
let str = 007;
console.log(String(str));
// let und = undefined (przekonwertuj na Boolean)
let und = undefined;
console.log(Boolean(und));

//e) stwórz pustą tablicę za pomocą new Array() i dodaj do niej 3 elementy za pomocą .push(), wyświetl wynik w konsoli
let newArr = new Array();
newArr.push(1, 2, 3);

console.log('================= AD 1e ================');
console.log(newArr);

//f) swtórz pusty obiekt za pomocą new Object() i dodaj do niego 3 klucze z wartościami, wyświetl wynik w konsoli
let newObject = new Object();
newObject.name = 'Piotr';
newObject.age = 22;
newObject.car = 'Skoda';

console.log('================= AD 1f ================');
console.log(newObject);

//g)* opisz krótko czym dokładnie jest typ NaN
console.log('================= AD 1g ================');

console.log('Jest to obiekt typu number który nie jest cyfrą');

//h)** znajdź w sieci informacje o typie Symbol i opisz go krótko
console.log('================= AD 1h ================');
console.log(
	'Jest to obiekt typu prostego którego nie można zmienić i jest unikalny. Aby go stworzyć używamy funkcji Symbol().'
);

//--------------------------
//2. FUNKCJE & WARUNKI
//--------------------------

//a) napisz funkcję która przyjmie trzy parametry i zwróci ich sumę. Wyświetl w konsoli wynik dodawania dowolnych trzech liczb

const SumOfNumbers = (a, b, c) => {
	return a + b + c;
};

console.log('================= AD 2a ================');
console.log(SumOfNumbers(2, 2, 2));

//b) napisz funkcję która przyjmie dwa parametry, wysokość i podstawę trójkąta a następnie obliczy i zwróci pole trójkąta. Przekaż do funkcji dowolne wartości i wyświetl w konsoli wynik

const triangleArea = (height, base) => {
	return (base / 2) * height;
};

console.log('================= AD 2b ================');
console.log(triangleArea(20, 30));

//c) napisz funkcję która przyjmie aktualny wiek i obliczy oraz zwróci informację ile lat minęło od 18 urodzin. Jeśli podany wiek będzie mniejszy niż 18, użyj if aby zwrócić taką informację

const actualAge = (age) => {
	if (age < 18) {
		return 'Podany wiek jest mniejszy niż 18';
	} else {
		return 'Od 18 urodzin minęło ' + (age - 18) + ' lat.';
	}
};

console.log('================= AD 2c ================');
console.log(actualAge(22));

//d) napisz funkcję która przyjmie tablicę z co najmniej 3 elementami i zwróci następujący komunikat: "Przekazana tablica ma X elementów a elementem numer 3 jest X" w miejscach oznaczonych jako X powinny wyświetlać się odpowienie wartości

const arrayWith3Objects = [1, 2, 6];

const thrirdElement = (array) => {
	return (
		'Przekazana tablica ma ' +
		array.length +
		' elementów a elementem numer 3 jest ' +
		array[2]
	);
};

console.log('================= AD 2d ================');
console.log(thrirdElement(arrayWith3Objects));

//e) napisz funkcję która przyjmie obiekt testPerson i zwróci komunikat "Pan/i (imię) (nazwisko) ma (wiek) lat oraz (wzrost) cm wzrostu". Możesz zdefiniować inną osobę i użyc funkcji ponownie.

let testPerson = {
	name: 'Jan',
	surname: 'Kowalski',
	age: 20,
	height: 180,
};

const personShortDescription = (person) => {
	return (
		'Pan/i ' +
		person.name +
		' ' +
		person.surname +
		' ma ' +
		person.age +
		' lat oraz ' +
		person.height +
		' cm wzrostu.'
	);
};

console.log('================= AD 2e ================');
console.log(personShortDescription(testPerson));

//f) napisz funkcję która przyjmie obiekt testPerson oraz drugi parametr. Funkcja powinna zmienić wartośc jednego z klucza w obiekcie. Spróbuj zmodyfikować na przykład wiek.

const newAge = (person, age) => {
	return (person.age = age);
};

newAge(testPerson, 30);

console.log('================= AD 2f ================');
console.log(testPerson);

//g) napisz funkcję która przyjmie jeden parametr. Jeśli parametr nie jest typu Number, funkcja powinna zwrócić informację w konsoli, że przyjmowany jest tylko typ number. Jeśli przekazana wartość jest typu Number:
// - gdy cyfra jest podzielna przez 3 i 5, niech zwróci string "FizzBuzz"
// - gdy cyfra jest podzielna przez 3, niech zwróci string "Fizz"
// - gdy cyfra jest podzielna przez 5, niech zwróci string "Buzz"

const FizzBuzzFunction = (value) => {
	if (typeof value != 'number') {
		return 'Przyjmowany jest tylko typ number';
	} else if (value % 3 === 0 && value % 5 === 0) {
		return 'FizzBuzz';
	} else if (value % 3 === 0) {
		return 'Fizz';
	} else if (value % 5 === 0) {
		return 'Buzz';
	} else {
		return 'Nor Fizz nor Buzz :(';
	}
};

console.log('================= AD 2g ================');
console.log(FizzBuzzFunction(15));

//h) napisz funkcję która przyjmie numer a następnie sprawdzi czy cyfra jest parzysta i zwróci informację. Użyj operatora trójargumentowego

const evenNumber = (number) => {
	return number % 2 === 0 ? 'Liczba jest parzysta' : 'Liczba jest nie parzysta';
};

console.log('================= AD 2h ================');
console.log(evenNumber(10));

//i)* napisz funkcję która wylosuje i zwróci liczbę od 1 do 10

const randomNumber = () => {
	return Math.floor(Math.random() * 10) + 1;
};

console.log('================= AD 2i ================');
console.log(randomNumber());

//j)** napisz funkcję która przyjmie dwie liczby, a następnie wylosuje i zwróci liczbę z podanego zakresu

const randomNum = (a, b) => {
	return Math.floor(Math.random() * (b - a + 1)) + a;
};

console.log('================= AD 2j ================');
console.log(randomNum(10, 100));

//k)*** wyszukaj w internecie metody Javascriptowe Math. i użyj trzech z nich aby napisać funkcje wykonujące działania według Twojego własnego pomysłu.

const randomArray = [1.5, 343.53, 32.32, 43.76];

roundSumOfMinAndMaxOfArray = (array) => {
	const res = Math.max(...array) + Math.min(...array);
	return Math.round(res);
};

console.log('================= AD 2k ================');
console.log(roundSumOfMinAndMaxOfArray(randomArray));

//--------------------------
// FUNKCJE & PĘTLE
//--------------------------

//uwaga! Możesz spróbować każdą z pętli napisać w funkcji

//a) napisz pętlę która odliczy od 1 do 9
console.log('================= AD 3a ================');

for (let i = 1; i < 10; i++) {
	console.log(i);
}
//b) napisz pętlę która odliczy od 9 do 1
console.log('================= AD 3b ================');

for (let j = 9; j > 0; j--) {
	console.log(j);
}
//c) napisz pętlę która odliczy od 5 do 15
console.log('================= AD 3c ================');

for (let k = 5; k < 16; k++) {
	console.log(k);
}
//d) napisz pętlę która odliczy od 0 do -10
console.log('================= AD 3d ================');

for (let l = 0; l > -11; l--) {
	console.log(l);
}
//e) napisz pętlę która odliczy od 1 do 20, iteracja co 2
console.log('================= AD 3e ================');

for (let m = 1; m < 21; m += 2) {
	console.log(m);
}
//f) napisz pętlę która odliczy od 10 do -10, iteracja co 4
console.log('================= AD 3f ================');

for (let n = 10; n > -11; n -= 4) {
	console.log(n);
}
//g)* napisz pętlę, ktora będzie odliczać od 1 do 100, ale iteracja z każdym wykonaniem będzie rosła dwukrotnie, czyli 1, 2, 4, 8...
console.log('================= AD 3g ================');

for (let o = 1; o < 101; o *= 2) {
	console.log(o);
}
//h)* napisz pętlę która będzie odliczać od 1 do 10, ale wyświetli tylko nieparzyste wartości
console.log('================= AD 3h ================');

for (let p = 1; p < 11; p++) {
	if (p % 2 !== 0) {
		console.log(p);
	}
}
//i)* napisz pętlę która odliczy od 1 do 10, i wyświetli w konsoli informację o tym czy wyświetlona cyfram jest parzysta czy nie, możesz użyć operatora trójargumentowego
console.log('================= AD 3i ================');

for (let r = 1; r < 11; r++) {
	if (r % 2 !== 0) {
		console.log(r + ' jest nieparzysta');
	} else {
		console.log(r + ' jest parzysta');
	}
}

//Uwaga! kolejne pętle trzeba napisać w funkcji

//j) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do podanej wartości
const numbersFrom1ToX = (x) => {
	for (let i = 1; i <= x; i++) {
		console.log(i);
	}
};

console.log('================= AD 3j ================');
console.log(numbersFrom1ToX(10));
//k) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do 50, ale iteracja będzie się odbywać co podaną wartość. (Jeśli argumentem przekazanym do funkcji jest 3, to pętla ma odliczać 3,6,9 itp.)
const numbersFrom1To50ByX = (x) => {
	for (let i = 0; i <= 50; i += x) {
		if (i === 0) {
			continue;
		}
		console.log(i);
	}
};

console.log('================= AD 3k ================');
console.log(numbersFrom1To50ByX(3));

//l) napisz funkcję która przyjmie tablicę arrNames i wyświetli w konsoli przywitanie dla każdej z osób
const arrNames = [
	'Ksawery',
	'Zenobiusz',
	'Klementyna',
	'Apolonia',
	'Jeremiasz',
	'Bernadetta',
];

const welcome = (people) => {
	for (let name of people) {
		console.log('Witaj ' + name + '!');
	}
};

console.log('================= AD 3l ================');
console.log(welcome(arrNames));

//ł) napisz funkcję która przyjmie tablicę arrObjects i wyświetli dla każdego obiektu informację "przed Tobą stoi (kolor) (marka)", np niebieski Mustang.
const arrObjects = [
	{
		brand: 'Mustang',
		color: 'niebieski',
	},
	{
		brand: 'Tesla',
		color: 'czarna',
	},
	{
		brand: 'Polonez',
		color: 'żółty',
	},
	{
		brand: 'Toyota',
		color: 'fioletowa',
	},
];

const carDescription = (cars) => {
	for (let car of cars) {
		console.log('Przed tobą stoi ' + car.color + ' ' + car.brand + '.');
	}
};

console.log('================= AD 3ł ================');
console.log(carDescription(arrObjects));

//m) napisz funkcję która przyjmie tablic arrNumbers i wyświetli w konsoli tylko przyste elementy tablicy

const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbersOfArrNumbers = (array) => {
	for (let key of array) {
		if (key % 2 === 0) {
			console.log(key);
		}
	}
};

console.log('================= AD 3m ================');
console.log(evenNumbersOfArrNumbers(arrNumbers));

//n)* napisz funkcję, która przeiteruje po tablicy arrTypes i:
// - za pomocą push umieści elementy o typie innym niż number w tablicy arrOther
// - za pomocą push umieści elementy o typie number w tablicy arrNumbers
// - za pomocą push umieści numery parzyste w tablicy arrEven
// - na końcu zwróci obiekt z tymi trzema tablicami

const arrTypes = [
	2,
	4,
	5,
	undefined,
	null,
	'val',
	NaN,
	7,
	10,
	333,
	'874',
	22,
	21,
	400,
	'400',
	'undefined',
];

const arrOther = [];
const arrNubers = [];
const arrEven = [];

const pushToNewArrays = (array) => {
	for (let value of array) {
		let type = typeof value;
		if (type !== 'number') {
			arrOther.push(value);
		} else {
			arrNubers.push(value);
		}
		if (value % 2 === 0 && type === 'number') {
			arrEven.push(value);
		}
	}
	return { arrOther, arrNubers, arrEven };
};

console.log('================= AD 3n ================');
console.log(pushToNewArrays(arrTypes));
//--------------------------
// METODY
//--------------------------

//a) za pomocą metody map wyloguj przywitanie dla każdej osoby z tablicy names

const names = ['Seba', 'Kari', 'Mati', 'Andżi'];

const welcomeArr = names.map((name) => {
	return console.log('Witaj ' + name + '!');
});

console.log('================= AD 4a ================');
console.log(welcomeArr);

//b) za pomocą metody filter stwórz nową tablicę z tablicy array10 z parzystymi liczbami

const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenOfArray10 = array10.filter((number) => {
	return number % 2 === 0;
});

console.log('================= AD 4b ================');
console.log(evenOfArray10);

//c) użyj filter na tablicy people aby zwrócić tablicę tylko z kobietami

const people = [
	{
		name: 'Tomasz',
		lastname: 'Kowalski',
		gender: 'male',
	},
	{
		name: 'Karol',
		lastname: 'Nowak',
		gender: 'male',
	},
	{
		name: 'Joanna',
		lastname: 'Kowalska',
		gender: 'female',
	},
	{
		name: 'Anna',
		lastname: 'Nowak',
		gender: 'female',
	},
];

const females = people.filter((person) => {
	if (person.gender === 'female') {
		return person;
	}
});

console.log('================= AD 4c================');
console.log(females);

//d) użyj metod takich jak split i sort aby zmienną shopping przekonwertować na tablicę z listą zakupów. Każde słowo powinno być osobną pozycją w tablicy. Ponad to posortuj wartości alfabetycznie. Spróbuj też ujednolicić wielkość liter aby lista była bardziej czytelna.

const shopping =
	'kawa MaSŁo chleb WODA ogórki jabłka Ziemniaki chipsy salcesoN wędLIna pieczarki Włoszczyzna heRBata truskawKi maliny';

const shoppingList = shopping.toLowerCase().split(' ').sort();

console.log('================= AD 4d ================');
console.log(shoppingList);
//e) połącz litery alfabetu w tablicy alphabet w jeden string a następnie odwróć kolejność aby wynik wyglądał tak: "ZYXWV..."

const alphabet = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
];

const reversedAplpahbet = alphabet.reverse().join('');

console.log('================= AD 4e ================');
console.log(reversedAplpahbet);
