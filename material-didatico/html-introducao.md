# Introdução ao HTML

### Linguagem de marcação

> HTML é uma **linguagem de marcação**. Uma linguagem de   marcação, no sentido em que se relaciona com os navegadores, é uma linguagem com uma sintaxe específica que fornece instruções ao navegador sobre como exibir uma página. A HTML distingue e separa o "conteúdo" (palavras, imagens, áudio, vídeo, e assim por diante) de sua "forma de apresentação"  (as instruções sobre como determinado tipo de conteúdo deve ser exibido).

> [_Developer Mozilla Fundation_](https://developer.mozilla.org/pt-BR/docs/HTML/Introduction)



Para iniciar uma tag HTML usasse o '&lsaquo;&rsaquo;' e para fechar '&lsaquo;/&rsaquo;'

Exemplo
````html
<h1> Esse é um Titulo <h1>
<p> Esse é um paragrafo </p>
````

O resultado esperado é algo parecido com isso


# Esse é um titulo
Essa é uma tag de paragrafo

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

Alguns exemplos dessas tags:

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
<ol>

<!-- Não Ordenada -->
<ul>
  <li> Item 1 </li>
  <li> Item 2 </li>
  <li> Item 3 </li>
<ul>
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

<p>Um paragrafo contendo texto em <b>Negrito</b> e em <i>italico<i> </p>
<blockquote> Uma citação de alguém importante </blockquote>
<span> No html entende-se o span</span> como um trecho muito curto de texto
<a href="http://"> link </a>
```


#### [Exercício]

**Crie uma tabela de produtos e seus valores**

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
    <h1>All About Flour<h1>
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
>>>>>>> c52d481ec2aa9a5f327cb95f5622c666180f0bc3

## Formulário

Por fim desta introdução, iremos trabalhar um conjunto de tags, que juntas formam um formulário de contato.
Primeiro vamos ver o código do formulário
```html
  <form action="/contato.php" method="post">
    <input type="text" name="nome" placeholder="Digite um nome">
    <input type="email" name="email" placeholder="Digite seu e-mail">
    <input type="reset" value="Limpar Formulário">
    <input type="submit" value="Submeter">
  </form>
```

Agora vamos entender o que aconteceu, a tag **form** é uma tag de bloco de conteudo e ela informa ao documento que ali dentro terá um formulário, criando assim um pequeno "escopo", ela tem dois atributos importantes o **action** que aponta para onde o formulário será enviado e o **method** que informa qual o metodo de submissão do formulário (o HTML por padrão aceita apenas GET e POST)

Para adicionar informações ao formulário usasse a tag **input**, para identificar esse input usasse o atributo **name** que como o nome diz, nomeia a tag para quando o formulário ser submetido o programador backend conseguir ler as informações de cada tag através do name da mesma, além do name o input possui algumas variações definidas dentro do atributo **type**, entre elas possuimos

```html
<input type="text" name="">

<!-- Adicionadas ao HTML5 -->
<input type="password" name="">
<input type="number" name="">
<input type="date" name="">
<input type="email" name="">

<input type="submit" name="">
<input type="reset" name="">
<input type="button" name="">

<input type="radio" name="">
<input type="checkbox" name="">
```
Cada tipo, tem sua finalidade, exemplo o tipo e-mail, faz uma pequena validação para que apenas seja aceito textos no formato de e-mail dentro daquele campo, ajudando nessa forma a facilitar na hora de validar os dados que são enviados através do Input.

Além da propriedade type e name o input possui mais alguns atributos interessantes, como **placeholder** (Adiciona uma marca d'agua enquanto não possuir informação digitada), **required** (Identifica aquele campo do formulário como requerido), **disabled** (Desabilita um input  para que não possa haver interação com o mesmo )

Para gerarmos ações no formulário existem dois inputs, o **reset** ( para limpar o formulário) e **submit** (para submenter o formulário para o servidor).


#### [Exercício]

**Para fixar o que aprendemos, vamos criar um arquivo HTML que possuirá uma tabela de preços, uma lista de produtos, e um formulário de contato**



## Semântica

>A Semântica sempre um dos pontos mais importantes do desenvolvimento com Padrões Web. Algumas iniciativas com o Microformats vieram na tentativa de trazer mais semântica ainda para nossos códigos, com o intuito de novas aplicações e oportunidades pudessem utilizar melhor a informação distribuída na web.
> [Tableless - HTML 5 – Mudanças na estrutura e semântica](http://tableless.com.br/html5-estrutura-semantica/)

O uso da semântica ajuda aos motores a entender melhor o conteudo que é servido pelo seu site, no passado não existia uma semântica basica para estruturar os dados e assim dificultava a coleta de informações de maneira inteligente pelos bots.

Exemplo de como era usado antigamente

```html
  <div class="container">
    <div class="postagem">
      <div class="header"></div>
      <div class="artigo"></div>
      <div class="footer"></div>
    </div>
  </div>
```

Essa forma não dava muitas informações aos motores de buscas, o que dificultava na hora de indexar informações relevantes sobre seu site.

Após a criação de tags semânticas a mesma organização ficou dessa forma

```html
  <main>
    <section>
      <header></header>
      <article></article>
      <footer></footer>
    </section>
  </main>
```

Notem, que dessa forma o próprio HTML informa o que é o que dentro da Hierarquia de conteudo, enriquecendo mais ainda o seu site e melhorando a indexação pelos buscadores.

#### [Exercício]

**Para concluir, vamos construir o HTML referente a essa imagem**

![Layout para implementar a semântica](layout-exercicio-html.png)
