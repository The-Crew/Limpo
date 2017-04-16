/*
  FUNÇÃO DESTINADA A VERIFICAR OS DADOS, EMAIL, CPF, O QUE FOR NECESSÁRIO
  A MESMA RETORNA UM OBJETO COM O STATUS TRUE OU FALSE
  @filipe
*/

function verificar(dados){
    switch(dados.tipo){
        case 'user':

            /*
                INICIANDO VALIDAÇÃO DO EMAIL
                @filipe
            */
            var emailFilter=/^.+@.+\..{2,}$/;
            var illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/
            // condição
            if(!(emailFilter.test(dados.email))||dados.email.match(illegalChars)){
                dados.status = false;
                dados.email = false;
            }
            /*
                FINALIZANDO VALIDAÇÃO DO EMAIL
                @filipe
            */
            /*
                INICIANDO VALIDAÇÃO DO CPF
                @filipe
            */
                var value = jQuery.trim(dados.cpf);

                value = value.replace('.','');
                value = value.replace('.','');
                cpf = value.replace('-','');
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
                    dados.status = false;
                    dados.cpf = false;
                }
            /*
                FINALIZANDO VALIDAÇÃO DO CPF
                @filipe
            */
            /*
                INICIANDO VALIDAÇÃO DOS CAMPOS VAZIOS
                @filipe
            */
            if(dados.nome == ""){
                dados.status = false;
                dados.nome = false;
            }
            if(dados.sexo == ""){
                dados.status = false;
                dados.sexo = false;
            }
            if(dados.fone == ""){
                dados.status = false;
                dados.fone = false;
            }
            /*
                FINALIZANDO VALIDAÇÃO DOS CAMPOS VAZIOS
                @filipe
            */
            return dados;
        break;

        default:
            dados.status = false;
            dados.texto = "Erro na verificação";
            return dados;
        break;
    }
};