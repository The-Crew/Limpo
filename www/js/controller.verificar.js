/*
  FUNÇÃO DESTINADA A VERIFICAR OS DADOS, EMAIL, CPF, O QUE FOR NECESSÁRIO
  A MESMA RETORNA UM OBJETO COM O STATUS TRUE OU FALSE
  @filipe
*/

function verificar(dados){
    switch(dados.tipo){
        case 'user':
            if(false){
                return dados;
            }else{
                dados.status = false;
                dados.nome = false;
                dados.data = false;
                dados.sexo = false;
                dados.email = false;
                return dados;
            }
        break;

        default:
            dados.status = false;
            dados.texto = "Erro na verificação";
            return dados;
        break;
    }
};