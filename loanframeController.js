loanFrameApp.controller('LoanFrameController', ['$scope','filterFilter', function($scope, filterFilter){
	$scope.sortType     = 'name'; // set the default sort type
	$scope.sortReverse  = false;  // set the default sort order
	$scope.searchPlayer   = '';     // set the default search/filter term
	
	$scope.usepants = [];

	$scope.filterPants = function (player) {
        return function (p) {
            for (var i in $scope.usepants) {
                if (p.pants == $scope.pantsGroup[i] && $scope.usepants[i]) {
                    return true;
                }
            }
        };
    };

	
	
	$scope.players = [
        {name: 'Bruce Wayne',  pants: '42', shoes: '12'},
        {name: 'Wayne Gretzky',  pants: '38', shoes: '10'},
        {name: 'Michael Jordan',  pants: '32', shoes: '9'},
        {name: 'Rodman',  pants: '42', shoes: '11'},
        {name: 'Jake Smitz', pants: '42', shoes: '12'},
        {name: 'Will Will',  pants: '42', shoes: '12'},
        {name: 'Youasdf Oukls', pants: '38', shoes: '10'},
        {name: 'Sam Sneed',  pants: '38', shoes: '10'},
        {name: 'Bill Waxy',  pants: '32', shoes: '9'},
        {name: 'Javier Xavior', pants: '32', shoes: '9'}

    ]; 
	
	$scope.$watch('filtered', function (newValue) {
        if (angular.isArray(newValue)) {
            console.log(newValue.length);
        }
    }, true);
	
}]);