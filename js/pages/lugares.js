// ============================
// DADOS DOS LUGARES
// cada lugar tem: título, subtítulo, imagem, textos, endereço, transporte e mapa
// ============================

var lugares = {

    paranapiacaba: {
        titulo: "Paranapiacaba",
        subtitulo: "Um Refúgio Histórico na Grande São Paulo",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Vila_de_Paranapiacaba_-_SP.jpg/1280px-Vila_de_Paranapiacaba_-_SP.jpg",
        desc1: "Conheça um pedacinho da Inglaterra em solo brasileiro e deixe-se encantar pela magia desse lugar histórico e encantador.",
        desc2: "Localizada a apenas 30 km do centro de Santo André, no Alto da Serra do Mar, encontra-se a encantadora Vila de Paranapiacaba. Construída pela São Paulo Railway no século XIX para abrigar seus funcionários durante a concessão da estrada de ferro Santos – Jundiaí, essa pequena vila inglesa é um verdadeiro tesouro histórico e cultural preservado.",
        endereco: "Vila de Paranapiacaba, Santo André – SP",
        trem: "CPTM Linha 10 + Ônibus 424 (Intermunicipal)",
        carro: "Rodovia Anchieta (km 29) + Rodovia Índio Tibiriça",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14740.0!2d-46.4569!3d-23.7706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d3f5!2sParanapiacaba!5e0!3m2!1spt-BR!2sbr!4v1"
    },

    pedragrande: {
        titulo: "Pedra Grande",
        subtitulo: "O mirante mais famoso do interior paulista",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Mirante_da_Pedra_Grande_-_Atibaia.jpg/1280px-Mirante_da_Pedra_Grande_-_Atibaia.jpg",
        desc1: "Contemple a imensidão do horizonte paulista do topo de uma das maiores rochas monolíticas da região.",
        desc2: "A Pedra Grande de Atibaia é um dos destinos naturais mais impressionantes do estado de São Paulo. Com mais de 1.400 metros de altitude, oferece uma vista espetacular da Serra da Mantiqueira e das cidades ao redor. Ideal para trekking, escalada, mountain bike e simplesmente apreciar a natureza.",
        endereco: "Parque Municipal da Pedra Grande, Atibaia – SP",
        trem: "Não disponível por trem diretamente",
        carro: "Rodovia Dom Pedro I (SP-065) até Atibaia, depois siga as placas para o Parque",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29400.0!2d-46.567!3d-23.117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf1!2sPedra+Grande+Atibaia!5e0!3m2!1spt-BR!2sbr!4v1"
    },

    holambra: {
        titulo: "Holambra",
        subtitulo: "A Cidade das Flores com Alma Holandesa",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Holambra_-_Flores.jpg/1280px-Holambra_-_Flores.jpg",
        desc1: "A cidade das flores mantém a herança holandesa em cada detalhe, das cores dos jardins à arquitetura típica.",
        desc2: "Holambra é conhecida como a Capital Nacional das Flores e foi fundada por imigrantes holandeses em 1948. A cidade produz mais de 40% das flores comercializadas no Brasil. O ponto alto é a Expoflora, realizada anualmente em setembro, mas a cidade é encantadora o ano todo com seus jardins coloridos.",
        endereco: "Holambra – SP, a 130 km de São Paulo",
        trem: "Não disponível por trem",
        carro: "Rodovia dos Bandeirantes (SP-348) até Campinas, depois SP-107 sentido Holambra",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117600.0!2d-47.063!3d-22.636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8d!2sHolambra!5e0!3m2!1spt-BR!2sbr!4v1"
    },

    masp: {
        titulo: "MASP",
        subtitulo: "O maior museu de arte do Hemisfério Sul",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/MASP_-_Museu_de_Arte_de_S%C3%A3o_Paulo_-_S%C3%A3o_Paulo%2C_Brasil.jpg/1280px-MASP_-_Museu_de_Arte_de_S%C3%A3o_Paulo_-_S%C3%A3o_Paulo%2C_Brasil.jpg",
        desc1: "Um marco da arquitetura moderna projetado por Lina Bo Bardi, suspenso sobre a Avenida Paulista.",
        desc2: "O Museu de Arte de São Paulo Assis Chateaubriand (MASP) é considerado o museu de arte mais importante da América Latina. Seu acervo reúne mais de 11.000 obras, incluindo pinturas de Velázquez, Rembrandt, Renoir e artistas brasileiros como Portinari e Di Cavalcanti.",
        endereco: "Av. Paulista, 1578 – Bela Vista, São Paulo – SP",
        trem: "Metrô Linha 2 (Verde) – Estação Trianon-MASP",
        carro: "Av. Paulista, estacionamentos nas ruas próximas ao museu",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.0!2d-46.6566!3d-23.5613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sMASP!5e0!3m2!1spt-BR!2sbr!4v1"
    },

    pinacoteca: {
        titulo: "Pinacoteca do Estado",
        subtitulo: "O museu de arte mais antigo de São Paulo",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Pinacoteca_do_Estado_de_S%C3%A3o_Paulo_-_Fachada.jpg/1280px-Pinacoteca_do_Estado_de_S%C3%A3o_Paulo_-_Fachada.jpg",
        desc1: "Fundado em 1905, o museu mais antigo de SP abriga obras fundamentais da arte brasileira.",
        desc2: "A Pinacoteca do Estado de São Paulo foi criada em 1905 e é o museu de arte mais antigo do estado. Seu acervo conta com mais de 10.000 obras de arte, com destaque para pinturas, esculturas, gravuras e desenhos de artistas brasileiros dos séculos XIX e XX.",
        endereco: "Praça da Luz, 2 – Luz, São Paulo – SP",
        trem: "Metrô Linha 4 (Amarela) – Estação Luz",
        carro: "Largo General Osório, estacionamentos próximos ao Parque da Luz",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0!2d-46.6338!3d-23.5344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce585e5b7d7957%3A0x4b5e6e6e6e6e6e6e!2sPinacoteca+do+Estado!5e0!3m2!1spt-BR!2sbr!4v1"
    },

    ibirapuera: {
        titulo: "Parque do Ibirapuera",
        subtitulo: "O pulmão verde no coração de São Paulo",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Parque_Ibirapuera_aerial.jpg/1280px-Parque_Ibirapuera_aerial.jpg",
        desc1: "Um dos maiores parques urbanos do mundo, com museus, lagoas, ciclovia e shows ao ar livre.",
        desc2: "O Parque do Ibirapuera foi inaugurado em 1954 e é o maior parque urbano de São Paulo. Com 1,6 km², abriga o Museu Afro Brasil, a Oca, o MAM, o Planetário e o Auditório Ibirapuera projetado por Oscar Niemeyer.",
        endereco: "Av. Pedro Álvares Cabral, s/n – Vila Mariana, São Paulo – SP",
        trem: "Metrô Linha 5 (Lilás) – Estação Eucaliptos",
        carro: "Portões na Av. Pedro Álvares Cabral e Av. República do Líbano",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14624.0!2d-46.6577!3d-23.5874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a4a72aba8a3%3A0x1a2b3c4d5e6f7a8b!2sParque+Ibirapuera!5e0!3m2!1spt-BR!2sbr!4v1"
    },

    horto: {
        titulo: "Horto Florestal",
        subtitulo: "Natureza e trilhas a 40 minutos de São Paulo",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Horto_Florestal.jpg/1280px-Horto_Florestal.jpg",
        desc1: "Trilhas, cachoeiras e natureza exuberante sem precisar sair da cidade.",
        desc2: "O Parque Estadual Alberto Löfgren, popularmente conhecido como Horto Florestal, fica no bairro de Tremembé. Oferece trilhas bem sinalizadas, uma linda cachoeira, lago com pedalinhos e muito verde. Ideal para famílias que querem contato com a natureza.",
        endereco: "Rua do Horto, 931 – Horto Florestal, São Paulo – SP",
        trem: "Metrô Linha 1 (Azul) – Estação Tucuruvi + ônibus",
        carro: "Rua do Horto, 931 – bairro Horto Florestal, zona norte de SP",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7318.0!2d-46.627!3d-23.508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7c3ab12!2sHorto+Florestal+SP!5e0!3m2!1spt-BR!2sbr!4v1"
    },

    petar: {
        titulo: "PETAR",
        subtitulo: "Cavernas e ecoturismo no Vale do Ribeira",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Caverna_do_Diabo_-_SP.jpg/1280px-Caverna_do_Diabo_-_SP.jpg",
        desc1: "O Parque Estadual Turístico do Alto Ribeira tem mais de 300 cavernas catalogadas e é Patrimônio da UNESCO.",
        desc2: "O PETAR é um dos principais destinos de ecoturismo do Brasil. Localizado no Vale do Ribeira, abriga cavernas famosas como a de Santana e a do Morro Preto. Ideal para quem gosta de trekking, rapel e esportes na natureza.",
        endereco: "Iporanga – SP, a cerca de 340 km de São Paulo",
        trem: "Sem acesso direto por trem — recomendado veículo próprio",
        carro: "BR-116 até Registro, depois SP-165 até Iporanga",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235200.0!2d-48.621!3d-24.573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d04!2sPETAR!5e0!3m2!1spt-BR!2sbr!4v1"
    },

    bararcos: {
        titulo: "Bar dos Arcos",
        subtitulo: "Coquetelaria sofisticada no centro histórico",
        imagem: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200",
        desc1: "Localizado no subsolo do Teatro Municipal, ambiente histórico único com drinks incríveis.",
        desc2: "O Bar dos Arcos é um dos bares mais exclusivos de São Paulo. Situado nos subterrâneos do majestoso Teatro Municipal, o espaço mantém a arquitetura original com seus arcos de tijolinho. A carta de drinks é assinada por bartenders premiados e os petiscos completam a experiência.",
        endereco: "Praça Ramos de Azevedo, s/n – República, São Paulo – SP",
        trem: "Metrô Linha 3 (Vermelha) – Estação República",
        carro: "Estacionamentos na Av. São João e Rua Libero Badaró",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7314.8!2d-46.6382!3d-23.5442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5998!2sTeatro+Municipal+SP!5e0!3m2!1spt-BR!2sbr!4v1"
    },

    rua13: {
        titulo: "Rua 13 de Maio",
        subtitulo: "O coração animado do Bixiga",
        imagem: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200",
        desc1: "A rua mais famosa do Bixiga pulsa com bares, música ao vivo e o melhor clima noturno de SP.",
        desc2: "A Rua 13 de Maio, no bairro do Bixiga (Bela Vista), é o coração da vida noturna paulistana. Com dezenas de bares, restaurantes italianos e casas de show, a rua atrai multidões nos fins de semana. O bairro é o pedaço italiano de São Paulo e a gastronomia por lá é incrível.",
        endereco: "Rua 13 de Maio – Bixiga (Bela Vista), São Paulo – SP",
        trem: "Metrô Linha 2 (Verde) – Estação Brigadeiro",
        carro: "Estacionamentos na região da Av. Paulista e Rua Santo Antônio",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7313.6!2d-46.649!3d-23.5579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59!2sRua+13+de+Maio+Bixiga!5e0!3m2!1spt-BR!2sbr!4v1"
    },

    vilamadalena: {
        titulo: "Vila Madalena",
        subtitulo: "A alma boêmia e artística de São Paulo",
        imagem: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=1200",
        desc1: "Arte de rua, bares alternativos e galerias que definem a cena cultural noturna paulistana.",
        desc2: "A Vila Madalena é um dos bairros mais charmosos de São Paulo. Famosa pelo Beco do Batman, um corredor a céu aberto repleto de grafites incríveis, o bairro tem bares descolados, restaurantes de todos os tipos, livrarias e galerias de arte misturadas em ruas cheias de vida.",
        endereco: "Vila Madalena – São Paulo – SP",
        trem: "Metrô Linha 2 (Verde) – Estação Vila Madalena",
        carro: "Estacionamentos na Rua Aspicuelta e Rua Wisard",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14624.0!2d-46.6916!3d-23.5597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce574f!2sVila+Madalena!5e0!3m2!1spt-BR!2sbr!4v1"
    },

    tasquinha: {
        titulo: "A Tasquinha",
        subtitulo: "Cozinha portuguesa autêntica no Bixiga",
        imagem: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200",
        desc1: "Bacalhau de qualidade, vinhos portugueses e o ambiente acolhedor de uma tasca de verdade.",
        desc2: "A Tasquinha é um dos restaurantes mais queridos do Bixiga. Especializada em culinária portuguesa, oferece pratos tradicionais como bacalhau à Brás, polvo à lagareiro e pastéis de nata fresquinhos. A carta de vinhos portugueses é uma das melhores da cidade.",
        endereco: "Rua 13 de Maio, 668 – Bela Vista, São Paulo – SP",
        trem: "Metrô Linha 2 (Verde) – Estação Brigadeiro",
        carro: "Estacionamentos na região da Av. Paulista",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7313.6!2d-46.649!3d-23.557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59!2sBixiga+SP!5e0!3m2!1spt-BR!2sbr!4v1"
    },

    mercadao: {
        titulo: "Mercadão de SP",
        subtitulo: "O famoso Mercado Municipal Paulistano",
        imagem: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=1200",
        desc1: "O sanduíche de mortadela mais famoso do Brasil e uma imensa variedade de produtos.",
        desc2: "O Mercado Municipal Paulistano, o famoso Mercadão, é um dos pontos turísticos mais icônicos de São Paulo. Inaugurado em 1933, o imponente edifício abriga mais de 1.500 produtos diferentes. O sanduíche de mortadela e o pastel de bacalhau são as atrações gastronômicas mais famosas.",
        endereco: "Rua da Cantareira, 306 – Centro, São Paulo – SP",
        trem: "Metrô Linha 3 (Vermelha) – Estação São Bento",
        carro: "Estacionamento próprio no subsolo do Mercadão",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7314.4!2d-46.629!3d-23.541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5985!2sMercado+Municipal+SP!5e0!3m2!1spt-BR!2sbr!4v1"
    }

};


