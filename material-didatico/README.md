<p>Antes de chegar onde interessa e começar a codar, vamos voltar um pouco e entender melhor como surgiu o JS... </p><p></p>

<p>Quando codamos páginas web, utilizamos o HTML (linguagem de marcação) que compõe toda a estrutura do documento a partir de tags, possibilitando a identificação e interpretação do código pelo browser para montar alguns elementos. A estilização desses elementos na página acontece através do CSS (Cascading Style Sheets), deixando tudo mais bonito com vários elementos visuais como backgrounds, imagens, rotação, gradiente e etc. Entretanto,  utilizando HTML + CSS temos apenas documentos <strong>estáticos</strong>, sem interação com o usuário, como conteúdos dinâmicos e validação de formulários.</p>

<p>Isso tudo mudou quando houve a grande sacada de mestre e na década de 90  um carinha chamado Brendan Eich que trabalhava na Netscape teve a brilhante ideia e desenvolveu uma linguagem de script chamada Mocha, que posteriormente foi renomeada para Livescript e por fim Javascript, sendo lançada para o browser Netscape 2.0.</p>

<p><a href="https://camo.githubusercontent.com/093444a32fdc31e9bbfb31cc4162935a2a0a7624/687474703a2f2f742e716b6d652e6d652f336f696e306d2e6a7067" target="_blank"><img src="https://camo.githubusercontent.com/093444a32fdc31e9bbfb31cc4162935a2a0a7624/687474703a2f2f742e716b6d652e6d652f336f696e306d2e6a7067" alt="" style="max-width:100%;"></a></p>

<p>Aplicações que utilizam javascript, nos oferecem </p>

<p><strong>Interatividade</strong></p>

<p>Interação entre pessoas e sistemas. No caso, quando há uma ação e reação que modifica o estado atual do sistema. Exemplos: calculadoras, personalização de páginas pelo usuário e etc. </p>

<p><strong>Validação de Formulários</strong></p>

<p>Validação dos dados inseridos pelos usuários através de formulários. 
A verificação ocorre ainda no browser, antes do envio dos dados ao servidor para processamento/armazenamento. Além de ser mais eficiente, evita que o formulário seja recarregado e retornado vazio. Afinal é super legal preencher 2348 campos, esquecer de algum obrigatório e ser obrigada a preencher todos os campos novamente. #sqn</p>

<p><a href="https://camo.githubusercontent.com/5f06a103a441e38c1de29a48f9cecd2fc9b9ba66/687474703a2f2f332e62702e626c6f6773706f742e636f6d2f2d34674f2d366a384b69724d2f55625079707171704b61492f414141414141414141646f2f7566506448617066786d452f73313630302f4e6f6f6f2e6a7067" target="_blank"><img src="https://camo.githubusercontent.com/5f06a103a441e38c1de29a48f9cecd2fc9b9ba66/687474703a2f2f332e62702e626c6f6773706f742e636f6d2f2d34674f2d366a384b69724d2f55625079707171704b61492f414141414141414141646f2f7566506448617066786d452f73313630302f4e6f6f6f2e6a7067" alt="" style="max-width:100%;"></a></p>

<p><strong>Controle de Comportamento e Personalização da Página</strong> </p>

<p>O comportamento dos elementos bem como a formatação do layout da página podem ser controlados via scripts. Como por exemplo, definir alguma ação quando o usuário clicar, digitar, selecionar e etc.
Para isso podemos utilizar uma combinação muito legal de HTML, JS, CSS e DOM, o famoso <strong>DHTML</strong>. Que deixou de ser tão falado assim com a chegada do HTML5 que também é utilizado para se referir a união de toda essa galerinha.</p>

<p><strong>Dinamismo</strong></p>

<p>Com o JS é possível atualizar o conteúdo de partes específicas da página sem precisar dar reload na página inteira. Isso ocorre graças a técnica de programação AJAX, que une HTML, CSS, XML/JSON e JS em conjunto com alguma outra tecnologia server-side  + banco de dados. </p>

<p>Um pouco sobre as <strong>principais características</strong>:</p>

<p><strong>Client-Side</strong></p>

<p>Sua execução ocorre diretamente no browser, independente do servidor. Não necessita ser compilada ! </p>

<p><strong>Fracamente/Dinamicamente Tipada</strong></p>

<p>Quando declaramos uma variável não definimos qual o tipo dela (int, bool, etc). Isso permite o armazenamento da informação que quisermos, pois não é definido na declaração. É também considerado dinamicamente tipada pois durante a execução podem alterar o tipo de dados contido em uma variável.</p>

<p><strong>Exemplo:</strong></p>

