/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    if(user.getId() == undefined){
        //view.pagina('login');
    }
    $(document).on("click", ".voltar", function(evt)
    {
         /*global activate_subpage */
         //window.history.back();
         view.pagina('mapa');
         uib_sb.close_all_sidebars(); 
        return false;
    });
    $(document).on("click", ".voltar-imoveis", function(evt)
    {
         /*global activate_subpage */
         //window.history.back();
         view.pagina('imoveis');
         uib_sb.close_all_sidebars(); 
        return false;
    });
        /* button  #btnImoveis */
    $(document).on("click", ".btn-imoveis", function(evt)
    {
         /*global activate_subpage */
         view.pagina('imoveis');
         //uib_sb.close_all_sidebars(); 
        return false;
    });
    $(document).on("click", ".btn-faxineiras", function(evt)
    {
         /*global activate_subpage */
         view.pagina('faxineiras');
         //uib_sb.close_all_sidebars(); 
        return false;
    });
    
        /* button  #btnMapa2 */
    $(document).on("click", ".btn-mapa", function(evt)
    {
         /*global activate_subpage */
         view.pagina('mapa');
         //uib_sb.close_all_sidebars(); 
         return false;
    });
    
        /* button  #btn-menu */
    $(document).on("click", "#btn-menu", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#menu1"));  
         return false;
    });
    
        /* button  #btn-menu2 */
    $(document).on("click", "#btn-menu2", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#menu2"));  
         return false;
    });
    
        /* button  .btn-config */
    $(document).on("click", ".btn-config", function(evt)
    {
         /*global activate_page */
         view.pagina('config'); 
         //uib_sb.close_all_sidebars(); 
         return false;
    });
    
        /* button  #btn-menu3 */
    $(document).on("click", "#btn-menu3", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#menu3"));  
         return false;
    });
    
        /* button  #btn-save-config */
    $(document).on("click", "#btn-save-config", function(evt)
    {
         /*global activate_page */
         view.enviarDados('user', 'atualizar');
         //uib_sb.close_all_sidebars(); 
         return false;
    });
    $(document).on("click", "#btn-del-conta", function(evt)
    {
         /*global activate_page */
         view.enviarDados('remover', 'user');
         //uib_sb.close_all_sidebars(); 
         return false;
    });
    
        /* button  #btn-menu4 */
    $(document).on("click", "#btn-menu4", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#menu4"));  
         return false;
    });
    $(document).on("click", "#btn-menu5", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#menu5"));  
         return false;
    });
    $(document).on("click", "#btn-menu6", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#menu6"));  
         return false;
    });
    
        /* button  #btnRegistImovel */
    $(document).on("click", "#btnRegistImovel", function(evt)
    {
         /*global activate_page */
         //FUNÇÃO DE REGISTRAR O IMOVEL
         //uib_sb.close_all_sidebars(); 
         return false;
    });

        /* button  #btnLogin */
    $(document).on("click", "#btnLogin", function(evt)
    {
         /*global activate_page */
         /*user.setId('a11');
         view.enviarDados('login');*/
         //activate_page("#mapa"); 

        facebookConnectPlugin.login(["public_profile"], function (success){
            alert('ID: '+success.authResponse['userID']);
            view.enviarDados('login', success.authResponse.userID);
        }, function (failure){
            alert('failure'+JSON.stringify(failure));
        });
         return false;
    });
    
    /*  CONTROLAR BOTÃO DE VOLTAR DO ANDROID */
    document.addEventListener("backbutton", function(e){
        //alert(e);
        //e.preventDefault();
        uib_sb.close_all_sidebars();
        BootstrapDialog.closeAll();
        if(ajax == "pending"){
            abortEnvio();
        }

        function sairDoApp(){
            BootstrapDialog.show({
                title: '<h3>Tem certeza que deseja sair?</h3>',
                buttons: [{
                    icon: 'glyphicon glyphicon-ban-circle',
                    label: '  Sair',
                    cssClass: 'btn-danger',
                    action: ()=>{navigator.app.exitApp();}
                }, 
                {
                    label: 'Cancelar',
                    action: function(dialogItself){
                        dialogItself.close();
                    }
                }]
            });
        }
        
        switch(paginaAtual){
            case 'login':
                sairDoApp();
            break;
            case 'mapa':
                sairDoApp();
            break;
            case 'imoveis':
                sairDoApp();
            break;
            case 'cadastro':
                view.pagina('login');
            break;
            case 'new-imovel':
                view.pagina('imoveis');
            break;
            case 'edit-imovel':
                view.pagina('imoveis');
            break;
            case 'config':
                view.pagina('mapa');
            break;
            default:
                sairDoApp();
            break;
        }
    }, false);
    
    /* button  .btn-sair */
    $(document).on("click", ".btn-sair", function(evt)
    {
        /* your code goes here */ 
        //navigator.app.exitApp();
        //facebookConnectPlugin.logout(Function success, Function failure)
         return false;
    });

    $(document).on("click", "#btn-cadastro", function(evt)
    {
        /* your code goes here */ 
        view.enviarDados('user', 'registrar');
         return false;
    });

    $(document).on("click", ".btn-edit-imovel", function(evt)
    {
        /* your code goes here */ 
         imovelASerEditado = this.id;
         view.pagina('edit-imovel');
         return false;
    });
    $(document).on("click", ".btn-del-imovel", function(evt)
    {
        /* your code goes here */ 
         imovelASerDeletado = this.id;
         view.popup({
                titulo:'Remover imóvel?', 
                perigo: true,
                texto:'Tem certeza que deseja remover o imovel?',
            },'confirm', ()=>{
                view.enviarDados('remover', 'imovel');
                //view.pagina('imoveis');
            });
         
         return false;
    });
    $(document).on("click", ".btn-sol-imovel", function(evt)
    {
        /* your code goes here */ 
         
         return false;
    });
    $(document).on("click", "#btn-new-imovel", function(evt)
    {
         view.enviarDados('imovel','registrar');
         return false;
    });
    $(document).on("click", "#btn-update-imovel", function(evt)
    {
        /* your code goes here */ 
        view.enviarDados('imovel','atualizar');
         return false;
    });
    $(document).on("click", ".btn-novo-imovel", function(evt)
    {
        /* your code goes here */ 
        BootstrapDialog.closeAll();
        view.pagina('new-imovel');
         return false;
    });

    $(document).on("click", ".btn-sol-imovel", function(evt)
    {
        /* your code goes here */ 
        imovelASerSolicitado = imoveis[evt.currentTarget.id];
         view.popup({
            titulo:'Solicitar', 
            cor: 'branco',
            texto:'<button class="btn-sol-mapa btn widget uib_w_23 btn-primary" data-uib="twitter%20bootstrap/button" data-ver="1" style="width: 100%;">Solicitar do Mapa</button> <br><br> <button class="btn-sol-melhor btn widget uib_w_24 btn-primary" data-uib="twitter%20bootstrap/button" data-ver="1" style="width: 100%;">Melhor da rede de amigos</button>',
        },'alert', ()=>{
            //controller.solicitar({action:'solicitar',idFax:faxineira.id},'faxineira');
        });
         return false;
    });

    $(document).on("click", "#btn-solicitar", function(evt)
    {
        /* your code goes here */ 
        listSelectImoveis('mapa');
         return false;
    });
    function listSelectImoveis(local, fax){
        if(local == 'mapa'){
            var listaImoveis = '';
            if(imoveis[0]){
                for(var i in imoveis){
                    listaImoveis +='<button class="btn-sol-imovel btn widget uib_w_23 btn-primary" data-uib="twitter%20bootstrap/button" data-ver="1" style="width: 100%; border-radius: 0px;" id="'+i+'">'+imoveis[i].getNome()+'</button> <br> ';
                }
            }else{
                listaImoveis = 'Nenhum imóvel registrato! <br> <button class="btn-novo-imovel btn widget uib_w_28 d-margins btn-primary" data-uib="twitter%20bootstrap/button" data-ver="1" style="width:100%" id=""><i class="glyphicon glyphicon-edit button-icon-left" data-position="left"></i>Inserir um Imóvel</button>'
            }
            view.popup({
                titulo:'Selecione o imóvel', 
                cor: 'branco',
                texto:listaImoveis,
            },'alert', ()=>{
                //controller.solicitar({action:'solicitar',idFax:faxineira.id},'faxineira');
            });
        }else if(local == 'listaFaxineiras'){
            if(imoveis[0]){
                var listaImoveis = '';
                for(var i in imoveis){
                    listaImoveis +='<button class="btn-sol-imovel-2 btn widget uib_w_23 btn-primary" data-uib="twitter%20bootstrap/button" data-ver="1" style="width: 100%; border-radius: 0px;" id="'+i+'">'+imoveis[i].getNome()+'</button> <br> ';
                }
            }
            view.popup({
                titulo:'Selecione o imóvel', 
                cor: 'branco',
                texto:listaImoveis,
            },'alert', ()=>{
                
            });
        }
    }
    $(document).on("click", ".btn-sol-imovel-2", function(evt)
    {
        BootstrapDialog.closeAll();
        controller.solicitar({action:'solicitar',idFax:faxineiraASerSolicitada, solLat:imoveis[evt.currentTarget.id].getLat(), solLng:imoveis[evt.currentTarget.id].getLng()},'faxineira');
    });
    $(document).on("click", ".btn-sol-melhor", function(evt)
    {
        //console.log(evt.currentTarget.id);

        BootstrapDialog.closeAll();
        view.obterDados("melhor","faxineira",function(faxineira){
            if(faxineira != false){
                faxineira.sexo = faxineira.sexo == "m"?"Masculino":"Feminino";
                faxineira.endereco = faxineira.endereco == undefined ? "Endereço não informado":faxineira.endereco;
                var star = "";
                for(var i=0; i <= faxineira.qualificacao; i++){
                    if(i>0){
                        star += '<img style="margin-top:-15px" src="images/star15.png" height="15px">';
                    }
                }
                if(!star>0){
                    star = '<div style="margin-top:-15px, height:15px"></div>';
                }
                view.popup({
                    titulo:'Solicitar', 
                    texto:'<h4>'+faxineira.nome+'</h4>'+star+'<div>Sexo: '+faxineira.sexo+'</div>'+faxineira.endereco+'</div><div>Distancia: 15Km</div><div>Tempo estimado: 25min</div>'
                },'confirm', ()=>{
                    controller.solicitar({action:'solicitar',idFax:faxineira.id, solLat:imovelASerSolicitado.getLat(), solLng:imovelASerSolicitado.getLng()},'faxineira');
                });
            }else{
                view.popup({
                    titulo:'Indisponível', 
                    texto:'Atualmente você não tem uma rede de amigos! <br> Indique faxineiras e comece a montar sua rede.',
                    cor:'vermelho'
                },'alert', ()=>{
                    //controller.solicitar({action:'solicitar',idFax:faxineira.id, solLat:imovelASerSolicitado.getLat(), solLng:imovelASerSolicitado.getLng()},'faxineira');
                });
            }
        });
        return false;
    });
    $(document).on("click", ".btn-sol-mapa", function(evt)
    {
        BootstrapDialog.closeAll();
        view.obterDados("f2","faxineira",function(faxineira){
            faxineira.sexo = faxineira.sexo == "m"?"Masculino":"Feminino";
            faxineira.endereco = faxineira.endereco == undefined ? "Endereço não informado":faxineira.endereco;
            var star = "";
            for(var i=0; i <= faxineira.qualificacao; i++){
                if(i>0){
                    star += '<img style="margin-top:-15px" src="images/star15.png" height="15px">';
                }
            }
            if(!star>0){
                star = '<div style="margin-top:-15px, height:15px"></div>';
            }
            view.popup({
                titulo:'Solicitar', 
                texto:'<h4>'+faxineira.nome+'</h4>'+star+'<div>Sexo: '+faxineira.sexo+'</div>'+faxineira.endereco+'</div><div>Distancia: 15Km</div><div>Tempo estimado: 25min</div>'
            },'confirm', ()=>{
                controller.solicitar({action:'solicitar',idFax:faxineira.id, solLat:imovelASerSolicitado.getLat(), solLng:imovelASerSolicitado.getLng()},'faxineira');
            });
        });
        return false;
    });

    $(document).on("click", ".btn-sol-fax", function(evt)
    {
        /* your code goes here */ 
        var faxineira = {};
        faxineira.sexo = faxineiras[evt.currentTarget.id].getSexo() == "m"?"Masculino":"Feminino";
        faxineira.endereco = faxineiras[evt.currentTarget.id].getEndereco() == undefined ? "Endereço não informado":faxineiras[evt.currentTarget.id].getEndereco();
        var star = "";
        for(var i=0; i <= faxineiras[evt.currentTarget.id].getQualificacao(); i++){
            if(i>0){
                star += '<img style="margin-top:-15px" src="images/star15.png" height="15px">';
            }
        }
        if(!star>0){
            star = '<div style="margin-top:-15px, height:15px"></div>';
        }
        view.popup({
            titulo:'Solicitar', 
            texto:'<h4>'+faxineiras[evt.currentTarget.id].getNome()+'</h4>'+star+'<div>Sexo: '+faxineira.sexo+'</div>'+faxineira.endereco+'</div><div>Distancia: 15Km</div><div>Tempo estimado: 25min</div>'
        },'confirm', ()=>{
            //controller.solicitar({action:'solicitar',idFax:faxineiras[evt.currentTarget.id].getId()},'faxineira');
            faxineiraASerSolicitada = faxineiras[evt.currentTarget.id].getId();
            listSelectImoveis('listaFaxineiras');
        });
        
        return false;
    });

    $(document).on("click", ".btn-share-fax", function(evt)
    {
        /* your code goes here */
        var faxineira = {};
        faxineira.sexo = faxineiras[evt.currentTarget.id].getSexo() == "m"?"Masculino":"Feminino";
        faxineira.endereco = faxineiras[evt.currentTarget.id].getEndereco() == undefined ? "Endereço não informado":faxineiras[evt.currentTarget.id].getEndereco();
        var star = "";
        for(var i=0; i <= faxineiras[evt.currentTarget.id].getQualificacao(); i++){
            if(i>0){
                star += '<img style="margin-top:-15px" src="images/star15.png" height="15px">';
            }
        }
        if(!star>0){
            star = '<div style="margin-top:-15px, height:15px"></div>';
        }
        function abrirPopupIndic(style){
            view.popup({
                titulo:'Indicar', 
                texto:'<h4>'+faxineiras[evt.currentTarget.id].getNome()+'</h4>'+star+'<div>Sexo: '+faxineira.sexo+'</div>'+faxineira.endereco+'</div><div>Distancia: 15Km</div><div>Tempo estimado: 25min</div><label class="narrow-control label-inline" for="nome" style="display: inline;">Email do amigo: </label><input style="'+style+'" type="email" id="emailIndic">'
            },'confirm', ()=>{
                var emailFilter=/^.+@.+\..{2,}$/;
                var illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/;
                var email = jQuery.trim($('#emailIndic').val());
                if(emailFilter.test(email) && !email.match(illegalChars)){
                    controller.registrar({action:'indicar',idFax:faxineiras[evt.currentTarget.id].getId(),emailUser: email},'faxineira');
                }else{
                    abrirPopupIndic('border-color: #f00; box-shadow: 0px 0px 10px #ff0f0f;');
                }
                
            });
        }
        abrirPopupIndic();
        return false;
    });

    facebookConnectPlugin.getLoginStatus(function(success){
        view.enviarDados('login', success.authResponse.userID);
    }, function(){
        view.pagina('login');
    });
}

document.addEventListener("app.Ready", register_event_handlers, false);

})();
