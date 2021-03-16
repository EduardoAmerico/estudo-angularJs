// public/js/controllers/foto-controller.js

angular.module('alurapic')
    .controller('FotoController', function ($scope, $routeParams, recursoFoto) {

        $scope.foto = {};
        $scope.mensagem = '';


        if ($routeParams.fotoId) {
            recursoFoto.get({ fotoId: $routeParams.fotoId },
                function (foto) {
                    $scope.foto = foto;
                }, function (erro) {
                    $scope.mensagem = 'Erro ao buscar foto: ' + erro;
                })


            // $http.get('v1/fotos/' + $routeParams.fotoId)
            //     .success(function (foto) {
            //         $scope.foto = foto;

            //     })
            //     .error(function (erro) {
                    
            //         $scope.mensagem = 'Erro ao buscar foto: ' + erro;
            //     });
        }


        $scope.submeter = function () {

            if ($scope.foto._id) {

                recursoFoto.update({ fotoId: $scope.foto._id }, $scope.foto,
                    function () {
                        $scope.foto = {};
                        $scope.mensagem = 'Foto editada com sucesso';
                        $scope.formulario.$setPristine();
                    }, function (erro) {
                        $scope.mensagem = 'Erro ao editar a foto: ' + $scope.foto.titulo;
                    })

                // $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                //     .success(function () {
                //         $scope.foto = {};
                //         $scope.mensagem = 'Foto editada com sucesso';
                //         $scope.formulario.$setPristine();
                //     })
                //     .error(function (erro) {
                //         $scope.mensagem = 'Erro ao editar a foto: ' + $scope.foto.titulo;
                //     });
            } else {
                if ($scope.formulario.$valid) {
                    recursoFoto.save($scope.foto, 
                        function(){
                            $scope.foto = {};
                            $scope.mensagem = 'Foto cadastrada com sucesso';
                            $scope.formulario.$setPristine();
                    },
                    function(error) {
                        $scope.mensagem = 'Erro ao incluir formulario: ' + erro;
                    });

                    // $http.post('v1/fotos', $scope.foto)
                    //     .success(function () {
                    //         $scope.foto = {};
                    //         $scope.mensagem = 'Foto cadastrada com sucesso';
                    //         $scope.formulario.$setPristine();
                    //     })
                    //     .error(function (erro) {
                    //         $scope.mensagem = 'Erro ao incluir formulario: ' + erro;
                    //     });
                }

            }

        };


    });