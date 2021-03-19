/* Menu */
function banda(){
    document.querySelector("#area_banda").style.display = "flex";
    document.querySelector("#area_inteiro").style.display = "none";
    document.querySelector("#area_picado").style.display = "none";
    document.querySelector("#area_premium").style.display = "none";
    document.querySelector("#area_rodela").style.display = "none";
}   

function inteiro(){
    document.querySelector("#img_produto2").src="../imagens/inteiro/inteiro_todos.png";
    document.querySelector("#area_inteiro").style.display = "flex";
    document.querySelector("#area_banda").style.display = "none";
    document.querySelector("#area_picado").style.display = "none";
    document.querySelector("#area_premium").style.display = "none";
    document.querySelector("#area_rodela").style.display = "none";
}

function picado(){
    document.querySelector("#img_produto3").src="../imagens/picado/picado_todos.png";
    document.querySelector("#area_picado").style.display = "flex";
    document.querySelector("#area_banda").style.display = "none";
    document.querySelector("#area_inteiro").style.display = "none";
    document.querySelector("#area_premium").style.display = "none";
    document.querySelector("#area_rodela").style.display = "none";
}

function premium(){
    document.querySelector("#img_produto4").src="../imagens/premium/premium_todos.png";
    document.querySelector("#area_premium").style.display = "flex";
    document.querySelector("#area_banda").style.display = "none";
    document.querySelector("#area_picado").style.display = "none";
    document.querySelector("#area_inteiro").style.display = "none";
    document.querySelector("#area_rodela").style.display = "none";
}

function rodela(){
    document.querySelector("#area_rodela").style.display = "flex";
    document.querySelector("#area_banda").style.display = "none";
    document.querySelector("#area_picado").style.display = "none";
    document.querySelector("#area_premium").style.display = "none";
    document.querySelector("#area_inteiro").style.display = "none";
}

/* fim Menu */

/* Inteiro */
function inteiro125g(){
    document.querySelector("#img_produto2").src="../imagens/inteiro/inteiro_125g.png";
}   

function inteiro180g(){
    document.querySelector("#img_produto2").src="../imagens/inteiro/inteiro_180g.png";
}

function inteiro300g(){
    document.querySelector("#img_produto2").src="../imagens/inteiro/inteiro_300g.png";
}

function inteiro500g(){
    document.querySelector("#img_produto2").src="../imagens/inteiro/inteiro_500g.png";
}

function inteiro2000g(){
    document.querySelector("#img_produto2").src="../imagens/inteiro/inteiro_2000g.png";
}
/* Fim Inteiro */

/* Picado */
function picado300g(){
    document.querySelector("#img_produto3").src="../imagens/picado/picado_300g.png";
}

function picado450g(){
    document.querySelector("#img_produto3").src="../imagens/picado/picado_450g.png";
}

function picado1800g(){
    document.querySelector("#img_produto3").src="../imagens/picado/picado_1800g.png";
}
/* Fim Picado */

/* Premium */
function premium500g(){
    document.querySelector("#img_produto4").src="../imagens/premium/premium_500g.png";
}

function premium2000g(){
    document.querySelector("#img_produto4").src="../imagens/premium/premium_2000g.png";
}
/* Fim Premium */