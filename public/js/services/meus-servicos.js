angular.module('meusServicos', ['ngResource'])
    .factory('recursoFoto', function ($resource) {

        return $resource('v1/fotos/:fotoId', null, {
            update: {
                method: 'PUT'
            }
        });
    })
    .factory('cadastroDeFoto', function (recursoFoto, $q, $rootScope) {

        var servico = {}

        servico.cadastrar = function (foto) {
            return $q(function (resolve, reject) {
                if (foto._id) {
                    recursoFoto.update({ fotoId: foto._id }, foto, function () {
                        $rootScope.$broadcast("fotoCadastrada");
                        resolve({
                            mensagem: 'Foto ' + foto.titulo + ' atualizada com sucesso!!',
                            inclusao: false
                        })
                    }, function (erro) {
                        console.log(erro)
                        reject({ mensagem: 'Não foi possivel atualizar a foto ' + foto.titulo + '!!' });
                    });
                } else {

                    recursoFoto.save(foto, function () {
                        $rootScope.$broadcast("fotoCadastrada");
                        resolve({
                            mensagem: 'Foto ' + foto.titulo + ' incluida com sucesso!!',
                            inclusao: true
                        })
                    }, function (erro) {
                        reject({ mensagem: 'Não foi possivel incluir a foto ' + foto.titulo + '!!' });
                    });
                }
            });
        };
        return servico;
    });