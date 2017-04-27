/*
  OBJETO DESTINADO AO CONTROLE DA CAMADA VIEW
  ELA NÃO TRATA TODAS AÇÕES DO VIEW, 
  MAS CHAMA AS FUNÇÕES RESPONSÁVEIS POR CADA AÇÃO
  QUE PROVAVELMENTE ESTARÁ EM OUTROS ARQUIVOS
  NOMEADOS COMO VIEW.ALGUNACOISA.JS
  @filipe
*/

var View = function(){

	this.enviarDados = function(tipo, dados=null){
		/* debuando */
		debug('view.js - view.enviarDados()',tipo, dados);
		/* */

		enviarDados(tipo, dados);
	}

	this.obterDados = function(tipo, dados=null){
		/* debuando */
		debug('view.js - view.obterDados()',tipo, dados);
		/* */

		obterDados(tipo, dados);
	}

	this.err = function (dados, tipo){
		err(dados, tipo);
	}

	this.pagina = function (pagina){
		chamarPágina(pagina);
	}

	this.popup = function (dados, tipo){
		exibirPopup(dados, tipo);
	}

}

//INSTANCIA O OBJETO PARA SER USADO POR TODO PROGRAMA
var view = new View;