// sample angular code

var app = angular.module('myApp', []);

app.controller('mainController', function($scope) {
  $scope.sortType = 'votes';
  $scope.sortReverse = true;
  $scope.search = '';
  $scope.locations = [{name: "Sample", author: "Zoe Adelman", image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Round_Lake_(2)_-_Fayetteville_NY.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur auctor magna, sed placerat neque mollis ut. Pellentesque scelerisque molestie felis, a suscipit turpis tristique at. Maecenas iaculis sollicitudin posuere. Aenean nec mauris dapibus, pharetra felis id, sollicitudin massa.", votes: 0}];



$scope.addNewLocation = function() {
  $scope.newLocation = {
    name: $scope.name,
    author: $scope.author,
    image: $scope.image,
    description: $scope.description,
    votes: 0,
    date: "date",
    comments: []
  };
  $scope.locations.push($scope.newLocation);
  $scope.name="";
  $scope.author = "";
  $scope.image = "";
  $scope.description = "";
};


$scope.addNewComment = function() {
  var newComment = {
    user: this.user,
    response: this.response
  };

  // this.location.comments.push(newComment);
  // $scope.newComment = {
  //   user: $scope.user,
  //   response: $scope.response
  // };
  $scope.user = "";
  $scope.response = "";
};

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

    // { name: 'name1', votes: 0, author: 'author', description: 'description', date: 'date', comments: 'comments', image: "src"},
    // { name: 'name2', votes: 3, author: 'author', description: 'description', date: 'date', comments: 'comments', image: "src"},
    // { name: 'name3', votes: 12, author: 'author', description: 'description', date: 'date', comments: 'comments', image: "src"};

});