<p>var qualquerCoisa= 10;
qualquerCoisa = "JSGirls";</p>

<p><strong>Obs.:</strong> A variável qualquerCoisa não tem tipo definido, mas recebeu conteúdo do tipo int e depois string;</p>

<p><strong>Case Sensitive</strong></p>

<p>Em JS deve-se respeitar as letras maiúsculas e as minúsculas. </p>

<p><strong>Exemplo:</strong> 
var qualquerCoisa = "JS";
var qualquercoisa = "GIRLS";
alert(qualquercoisa);</p>

<p><strong>Estruturada/Orientada à Objetos</strong> </p>

<p>Apesar da linguagem ter sido criada seguindo o paradigma de programação Estruturada, ela também pode ser programada no paradigma Orientado à Objetos (OO). </p>

<p><strong>Hello World</strong></p>

<p><a href="https://goo.gl/vNN86I">https://goo.gl/vNN86I</a></p>

<h3><a id="user-content-atenÇÃo" class="anchor" href="#atenÇÃo" aria-hidden="true"><span class="octicon octicon-link"></span></a><a id="user-content-atenÇÃo" href="#atenÇÃo"></a>ATENÇÃO</h3>

<p>Inicialmente o nome <strong>JavaScript</strong> foi motivo de confusão devido a semelhança com o nome da linguagem Java, mas essas duas tecnologias não estão diretamente relacionadas. Ou seja, JavaScript não é uma implementação especial do Java. Ok !?</p>

<p>Assim como o próprio site do <a href="http://www.java.com/pt_BR/download/faq/java_javascript.xml">Java</a> diz:</p>

<p>A linguagem de programação JavaScript, desenvolvida pela Netscape, Inc., não faz parte da plataforma Java.</p>

<p>Diferenças-chave entre o Java e o JavaScript:</p>

<ul>
<li>Java é uma linguagem de programação OOP, ao passo que Java Script é uma linguagem de scripts OOP.</li>
<li>Java cria aplicações executadas em uma máquina virtual ou em um browser, ao passo que o código JavaScript é executado apenas em um browser.</li>
<li>O código Java precisa ser compilado, ao passo que os códigos JavaScript estão totalmente em texto.</li>
<li>Eles requerem plug-ins diferentes.</li>
</ul>

<hr>

<p>*Itens faltantes:</p>

<ul>
<li>ECMAScript</li>
<li>Ferramentas</li>
<li>Mercado Atual</li>
<li>Referências</li>
</ul>

<p>
  </p>

<p></p>

<p><a href="#jump-to-line">Jump to Line</a></p>

<div id="user-content-jump-to-line">
  <div></div>
    
    Go
</div>

          
        
        <div></div>
      
  


    

      <div>
  <div>
    <ul>
        <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="https://training.github.com">Training</a></li>
      <li><a href="https://shop.github.com">Shop</a></li>
        <li><a href="https://github.com/blog">Blog</a></li>
        <li><a href="https://github.com/about">About</a></li>
        <li><a href="https://help.github.com">Help</a></li>

    </ul>

    <a href="https://github.com">
      
</a>
    <ul>
      <li>© 2015 GitHub, Inc.</li>
        <li><a href="https://github.com/site/terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
        <li><a href="https://github.com/contact">Contact</a></li>
    </ul>
  </div>
</div>

<pre><code>&lt;div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay"&gt;
</code></pre>

<p></p><div>
    <div>
      
      <div>
        <div></div>
      </div>
    </div>
  </div>
  <div>
    <a href="#">
      
    </a>
    <a href="#">
      
    </a>
  </div>
<p></p>

<pre><code>&lt;div id="ajax-error-message" class="flash flash-error"&gt;
  &lt;span class="octicon octicon-alert"&gt;&lt;/span&gt;
  &lt;a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"&gt;&lt;/a&gt;
  Something went wrong with that request. Please try again.
&lt;/div&gt;


  &lt;script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-01a8766fbba2df04677b68fb73599499b1ff20bcc969342c28d30f95fa836d0c.js"&gt;&lt;/script&gt;
  &lt;script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github/index-570c8d5d966722d3285c891ec9d3ebdc3583122c5551a6d25bf146f1c774fcfd.js"&gt;&lt;/script&gt;
</code></pre>

<p>
</p>
</article>
  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

          </div>
        </div>
        <div class="modal-backdrop"></div>
      </div>
  </div>


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.07643s from github-fe116-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-01a8766fbba2df04677b68fb73599499b1ff20bcc969342c28d30f95fa836d0c.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github/index-570c8d5d966722d3285c891ec9d3ebdc3583122c5551a6d25bf146f1c774fcfd.js"></script>
      
      
  </body>
</html>

