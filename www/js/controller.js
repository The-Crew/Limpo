/* 
  Habilitar debug no console
  Se quiser o debug no popup, manter debugPopup = true.
  @filipe
 */
var debugConsole = true,
	debugPopup = false;

function debug(frase, dados1="", dados2="", dados3="", dados4=""){
	dados = dados1;
	dados += dados2 != "" ? ', '+dados2 : "";
	dados += dados3 != "" ? ', '+dados3 : "";
	dados += dados4 != "" ? ', '+dados4 : "";

	if(debug){
		if(debugPopup){
			alert(frase+': ');
   		}else{
			console.log(frase+': '+dados);
		}
	}
}
/* */

/*
  OBJETO RESPONSÁVEL POR CONTROLAR AS SOLICITAÇÕES E O TRAFEGO DE DADOS ENTRE OS MÉTODOS DO APP
  @filipe
*/

var Controller = function (){

    this.verificar = function(dados, tipo){
        /* debuando */
        debug('controller.js - controller.verificar()', dados, tipo);
		/* */
		
		switch(tipo){
			case 'user':
        		if(verificar(dados).getStatus()!==false){
        			/* debuando */
        			debug('controller.js - controller.verificar()', 'Verificação aprovou');
        			/* */
        			return true;
        		}else{
        			/* debuando */
        			debug('controller.js - controller.verificar()', 'Erro na verificação');
        			/* */
            		return false;
        		}
        	break;
		    case 'imovel':
		    	if(verificar(dados).getStatus()!==false){
		    		/* debuando */
        			debug('controller.js - controller.verificar()', 'Verificação aprovou');
        			/* */
        			return true;
        		}else{
        			/* debuando */
        			debug('controller.js - controller.verificar()', 'Erro na verificação');
        			/* */
            		return false;
        		}
		    break;
    	}
	}

	/*
	TRATANDO JSON AO REGISTRAR
	ESSE JSON SERÁ ENVIADOR DIRETAMENTE PARA O SERVIDOR
	TODOS ATRIBUTOS QUE O SERVIDOR PRECISE DEVE SER COLOCADO AQUI
	ESSA FOI A MELHOR FORMA DE FAZER PARA TENTAR FACILITAR A COMUNICAÇÃO CLIENTE-SERVIDOR
	O JSON SERÁ PASSADO PARA O server.enviar, NO QUAL IRÁ ENVIAR AO SERVIDOR SEM ALTERAR DADOS
	@filipe
	*/
	this.registrar = function(dados, tipo){
		/* debuando */
        debug('controller.js - controller.registrar()', dados, tipo);
		/* */
		switch(tipo){
			case 'user':
				if(controller.verificar(dados, tipo)){
					json = {};
					json.nome = dados.getNome();
					json.cpf = dados.getCpf();
					json.sexo = dados.getSexo();
					json.email = dados.getEmail();
					json.fone = dados.getFone();
					json.status = dados.getStatus();
					json.tipo = dados.getTipo();
					json.action = 'registrar';

					var retorno = server.enviar(json);
					if(!retorno){
						/* debuando */
						debug('controller.js - controller.registrar() - Dados retornado pelo server',retorno);
						/* */
						view.err('Falha ao registrar');
					}
				}else{
					view.err(dados);
				}
			break;
			case 'imovel':
				if(controller.verificar(dados, tipo)){
					json = {};
					json.nome = dados.getNome();
					json.qtdComodos = dados.getQtdComodos();
					json.lat = dados.getLat();
					json.lng = dados.getLng();
					json.status = dados.getStatus();
					json.tipo = dados.getTipo();
					json.action = 'registrar';

					var retorno = server.enviar(json);
					if(!retorno){
						/* debuando */
						debug('controller.js - controller.registrar() - Dados retornado pelo server',retorno);
						/* */
						view.err('Falha ao registrar');
					}
				}else{
					view.err(dados);
				}
			break;
		}
	}
}

//INSTANCIA O OBJETO PARA SER USADO POR TODO PROGRAMA
var controller = new Controller;