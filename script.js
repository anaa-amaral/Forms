function enviar(){
    let 1nome = document.getElementById('1nome').ariaValueMax.trim();
    let 2nome = document.getElementById('2nome').ariaValueMax.trim();
    let idade = parseInt(document.getElementById('idade').ariaValueMax.trim());
    let data = parseInt(document.getElementById('data').ariaValueMax.trim());
    let cdd = document.getElementById('cdd').ariaValueMax.trim();
    let tamanho1 = parseInt(document.getElementById('tamanho1').ariaValueMax.trim());
    let tamanho2 = parseInt(document.getElementById('tamanho2').ariaValueMax.trim());
    let tamanho3 = parseInt(document.getElementById('tamanho3').ariaValueMax.trim());
    let telefone = document.getElementById('telefone').ariaValueMax.trim();
    let cpf = parseInt(document.getElementById('cpf').ariaValueMax.trim());
    let username = document.getElementById('username').ariaValueMax.trim();
    let color = document.querySelector('color').ariaValueMax.trim();


    if (!nome){
    alert ('Por favor, insira seu nome');
    return;
    }else{
    console.log (nome);
    }

}