/*
  FUNÇÃO RESPONSÁVEL POR EXIBIR PÁGINAS E POPUPS AO USUARIO
  @filipe
*/
var paginaAtual;
function chamarPagina (page){
	/*
	  DE ALGUMA FORMA ESSA FUNÇÃO TEM QUE TROCAR A PÁGINA DO USUARIO
	  @filipe
	*/
	/* debuando */
	debug('view.pagina.js - chamarPagina()', page);
	/* */
    paginaAtual = page;
	uib_sb.close_all_sidebars();
	switch(page){
		case 'login':
			activate_page('#login');
		break;
		case 'mapa':
			activate_page('#mapa');
		break;
		case 'imoveis':
			if(imoveis[0]){
				var listaImoveis = '<div class="panel-group" id="listaImoveis">';
				for(var i in imoveis){
					var collapse = ' <div style="margin-bottom: 0px;" class="panel widget uib_w_32 panel-default" data-uib="twitter%20bootstrap/collapsible" data-ver="1"> <a class="accordion-toggle" data-toggle="collapse" data-parent="#listaImoveis" href="#iidc'+imoveis[i].getId()+'" data-parent="#null"> <div class="panel-heading"> <h4 class="panel-title"> '+imoveis[i].getNome()+'</h4> </div> </a> <div id="iidc'+imoveis[i].getId()+'" class="panel-collapse collapse"> <div class="panel-body"> <div class="col uib_col_2 single-col" data-uib="layout/col" data-ver="0"> <div class="widget-container content-area vertical-col"> <div class="btn-group uib-bs-flex widget uib_w_33 d-margins" data-uib="twitter%20bootstrap/button_group" data-ver="1">';
					var botoes = '<div class="btn-group uib-bs-flex widget uib_w_37 d-margins" data-uib="twitter%20bootstrap/button_group" data-ver="1"> <button class="btn widget uib_w_38 btn-default" data-uib="twitter%20bootstrap/button" data-ver="1" style="background: #baeaba;"><i class="fa fa-edit" data-position="icon only"></i> </button> <button class="btn widget uib_w_39 btn-default" data-uib="twitter%20bootstrap/button" data-ver="1" style="background: #ffd0cf;"><i class="glyphicon glyphicon-remove" data-position="icon only"></i> </button> <button class="btn widget uib_w_40 btn-default" data-uib="twitter%20bootstrap/button" data-ver="1" style="background: #bed2e4;"><i class="fa fa-check" data-position="icon only"></i> </button>';
					listaImoveis += collapse+botoes+'</div></div></div></div></div></div>';
				}
				listaImoveis += '</div>'
				$("#imoveisContent").html(listaImoveis);
			}
			activate_page('#imoveis')
;		break;
		case 'cadastro':
			activate_page('#cadastro');
		break;
		case 'cadastImovel':
			activate_page('#cadastImovel');
		break;
		case 'editImovel':
			activate_page('#editImovel');
		break;
		case 'config':
			$('#anome').attr("value", user.getNome());
			$('#acpf').attr("value", user.getCpf());
			$('#asexo').attr("value", user.getSexo());
			$('#aemail').attr("value", user.getEmail());
			$('#afone').attr("value", user.getFone());
			activate_page('#config');
		break;

	}
	
}

function exibirPopup (dados, tipo = 'alert'){
	/*
	  DE ALGUMA FORMA ESSA FUNÇÃO TEM QUE EXIBIR UM POPUP AO USUARIO
	  @filipe
	*/
	/* debuando */
	debug('view.pagina.js - exibirPopup()', dados, tipo);
	/* */
	if(tipo == 'alert'){
		alert(dados);
	}
}