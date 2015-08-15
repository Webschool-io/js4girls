# JavaScript e o navegador

## DOM: sua página no mundo JavaScript

DOM (Document Object Model) é um modelo de representação do HTML, no qual cada elemento é representado como um nó em uma árvore, ficará mais fácil observando a imagem abaixo:

![](https://cldup.com/fA-PTLBKMU.gif)

Porém ele não é apenas o modelo que representa o HTML, mas sim uma interface independente de plataforma e linguagem que permite aos programas e scripts atualizarem dinamicamente a estrutura, conteúdo e estilo de documentos XML, HTML e demais. Isso significa que o DOM não é apenas utilizado em Javascript, de fato, outras linguagens de programação podem fazer uso do DOM em suas funções.

Para termos uma ideia melhor de como funciona essa hieraquia de elementos, vamos analisar a seguinte imagem:

![](https://cldup.com/_ZpqXo2R9U-1200x1200.png)

Como observamos um elemento pode ter um pai, irmãos ou filhos. E é a partir dessa hierarquia que conseguimos percorrer os elementos da nossa página. Confira o exemplo em HTML a seguir:

```html
<p>
  Sou o pai, e 
  <a href="#">eu o filho</a> com um  
  <span>irmão</span>
</p>
```

Nesse caso o elemento `p` possui dois elementos filhos: `a` e `span`.


### Localizando elementos na nossa página

#### getElementById

Com este método, você utiliza o atributo id do nó que está localizando. Como o atributo id deve ser único em uma página HTML (não pode existir mais de um elemento com o mesmo id), o elemento que você estiver buscando será retornado diretamente.

Por exemplo, suponhamos que você queira localizar um nó de um título na sua página HTML:

```html
<h1 id="title-js4girls">JS4Girls</h1>
```

O título acima tem o id = `title-js4girls`, se eu quiser localizar este título utilizando seu atributo id em Javascript, faremos o seguinte:

```js
var titulo = document.getElementById('title-js4girls');
```



#### getElementsByTagName

Você também pode localizar um elemento utilizando o nome da tag que deseja. Para parágrafos, as tags se chamam-se p, DIVs se tem o nome div, para cabeçalhos h1, as tags se chamam h1 (e assim por diante):

```js
var titulos = document.getElementsByTagName('h1');
```

Porém a diferença para o anterior é que a função `getElementsByTagName` retorna um *array* de elementos que são da mesma tag/elemento HTML, nesse caso todos os títulos que usem `h1`.

#### getElementsByClassName

Este método é praticamente a mesma coisa do getElementsByTagName, ou seja, retorna uma coleção de elementos em um array. O problema aqui é que não funciona com os Internet Explorers mais antigos.

Quando digo antigos, estou me referindo a versões anteriores ao Internet Explorer 9. Isso é preocupante, porque o Internet Explorer 8 ainda é amplamente utilizado. Então nosso HTML ficará:


```html
<h1 id="title-js4girls" class="title-primary">JS4Girls</h1>
```

```js
var titulos = document.getElementsByClassName('title-primary');
```

#### getElementsByName

Também a mesma coisa, retorna uma coleção HTML de elementos, porém, agora utilizando o atributo `name` dos mesmos. Como o elemento `h1` não possui `name` vamos utilizar uma imagem para esse exemplo:

```html
<img src="http://webschool.io/images/logo.png" name="webschool-logo">
```

Agora para acharmos essa imagem com JavaScript fazemos:

```js
var img = document.getElementsByName('webschool-logo');
```

#### querySelector

Só funciona com navegadores mais novos, o que também quer dizer que você deve se preocupar, o IE8 também não suporta este método.

Esse método irá buscar qualquer elemento baseando-se na expressão CSS passada, vamos adicionar um `ID` na nossa imagem.


```html
<img src="http://webschool.io/images/logo.png" name="webschool-logo" id="webschool-logo-topo">
```

Agora para acharmos essa imagem com `querySelector` faremos o seguinte:


```js
var img = document.querySelector('#webschool-logo-topo');
```

Percebeu que agora utilizamos como busca o `#webschool-logo-topo` onde o `#` denota que estamos procurando um elemento pelo seu `ID`, mas poderíamos muito bem procurar por alguma classe usando `.`.

#### querySelectorAll

Só funciona com navegadores mais novos, o que também quer dizer que você deve se preocupar, o IE8 também não suporta este método.


Esse método irá buscar qualquer elemento baseando-se na expressão CSS passada porém diferentemente do `querySelector` ele irá retornar um *array* de elementos, como no caso abaixo eu estou buscando **todos** os parágrafos do meu documento:

```js
var paragrafos = document.querySelector('p');
```

### Manipulando elementos da nossa página

#### innerHTML

Vaos usar um exemplo anterior


```js
var titulo = document.getElementById('title-js4girls');

titulo.innerHTML = "Mudei aqui";
```



## Eventos
Os eventos são métodos que são chamados quando determinada ação/evento acontece. Basicamente qualquer ação do usuário na página é um evento e pode ser programado.

Exemplos de eventos:

* Um clique no mouse
* O carregamento de uma página ou imagem web
* Quando o mouse passa sobre um anúncio em uma página web
* Selecionar um campo de entrada em um formulário HTML
* Submeter um formulário HTML
* Pressionar uma tecla

Obs.: Eventos são normalmente utilizados combinados com funções, e a função não será executada enquanto o evento não ocorrer.

Segue a nomenclatura e uma descrição de alguns eventos:

onBlur
Este evento representa a perda de foco de um componente, por exemplo, o usuário está digitando o CEP em um formulário e tecla TAB ou clica em outro  campo do formulário, pode-se neste momento disparar uma função que valida o CEP.

onChange
Já este representa a mudança do valor de um componente. Por exemplo, o usuário seleciona numa lista o mês desejado para uma consulta, uma ação de filtro é disparada sobre uma tabela, que passa a listar os dados somente do mês selecionado.

onClick
Ao clicar o botão do mouse sobre um elemento da página, geralmente um botão ou um link.

onFocus
Este evento onFocus, é exatamente o contrário de onBlur. Acontece quando um elemento da página recebe o focu da aplicação.

onLoad
Representa que a página ou as imagens acabaram de ser carregadas.

onMouseOver
Quando o mouse passa sobre um elemento da página.

onSubmit
Quando um formulário é submetito, precisamente antes do envio.


## Navegando pelo DOM

Depois que localizamos um elemento no DOM podemos navegar pelos seus parentes. Podemos selecionar:

 - O pai utilizando a propriedade `.parentNode` do elemento que localizamos;
 - O irmão mais velho utilizando a propriedade `.nextSibling` ou o mais novo utilizando a propriedade `.previousSibling`;
 - Ou os filhos, para isso temos 3 métodos:
  - `.firstChild` que retona o primeiro filho e, caso não exista, retorna null;
  - `.lastChild` que retorna o último filgo e, caso não exista, retorna null;
  - `.childNodes` que retorna uma lista com todos os filhos do elemento.

####!!!! Atenção !!!! esses métodos podem retornar espaços em branco entre as tags HTML ao invez da primeira tag HTML filha do elemento selecionado causando resultados não esperados

```html
<ul id="myUL">
    <li id="previous"></li>
    <li id="myLI"></li>
    <li id="next"></li>
</ul>
```
**Pai - parentNode**
```javascript
var x = document.getElementById('myLI').parentNode.nodeName;
console.log(x); //UL
```

**Irmãos - nextSibling / previousSibling**
```javascript
var y = document.getElementById('myLI').nextSibling;
console.log(y.nodeName); //#text
console.log(y.id); //undefined
```

**Filhos - firstChild / lastChild / childNodes**
```javascript
var z = document.getElementById('myUL').childNodes[0].nodeName;
console.log(z); //#text

//ou

var z = document.getElementById('myUL').firstChild.nodeName;
console.log(z); //#text
```

####Eles só funcionam quando o html está sem identação

```html
<ul id="myUL"><li id="previous"></li><li id="myLI"></li><li id="next"></li></ul>
```
**Pai - parentNode**
```javascript
var x = document.getElementById('myLI').parentNode.nodeName;
console.log(x); //UL
```

**Irmãos - nextSibling / previousSibling**
```javascript
var y = document.getElementById('myLI').nextSibling;
console.log(y.nodeName); //LI
console.log(y.id); //next
```

**Filhos - firstChild / lastChild / childNodes**
```javascript
var z = document.getElementById('myUL').childNodes[0].nodeName;
console.log(z); //LI

//ou

var z = document.getElementById('myUL').firstChild.nodeName;
console.log(z); //LI
```

**[Exercício] Selecione o elemento com id `neto` e navegue pelo DOM até o avô dele e altere o texto do primeiro filho, o elemento `h1`, para `JS4Girls`.**

```html
<div>
  <h1>JavaScript</h1>
  <div>
    <div id="neto"></div>
  </div>
</div>
```

## JavaScript e CSS

Que nossas páginas na web ficam muito mais bonitas com CSS, todos nós sabemos. Mas você sabia que também pode controlar o estilo de um elemento através do JavaScript?

Os elementos HTML podem ser acessados no JavaScript através do DOM, como por exemplo: `document.getElementById('idDoElemento')`. Quando esse elemento é selecionado ele se torna um objeto e, por padrão, recebe algumas propriedades, uma dessas propriedades é a `style`.

Você pode alterar o estilo de um elemento selecionando-o, acessando sua propriedade style e a propriedade que representa a alteração de estilo que você deseja fazer. Assim:

```js
//Selecionando o elemento #idDoElemento do HTML através do JavaScript
var el = document.getElementById('idDoElemento');

//Setando a cor azul para o background do meu elemento.
el.style.backgroundColor = "blue";
```

Para ver mais propriedades do CSS no JavaScript(HTMLElement.style) [clique aqui.](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)


## Criando elementos dinamicamente

Além de ajudar a alterar o estilo das nossas páginas, o JavaScript tem o poder de criar novos elementos HTML.

Para criar um novo elemento HTML usamos o comando `document.createElement('div')`, ao ser executado o comando retorna o elemento criado para o comando, por causa disso podmos atribuir o retorno do comando a uma variável para podermos utilizar depois. O elemento foi criado, porém ele ainda não foi adicionado à sua página, para isso devemos utilizar o método `.appendChild(child)` que existe em um objeto que foi selecionado utilizando, por exemplo, o método `getElementById`. Com esse método só precisamos passar o novo elemento que queremos adicionar no elemento que foi selecionado. Assim:

### Html antes
```html
<div id="conteudo">
</div>
```

```js
//Selecionando o elemento que irá receber o novo elemento
var conteudo = document.getElementById('conteudo');

//Criando um novo elemento
var text = document.createElement('span');
text.innerText = 'Eu não estava aqui antes';

//Usando o método append para colocar o elemento que criamos na div conteudo que selecionamos
conteudo.appendChild(text);
```

### Html depois
```html
<div id="conteudo">
  <span>Eu não estava aqui antes</span>
</div>
```

Existem outros método que adicionam um elemento dinâmico à pagina HTML e podem ser vistos [aqui](https://developer.mozilla.org/en-US/docs/Web/API/Node#Methods)

