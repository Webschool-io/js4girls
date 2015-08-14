# Introdução à lógica

## O que é lógica de programação?

Lógica de Programação é a técnica de desenvolver sequências lógicas para atingir um determinado objetivo. Essas sequências lógicas são adaptadas para linguagem de computador pelo programador a fim de produzir um sistema. Essa sequência lógica é denominada algoritmo.

### Instruções

Em informática uma instrução é a informação que indica a um computador uma ação
elementar a executar, convém ressaltar que uma ordem/instrução isolada não permite realizar o processo completo, para isso é necessário um conjunto de instruções colocadas em ordem seqüencial lógica.

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

Sim a sequência lógica é como uma receita de bolo, você deve dizer passo-a-passo o que o computador deve fazer, também conhecido como **algoritmo** ele será seu guia para a solução de problemas.

#### Algoritmo

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

**[Exercício]**

**Tendo esse conhecimento agora você deverá criar o **seu** algoritmo de quando sai da cama, no mínimo 4 e no máximo 7 passos.**


É a partir do algortimo que desenvolvemos o código em alguma linguagem de programação, já que para o algoritmo nós usamos uma linguagem mais natural, caso queiramos fazer um algoritmo mais acadêmico podemos utilizar o [Portugol](https://pt.wikipedia.org/wiki/Portugol).

Vamos ver esse exemplo de conferir a maioridade:

```
inicio
   escreva("Olá, Mundo!")
   leia(idade)
   se idade > 18 então
		escreva("Maior de idade")
	senão
		escreva("Menor de idade")
	fimse
fim
```

Nisso vemos que o Portugol possui uma sintaxe mais próxima à das linguagens de programação.

Nesse módulo iremos conhecer exatamente quais são os comandos do JavaScript que vão nos auxiliar nessa tarefa.

Não vamos nos aprofundar nesse tema porém tenha em mente que você fará ele muitas vezes mentalmente, mas no início é melhor colocar o pensamento no papel antes de passar para linguagem de programação.

### Instruções

A instrução mais simples que temos no JavaScript é uma atribuição de valor. E isso significa o que?

Basicamente que quando criarmos uma variável e definirmos um valor para ela, estamos atribuindo a ela esse valor e para isso usamos o `=`:

```
// Exemplo
var evento = "JS4Girls"
```

Nesse caso utilizamos a palavra `var` para criar uma variável nomeada de `evento` com o valor inicial igual a `JS4Girls`.

**E por que nomeamos uma variável?**

![Porque sim zequinha!](http://geradormemes.com/media/created/a05qv3.jpg)

Porque sim não é resposta!

Mas então por que nomeamos uma variável?

É para que possamos utilizar o seu valor em outras partes do nosso programa.Sabendo disso vamos agora conhecer um tipo especial para essa variável, o tipo `Boolean`.

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

Agora que entendemos o conceito de `booleano` vamos aprender as operações básicas que podemos fazer com esse valor. 


#### AND / E

O `E` lógico é uma operação onde o retorno dela só será verdadeira **se todas as proposições forem verdadeiras**.

Exemplo:

``` 
Suissa é professor E Suissa é homem.
```

Se tivermos apenas uma proposição **falsa** toda a operação retornará o valor falso.

Então no `E` lógico **TODAS AS PROPOSIÇÕES PRECISAM SER VERDADEIRAS** para que ele seja verdadeiro.

#### OR / OU

O `OU` lógico é uma operação onde o retorno dela só será verdadeira **se pelo menos uma proposição for verdadeira**.

Exemplo:

``` 
Suissa é contador OU Suissa é homem.
```

Se tivermos apenas uma proposição **verdadeira** toda a operação retornará o valor verdadeiro.

Então no `OU` lógico **PELO MENOS UMA PROPOSIÇÃO PRECISA SER VERDADEIRAS** para que ele seja verdadeiro.

#### NOT / NEGAÇÃO

A operação de negação é exatamente o que você acha que ela faz, ela **NEGA** aquele valor e fazendo isso então ela o inverte.

No caso se você negar o falso ele se tornará verdadeiro e vice-versa.

```
~ Suissa é contador
```

Utilizando o `~` como negação temos na afimação acima a seguinte resposta:

> Suissa **não** é contador

Depois de conhecer essas operações básicas já podemos começar a testar nos proposições.


#### if
#### else if
#### switch
#### while
#### do while
#### for