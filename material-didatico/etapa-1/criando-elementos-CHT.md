除了更改我們網頁的樣式，JavaScript也有創造新的HTML元素的能力。
Além de ajudar a alterar o estilo das nossas páginas, o JavaScript tem o poder de criar novos elementos HTML.

我們透過`document.createElement('div')`指令來創建新的HTML元素，執行以後將會返回一個由指令所創建的元素，所以我們可以將它存進一個變數裡以便之後使用。元素被產生出來了，但是它還沒有被插入到你的網頁裡，這個我們必須用到所選的元素裡面的`.appendChild(child)`指令，例如`getElementById`。透過這個函數只需要將我們要新增的元素傳遞給被選取的元素，像這樣：

### 前Html
```html
<div id="conteudo">
</div>
```

```js
//選取一個即將接受心元素的元素
var conteudo = document.getElementById('conteudo');

//新增一個新元素
var text = document.createElement('span');
text.innerText = 'Eu não estava aqui antes';

//使用append函數來將我們所創建的元素放到所選的div內容裡
conteudo.appendChild(text);
```

### 後Html
```html
<div id="conteudo">
	<span>Eu não estava aqui antes</span>
</div>
```

有其他的函數可以將元素新增到HTML網頁裡，可以在[這裡](https://developer.mozilla.org/en-US/docs/Web/API/Node#Methods)查詢

#### [習題]

**創建與新增一個div給`document.body`，內容包括一個前往Google的連結為子元素**
