//é bom isolar o escopo para que se possa reutilizar as variáveis durante o código
function initTabNav(){
    //navegação por tab:
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
    const ativo = 'ativo';

    //fazer verificação se os itens acima existem na página: (se o length for 0 significa false)
    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add(ativo); //ao abrir a página aparecer conteúdo

        function activeTab(index){
            tabContent.forEach((section) => {
                section.classList.remove(ativo);
            })
            const direcao = tabContent[index].dataset.anime;
            tabContent[index].classList.add(ativo, direcao);
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
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
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

function initScroolSuave(){
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    if(linksInternos.length){
        function scrollToSection(event){
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href);
            section.scrollIntoView({
                behavior:'smooth',
                block: 'start',
            }); //não é todo browser que suporta essa função de scroll suave

            //forma alternativa de fazer o scroll suave
            // const topo = section.offsetTop;
            // window.scrollTo({
            //     top: topo,
            //     behavior: 'smooth',
            // });
        };

        linksInternos.forEach(((link) =>{
            link.addEventListener('click', scrollToSection);
        }));   
    }               
}
initScroolSuave();

function initAnimationScroll(){
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    const windowMetade = window.innerHeight * 0.6;
    const ativo = 'ativo';

    if(sections.length){
        function animaScroll(){
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionVisible = sectionTop - windowMetade < 0;
                if(sectionVisible){
                    section.classList.add(ativo);
                }else{
                    section.classList.remove(ativo);
                }
            })
        }
        animaScroll();
        window.addEventListener('scroll', animaScroll);
    }
}
initAnimationScroll();