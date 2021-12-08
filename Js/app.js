// // Ejercicio Saludar

// let nombreUsuario= prompt("¿Cuál es tú nombre?");

// alert (`Hola ${nombreUsuario}!`);

// // Ejercicio Calculadora - SUMA - RESTA - MULTIPLICACION - DIVISION

// //SUMA

// let primerNumeroSuma= prompt("Ingresá el primer número a sumar");
// let segundoNumeroSuma= prompt ("Ingresá el segundo número a sumar");
// let resultadoSuma= parseFloat(primerNumeroSuma)+parseFloat(segundoNumeroSuma);

// alert (`El resultado de la suma es ${resultadoSuma}`);

// //RESTA 

// let primerNumeroResta= prompt("Ingresá el primer número de la resta");
// let segundoNumeroResta= prompt("Ingresá el número que le querés restar");
// let resultadoResta= parseFloat(primerNumeroResta)-parseFloat(segundoNumeroResta);

// alert(`El resultado de la resta es ${resultadoResta}`);

// //MULTIPLICACIÓN 

// let primerNumeroMultiplicacion= prompt("Ingresá el primer número a multiplicar");
// let segundoNumeroMultiplicacion= prompt("Ingresá el segundo número de la multiplicación");
// let resultadoMultiplicacion= parseFloat(primerNumeroMultiplicacion)*parseFloat(segundoNumeroMultiplicacion);

// alert (`El resultado de la multiplicación es ${resultadoMultiplicacion}`);

// //DIVISION 

// let primerNumeroDivision= prompt("Ingresá el primer número de la división");
// let segundoNumeroDivision= prompt("Ingresá el segundo número de la división");
// let resultadoDivision= parseFloat(primerNumeroDivision)/parseFloat(segundoNumeroDivision);

// alert(`El resultado de la división es ${resultadoDivision}`);


// //EJERCICIO ADIVINAR EL NUMERO

// let numeroAadivinar= parseInt(8);

// let numeroIngresado= prompt("Adiviná el número del 1 al 10");

// if (numeroAadivinar==numeroIngresado) {
//     alert("Adivinaste!")
//  } else {
//     alert("Pifiaste!")
//  };

  //EJERCICIOS JS CLASE 07/12/2021 - VARIABLES Y OPERADORES


 //EJERCICIO 0
 
 //Solicitar al usuario su nombre y mostrarlo por alert. Luego Mostrar un alert que salude diciendo Hola y el nombre de la persona. Luego solicitar el apellido y que salude por alert con el nombre completo (Ej: Hola Florencia Andres).

//  let nombre=prompt(`Ingrese su nombre`);
//  alert(nombre);
//  alert(`Hola ${nombre}!`)


//EJERCICIO 1 

//Solicitar al usuario dos números y mostrar por alert el resultado de la suma de ambos.

// let primerNro= parseFloat(prompt(`Indicar primer número`));
// let segundoNro= parseFloat(prompt(`Indicar segundo número`));

// alert(`La suma de ambos nros. da ${primerNro+segundoNro}`);


//EJERCICIO 2

//Solicitar al usuario la edad que cumple o cumplió este año y calcular en qué año nació y mostrar un mensaje por alert (Ej: Usted nació en 1974)

// let añoActual=parseFloat(prompt(`En que año estamos?`));
// let edad= parseFloat(prompt(`Ingrese su edad`));

// alert(`Usted nació en el año ${añoActual-edad}`);


//EJERCICIO 3

//Mostrar al usuario su balance de cuenta (inventar un número de cuenta). Consultar cuánto dinero desea retirar y mostrar el nuevo balance.

// let saldoInicial= parseFloat(35000);
// alert(`Su saldo inicial es de 35000 pesos`);

// let extraccion= parseFloat(prompt(`Indique el monto a retirar`));

// alert(`Su saldo actual es de ${saldoInicial-extraccion} pesos`);


