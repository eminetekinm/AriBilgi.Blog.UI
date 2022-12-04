var app = angular.module('WebsiteApp', []);

app.controller("LayoutController", function ($scope, $http) {

    angular.element(document).ready(function () {
        $scope.GetCategoryList();
       
    });

    $scope.GetCategoryList = function () {
        $http({
            method: "GET",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44309/Api/Category/CategoryGetList",
        }).then(function (d) {
            $scope.CategoryList = d.data.data;
        });
    }
    $scope.SupportOpen = function () {

        var link = "https://api.whatsapp.com/send?phone=905516448080&text=Merhabalar";
        window.open(link, "_blank");

    }
  
});