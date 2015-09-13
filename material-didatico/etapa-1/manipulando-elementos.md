Depois que localizamos o nosso elemento podemos manipular eles com alguns métodos:

#### innerHTML
Captura ou altera o HTML de dentro do nosso elemento:
```js
var titulo = document.getElementById('title-js4girls');

console.log(titulo.innerHTML); //JS4Girls

titulo.innerHTML = "<span class='mudei'>Mudei aqui</span>";
```

#### innerText
Captura ou altera o texto de dentro do nosso elemento:
```js
var titulo = document.getElementById('title-js4girls');

console.log(titulo.innerText); //JS4Girls

titulo.innerText = "Mudei aqui";
```

#### value
Captura ou altera o valor de dentro do nosso elemento
```html
<input type="text" id="nome" value="JS4Girls" />
```
```js
var nome = document.getElementById('nome');

console.log(nome.value); //JS4Girls

nome.value = "Mudei aqui";
```

Estes são os básicos, [clique aqui](https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties) para ver mais.