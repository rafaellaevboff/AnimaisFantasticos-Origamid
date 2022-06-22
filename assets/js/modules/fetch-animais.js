import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
    // async-await é aceito em browsers mais novos
    // talvez alguns browsers não tenham suporte, para browsers antigos pode se usar o fetch-then

    // cria a div contendo informações com o total de animais
    function createAnimal(animal) {
        const div = document.createElement('div');
        div.classList.add('numero-animal');
        div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
        return div;
    }

    // preenche cada animal no DOM
    const numerosGrid = document.querySelector(target);
    function preencherAnimais(animal) {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
    }

    // anima os nums de cada animal
    function animaAnimaisNumeros() {
        const animaNumeros = new AnimaNumeros('[data-numero', '.numeros', 'ativo');
        animaNumeros.init();
    }

    // puxa os animais através de um arquivo json e cria cada animal usando createAnimal
    async function criarAnimais() {
        try {
            // Fetch, espera resposta e transforma a resposta em json
            const animaisResposta = await fetch(url);
            const animaisJson = await animaisResposta.json();

            // Após a transformação de json, ativa as funções para preencher e animar os nums
            animaisJson.forEach((animal) => preencherAnimais(animal));
            animaAnimaisNumeros();
            // só inicia dps q o fetch acontecer
            // daí n dá o problema de antes, de n carregar/atualizar a pag
        } catch (erro) {
            console.log(erro);
        }
    }

    return criarAnimais();
}
