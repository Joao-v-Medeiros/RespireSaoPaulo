class MyHeader extends HTMLElement {
    connectedCallback() {
        this.temaSalvo = localStorage.getItem('tema');

        if (this.temaSalvo === 'claro') {
            document.body.classList.add('tema-claro');
        } else {
            document.body.classList.remove('tema-claro');
        }

        this.render();
        this.initTheme();
    }

    render() {
        const sessao = sessionStorage.getItem('sessao_ativa');
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
                    <li><a href="/index.html">Home</a></li>
                    <li><a href="/pages/lugares.html">O Que Fazer</a></li>
                    <li><a href="/pages/roteiros.html">Roteiros</a></li>
                    <li><a href="/pages/eventos.html">Eventos</a></li>
                    <li><a href="/pages/sobre_nos.html">Sobre nós</a></li>
                    <li><a href="/pages/dicas.html">Dicas Locais</a></li>
                </ul>
                <div class="nav-botoes">
                    <button id="theme-toggle" class="theme-btn" style="cursor:pointer; font-size: 20px; background:none; border:none;">${this.temaSalvo === 'claro' ? '☀️' : '🌙'}</button>
                    ${authButtons}
                </div>
            </nav>
        </header>
        `;
    }

    initTheme() {
        const btn = this.querySelector('#theme-toggle');
        const body = document.body;

        btn.addEventListener('click', () => {
            body.classList.toggle('tema-claro');

            if (body.classList.contains('tema-claro')) {
                localStorage.setItem('tema', 'claro');
                btn.textContent = '☀️';
            } else {
                localStorage.setItem('tema', 'escuro');
                btn.textContent = '🌙';
            }
        });
    }
}

customElements.define('main-header', MyHeader);