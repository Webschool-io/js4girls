- DOM: sua página no mundo JavaScript
- Manipulando elementos da nossa página
- API do navegador: DOM e BO
- Eventos
- Navegando pelo DOM
- JavaScript e CSS
- Criando elementos dinamicamente

#JavaScript e o navegador

## DOM: sua página no mundo JavaScript

DOM (Document Object Model) é um modelo de representação do HTML, no qual cada elemento é representado como um nó em uma árvore, ficará mais fácil observando a imagem abaixo:

![](https://cldup.com/fA-PTLBKMU.gif)

Porém ele não é apenas o modelo que representa o HTML, mas sim uma interface independente de plataforma e linguagem que permite aos programas e scripts atualizarem dinamicamente a estrutura, conteúdo e estilo de documentos XML, HTML e demais. Isso significa que o DOM não é apenas utilizado em Javascript, de fato, outras linguagens de programação podem fazer uso do DOM em suas funções.

Para termos uma ideia melhor de como funciona essa hieraquia de elementos, vamos analisar a seguinte imagem:

![](https://cldup.com/_ZpqXo2R9U-1200x1200.png)

## Manipulando elementos da nossa página

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
## JavaScript e CSS
## Criando elementos dinamicamente



