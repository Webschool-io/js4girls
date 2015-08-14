# Introdução à Estrutura de Dados

## O que é estrutura de dados?

![](http://www.cassinosbrasil.com.br/wp-content/uploads/2010/02/dados.jpg)

Primeiramente precisamos saber o que é um dado, um dado nada mais é que um valor básico. Como assim?

Pense em um número?

Pensou?

Tá pode esquecer ele agora.

![](http://geradormemes.com/media/created/gp8czx.jpg)

**#brinks**

Nesse caso o número é um dado do tipo Number ou inteiro, dependendo da linguagem. Levando isso em consideração então podemos deduzir que palavras também são dados, correto?

Corretíssimo! E esse tipo de dado se chama `String`, prazer.

![String cheese hmmmmm](http://www.quickmeme.com/img/52/521b344514500c3f89fe1f372149331d0bae6865669343a74707d539373eea69.jpg)

Especificamente no JavaScript temos os seguintes tipos de dados:

- null;
- String;
- Number;
- Boolean;
- Array.

Com um adendo especial para o:

- undefined.

### null / nulo

O valor `null` é um literal em JavaScript que representa um valor nulo ou "vazio" (p/ex: que aponta para um objeto inexistente).

### undefined

O valor `undefined` representa um valor indefinido.

### Diferenças entre null e undefined

Basicamente a diferença entre eles é que o `null` é um tipo de objeto e o `undefined` é um valor, podemos verificar isso analisando o código abaixo:

```js
typeof null        // object
typeof undefined   // undefined
null === undefined // falso
null  == undefined // verdadeiro
```


### String

String é o tipo utilizado para armazenar textos. Uma das operações mais usadas nas strings é checar seu tamanho, para concatená-las  usamos os operadores `+` e `+=`. Para checar pela existência ou posição de substrings usamos o método `indexOf` e para extrair substrings com o método `substring`.

#### Acesso à um caractere

Há duas maneiras de acessar um caráter individual em uma string. A primeira é o método charAt:

```js
return 'cat'.charAt(1); // retorna "a"
```
A outra maneira (introduzido no ECMAScript 5) consiste em tratar a string como um objeto Array-like, onde os caráteres individuais correspondem a um índice numérico:

```js
return 'cat'[1]; // retorna "a"
```

#### Comparando strings

No JavaScript, basta usar o operador maior que e menor que:

```js
var a = "a";
var b = "b";
if (a < b) // true
  console.log(a + " é menor que " + b);
else if (a > b)
  console.log(a + " é maior que " + b);
else
  console.log(a + " e " + b + " são iguais.");
```

### Number

O tipo `Number` é utilizado, como vimos anteriormente, para armazenar números e para isso também temos duas formas diferentes de fazê-lo:


```js
var numero = 420;
typeof numero; // "number"

```
Agora criando ele com o construtor `Number`.

```js
var numero = new Number(420);
typeof numero; // "object"
```


The Number JavaScript object is a wrapper object allowing you to work with numerical values. A Number object is created using the Number() constructor.

### Boolean


### Array




