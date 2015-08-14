## Objetos

A linguagem de programação JavaScript é orientada a objetos e trabalha com variáveis de objetos. Um objeto é uma coleção de propriedades, mas o que é uma propriedade? Propriedade é uma associação entre um nome e um valor, isso mesmo, é simplesmente uma ligação. Um valor de propriedade também pode ser uma função, que é então considerada um método do objeto. 
Além dos objetos que são pré-definidos no browser, você pode definir seus próprios objetos de forma independente para resolver a necessidade de seu projeto.

### Visão geral de objetos

Objetos podem ser comparados com objetos na vida real. Seu conceito pode ser entendido com objetos tangíveis da vida real.

Em JavaScript, um objeto é uma a entidade independente, com **propriedades** e **tipo**. Compare-o com um carro, por exemplo. Um carro é um objeto, porém, o mesmo possui várias propriedades. Um carro tem uma cor, um modelo, peso, marca, tipo de combustível, etc. De mesma forma, objetos em JavaScript podem ter propriedades, que definem suas características.

### Objetos e propriedades

Um objeto em JavaScript tem propriedades associadas a ele. Uma propriedade de um objeto pode ser explicada como uma variável que é ligada ao objeto. Propriedades de objetos são basicamente as mesmas que variáveis normais em JavaScript, exceto pelo fato de estarem ligadas a objetos. As propriedades de um objeto definem as características do objeto. Você acessa as propriedades de um objeto com uma simples notação de ponto:

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
Propriedades de objetos em JavaScript podem também ser acessada ou alterada usando-se notação de colchete. Objetos são às vezes chamados de arrays associativos, uma vez que cada propriedade é associada com um valor de string que pode ser usado para acessá-la. Então, por exemplo, você poderia acessar as propriedades do objeto meuAviao como se segue

```
meuAviao["fabricante"] = "Airbus";
meuAviao["modelo"] = "A380";
meuAviao["ano"] = 2012;
