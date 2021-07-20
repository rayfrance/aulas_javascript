function clicou(){
    //alert("Obrigado por clicar!");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar<b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    //window.open("https://globallabs.academy/");
    window.location.href = "https://globallabs.academy/";

}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML ="Passe o mouse aqui"

}

function load(){
    alert("página carregada");
}
 function funcaoChange(elemento){
     console.log(elemento.value);
 }

/*
function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5, 10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(setReplace("Vai Japão", " Japão", " Brasil"));

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/
/*
var d = new Date();
alert(d);
alert(d.getMonth());
alert(d.getMinutes());
*/
/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
};
*/
/*
var count = 0;
while(count <= 5){
    console.log(count);
    count = count + 1; //count++;
};
*/
/*var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/
/*
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
*/
//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista[0]);
//console.log(lista.reverse());
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "));

//var nome = "Rayane France";
//var idade = 21;
//var idade2 = 10;
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade);

//var frase = "Japão é o melhor time do mundo";
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toLocaleLowerCase());
//console.log(frase.toUpperCase());
//alert(frase.replace("Japão", "Brasil"));

