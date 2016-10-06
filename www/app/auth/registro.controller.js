(function() {
    'use strict';

    angular
        .module('auth')
        .controller('RegistroCtrl', RegistroCtrl);

    /* @ngInject */
    function RegistroCtrl($scope, authService, $ionicPopup, $state) {
        var vm = this;
        $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
            viewData.enableBack = true;

            vm.usuario = {};
            vm.mostrarAdvertencia = false;

            vm.registrarUsuario = registrarUsuario;
 

            
        });

     

        function registrarUsuario(){
        
            if(vm.usuario.pass != vm.usuario.passConfir){
                vm.mostrarAdvertencia = true;
                return;
            }
            delete vm.usuario.passConfir;
            authService.register(vm.usuario).then(success, error);
            function success(p) {
                console.log(p)
                mostrarAlert("", "Se ha registrado satisfatoriamente");
                $state.go("login");
            }
            function error(error) {
                if(error.status == 409){
                    mostrarAlert("Fallo en el Registro", "Parece que "+vm.usuario.correo+" pertenece a una cuenta ya registrada ");
                    return;
                }
                mostrarAlert("Fallo en el Registro", "No se ha podido realizar el registro intente mas tarde");
            }
        }

        function mostrarAlert(titulo,contenido){
            var alertPopup = $ionicPopup.alert({
                title: titulo,
                template: contenido
            });
            alertPopup.then(function (res) {
            });
        }
    }
})();