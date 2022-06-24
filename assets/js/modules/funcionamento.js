export default class Funcionamento {
    constructor(funcionamento, activeClass) {
        this.funcionamento = document.querySelector(funcionamento);
        this.activeClass = activeClass;
    }

    dadosFuncionamento() {
        this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
        this.horarioFuncionamento = this.funcionamento.dataset.horario.split(',').map(Number);
    }

    dadosAgora() {
        this.dataAgora = new Date();
        this.diaSemana = this.dataAgora.getDay();
        this.horarioAgora = this.dataAgora.getUTCHours() - 3;
        // o utc -3 faz usar o horário de Brasília
    }

    estaAberto() {
        this.semanaAberto = this.diasSemana.indexOf(this.diaSemana) !== -1;
        this.horarioAberto = (this.horarioAgora >= this.horarioFuncionamento[0]
            && this.horarioAgora < this.horarioFuncionamento[1]);
        return this.semanaAberto && this.horarioAberto;
    }

    ativaAberto() {
        if (this.estaAberto()) {
            this.funcionamento.classList.add(this.activeClass);
        }
    }

    init() {
        if (this.funcionamento) {
            this.dadosFuncionamento();
            this.dadosAgora();
            this.ativaAberto();
        }
        return this;
    }
}
