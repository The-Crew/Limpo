/*
  OBJETO DESTINADO A COMUNICAÇÃO COM O SERVIDOR
  USADO PARA SOLICITAR E ENVIAR DADOS PARA O SERVIDOR
  @filipe
*/

var Server = function(){
    
    this.enviar = function(dados){
        console.log("OBJETO ENVIADO: "+dados);
    }
    
    this.obter = function(dados){
        console.log("DADOS OBTIDOS")
    }
}

//INSTANCIA O OBJETO PARA SER USADO POR TODO PROGRAMA
var server= new Server();