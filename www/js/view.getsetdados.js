/*
  FUNÇÃO RESPONSÁVEL PARA OBTER OS DADOS DO APP, TANTO O QUE O USUARIO DIGITOU,
  QUANTO QUALQUER OUTRO DADO, COMO POR EXEMPLO OS DE LOGIN.
  @filipe
*/

var enviarDados = function(tipo, dados=null){
    
    switch(tipo){
        case 'user':
            /* debuando */
            debug('view.getsetdados.js - enviarDados()', tipo, dados);
            /* */

            /*
            User.tipo = 'user';
            User.action = 'registrar';
            User.nome = $("#nome").val();
            User.cpf = $("#cpf").val();
            User.sexo = $("#sexo").val();
            User.email = $("#email").val();
            User.fone = $("#fone").val();
            
            controller.verificar('user', User);
            */

            user.setNome($("#nome").val());
            user.setCpf($("#cpf").val());
            user.setSexo($("#sexo").val());
            user.setEmail($("#email").val());
            user.setFone($("#fone").val());

            controller.registrar(user, 'user');

        break;
            
        case 'login':
            login(dados);
        break;

        case 'imovel':
            /* debuando */
            debug('view.getsetdados.js - enviarDados()', tipo, dados);
            /* */

            var novoImovel = new Imovel;

            novoImovel.setNome($("#nome").val());
            novoImovel.setQtdComodos($("#qtdcomodos").val());
            novoImovel.setLat($("#lat").val());
            novoImovel.setLng($("#lng").val());

            controller.registrar(novoImovel, 'imovel');
        break;
    }
    
    var login = function(objetoDoPerfilDoGoogle){

    }
    
    var endereco = function(){
        
    };
    
    var imovel = function(){
        
    };
    
};

/*
OBTER DADOS EM DESENVOLVIMENTO
@filipe
*/
var obterDados = function(dados, tipo){

    switch(tipo){
        case 'user':
            /* debuando */
            debug('view.getsetdados.js - obterDados()', dados, tipo);
            /* */
            if(dados == 'nome'){
                return user.getNome();
            }
            else if(dados == 'cpf') return user.getCpf();
            else if(dados == 'email') return user.getEmail();
            else if(dados == 'fone') return user.getFone();
        break;
    }

}