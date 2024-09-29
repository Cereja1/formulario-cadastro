$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });

    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true // Corrigido de "requerido" para "required"
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true // Corrigido de "requerido" para "required"
            },
            endereco: {
                required: true // Corrigido de "requerido" para "required"
            },
            cep: {
                required: true // Corrigido de "requerido" para "required"
            },
            cpf: {
                required: true // Corrigido de "requerido" para "required"
            },
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    });
});
