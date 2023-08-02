function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        clearDisplay() {
            this.display.value = '';
        },

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        apagarUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizarConta();
                }
            });
        },

        realizarConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta Inválida');
                    return;
                }

                this.display.value = conta;
            } catch (erro) {
                alert('Conta Inválida');
                return;
            }
        },

        cliqueBotoes() {
            document.addEventListener('click', evento => {
                const el = evento.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagarUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizarConta();
                }

            });
        },
        btnParaDisplay(valor){
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();