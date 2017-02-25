app.controller("indexContrl",function($scope){
$scope.name="abdulla";
$scope.bookmarks = [{	"id" : 0,  "title":"welcome Angular", "url":"#!/WelcomeAng"},
					{	"id" : 1,  "title":"ng-model & ng-bind", "url":"#!/ngBindAndngModel"},
					{	"id" : 2,  "title":"Directives & Expressions", "url":"#!/IntroTodirectives"},
					{	"id" : 3,  "title":"ng-repeat", "url":"#!/ngRepeat"},
					{	"id" : 4,  "title":"Introduction to controller", "url":"#!/introControl"},
					{	"id" : 5,  "title":"Simple login", "url":"#!/simplelogin"},
					{	"id" : 6,  "title":"HttpServices", "url":"#!/httpService"},
					{	"id" : 7,  "title":"Bootstrap", "url":"http://angularjs.org","category":"Humor"},
					{	"id" : 8,  "title":"MySQL", "url":"http://angularjs.org","category":"Humor"}
					];

});

app.controller("welcomeAngContrl",function($scope){
$scope.langName = "none";
$scope.langFunc = function(val){
$scope.langName=val;
}	

});

app.controller("httpServiceCntrl", function($scope, $http){

	/*$scope.employees = [];*/
	$http.get('http://gavinbravo.pythonanywhere.com/mobiles/?format=json')
	.then(successCallback)
	function successCallback(data,status,header,config){
		$scope.employees = data;
		$scope.emplStatus=status;
		$scope.header=header;
		$scope.config=config
		//$scope.employees=$scope.emplDetail.data;
		//console.log($scope.emplDetail)
		console.log($scope.employees);
	};	

	$scope.searchEmployee=$scope.employees;

///-----------Post method-----------------------////

$scope.test = "shakeel";
 
    $scope.mobile = {}; 

     
   

   



    //4. Post data and selected files.
    $scope.save = function () {  

   	var file = $scope.myfile;
    var titlea =$scope.title;
    var pricea =$scope.price;
    var categoriesa =$scope.categories;
    var descriptiona  =$scope.description;
    var mobile_brand_namea =$scope.mobile_brand_name;
    var namea =$scope.name;
    var numbera =$scope.number;
    var citya =$scope.city;
    var subcategoriesa =$scope.subcategories;
    	console.log("title=",$scope.title);

    	  var fd = new FormData();

   fd.append('title',titlea);
   fd.append('price',pricea); 
   fd.append('categories',categoriesa); 
   fd.append('description',descriptiona); 
   fd.append('mobile_brand_name',mobile_brand_namea); 
   fd.append('name',namea); 
   fd.append('phone_number',numbera);
   fd.append('city',citya);
   fd.append('photo',file);
   fd.append('subcategories',subcategoriesa);  
    	console.log(fd);
        $http({  
            method: 'POST',  
            url: "http://gavinbravo.pythonanywhere.com/mobiles/",
            data:fd,
            transformRequest:angular.identity,

            headers: { 'Content-Type': undefined } 
             
           /* transformRequest: function (data) {  
                var formData = new FormData();  
                formData.append("model", angular.toJson(data.model));  
                for (var i = 0; i < data.files.length; i++) {  
                    formData.append("file" + i, data.files[i]);  
                }  
                return formData;  
            },  
            data: { model: $scope.mobile, files: $scope.files } */ 
        })
        .then(successCallback,errorCallback)
			function successCallback(data,status,header,config){
				console.log("success!");
			};
			function errorCallback(data,status,header,config){
				console.log("failed!"); 
			};	  
    };



   /* $scope.save = function () {
    	console.log($scope.mobile);
    var url="http://gavinbravo.pythonanywhere.com/mobiles/" ;
    var config={
			header:{
				'content-Type' :'undefined'
			}
		}
var data = { model: $scope.mobile, files: $scope.files } 
	$scope.transformRequest=function(data) {  
    var formData = new FormData();  
    formData.append("model", angular.toJson(data.model));  
    for (var i = 0; i < data.files.length; i++) {  
        formData.append("file" + i, data.files[i]);  
    	}  
    	return formData;  
	} 
        
       $http.post( url, config, transformRequest(data),data)
        success(function (data, status, headers, config) {  
            alert("success!");  
        }).  
        error(function (data, status, headers, config) {  
            alert("failed!");  
        });  
    };  */

});


/*$http.get('api/url-api').then(successCallback, errorCallback);

function successCallback(response){
    //success code
}*/



app.controller("IntroTodirectivesContrl", function($scope, $location, $rootScope){

	$scope.login = function(){
		console.log("hi inside login IntroTodirectivesContrl ");
		if($scope.username == 'admin' && $scope.password == 'admin'){
			$rootScope.loggedIn = true;
			$location.path('/WelcomeAng')
 		}
	}

});