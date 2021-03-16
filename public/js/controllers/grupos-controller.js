angular.module('alurapic').controller('GrupoController', function ($scope, $http){
    $scope.grupos = [];
    $http.get('v1/grupos')
    .success(function(grupos){

        $scope.grupos = grupos;

    })
    .error(function(erro){
        console.log('Erro ao buscar grupos');
    })
})