// ============================
// MODO CLARO/ESCURO
// ============================

// quando a página carrega, vejo se o usuário já escolheu um tema antes
var temaSalvo = localStorage.getItem("tema");

// se tiver salvo, aplico o tema salvo
if (temaSalvo === "dark") {
    document.body.classList.add("dark");
    document.getElementById("btnTema").textContent = "☀️";
}

// função que troca o tema quando clica no botão
function trocarTema() {
    var body = document.body;
    var btn = document.getElementById("btnTema");

    // se estiver no modo escuro, vai pro claro
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        btn.textContent = "🌙";
        localStorage.setItem("tema", "light"); // salva a preferência
    } else {
        // se estiver no modo claro, vai pro escuro
        body.classList.add("dark");
        btn.textContent = "☀️";
        localStorage.setItem("tema", "dark"); // salva a preferência
    }
}


// ============================
// FILTRO DE CATEGORIAS
// ============================

// função que mostra/esconde seções dependendo da categoria clicada
function mostrarCategoria(categoria) {
    // pego todas as seções
    var secDestaque = document.getElementById("sec-destaque");
    var secCultura  = document.getElementById("sec-cultura");
    var secNatureza = document.getElementById("sec-natureza");
    var secNoturna  = document.getElementById("sec-noturna");
    var secComer    = document.getElementById("onde-comer");
    // roteiros, eventos e dicas foram removidos (outros do grupo farão)

    // escondo todas primeiro
    secDestaque.style.display = "none";
    secCultura.style.display  = "none";
    secNatureza.style.display = "none";
    secNoturna.style.display  = "none";
    secComer.style.display    = "none";

    // aí mostro só as que fazem sentido
    if (categoria === "todos") {
        // mostra tudo
        secDestaque.style.display = "block";
        secCultura.style.display  = "block";
        secNatureza.style.display = "block";
        secNoturna.style.display  = "block";
        secComer.style.display    = "block";

    } else if (categoria === "cultura") {
        secCultura.style.display = "block";

    } else if (categoria === "natureza") {
        secNatureza.style.display = "block";

    } else if (categoria === "noturna") {
        secNoturna.style.display = "block";
    }

    // atualizo qual tag/botão fica com a classe "ativo"
    // primeiro tiro o ativo de todos
    var todasTags = document.querySelectorAll(".tag");
    for (var i = 0; i < todasTags.length; i++) {
        todasTags[i].classList.remove("ativo");
    }

    // depois coloco ativo no que foi clicado
    document.getElementById("tag-" + categoria).classList.add("ativo");
}


