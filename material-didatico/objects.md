## Objetos

A linguagem de programação JavaScript é orientada a objetos e trabalha com variáveis de objetos. Um objeto é uma coleção de propriedades, mas o que é uma propriedade? Propriedade é uma associação entre um nome e um valor, isso mesmo, é simplesmente uma ligação. Um valor de propriedade também pode ser uma função, que é então considerada um método daquele objeto. 
Além dos objetos que são pré-definidos da linguagem, você pode definir seus próprios objetos de forma independente para resolver a necessidade de seu projeto.

### Visão geral de objetos

Objetos podem ser comparados com objetos na vida real. Seu conceito pode ser entendido com objetos tangíveis da vida real.

Em JavaScript, um objeto é uma a entidade independente, com **propriedades** e **tipo**. Compare-o com um carro, por exemplo. Um carro é um objeto, porém, o mesmo possui várias propriedades. Um carro tem uma cor, um modelo, peso, marca, tipo de combustível, etc. De mesma forma, objetos em JavaScript podem ter propriedades, que definem suas características.

![Exemplo](objects-img1.jpg)

### Objetos e propriedades

Um objeto em JavaScript tem propriedades associadas a ele. Uma propriedade de um objeto pode ser explicada como uma variável que é ligada ao objeto. Propriedades de objetos são basicamente as mesmas que variáveis normais em JavaScript, exceto pelo fato de estarem ligadas a objetos. As propriedades de um objeto definem as características do objeto.
Além disso cada propriedade de um objeto pode ter propriedades também. Por exemplo, no objeto carro podemos ter a propriedade motor. Mas a propriedade motor pode ter várias propriedades, como potencia, tipo combustivel, etc. Mas não se preocupe, vamos ver mais sobre propriedades de propriedades mais abaixo.

Você acessa as propriedades de um objeto com uma simples notação de ponto:

```
nome_do_objeto.nome_da_propriedade
```
Não se esqueça que o JavaScript é **case sensitive**, tanto o nome do objeto quanto um nome de propriedade diferem em maiúsculas/minúsculas (por exemplo, cor e Cor são propriedades diferentes). Você pode definir uma propriedade atribuindo um valor a ela. Por exemplo, vamos criar um objeto chamado meuAviao e dar a ele propriedades chamadas modelo, fabricante e ano, conforme mostrado a seguir:

```
var meuAviao = new Object();
meuAviao.fabricante = "Airbus";
meuAviao.modelo = "A380";
meuAviao.ano = 2012;
```
Propriedades de objetos também podem ser acessadas ou alteradas usando-se notação de colchete. O código abaixo mostra como usar colchetes:

```
meuAviao["fabricante"] = "Airbus";
meuAviao["modelo"] = "A380";
meuAviao["ano"] = 2012;
```
**[Exercicio]**

**Crie um objeto e chame ele de "MeuVestido". Em seguida crie as seguintes propriedades: "Cor","Tamanho","Marca" e "Tipo" (Curto ou longo).**

### Criando novos objetos

Além de alguns objetos predefinidos (Date, Array, String) e objetos predefinidos do browser (Window, Document, Navigator) você pode criar seus próprios objetos. Não se preocupe com os objetos predefinidos que eles serão vistos mais adiante. Existem algumas formas de você criar um objeto, pode ser utilizando um inicializador de objeto, utilizando uma função construtora ou utilizando o método Object.create. Vamos ver os três logo abaixo:

**Usando inicializadores de objeto**

O uso de inicializadores de objeto é às vezes conhecido como criar objetos com notação literal. A sintaxe para um objeto usando-se um inicializador de objeto é:
```
var meuObjeto = {propriedade1: "valor_da_propriedade1", propriedade2: "valor_da_propriedade2", propriedade3: "valor_da_propriedade3"};
```
Repare que utilizamos 3 propriedades, mas poderiamos ter utilizando N propriedades se fosse necessário. E tem mais um detalhe show de bola, uma propriedade pode ter suas próprias propriedades. Veja que o exemplo abaixo cria o objeto minhaHonda com três propriedades. Note que a propriedade motor é também um objeto com suas próprias propriedades.
```
var minhaHonda = {cor: "rosa", rodas: 2, motor: {cilindros: 3, potencia: 125, combustivel: "Gasolina"}};
```

**Usando uma função construtora**

Alternativamente, você pode criar um objeto com estes dois passos:

* Defina o tipo de objeto escrendo uma função construtora. Há uma forte convenção, e com boa razão, de se usar uma letra inicial maiúscula.
* Crie uma instância do objeto com *new*.

