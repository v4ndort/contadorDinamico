function contar(){
    // 1 - Definindo variáveis do input.
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    // 2- Definindo alerta para caso de dados não preenchidos.
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Erro. Faltam dados!')
        res.innerHTML = 'Preencha e tente novamente !'
    }

    // 3 - Definindo caso dados preenchidos correamente.
    else {

        res.innerHTML = 'Contando <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        // 3.1 - Definindo caso  passo = 0.
        if ( p <= 0 ){

            window.alert('Passo inválido, considerando passo =  1.')
            p = 1 
        }

        // 3.2 - Definindo contagem crescente
        if ( i < f ){ 

            for ( let c = i ; c <= f ; c += p ){ res.innerHTML += `${c} \u{1F449}` }

        }
        // 3.3 - Definindo contagem decrescente
        else{

            for (let c = i ; c >= f ; c -= p ) { res.innerHTML += `${c} \u{1F449} `}


        }
        
        res.innerHTML += `\u{1F3C1}`

    }


}