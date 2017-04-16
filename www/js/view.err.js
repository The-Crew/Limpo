/*
  FUNÇÃO RESPONSÁVEL POR INFORMAR ERROS AO USUÁRIO
  @filipe
*/

var err = function(dados){
	switch(dados.tipo){
        case 'user':
            if(!dados.nome){
                deixarCampoVermelho('nome');
            }
            if(!dados.cpf){
                deixarCampoVermelho('cpf');
            }
            if(!dados.sexo){
                deixarCampoVermelho('sexo');
            }
            if(!dados.email){
                deixarCampoVermelho('email');
            }
        break;

        case 'alert':
            errEmPopup(dados);
        break;
    }

    function deixarCampoVermelho(id){
        console.log("CAMPO '"+id+"' FICOU VERMELHO");
    }

    function errEmPopup(dados){
        /*
          SE O ERRO FOR EXIBIDO POR POPUP, O INTERESSANTE É RESPEITAR
          A ORGANIZAÇÃO DO PROJETO E SOLICITAR O POPUP A FUNÇÃO RESPONSALVEL
          @filipe
        */

        view.popup(dados.tipo, dados.texto);
    }


}