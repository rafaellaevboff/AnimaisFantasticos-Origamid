import outsideClick from './outsideClick.js';

export default class MenuMobile {
    constructor(menuButton, menuList, events) {
        this.menuButton = document.querySelector(menuButton);
        this.menuList = document.querySelector(menuList);
        this.activeClass = 'active';

        // define o touchstart e o click como argumnento padrão de events se o usuário não definir
        if (events === undefined) this.eventos = ['touchstart', 'click'];
        else this.eventos = events;

        this.openMenu = this.openMenu.bind(this);
        // this.init(); // poderia iniciar aqui direto sem precisar iniciar no script tbm
    }

    openMenu() {
        this.menuList.classList.add(this.activeClass);
        this.menuButton.classList.add(this.activeClass);

        outsideClick(this.menuList, this.eventos, () => {
            this.menuList.classList.remove(this.activeClass);
            this.menuButton.classList.remove(this.activeClass);
        });
    }

    addMenuMobileEvents() {
        this.eventos.forEach((evento) => this.menuButton.addEventListener(evento, this.openMenu));
    }

    init() {
        if (this.menuButton && this.menuList) {
            this.addMenuMobileEvents();
        }
        return this;
    }
}
