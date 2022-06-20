//console.log(teste.senha); //posso ter acesso a outros arquivos importando eles
export default function initAccordion(){
    //accordion list
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    const ativo = 'ativo';

    function activeAccordion(){
        this.classList.toggle(ativo);
        this.nextElementSibling.classList.toggle(ativo);
    }

    if (accordionList.length){
        accordionList[0].classList.toggle(ativo);
        accordionList[0].nextElementSibling.classList.toggle(ativo)

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        })
    }
}
