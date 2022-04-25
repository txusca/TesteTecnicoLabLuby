console.log(questao1(3, 'a'));
console.log(questao2([1, 2, 3, 4]));
console.log(questao3([1,2,'', undefined]));
console.log(questao4([["c",2],["d",4]]));
console.log(questao5([5,4,3,2,5], 5,3));
console.log(questao6([1,2,3,3,2,4,5,4,7,3]));
console.log(questao7([1,2,3,4, 5],[1,2,3,4, 5, 2]));
console.log(questao8([1, 2, [3], [4, 5]]));
console.log(questao9([1, 2, 3, 4, 5], 2));
console.log(questao10([6, 8], [8, 9]));

function questao1(qtdRepeticao, conteudo) {
    let array = [];
    
    for (let i = 0; i < qtdRepeticao; i++) {
        array.push(conteudo);
    }
    
    
    return array;
}

function questao2(array) {
    let arrayInvertido = [];
    for (let i = array.length - 1; i >= 0; i--) {
        arrayInvertido.push(array[i]);
    }

    return arrayInvertido;
}

function questao3(array) {
    let novoArray = [];
    
    array.forEach(element => {
        if (element != null && element != '') {
            novoArray.push(element);
        }
    });

    return novoArray;
}

function questao4(array) {
    let objeto = {};

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        objeto[element[0]] = element[1];
    }
    return objeto;
}

// utilização do arguments para passagem de parâmetro dinâmica.
function questao5() {
    let novoArray = arguments[0];
    console.log(novoArray);

    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < novoArray.length; j++) {
            if (arguments[i] == novoArray[j]) {
                novoArray.splice(j, 1)
            }
            
        }
    }

    return novoArray;
}

function questao6(array) {
    let novoArray = array.filter((value, i) => array.indexOf(value) == i)
    return novoArray;
}

function questao7(array1, array2) {
    let pts = 0;

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                pts++;
            }
        }        
    }

    if (pts === array1.length && pts === array2.length) {
        return true;
    } else {
        return false;
    }
}

function questao8(array) {
    let novoArray = [];

    // para uma proposta mais profunda a forma mais prática é utilizando a função infiniteRecursive
    // return infiniteRecursive(array);

    array.forEach(element => {
        if (Array.isArray(element)) {
            element.forEach(value => novoArray.push(value));
        } else {
            novoArray.push(element);
        }

    });

    return novoArray;
}

function infiniteRecursive(array) {
    // usando a função pronta flat 
    return array.flat(Infinity);
}

function questao9(array, limitador) {
    let novoArray = [];

    for (let i = 0; i < array.length; i += limitador) {
        novoArray.push(array.slice(i, i + limitador));
    }

    return novoArray;
}

function questao10(array1, array2) {
    let valoresIguais = [];

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                valoresIguais.push(array1[i]);
            }
        }        
    }

    return valoresIguais;
}