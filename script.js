

function fecharhora(){

    var horaini = document.getElementById('txthoraentrada')
    var horafin = document.getElementById('txthorasaida')
    var res = document.getElementById('res')


    if (horaini.value == 0 && horafin.value == 0) {
        alert('Digite dados, antes de finalizar!!!')

    }else{

        var hi = Number(horaini.value)
        var hf = Number(horafin.value)

        var tot = hf - hi
        var min = (tot.toFixed(2))

        if ( tot >= 0 && tot < 0.15 ){
            res.innerHTML = ''
            res.innerHTML += `<p>Valor total à pagar R$4,00</p>`
            res.innerHTML += `<p>O carro ficou ${min} minutos no pátio!!!`
            res.innerHTML += `<p>MUITO OBRIGADO, VOLTE SEMPRE!!!!</p>`
        
        }else if( tot >= 0.15 && tot < 0.30 ){
            res.innerHTML = ''
            res.innerHTML = `Valor total à pagar R$8,00`
            res.innerHTML += `<p>O carro ficou ${min} minutos no pátio!!!`
            res.innerHTML += `<p>MUITO OBRIGADO, VOLTE SEMPRE!!!!</p>`

        }else if( tot >= 0.30 && tot < 0.45){
            res.innerHTML = ''
            res.innerHTML = `Valor total à pagar R$12,00`
            res.innerHTML += `<p>O carro ficou ${min} minutos no pátio!!!`
            res.innerHTML += `<p>MUITO OBRIGADO, VOLTE SEMPRE!!!!</p>`

        }else if( tot >= 0.45 && tot < 0.60){
            res.innerHTML = ''
            res.innerHTML = `Valor total à pagar R$16,00`
            res.innerHTML += `<p>O carro ficou ${min} minutos no pátio!!!`
            res.innerHTML += `<p>MUITO OBRIGADO, VOLTE SEMPRE!!!!</p>`

        }else{
            res.innerHTML = ''
            res.innerHTML = `Valor total à pagar R$30,00`
            res.innerHTML += `<p>O carro ficou ${min} minutos no pátio!!!`
            res.innerHTML += `<p>MUITO OBRIGADO, VOLTE SEMPRE!!!!</p>`
        }
        horaini.value = ''/*comando que limpa as duas telas, podendo
                            colocar novos valores, mas mesmo assim dá o resultado pedido*/
        horafin.value = ''
        horaini.focus()
        horafin.focus()
    }
}
        


    
    












