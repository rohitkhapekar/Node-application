// =============================================================================
angular.module('myApp', ['ngAnimate', 'ui.router'])


.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
        // route to show our basic details 
        .state('details', {
            url: '/details',
            templateUrl: 'details.html',
            controller: 'AppController'
        })
        
        .state('details.profile', {
            url: '/profile',
            templateUrl: 'form-profile.html'
        })
      
        .state('details.submit', {
            url: '/submit',
            templateUrl: 'form-submit.html'
        });
       
    
    // send users to the details page 
    $urlRouterProvider.otherwise('/details/profile');
})

// our controller for the details
// =============================================================================
.controller('AppController', ['$scope','$http', function($scope,$http){
  console.log("Hello World From CNTRL");
  $scope.detailsData={};

   $scope.addDetails=function(){
	   $http.post('/detaillist1',$scope.detailsData).success(function(response){
		   $scope.detailsData= response;
		  
		   console.log(response);
	   })
   }
	   }]);
  