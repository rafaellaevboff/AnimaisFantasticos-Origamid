import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
    // async-await é aceito em browsers mais novos
    // talvez alguns browsers não tenham suporte, para browsers antigos pode se usar o fetch-then

    function createAnimal(animal) {
        // console.log(animal);
        const div = document.createElement('div');
        div.classList.add('numero-animal');

        div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
        return div;
    }

    async function fetchAnimais(url) {
        try {
            const animaisResposta = await fetch(url);
            const animaisJson = await animaisResposta.json();

            const numerosGrid = document.querySelector('.numeros-grid');

            animaisJson.forEach((animal) => {
                const divAnimal = createAnimal(animal);
                numerosGrid.appendChild(divAnimal);
            });

            initAnimaNumeros();
            // só inicia dps q o fetch acontecer
            // daí n dá o problema de antes, de n carregar/atualizar a pag
        } catch (erro) {
            console.log(erro);
        }
    }

    fetchAnimais('assets/json/animaisapi.json');
}
