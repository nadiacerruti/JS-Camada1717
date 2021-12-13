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

// EJERCICIOS SOBRE CONDICIONALES 09-12/2021

//EJERCICIO 1: Agregar al ejercicio 5 de Variables un validador de datos. Si ingresa un número entonces que me calcule las medidas, sino, que muestre un mensaje de error.

//Crear un conversor de medidas. Pedirle al usuario que ingrese una medida en metros y pasarlo a pies, centímetros y pulgadas. Mostrar por alert los tres resultados.

// let medidaMetros=parseFloat(prompt(`Ingrese la medida expresada en metros`));

// if (medidaMetros) {

// alert(`Equivale a ${medidaMetros*3.28084} pies`);
// alert(`Equivale a ${medidaMetros*100} centímetros`);
// alert(`Equivale a ${medidaMetros*39.3701} pulgadas`);

// } else {
//   alert("Error");
// };

// EJERCICIO 2

//Solicitar al usuario su edad. Si es menor de 18, decir que es menor de edad, sino decir que es mayor .

// let edad=18;

// if (edad>=18) {
//   alert("Sos mayor de edad");
// } else {
//   alert("Sos menor de edad");
// };

//EJERCICIO 3

// Contexto: Una heladería. Solicitar al usuario sus sabores en un solo input. Luego preguntar si quiere cobertura de chocolate. Si dice Sí, mostrar el valor del helado 180 con el pedido completo: “Su helado sabor …. con cobertura de chocolate cuesta $180”. En caso de que no la requiera, será lo mismo pero sin cobertura de chocolate y el valor es de $150.

// let sabores=prompt("Indique 3 sabores de helado a elección");
// let cobertura=prompt("Desea cobertura de chocolate?");

// if (cobertura==`Si`) {
//   alert(`Su helado sabor ${sabores} con cobertura de chocolate cuesta $180`);
// } else {
//   alert(`Su helado sabor ${sabores} cuesta $150`);
// };

// EJERCICIO 4 

//Mejorar el ejercicio 1 de Variables: Solicitar al usuario dos números y mostrar por consola el resultado de la suma de ambos. Informar al usuario si el número resultante es par o impar.


//Solicitar al usuario dos números y mostrar por alert el resultado de la suma de ambos.

// let primerNro= parseFloat(prompt(`Indicar primer número`));
// let segundoNro= parseFloat(prompt(`Indicar segundo número`));
// let resultado=primerNro+segundoNro;

// alert(`La suma de ambos nros. da ${resultado}`);

// if (resultado%2==0) {
//   alert("El resultado es un número par");
// } else {
//   alert("El resultado es impar");
// }

//EJERCICIO 5

//Solicitar al usuario un número e indicar si es positivo, negativo o cero.

// let numero = prompt("Ingresa un número")

// if(numero < 0 ){
//     alert("El número que acabas de ingresar es Negativo")
// }
// else if (numero > 0 ){
//     alert("El número que acabas de ingresar es Positivo")
// }
// else if(numero === 0){
//     alert("El número que acabas de ingresar es igual a Cero")
// }
// }

//EJERCICIO 6

//Solicitar al usuario que ingrese un monto. Si el monto es mayor a 2000 que aplique un descuento del 10%. Mostrar el total a pagar.

// let monto=prompt("Ingrese un monto");

// if(monto>2000) {
//   alert(`El monto a pagar es ${monto*90/100}`);
// } else {
//   alert("No tiene descuento");
// }

// EJERCICIO 7

//Solicitar al usuario que ingrese una cadena de texto y luego un una posición. Indicar si el dígito de esa posición es vocal o no lo es. (Puede ser consonante, espacio, comilla, etc.)

// if(texto.includes("a"))
// {
//     alert("El texto contiene una a");
// }else
// {
//     alert("No contiene a");
// }

//EJERCICIO 8

//Solicitar al usuario que ingrese una nota del 1 al 10. Si está entre 1 y 3 responder: Aplazado, si está entre 4 y 5 responder: Reprobado , y 6 o más aprobado. 

// let nota=parseFloat(prompt("Ingrese su nota"));

