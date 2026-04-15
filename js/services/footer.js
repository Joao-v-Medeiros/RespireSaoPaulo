class MyFooter extends HTMLElement {
    connectedcallback() {
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
                                <a class="nav-item1">O que fazer</a>
                                <a class="nav-item1">Roteiros</a>
                                <a class="nav-item1">Eventos</a>
                                <a class="nav-item1">Dicas locais</a>
                            </div>

                            <div class="footer-nav-col">
                                <span class="nav-titulo">Sobre</span>
                                <a class="nav-item1">Quem somos</a>
                                <a class="nav-item1">Contato</a>
                            </div>
                        </nav>

                        <div class="footer-line-bottom"></div>
                    </section>
    }
}

CustomElementRegistry.define('main-footer', MyFooter)