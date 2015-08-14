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

## Listas e Tabelas

Como dito acima o HTML é uma linguagem de marcação, com isso vamos determinar nos exemplos abaixos algumas formas comuns de uso de marcação como listas e tabelas

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

Resultado:

1. Item 1
2. Item 2
3. Item 3


- Item 1
- Item 2
- Item 3


Outra tag muito usada é a "table", que é usada para criar tabelas

```html
<table>
  <!-- Cabeçalho da tabela -->
  <thead>
    <tr>
      <td>Nome</td>
      <td>Salario</td>
    </tr>
  </thead>
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
  <!-- Rodapé da tabela -->
  <tfoot>
    <tr>
      <td>Total dos pagamentos</td>
      <td>2200,00</td>
    </tr>
  </tfoot>
</table>
```

Para concluir essa introdução ao HTML vamos criar um formulário que é nesse ponto

Usaremos um conjunto de tags para construir esse formulário

```html
  <form action="">
    <input type="text" name="nome" placeholder="Digite um nome">
    <input type="text" name="idade" placeholder="Digite sua idade">
    <input type="reset" value="Limpar Formulário">
    <input type="button" value="Submeter">
  </form>
```
