const max = 15;
const sites = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", 
"eleven", "twelve", "thirteen", "fourteen", "fifteen"];
const names = ["工程一館", "綜合一館", "旺宏館", "教育館", "材料科技館", "資電館", "校園巴士", "小吃部", "工科館", "人社院",
"生科院", "駐警隊", "醫環館", "創新育成大樓", "台積館"];
const la = [24.795051307034957, 24.784726382611765,  24.795898112079897, 24.795802688997785, 24.796639677830452, 24.794921704497572, 
24.794118198178257, 24.793195393533644, 24.79093314302261, 24.789946213828767, 24.789683695340884, 24.79155492393737, 24.789237146903584, 
24.786215490838575, 24.78681153852047];
const lo = [120.99615965605243, 120.9973659259389, 120.99458767949615, 120.99376670795904, 120.99180668124923, 120.99211701111355, 
120.99357319963745, 120.99309812671919, 120.99098217832687, 120.9890818919432, 120.99016724880019, 120.99180480744255, 120.99131149188428, 
120.98875007306172, 120.9882616184111];
var last = -1;


function getRandomLocation(){
  var rand = Math.floor(Math.random() * max);
  while(rand == last){
    console.log(rand);
    console.log("need to change");
    var rand = Math.floor(Math.random() * max);
  }
  var atag = document.getElementById('link');
  atag.innerHTML = "<a href='./overview/content/"+sites[rand]+
  ".html'><div id='choice'><button>"+names[rand]+
  "</button><img src='./images/loc ("+String(rand+1)+").jpg'></div></a>";
  //  names[rand];
  // location.href='../overview/content/' + sites[rand] + '.html';

  console.log(rand);
  last = rand;
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getClosestLocation, showError);
  } else { 
    atag.innerHTML = "此瀏覽器不支援位置存取";
  }
}
  
function getClosestLocation(position){
  var a = position.coords.latitude;
  var b = position.coords.longitude;
  var diff = 1.0;
  var close = 0;
  for(let i=0; i<15; i++){
    var cur_diff = (a-la[i])*(a-la[i]) + (b-lo[i])*(b-lo[i]);
    if(cur_diff < diff){
      diff = cur_diff;
      close = i;
    }
  }
  console.log(a);
  console.log(b);
  var atag = document.getElementById('link');
  atag.innerHTML = "<a href='./overview/content/"+sites[close]+
  ".html'><div id='choice'><button>"+names[close]+
  "</button><img src='./images/loc ("+String(close+1)+").jpg'></div></a>";
  // names[close] 
  last = close;
}

function showError(error) {
  var atag = document.getElementById('link');
  switch(error.code) {
    case error.PERMISSION_DENIED:
      atag.innerHTML = "<p>請允許位置存取</p>";
      break;
    case error.POSITION_UNAVAILABLE:
      atag.innerHTML = "<p>無法定位您的位置</p>";
      break;
    case error.TIMEOUT:
      ptag.innerHTML = "<p>定位超時</p>";
      break;
    case error.UNKNOWN_ERROR:
      ptag.innerHTML = "<p>發生了未知錯誤</p>";
      break;
  }
}



