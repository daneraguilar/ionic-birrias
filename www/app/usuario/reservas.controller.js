(function() {
    'use strict';

    angular
        .module('usuario')
        .controller('reservasCtrl',reservasCtrl);

    /* @ngInject */
    function reservasCtrl($scope, $state, usuarioService) {
        $scope.$on('$ionicView.loaded',function(){
           // $scope.usuario = [];
           // loadPerfil();
        });

        function loadPerfil(){          
           // $scope.usuario = usuarioService.getUsuario();
        }

    }
})();