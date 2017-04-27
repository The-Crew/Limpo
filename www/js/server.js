/*
  OBJETO DESTINADO A COMUNICAÇÃO COM O SERVIDOR
  USADO PARA SOLICITAR E ENVIAR DADOS PARA O SERVIDOR
  @filipe
*/

var Server = function(){
    
    var servidor = 'http://localhost:3131';

    this.enviar = function(dados){

    	var retorno;

        jQuery.ajax({
		type: 'POST',
		async: false,
		data: JSON.stringify(dados),
		url: servidor,
		success: function(data) {
			retorno = data;
		}
		});
		/* debuando */
		debug("server.js - server.enviar() - OBJETO ENVIADO", JSON.stringify(dados));
		/* */
        return retorno;
    }
    
    this.obter = function(dados){

    	var retorno;

    	jQuery.ajax({
		type: 'POST',
		async: false,
		data: JSON.stringify(dados),
		url: servidor,
		success: function(data) {
			retorno = data;
		}
		});
    	/* debuando */
    	debug("server.js - server.obter() - DADOS OBTIDOS", retorno);
		/* */
    	return returno;
    }
}

//INSTANCIA O OBJETO PARA SER USADO POR TODO PROGRAMA
var server= new Server();