// ============================
// ABRIR PÁGINA DE DETALHE
// ============================

// função chamada quando o usuário clica num card
function abrirDetalhe(id) {
    // pego os dados do lugar pelo id
    var lugar = lugares[id];

    // se não encontrar, não faz nada
    if (!lugar) {
        return;
    }

    // preencho os elementos da página de detalhe
    document.getElementById("detalheTitulo").textContent  = lugar.titulo;
    document.getElementById("detalheSubtitulo").textContent = lugar.subtitulo;
    document.getElementById("detalheNome").textContent    = lugar.titulo + ": " + lugar.subtitulo;
    document.getElementById("detalheDesc1").textContent   = lugar.desc1;
    document.getElementById("detalheDesc2").textContent   = lugar.desc2;
    document.getElementById("detalheEndereco").textContent = lugar.endereco;
    document.getElementById("detalheTrem").textContent    = lugar.trem;
    document.getElementById("detalheCarro").textContent   = lugar.carro;

    // coloco a imagem como fundo do hero de detalhe
    var hero = document.getElementById("detalheHero");
    hero.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url('" + lugar.imagem + "')";

    // coloco o mapa
    document.getElementById("detalheMapa").src = lugar.mapa;

    // escondo a página principal e mostro a de detalhe
    document.getElementById("paginaPrincipal").style.display = "none";
    document.getElementById("paginaDetalhe").style.display   = "block";

    // vai pro topo da página
    window.scrollTo(0, 0);
}


