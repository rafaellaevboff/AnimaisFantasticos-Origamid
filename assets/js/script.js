import initScroolSuave from "./modules/scroll-suave.js";
import initAnimationScroll from "./modules/scroll-animacao.js"
import initAccordion from "./modules/accordion.js"
import initTabNav from "./modules/tabnav.js"
import initModal from './modules/modal.js'
import initTooltip from './modules/tooltip.js'
import initDropDownMenu from './modules/dropdown-menu.js'
import initMenuMobile from './modules/menu-mobile.js'
import initFuncionamento from './modules/funcionamento.js'
import initFetchAnimais from './modules/fetch-animais.js'

initTabNav();
initScroolSuave();
initAnimationScroll();
initAccordion();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();


//import {teste1 as testando1, teste2} from "./modules/teste" //importando algumas funções do arquivo teste
//import * as teste from './modules/teste.js'
// testando1();
// teste2();
// console.log(teste);
// console.log(teste.teste1());
// console.log(teste.num);

// console.log(teste.esseNome); //se não colocar o arquivo antes n vai chamar

//o this no module retorna undefined, já dora de modules retorna Window
//modules é assíncrono, não espera uma função carregar pra depois carregar a outra

/*
use strict
previne algumas ações, considerando como erros, por padrão modules está no modo strict

'use strict'; //p ativar strict(lembrando que se estiver no module, não precisa colocar)
nome = 'Ford'; // erro, variável global
delete Array.prototype; // erro, não deletável
window.top = 200; // erro, não pode mudar
const arguments = 3.14; // escrever em palavra reservada
*/