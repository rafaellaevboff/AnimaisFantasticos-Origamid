export default function initAnimaNumeros(){
    
    function animaNumeros(){
        const numeros = document.querySelectorAll('[data-numero');

        numeros.forEach((numero) =>{
            const total = +numero.innerText;
            const incremento = Math.floor(total / 100);
            let start = 0;
            const timer = setInterval(() =>{
                start += incremento;
                numero.innerText = start;
                if (start > total){
                    numero.innerText = total; //pra dar o número exato, por que com arredondamento do incremento o número muda
                    clearInterval(timer);
                }
            }, 25 * Math.random());
        })
    }

    const observador = new MutationObserver(handleMutation);

    function handleMutation(mutation){
        if (mutation[0].target.classList.contains('ativo')){
            observador.disconnect();
            animaNumeros();
        }
    }

    const observerTarget = document.querySelector('.numeros');
    observador.observe(observerTarget, { attributes: true });
}
