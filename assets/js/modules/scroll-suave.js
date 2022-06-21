export default class ScrollSuave {
    constructor(links, options) {
        this.linksInternos = document.querySelectorAll(links);
        if (options === undefined) {
            this.options = { behavior: 'smooth', block: 'start' };
        } else {
            this.options = options;
        }
        this.scrollToSection = this.scrollToSection.bind(this);
        // o bind vai declarar qual vai ser o this
        // nesse caso se scrollToSection for usado dps vai se referenciar ao que foi passado no bind
    }

    scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView(this.options);
    }

    addLinkEvent() {
        this.linksInternos.forEach((link) => {
            link.addEventListener('click', this.scrollToSection);
        });
    }

    init() {
        if (this.linksInternos.length) {
            this.addLinkEvent();
        }
        return this;
    }
}
