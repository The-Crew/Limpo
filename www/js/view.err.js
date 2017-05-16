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

                    deixarCampoVermelho('#nome');
                    deixarCampoVermelho('#anome');
                }else{
                	campoCorreto('#nome');
                	campoCorreto('#anome');
                }
                if(!dados.getCpf()){
                    /* debugando */
                    debug('view.err.js - err()', 'dados.getCpf inválido');
                    /* */

                    deixarCampoVermelho('#cpf');
                    deixarCampoVermelho('#acpf');
                }else{
                	campoCorreto('#cpf');
                	campoCorreto('#acpf');
                }
                if(!dados.getSexo()){
                    /* debugando */
                    debug('view.err.js - err()', 'dados.getSexo inválido');
                    /* */

                    deixarCampoVermelho('#sexo');
                    deixarCampoVermelho('#asexo');
                }else{
                	campoCorreto('#sexo');
                	campoCorreto('#asexo');
                }
                if(!dados.getEmail()){
                    /* debugando */
                    debug('view.err.js - err()', 'dados.getEmail inválido');
                    /* */

                    deixarCampoVermelho('#email');
                    deixarCampoVermelho('#aemail');
                }else{
                	campoCorreto('#email');
                	campoCorreto('#aemail');
                }
                if(!dados.getFone()){
                    /* debugando */
                    debug('view.err.js - err()', 'dados.getFone inválido');
                    /* */

                    deixarCampoVermelho('#fone');
                    deixarCampoVermelho('#afone');
                }else{
                	campoCorreto('#fone');
                	campoCorreto('#afone');
                }
            break;
            case 'imovel':
                if(!dados.getNome()){
                    /* debugando */
                    debug('view.err.js - err()', 'dados.getNome inválido');
                    /* */

                    deixarCampoVermelho('#inome');
                }else{
                	campoCorreto('#inome');
                }
                if(!dados.getEndereco()){
                    /* debugando */
                    debug('view.err.js - err()', 'dados.getEndereco inválido');
                    /* */

                    deixarCampoVermelho('#iendereco');
                }else{
                	campoCorreto('#iendereco');
                }
                if(!dados.getQtdComodos()){
                    /* debugando */
                    debug('view.err.js - err()', 'dados.getQtdComodos inválido');
                    /* */

                    deixarCampoVermelho('#iqtd-comodos');
                }else{
                	campoCorreto('#iqtd-comodos');
                }
                if(!dados.getLat()){
                    /* debugando */
                    debug('view.err.js - err()', 'dados.getLat inválido');
                    /* */

                    errEmPopup({cor:'vermelho',titulo:'Falha',texto:'Falha ao obter Latitude'}, 'alert');
                }
                if(!dados.getLng()){
                    /* debugando */
                    debug('view.err.js - err()', 'dados.getLng inválido');
                    /* */

                    errEmPopup({cor:'vermelho',titulo:'Falha',texto:'Falha ao obter Longitude'}, 'alert');
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
        $(id).attr('style', 'border-color: #f00; box-shadow: 0px 0px 10px #ff0f0f;');
    }
    function campoCorreto(id){
        console.log("CAMPO '"+id+"' CORRETO");
        $(id).attr('style', '');
    }
    if(dados == 'remover'){
    	campoCorreto("#nome");
    	campoCorreto("#anome");
    	campoCorreto("#cpf");
    	campoCorreto("#acpf");
    	campoCorreto("#sexo");
    	campoCorreto("#asexo");
    	campoCorreto("#email");
    	campoCorreto("#aemail");
    	campoCorreto("#fone");
    	campoCorreto("#afone");
    	campoCorreto("#inome");
    	campoCorreto("#iqtd-comodos");
    	campoCorreto("#iendereco");
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