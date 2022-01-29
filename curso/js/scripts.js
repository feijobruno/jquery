$(document).ready(function(){

// var teste = 65 < 60;
// console.log(teste);

// var undf;
// console.log(typeof(undf));

// var nome = "Bruno";
// console.log(nome[0]); // O console mostrará "P"
// console.log(nome[4]); // O console mostrará "o"
// console.log(nome[10]); // O console mostrará undefined

// var temperatura;
// console.log(typeof(temperatura)) // undefined

// var temperatura = 35; // number
// console.log(typeof(temperatura))

// var temperatura = null; 
// console.log(typeof(temperatura))

// Aula 10 - Trabalhando com o DOM

// var texto_caixa_azul = document.getElementById("caixa_azul").innerHTML;
// document.getElementById("caixa_azul").innerHTML = '<h1>' + texto_caixa_azul + '</h1>'; 

// document.getElementById("caixa_amarela").innerHTML = '<h1>' + 'Caixa amarela' + '</h1>'; 

// Aula 11 - Funções

// function soma_numeros(num1 , num2){
//     return num1 + num2;
// }

// console.log("Resultado da soma: " + soma_numeros(2, 5));

// function valor_imc(peso,altura) {
//     var imc = peso / (altura * altura);
//     return imc;
// }


// var meu_peso = parseFloat(document.getElementById("peso").innerHTML);
// var minha_altura = parseFloat(document.getElementById("altura").innerHTML);

// var meu_imc = valor_imc(meu_peso,minha_altura);

// document.getElementById("imc").innerHTML = meu_imc.toFixed(2);

// Aula 12 - Arrays
// var alunos = ["Bruno", "Mariana", "Duda"];
// var num_primos = [2, 3, 5, 7, 11, 13];

// console.log(alunos.length); //3
// console.log(alunos[0]);  // o console mostrará "Bruno"

// var grupos = [ 
//     [ "João" , "Maria" ],
//     [ "Pedro" , "Joana", "André", "Júlio" ],
//     [ "Carolina" , "Helena", "Marcelo" ]
// ];

// console.log(grupos[1][1]);

// var cursos = [ "HTML", "Python", "PHP" ];
// cursos.push("Javascript");
// console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP", "Javascript" ]
// cursos.unshift("Bootstrap");
// console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP", "Javascript" ]
// cursos.pop();
// console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP" ]

// cursos.splice(2, 1); // Remover elemento
// console.log(cursos);

// cursos.shift();
// console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP" ]

// var ingredientes = [ "pão branco", "queijo", "presunto" ];
// ingredientes[0] = "pão integral";
// console.log(ingredientes);  // O console mostrará [ "pão integral", "queijo", "presunto" ]


// var alunos = [ "João" , "Maria", "José", "Fernanda", "Pedro", "Elisa" ];
// console.log( alunos.slice(0,3) );

// O console mostrará [ "João" , "Maria", "José" ]


// var alunos = [ "João" , "Maria", "José", "Fernanda", "Pedro", "Elisa" ];
// console.log( alunos.slice(-2,) );

// O console mostrará [ "João" , "Maria", "José", "Fernanda" ]

// /* O slice começa no primeiro elemento, e vai até o penúltimo elemento, neste caso o índice 4, 
// com este elemento excluído. */

// console.log( alunos.slice(-3,) );
// // O console mostrará [ "Fernanda", "Pedro", "Elisa" ]
// // O slice inclui os três últimos elementos.


// Aula 13 - Objetos
// var funcionario = {
//     'nome': 'Bruno Feijó Rocha',
//     'ano_nasc': 1984,
//     'cpf': '111.111.111.11',
//     'cargo': 'Analista de Sistemas'
// };

// console.log(funcionario['nome']);
// console.log(funcionario.ano_nasc);

// funcionario.cargo = "Engenheiro de Software";
// funcionario.faculdade = "Infnet";
// console.log(funcionario);

// var cursos = [
//     {
//         'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
//         'avaliacoes': 680,
//         'alunos': 2300,
//         'categorias': ['programacao', 'tecnologia']
//     },
//     {
//         'titulo': 'Aprenda PHP e faça sites dinâmicos',
//         'avaliacoes': 180,
//         'alunos': 350,
//         'categorias': ['desenvolvimento web', 'programacao']
//     },
//     {
//         'titulo': 'Excel do Zero ao Avançado',
//         'avaliacoes': 420,
//         'alunos': 1800,
//         'categorias': ['produtividade', 'gestão']
//     }
// ];

// console.log(typeof(cursos));
//console.log(cursos[1].categorias[0]);

//cursos[2].categorias[1] = 'Administração de empresas';
// console.log(cursos);

// // Aula 14 - Métodos dos objetos
// var aluno = {
//     'nome': 'Maria',
//     'sobrenome': 'Pereira',
//     'ano_nasc': 1992,
//     'nome_completo' : function(){
//         var n_completo = this.nome + " " + this.sobrenome;
//         return n_completo;
//     },
//     'idade': function(){
//         var ano = 2022;
//         return ano - this.ano_nasc;
//     }
// }

// console.log(aluno.nome_completo());
// console.log("Idade: " + aluno.idade());

// Aula 16 - Eventos
// document.getElementById("click-me").onclick = function(){
//     alert("Você clicou no botão");
// }

// document.getElementById("hover-me").onmouseover = function(){
//     alert("Você passou com o cursor no botão");
// }

// document.getElementById("leave-me").onmouseout = function(){
//     alert("Você saiu com o cursor do botão");
// }

// document.onkeydown = function(){
//     alert('Você apertou a tecla: ' + event.keyCode);
// }

// function button_clicked(){
//     alert("Você clicou no botão");
// }

// Aula 17 - Manipulação do CSS

// document.getElementById("botao_cor").onclick = function() {
//     document.getElementById("botao_cor").style.height = "100px";
// };

// document.getElementById("botao_cor").onclick = function() {
//     this.style['background-color'] = "purple";
//     this.style['transform'] = "translateX(100px)";
// };

// Aula 18 - Outros métodos getElement
// exemplo = document.getElementsByClassName("exemplo");

// exemplo[0].innerHTML = "teste 01";
// console.log(exemplo);

// var paragrafos = document.getElementsByTagName("p");
// console.log(paragrafos);

// Aula 19 - Loop for e For/IN
// nomes = ['Bruno', 'Duda', 'Mariana'];

// for(var a = 0; a < nomes.length ; a++){
//     console.log(nomes[a]);
// }

// var carro = {
//     'Ano': 2018,
//     'Modelo': 'Fox',
//     'Cilindradas': '1.8',
//     'Combustível': 'Gasolina'
// }

// for (var prop in carro) {
//     console.log( prop + ': ' + carro[prop] );

// }

// Aula 24 - BOM
// window.onmousemove = function(e) {
//     // console.log('eixo y: ' + e.pageY );
//     // console.log('eixo x: ' + e.pageX );
//     if(e.pageY < 5){
//         alert('Não perca os descontos exclusivos na seção de promoção');
//     }
// }

// Aula 25 - Local Storage

//window.localStorage.setItem("nome", "Bruno");
// o objeto window pode ser omitido quando trabalhamos com o local storage

// A consulta aos dados armazenados em local storage é semelhante à consulta de valores em um objeto.
// Podemos usar a notação com ponto ou com colchetes
// console.log(localStorage['nome']);
// localStorage.removeItem("nome");

// document.getElementById("enviar-nome").onclick = function () {
//     // Guardar o nome digitado em local storage
//     var nome = document.getElementById("nome-usuario").value;
//     localStorage.setItem("nome", nome);

//     //Esconder o formulário
//     document.getElementById("name-field").style.display = "none";

//     // Atualizar e mostrar a msg de boas-vindas
//     document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + ", tudo bem?";
//     document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?";
//     document.getElementById("welcome-area").style.display = "initial";

// }

// if(localStorage.nome) {
//     //Esconder o formulário
//     document.getElementById("name-field").style.display = "none";
//     // Atualizar e mostrar a msg de boas-vindas
//     document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + ", tudo bem?";
//     document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?";
//     document.getElementById("welcome-area").style.display = "initial";
// }

// document.getElementById("not-me").onclick = function () {
//     // Remover chave nome do local storage
//     localStorage.removeItem("nome");

//     // Esconder msg de boas-vindas
//     document.getElementById("welcome-area").style.display = "none";

//     //Mostrar formulário
//     document.getElementById("name-field").style.display = "initial";
// }

// Aula 26 - Data e hora
// var data_hoje = new Date();
// console.log(data_hoje);

// var nova_data = new Date(2016,0,10);
// // var nova_data = new Date("2020-03-18");

// // Dia do mês
// console.log(nova_data.getDate());
// console.log(data_hoje);

// var data_nascimento = "1984-08-15";
// var ano_nascimento = new Date(data_nascimento).getFullYear();
// var ano_atual = new Date().getFullYear();
// var idade = ano_atual - ano_nascimento;
// console.log(idade);

// var envio = new Date("2022-01-15");
// envio = envio.getTime();

// var entrega = new Date("2022-01-20");
// entrega = entrega.getTime();

// var dias = (entrega - envio) / 86400000;
// document.getElementById("dias_entrega").innerHTML = dias;

// Aula 27 - Métodos Tempo

// console.log("Mensagem 1");

// window.setTimeout(function() {
//     console.log("Mensagem 2");
// },3000);

// document.getElementById("mostrar-loader").onclick = function () {
//     document.getElementById("spinner-loader").style.display = "initial";
//     setTimeout( function(){
//         document.getElementById("spinner-loader").style.display = "none";
//     }, 5000);
// }


// var count = 0;

// var inter = window.setInterval(function(){
//     console.log(count);
//     count++;
//     if (count > 10) {
//         window.clearInterval(inter);
//     }
// }, 1000);

// Desafio Relógio

// window.setInterval(function(){
//     var hora_atual = new Date();
//     var horas = hora_atual.getHours();
//     var minutos = hora_atual.getMinutes();
//     var segundos = hora_atual.getSeconds();
//     document.getElementById("relogio").innerHTML = format_time(horas) + ":" + format_time(minutos) + ":" + format_time(segundos); 
// }, 1000)

// function format_time(time) {
//     if(time >= 0 && time <= 9){
//         var formated_time = time.toString();
//         formated_time = "0" + formated_time;
//     }else{
//         var formated_time = time.toString();
//     }

//     return formated_time;
// }

// Aula 8 - Switch
// function valor_pedagio(categoria) {
//     switch(categoria){
//         case '1':
//             return 11.22;
//             break;
//         case '2':
//             return 22.45;
//             break;
//         case '3':
//             return 16.88;
//             break;
//         case '4':
//             return 33.65;
//             break;
//         default:
//             return 'categoria não encontrada';            
//     }
// }

// var categoria_veiculo = "3";
// console.log(valor_pedagio(categoria_veiculo));

// Aula 29 - Break e Continue
// var x = 0;
// while ( x < 10) {
//     console.log(x);
//     x++;
//     if(x==5){
//         break;
//     }
// }

// var lista = [1,5,9,33,56,89,100,122,145,189,190,205,290];
// for( a = 0 ; a < lista.length; a++){
//     if(lista[a] == 33){
//         console.log('valor encontrado');
//         break;
//     }
//     console.log('Tentativa: ' + a);
// } 

// var num = 0;
// while(num < 20){
//     if(num == 3 ){
//        num++;
//        continue; 
//     }
//     console.log(num);
//     num++;
// }

// Aula 30 - Formulário

// document.getElementById("mostrar_opcao").onclick = function () {

//     // var campo_select = document.getElementById("options");
//     // var indice_selecionado = campo_select.options.selectedIndex;
//     // var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
//     // document.getElementById("opcao_selecionada").innerHTML = valor_selecionado;

//     var indice_selecionado = document.getElementById("options").value;
//     document.getElementById("opcao_selecionada").innerHTML = valor_selecionado;
// };

// document.getElementById("mostrar_radio").onclick = function () {

//     var radio = document.getElementsByName("genero"); 
//     var radio_selected;
    
//     for (var a = 0;  a < radio.length; a++) {
//         if (radio[a].checked) {
//             radio_selected = radio[a].value;
//         }
//     }
    
//     document.getElementById("radio_selecionado").innerHTML = radio_selected;

// };

// document.getElementById("mostrar_check").onclick = function () {


//     var check = document.getElementsByName("interesse");
//     document.getElementById("check_selecionado").innerHTML = "";

//     for (var b = 0;  b < check.length; b++) {
//         if (check[b].checked) {
//             document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
//         }
//     }


// };

// Date

// document.getElementById("mostrar_data").onclick = function () {

//     var data_select = document.getElementById("data_evento").value;
//     var data_completa = new Date(data_select);
//     document.getElementById("data_selecionada").innerHTML = data_completa;

// };

// Aula 31 - Onchange

// document.getElementById("escolaridade").onchange = function () {

//     var campo_select = document.getElementById("escolaridade");
//     var valor_selecionado = campo_select.options[campo_select.options.selectedIndex].innerHTML;
//     document.getElementById("escolaridade_selecionada").innerHTML = valor_selecionado;

// };

// var check = document.getElementsByName("lanche");

// for (var a = 0;  a < check.length; a++) {
//     check[a].onchange = function () {
//         document.getElementById("check_selecionado").innerHTML = "";      
//         for (var b = 0;  b < check.length; b++) {
//             if (check[b].checked) {
//                 document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
//             }
//         }
//     }  
// }

// Aula 34 - JQuery Sintaxe

// Javascript Puro ou Vanilla Javascript
//document.getElementById("exemplo").innerHTML = "Olá";  
// document.getElementById("exemplo").onclick = function(){
// };

// $("#esconder" ).click(function(){
//     $(".exemplo").css("display", "none");
// });

// Aula 35 - JQuery - Manipulação

// var conteudo_html = $("#paragrafo-html").html();
// console.log(conteudo_html);

// var url_link = $("#paragrafo-link").attr("href");
// console.log(url_link);

// $("#paragrafo-link").attr("href", "http://www.medclinicvita.com.br");
// console.log(url_link);

// $("#mudar_imagem").click(function(){
//     $("#imagem_js").attr("src", "https://static.memrise.com/img/400sqf/from/uploads/course_photos/3146044000171223183557.png");
//     $("#mudar_imagem").hide();
// });

// $("#paragrafo-empty").empty();

// $("#paragrafo-empty").remove();

// Aula 36 - JQuery - Loop Each
//var lista = ["HTML","CSS", "Javascript","Jquery", "PHP"];

// lista.forEach(function(indice, valor){
//     console.log("Indice: " + indice + " Valor: " + valor);
// });
 
//lista.

// $.each(lista, function(indice, valor){
//     console.log("Indice: " + indice + " Valor: " + valor);
// });

// var pessoa = {
//     'nome': 'João Pedro',
//     'DN': '20/01/1990',
//     'CPF': '111.111.111-11'
// };

// $.each(pessoa, function(indice, valor){
//     console.log(indice, valor);
// });


// //var busca = $("#interesses li");

// var busca = document.getElementsByClassName("interresses-li");

// $.each(busca, function(indice, valor){
//     console.log($(valor).text());
// })

// Aula 37 - JQuery - Formularios

// var input_nome = $("#campo_nome").val();
// console.log(input_nome);

//var valor_selecionado = $("#options").val();
//var valor_selecionado = $("#options").find(":selected").text();
//console.log(valor_selecionado);

// $("#options").change(function(){
//     var valor_selecionado = $("#options").find(":selected").text();
//     console.log(valor_selecionado);
// });


// var valor_radio_selectionado = $("input[name='genero']:checked").val();
// console.log(valor_radio_selectionado);


// $("input[name='interesse']").change(function() {
//     var checkboxes_selecionados = $("input[name='interesse']:checked");
//     var textos = [];
    
//     $.each(checkboxes_selecionados, function( index, value ) {
//         //textos.push($(value).parent("span").text());
//         textos.push($(value).val());
//     });
    
//     console.log(textos);
    
// });

// Aula 38 - Jquery Manipulacao de Classes CSS
// Adicionar classe:
// $("#adicionar_classe").click(function(){
//     $("#paragrafo-classes").addClass("styling");
// });

// Remover classe:
// $("#remover_classe").click(function(){
//     $("#paragrafo-classes").removeClass("styling");
// });

// Remover classe:
// $("#alternar_classe").click(function(){
//     $("#paragrafo-classes").toggleClass("styling");
// });

// Aula 39 - Jquery Eventos

// Código JS / jQuery

// $(document).ready(function(){

//     // Código JS / jQuery
    
// });

// $(function(){

//     // Código JS / jQuery
    
// });

// $("#nome").keyup(function(){
   
//     var conteudo = $("#nome").val();
//     if (conteudo) {
//         $("#confirmar").show();
//         //$("#confirmar").css("display", "initial");
//     }else{
//         $("#confirmar").hide();
//     }
   
// });

// Aula 40 - Jquery Efeitos

// $("#botao-esconder").click(function() {
//     // $(this).hide();
//     // $("#texto-escondido").show();

//     $(this).hide(2000, function(){
//         $("#texto-escondido").show();
//     });
    
// });

// $("#toggle-tab").click(function() {

//     $("#tab-content").slideToggle();
//     $("#toggle-tab").toggleClass("flip");
    
// });
      
// Aula 41 - Jquery Animate 

$("#animar").click(function(){
    $("#quadrado").animate({
        width: '+=900px',
    });
}); 




});

