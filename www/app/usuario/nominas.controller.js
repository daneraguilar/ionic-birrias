(function() {
    'use strict';

    angular
        .module('usuario')
        .controller('nominasCtrl',nominasCtrl);

    /* @ngInject */
    function nominasCtrl($scope, $state,API_URL,$http,usuarioService) {
      var api="localhost:3000";
      $scope.daner="si";
       $scope.$on('$ionicView.loaded',function(){
       $scope.Nomina ={};
       $scope.Amigos = [];
       $scope.miNomina = {};
       $scope.IntegrantesMiNomina =[];
       $scope.NominasPertenezco = [];
       $scope.usuario = usuarioService.getUsuario();
        });

      $scope.getMiNomina=function(){  

   
                
                    $http.get(API_URL+'nomina/usuario/'+$scope.usuario._id).success(function (data) {
              
                    
                    if(data.respuesta == 'KO'){
                      
                        $scope.miNomina.length = 0;
                        setTimeout(function(){
                            var el = document.getElementById('files');
                           if(el){
                              el.addEventListener('change', archivo, false);
                           }  
                        },900);
                    }else
                        $scope.daner="nada";
                        $scope.miNomina = data; 
                        $scope.miNomina.length = 1;
                
                       $scope.integrantes($scope.miNomina.nomina._id);
                      
                                            
                 
                 
                    
            
        });

                 
                    
            
        }
        $scope.integrantes = function(idNomina){
                localStorage.setItem('miNomina',idNomina);
    //###########################################
    /*document.getElementById('tab-integrantes').classList.add('activo');
    document.getElementById('integrantes').classList.remove('content-sitio-canchas');

    document.getElementById('tab-mis-nominas').classList.remove('activo');
    document.getElementById('mis-nominas').classList.add('content-sitio-canchas');

    document.getElementById('tab-listado').classList.remove('activo');
    document.getElementById('listado').classList.add('content-sitio-canchas');*/
    //###########################################
             
    $http.get(API_URL+'nomina/integrantes/' + idNomina).success(function (data) {
        
      if (!Array.isArray(data)){
        data.data = [data]
      }
                      
          $scope.IntegrantesMiNomina = data.integrantes;
               
            
        });
  }
         $scope.getNominaPertenezco = function(){
         debugger; 
    $http.get(API_URL+'nomina/pertenezo/'+$scope.usuario._id).success(function (data) {
                    $scope.NominasPertenezco = data.data;
                    console.log($scope.NominasPertenezco)
        debugger;
        });
  }




           // $scope.usuario = usuarioService.getUsuario();
        }

    
})();