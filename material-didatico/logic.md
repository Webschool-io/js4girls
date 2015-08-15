# Introdução à lógica

## O que é lógica de programação?

Lógica de Programação é a técnica de desenvolver sequências lógicas para atingir um determinado objetivo. Essas sequências lógicas são adaptadas para linguagem de computador pelo programador a fim de produzir um sistema. Essa sequência lógica é denominada algoritmo.

### Sequência Lógica

> Bata as claras em neve
> 
> Reserve
> 
> Bata bem as gemas com a margarina e o açúcar
> 
> Acrescente o leite e farinha aos poucos sem parar de bater

> Por último agregue as claras em neve e o fermento

> Coloque em forma grande de furo central untada e enfarinhada

> Asse em forno médio, preaquecido, por aproximadamente 40 minutos

> Quando espetar um palito e sair limpo estará assado

![](http://brasileiraemannarbor.com/wp-content/uploads/2013/10/IMG_6391-500x333.jpg)

Sim a sequência lógica é como uma receita de bolo, você deve dizer passo-a-passo o que o computador deve fazer, também conhecido como **algoritmo** ele será seu guia para a solução de problemas.

### Algoritmo

Um algoritmo é formalmente uma seqüência finita de passos que levam a execução de uma
tarefa. Podemos pensar em algoritmo como uma receita, uma seqüência de instruções que dão
cabo de uma meta específica. Estas tarefas não podem ser redundantes nem subjetivas na sua
definição, devem ser claras e precisas.
Como exemplos de algoritmos podemos citar os algoritmos das operações básicas (adição,
multiplicação, divisão e subtração) de números reais decimais. 

Até mesmo as coisas mais simples, podem ser descritas por seqüências lógicas. Por exemplo:

> “Chupar uma bala”.
> 
> • Pegar a bala
> 
> • Retirar o papel
> 
> • Chupar a bala
> 
> • Jogar o papel no lixo

**[Exercício] Tendo esse conhecimento agora você deverá criar o *seu* algoritmo de tomar banho, no mínimo 4 e no máximo 10 passos.**


É a partir do algortimo que desenvolvemos o código em alguma linguagem de programação, já que para o algoritmo nós usamos uma linguagem mais natural, caso queiramos fazer um algoritmo mais acadêmico podemos utilizar o [Portugol](https://pt.wikipedia.org/wiki/Portugol).

Vamos ver esse exemplo de conferir a maioridade:

```
inicio
   escreva("Qual sua idade?")
   leia(idade)
   se idade > 18 então
		escreva("Maior de idade")
	senão
		escreva("Menor de idade")
	fimse
fim
```

Com isso vemos que o Portugol possui uma sintaxe mais próxima à das linguagens de programação. Nesse módulo iremos conhecer exatamente quais são os comandos do JavaScript que vão nos auxiliar nessa tarefa.

Não vamos nos aprofundar nesse tema porém tenha em mente que você fará ele muitas vezes mentalmente, mas no início é melhor colocar o pensamento no papel antes de passar para linguagem de programação.

### Instruções

Em informática uma instrução é a informação que indica a um computador uma ação
elementar a executar, convém ressaltar que uma ordem/instrução isolada não permite realizar o processo completo, para isso é necessário um conjunto de instruções colocadas em ordem seqüencial lógica.

A instrução mais simples que temos no JavaScript é uma atribuição de valor. E isso significa o que?

Basicamente que quando criarmos uma variável e definirmos um valor para ela, estamos atribuindo a ela esse valor e para isso usamos o `=`:

```js
// Exemplo
var evento = "JS4Girls"
```

Nesse caso utilizamos a palavra `var` para criar uma variável nomeada de `evento` com o valor inicial igual a `JS4Girls`.

**E por que nomeamos uma variável?**

![Porque sim zequinha!](http://geradormemes.com/media/created/a05qv3.jpg)

Porque sim não é resposta!

Mas então por que nomeamos uma variável?

É para que possamos utilizar o seu valor em outras partes do nosso programa.Sabendo disso vamos agora conhecer um tipo especial para essa variável, o tipo `Boolean`.

### Boolean
Boolean é o nome desse tipo de variável, que é um tipo lógico, dado em homenagem da lógica booleana, George Boole. Esse tipo de lógica algébrica é simples de entender pois ela possuia apenas doisa valores:

- verdadeiro / true / 1
- falso / false / 0

 **Você deve se perguntar, mas como assim funciona apenas com esses dois valores?**

Você precisa pensar em abstrair o valor e transformar ele em verdadeiro ou falso.

**Mas como assim?**

Analisemos a seguinte afirmação:

> Suissa tem 30 anos.

O que você pode abstrair de verdadeiro ou falso dessa afirmação?

Exatamente o que vimos no algoritmo de Portugol, que o Suissa é maior de idade. Basicamente é dessa forma que devemos pensar quando formos programar.

Um outro exemplo bem simples é:

> Preciso ir para a Avenida Brasil e pergunto para o GPS onde estou e ele responde: 
> - Avenida Uruguai. 

Nesse caso nossa abstração dá?

**Falso!**

Podemos analisar como um algoritmo:

```
local = leiaGPS()
se local <> "Avenida Brasil"
	retorne falso
senão
	retorne verdadeiro
```

Entendeu? No caso o símbolo `<>` é utilizado como **diferente**.

Vamos pegar uma situação real onde você pretende ir à praia. 
A decisão a ser tomada, então, é se a afirmação “vou à praia” será verdadeira ou falsa. Sabe-se que não é conveniente ir à praia com chuva. A condição, então, é estar ou não chovendo. Para tomar a decisão será preciso investigar a condição, verificando se a afirmação “Está chovendo” é verdadeira ou falsa. E como você somente irá à praia se NÃO estiver chovendo, a condição será tomada baseada na aplicação do operador NOT (que inverte o valor verdadeiro ou falso da resposta).

> (vou à praia) = [NOT (está chovendo)]

Suponha que não esteja chovendo. Então:

> (está chovendo) = (FALSO)

Portanto:

> [NOT (está chovendo)] = [NOT (FALSO)] = VERDADEIRO

O que significa que o segundo termo da equação é VERDADEIRO. Substituindo este valor na equação e levando em conta a igualdade, teremos:

> (vou à praia) = VERDADEIRO


Agora que entendemos o conceito de `booleano` vamos aprender as operações básicas que podemos fazer com esse valor.

#### AND / E

O `E`  é um operador lógico que irá testar 2 premissas onde o retorno dela só será verdadeira **se todas as proposições forem verdadeiras**.

Exemplo:

``` 
Suissa é professor E Suissa é homem.
```

Se tivermos apenas uma proposição **falsa** toda a operação retornará o valor falso.

Então no `E` lógico **TODAS AS PROPOSIÇÕES PRECISAM SER VERDADEIRAS** para que ele seja verdadeiro.

Vejamos um exemplo real onde queremos ir ao cinema, porém para que isso aconteça precisamos ter dinheiro e estar de folga, então vamos montar a expressão:

> [(estou de folga) AND (tenho dinheiro)]

Como primeiro termo é sempre a decisão a ser tomada. Logo, a equação lógica cuja solução decidirá se você irá ou não ao cinema será:

> (vou ao cinema) = [(estou de folga) AND (tenho dinheiro)]

Para obter os resultados possíveis da operação `AND` vamos aplicar a ela as leis da lógica digital usando todas as combinações possíveis dos valores VERDADEIRO e FALSO (não vai dar muito trabalho, são apenas quatro).  Aqui estão:

> [FALSO] AND [FALSO] = FALSO
> 
> [FALSO] AND [VERDADEIRO] = FALSO
> 
> [VERDADEIRO] AND [FALSO] = FALSO
> 
> [VERDADEIRO] AND [VERDADEIRO] = [VERDADEIRO]


**[Exercício] Monte uma operação lógica E com 3 premissas onde uma delas é falsa e as outras verdadeiras. E aplique os valores lógicos em cada proposição para mostrar seu resultado.**

#### OR / OU

O `OU` é um operador lógico que irá testar 2 premissas onde o retorno dela só será verdadeira **se pelo menos uma proposição for verdadeira**.

Exemplo:

``` 
Suissa é contador OU Suissa é homem.
```

Se tivermos apenas uma proposição **verdadeira** toda a operação retornará o valor verdadeiro.

Então no `OU` lógico **PELO MENOS UMA PROPOSIÇÃO PRECISA SER VERDADEIRAS** para que ele seja verdadeiro.


(saio de casa) = (balada) OR (barzinho)

Nesse caso se eu receber um convite tanto para a balada como para o barzinho eu irei sair de casa, melhor se receber os 2 :p

**[Exercício] Monte uma operação lógica OU com 3 premissas onde uma delas é falsa e as outras verdadeiras. E aplique os valores lógicos em cada proposição para mostrar seu resultado.**

#### NOT / NEGAÇÃO

A operação de negação é exatamente o que você acha que ela faz, ela **NEGA** aquele valor e fazendo isso então ela o inverte.

No caso se você negar o falso ele se tornará verdadeiro e vice-versa.

```
~ Suissa é contador
```

Utilizando o `~` como negação temos na afimação acima a seguinte resposta:

> Suissa **não** é contador

(tomar banho) = [NOT (frio)]

Com o operador `NOT` estou dizendo que só tomarei banho se não estiver frio. Mas nada que um aquecedor e duas toalhas não resolvam né? :p

**[Exercício] Monte uma operação lógica OU com 3 premissas onde uma delas é falsa, uma é verdadeira e a outra pode ser qualquer valor porém utilizando o NOT. E aplique os valores lógicos em cada proposição para mostrar seu resultado.**

Depois de conhecer essas operações básicas já podemos começar a testar nos proposições.

#### if / se

O `if` é a operação que irá testar nossos valores, como vimos anteriormente na parte do algoritmo. Agora vamos aprender a utilizá-la em conjunto com nossos valores booleanos.

A sintaxe para utilização do `if` é:

```js
if( proposições ) {
  // meu código
}
```

Perceba então que o seu código dentro do `if` só será executado se o resultado das proposições for verdadeiro. É aí que aplicaremos nosso conhecimento anterior. Vamos analisar esse exemplo:

```js
var idadeSuissa = 30;

if(idadeSuissa > 18) {
	console.log('MAIOR DE IDADE');
}

```

Está lembrando desse código? Pois nós já o fizemos anteriormente:

```python
inicio
   escreva("Qual sua idade?")
   leia(idade)
   se idade > 18 então
		escreva("Maior de idade")
	senão
		escreva("Menor de idade")
	fimse
fim
```

Claro que ainda falta a parte do senão, então vamos ver ela agora.

##### else / senão

O `else` é a negação do `if`, ou seja, quando o resultado das proposições for falso e o programa não entrar no bloco do `if`, ele entrará no bloco do `else` assim executando o código que ali estiver. Exemplo:


```js
var idadeSuissa = 30;

if(idadeSuissa >= 18) {
	console.log('MAIOR DE IDADE');
}
else {
	console.log('MENOR DE IDADE');
}
```

**[Exercício] Escreva um código que irá receber o ano que você nasceu em uma variável chama idade e irá testar se é maior que 1996, caso sim exiba a mensagem: "OK vc é de maior". Caso não,  exiba: "Proibida entrada!"**

#### else if

O `else if` nada mais é que mais um teste de `if` porém só é executado no `else`, ou seja, apenas se o primeiro `if` for falso.

```js
if (tempo < 13) {
    saudacao = "Bom dia";
} else if (tempo < 19) {
    saudacao = "Boa tarde";
} else {
    saudacao = "Boa noite";
}
```

Podemos notar então que se forem menos de 13 horas será `Bom dia`, se for mais, porém for menos de 19 horas será `Boa tarde`, se não será `Boa noite`. Simples não?


**[Exercício] Escreva um código que irá receber o sexo de um cliente de uma boate e irá testar o sexo para definir o valor do ingresso. 
Se for mulher retorne: 15. 
Se não for mulher e for homem, retorne 25.
Se não mostre a mensagem: "Sexo indefinido".**

#### switch

Você deve ter percebido que agora nós começamos a ter mais testes lógicos e com o acréscimo deles nosso `if` começa a ficar sobrecarregado e quando isso acontece o `switch` vem para nos salvar.

O `switch` serve para testarmos várias condições e executar o código necessário, para entender melhor vamos analisar o código abaixo:

```js
var estadoCivil = prompt("Qual seu estado civil?");

switch(estadoCivil) {
	case 'solteira':
		console.log("Bora pra festa?");
	break;
	case 'casada':
		console.log("Parabéns pelo casamento!");
	break;
	case 'divorciada':
		console.log("Deve ser um alívio!");
	break;
	case 'viúva':
		console.log("Meus pesames!");
	break;
	default: console.log("Complicado");
}
```

Nesse código testamos o valor que recebemos em `estadoCivil` com diferentes valores, como:

- solteira
- casada
- divorciada
- viúva

Utilizando a instrução `default` para executar um código quando nenhum dos outros `cases` foi verdadeiro. Dessa forma deixando nosso código mais simples e claro do que se colocássemos um monte de `else if`, não é?

![OH GOD YES MEME](http://i1.kym-cdn.com/photos/images/newsfeed/000/581/075/fe2.png)

E a partir do código logo notamos que a sintaxe para utilização do mesmo é:

```js
switch( proposição ) {
	case 'estado1':
		// faz algo
	break;
	case 'estado2':
		// faz algo
	break;
	case 'estado3':
		// faz algo
	break;
	default: // faz outra coisa
}

```
#### while

Já aprendemos que um algoritmo é uma sequencia de passos com objetivo de se chegar a um resultado. Em muitos casos precisamos repetir um certo "passo", para facilitar nossa vida temos os laços de repetição. Podemos repetir um bloco de comandos quantas vezes necessário.

A sintaxe para utilização do while é:

```js
while( proposição ) {
	//seu código
}
```

Isso significa que o código ali dentro rodará toda vez que a proposição for verdadeira, vamos ver esse exemplo a seguir:

```js
var numero = 1;

while(numero <= 10) {
	console.log(numero);
	numero++;
}
```

Nesse código estamos apenas mostrando os números de 1 até 10, onde a proposição `numero <= 10` é verdadeira apenas até a variável `numero` tiver o valor de 10, quando ela receber o valor 11 e chegar naquele teste novamente o programa irá sair desse loop(iteração).

**[Exercicio] Escreva um código onde inicie um número com o valor 0 e vá até 20, mostrando apenas os valores pares.**

#### do while

Muito parecido com o `while`, porém com a diferença de que ele **sempre** irá executar o primeiro passo. Utilizando o mesmo código anterior, agora ficará:

```js
var numero = 1;

do {
	console.log(numero);
	numero++;
} while(numero <= 10);
```

O `do while` é muito utilizado quando precisamos fazer certas checagens obrigatórias antes de começar alguma execução.

**[Exercicio]**


#### for

O `for` é o loop mais comumente utilizado pois ele te "facilita" deixando mais claro o passo-a-passo da iteração. Em português nós dizemos:

> para ... faça

Que significa:

```js
for(inicialização; condição; expressão final) {
	// seu código
}
```
Vamos traduzir isso para o JavaScript:

```js
for(var numero = 1; numero <= 10; numero++) {
	console.log(numero);
}
```

E pronto está dando o mesmo resultado que os exemplos dos outros loops, então basicamente é apenas uma forma diferente de escrever a mesma coisa.

Agora vamos analisar com mais calma o que está acontecendo na linha do `for`. Na primeira parte `var numero = 1` estamos iniciando uma variável que será usada na nossa condição, logo após temos nossa condição `numero <= 10` que será o teste que o for fará toda iteração para saber se ele entra para executar o código ou sai fora do loop. E finalmente a expressão `numero++` que está incrementando, adicionando, 1 cada vez que o for é executado, fazendo assim o número subir toda iteração.

Mas também temos formas diferentes de escrever o mesmo for, confira logo abaixo:

```js
var numero = 1;
for(; numero <= 10; numero++) {
	console.log(numero);
}
```
Nesse caso acima como já inicializamos a variável `numero` antes do `for`, não precisamos fazer isso novamente nele, por isso a primeira parte pode ficar vazia, agora veja o código abaixo:

```js
for(var numero = 1; ; numero++) {
	if(numero > 10) break;
	console.log(numero);
}
```

No código acima estamos omitindo a nossa condição nesse caso o for ficará rodando para sempre, se não fosse o nosso teste interno `if(numero > 10) break;` que o faz sair(break) quando o `numero` for maior que 10. Percebeu que agora usamos a lógica inversa, pois antes testávamos se o `numero` era menor ou igual a 10 para que o `for` continuasse iterando.

Mas também podemos omitir as 3 partes:

```js
var numero = 1
for(; ; ) {
	if(numero > 10) break;
	console.log(numero);
	numero++;
}
```

Dessa forma você precisa garantir que inicializou a variável fora do `for`, que vai testar a variável e dar o `break` no `for` quando necessário e não esquecer de incrementar a variável `numero`.


**[Exercicio] Escreva um código que multiplique um número sempre pelo seu próximo, com valor máximo de 10, escreva utilizando as 4 formas apresentadas acima.**

