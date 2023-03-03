let number = document.querySelector('input#value')
let list = document.querySelector('select#list')
let res = document.querySelector('div#res')
let valores = []
let soma = 0;

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function calcular() {
    if (isNumero(number.value) && !inLista(number.value, valores)) {
        valores.push(Number(number.value))
        let addList = document.createElement('option');
        addList.text = `Valor ${number.value} adicionado.`;
        list.appendChild(addList);
        res.innerHTML = ``
    } else {
        alert('Valor inválido ou já encontrado na lista.⤵')
    }
    number.value = ``
    number.focus()
}


function finalizando() {
    res.innerHTML = ``
    valores.sort(function(a, b){return a - b})
    for(let chave = 0; chave < valores.length; chave++) {
        soma += valores[chave];
    }
    res.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${valores[valores.length -1]}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${valores[0]}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${soma/valores.length}.</p>`
}

// Ou..
/*
function finalizando() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}
*/
