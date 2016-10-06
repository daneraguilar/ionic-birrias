(function() {
    'use strict';

    angular
        .module('app')
        .controller('MenuCtrl', MenuCtrl);

    /* @ngInject */
    function MenuCtrl(authService) {
        var vm = this;
        vm.menuList = [
            {nombre: 'Perfil',
                statego : 'app.perfil',
                
            },
            {nombre: 'Reservas',
                statego : 'app.reservas',
            
            },
            {nombre: 'Nominas',
                statego : 'app.nominas',
            
            },
            {nombre: 'Retos',
                statego : 'app.retos',
            
            },
            {nombre: 'Ranking',
                statego : 'app.ranking',
            
            },
            {nombre: 'Sitios',
                statego : 'app.sitios',
            
            },
            {nombre: 'Configuracion',
                statego : 'app.configuracion',
            
            },
            {nombre: 'Mecanica',
                statego : 'app.mecanica',
            
            },
            {nombre: 'Premios',
                statego : 'app.ranking',
            
            }
        ];

        vm.logout = authService.logout;
    }
})();