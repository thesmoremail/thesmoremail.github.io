
//featured, date, folder, title, description,thumbnail
var article = [
 [0,'2018-12-26','mesothelioma','Mesothelioma','Bringing Lawyers and Plantifs together since 1972.','']
,[0,'2018-12-26','insurance','Insurance','What ails ya, coasts ya.','']
,[0,'2018-12-26','utility','Utility','Gas and Electric - heat and light since 1892.','']
,[0,'2018-12-26','mortgage','Mortgage','Death, Taxes and Mortgages - in that order','']
,[0,'2018-12-27','book-dracula','Dracula Book','A classic tail of being out for blood.','']
,[0,'2018-12-27','attorney','Attorneys',"Can't live with them, can't live with them",'']
,[0,'2018-12-27','lawyer','Lawyers',"The origional ambulance chasers.",'']
,[0,'2018-12-27','loans','Loans','Payday Predators and compound interest; neither working in your favor','']
,[0,'2018-12-27','donate','Donate',"It's not your money if you give it away",'']
,[0,'2018-12-28','conferencecall','Conference Call',"Say Wat?! - It's like a game of telephone only more nerdy.",'']
,[0,'2018-12-30','degree','Degrees',"Edumication - it's not just for Nerd's anymore",'']
];

var div = document.getElementById('tableindex');
if (div){ 
  for (var i = 0, len = article.length; i < len; i++) {
    //console.log(article[i]);
    div.innerHTML += '<tr><td class="lpage mod'+ div.rows.length % 2 +'"><a href="/best/'+article[i][2]+'/" title="'+article[i][3]+'">'+article[i][3]+' - '+article[i][4]+'</a></td></tr>';
  }
  document.getElementById('lcount').innerHTML = "Total Page Count: " + div.rows.length;
} //tableindex


var div = document.getElementById('headindex');
if (div){ 
  div.innerHTML += "<ul>";
  for (var i = 0, len = article.length; i < len; i++) {
    //console.log(article[i]);
    div.innerHTML += '<li class="himod'+ i % 2 +'"><a href="/best/'+article[i][2]+'/" title="'+article[i][3]+'">'+article[i][3]+' - '+article[i][4]+'</a></li>';
  }
  div.innerHTML += "</ul>";
}// headindex


var div = document.getElementById('featuredindex');
if (div){ 
  var i = Math.floor((Math.random() * article.length) + 0);
  //console.log(article[i]);
  div.innerHTML += '<a href="/best/'+article[i][2]+'/" title="'+article[i][3]+'">'+article[i][3]+' - '+article[i][4]+'</a> &nbsp;&nbsp;<span style="font-size:smaller"><a href="/sitemap.html">[ all articles ]</a></span>';
} //featuredindex

