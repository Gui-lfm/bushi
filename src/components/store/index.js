import { createStore } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    lista :[
        {
            episodes: "26",
            genres: "Ação, Aventura, Comedia, Histórico, Shounen",
            id: "49535265",
            imageUrl: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx205-xxonQKyJtVcw.png",
            rating: "****",
            releaseYear: "05/2004",
            source: "Animação original",
            synopsis: "Fuu, uma jovem de 15 anos, quer encontrar \"o samurai com cheiro de girassol\", e tudo o que sabe a respeito dele é que ele habita a outra extremidade do Japão. No seu caminho, cruza com Mugen, um vagabundo de 20 anos, e Jin, um rônin de 20 anos, que deverão segui-la devido a uma aposta estupidamente perdida.",
            title: "Samurai Champloo",
            animeStatus: "Finalizado",
            animeCreator: "Shinichiro Watanabe",
            animationStudio: "Manglobe"
        },
        {
            episodes: "75",
            genres: "Ação, Drama, Fantasia, Shounen",
            id: "49535738",
            imageUrl: "https://animesonehd.xyz/wp-content/uploads/2019/08/shingeki-no-kyojin-1-temporada.jpg",
            rating: "***",
            releaseYear: "08/2013",
            source: "Mangá",
            synopsis: "Eren Jaeger jurou eliminar todos os Titãs, mas em uma batalha desesperada ele se torna aquilo que mais odeia. Com seus novos poderes, ele luta pela liberdade da humanidade, combatendo os monstros que ameaçam seu lar.",
            title: "Attack on Titan ",
            animeStatus: "Em exibição ",
            animeCreator: "Hajime Isayama",
            animationStudio: "Production I.G, Wit Studio, MAPPA"
        },
        {
            episodes: "22",
            genres: " Ação, Sci-Fi, Policial, Psicológico, Thriller",
            id: "49535433",
            imageUrl: "https://trecobox.com.br/wp-content/uploads/2018/10/psycho-pass-case-1-poster.jpeg",
            rating: "****",
            releaseYear: "10/2012",
            source: "Original",
            synopsis: "Em um mundo onde os avanços da tecnologia permitem que uma pessoa seja considerada criminosa antes mesmo de cometer o crime, uma policial persegue um criminoso excepcional que pretende destruir o sistema.",
            title: "Psycho-Pass",
            animeStatus: "Finalizado ",
            animeCreator: "Katsuyuki Motohiro",
            animationStudio: "Production I.G"
        },
        {
            episodes: "26",
            genres: "Ação, Sci-Fi, Psicológico, Drama, Mecha",
            id: "49535303",
            imageUrl: "https://br.web.img2.acsta.net/pictures/18/12/07/12/40/4530128.jpg",
            rating: "*****",
            releaseYear: "10/1995",
            source: "Original",
            synopsis: "Quinze anos após  um cataclismo conhecido como Segundo Impacto, Shinji Ikari se junta ao NERV, grupo liderado por seu pai, como um dos pilotos adolescentes de robôs gigantes que enfrentam criaturas alienígenas chamadas de anjos.",
            title: "Neon Genesis Evangelion",
            animeStatus: "Finalizado",
            animeCreator: "Hideaki Anno",
            animationStudio: "Gainax, Tatsunoko Production"
        },
        {
            episodes: "105",
            genres: "Ação, Comedia, Escola, Shounen",
            id: "49535280",
            imageUrl: "https://animesbr.biz/wp-content/uploads/2019/07/phuYuzqWW9ru8EA3HVjE9W2Rr3M.jpg",
            rating: "****",
            releaseYear: "04/2016",
            source: "Mangá",
            synopsis: "Por toda a sua vida, Izuku sonhou ser um heroi — um objetivo ambicioso para qualquer um, mas especialmente desafiador para um garoto sem superpoderes. Isso mesmo: em um mundo onde 80% da população tem algum tipo de Dom especial, Izuku teve a má sorte de nascer completamente normal. Mas isso não vai impedi-lo de se matricular em uma das academias de herois mais prestigiosas do mundo.",
            title: "Boku no Hero Academia",
            animeStatus: "Em exibição",
            animeCreator: "Kōhei Horikoshi",
            animationStudio: "Bones"
        },
        {
            episodes: "26",
            genres: "Ação, Aventura, Comedia, Drama, Sci-Fi",
            id: "49535259",
            imageUrl: "https://i.pinimg.com/originals/d4/b6/f8/d4b6f83fba3e9bfaacbd723ecdf76863.jpg",
            rating: "*****",
            releaseYear: "04/1998",
            source: "Animação original",
            synopsis: "O advento dos portais hiperespaciais, que permitem a viagem entre planetas em tempo hábil, deram início a uma Era Espacial no Sistema Solar. Spike, um ex-mafioso, e Jet, um ex-policial, são \"cowboys\", caçadores de recomepensas que voam pelo universo em busca de cabeças a prêmio. Juntos com Faye, uma misteriosa mulher desmemoriada com uma imensa dívida; Ed, uma criança selvagem com um tino para o hacking; e Ein, um corgi dotado de inteligência humana; os cinco levam uma estranha vida em comunidade a bordo da nave interplanetária Bebop",
            title: "Cowboy Bebop",
            animeStatus: "Finalizado",
            animeCreator: "Shinichiro Watanabe/Keiko Nobumoto",
            animationStudio: "Sunrise"
        },
        {
            episodes: "24",
            genres: "Ação, Comédia , Sobrenatural, Shounen",
            id: "49535253",
            imageUrl: "https://img1.ak.crunchyroll.com/i/spire3/02c909684baa37d6ef70a9df742d58951610752067_full.jpg",
            rating: "****",
            releaseYear: "10/2020",
            source: "Mangá",
            synopsis: "sofrimento, arrependimento, vergonha: os sentimentos negativos dos humanos tornam-se Maldições, causando terríveis acidentes que podem levar até mesmo à morte. E pra piorar, Maldições só podem ser exorcizadas por outras Maldições. Certo dia, para salvar amigos que estavam sendo atacados por Maldições, Yuji Itadori engole o dedo do Ryomen-Sukuna, absorvendo sua Maldição. Ele então decide se matricular no Colégio Técnico de Feitiçaria de Tóquio, uma organização que combate as Maldições... e assim começa a heroica lenda do garoto que tornou-se uma Maldição para exorcizar uma Maldição.",
            title: "Jujutsu Kaisen",
            animeStatus: "Em exibição",
            animeCreator: "Gege Akutami",
            animationStudio: "MAPPA"
        },
        {
            episodes: "26",
            genres: " Ação, Histórico, Shounen, Sobrenatural ",
            id: "49535242",
            imageUrl: "http://vortexcultural.com.br/images/2019/09/Demon-Slayer-1-poster.jpg",
            rating: "****",
            releaseYear: "04/2019",
            source: "Mangá",
            synopsis: "Japão, era Taisho. Tanjiro, um bondoso jovem que ganha a vida vendendo carvão, descobre que sua família foi massacrada por um demônio. E pra piorar, Nezuko, sua irmã mais nova e única sobrevivente, também foi transformada num demônio. Arrasado com esta sombria realidade, Tanjiro decide se tornar um matador de demônios para fazer sua irmã voltar a ser humana, e para matar o demônio que matou sua família. Um triste conto sobre dois irmãos, onde os destinos dos humanos e dos demônios se entrelaçam, começa agora.",
            title: "Demon Slayer: Kimetsu no Yaiba",
            animeStatus: "Em exibição",
            animeCreator: "Koyoharu Gotouge",
            animationStudio: "Ufotable"
        },
        {
            episodes: "12",
            genres: " Ação, Comedia, Slice of Life, Sobrenatural",
            id: "49535228",
            imageUrl: "https://www.nautiljon.com/images/anime/00/93/mob_psycho_100_5039.jpg?0",
            rating: "*****",
            releaseYear: "07/2016",
            source: "Web Mangá",
            synopsis: "Kageyama Shigeo, o \"Mob\", é um garoto que não leva muito jeito pra se expressar, mas que é um poderoso telepata. Decidido a levar uma vida normal, Mob suprime seus poderes extrasensoriais, mas quando suas emoções atingem um pico de 100%, algo terrível lhe acontece! Rodeado de falsos telepatas, espíritos do mal e misteriosas organizações, como Mob reagirá? Que decisões ele vai tomar? Baseado numa história original de ONE, a sensação do mundo das webcomics, conhecido por ter criado One-Punch Man.",
            title: "Mob Psycho 100",
            animeStatus: "Finalizado",
            animeCreator: "ONE",
            animationStudio: "Bones"
        },
        {
            episodes: "64",
            genres: " Ação, Aventura, Comédia, Drama, Fantasia, Shounen",
            id: "49535071",
            imageUrl: "https://sm.ign.com/ign_br/tv/f/fullmetal-/fullmetal-alchemist-brotherhood-1_qzyx.jpg",
            rating: "*****",
            releaseYear: "04/2009",
            source: "Mangá",
            synopsis: "O descaso com as leis da alquimia tomou dois dos membros de Edward Elric e deixou a alma de Alphonse presa a uma armadura. Para recuperar o que perderam, os irmãos procuram a Pedra Filosofal. O exército corrupto, os homúnculos, alquimistas estrangeiros... Inimigos e aliados alterarão o curso dos irmãos Elric, mas nada conseguirá mudar seu propósito ou romper o elo entre os dois. ",
            title: "Fullmetal Alchemist: Brotherhood",
            animeStatus: "Finalizado",
            animeCreator: "Hiromu Arakawa",
            animationStudio: "Bones"
        }]
}

function animes(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'ADD_ANIME':
            return { ...state, lista: [...state.lista, action.title] }
        default:
            return state

    }
}


const store = createStore(animes);

export default store