## CSS

## Seletores CSS básicos

Seletores estão entre as primeiras coisas que você aprende quando começa a estudar CSS. Sem dúvida os seletores fazem parte dos assuntos fundamentais das CSS, contudo poucos desenvolvedores sabem tirar proveito de todo o seu potencial. Ainda que você possa fazer muitas estilizações com os seletores do tipo ID e os seletores de classes, há muito mais a fazer com seletores.  Seletores CSS permitem que você selecione e manipular elementos HTML. Seletores CSS são usados ​​para "encontrar" (ou selecione) elementos HTML com base em sua ID, classe, tipo, atributo, Seletores CSS permitem que você selecione e manipular elementos HTML.
Seletores CSS são usados ​​para "encontrar" (ou selecione) elementos HTML com base em sua ID, classe, tipo, atributo, e muito mais.
e muito mais.

Vamos aos fundamentos básicos. Um seletor CSS é uma declaração em um formato que "casa" com todos os elementos que sigam aquele formato na árvore do documento. Quando todas as condições estabelecidas no formato da declaração são satisfeitas o seletor "casa" com o elemento (ou elementos) no documento e as regras escritas no seletor são aplicadas. Considere a regra CSS bem simples escrita a seguir:

p { color:#f00; }

O seletor é a parte da regra CSS que está antes do sinal “{“ (chave de abertura). O seletor aqui é p, que "casa" com todos os elementos p do documento e faz com que qualquer texto dentro de um parágrafo seja na cor vermelha. Bem básico.

## Seletores Visão geral

Explicarei detalhadamente cada um destes seletores nas duas primeiras partes deste artigo, assim, continue lendo. Alguns termos usados na tabela acima e ao longo do artigo necessitam de uma explicação adicional:

### Descendente
Um elemento que é filho, neto ou descendente mais distante de um elemento, na árvore do documento.

### Ancestral
Um elemento que é pai, avô ou ancestral mais distante de um elemento na árvore do documento.

### Filho
O descendente direto de um elemento. Nenhum elemento existe entre os dois na árvore do documento.

### Pai
O ancestral direto de um elemento. Nenhum elemento existe entre os dois na árvore do documento.

### Sibling (irmãos)
Elementos irmãos, filhos do mesmo pai.

## Seletores Simples e combinados

Existem duas categorias básicas de seletores: os simples e os combinados.

Um seletor simples consiste em um tipo qualquer de seletor ou o seletor universal seguido por nenhum ou algum seletor de atributo, seletor tipo ID, seletor de classe ou pseudo-classe. A seguir uma regra contendo um exemplo de seletor simples:

```css
p.info { background:#ff0; }
```

Um seletor combinado (algumas vezes chamado de seletor contextual) consiste de dois ou mais seletores simples separados por um elemento de combinação. A seguir um exemplo de seletor combinado.

```css
div p { font-weight:bold; }
```

A regra acima aplica-se a todo elemento p que seja descendente do elemento div.

Um pseudo-elemento pode ser colocado como apêndice a um seletor. Em seletores combinados, o pseudo-elemento somente poderá ser adicionado como apêndice ao último seletor simples.

Mais a frente serão detalhados com mais profundidade os seletores combinados, os elementos de combinação e os pseudo-elementos.

## Seletores Universal

O seletor universal é representado por um asterisco, “*”, e casa com todos os elementos do documento. É raro ver-se empregado em uma folha de estilos, mas o seletor universal é muito usado com seletores tipo ID e seletores de classe. Se o seletor universal não for o único componente de um seletor simples, o “*” não deve ser usado :

.myclass é equivalente a *.myclass
#myid é equivalente a *#myid

Um uso bastante popular para o seletor universal é o uso para zerar margens e paddings de todos os elementos do documento:

```css
* { margin:0; padding:0; }
```

Este procedimento é também conhecido como Global White Space Reset.

## Seletores Tipo

Um seletor tipo, casa com qualquer instância de um determinado tipo de elemento. A regra a seguir casa com qualquer elemento (do tipo) parágrafo no documento e configura seu tamanho de fonte para 2em:

```css
p { font-size:2em; }
```

### Seletor – classe

O seletor de classe é representado por um ponto, “.”, e tem como alvo elementos com um determinado valor para seu atributo class. A regra a seguir aplica-se a todo elemento parágrafo cuja classe tenha o nome “info”:

```css
p.info { background:#ff0; }
```

Você pode atribuir vários nomes para a classe de um elemento – o atributo class pode conter uma lista de vários nomes separados por espaço em branco. Assim, os seletores de classe podem ser usados para casar com elementos cuja classe contenha vários nomes. A regra a seguir casa com elementos p que tenham os nomes “info” e “error” declarados em seu atributo class:

```css
p.info.error { color:#900; font-weight:bold; }
```

O tipo de elemento não precisa necessariamente ser declarado. Este procedimento, não declarar o tipo de elemento, equivale a usar o seletor universal como tipo de elemento. A regra a seguir casa com qualquer elemento da classe “info”, independentemente do tipo de elemento:

```css
.info { background:#ff0; }
```


### Seletor – ID

O seletor ID é representado por um sinal de "tralha" (ou "jogo da velha"), “#”, e tem como alvo elementos com um deteminado valor de atributo ID. A regra a seguir aplica-se a todos os elementos cujo nome de ID seja “info”, independentemente do tipo de elemento:

```css
#info { background:#ff0; }
```

Se você especificar um determinado tipo de elemento a regra será aplicada somente àquele tipo de elemento que tenha o nome da ID especificado:

```css
p#info { background:#ff0; }
```

É importante lembrar que seletores ID tem uma especificidade maior que seletores de classe e que um valor de ID deve ser único em um mesmo documento. Assim um determinado seletor ID será aplicável a um único elemento no documento.




