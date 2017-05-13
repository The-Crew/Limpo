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
        /*Esses códigos foram apenas para teste. 
          Pode ser alterado conforme a implementação do projeto.
          Favor informar caso seja teste.
        */
            login(user.getId());
        break;

        case 'imovel':
            /* debuando */
            debug('view.getsetdados.js - enviarDados()', tipo, dados);
            /* */

            var novoImovel = new Imovel;

            if(dados == 'registrar'){
                novoImovel.setNome($("#inome").val());
                novoImovel.setQtdComodos($("#iqtdcomodos").val());
                novoImovel.setEndereco($("#iendereco").val());
                novoImovel.setLat($("#ilat").val());
                novoImovel.setLng($("#ilng").val());
            }else if(dados == 'atualizar'){
                novoImovel.setId($("#aiid").val());
                novoImovel.setNome($("#ainome").val());
                novoImovel.setQtdComodos($("#aiqtdcomodos").val());
                novoImovel.setEndereco($("#aiendereco").val());
                novoImovel.setLat($("#ailat").val());
                novoImovel.setLng($("#ailng").val());
            }
            json = {};
            json.dados = novoImovel;
            json.action = dados == 'atualizar' ? 'atualizar' : 'registrar';
            controller.registrar(json, 'imovel');
        break;

        case 'remover':
            if(dados == 'user'){
                json = {tipo:'user', idUser:$("#id").val()}
                controller.registrar(json, 'remover');
            }else if(dados == 'imovel'){
                json = {tipo:'imovel', idImovel:$("#idi").val()};
                controller.registrar(json, 'remover');
            }
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
var obterDados = function(dados, tipo){
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
    }

}