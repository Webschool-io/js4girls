## Funções

Uma função é um conjunto de instruções utilizadas para executar uma determinada tarefa. Seu principal objetivo é evitar que um trecho de código seja repetido sempre que for preciso efetuar uma operação.

Imagine comigo que todo dia quando você acorda e vai escovar os dentes, precisa:

1. pegar escova de dente
2. pegar pasta de dente
3. abrir pasta de dente
4. colocar pasta de dente na escova
5. escovar os dentes
6. enxaguar a boca
7. cuspir

Agora imagine se em vez de você fazer esse passo-a-passo todo o dia pudesse apenas rodar uma função onde você inicia com os dentes sujos e sai com eles limpinhos.

![](http://schwererdentalcare.com/wp-content/uploads/2013/01/white-teeth.png)

Para isso serve uma função, toda vez que você repetir algum código, muito provavelmente ele pode ser encapsulado em uma função.

### Sintaxe

Para criar uma função você usará o seguinte código:

```js
function nome ( parametro ) {
  //código a ser executado
}
```

Assim como é usado a palavra reservada `var` para criar uma variável, a função também necessita de uma palavra reservada, a `function`.

Na primeira linha é criada uma função através da palavra `function`, em seguida temos o nome da função - que será usado para invocá-la. O nome da função pode ser qualquer palavra, que não seja uma [palavra reservada do JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords), e pode conter letras, dígitos, underlines e cifrões.

Após o nome da função temos paramêtros entre parênteses. O uso de parênteses indica que uma função está sendo usada e entre eles existe a palavra `parametro`, que será explicada [aqui](#parâmetros-e-argumentos).

O código a ser executado pela nossa função é escrito entre chaves. No nosso código as chaves começam no final da primeira linha e terminam na última linha. Tudo que estiver dentro destas chaves fará parte do escopo da função.

### Parâmetros e Argumentos

Quando uma função é criada, no JavaScript, ela pode ou não receber dados que serão processados. Esses dados, no momento de criação da função, são chamados de _parâmetros_. Os parâmetros são variáveis que vão transmitir algum valor(argumento) para o código executado dentro da função. Se for necessário o uso de mais de um parâmetro na criação da função, eles devem ser separados por vírgula(,).

Os argumentos são os valores passados no momento de invocação da função, esses valores podem fazer parte de qualquer [tipo de dado](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Valores).

Criando uma função de boas vindas com um parâmetro e uma função de multiplicar com 2 parâmetros:

```js
//Função de boas vindas
function boasVindas (nome) {
	return "Eu estou feliz por você estar aqui, " + nome;
}

// Função que multiplica dois valores
function multiplicar (x, y) {
	return x * y;
}
```

Chamando a função de boas vindas passando um nome como argumento e a função multiplicar passando 2 números argumentos:

```js
//Invocando a função boasVindas(nome)
boasVindas("Joana"); //Eu estou feliz por você estar aqui, Joana;

//Invocando a função multiplicar(x, y)
multiplicar(5, 2); //10
```

Uma função também pode receber o valor de uma variável como argumento. A função de boas vindas seria invocada da seguinte maneira:

```js
//Criando a variável 'meuNome'
var meuNome = "Joana";
//Invocando a função boasVindas(nome)
boasVindas(meuNome); //Eu estou feliz por você estar aqui, Joana
```

> Nota: Para passar uma string como um argumento direto para uma função, como em `boasVindas("Joana");`, é necessário que este valor esteja entre aspas. Se essa função receber como argumento um valor de texto sem aspas, a função vai interpretar o argumento como uma variável, podendo gerar erros inesperados.

**[Exercício] Crie uma função que calcule o quadrado de um número. Não precisa retornar um valor, apenas calcular.**

### Retorno

Uma função pode ser criada para efetuar cálculos ou executar rotinas. Quando o objetivo de uma função não é executar uma rotina, mas sim processar dados, é comum que ela faça um retorno. No JavaScript esse retorno é dado pela palavra `return` seguida pelo dado que ela vai retornar.

No exemplo anterior o `return` foi usado para retornar o valor da multiplicação do parâmetro x pelo parâmetro y.

```js
...
return x * y;
...
```

### Invocando uma função

Uma vez que a função já foi criada, ela pode ser invocada da seguinte maneira:

```js
nomeDaFuncao(parametro1, parametro2);
```

**[Exercício] Crie uma função para calcular o IMC e invoque-a passando dois argumentos.**
<br>
_Cálculo do IMC: peso / (altura * altura)_

Uma função também pode ter seu valor de retorno associado à uma variável. Da seguinte forma:

```js
var resultado = nomeDaFuncao(parametro1, parametro2);
```

Vamos re-utiliar um exemplo passado, de multiplicar, agora dessa forma:

```js
var multiplicar = function (x, y) {
	return x * y;
}
```
Além disso nós também podemos passar uma função como argumento, assim como podemos também retornar uma função.

![WAT!?](https://raw.githubusercontent.com/Webschool-io/js4girls/master/material-didatico/images/wat-functions.jpg)

Porém como esse assunto já sai do escopo dessa primeira aula eu lhe aconselho a posteriormente fazer o [Curso de JavaScript Funcional GRATUITO](https://github.com/Webschool-io/workshop-js-funcional-free) para maior entendimento sobre isso.

**[Exercício] Crie duas variáveis, uma para armazenar o valor do `peso` e a outra para `altura`. Feito isso, crie uma função para calcular o IMC e invoque-a passando as duas variáveis criadas como argumentos. Associe o retorno dessa função à uma variável chamada `resultadoIMC`**
