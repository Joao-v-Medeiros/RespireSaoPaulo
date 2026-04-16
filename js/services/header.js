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
                    <li><a href="/index.html">home</a></li>
                    <li><a href="/pages/o_que_fazer.html">O Que Fazer</a></li>
                    <li><a href="#">Roteiros</a></li>
                    <li><a href="#">Eventos</a></li>
                    <li><a href="/pages/sobre_nos.html">Sobre nós</a></li>
                    <li><a href="/pages/dicas.html">Dicas Locais</a></li>
                </ul>

                <div class="nav-botoes">
                    <button id="theme-toggle" class="theme-btn">🌙</button>
                    ${authButtons}
                </div>
            </nav>
        </header>
        `;
    }

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

customElements.define('main-header', MyHeader);