// if (nota>=1 && nota<=3) {
// alert("Usted está aplazado");
// } else if (nota>=4 && nota<=5) {
// alert("Usted está reprobado");
// } else {
// alert("Usted está aprobado!");
// }

// EJERCICIO 9 

// Solicitar al usuario dos números e indicar cual es el mayor o si son iguales.

// let primerNro=parseFloat(prompt(`Ingrese un numero`));
// let segundoNro=parseFloat(prompt(`Ingrese otro numero`));

// if(primerNro>segundoNro) {
//   alert(`El ${primerNro} es mayor que el ${segundoNro}`);
// } else if (primerNro<segundoNro) {
//   alert (`El ${segundoNro} es mayor que el ${primerNro}`);
// } else {
//   alert(`Los numeros ingresados son iguales`);
// };

//EJERCICIO 10

// Solicitar al usuario que indique un mes (del 1 al 12) e indicar si tiene 30 días, 31 días o 28/29 días

// let mes = parseInt(prompt(`Ingrese un mes expresado en numero del 1 al 12`));

// if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12 ) {
//   alert(`El mes ingresado tiene 31 dias`);
// } else if (mes== 4 || mes == 6 ||  mes == 9 || mes == 11) {
//   alert(`El mes ingresado tiene 30 dias`);
// } else {
//   alert(`El mes ingresado es Febrero y tiene 28 o 29 dias dependiendo de si estamos o no en año bisiesto`);
// };

//EJERCICIO 11

// Solicitar al usuario que ingrese 3 números e indicar cual es el mayor.

// let nro1 = parseFloat(prompt(`Ingrese un numero`));
// let nro2 = parseFloat(prompt(`Ingrese otro numero`));
// let nro3 = parseFloat(prompt(`Ingrese un ultimo numero`));

// if (nro1> nro2 && nro1> nro3) {
//   alert(`El primer numero es el mayor`);
// } else if (nro2>nro1 && nro2>nro3) {
//   alert (`El segundo numero es el mayor`);
// } else {
//   alert (`El tercer numero es el mayor`);
// };

// EJERCICIO 12

// Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua).Si pide alcohol y es menor de edad 
// que le salte un alerta indicando que no puede
// realizar la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a
// pagar e indicar cuánto sería su vuelto.
// (Ej: La cerveza cuesta $50 y paga con 100, se le debe devolver $50. Si indica que
// paga con menos de lo que cuesta el producto, indicar un error).

// let edad = parseFloat(prompt(`Ingrese su edad`));
// let bebida = prompt(`Ingrese la bebida de su preferencia.\n 1.Cerveza \n 2.Jugo \n 3.Agua`);

// if (bebida==1 && edad>18) {
//   let pago=parseInt(prompt(`El costo de la bebida elegida es de $100. Indique con cuanto abonara`));
//   if (pago>=100) {
//     alert(`Su vuelto es de $ ${pago-100}`);
//   } else {
//     alert(`El monto ingresado es insuficiente para realizar el pago`);
//   }
// } else if (bebida==2 || bebida==3 && edad>0) {
//   let pago1=parseInt(prompt(`El costo de la bebida ingresada es de $50. Indique con cunato abonara.`));
//   if (pago1>=50) {
//     alert(`Su vuelto es de $ ${pago1-50}`);
//   } else {
//     alert(`El monto ingresado es insuficiente para realizar el pago`);
//   }
// } else {
//   alert(`Usted no puede comprar cerveza por ser menor de edad, recargue la pagina y seleccione otra opcion.`);
// };

// EJERCICIO 13

// Solicitar al usuario un número de mes y devolver el nombre. (Ej: Ingreso 4 y me devuelve “Abril”)

// let mes = parseInt(prompt(`Ingrese un mes expresado en numero.`));

