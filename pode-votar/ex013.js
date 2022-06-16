
function verificar() {
    var data = new Date ()
    var ano = data.getFullYear()
    var year = document.getElementById('txtidade')
    var res = document.querySelector('div#res') 

// var idade = 14
if (year.value.length == 0 || Number (year.value) > ano )  {
    window.alert('Verifique os dados e tente novamente!!') }
    else{
        var idade = ano - Number (year.value)
    }

   // console.log (`Você tem ${idade} anos`)
if (idade < 16) {
    res.innerHTML = `Você tem ${idade} anos e ainda não pode votar.`
} else  if (idade < 18 || idade > 65){
    res.innerHTML = `Você tem ${idade} anos. Seu voto é opcional.`
}else {
    res.innerHTML = `Você tem ${idade} anos. Seu voto é obrigatorio!`

    
          
} 
res.style.textAlign = 'center'
          
}

