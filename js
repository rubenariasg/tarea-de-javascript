//! 1. Sumar dos numeros siempre y cuando el primero sea mayor al segundo.
{
  function sum(num1, num2) {
    if (num1 > num2) {
      let result = num1 + num2;
      return result;
    } else {
      return "El primer valor tiene que ser mayor";
    }
  }
}

//! 2. Realizar una operacion segun el operador ( +, -, *, /, % ) realizar la suma, resta, multiplicacion, divison, y residuo.
{
  function calc(num1, num2, operador) {
    let result;

    switch (operador) {
      case "+":
        result = num1 + num2;
        console.log(
          `El resultado de la suma de ${num1} ${operador} ${num2} es ${result}`
        );
        break;
      case "-":
        result = num1 - num2;
        console.log(
          `El resultado de la resta de ${num1} ${operador} ${num2} es ${result}`
        );
        break;
      case "*":
        result = num1 * num2;
        console.log(
          `El resultado de la multiplicacion de ${num1} ${operador} ${num2} es ${result}`
        );
        break;
      case "/":
        result = num1 / num2;
        console.log(
          `El resultado de la division de ${num1} ${operador} ${num2} es ${result}`
        );
        break;
      case "%":
        result = num1 % num2;
        console.log(
          `El resultado del resto de ${num1} ${operador} ${num2} es ${result}`
        );
        break;
      default:
        result = "Operador incorrecto!";
        console.log(result);
        break;
    }
    return result;
  }
}

//! 3. Presentar el mayor de dos numeros
{
  function obtenerM(num1, num2) {
    return console.log(
      `El mayor entre ${num1} y ${num2} es: `,
      Math.max(num1, num2)
    );
  }
}

//! 4. Dado un nombre presentarlo
{
  function name() {
    const name = "Jorge";
    return name;
  }
}

//! 5. Dado un valor de compra presentar el total considerando un 12% de iva
{
  function iva(price) {
    let total = price + price * 0.12;
    return total;
  }
}

//! 6. Presentar 5 veces un nombre
{
  function nameFor5() {
    for (i = 0; i < 5; i++) {
      console.log("Anderson");
    }
  }
}

//! 7. Presentar los numeros multiplos de 3 del 3 al 21
{
  {
    function multiplos3() {
      let num = [];
      for (i = 3; i <= 21; i++) {
        if (i % 3 === 0) {
          num.push(i);
        }
      }
      return num;
    }
  }
}

//! 8. Presentar los numeros multiplos de 3 del 21 al 3
{
  function multiplos3AlReves() {
    let num = [];
    for (i = 21; i >= 3; i--) {
      if (i % 3 === 0) {
        num.push(i);
      }
    }
    return num;
  }
}

//! 9. Dados dos nombres indicar si son iguales o diferentes
{
  function comparationName(name1, name2) {
    if (name1.toLowerCase() === name2.toLowerCase()) {
      return `Los nombres ${name1} y ${name2} son iguales`;
    } else {
      return `Los nombres ${name1} y ${name2} no son iguales`;
    }
  }
}

//! 10. Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres
{
  function numberMenor5Caracter(num) {
    let menores5Caracteres = [];
    for (i = 0; i < num.length; i++) {
      if (num[i].toString().length < 5) {
        menores5Caracteres.push(num[i]);
      }
    }
    return menores5Caracteres;
  }
}

//! 11. Dado un arreglo presentar sus elementos
{
  function arreglo() {
    let arreglo = ["Hola", 19, "Anderson"];
    return arreglo;
  }
}

//! 12. Dado un arreglo de numeros presentar los menores a 10
{
  function numberMenor10(num) {
    let menorADiez = [];
    for (i = 0; i < num.length; i++) {
      if (num[i] < 10) {
        menorADiez.push(num[i]);
      }
    }
    return menorADiez;
  }
}

//! 13. Dado un arreglo de numeros presentar los impares y al final la suma de los pares
{
  function imparSumPar(arr) {
    let impares = [];
    let paresSum = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        impares.push(arr[i]);
      } else {
        paresSum += arr[i];
      }
    }
    console.log("Numeros impares: ", impares.join());
    console.log("Suma de pares: ", paresSum);
  }
}

//! 14. Presentar el primero, el medio y el ultimo valor de un arreglo.
{
  function primMedUlt(arr) {
    let primero = arr[0];
    let medio = arr[Math.floor((arr.length - 1) / 2)];
    let ultimo = arr[arr.length - 1];
    console.log("Primer valor", primero);
    console.log("Valor medio", medio);
    console.log("Ultimo valor", ultimo);
  }
}

