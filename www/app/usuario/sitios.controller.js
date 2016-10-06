(function() {
    'use strict';

    angular
        .module('usuario')
        .controller('sitiosCtrl',sitiosCtrl);

    /* @ngInject */
    function sitiosCtrl($scope, $state, usuarioService) {
        $scope.$on('$ionicView.loaded',function(){
           // $scope.usuario = [];
           // loadPerfil();
        });

        function loadPerfil(){          
           // $scope.usuario = usuarioService.getUsuario();
        }

    }
})();