Para definir um tipo de objeto, crie uma função para o tipo de objeto que especifique seu nome, suas propriedades e seus métodos. Por exemplo, suponha que você criar um tipo objeto para carros. Você quer que esse tipo de objeto seja chamado carro, e você quer ele tenha propriedades de marca, modelo e ano. Para fazer isto, você escreveria a seguinte função:

```
function Carro(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}
```
Note o uso de *this* para atribuir valores às propriedades do objeto com base nos valores passados para a função.

Agora você pode criar um objetos simplesmente chamando a função meucarro como se segue:
```
var meucarro = new Carro("Eagle", "Talon TSi", 1993);
var meucarro2 = new Carro("Corola", "Xi", 2014);
```

***Usando o método Object.create***

Esse terceiro método não será apresentado pois não haverá tempo suficiente para a conclusão da apresentação. Mas nesse [Link](https://msdn.microsoft.com/pt-br/library/ff925952(v=vs.94).aspx) é possível entender como utilizar a função Object.create. Dever de casa hein, tem que fazer mesmo, pois além de aprender o método é possível ver como funcionam as documentações das linguages e vocês já vão se familiarizando com o formato.

### Tipeof

É um método nativo do Javascript, se formos ler a documentação vamos encontrar isso: "O operador typeof retorna uma string indicando o tipo de um operando." Simplesmente vai dizer o que é aquilo, um número, um objeto, uma array... Parece simples né? Infelizmente não é tão simples assim, vamos lá!

O comportamento esperado com o Operador typeof seria o retorno de uma String indicando o tipo do Operando avaliado. Entretanto, o typeof tem um comportamento "inesperado" no JavaScript, sendo quase uma bruxaria! Uma mística em torno do seu poder que vamos decifrar ainda hoje:

```
// Crie essas variáveis ou Operandos
var teste1 = null;
var teste2 = [1, 2, 3, 4, 5, 6];
var teste3 = new Number(10);
var teste4 = 10;
var teste5 = new Array(1, 2, 3, 4, 5);
var teste6 = ‘TutsMais’;
 
// Vamos Efetuar os testes com o console.log()
console.log(typeof teste1);
console.log(typeof teste2); 
console.log(typeof teste3); 
console.log(typeof teste4); 
console.log(typeof teste5);  
console.log(typeof teste6); 
```
Veja que a nossa saida será:

```
object  // O null é um objeto?????? Oo
object  // Eita caramba, não seria um Array?
object  // Perfeito, 10 é um número
number  // Perfeito também
object  // Eita, não seria uma Array?
string  // Perfeito
```

Calma que não é nenhuma magia negra não! Fiquem calmas! Realmente comportamento do typeof está correto, realmente ele deve retornar isso, como descrito no ECMAscript que prevê este resultado. Então tome MUITO CUIDADO ao usar o typeof em suas condições e estruturas da linguagem, o resultado realmente pode ser inverso a sua lógica e o seu código se perder na magia do JavaScript.
A maioria dos Operadores no JavaScript porta-se de forma esperada, o problema do typeof é que o mesmo possui um comportamento "Exótico". O operador typeof espera um valor e devolve uma das strings: Number, String, Boolean, undefined, function ou Object. Por isso fica fácil se confundir se ele não for bem entendido. Mas então, o que usar? Vamos usar o  instanceof!

### Instanceof

No uso do instanceof nós vamos pedir se determinado objeto é um número, array, etc e a função simplesmente vai retornar sim(true) ou não(false)! A sintaxe da função é a seguinte:

```
objeto_a_ser_testado instanceof tipo-constructor
```

Vejamos um exemplo:

```
var teste3 = [2, 3, 5, 1, 2, 3];
console.log(teste3 instanceof Array);
```

Ou seja, no exemplo acima estamos pedindo se o objeto 'teste3' é uma Array. Nesse caso a função instanceof irá retornar true. Sim, teste3 é um Array. Esse é mais fácil né? Sem resultados inesperados!

**[Exercício]**

**Sem executar o código, qual será a resposta do instanceof em cada caso abaixo?**

```
var myDate    = new Date();
myDate instanceof Date;     // Vai retornar verdadeiro ou falso?
myDate instanceof Object;   // Vai retornar verdadeiro ou falso?
myDate instanceof String;   // rVai retornar verdadeiro ou falso?
myDate instanceof Number;   // Vai retornar verdadeiro ou falso?

```
