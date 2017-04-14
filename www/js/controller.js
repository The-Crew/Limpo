/*
  OBJETO RESPONSÁVEL POR CONTROLAR AS SOLICITAÇÕES E O TRAFEGO DE DADOS ENTRE OS MÉTODOS DO APP
  @filipe
*/

var Controller = function (){

    this.verificar = function(dados){
        
        if(verificar(dados).status!==false){
            server.enviar(dados);
        }else{
            view.err(dados);
        }
        
    }

}

//INSTANCIA O OBJETO PARA SER USADO POR TODO PROGRAMA
var controller = new Controller;