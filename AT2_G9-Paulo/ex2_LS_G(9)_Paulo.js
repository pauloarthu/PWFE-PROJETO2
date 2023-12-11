function obterLIstaProduto() {
    return JSON.parse(localStorage.getItem('mos')) || [];
    }
    function salvarListaProdutos(lista) {
        localStorage.setItem('mos', JSON.stringify(lista));
    }
    let listaProdutos = obterLIstaProduto();
    
    function adicionaProduto() {
        const nome = document.getElementById('nome').value;
        const preco = document.getElementById('preco').value;
        if(nome && preco) {
            listaProdutos.push(nome, preco);
            salvarListaProdutos(listaProdutos);
        }
    }
    
/*****************************************************************************************************/    



function seguro(){
    let v = document.getElementById("sim").checked;
    let f = document.getElementById("nao").checked; 
    if(v == true){
        document.getElementById("plano").style.display = 'block';
    }else if(f == true){
        document.getElementById("plano").style.display = 'none';
}
}

function vida() {
    let nome = document.getElementById("nome").value;
    let preco = document.getElementById("preco").value;
    let resutado = preco * 0.90;
    document.getElementById("mostrar2").innerHTML = "preço a pagar: " + resutado;
    return JSON.parse(localStorage.getItem('mos')) || [];
}
function animal() {
    let nome = document.getElementById("nome").value;
    let preco = document.getElementById("preco").value;
    let resutado = preco * 0.80;
    document.getElementById("mostrar2").innerHTML = "preço a pagar: " + resutado;
    return JSON.parse(localStorage.getItem('mos')) || [];
}
function mostrar() {
    let escolha = document.getElementById("plano");
    let valor = escolha.options[escolha.selectedIndex].value;
    let nome = document.getElementById("nome").value;
    if (valor == "vida") {
        document.getElementById("mostrar1").innerHTML = "Nome: " + nome;
        vida();

    } else if(valor == "animal") {
        document.getElementById("mostrar1").innerHTML = "Nome: " + nome;
        animal();

    } else if(valor == "Escolha") { 
        document.getElementById("mostrar3").innerHTML = "Nome: " + nome;
        let val = document.getElementById("preco").value;
        document.getElementById("mostrar4").innerHTML = "preço a pagar: " + val;
        document.getElementById("mostrar1").innerHTML = listaProdutos;
    }else {
        document.getElementById("mostrar3").innerHTML = "Nome: " + nome;
        let val = document.getElementById("preco").value;
        document.getElementById("mostrar4").innerHTML = "preço a pagar: " + val;
    }
}









//estilização teste

function parteP() {
    document.getElementById("quadrado1").style.marginTop = '-430px'
    document.getElementById("quadrado1").style.marginLeft = '530px';
    document.getElementById("quadrado1").style.height = '500px';
    document.getElementById("quadrado1").style.width = '440px';
    document.getElementById("quadrado1").style.opacity = '1';
    document.getElementById("quadrado1").style.transition = '500ms';

    document.getElementById("totalcaixa").style.marginLeft = '1150px';
    document.getElementById("totalcaixa").style.height = '340px';
    document.getElementById("totalcaixa").style.width = '300px';
    document.getElementById("totalcaixa").style.opacity = '0.5';
    document.getElementById("totalcaixa").style.transition = '500ms';

    document.getElementById("quadrado2").style.display = 'none';
    seguro();
}


function parteT() {
    document.getElementById("quadrado2").style.marginTop = '-450px'
    document.getElementById("quadrado2").style.marginLeft = '530px';
    document.getElementById("quadrado2").style.height = '500px';
    document.getElementById("quadrado2").style.width = '440px';
    document.getElementById("quadrado2").style.opacity = '1';
    document.getElementById("quadrado2").style.transition = '500ms';

    document.getElementById("totalcaixa").style.marginLeft = '10px';
    document.getElementById("totalcaixa").style.height = '340px';
    document.getElementById("totalcaixa").style.width = '300px';
    document.getElementById("totalcaixa").style.opacity = '0.5';
    document.getElementById("totalcaixa").style.transition = '500ms';

    document.getElementById("quadrado1").style.display = 'none';
}