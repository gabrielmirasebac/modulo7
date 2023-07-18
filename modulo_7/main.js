const form = document.getElementById('form-numeros');

function validaCampoB(ValidaCAmpo){
    return campoB.value > campoA.value;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const campoB = document.getElementById('campoB');
    if (!validaCampoB(campoB.value)){
        alert('O valor do segundo número está incorreto, preencha novamente conforme o enunciado');
    }else{
        alert('Parabéns, os numeros informados estão corretos') 
    }
})

console.log(form);