/*
  FUNÇÃO RESPONSÁVEL PARA OBTER OS DADOS DO APP, TANTO O QUE O USUARIO DIGITOU, QUANTO QUALQUER OUTRO DADO, COMO POR EXEMPLO OS DE LOGIN.
  @filipe
*/

var obterDados = function(tipo, dados=null){
    
    switch(tipo){
        case 'user':
                
            User.tipo = 'user';
            User.nome = $("#nome").val();
            User.cpf = $("#cpf").val();
            User.sexo = $("#sexo").val();
            User.email = $("#email").val();
            User.fone = $("#fone").val();
            
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
