/*
  OBJETO DESTINADO A COMUNICAÇÃO COM O SERVIDOR
  USADO PARA SOLICITAR E ENVIAR DADOS PARA O SERVIDOR
  @filipe
*/

var Server = function(){
    
    var servidor = 'http://192.168.0.101:3131';

    this.enviar = function(dados, callback){
    	/* debuando */
		debug("server.js - server.enviar() - OBJETO ENVIADO", JSON.stringify(dados));
		/* */
    	var retorno;

        jQuery.ajax({
		type: 'POST',
		async: false,
		data: JSON.stringify(dados),
		url: servidor,
		success: function(data) {
			retorno = data;
			/* debuando */
			debug("server.js - server.enviar() - DADOS RETORNADO DO SEVIDOR", data);
			/* */
			callback.call(null, data);
		}
		});

        return retorno;
    }
    
    this.obter = function(dados, callback){
    	
    	var retorno;

    	jQuery.ajax({
		type: 'POST',
		async: false,
		data: JSON.stringify(dados),
		url: servidor,
		success: function(data) {
			retorno = data;
			/* debuando */
	    	debug("server.js - server.obter() - DADOS OBTIDOS", data);
			/* */
			callback.call(null, data);
		}
		});
    	
    	return retorno;
    }
}

//INSTANCIA O OBJETO PARA SER USADO POR TODO PROGRAMA
var server= new Server();