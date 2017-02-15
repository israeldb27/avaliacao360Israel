(function() {
    'use strict';

    angular
        .module('avaliacao360IsraelApp')
        .controller('EquipeDeleteController',EquipeDeleteController);

    EquipeDeleteController.$inject = ['$uibModalInstance', 'entity', 'Equipe'];

    function EquipeDeleteController($uibModalInstance, entity, Equipe) {
        var vm = this;

        vm.equipe = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            Equipe.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
