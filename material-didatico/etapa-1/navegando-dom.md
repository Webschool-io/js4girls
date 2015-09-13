Depois que localizamos um elemento no DOM podemos navegar pelos seus parentes. Podemos selecionar:
 - O pai utilizando a propriedade `.parentNode` do elemento que localizamos;
 - O irmão mais velho utilizando a propriedade `.nextSibling` ou o mais novo utilizando a propriedade `.previousSibling`;
 - Ou os filhos, para isso temos 3 métodos:
  - `.firstChild` que retona o primeiro filho e, caso não exista, retorna null;
  - `.lastChild` que retorna o último filgo e, caso não exista, retorna null;
  - `.childNodes` que retorna uma lista com todos os filhos do elemento.

**Atenção** Na seleção de filhos as propriedades `.firstChild` e `.lastChild` podem retornar espaços em branco entre as tags HTML em vez da primeira tag HTML filha do elemento selecionado.

#### [Exercício]

**Selecione o elemento com id `neto` e navegue pelo DOM até o avô dele e altere o texto do primeiro filho, o elemento `h1`, para `JS4Girls`.**

```html
<div>
	<h1>JavaScript</h1>
	<div>
		<div id="neto"></div>
	</div>
</div>
```