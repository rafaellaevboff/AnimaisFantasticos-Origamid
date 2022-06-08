import initAnimaNumeros from './anima-numeros.js'

export default function initFetchAnimais(){
    //async-await é aceito em browsers mais novos, talvez alguns browsers não tenham suporte, para browsers antigos pode se usar o fetch-then
    async function fetchAnimais(url){
        const animaisResposta = await fetch(url);
        const animaisJson = await animaisResposta.json();

        const numerosGrid = document.querySelector('.numeros-grid');

        animaisJson.forEach(animal => {
            const divAnimal = createAnimal(animal);
            numerosGrid.appendChild(divAnimal);
        });
        initAnimaNumeros(); //só inicia depois que o fetch acontecer, daí não dá o problema de antes, de não carregar n atualizar a página
    }

    function createAnimal(animal){
        //console.log(animal);
        const div = document.createElement('div');
        div.classList.add('numero-animal');

        div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
        return div;
    }

    fetchAnimais('assets/json/animaisapi.json');
}