//EJERCICIO 4

//Solicitar al usuario 3 notas, calcular el promedio y mostrarlo por alert.

// let primerNota=parseFloat(prompt(`Indique su primer nota`));
// let segundaNota=parseFloat(prompt(`Indique su segunda nota`));
// let tercerNota=parseFloat(prompt(`Indique su tercera nota`));

// alert(`Su promedio es ${(primerNota+segundaNota+tercerNota)/3}`);


//EJERCICIO 5

//Crear un conversor de medidas. Pedirle al usuario que ingrese una medida en metros y pasarlo a pies, centímetros y pulgadas. Mostrar por alert los tres resultados.

// let medidaMetros=parseFloat(prompt(`Ingrese la medida expresada en metros`));

// alert(`Equivale a ${medidaMetros*3.28084} pies`);
// alert(`Equivale a ${medidaMetros*100} centímetros`);
// alert(`Equivale a ${medidaMetros*39.3701} pulgadas`);


//EJERCICIO 6

//Solicitar al usuario dos números y mostrar el resultado de la suma. Luego solicitar al usuario un tercer número y multiplicarlo por el resultado anterior. Mostrar el resultado final.

// let primerNumero=parseFloat(prompt(`Indique un número`));
// let segundoNumero=parseFloat(prompt(`Indique un segundo número`));

// alert(`El resultado de la suma es ${primerNumero+segundoNumero}`);

// let tercerNumero=parseFloat(prompt(`Indique un tercer número`));

// alert(`El resultado de la suma de los 2 primeros números por el tercero es ${(primerNumero+segundoNumero)*tercerNumero}`);


//EJERCICIO 7

//Armar un conversor de minutos a segundos. Solicitar al usuario un número de minutos y mostrar por alert la cantidad de segundos a la que equivale.

// let minutos=parseFloat(prompt(`Indique la cantidad de minutos`));
// alert(`Equivale a ${minutos*60} segundos`);


//EJERCICIO 8

//Solicitar al usuario la medida de la base y de la altura de un rectángulo y devolver el área.

// let base= parseFloat(prompt(`Indique la base del rectángulo`));
// let altura= parseFloat(prompt(`Indique la altura del rectángulo`));

// alert(`El área del rectángulo es ${base*altura}`);


//EJERCICIO 9

//Solicitar al usuario la medida de la base y de la altura de un triángulo equilátero y devolver el área.

// let baseTri=parseFloat(prompt(`Indique la base del triángulo`));
// let alturaTri= parseFloat(prompt(`Indique la altura del triángulo`));

// alert(`El area del triágulo es ${(baseTri*alturaTri)/2}`);


//EJERCICIO 10

//Solicitar al usuario un monto y un número de descuento. Mostrar al usuario cuánto es el precio final con el descuento aplicado.

// let monto=parseFloat(prompt(`Ingresar un monto expresado en pesos`));
// let descuento=parseFloat(prompt(`Ingresar el monto del descuento sin el signo %`));

// alert(`El monto a pagar es ${(monto-((monto*descuento)/100))} pesos`);


//EJERCICIO 11

//Solicitar al usuario su nombre y la edad que cumple o cumplió en 2021, y mostrar un mensaje con alert diciendo "Hola (nombre) usted nació en el año (año)"

// let userName=prompt(`Indique su nombre`);
// let añoNac=parseFloat(prompt(`Indique la edad que cumplió o cumplirá en 2021`));

// alert(`Hola ${userName}, usted nació en el año ${2021-añoNac}.`);


//EJERCICIO 12

//Crear un conversor de Celsius a Farenheit. Solicitar al usuario su nombre y una temperatura y mostrar por alert su equivalente en Farenheit junto con un mensaje que incluya ambos datos. 

// let nombre1=prompt(`Indique su nombre`);
// let gradosC=parseFloat(prompt(`Ingrese la temperatura expresada en grados Celsius`));

