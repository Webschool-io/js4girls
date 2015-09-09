![Logos do JS4Girls e da Webschool](https://raw.githubusercontent.com/Webschool-io/js4girls/master/material-didatico/js4girls-apostila-logos.png)

## Índice
- Introdução ao HTML
- Introdução à CSS
- Introdução ao Javascript
- Introdução à Estrutura de Dados
- Introdução à Lógica
- Funções
- Objetos

## Introdução ao HTML

### Linguagem de marcação

> HTML é uma **linguagem de marcação**. Uma linguagem de marcação, no sentido em que se relaciona com os navegadores, é uma linguagem com uma sintaxe específica que fornece instruções ao navegador sobre como exibir uma página. A HTML distingue e separa o "conteúdo" (palavras, imagens, áudio, vídeo, e assim por diante) de sua "forma de apresentação"  (as instruções sobre como determinado tipo de conteúdo deve ser exibido).

> [_Developer Mozilla Fundation_](https://developer.mozilla.org/pt-BR/docs/HTML/Introduction)

Para iniciar uma tag HTML usa-se o `<` e para fechar `/>`

```html
<h1> Esse é um Titulo </h1>
<p> Esse é um paragrafo </p>
```

# Esse é um titulo

```html
<h1></h1>
```

Porém temos 6 níveis de títulos do `h1` ao `h6`, sua numeração vai pela sua importância, no caso o `h1` é o título mais importante da página.


> A HTML consiste de um conjunto de elementos. Um elemento define o significado semântico do seu conteúdo. Elementos incluem tudo entre duas tags de elementos que casam entre si, incluindo as próprias tags. Por exemplo, o elemento "&lsaquo;p&rsaquo;" indica um parágrafo; o elemento "&lsaquo;img&rsaquo;" indica uma imagem.

> [_Developer Mozilla Fundation_](https://developer.mozilla.org/pt-BR/docs/HTML/Introduction)

Você pode encontrar a lista de tags HTML nesse [link](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element)

### Atributos

Uma Tag html pode possuir atributos, que são informações adicionais relacionadas aquela tag, atributos normalmente possuiem duas partes

- Nome do atributo
- Valor do atributo

```html
<input type="text"/>
```

Nesse exemplo, a tag **input** possui o atributo **type** que identifica que o tipo do input é texto.

E para para comentar no HTML usasse o seguinte codigo.

```html
<!-- Esse é um comentário -->
```

## Elementos Estruturais

O html sendo uma linguagem de marcação possui elementos que definem a estrutura de um documento, para isso usasse algumas tags para definir semanticamente o conteudo.


### Blocos de Informação

Algumas tags servem de "container" para se armazenar outras tags ou informações, a partir do HTML5 foi criado algumas tags para melhorar a semântica na Web

```html

<div></div>

<!-- Tags adicionadas no HTML5 para dar mais semântica ao html -->
<main></main>
<section> <!-- Essa tag determina uma sessão de conteudo -->
  <header></header> <!-- Essa tag determina uma sessão de cabeçalho de conteudo -->
  <article></article>
  <footer></footer>
</section>
<aside></aside>
<nav></nav>

```
#### [Exercício]

**Para fixar o que aprendemos, imagine que você quer estruturar um código de uma postagem de blog, onde a postagem é uma sessão que contem um cabeçalho, onde ficará o titulo da postagem, após o cabeçalho teremos o artigo em si, e por fim o rodapé onde estará os dados como quem criou a postagem**


### Listas

Para identificar listas no HTML usasse a tag "ol" e "ul" onde "ol" é para referenciar listas **ordenadas** e "ul" para listas **não ordenadas**, para criar itens na lista usasse a tag "li".


Exemplo de listas

```html
<!-- Ordenada -->
<ol>
  <li> Item 1 </li>
  <li> Item 2 </li>
  <li> Item 3 </li>
</ol>

<!-- Não Ordenada -->
<ul>
  <li> Item 1 </li>
  <li> Item 2 </li>
  <li> Item 3 </li>
</ul>
```

#### [Exercício]

**Crie uma lista ordenada para o processo de troca de um pneu, e crie uma lista não ordenada para os itens de uma compra**


### Tabelas

Para definir uma tabela no HTML, usasse a tag "table" e para adicionar conteudo a essa tabela exitem as tags "tr" e "td" e "th", porém como a Tabela é um bloco de informação ela possui tags de semântica para definir cabeçalho e rodapé da tabela por exemplo, para isso temos"thead" para definir o cabeçalho e "tfoot" para definir o rodapé.

Exemplo de Tabelas

```html
<table>
  <!-- Cabeçalho da tabela -->
  <thead>
    <tr>
      <th>Nome</th>
      <th>Salario</th>
    </tr>
  </thead>
  <!-- Rodapé da tabela -->
  <!-- Mesmo colocando o tfoot a cima do tbody a tabela identifica que ele pertence ao rodapé da tabela e o adiciona somente no fim da mesma -->
  <tfoot>
    <tr>
      <td>Total dos pagamentos</td>
      <td>2200,00</td>
    </tr>
  </tfoot>
  <!-- Corpo da tabela -->
  <tbody>
    <tr>
      <td>João</td>
      <td>1000,00</td>
    </tr>
    <tr>
      <td>José</td>
      <td>1200,00</td>
    </tr>
  </tbody>
</table>
```

#### [Exercício]

**Crie uma tabela de produtos e seus valores**

### Elementos Textuais

Assim como para definir bloco de informações, existem tags especificas para definir conteudo "texto" dentro de um documento.

Segue alguns exemplos de elementos textuais

```html
<h1>Titulo</h1>
<h2>Subtitulo</h2>
<h3>Titulo nível 3</h3>
<h4>Titulo nível 4</h4>
<h5>Titulo nível 5</h5>
<h6>Titulo nível 6</h6>

<p>Um paragrafo contendo texto em <b>Negrito</b> e em <i>italico</i> </p>
<blockquote> Uma citação de alguém importante </blockquote>
<span> No html entende-se o span</span> como um trecho muito curto de texto
<a href="http://"> link </a>
```


## Formulário

Antes de explicar veja a estrutura a baixo

```html
  <form action="/contato.php" method="post">
    <input type="text" name="nome" placeholder="Digite um nome"/>
    <input type="email" name="email" placeholder="Digite seu e-mail"/>
    <textarea name="comentario"></textarea>
    <input type="reset" value="Limpar Formulário"/>
    <input type="submit" value="Submeter"/>
  </form>
```

Agora vamos entender o que aconteceu, a tag **form** é uma tag de bloco de conteudo e ela informa ao documento que ali dentro terá um formulário, criando assim um pequeno "escopo", ela tem dois atributos importantes o **action** que aponta para onde o formulário será enviado e o **method** que informa qual o metodo de submissão do formulário (o HTML por padrão aceita apenas GET e POST)

Para adicionar informações ao formulário usasse a tag **input**, para identificar esse input usasse o atributo **name** que como o nome diz, nomeia a tag para quando o formulário ser submetido o programador backend conseguir ler as informações de cada tag através do name da mesma, além do name o input possui algumas variações definidas dentro do atributo **type**, entre elas possuimos

```html
<input type="text" name=""/>
<input type="password" name=""/>
<input type="submit" name=""/>
<input type="reset" name=""/>
<input type="button" name=""/>
<input type="radio" name=""/>
<input type="checkbox" name=""/>
<textarea></textarea>
<select></select>

<!-- Adicionadas ao HTML5 -->
<input type="range" name=""/>
<input type="number" name=""/>
<input type="date" name=""/>
<input type="email" name=""/>
```

Cada tipo, tem sua finalidade, exemplo o tipo e-mail, faz uma pequena validação para que apenas seja aceito textos no formato de e-mail dentro daquele campo, ajudando nessa forma a facilitar na hora de validar os dados que são enviados através do Input.

Além da propriedade type e name o input possui mais alguns atributos interessantes, como **placeholder** (Adiciona uma marca d'agua enquanto não possuir informação digitada), **required** (Identifica aquele campo do formulário como requerido), **disabled** (Desabilita um input  para que não possa haver interação com o mesmo )

Para gerarmos ações no formulário existem dois inputs, o **reset** ( para limpar o formulário) e **submit** (para submenter o formulário para o servidor).


#### [Exercício]

**Para fixar o que aprendemos, vamos criar um arquivo HTML que possuirá um formulário de contato**

## HTML Semântico

> ### É só dos sentidos que procede toda a autenticidade, toda a boa consciência, toda a evidência da verdade.

> **"_Nietzsche , Friedrich_"**

### Semântica?
> Semântica na vida real é um ramo da linguística que estuda
significado das palavras, frases e textos de uma língua. É o estudo do significado.

### Realidade em alguns casos

> Vemos alguns desenvolvedores que preocupam-se com JavaScript, CSS e outros, portanto esquecem
de uma premissa básica que é o significado correto das marcações em uma página.

### Problemas

* Com a rápida expansão da internet um projeto que antes tinha o intuito
de apenas compartilhar e organizar links na web criou proporções gigantes.
Isso gerou grandes volumes conteúdos gerando um caos de informações.
O volume é tão grande que "poluiu" os resultados e a navegação fica confusa e dispersa.

* Quando acessamos um site conseguimos distinguir qual é o cabeçalho do site? salvo a parte visual que nos ajuda identificar um logo com um menu que na maioria das vezes está sempre localizado na parte superior da página.
Então sabemos que ali é um topo, mas os motores de busca e/ou leitores de tela não conseguem identificar isso.

* Antes utilizávamos apenas `<div>` para estruturar e demarcar nossas páginas, mas esse elemento não tem nenhuma semântica, usando `<div id="header">`, podemos acessar este elemento, portanto os motores de busca e leitores de tela não conseguem enxergar isso como um cabeçalho é apenas uma div.

### Solução

* Web semântica é um projeto com objetivo de aplicar conceitos inteligentes na internet.
Nela cada informação vem com um significado bem definido permitindo melhor interação com o usuário,
novos motores de busca(que marcam a relevância em um a página), interfaces inovadoras, ou seja uma
organização inteligente de conteúdos.

* Devemos fazer o uso do HTML5 que nos fornece tags semânticas, para demarcar um página web.

### Porque usar HTML5 semântico e sua importância

* Torna mais fácil os leitores de tela interpretarem informação de um site, usando html semântico podemos marcar as páginas e torna-las mais acessíveis tanto para pessoas com deficiência quanto para os motores de busca.

* Transmitimos significados através das tags em uma página.

* É graças a semântica que sua página vai indexar legal ou não nos buscadores. Não somente por isso, a semântica ajuda na acessibilidade de sua página ou aplicação

### Exemplo na Vida Real e no HTML5

* Na real, quando você ler um livro em voz alta e depara-se com uma (,), você sabe que alí uma parte da frase.

* Logo em seguida rapidamente retomamos a leitura mas nesse tempo temos uma pequena pausa.

* Quando encontramos um ponto final, a pausa é maior e note que isso nos guia em nossa leitura.

* Imagine em uma página de um site com diversas áreas, usamos as tags semânticas para demarcar partes da sua página os motores de buscas vão saber identificar qual é o cabeçalho da página, qual é o menu principal, qual é a parte principal do seu site, ou se o seu site possui várias seções, qual é o rodapé da página e etc...

### Porque estruturar?
```HTML
<h1> Title </h1>
<p> Lorem ipsum...</p>
```
* Sabemos que o H1 sempre é o título mais importante da página mas o local onde ele está
isso que faz a diferença, ou seja essa estrutura facilita na os motores e leitores de tela identificarem do que se trata cada conteúdo na página.

## Novos Elementos Estruturais HTML5

* Algumas Novas tags do HTML5 que nos ajudam a organizar e estruturar o conteúdo de nossos sites.
Estas novas tags vieram para melhorar a semântica dos elementos estruturais do código

### `<header>`

```HTML
<header>
  <h1><a href="/">Company Name</a></h1>
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="/about/">About</a></li>
      <li><a href="/blog/">Blog</a></li>
    </ul>
  </nav>
</header>
```

### `<nav>`
Define um grupo ou bloco de links de navegação.

```HTML
<nav>
   <ul>
     <li><a href="index.html">Home</a></li>
     <li><a href="/about/">About</a></li>
     <li><a href="/blog/">Blog</a></li>
   </ul>
</nav>
```
### `<footer>`
Define o rodapé das seções ou da página.

```HTML
<footer>
  <ul>
    <li>copyright</li>
    <li>sitemap</li>
    <li>contact</li>
    <li>to top</li>
  </ul>
</footer>
```
### `<aside>`
* Define um elemento lateral que pode conter blocos de navegação (NAVs), citações e outras informações que costumamos colocar em uma sidebar.

* Servem para chamar sua atenção para alguma informação importante ou outras informações que agregarão mais ao conteúdo principal.

* Pode estar relacionado a um post, a página completa, etc.

Neste exemplo temos um `aside` relacionado a uma artigo.

```HTML
<!-- Aside -->
<aside>
  <h3>Foodblogs I like</h3>
  <a href="http://www.bakerella.com">Bakerella</a>
  <a href="http://sourdough.com/"> Sourdough.com</a>
   <a href="http://www.bakingobsession.com">BakingObsession</a>
</aside>
<!-- Aside -->
<article>
 <header>
    <h1>All About Flour</h1>
    <p class="byline">by Jane Doe</p>
 </header>
 <section>
   <h2>The Two Types of Wheat</h2>
   <p>There … to rise.</p>
   <p>Where … with less protein.</p>
 </section>
</article>
```
### `<article>`
Define a área onde há um artigo, texto, redação, conteúdo e etc…
```HTML
<article>
<h1>Apple</h1>
<p>The <b>apple</b> is the pomaceous fruit of the apple tree...</p>
...
</article>
```

### `<section>`
* Define um bloco ou um grupo de um assunto específico.
* É importante entender que a section agrupa diversos elementos que tenham relação entre si.
Por exemplo, se há uma área no site que há links, conteúdo, imagens e etc de um assunto em comum, você agrupará esses elementos com uma section. Nesse caso, ele entrou no lugar daquele div que fazíamos para dividir grandes blocos de assuntos em comum.

```HTML
<section>
  <h2> Title section </h2>
  Section content appears here.
</section>
```
### Outros elementos estruturais HTML5

| Tags        | Descrição |
| ------------- |-------------|
|`<mark>` | Destacar um texto      |
|`<progress>` | Progresso de uma tarefa|
|`<hgroup>`|Usado em uma seção de títulos, usando `<h1>` para `<h6>`, onde o maior é o título principal da seção, e os outros são sub-títulos |
|`<details>` |Descreve detalhes de um documento ou parte |
|`<summary>` |Um caption ou sumário, dentro da tag `<details>` |

### Exemplos de Simples Estruturas

![](http://csancak.net/wp-content/uploads/2014/12/structure-html5.gif)
![](https://henriquevreis.files.wordpress.com/2013/01/sematica_html5.png?w=689&h=371)
![](http://www.desarrolloweb.com/articulos/images/html5/semantica-html.png)

#### [Exercício]

**Para concluir, vamos construir o HTML referente a essa imagem**

![Layout para implementar a semântica](layout-exercicio-html.png)

## Introdução à CSS


### Seletores CSS básicos

Seletores estão entre as primeiras coisas que você aprende quando começa a estudar CSS. Sem dúvida os seletores fazem parte dos assuntos fundamentais das CSS, contudo poucos desenvolvedores sabem tirar proveito de todo o seu potencial. Ainda que você possa fazer muitas estilizações com os seletores do tipo ID e os seletores de classes, há muito mais a fazer com seletores.  Seletores CSS permitem que você selecione e manipular elementos HTML. Seletores CSS são usados ​​para "encontrar" (ou selecione) elementos HTML com base em sua ID, classe, tipo, atributo, Seletores CSS permitem que você selecione e manipular elementos HTML.
Seletores CSS são usados ​​para "encontrar" (ou selecione) elementos HTML com base em sua ID, classe, tipo, atributo, e muito mais.
e muito mais.

Vamos aos fundamentos básicos. Um seletor CSS é uma declaração em um formato que "casa" com todos os elementos que sigam aquele formato na árvore do documento. Quando todas as condições estabelecidas no formato da declaração são satisfeitas o seletor "casa" com o elemento (ou elementos) no documento e as regras escritas no seletor são aplicadas. Considere a regra CSS bem simples escrita a seguir:

```css
p { color:#f00; }
```

O seletor é a parte da regra CSS que está antes do sinal “{“ (chave de abertura). O seletor aqui é p, que "casa" com todos os elementos p do documento e faz com que qualquer texto dentro de um parágrafo seja na cor vermelha. Bem básico.

### Seletores Visão geral

Explicarei detalhadamente cada um destes seletores nas duas primeiras partes deste artigo, assim, continue lendo. Alguns termos usados na tabela acima e ao longo do artigo necessitam de uma explicação adicional:

#### Descendente
Um elemento que é filho, neto ou descendente mais distante de um elemento, na árvore do documento.

#### Ancestral
Um elemento que é pai, avô ou ancestral mais distante de um elemento na árvore do documento.

#### Filho
O descendente direto de um elemento. Nenhum elemento existe entre os dois na árvore do documento.

#### Pai
O ancestral direto de um elemento. Nenhum elemento existe entre os dois na árvore do documento.

#### Sibling (irmãos)
Elementos irmãos, filhos do mesmo pai.

### Seletores Simples e combinados

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

### Seletores Universal

O seletor universal é representado por um asterisco, “\*”, e casa com todos os elementos do documento. É raro ver-se empregado em uma folha de estilos, mas o seletor universal é muito usado com seletores tipo ID e seletores de classe. Se o seletor universal não for o único componente de um seletor simples, o “\*” não deve ser usado :

  - .myclass é equivalente a \*.myclass
  - \#myid é equivalente a \*#myid

Um uso bastante popular para o seletor universal é o uso para zerar margens e paddings de todos os elementos do documento:

```css
* { margin:0; padding:0; }
```

Este procedimento é também conhecido como `Global White Space Reset`.

### Seletores Tipo

Um seletor tipo, casa com qualquer instância de um determinado tipo de elemento. A regra a seguir casa com qualquer elemento (do tipo) parágrafo no documento e configura seu tamanho de fonte para 2em:

```css
p { font-size:2em; }
```

#### Seletor – classe

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


#### Seletor – ID

O seletor ID é representado por um sinal de "tralha" (ou "jogo da velha"), “#”, e tem como alvo elementos com um deteminado valor de atributo ID. A regra a seguir aplica-se a todos os elementos cujo nome de ID seja “info”, independentemente do tipo de elemento:

```css
#info { background:#ff0; }
```

Se você especificar um determinado tipo de elemento a regra será aplicada somente àquele tipo de elemento que tenha o nome da ID especificado:

```css
p#info { background:#ff0; }
```

É importante lembrar que seletores ID tem uma especificidade maior que seletores de classe e que um valor de ID deve ser único em um mesmo documento. Assim um determinado seletor ID será aplicável a um único elemento no documento.


#### Elementos de combinação

Elementos de combinação de seletores são usados para separar dois ou mais seletores simples que compõem um seletor combinado. Os elementos de combinação disponíveis são: espaço em branco (qualquer quantidade de espaço, tabulação ou caracteres de espaçamento), o sinal de maior “>” e o sinal de adição “+” . A função de cada um destes elementos de combinação dos seletores será descrita adiante.

#### Seletores descendentes

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

#### Seletores Filho

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

#### Seletores Irmãos adjacentes (sibling selectors)

Um seletor filho tem como alvo um filho imediato de um elemento. O seletor filho consiste de um ou mais seletores simples separados por um sinal de maior “+”. O elemento pai fica à esquerda do sinal “+”, e é permitido deixar espaço em branco entre o elemento de combinação e os seletores.
A regra a seguir aplica-se a todos os elementos strong que sejam filhos de um elemento div:

```css
p + strong { color:#f00; }
```

Somente elementos strong que sejam irmãos diretos do elemento p serão afetados por esta regra. Se houver qualquer outro elemento entre o elemento + e o elemento strong na árvore do documento, o seletor não se aplicará. No exemplo a seguir, somente “Texto dois” será afetado pela regra:

```html
<div>
  <p><strong>Texto um</strong></p>
  <strong>Texto dois</strong>
</div>
```

#### Agrupando seletores

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

#### Seletores de Atributo

Seletores de atributo atingem elementos baseados no valor de atributo declarado no seletor. Existem quatro maneiras de declarar um seletor de atributo:

  - [att] Casa com qualquer elemento com o atributo att independente do seu valor.
  - [att=val] - Casa com qualquer elemento com o atributo att cujo valor seja “val”.
  - [att~=val] - Casa com qualquer elemento que tenha um atributo att de valor igual a um valor qualquer separado por um espaço de um valor igual “val”. Neste caso “val” não pode conter espaços.
  - [att|=val] - Casa com qualquer elemento que tenha um atributo att de valor igual a um valor qualquer separado por um hífen de um valor começando com “val”. O principal uso deste seletor é o de casar elementos com um valor de idioma especificado no atributo lang (xml:lang em XHTML), por exemplo;“en”, “en-us”, “en-gb”, etc.

##### Exemplos
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

#### Seletores Pseudo-elementos

Como o contéudo iria se extender demais se abordassemos mais esse tópico, por isso quero deixar avisado aqui que a continuação dessa parte do CSS será mehor explicada em materiais futuros que você poderá estudar por aqui.

## Introdução ao Javascript
## Introdução à Estrutura de Dados
## Introdução à Lógica
## Funções
## Objetos