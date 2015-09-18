// sample angular code

var app = angular.module('myApp', []);

app.controller('mainController', function($scope) {
  $scope.sortType = 'votes';
  $scope.sortReverse = true;
  $scope.search = '';
  $scope.locations = [{name: "Sample", author: "Zoe Adelman", image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Round_Lake_(2)_-_Fayetteville_NY.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur auctor magna, sed placerat neque mollis ut. Pellentesque scelerisque molestie felis, a suscipit turpis tristique at. Maecenas iaculis sollicitudin posuere. Aenean nec mauris dapibus, pharetra felis id, sollicitudin massa.", votes: 0}];


// ADD POST
$scope.addNewLocation = function() {
  $scope.newLocation = {
    name: $scope.name,
    author: $scope.author,
    image: $scope.image,
    description: $scope.description,
    votes: 0,
    date:"",
    comments: []
  };
  $scope.locations.push($scope.newLocation);
  $scope.name="";
  $scope.author = "";
  $scope.image = "";
  $scope.description = "";
};

//ADD COMMENT
$scope.addNewComment = function() {
  $scope.newComment = {
    user: this.user.name,
    response: this.user.response
  };
  this.location.comments.push($scope.newComment);
  console.log($scope.newComment);
  console.log(this.location.comments);


  // $scope.user.name = "";
  // $scope.user.response = "";
};

//ADD TIMESTAMP
$scope.addNewDate = function() {
  $scope.newDate = new Date().getTime();
  this.location.date.push($scope.newComment);
}

//UPDATE POST VOTES
$scope.addVote = function() {
  this.location.votes += 1;
};

$scope.removeVote = function() {
  this.location.votes -= 1;
};

$scope.voteColor = function() {
  if (this.location.votes < 0) {
    var negative = { 'color':'red' };
    return negative;
  }
  else if (this.location.votes > 0) {
    var positive = { 'color' : 'green' };
    return positive;
  } else {
    var neutral = { 'color' : 'black'};
    return neutral;
  }
};
//////END POST VOTES///////////////

});
