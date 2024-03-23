class Forma {

        constructor(tipoDeForma) {
        //this.tipoDeForma = 'Forma Abstrata';
        this.tipoDeForma = tipoDeForma;
    }

    imprimeForma() {
        //alert(`Tipo de forma: ${this.tipoDeForma} - Área: ${this.calculaArea()}`);
        // ssssssssss //alert(`Tipo de Forma: ${this.tipoDeForma}`);
        try{
            alert(`tipo de forma: ${this.tipoDeForma} - Área: ${this.calculaArea()}`);
            console.log("aqui");
        } catch (error) {
            alert("O código está com erro!")
        }

    }

    calculaArea() {
        throw new Error('O método calculaArea() deve ser implementado na subclasse.');
    }
}