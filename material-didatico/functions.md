##Funções

Uma função é um conjunto de códigos utilizados para executar uma determinada tarefa. Seu principal objetivo é evitar que um trecho de código seja repetido sempre que for preciso efetuar uma operação.

###Sintaxe

Para criar uma função você usará o seguinte código:
```js
  function nome (parametro) {
    //código a ser executado
  }
```

Assim como é usado a palavra reservada `var` para criar uma variável, a função também necessita de uma palavra reservada, a `function`.

Na primeira linha é criada uma função através da palavra `function`, em seguida temos o nome da função - que será usado para invocá-la. O nome da função pode ser qualquer palavra, que não seja uma [palavra reservada do JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords), e pode conter letras, dígitos, underlines e cifrões.

Após o nome da função temos paramêtros entre parênteses. O uso de parênteses indica que uma função está sendo usada e entre eles existe a palavra `parametro`, que será explicada [aqui](#parâmetros-e-argumentos).

O código a ser executado pela nossa função é escrito entre chaves. No nosso código as chaves começam no final da primeira linha e terminam na última linha. Tudo que estiver dentro destas chaves fará parte do escopo da função.

###Parâmetros e Argumentos

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

###Retorno

Uma função pode ser criada para efetuar cálculos ou executar rotinas. Quando o objetivo de uma função não é executar uma rotina, mas sim processar dados, é comum que ela faça um retorno. No JavaScript esse retorno é dado pela palavra `return` seguida pelo dado que ela vai retornar.

No exemplo anterior o `return` foi usado para retornar o valor da multiplicação do parâmetro x pelo parâmetro y.

```js
...
return x * y;
...
```

###Invocando uma função

Uma vez que a função já foi criada, ela pode ser invocada da seguinte maneira:

```js
nomeDaFuncao(parametro1, parametro2);
```

Uma função também pode ter seu valor de retorno associado à uma variável. Da seguinte forma:

```js
var resultado = nomeDaFuncao(parametro1, parametro2);
```