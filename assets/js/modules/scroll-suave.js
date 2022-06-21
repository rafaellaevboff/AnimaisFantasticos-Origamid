export default function initScroolSuave() {
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        }); // não é todo browser que suporta essa função de scroll suave

        // forma alternativa de fazer o scroll suave
        // const topo = section.offsetTop;
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth',
        // });
    }

    if (linksInternos.length) {
        linksInternos.forEach(((link) => {
            link.addEventListener('click', scrollToSection);
        }));
    }
}
