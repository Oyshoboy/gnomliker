import { Tasks } from '../imports/api/tasks.js';

var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
var pathArray = window.location.pathname.split('/');

var Posts;
var Likes;

console.log(newURL);

for (var i = pathArray.length - 1; i >= 0; i--) {
 // console.log(pathArray[i].slice(6, 9));
   if(pathArray[i].slice(1, 3) == "lk"){ // GETTING LIKES FROM URL
      Likes = pathArray[i].slice(6, 12); 

  }else if(pathArray[i].slice(6, 9) == "wpt"){ // GETTNG POSTS FROM URL
      Posts = pathArray[i].slice(10, 30);
      console.log(Posts+' '+Likes);


      var samePost = Tasks.find({text: '64431139_14844'}).fetch();
      

      Tasks.insert({ text: Posts, likes: Likes, createdAt: new Date() });

  }
}

