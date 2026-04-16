class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="footer">
                <div class="footer-line-top"></div>

                <div class="footer-left">
                    <b class="respire-so-paulo-container">
                        <span>Respire </span>
                        <span class="so-paulo">São Paulo</span>
                    </b>
                    <p class="o-guia-definitivo">
                        O guia definitivo para quem quer conhecer São
                        Paulo de verdade — com os olhos, o paladar e a
                        alma de quem vive e respira a cidade.
                    </p>
                </div>

                <div class="footer-divider"></div>

                <nav class="footer-nav">
                    <div class="footer-nav-col">
                        <span class="nav-titulo">Explorar</span>
                        <a class="nav-item1" href="#">O que fazer</a>
                        <a class="nav-item1" href="#">Roteiros</a>
                        <a class="nav-item1" href="#">Eventos</a>
                        <a class="nav-item1" href="#">Dicas locais</a>
                    </div>

                    <div class="footer-nav-col">
                        <span class="nav-titulo">Sobre</span>
                        <a class="nav-item1" href="#">Quem somos</a>
                        <a class="nav-item1" href="#">Contato</a>
                    </div>
                </nav>

                <div class="footer-line-bottom"></div>
            </section>
        `;
    }
}

// O comando correto é customElements (minúsculo)
customElements.define('main-footer', MyFooter);