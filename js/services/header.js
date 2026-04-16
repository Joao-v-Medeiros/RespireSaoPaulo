<<<<<<< HEAD
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
=======
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.render();
        this.initTheme();
    }

    render() {
        // Verifica se o usuário está logado via sessionStorage
        const sessao = sessionStorage.getItem('sessao_ativa');
        
        // Se estiver logado, mostra "Sair". Se não, mostra "Entrar/Cadastro"
        const authButtons = sessao 
            ? `<button onclick="AuthService.logout()" class="btn-entrar">Sair</button>`
            : `<a href="/pages/login.html" class="btn-entrar">Entrar</a>
               <a href="/pages/cadastro.html" class="btn-cadastro">Cadastre-se Grátis</a>`;

        this.innerHTML = `
        <header id="cabecalho">
            <nav class="nav-container">
                <a href="/index.html" class="nav-brand">
                    <img src="/assets/imgs/logo.png" class="nav-logo-img" alt="RespireSP Logo" />
                    <span class="nav-nome">Respire<span>SP</span></span>
                </a>

                <ul class="nav-links">
                    <li><a href="/pages/o_que_fazer.html">O Que Fazer</a></li>
                    <li><a href="#">Onde Comer</a></li>
                    <li><a href="#">Roteiros</a></li>
                    <li><a href="#">Eventos</a></li>
                    <li><a href="/pages/sobre_nos.html">Sobre nós</a></li>
                    <li><a href="#">Dicas Locais</a></li>
                </ul>

                <div class="nav-botoes">
                    <button id="theme-toggle" class="theme-btn">🌙</button>
                    ${authButtons}
>>>>>>> bb8996f7f515de0b2725d3d74e266ad11e7fcda8
                </div>
            </nav>
        </header>
        `;
    }
<<<<<<< HEAD
}

// O nome da classe aqui deve ser exatamente o mesmo nome definido lá em cima
=======

    initTheme() {
        const btn = this.querySelector('#theme-toggle');
        
        // Recupera o tema salvo
        if (localStorage.getItem('tema') === 'claro') {
            document.body.classList.add('tema-claro');
            btn.textContent = '☀️';
        }

        btn.addEventListener('click', () => {
            document.body.classList.toggle('tema-claro');
            const isClaro = document.body.classList.contains('tema-claro');
            btn.textContent = isClaro ? '☀️' : '🌙';
            localStorage.setItem('tema', isClaro ? 'claro' : 'escuro');
        });
    }
}

>>>>>>> bb8996f7f515de0b2725d3d74e266ad11e7fcda8
customElements.define('main-header', MyHeader);