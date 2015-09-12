## CSS

## Seletores CSS básicos

Seletores estão entre as primeiras coisas que você aprende quando começa a estudar CSS. Sem dúvida os seletores fazem parte dos assuntos fundamentais das CSS, contudo poucos desenvolvedores sabem tirar proveito de todo o seu potencial. Ainda que você possa fazer muitas estilizações com os seletores do tipo ID e os seletores de classes, há muito mais a fazer com seletores.  Seletores CSS permitem que você selecione e manipular elementos HTML. Seletores CSS são usados ​​para "encontrar" (ou selecione) elementos HTML com base em sua ID, classe, tipo, atributo, Seletores CSS permitem que você selecione e manipular elementos HTML.
Seletores CSS são usados ​​para "encontrar" (ou selecione) elementos HTML com base em sua ID, classe, tipo, atributo, e muito mais.
e muito mais.

Vamos aos fundamentos básicos. Um seletor CSS é uma declaração em um formato que "casa" com todos os elementos que sigam aquele formato na árvore do documento. Quando todas as condições estabelecidas no formato da declaração são satisfeitas o seletor "casa" com o elemento (ou elementos) no documento e as regras escritas no seletor são aplicadas. Considere a regra CSS bem simples escrita a seguir:

```css
p { color:#f00; }
```

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

O seletor universal é representado por um asterisco, “\*”, e casa com todos os elementos do documento. É raro ver-se empregado em uma folha de estilos, mas o seletor universal é muito usado com seletores tipo ID e seletores de classe. Se o seletor universal não for o único componente de um seletor simples, o “\*” não deve ser usado :

  - .myclass é equivalente a \*.myclass
  - \#myid é equivalente a \*#myid

Um uso bastante popular para o seletor universal é o uso para zerar margens e paddings de todos os elementos do documento:

```css
* { margin:0; padding:0; }
```

Este procedimento é também conhecido como `Global White Space Reset`.

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


### Elementos de combinação

Elementos de combinação de seletores são usados para separar dois ou mais seletores simples que compõem um seletor combinado. Os elementos de combinação disponíveis são: espaço em branco (qualquer quantidade de espaço, tabulação ou caracteres de espaçamento), o sinal de maior “>” e o sinal de adição “+” . A função de cada um destes elementos de combinação dos seletores será descrita adiante.

### Seletores descendentes

Um seletor descendente é uma combinação de dois ou mais seletores simples separados por um espaço em branco. Casa com elementos que sejam descendentes do primeiro elemento simples declarado no seletor. Por exemplo, na regra a seguir o seletor casa com todos os elementos pque sejam descendentes do elemento div:

```css
div p { color:#f00; }
```

Cada um dos seletores que compõem um seletor descendente pode ser um seletor simples de qualquer natureza. Na regra a seguir o seletor casa com todo o elemento p da classe info contido em um elemento li que esteja contido em um elemento div cuja id seja myid.

```css
div#myid li p.info { color:#f00; }
```

Seletores descendentes permitem que você case um elemento sem necessidade de atribuir-lhe uma classe ou uma id, o que resultará em uma marcação mais limpa. Vamos supor uma lista de navegação conforme a marcação abaixo:

```html
<ul id="nav">
  <li><a href="#">Link 1</a></li>
</ul>
<ul>
  <li><a href="#">Link 2</a></li>
  <li><a href="#">Link 3</a></li>
</ul>
```

Para atingir os itens de lista e links contidos na lista de navegação você poderia usar as seguintes regras CSS:

```css
#nav li { display:inline; } 
#nav a { font-weight:bold; }
```

Estas regras não serão aplicadas a nenhum outro item de lista ou links dentro do documento. Agora compare com a opção de nomear uma classe para cada item da lista e para os links e você perceberá quão mais limpa poderá tornar-se sua marcação com o uso de seletores descendente

### Seletores Filho

Um seletor filho tem como alvo um filho imediato de um elemento. O seletor filho consiste de um ou mais seletores simples separados por um sinal de maior “>”. O elemento pai fica à esquerda do sinal “>”, e é permitido deixar espaço em branco entre o elemento de combinação e os seletores.
A regra a seguir aplica-se a todos os elementos strong que sejam filhos de um elemento div:

```css
div > strong { color:#f00; }
```

Somente elementos strong que sejam descendentes diretos do elemento div serão afetados por esta regra. Se houver qualquer outro elemento entre o elemento div e o elemento strong na árvore do documento, o seletor não se aplicará. No exemplo a seguir, somente “Texto um” será afetado pela regra:

