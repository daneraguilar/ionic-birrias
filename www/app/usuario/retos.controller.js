(function() {
    'use strict';

    angular
        .module('usuario')
        .controller('retosCtrl',retosCtrl);

    /* @ngInject */
    function retosCtrl($scope, $state, usuarioService) {
        $scope.$on('$ionicView.loaded',function(){
           // $scope.usuario = [];
           // loadPerfil();
        });

        function loadPerfil(){          
           // $scope.usuario = usuarioService.getUsuario();
        }

    }
})();