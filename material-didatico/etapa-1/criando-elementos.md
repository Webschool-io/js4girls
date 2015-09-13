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

#### [Exercício]

**Crie e adicione ao `document.body` uma div, que terá um link para o google como filho.**