//é bom isolar o escopo para que se possa reutilizar as variáveis durante o código
function initTabNav(){
    //navegação por tab:
    const tabMenu = document.querySelectorAll('.js-tabMenu li');
    const tabContent = document.querySelectorAll('.js-tabContent section');
    const ativo = 'ativo';

    //fazer verificação se os itens acima existem na página: (se o length for 0 significa false)
    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add(ativo); //ao abrir a página aparecer conteúdo

        function activeTab(index){
            tabContent.forEach((section) => {
                section.classList.remove(ativo);
            })
            tabContent[index].classList.add(ativo);
        };
        //a função acima faz todas as sections retirarem a classe ativo primeiro e depois adiciona a classe ativo na section selecionada

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click',() => {
                activeTab(index); //ao clicar na imagem vai chamar a função criada acima dessa atual, a activeTab
            });
        });
        //foi feito por index, mas pode ser feito através de classe, caso o conteúdo não esteja na ordem ou se preferir fazer com classe
    }
}
initTabNav(); //vai iniciar a função acima

function initAccordion(){
    //accordion list
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const ativo = 'ativo';
    if(accordionList.length){
        accordionList[0].classList.toggle(ativo);
        accordionList[0].nextElementSibling.classList.toggle(ativo)

        function activeAccordion(){
            this.classList.toggle(ativo);
            this.nextElementSibling.classList.toggle(ativo);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        })
    }
}
initAccordion();