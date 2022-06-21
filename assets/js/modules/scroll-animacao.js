export default function initAnimationScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    const windowMetade = window.innerHeight * 0.6;
    const ativo = 'ativo';

    function animaScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionVisible = sectionTop - windowMetade < 0;

            if (sectionVisible) {
                section.classList.add(ativo);
            } else if (section.classList.contains(ativo)) {
                section.classList.remove(ativo);
            }
        });
    }

    if (sections.length) {
        animaScroll();
        window.addEventListener('scroll', animaScroll);
    }
}
