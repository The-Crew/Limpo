/*
  FUNÇÃO RESPONSÁVEL PARA OBTER OS DADOS DO APP, TANTO O QUE O USUARIO DIGITOU, QUANTO QUALQUER OUTRO DADO, COMO POR EXEMPLO OS DE LOGIN.
  @filipe
*/

var obterDados = function(tipo, dados=null){
    
    switch(tipo){
        case 'user':
                
            User.tipo = 'alert';
            User.nome = document.getElementById('nome').value;
            User.data = document.getElementById('data').value;
            //User.sexo = document.getElementById('sexo').value;
            //User.email = document.getElementById('email').value;
            
            controller.verificar(User);

        break;
            
        case 'login':
            login(dados);
        break;
    }
    
    var login = function(objetoDoPerfilDoGoogle){

    }
    
    var endereco = function(){
        
    };
    
    var imovel = function(){
        
    };
    
};