// if(mes == 1) {
//   alert(`El mes ingresado es Enero.`);
// } else if (mes == 2) {
//   alert(`El mes ingresado es Febrero.`);
// } else if (mes == 3) {
//   alert(`El mes ingresado es Marzo.`);
// } else if (mes == 4) {
//   alert(`El mes ingresado es Abril.`);
// } else if (mes == 5) {
//   alert(`El mes ingresado es Mayo.`);
// } else if (mes == 6) {
//   alert(`El mes ingresado es Junio.`);
// } else if (mes == 7) {
//   alert(`El mes ingresado es Julio.`);
// } else if (mes == 8) {
//   alert(`El mes ingresado es Agosto.`);
// } else if (mes == 9) {
//   alert(`El mes ingresado es Septiembre.`);
// } else if (mes == 10) {
//   alert(`El mes ingresado es Octubre.`);
// } else if (mes == 11) {
//   alert(`El mes ingresado es Noviembre.`);
// } else if (mes == 12) {
//   alert(`El mes ingresado es Diciembre.`);
// } else {
//   alert (`El valor ingresado no corresponde a un mes, recargue la pagina e intente nuevamente.`)
// };

// ********** BONUS **********

// BONUS - EJERCICIO 1

// Solicitar al usuario su clave de 4 dígitos (que tendremos almacenada en una variable) y el monto a retirar. Si la clave es correcta y el monto mayor al balance,realizar la operación. Sino, mostrar un mensaje de error en caso de ser la clave incorrecta o pedir más dinero del disponible.

// let clave=1234;
// let saldoInicial=50000;

// let claveIngresada=parseInt(prompt(`Ingrese su PIN numerico.`));

// if (claveIngresada==clave) {
//   let extraccion=parseFloat(prompt(`Ingrese el monto a reitrar`));
//   if (extraccion<=saldoInicial) {
//     alert(`Retire su dinero, su saldo actual es de $ ${50000-extraccion}.`);
//   } else {
//     alert (`Saldo insuficiente para realizar la transaccion, recargue la pagina e intente nuevamente.`)
//   }
// } else {
//   alert(`La clave ingresada es incorrecta, recargue la pagina e intente nuevamente.`)
// };

// BONUS - EJERCICIO 2 

// Solicitar al usuario su día y mes de nacimiento e indicar cual es su signo zodiacal.

// let dia= parseInt(prompt(`Ingrese su dia de nacimiento expresado en Nros.`));
// let mes= parseInt(prompt(`Ingrese su mes de nacimiento expresado en Nros.`));

// if ((dia>=21 && mes==3) || (dia<=19 && mes==4)) {
//   alert(`Su signo zodiacal es ARIES.`);
// } else if ((dia>=20 && mes==4) || (dia<=19 && mes==5)) {
//   alert(`Su signo zodiacal es TAURO.`);
// } else if ((dia>=21 && mes==5) || (dia<=21 && mes==6)) {
//   alert(`Su signo zodiacal es GEMINIS.`);
// } else if ((dia>=22 && mes==6) || (dia<=22 && mes==7)) {
//   alert(`Su signo zodiacal es CENCER.`);
// } else if ((dia>=23 && mes==7) || (dia<=22 && mes==8)) {
//   alert(`Su signo zodiacal es LEO.`);
// } else if ((dia>=23 && mes==8) || (dia<=22 && mes==9)) {
//   alert(`Su signo zodiacal es VIRGO.`);
// } else if ((dia>=23 && mes==9) || (dia<=22 && mes==10)) {
//   alert(`Su signo zodiacal es LIBRA.`);
// } else if ((dia>=23 && mes==10) || (dia<=22 && mes==11)) {
//   alert(`Su signo zodiacal es ESCORPIO.`);
// } else if ((dia>=23 && mes==11) || (dia<=21 && mes==12)) {
//   alert(`Su signo zodiacal es SAGITARIO.`);
// } else if ((dia>=22 && mes==12) || (dia<=20 && mes==1)) {
//   alert(`Su signo zodiacal es CAPRICORNIO.`);
// } else if ((dia>=21 && mes==1) || (dia<=19 && mes==2)) {
//   alert(`Su signo zodiacal es ACUARIO.`);
// } else if ((dia>=20 && mes==2) || (dia<=20 && mes==3)) {
//   alert(`Su signo zodiacal es PISCIS.`);
// } else {
//   alert(`El valor ingresado no corresponde a una fecha del Calendario Gregoriano.`)
// };

// BONUS - EJERCICIO 3

