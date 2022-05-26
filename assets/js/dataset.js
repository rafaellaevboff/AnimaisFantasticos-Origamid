//const h1 = document.querySelector('h1');
//console.log(Object.prototype.toString.call(h1));

//Dentro o objeto dataset existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com data-
const div = document.querySelector('div');
console.log(div.dataset);

// Os valores selecionam a mesma div acima:
//div = document.querySelector('[data-cor]');
//div = document.querySelector('[data-cor="azul"]');

div.dataset; // DOMStringMap {cor: "azul", width: "500"}

div.dataset.cor; // 'azul'
div.dataset.width; // '500'
div.dataset.tempo = 1000; // DOMStringMap {cor: "azul", width: "500", tempo: "1000"}

delete div.dataset.width; //exclui a propriedade passada

div.dataset.totalHeight = 2000;//vai separar por - no html

/*
EXEMPLO:
<html>
    <div data-anima="left" data-tempo="1000">Div 1</div>
    <div data-anima="right" data-tempo="2000">Div 2</div>
</html>

const divs = document.querySelectorAll('[data-anima]');
divs.forEach((div) => {
 div.classList.add(div.dataset.anima);
});

// adiciona em cada div uma classe com o mesmo nome que o valor de data

VANTAGENS DE USAR DATA ATRIBUTE AO INVÉS DE CLASS - é mais fácil evitar conflitos com os estilos do css, a estrutura fica mais organizada e mais fácil de entender
<div data-anima="left" data-tempo="1000">Div 1</div>
<div class="anima-left tempo-1000">Div 2</div>

O que for traço vai sumir e a próxima letra vai se tornar maiúscula, no caso da nomeação da data-aaaa-ssss = data-aaaaSsss

*/