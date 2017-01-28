(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/restaurant/templates/home.template.html'
  })

  // Categories list
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/restaurant/templates/categories.template.html',
    controller: 'CategoriesController as categoriesController',
    resolve: {
      items: ['MenuService', function (MenuService) {
        return MenuService.getCategories();
      }]
    }
  })

  .state('menuItems', {
      url: '/menu-items/{categoryShortName}',
      templateUrl: 'src/restaurant/templates/items.template.html',
      controller: 'MenuItemsController as menuItemsController',
      resolve: {
        menuItems: ['$stateParams', 'MenuService',
              function ($stateParams, MenuService) {
                console.log($stateParams);
                return MenuService.getItemsForCategory($stateParams.categoryShortName);
                }]
      }

  });
}

})();
