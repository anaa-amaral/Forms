function Enviar(){
    let nome = document.getElementById('nome').ariaValueMax.trim();
    let snome = document.getElementById('snome').ariaValueMax.trim();
    let idade = parseInt(document.getElementById('idade').ariaValueMax.trim());
    let data = parseInt(document.getElementById('data').ariaValueMax.trim());
    let cdd = document.getElementById('cdd').ariaValueMax.trim();
    let numero = parseInt(document.getElementById('numero').ariaValueMax.trim());
    let tamanho1 = parseInt(document.getElementById('tamanho1').ariaValueMax.trim());
    let tamanho2 = parseInt(document.getElementById('tamanho2').ariaValueMax.trim());
    let tamanho3 = parseInt(document.getElementById('tamanho3').ariaValueMax.trim());
    let telefone = document.getElementById('telefone').ariaValueMax.trim();
    let cpf = parseInt(document.getElementById('cpf').ariaValueMax.trim());
    let username = document.getElementById('username').ariaValueMax.trim();
    let color = document.querySelector('color').ariaValueMax.trim();
    let teste = parseInt(document.getElementById('teste').ariaValueMax.trim());
    let testeh = parseInt(document.getElementById('testeh').ariaValueMax.trim());


    if (!nome || isNaN(nome)){
    alert ('Por favor, insira seu nome');
    return;
    }else{
        console.log(nome)
    }

    if (!snome || isNaN(snome)){
        alert ('Por favor, insira seu nome');
        return;
        }else{
            console.log(snome)
    }

    if (!idade || isNaN(idade)){
        alert ('Por favor, insira ua idade');
        return;
        }else{
            console.log(idade)
    }

    if (!data || isNaN(data)){
        alert ('Por favor, insira a data');
        return;
        }else{
            console.log(data)
    }

    if (!cdd || isNaN(cdd)){
        alert ('Por favor, insira a cidade');
        return;
        }else{
            console.log(cdd)
    }

    if (!numero || isNaN(numero)){
        alert ('Por favor, insira o número da sua camisa');
        return;
        }else{
            console.log(numero)
    }

    if (!tamanho1 || isNaN(tamanho1)){
        alert ('Por favor, insira o tamanho de sua blusa');
        return;
        }else{
            console.log(tamanho1)
    }

    if (!tamanho2 || isNaN(tamanho2)){
        alert ('Por favor, insira o tamanho de sua camisa');
        return;
        }else{
            console.log(tamanho2)
    }

    if (!tamanho3 || isNaN(tamanho3)){
        alert ('Por favor, insira o tamanho de seu meião');
        return;
        }else{
            console.log(tamanho3)
    }

    if (!telefone || isNaN(telefone)){
        alert ('Por favor, insira seu telefone');
        return;
        }else{
            console.log(telefone)
    }

    if (!cpf|| isNaN(cpf)){
        alert ('Por favor, insira seu telefone');
        return;
        }else{
            console.log(cpf)
    }

    if (!username || isNaN(username)){
        alert ('Por favor, insira seu nome de usuário');
        return;
        }else{
            console.log(username)
    }

    if (!color || isNaN(color)){
        alert ('Por favor, insira a cor do manto');
        return;
        }else{
            console.log(color)
    }
    
    if (!teste || isNaN(teste)){
        alert ('Por favor, insira a data do teste');
        return;
        }else{
            console.log(teste)
    }

    if (!testeh || isNaN(testeh)){
        alert ('Por favor, insira a hora do teste');
        return;
        }else{
            console.log(testeh)
    }

    alert('Formulário enviado com sucesso!')
    
    


}