```html
<div>
  <strong>Texto um</strong>
  <p><strong>Texto dois</strong></p>
</div>
```

### Seletores Irmãos adjacentes (sibling selectors)

Um seletor de irmão adjacente tem como alvo o elemento diretamente ao lado do primeiro. O seletor irmão adjacente consiste de um ou mais seletores simples separados por um sinal de maior “+”. O elemento incial fica à esquerda do sinal “+”, e é permitido deixar espaço em branco entre o elemento de combinação e os seletores.
A regra a seguir aplica-se a todos os elementos strong que estejam ao lado de um elemento div:

```css
p + strong { color:#f00; }
```

Somente elementos strong que sejam irmãos diretos do elemento p serão afetados por esta regra. Se houver qualquer outro elemento entre o elemento p e o elemento strong na árvore do documento, o seletor não se aplicará. No exemplo a seguir, somente “Texto dois” será afetado pela regra:

```html
<div>
  <p><strong>Texto um</strong></p> <strong>Texto dois</strong>
  
</div>
```

### Agrupando seletores

Eu decidi abordar o agrupamento a esta altura do artigo, porque um erro comum que eu vejo as pessoas cometer quando estão aprendendo CSS diz respeito ao agrupamento de seletores.

Para aplicar uma mesma regra a diferentes elementos alvo casados por diferentes seletores você pode agrupar os seletores em uma lista e separando-os por uma vírgula no lugar de escrever repetidamente a mesma regra para cada um dos seletores. O erro que muitos cometem é o de não listar de modo completo todos os seletores. Considere a seguinte marcação:

```html
<div id="news"> 
  <h3>News</h3>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</div>
```

Agora considere que você quer aplicar a mesma margem para cabeçalhos do nível 3 e para listas não ordenadas que estejam dentro do elemento div cuja id é “news”. Aqui maneira errada:

```css
div#news h3, ul { margin:0 2em; }
```

Esta regra será aplicada a ambos os elementos h3 e ul na div#news. O problema é que atingirá todos os elementos ul contidos no documento, e não apenas aqueles na div#news.

Agora a maneira correta de grupar os seletores para este caso:

```css
div#news h3,div#news ul { margin:0 2em; }
```

Assim, quando grupar seletores lembre-se de escrever por completo cada um deles.

### Seletores de Atributo

Seletores de atributo atingem elementos baseados no valor de atributo declarado no seletor. Existem quatro maneiras de declarar um seletor de atributo:

  - [att] Casa com qualquer elemento com o atributo att independente do seu valor.
  - [att=val] - Casa com qualquer elemento com o atributo att cujo valor seja “val”.
  - [att~=val] - Casa com qualquer elemento que tenha um atributo att de valor igual a um valor qualquer separado por um espaço de um valor igual “val”. Neste caso “val” não pode conter espaços.
  - [att|=val] - Casa com qualquer elemento que tenha um atributo att de valor igual a um valor qualquer separado por um hífen de um valor começando com “val”. O principal uso deste seletor é o de casar elementos com um valor de idioma especificado no atributo lang (xml:lang em XHTML), por exemplo;“en”, “en-us”, “en-gb”, etc.

#### Exemplos
O seletor na regra a seguir casa com todos os elementos p que tenham o atributo title, independentemente do valor do atributo:

```css
p[title] { color:#f00; }
```

No próximo exemplo o seletor casa com todos os elementos div que tem um valor para o atributo class igual a error:

```css
div[class=error] { color:#f00; }
```

Para atingir todos os elementos td cujo atributo headers contenha o valor “col1”, podemos usar o seguinte seletor:

```css
td[headers~=col1] { color:#f00; }
```

E finalmente, o seletor seguinte atinge todo elemento p cujo atributo lang comece com en:

```css
p[lang|=en] { color:#f00; }
```

Múltiplos seletores de atributos podem ser usados em um mesmo seletor. Isto possibilita atingir vários diferentes atributos para o mesmo elemento. a regra a seguir aplica-se a todos os elementos blockquote que tenham o atributo class de valor igual a “quote”, e mais o atributo cite (independentemente do seu valor):

```css
blockquote[class=quote][cite] { color:#f00; }
```

### Seletores Pseudo-elementos

Como o contéudo iria se extender demais se abordassemos mais esse tópico, por isso quero deixar avisado aqui que a continuação dessa parte do CSS será mehor explicada em materiais futuros que você poderá estudar por aqui.