//! 15. Calcular el vuelto de una compra dado el costo y el pago
{
  function vuelto(pay, cost) {
    let vuelto = pay - cost;
    return vuelto;
  }
}

//! 16. Presentar la tabla de multiplicar de cualquier numero del 1 al 12.
{
  function tableMult(num) {
    for (i = 1; i <= 12; i++) {
      let result = num * i;
      console.log(`${num} x ${i} = ${result}`);
    }
  }
}

//! 17. Realizar la multiplicacion de dos numeros por medio de sumas sucesivas
{
  function sumMult(num, mult) {
    let result = 0;
    let oper = "";
    for (i = 1; i <= mult; i++) {
      result += num;
      if (i < mult) {
        oper += num + " + ";
      } else {
        oper += num;
      }
    }
    return oper + " = " + result;
  }
}

//! 18. Realizar la division de dos numeros por medio de restas sucesivas.
{
  function divisionRes(num1, num2) {
    let cociente = 0;
    for (i = num1; i >= num2; i -= num2) {
      cociente++;
    }
    let reciduo = num1 - cociente * num2;
    return console.log(`El cociente es ${cociente} y el reciduo es ${reciduo}`);
  }
}

//! 19. Calcular el factorial de un numero
{
  function factorial(num) {
    let result = 1;
    for (i = 1; i <= num; i++) {
      result *= i;
    }
    console.log(`El factorial de ${num} es ${result}`);
    return result;
  }
}

//! 20. Calcular el exponente de un numero
{
  function calcExp(num, exp) {
    let result = 1;
    for (i = 1; i <= exp; i++) {
      result *= num;
    }
    console.log(`${num} elevado a ${exp} es ${result}`);
    return result;
  }
}

//! 21. Calcular la serie de fibonacci dado un numero
{
  function fibonacci(num) {
    let serie = [0, 1];
    for (i = 2; i < num; i++) {
      serie.push(serie[i - 1] + serie[i - 2]);
    }
    return console.log(`La serie de fibonacci para ${num} es: `, serie.join());
  }
}

//! 22. Dado un numero invertido
{
  function invertirNum(num) {
    let numInver = 0;
    while (num > 0) {
      numInver = numInver * 10 + (num % 10);
      num = Math.floor(num / 10);
    }
    return numInver;
  }
}

//! 23. Presentar los divisores de un numero
{
  function divNum(num) {
    let div = [];
    let result = "Los divisores de " + num + " son: ";
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        div.push(i);
      }
    }
    result += div.join();
    console.log(result);
  }
}

//! 24 Presentar si un numero es perfecto o no
{
  function numPerfect(num) {
    let sumDiv = 0;
    let divisors = "";
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        sumDiv += i;
        if (i !== num / 2) {
          divisors += i + " + ";
        } else {
          divisors += i;
        }
      }
    }
    if (sumDiv === num) {
      return divisors + " = " + num + " es un número perfecto";
    } else {
      return num + " no es un número perfecto";
    }
  }
}

//! 25. Verificar si un numero es primo o no
{
  function numPrimo(num) {
    if (num <= 1) {
      return num + " no es primo";
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return num + " no es primo";
      }
    }
    return num + " es primo";
  }
}

console.log(" ------------------------------------------ ");
console.log("|-----------EJERCICIOS SIN CICLO-----------|");
console.log(" ------------------------------------------ ");
console.log(sum(6, 5));
obtenerM(12, 45);
console.log(name());
console.log(iva(345));
console.log(comparationName("Jose", "Pepe"));
console.log(arreglo());
primMedUlt(["Hola", "como", "estas", 12, 18]);
console.log(vuelto(150, 100));

console.log(" ------------------------------------------ ");
console.log("|-----------EJERCICIOS CON CICLO-----------|");
console.log(" ------------------------------------------ ");
calc(10, 2, "+");
calc(10, 2, "-");
calc(10, 2, "*");
calc(10, 2, "/");
calc(10, 2, "%");
calc(10, 2);
nameFor5(5);
console.log("Los multiplos de 3: " + multiplos3());
console.log("Los multiplos de 3 al reves: " + multiplos3AlReves());
console.log(
  "Los numeros con menos de 5 caracteres son: ",
  numberMenor5Caracter([
    1234, 56789, 1241, 12512512, 613, 15, 5, 634743, 15125, 1251273,
  ])
);
console.log(numberMenor10([12, 5, 1, 2, 4, 50, 18, 21, 19, 6, 9]));
imparSumPar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
tableMult(4);
console.log(sumMult(6, 4));
divisionRes(5, 2);
factorial(5);
calcExp(4, 2);
fibonacci(8);
console.log(invertirNum(123456789));
divNum(6);
console.log(numPerfect(8128));
console.log(numPrimo(5));
