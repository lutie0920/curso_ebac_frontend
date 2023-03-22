const form = document.getElementById('form-number');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const n1= parseFloat(document.getElementById('campoA').value);
    const n2 = parseFloat(document.getElementById('campoB').value);
    
    function validaNumero (n1, n2){
        return n2 > n1;
    }

    formEvalido = validaNumero(n1, n2);
    if(formEvalido) {
        alert('Sucesso!! O segundo número é maior que o Primeiro número');
  
        campoA.value = ' ';
        campoB.value = ' ';

    } else {
        alert('Erro!! O segundo número é menor que o primeiro número ');

        campoA.value = ' ';
        campoB.value = ' ';
    }
})



