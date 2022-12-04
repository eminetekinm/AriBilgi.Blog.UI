app.controller("CategoryController", function ($scope, $http) {

    angular.element(document).ready(function () {
        $scope.GetArticleByCategory();
    });

    $scope.GetUrlParameter = function (parmeterName) {
        const url = window.location.search;
        const urlParams = new URLSearchParams(url);
        const result = urlParams.get(parmeterName);
        if (result == null) {
            return "";
        }
        else {
            return result;
        }
    }

    $scope.GetArticleByCategory = function () {
        $http({
            method: "GET",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44309/Api/Article/GetAllByCategory?categoryId="+$scope.GetUrlParameter("Id"),
        }).then(function (d) {

            $scope.articleList = d.data.data;
        });
    }

    
   
});