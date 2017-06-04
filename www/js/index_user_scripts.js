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
     $(document).on("click", "#ativar-gps", function(evt)
    {         
      ativarGps();
         return false;
    });
     

    $(document).on("click", ".voltar", function(evt)
    {
         /*global activate_subpage */
         //window.history.back();
        
       view.pagina('mapa');  
       
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
        navigator.app.exitApp();
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
         view.enviarDados('remover', 'imovel');
         return false;
    });
    $(document).on("click", ".btn-sol-imovel", function(evt)
    {
        /* your code goes here */ 
         
         return false;
    });
    $(document).on("click", "#btn-new-imovel", function(evt)
    {
        /* your code goes here */ 
         view.enviarDados('imovel','registrar');
         return false;
    });
    $(document).on("click", "#btn-update-imovel", function(evt)
    {
        /* your code goes here */ 
        view.enviarDados('imovel','atualizar');
         return false;
    });
    $(document).on("click", "#btn-novo-imovel", function(evt)
    {
        /* your code goes here */ 
        view.pagina('new-imovel');
         return false;
    });

    facebookConnectPlugin.getLoginStatus(function(success){
        view.enviarDados('login', success.authResponse.userID);
    }, function(){
        view.pagina('login');
    });

    $(document).on("click", "#btn-sol", function(evt)
    {
        /* your code goes here */ 
        view.popup({
            titulo:'Solicitar', 
            texto:'<h4>Severina Maria</h4><img style="margin-top:-25px" src="http://vignette1.wikia.nocookie.net/narutoworld/images/0/0f/Cinco_Estrelas.png/revision/latest?cb=20150218031839&path-prefix=pt-br" height="15px"><div>Sexo: Feminio</div>Socorro, Jaboatão dos Guararapes - PE</div><div>Distancia: 15Km</div><div>Tempo estimado: 25min</div>'
            },'confirm', ()=>{view.pagina('config')})
         return false;
    });
}

document.addEventListener("app.Ready", register_event_handlers, false);

})();
