/*
  FUNÇÃO DESTINADA A VERIFICAR OS DADOS, EMAIL, CPF, O QUE FOR NECESSÁRIO
  A MESMA RETORNA UM OBJETO COM O STATUS TRUE OU FALSE
  A MESMA ALTERA OS DADOS NO OBJETO, QUANDO HOBER ESPAÇO INDEVIDO, PARENTESE, TRAÇOS, ETC.
  @filipe
*/

function verificar(dados){
    /* debugando */
    debug('controller.verificar.js - verificar()', dados, dados.getTipo());
    /* */

    switch(dados.getTipo()){
            /*
                INICIANDO VALIDAÇÃO DO EMAIL
                @filipe
            */
        case 'user':
            var emailFilter=/^.+@.+\..{2,}$/;
            var illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/
            dados.setEmail(jQuery.trim(dados.getEmail()));

            // condição
            if(!(emailFilter.test(dados.getEmail()))||dados.getEmail().match(illegalChars)){
                dados.setStatus(false);
                dados.setEmail(false);
            }
            /*
                FINALIZANDO VALIDAÇÃO DO EMAIL
                @filipe
            */
            /*
                INICIANDO VALIDAÇÃO DO CPF
                @filipe
            */
                dados.setCpf(dados.getCpf().replace(/[^\d]+/g,''));
                var cpf = dados.getCpf();

                while(cpf.length < 11) cpf = "0"+ cpf;
                var expReg = /^0+$|^1+$|^2+$|^3+$|^4+$|^5+$|^6+$|^7+$|^8+$|^9+$/;
                var a = [];
                var b = new Number;
                var c = 11;

                for (i=0; i<11; i++){
                    a[i] = cpf.charAt(i);
                    if (i < 9){
                        b += (a[i] * --c);
                    }
                }

                if ((x = b % 11) < 2) { 
                    a[9] = 0 ;
                } else {
                    a[9] = 11-x ;
                }

                b = 0;
                c = 11;

                for (y=0; y<10; y++){
                    b += (a[y] * c--);
                }

                if ((x = b % 11) < 2) { 
                    a[10] = 0; 
                } else { 
                    a[10] = 11-x; 
                }

                if ((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10]) || cpf.match(expReg)){
                    dados.setStatus(false);
                    dados.setCpf(false);
                }
            /*
                FINALIZANDO VALIDAÇÃO DO CPF
                @filipe
            */
            /*
                INICIANDO VALIDAÇÃO DO TELEFONE
                @filipe
            */
                dados.setFone(dados.getFone().replace(/[^\d]+/g,''));
                if(dados.getFone().length != 11){
                    dados.setStatus(false);
                    dados.setFone(false);
                }
            /*
                FINALIZANDO VALIDAÇÃO DO TELEFONE
                @filipe
            */
            /*
                INICIANDO VALIDAÇÃO DOS CAMPOS VAZIOS DO USUÁRIO
                @filipe
            */
            if(dados.getSexo() == ""){
                dados.setStatus(false);
                dados.setSexo(false);
            }
            if(dados.getNome() == ""){
                dados.setStatus(false);
                dados.setNome(false);
            }
            /*
                FINALIZANDO VALIDAÇÃO DOS CAMPOS VAZIOS DO USUÁRIO
                @filipe
            */
            if(dados.getNome() && dados.getEmail() && dados.getCpf() && dados.getFone() && dados.getSexo()){
                view.err('remover');
                dados.setStatus(true);
            }
        break;
        case 'imovel':
            /*
                INICIANDO VALIDAÇÃO DOS CAMPOS VAZIOS DO IMÓVEL
                @filipe
            */
            if(dados.getQtdComodos() == ""){
                dados.setStatus(false);
                dados.setQtdComodos(false);
            }
            if(dados.getLat() == ""){
                dados.setStatus(false);
                dados.setLat(false);
            }
            if(dados.getLng() == ""){
                dados.setStatus(false);
                dados.setLng(false);
            }
            if(dados.getNome() == ""){
                dados.setStatus(false);
                dados.setNome(false);
            }
            if(dados.getEndereco() == ""){
                dados.setStatus(false);
                dados.setEndereco(false);
            }
            /*
                FINALIZANDO VALIDAÇÃO DOS CAMPOS VAZIOS DO IMÓVEL
                @filipe
            */
            if(dados.getQtdComodos() && dados.getLat() && dados.getLng() && dados.getNome()){
                view.err('remover');
                dados.setStatus(true);
            }else{
                if(!dados.getNome() || !dados.getEndereco() || !dados.getQtdComodos()){
                    view.popup({titulo:'Campo inválido', texto:'Corrija o(s) campo(s) inválido(s) e tente novamente.'})
                }
            }
        break;

    }
    return dados;

};