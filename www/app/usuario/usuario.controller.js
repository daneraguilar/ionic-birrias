(function() {
    'use strict';

    angular
        .module('usuario')
        .controller('usuarioCtrl', usuarioCtrl);

    /* @ngInject */
    function usuarioCtrl($scope, $state, usuarioService) {
        $scope.$on('$ionicView.loaded',function(){
            $scope.usuario = [];
            loadPerfil();
        });

        function loadPerfil(){          
            $scope.usuario = usuarioService.getUsuario();
        }

    }
})();