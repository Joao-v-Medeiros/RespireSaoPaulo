class MyHeader extends HTMLElement { // Use PascalCase para classes (boa prática)
    connectedCallback() {
        // Use crases ( ` ) para conseguir quebrar linhas no HTML
        this.innerHTML = ` 
        <header id="cabecalho">
            <nav id="navegacao">
                <div class="imagem">
                    <img src="/assets/imgs/image 2.png" alt="">
                </div>

                <div class="text">
                    <a href="/pages/o_que_fazer.html"> O que fazer</a>
                    <a href="#">Roteiros</a>
                    <a href="#">Eventos</a>
                    <a href="/pages/uc3.html">Dicas locais</a>
                </div>

                <div class="login">
                    <a href="/pages/login.html" class="entrar"> Entrar </a>
                    <a href="/pages/cadastro.html"> Cadastre-se </a>
                </div>
            </nav>
        </header>
        `;
    }
}

// O nome da classe aqui deve ser exatamente o mesmo nome definido lá em cima
customElements.define('main-header', MyHeader);