// alert(`Hola ${nombre1}, ${gradosC} grados Celsius equivalen a ${(gradosC*1.8) + 32} grados Farenheit`);


//EJERCICIO 13

//Realizar el mismo ejercicio que el anterior pero al revés, de Farenheit a Celsius.

// let nombre2=prompt(`Indique su nombre`);
// let gradosF=parseFloat(prompt(`Ingrese la temperatura expresada en grados Farenheit`));

//alert(`Hola ${nombre2}, ${gradosF} grados Farenheit equivalen a ${(gradosF-32)*5/9} grados Celsius`);


//EJERCICIO 14

//Solicitar al usuario un número y almacenarlo en una variable. Sumarle 5 , multiplicar el resultado por 10 y sacar el resto de su división por 3. Mostrar el resultado sin comas.

// let unNumero=parseInt(prompt(`Indique un número`));
// alert(`${((unNumero+5)*10)%3}`);


// BONUS:

// 0) Solicitar dos números y mostrar la suma de sus cifras. (Ejemplo: 15 y 29, mostrar 1529).

// let numeroUno1= prompt(`Ingrese el primer Nro.`);
// let numeroDos2= prompt(`Ingrese el segundo Nro.`);

// alert(`La suma de las cifras es ${numeroUno1+numeroDos2}`);

// 1) Crear un conversor de años a segundos. Solicitar al usuario una cantidad de días y mostrar su equivalente en segundos por alert o alert, a elección. (Pueden probar también con números con coma :) 2,5 años por ejemplo)

// let tiempoAños=parseFloat(prompt(`Ingrese el tiempo expresado en años`));
// alert(`${tiempoAños} años equivalen a ${tiempoAños*31536000} segundos`);

// let tiempoDias=parseFloat(prompt(`Ingrese al tiempo expesado en días`));
// alert(`${tiempoDias} días equivalen a ${tiempoDias*86400} segundos`);

// 2) Solicitar al usuario que ingrese la cantidad de kilómetros que desea recorrer con su motocicleta. A continuación solicitar la velocidad promedio a la que desea ir en kilómetros por hora. Calcular el tiempo estimado en llegar a destino en minutos.  A tener en cuenta: la velocidad se calcula en metros sobre segundos!)

// let kilometros=parseFloat(prompt(`Ingrese la cantidad de Km a recorrer con su motocicleta`)); 
// let velocidad=parseFloat(prompt(`Ingrese la velocidad promedio por hora`)); // 

// // FORMULA PARA CALCULO DE TIEMPO : V=D/T  ------> T=D/V

// alert(`El tiempo estimado para recorrer ${kilometros} Km a una velocidad promedio de ${velocidad} Km por hora es de ${kilometros/(velocidad/60)} minutos.`);


// 3) Realizar una calculadora de sueldo neto. Se solicita ingresar el sueldo bruto y se descuenta: Obra social 3%, jubilación 11%, Ley 19032 3%. Mostrar el monto de cada una de las deducciones y el monto final. No contempla impuesto a las ganancias ni sindicatos.
// ej: Sueldo bruto: $70.000
//     Deducciones:
//     Obra social: $2100
//     Ley 19032: $2100
//    Jubilación: $7700
//    Neto a pagar: $58100

// let sueldoBruto=parseFloat(prompt(`Ingrese el monto de su sueldo bruto`));

// let obraSocial=parseFloat(sueldoBruto*3/100);
// alert(`El importe a descontar por Obra Social es de ${obraSocial} pesos.`);

// let jubilación=parseFloat(sueldoBruto*11/100);
// alert(`El importe a descontar por Jubilación es de ${jubilación} pesos.`);

// let ley=parseFloat(sueldoBruto*3/100);
// alert(`El importe a descontar por Ley 19032 es de ${ley} pesos.`);

// alert(`Su Sueldo Neto es de ${sueldoBruto-obraSocial-jubilación-ley} pesos.`);














 

