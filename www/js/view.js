/*
  OBJETO DESTINADO AO CONTROLE DA CAMADA VIEW
  ELA NÃO TRATA TODAS AÇÕES DO VIEW, 
  MAS CHAMA AS FUNÇÕES RESPONSÁVEIS POR CADA AÇÃO
  QUE PROVAVELMENTE ESTARÁ EM OUTROS ARQUIVOS
  NOMEADOS COMO VIEW.ALGUNACOISA.JS
  @filipe
*/

var View = function(){

	this.obterDados = function(tipo, dados=null){
		obterDados(tipo, dados);
	}

	this.err = function (dados){
		err(dados);
	}

	this.pagina = function (pagina){
		chamarPágina(pagina);
	}

	this.popup = function (tipo, dados){
		exibirPopup(tipo, dados);
	}

}

//INSTANCIA O OBJETO PARA SER USADO POR TODO PROGRAMA
var view = new View;