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
<header></header>
<article></article>
<footer></footer>
<section></section>
<aside></aside>
<nav></nav>
```


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
<input type="number" name="">
<input type="date" name="">
<input type="email" name="">
<input type="submit" name="">
<input type="reset" name="">
<input type="button" name="">

```
Cada tipo, tem sua finalidade, exemplo o tipo e-mail, faz uma pequena validação para que apenas seja aceito textos no formato de e-mail dentro daquele campo, ajudando nessa forma a facilitar na hora de validar os dados que são enviados através do Input.

Além da propriedade type e name o input possui mais alguns atributos interessantes, como **placeholder** (Adiciona uma marca d'agua enquanto não possuir informação digitada), **required** (Identifica aquele campo do formulário como requerido), **disabled** (Desabilita um input  para que não possa haver interação com o mesmo )

Para gerarmos ações no formulário existem dois inputs, o **reset** ( para limpar o formulário) e **submit** (para submenter o formulário para o servidor).


### [Exercício]

**Para fixar o que aprendemos, vamos criar um arquivo que possuirá uma tabela de preços, uma lista de produtos, e um formulário de contato**

> Não iremos fazer nenhuma interação dinâmica no exercicio, é apenas para entendermos um pouco melhor o uso de cada tag e como ela trabalha no navegador
