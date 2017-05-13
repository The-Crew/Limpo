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
			alert(frase+': '+dados);
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
				if(controller.verificar(dados.dados, tipo)){
					json = {};

            		json.action = dados.action == 'atualizar' ? 'atualizar' : 'registrar';
					json.tipo = 'user';
					json.idUser = dados.dados.getId();
					//UMA FORMA PRATICA DE OBTER OS DADOS DO OBJETO
					json.dados = dados.dados.getJson();

					server.enviar(json, function(retorno){
						retorno = JSON.parse(retorno);
						if(retorno){
							user.setJson(retorno);
							if(json.action == 'registrar'){
								//abrir pagina inicial
								view.pagina('mapa');
							}else{
								//ficar na pagina
							}
						}else{
							/* debuando */
							debug('controller.js - controller.registrar() - Dados retornado pelo server',retorno);
							/* */
							view.err('Falha ao registrar');
						}
					});
					
				}else{
					view.err(dados.dados);
				}
			break;
			case 'imovel':
				if(controller.verificar(dados.dados, tipo)){
					json = {};
            		json.action = dados.action == 'atualizar' ? 'atualizar' : 'registrar';
					json.tipo = 'imovel';
					json.idUser = user.getId();
					//UMA FORMA PRATICA DE OBTER OS DADOS DO OBJETO
					json.dados = dados.dados.getJson();

					server.enviar(json, function(retorno){
						retorno = JSON.parse(retorno);
						if(retorno){
							/*	AO ENVIAR E REGISTRAR O NOVO IMOVEL É RETORNADO UM NOVO
								ARRAY DE IMOVEIS E O MESMO PRECISA SER NOVAMENTE INSTANCIADO
								NO ARRAY DE IMOVEIS DO APP
								NESSE CASO FOI NECESSÁRIO UM FOR PARA INSTANCIAR OS IMOVEIS
								NO ARRAY DE IMOVEIS DO APP
							*/
							imoveis = [];
							for(var i in retorno){
								console.log('For 1 dos imoveis, i: '); console.log(i);
								imoveis[i] = new Imovel();
								//UMA FORMA PRATICA DE SETAR OS DADOS NO OBJETO
								imoveis[i].setJson(retorno[i]);
							}
							console.log(imoveis);
							view.pagina('imoveis');
						}else{
							/* debuando */
							debug('controller.js - controller.registrar() - Dados retornado pelo server',retorno);
							/* */
							view.err('Falha ao registrar');
						}
					});
					
				}else{
					view.err(dados.dados);
				}
			break;
			case 'remover':
				if(dados.tipo == 'user'){
					var json = {};
					json.idUser = dados.idUser;
					json.action = 'remover';
					json.tipo = 'user';
					server.enviar(json, function(retorno){
						console.log(retorno);
					});
				}else if(dados.tipo == 'imovel'){
					var json = {};
					json.idUser = user.getId();
					json.idImovel = dados.idImovel;
					json.action = 'remover';
					json.tipo = 'imovel';
					server.enviar(json, function(retorno){
						retorno = JSON.parse(retorno);
						if(retorno){
							/*	AO REMOVER UM IMOVEL É RETORNADO UM NOVO
								ARRAY DE IMOVEIS E O MESMO PRECISA SER NOVAMENTE INSTANCIADO
								NO ARRAY DE IMOVEIS DO APP
								NESSE CASO FOI NECESSÁRIO UM FOR PARA INSTANCIAR OS IMOVEIS
								NO ARRAY DE IMOVEIS DO APP
							*/
							imoveis = [];
							for(var i in retorno){
								console.log('For 1 dos imoveis, i: '); console.log(i);
								imoveis[i] = new Imovel();
								//UMA FORMA PRATICA DE SETAR OS DADOS NO OBJETO
								imoveis[i].setJson(retorno[i]);
							}
							console.log(imoveis);
							view.pagina('imoveis');
						}else{
							/* debuando */
							debug('controller.js - controller.registrar() - Dados retornado pelo server',retorno);
							/* */
							view.err('Falha ao registrar');
						}
					});
				}
			break;
		}
	}
	this.solicitar = function(dados, tipo, callback){
		/* debuando */
        debug('controller.js - controller.solicitar()', dados, tipo);
		/* */

		switch(tipo){
			case 'user':
				/*	SOLICITAR DADOS DO USUARIO AO SERVIDOR.
					OS DADOS SERÃO RETORNADOS COM TODAS INFORMAÇÕES DO USUARIO
					@filipe
				*/
				if(dados.action == 'login'){
					server.obter(dados, function(retorno){
						if(retorno != 'false'){
							// CONVERTER EM OBJETO
							retorno = JSON.parse(retorno);
							//UMA FORMA PRATICA DE SETAR OS DADOS NO OBJETO
							user.setJson(retorno);

							/*	IRÁ RETORNAR JUNTO COM OS DADOS O ARRAY DE IMOVEIS
								NESSE CASO FOI NECESSÁRIO UM FOR PARA INSTANCIAR OS IMOVEIS
								NO ARRAY DE IMOVEIS DO APP
							*/
							imoveis = [];
							for(var i in retorno.imoveis){
								console.log('For 1 dos imoveis, i: '); console.log(i);
								imoveis[i] = new Imovel();
								//UMA FORMA PRATICA DE SETAR OS DADOS NO OBJETO
								imoveis[i].setJson(retorno.imoveis[i]);
							}
							console.log(imoveis);
							$("#nomeUser").html("Bem vindo "+user.getNome()+"!");
							view.pagina('mapa');
						}else{
							/* debuando */
							debug('controller.js - controller.solicitar() - Dados retornado pelo server',retorno);
							/* */
							view.pagina('cadastro');
						}
					});
				}
			break;
			case 'imovel':
				if(dados == 'array'){
					var json={};
					json.id = user.getId();
					json.tipo = 'imovel';
					
					var retorno = server.obter(json);

					if(!retorno){
						/* debuando */
						debug('controller.js - controller.registrar() - Dados retornado pelo server',retorno);
						/* */
						view.err('Falha ao solicitar');
					}else{
						return retorno;
					}
				}
			break;
		}
	}
}

//INSTANCIA O OBJETO PARA SER USADO POR TODO PROGRAMA
var controller = new Controller;