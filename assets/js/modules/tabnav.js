//é bom isolar o escopo para que se possa reutilizar as variáveis durante o código
export default function initTabNav(){
    //navegação por tab:
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
    const ativo = 'ativo';

    function activeTab(index){
        tabContent.forEach((section) => {
            section.classList.remove(ativo);
        })
        const direcao = tabContent[index].dataset.anime;
        tabContent[index].classList.add(ativo, direcao);
    };
    //a função acima faz todas as sections retirarem a classe ativo primeiro e depois adiciona a classe ativo na section selecionada

    //fazer verificação se os itens acima existem na página: (se o length for 0 significa false)
    if (tabMenu.length && tabContent.length){
        tabContent[0].classList.add(ativo); //ao abrir a página aparecer conteúdo

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click',() => {
                activeTab(index); //ao clicar na imagem vai chamar a função criada acima dessa atual, a activeTab
            });
        });
        //foi feito por index, mas pode ser feito através de classe, caso o conteúdo não esteja na ordem ou se preferir fazer com classe
    }
}
