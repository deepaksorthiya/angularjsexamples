var app = angular.module('myApp', []);
app.controller('customersCtrl', function ($scope) {

    $scope.dropDowns = [
        {"Name": "Max Joe", "City": "Lulea", "Country": "Sweden"},
        {"Name": "Manish", "City": "Delhi", "Country": "India"},
        {"Name": "Koniglich", "City": "Barcelona", "Country": "Spain"},
        {"Name": "Wolski", "City": "Arhus", "Country": "Denmark"}
    ];

    $scope.names = [
        {"Name": "Max Joe", "City": "Lulea", "Country": "Sweden", "data": []},
        {"Name": "Manish", "City": "Delhi", "Country": "India", "data": []}
    ];
});