/*
  FUNÇÃO RESPONSÁVEL POR INFORMAR ERROS AO USUÁRIO
  @filipe
*/

var err = function(dados){
    /* debugando */
    debug('view.err.js - err()', dados);
    /* */
    if(typeof dados == 'object'){
        switch(dados.getTipo()){

            case 'user':
                if(!dados.getNome()){
                    /* debugando */
                    debug('view.err.js - err()', 'dados.getNome inválido');
                    /* */

                    deixarCampoVermelho('nome');
                }
                if(!dados.getCpf()){
                    /* debugando */
                    debug('view.err.js - err()', 'dados.getCpf inválido');
                    /* */

                    deixarCampoVermelho('cpf');
                }
                if(!dados.getSexo()){
                    /* debugando */
                    debug('view.err.js - err()', 'dados.getSexo inválido');
                    /* */

                    deixarCampoVermelho('sexo');
                }
                if(!dados.getEmail()){
                    /* debugando */
                    debug('view.err.js - err()', 'dados.getEmail inválido');
                    /* */

                    deixarCampoVermelho('email');
                }
                if(!dados.getFone()){
                    /* debugando */
                    debug('view.err.js - err()', 'dados.getFone inválido');
                    /* */

                    deixarCampoVermelho('fone');
                }
            break;
            case 'imovel':
                if(!dados.getNome()){
                    /* debugando */
                    debug('view.err.js - err()', 'dados.getNome inválido');
                    /* */

                    deixarCampoVermelho('nome');
                }
                if(!dados.getQtdComodos()){
                    /* debugando */
                    debug('view.err.js - err()', 'dados.getQtdComodos inválido');
                    /* */

                    deixarCampoVermelho('qtdcomodos');
                }
                if(!dados.getLat()){
                    /* debugando */
                    debug('view.err.js - err()', 'dados.getLat inválido');
                    /* */

                    errEmPopup('Falha ao obter Latitude', 'alert');
                }
                if(!dados.getLng()){
                    /* debugando */
                    debug('view.err.js - err()', 'dados.getLng inválido');
                    /* */

                    errEmPopup('Falha ao obter Longitude', 'alert');
                }
            break;
            default:
                errEmPopup(dados);
            break;
        }
    }else{
        errEmPopup(dados);
    }

    function deixarCampoVermelho(id){
        console.log("CAMPO '"+id+"' FICOU VERMELHO");
    }

    function errEmPopup(dados, tipo){
        /*
          SE O ERRO FOR EXIBIDO POR POPUP, O INTERESSANTE É RESPEITAR
          A ORGANIZAÇÃO DO PROJETO E SOLICITAR O POPUP A FUNÇÃO RESPONSALVEL
          @filipe
        */
        view.popup(dados, tipo);
    }


}