// ============================
// VOLTAR PARA O INÍCIO
// ============================

function voltarInicio() {
    // escondo o detalhe e mostro o início
    document.getElementById("paginaDetalhe").style.display  = "none";
    document.getElementById("paginaPrincipal").style.display = "block";

    // volta pro topo
    window.scrollTo(0, 0);
}


// ============================
// ROLAR ATÉ UMA SEÇÃO ESPECÍFICA
// ============================

function irParaSecao(idSecao) {
    // primeiro garanto que a seção está visível
    var secao = document.getElementById(idSecao);

    if (secao) {
        // mostro a seção caso esteja escondida
        secao.style.display = "block";

        // rolo até ela suavemente
        secao.scrollIntoView({ behavior: "smooth" });
    }
}


// ============================
// BUSCA SIMPLES
// ============================

// filtra os cards ao digitar na barra de busca
function filtrarBusca() {
    var texto = document.getElementById("campoBusca").value.toLowerCase();

    // pego todos os cards da página
    var todosCards = document.querySelectorAll(".card");

    for (var i = 0; i < todosCards.length; i++) {
        var card = todosCards[i];
        // pego o texto do card (título + descrição)
        var conteudo = card.textContent.toLowerCase();

        // se o texto do campo aparecer no card, mostro; senão, escondo
        if (conteudo.includes(texto)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}