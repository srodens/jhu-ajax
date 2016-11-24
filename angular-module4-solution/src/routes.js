(function () {


angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
  .state ('home',{
    url: '/',
    templateUrl: 'templates/home.html'
  })
  .state('categories', {
      url: '/categories',
      templateUrl: 'templates/categories.html',
      controller:'CatergoriesController as categories',
      resolve: {
        items:['MenuDataService',function(MenuDataService){
          return MenuDataService.getAllCategories();
        }
      ]
      }
    })

  .state('items', {
        url: '/items/{itemId}',
        templateUrl: 'templates/items.html',
        controller: "ItemsController as items",
        resolve: {
            items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                return MenuDataService.getItemsForCategory($stateParams.itemId);
            }]
        }
    });
}


})();
