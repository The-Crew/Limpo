/*
  FUNÇÃO RESPONSÁVEL PARA OBTER OS DADOS DO APP, TANTO O QUE O USUARIO DIGITOU,
  QUANTO QUALQUER OUTRO DADO, COMO POR EXEMPLO OS DE LOGIN.
  @filipe
*/

var enviarDados = function(tipo, dados=null, callback){
    
    switch(tipo){
        case 'user':
            /* debuando */
            debug('view.getsetdados.js - enviarDados()', tipo, dados);
            /* */
            if(dados == 'registrar'){
                //user.setId($("#id").val());
                user.setNome($("#nome").val());
                user.setCpf($("#cpf").val());
                user.setSexo($("#sexo").val());
                user.setEmail($("#email").val());
                user.setFone($("#fone").val());
            }else if('atualizar'){
                //user.setId($("#aid").val());
                user.setNome($("#anome").val());
                user.setCpf($("#acpf").val());
                user.setSexo($("#asexo").val());
                user.setEmail($("#aemail").val());
                user.setFone($("#afone").val());
            }
            json = {};
            json.dados = user;
            json.action = dados == 'atualizar' ? 'atualizar' : 'registrar';
            
            controller.registrar(json, 'user'); 
        break;
            
        case 'login':
        /* debuando */
            debug('view.getsetdados.js - enviarDados()', tipo, dados);
            /* */
        /*Esses códigos foram apenas para teste. 
          Pode ser alterado conforme a implementação do projeto.
          Favor informar caso seja teste.
        */
            controller.solicitar({action:'login', idUser:dados},'user');
        break;

        case 'imovel':
            /* debuando */
            debug('view.getsetdados.js - enviarDados()', tipo, dados);
            /* */

            var novoImovel = new Imovel;

            if(dados == 'registrar'){
                novoImovel.setNome($("#inome").val());
                novoImovel.setQtdComodos($("#iqtd-comodos").val());
                novoImovel.setEndereco($("#iendereco").val());
            }else if(dados == 'atualizar'){
                novoImovel.setId(imovelASerEditado);
                novoImovel.setNome($("#inome").val());
                novoImovel.setQtdComodos($("#iqtd-comodos").val());
                novoImovel.setEndereco($("#iendereco").val());
            }
            //novoImovel.setEndereco("Rua Paraná, 160, SOcorro, Jaboatão dos Guararapes");
            setTimeout(function() {
                console.log("Json novoImovel:");
            console.log(novoImovel.getJson());
            json = {};
            json.dados = novoImovel;
            json.action = dados == 'atualizar' ? 'atualizar' : 'registrar';
            controller.registrar(json, 'imovel');
            }, 1000);
            
        break;

        case 'remover':
            if(dados == 'user'){
                json = {tipo:'user', idUser:user.getId()};
                controller.registrar(json, 'remover');
            }else if(dados == 'imovel'){
                json = {tipo:'imovel', idImovel:imovelASerDeletado};
                controller.registrar(json, 'remover');
            }
        break;
        case 'faxineira':
        /* debuando */
            debug('view.getsetdados.js - enviarDados()', tipo, dados);
        /* */
            dados = {idFax:dados,tipo:"sys"};
            controller.solicitar(dados,'faxineira',function(faxineira){
                callback.call(null,faxineira);
            })
        break;
    }
    
    function login(objetoDoPerfilDoGoogle){
        controller.solicitar({action:'login', idUser:objetoDoPerfilDoGoogle},'user');
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
var obterDados = function(dados, tipo, callback){
/*Esses códigos foram apenas para teste. 
Pode ser alterado conforme a implementação do projeto.
Favor informar caso seja teste.
*/
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
        case 'imovel':
            /* debuando */
            debug('view.getsetdados.js - obterDados()', dados, tipo);
            /* */

            if(dados == 'array'){
                return controller.solicitar('array', 'imovel');
            }
        break;
        case 'todos':
            /*Esses códigos foram apenas para teste. 
            Pode ser alterado conforme a implementação do projeto.
            Favor informar caso seja teste.*/
            $('#id').attr('value', user.getId());
            console.log(user.getNome());
            $('#nome').attr('value', user.getNome());
            $('#cpf').attr('value', user.getCpf());
            $('#sexo').attr('value', user.getSexo());
            $('#email').attr('value', user.getEmail());
            $('#nome').attr('value', user.getNome());
            $('#fone').attr('value', user.getFone());
            var idi = $("#idi").val();
            if(idi=='') idi='0';
            console.log(imoveis);
            if(typeof(imoveis[idi]) == "object" ? imoveis[idi].getStatus() : false){
                $('#idi').attr('value', imoveis[idi].getId());
                $('#nomei').attr('value', imoveis[idi].getNome());
                console.log(imoveis[idi].getNome());
                $('#qtdcomodos').attr('value', imoveis[idi].getQtdComodos());
                $('#lat').attr('value', imoveis[idi].getLat());
                $('#lng').attr('value', imoveis[idi].getLng());
            }

        break;
        case 'faxineira':
        /* debuando */
            debug('view.getsetdados.js - obterDados()', dados, tipo);
        /* */
            if(dados == 'melhor'){
                dados = {};
                dados.tipo = "melhor";
                dados.idUser = user.getId();
                controller.solicitar(dados,'faxineira', function(faxineira){
                    callback.call(null,faxineira);
                });
            }else{
                dados = {idFax:dados,tipo:"sys"};
                controller.solicitar(dados,'faxineira',function(faxineira){
                    callback.call(null,faxineira);
                })
            }
        break;
    }

}