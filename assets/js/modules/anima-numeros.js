export default class AnimaNumeros {
    constructor(nums, observerTarget, observerClass) {
        this.numeros = document.querySelectorAll(nums);
        this.observerTarget = document.querySelector(observerTarget);
        this.observerClass = observerClass;

        // bind o this do objeto ao callback da mutação
        this.handleMutation = this.handleMutation.bind(this);
    }

    // recebe um elemento do DOM com número em seu texto
    // incrementa a partir de 0 até o número final
    static incrementarNumero(numero) { // é static pq não usa nada de fora, a não ser o parâmentro
        const total = +numero.innerText;
        const incremento = Math.floor(total / 100);
        let start = 0;
        const timer = setInterval(() => {
            start += incremento;
            numero.innerText = start;
            if (start > total) {
                numero.innerText = total;
                // pra dar o número exato, pq com arredondamento do incremento o num muda
                clearInterval(timer);
            }
        }, 25 * Math.random());
    }

    // ativa incrementar número para cada num selecionado do DOM, ou seja, qualquer num no DOM
    animaNumeros() {
        this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
    }

    // função que ocorre qnd a mutação ocorrer
    handleMutation(mutation) {
        if (mutation[0].target.classList.contains(this.observerClass)) {
            this.observer.disconnect();
            this.animaNumeros();
        }
    }

    // add o MutationObserver para verificar qnd a classe ativo é add ao elemento target
    addMutationObserver() {
        this.observer = new MutationObserver(this.handleMutation);
        this.observer.observe(this.observerTarget, { attributes: true });
    }

    init() {
        if (this.numeros.length && this.observerTarget) {
            this.addMutationObserver();
        }
        return this;
    }
}
