class QuadradoColorido extends Quadrado{

    constructor(lado,cor){
        super(lado);
        this.cor = cor;
    }

    imprimeForma() {
        //alert(`Tipo de forma: ${this.tipoDeForma} - Área: ${this.calculaArea()}`);
        // ssssssssss //alert(`Tipo de Forma: ${this.tipoDeForma}`);
        try{
            alert(`tipo de forma: ${this.tipoDeForma} ${this.cor} - Área: ${this.calculaArea()}`);
            console.log("aqui");
        } catch (error) {
            alert("O código está com erro!")
        }

    }
}