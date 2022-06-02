export default function initFuncionamento(){
    const funcionamento = document.querySelector('[data-semana');
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
    const horarioFuncionamento = funcionamento.dataset.horario.split(',').map(Number);
    //console.log(diasSemana);

    const dataAgora = new Date();
    const diaSemana = dataAgora.getDay();
    const horarioAgora = dataAgora.getHours();

    //const teste = [1,2,3,4,5].indexOf(5);
    const semanaAberto = diasSemana.indexOf(diaSemana) !== -1
    const horarioAberto = (horarioAgora >= horarioFuncionamento[0] && horarioAgora < horarioFuncionamento[1])

    if(semanaAberto && horarioAberto){
        funcionamento.classList.add('aberto');
    }

}


/*
const agora = new Date();
console.log(agora.getDay());
console.log(agora.getDate());
console.log(agora.getMonth()+1);

const futuro = new Date('Dec 25 2022 00:00:01');
console.log(futuro);

function tranformarDias(tempo){
    return tempo / (24 * 60 * 60 * 1000); //se quero dia/hora, é só apagar os anteriores
}

const diasAgora = tranformarDias(agora.getTime());
const diasFuturo = tranformarDias(futuro.getTime());

//getTime() millissegundos de 1970 até agora
console.log(diasFuturo - diasAgora); //quantos dias para chegar o Natal
*/