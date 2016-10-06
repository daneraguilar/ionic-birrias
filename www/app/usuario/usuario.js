(function () {
    'use strict';
    angular.module('usuario', [])

        .config(function ($stateProvider) {
            $stateProvider

             
                .state('app.usuario', {
                    url: '/perfil',
                    templateUrl: 'app/usuario/perfil.html',
                    controller: 'usuarioCtrl'
                })
                   .state('app.nominas', {
                    url: '/nominas',
                    templateUrl: 'app/usuario/nominas.html',
                    controller: 'nominasCtrl'
                })
                     .state('app.reservas', {
                    url: '/reservas',
                    templateUrl: 'app/usuario/reservas.html',
                    controller: 'reservasCtrl'
                })
                       .state('app.retos', {
                    url: '/retos',
                    templateUrl: 'app/usuario/retos.html',
                    controller: 'retosCtrl'
                })
                     .state('app.ranking', {
                    url: '/ranking',
                    templateUrl: 'app/usuario/ranking.html',
                    controller: 'rankingCtrl'
                }) 
                       .state('app.sitios', {
                    url: '/sitios',
                    templateUrl: 'app/usuario/sitios.html',
                    controller: 'sitiosCtrl'
                })
        });

})();