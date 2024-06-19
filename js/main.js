$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    })
    $('#telefone').mascara('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    })
    
    $('#cpf').mascara('000.000.000-00', {
        placeholder: '123.456.789-00'
    })
    
    $('#cep').mascara('00000-000', {
        placeholder: '012345-678'
    })
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    })
})