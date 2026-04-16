// Configuração do Tailwind (Caso não use build step)
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#ff9069",
                "background": "#0b0e12",
                "surface": "#0b0e12",
                "on-background": "#f5f6fc",
            },
            fontFamily: {
                "headline": ["Epilogue"],
                "body": ["Plus Jakarta Sans"],
            }
        }
    }
};

// Dados dos Roteiros (Exemplo para renderização dinâmica)
const roteiros = [
    {
        titulo: "1 Dia em SP",
        tag: "CLÁSSICO",
        tempo: "12h",
        rating: "4.9",
        img: "https://images.unsplash.com/photo-1578002171601-902a5a7645a9?q=80&w=800",
        itens: ["Amanhecer no MASP", "Almoço na Liberdade", "Passeio no Ibirapuera", "Drinks nos Jardins"]
    },
    {
        titulo: "Fim de Semana Cultural",
        tag: "ARTE & HISTÓRIA",
        tempo: "2 Dias",
        rating: "5.0",
        img: "/assets/imgs/masp.jpg",
        itens: ["Pinacoteca", "Farol Santander", "Theatro Municipal", "Noite de Jazz"]
    },
    {
        titulo: "Roteiro Gastronômico",
        tag: "SABORES DE SP",
        tempo: "8h",
        rating: "4.8",
        img: "https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?q=80&w=800",
        itens: ["Mercadão Municipal", "Cafés em Pinheiros", "Beco do Batman", "Jantar Rooftop"]
    }
];

// Função para renderizar os cards
function renderizarRoteiros() {
    const container = document.getElementById('roteiros-container');
    if(!container) return;

    container.innerHTML = roteiros.map(r => `
        <article class="bg-[#13171C] rounded-[16px] overflow-hidden group hover:translate-y-[-8px] transition-all duration-500 shadow-xl border border-white/5">
            <div class="relative h-64 overflow-hidden">
                <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="${r.img}" alt="${r.titulo}"/>
                <div class="editorial-gradient absolute inset-0"></div>
                <div class="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <span class="material-symbols-outlined text-xs">schedule</span> ${r.tempo}
                </div>
                <div class="absolute bottom-4 left-4">
                    <span class="bg-white/10 backdrop-blur-md text-[#ff5500] text-[10px] font-bold tracking-[0.1rem] px-2 py-1 rounded uppercase">${r.tag}</span>
                </div>
            </div>
            <div class="p-8">
                <h3 class="font-headline text-2xl font-black mb-6 group-hover:text-[#ff5500] transition-colors">${r.titulo}</h3>
                <ul class="space-y-4 text-sm text-white/60">
                    ${r.itens.map(item => `
                        <li class="flex items-start gap-3">
                            <span class="w-1.5 h-1.5 rounded-full bg-[#ff5500] mt-1.5 shrink-0"></span>
                            ${item}
                        </li>
                    `).join('')}
                </ul>
            </div>
        </article>
    `).join('');
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderizarRoteiros();
});