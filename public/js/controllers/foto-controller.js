// public/js/controllers/foto-controller.js

angular.module('alurapic')
    .controller('FotoController', function ($scope, $http, $routeParams) {

        $scope.foto = {};
        $scope.mensagem = '';

        if ($routeParams.fotoId) {
            $http.get('v1/fotos/' + $routeParams.fotoId)
                .success(function (foto) {
                    $scope.foto = foto;

                })
                .error(function (erro) {
                    console
                    $scope.mensagem = 'Erro ao buscar foto: ' + erro;
                });
        }


        $scope.submeter = function () {

            if ($scope.foto._id) {
                $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                .success(function () {
                    $scope.foto = {};
                    $scope.mensagem = 'Foto editada com sucesso';
                    $scope.formulario.$setPristine();
                })
                .error(function (erro) {
                    $scope.mensagem = 'Erro ao editar a foto: ' + $scope.foto.titulo;
                });
            } else {
                if ($scope.formulario.$valid) {
                    $http.post('v1/fotos', $scope.foto)
                        .success(function () {
                            $scope.foto = {};
                            $scope.mensagem = 'Foto cadastrada com sucesso';
                            $scope.formulario.$setPristine();
                        })
                        .error(function (erro) {
                            $scope.mensagem = 'Erro ao incluir formulario: ' + erro;
                        });
                }

            }

        };


    });