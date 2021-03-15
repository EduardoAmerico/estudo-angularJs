// public/js/controllers/foto-controller.js

angular.module('alurapic')
    .controller('FotoController', function($scope, $http, $routeParams) {

        if($routeParams.fotoId){
            $http.get('v1/fotos/' + $routeParams.fotoId)
            .success(function(){
                $scope.foto = foto;
               
            })
            .error(function(erro){
                console
                $scope.mensagem ='Erro ao buscar foto: ' + erro;
            });
        }
        $scope.foto = {};
        $scope.mensagem = '';

        $scope.submeter = function() {
           if ($scope.formulario.$valid){
            $http.post('v1/fotos', $scope.foto)
            .success(function(){
                $scope.foto = {};
                $scope.mensagem ='Foto cadastrada com sucesso';
            })
            .error(function(erro){
                $scope.mensagem ='Erro ao incluir formulario: ' + erro;
            });
           }
            
        };
        

    });