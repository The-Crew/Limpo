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
			activate_page('#mainpage');
		break;
		case 'mapa':
			activate_page('#mapa');
		break;
		case 'imoveis':
			if(imoveis[0]){
				var listaImoveis = '<div class="panel-group" id="listaImoveis">';
				for(var i in imoveis){
					var collapse = ' <div style="margin-bottom: 0px;" class="panel widget uib_w_32 panel-default" data-uib="twitter%20bootstrap/collapsible" data-ver="1"> <a class="accordion-toggle" data-toggle="collapse" data-parent="#listaImoveis" href="#iidc'+imoveis[i].getId()+'" data-parent="#null"> <div class="panel-heading"> <h4 class="panel-title"> '+imoveis[i].getNome()+'</h4> </div> </a> <div id="iidc'+imoveis[i].getId()+'" class="panel-collapse collapse"> <div class="panel-body"> <div class="col uib_col_2 single-col" data-uib="layout/col" data-ver="0"> <div class="widget-container content-area vertical-col"> <div class="btn-group uib-bs-flex widget uib_w_33 d-margins" data-uib="twitter%20bootstrap/button_group" data-ver="1">';
					var botoes = '<div class="btn-group uib-bs-flex widget uib_w_37 d-margins" data-uib="twitter%20bootstrap/button_group" data-ver="1"> <button id="'+imoveis[i].getId()+'" class="btn-edit-imovel btn widget uib_w_38 btn-default" data-uib="twitter%20bootstrap/button" data-ver="1" style="background: #baeaba;"><i class="fa fa-edit" data-position="icon only"></i> </button> <button id="'+imoveis[i].getId()+'" class="btn-del-imovel btn widget uib_w_39 btn-default" data-uib="twitter%20bootstrap/button" data-ver="1" style="background: #ffd0cf;"><i class="glyphicon glyphicon-remove" data-position="icon only"></i> </button> <button id="'+imoveis[i].getId()+'" class="btn-sol-imovel btn widget uib_w_40 btn-default" data-uib="twitter%20bootstrap/button" data-ver="1" style="background: #bed2e4;"><i class="fa fa-check" data-position="icon only"></i> </button>';
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
		case 'new-imovel':
			$("#inome").val('');
			$("#iqtd-comodos").val('');
			$("#iendereco").val('');

			$('#btn-update-imovel').attr('style', 'visibility: hidden;');
			$('#btn-new-imovel').attr('style', 'visibility: visible;');
			activate_page('#regist-imoveis');
		break;
		case 'edit-imovel':
			$("#inome").val(imoveis[imovelASerEditado].getNome());
			$("#iqtd-comodos").val(imoveis[imovelASerEditado].getQtdComodos());
			$("#iendereco").val(imoveis[imovelASerEditado].getEndereco());

			$('#btn-new-imovel').attr('style', 'margin-top: -34px;visibility: hidden');
			$('#btn-update-imovel').attr('style', 'margin-top: -34px;visibility: visible;');
			activate_page('#regist-imoveis');
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

function exibirPopup (dados, tipo = 'alert', callback){
	/*
	  DE ALGUMA FORMA ESSA FUNÇÃO TEM QUE EXIBIR UM POPUP AO USUARIO
	  @filipe
	*/
	/* debuando */
	debug('view.pagina.js - exibirPopup()', JSON.stringify(dados), tipo, callback);
	/* */
	if(tipo == 'alert' || tipo == null){
		dados.fixo = dados.fixo == true ? false : true;
		var dialog = new BootstrapDialog({
            title: dados.titulo,
            message: dados.texto,
            closable: dados.fixo
        });
        dialog.realize();
        dialog.getModalHeader().css('font-size', '16px');
        dialog.getModalHeader().css('font-weight', 'bold');
        dialog.getModalBody().css('font-size', '12px');
        if(typeof(dados.titulo) == "undefined"){
        	dialog.setTitle('');
        	dialog.getModalHeader().css('background-color', '#337ab7');
        	dialog.getModalHeader().css('heigth', '5px');
        }
        if(dados.cor == 'vermelho'){
	        dialog.getModalHeader().css('background-color', '#e00000');
	        dialog.getModalHeader().css('color', '#fff');
	    }else if(dados.cor =='azul'){
	    	dialog.getModalHeader().css('background-color', '#337ab7');
	    	dialog.getModalHeader().css('color', '#fff');
	    }else{
	    	dialog.getModalHeader().css('background-color', '#d8d8d8');
	    }
        dialog.open();
	}else if(tipo == 'confirm'){
		var dialog = new BootstrapDialog({
			title: dados.titulo,
            message: dados.texto,
            buttons: [{
                icon: dados.perigo ? 'glyphicon glyphicon-ban-circle' : '',
                label: '  Confirmar',
                cssClass: dados.perigo ? 'btn-danger' : 'btn-primary',
                action: (dialogItself)=>{callback.call(null,true); dialogItself.close();}
            }, 
            {
                label: 'Cancelar',
                action: function(dialogItself){
                    callback.call(false);
                    dialogItself.close();
                }
            }]
		})
		dialog.realize();
		dialog.getModalHeader().css('font-size', '16px');
		dialog.getModalHeader().css('font-weight', 'bold');
		dialog.getModalBody().css('font-size', '12px');
		if(dados.perigo){
			dialog.getModalHeader().css('background-color', '#e00000');
			dialog.getModalHeader().css('color', '#fff');
		}
		dialog.open();
	}
}