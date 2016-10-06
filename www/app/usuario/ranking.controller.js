(function() {
    'use strict';

    angular
        .module('usuario')
        .controller('rankingCtrl',rankingCtrl);

    /* @ngInject */
    function rankingCtrl($scope, $state, usuarioService) {
        $scope.$on('$ionicView.loaded',function(){
           // $scope.usuario = [];
           // loadPerfil();
        });

        function loadPerfil(){          
           // $scope.usuario = usuarioService.getUsuario();
        }

    }
})();