//Solicitar al usuario que ingrese la hora y su nombre. Si son entre las 12 inclusive y 19 saludar con buenas tardes, entre 19 inclusive y 5 buenas noches, y entre 5 inclusive y 12 buenos días.

// let hora= parseFloat(prompt(`Ingrese la hora actual expresada en 24Hs`));
// let minutos=parseFloat(prompt(`Ingrese los minutos`));
// let nombre= prompt(`Ingrese su nombre`);

// if (hora>=5 && hora<=11 && minutos<=59) {
//   alert (`Buenos dias ${nombre}!`)
// } else if (hora>=12 && hora<=18 && minutos<=59) {
//   alert(`Buenas tardes ${nombre}!`);
// } else if (hora>=19 && hora<23 && minutos<=59) {
//   alert(`Buenas noches ${nombre}!`);
// } else if (hora>=0 && hora<=4 && minutos<=59) {
//   alert(`Buenas noches ${nombre}!`);
// } else {
//   alert(`El valor ingresado no corresponde a un horario expresado en 24Hs. Recargue la pagina e intente nuevamente!`);
// };

// EJERCICIOS SOBRE METODOS DE STRINGS 

// 1. Solicitar al usuario que ingrese un texto y validar si contiene la letra “a”.

// let textoRandom=prompt(`Ingrese un texto RANDOM de su preferencia`);

// if(textoRandom.toLocaleLowerCase().includes(`a`)) {
//   alert(`El texto incluye la letra A`);
// } else {
//   alert(`El texto ingresado no contiene la letra A ni una sola vez.`);
// };

// 2. Solicitar al usuario que ingrese un texto y mostrarlo todo en minúsculas y todo en mayúsculas.

// let textoEnMinuscula=prompt(`Ingrese un texto en minuscula.`);
// alert(`${textoEnMinuscula.toUpperCase()}`);

// let textoEnMayuscula=prompt(`Ingrese un texto en mayuscula.`);
// alert(`${textoEnMayuscula.toLowerCase()}`);

// 3. Solicitar al usuario que ingrese una palabra y mostrar con qué letra comienza.

// let palabra=prompt(`Ingrese cualquier palabra`);

// alert(`La palabra ingresada empieza con la letra ${palabra.toUpperCase().charAt(0)}.`);

// 4. Solicitar al usuario que ingrese una frase y mostrar cuántos caracteres tiene.

// let frase=prompt(`Ingrese una frase RANDOM`);
// alert(`La frase ingresada contiene ${frase.length} caracteres incluyendo espacios.`);

//5. Solicitar a un usuario que ingrese un número y devolver cuántos dígitos tiene.

// let numero=prompt(`Ingrese un numero RANDOM.`);
// alert(`El numero ingresado tiene ${numero.length} digitos`);

// 6. Solicitar al usuario que ingrese una palabra y mostrar con qué letra termina.

// let frase = prompt(`Ingrese una frase.`);
// alert(`La ultima letra del texto ingresado es ${frase.charAt(frase.length-1)}`);

// 7. Ingresar una cadena de texto y reemplazar los espacios por asteriscos.

// let frase= prompt(`Ingrese una frase con al menos un espacio.`)

// alert(`${frase.replace(` `, `*`)}`);

// 8. Solicitar al usuario una letra y una cadena de texto e indicar si contiene la letra indicada.

// let frase = prompt(`Ingrese una frase.`);
// let letra = prompt(`Ingrese una letra`);

// if (frase.toUpperCase().includes(letra.toUpperCase())) {
//   alert (`La frase ingresada contiene a la letra ${letra} al menos una vez.`);
// } else {
//   alert(`La frase ingresada no contiene ${letra}`);
// };

// 9. Solicitar un texto y mostrarlo todo menos la primera letra.

// let frase = prompt(`Ingrese una frase.`);
// alert(`${frase.replace(frase.charAt(0), ` `)}`);

// 10. Solicitar al usuario que ingrese su nombre en minúscula y mostrarlo con la primera letra mayúscula.

// let nombre = prompt(`Ingrese su nombre en minusculas.`);
// alert (nombre.charAt(0).toUpperCase() + nombre.slice(1));











 

