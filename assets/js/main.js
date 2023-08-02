function Calculadora() {
    this.display = document.querySelector('.display');
    this.capturarCliques = () => {
        document.addEventListener('click', evento => {
            const el = evento.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizarConta();
        });
    };
    this.realizarConta = () => {
        try {
            const conta = eval(this.display.value);
            if(!conta) {
                alert('Conta Inválida.');
                return;
            }

            this.display.value = conta;
        } catch (error) {
            alert('Conta Inválida.');
            return;
        }
    };
    this.capturarEnter = () => {
        document.addEventListener('keyup', evento => {
            if (evento.keyCode !== 13) return;
            this.realizarConta();
        });
    };
    this.iniciar = () => {
        this.capturarCliques();
        this.capturarEnter();
    };
    this.addNumDisplay = el => { 
        this.display.value += el.innerText;
        this.display.focus();
    };
    this.clear = el => this.display.value = '';
    this.del = el => this.display.value = this.display.value.slice(0, -1);
}

const calculadora = new Calculadora();
calculadora.iniciar();