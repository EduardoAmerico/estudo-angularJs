angular.module('alurapic').controller('FotosController', function ($scope, recursoFoto) {

	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';


	recursoFoto.query(function (fotos) {
		$scope.fotos = fotos;
	}, function (erro) {
		console.log(erro)
	})


	
	


	$scope.remover = function (foto) {
		recursoFoto.delete({ fotoId: foto._id }, function () {
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = ('Foto ' + foto.titulo + ' foi removida')
		}, function (erro) {
			console.log(erro)
			$scope.mensagem = ('Não coseguiu remover a foto: ' + foto.titulo);
		});
	};
	
	//buscar com http
	// $http.get('v1/fotos')
	// .success(function(fotos){
	// 	$scope.fotos = fotos;
	// }).error(function(error){
	// 	console.log(error)
	// });

	//deletar com http
	// $scope.remover = function (foto) {
	// 	$http.delete('v1/fotos/' + foto._id)
	// 		.success(function () {

	// 			var indiceFoto = $scope.fotos.indexOf(foto);
	// 			$scope.fotos.splice(indiceFoto, 1);

	// 			$scope.mensagem = ('Foto ' + foto.titulo + ' foi removida')
	// 		})
	// 		.error(function (erro) {
	// 			$scope.mensagem = ('Não coseguiu remover a foto: ' + foto.titulo);
	// 		})
	// };


	// $scope.fotos = [];
	// var promise =	$http.get('v1/fotos');
	// promise.then(function(retorno){
	// 	$scope.fotos = retorno.data
	// }).catch(function(error){
	// 	console.log(error)
	// });


});