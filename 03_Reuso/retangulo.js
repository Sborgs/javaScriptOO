class Retangulo extends Forma{

    constructor(base,altura) {
        // super();
        // this.tipoDeForma = "Quadrado";
        super("Retangulo")
        this.base = base;
        this.altura = altura;
    }

    calculaArea() {
        return this.base * this.altura;
    }
}