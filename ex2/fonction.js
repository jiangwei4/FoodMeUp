var app = angular.module("myApp", []);

app.controller("param", function ($scope) {
    "use strict"
    $scope.SommeUnSurK = function (x, k) {
        var somme = 0;
        var occurence = 0;
        var suite = "";
        $scope.resultat = SommeUnSurK2(x, k, somme, occurence, suite);
    };
    $scope.Reset = function () {
        $scope.valx = "";
        $scope.valk = "";
        $scope.resultat = "";
        $scope.somme = "";
        $scope.occurence = "";
    };
    function SommeUnSurK2(x, k, somme, occurence, suite) {
        if (occurence === 0) {
            suite += occurence + "/" + k;
        } else {
            suite += "+" + occurence + "/" + k;
        }
        if (somme <= x) {
            occurence = occurence + 1;
            somme += (occurence / k);
            return SommeUnSurK2(x, k, somme, occurence, suite);
        } else {
            $scope.occurence = occurence;
            $scope.somme = somme;
            return "S(" + occurence + ") = " + suite + "=" + somme + ">" + x;
        }
    }
});