/*
  FUNÇÃO RESPONSÁVEL POR EXIBIR PÁGINAS E POPUPS AO USUARIO
  @filipe
*/
function chamarPagina (pagina){
	/*
	  DE ALGUMA FORMA ESSA FUNÇÃO TEM QUE TROCAR A PÁGINA DO USUARIO
	  @filipe
	*/
	/* debuando */
	debug('view.pagina.js - chamarPagina()', pagina);
	/* */
	activate_page(pagina);
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