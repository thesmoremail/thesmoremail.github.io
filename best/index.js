
//featured, date, folder, title, description,thumbnail
var article = [
 [0,'2018-12-26','mesothelioma','🚭 Mesothelioma 🚬','Bringing Lawyers and Plantifs together since 1972.','']
,[0,'2018-12-26','insurance','💡 Insurance','What ails ya, costs ya.','']
,[0,'2018-12-26','utility','🔌 Utility ⚡','Gas and Electric - heat and light since 1892.','']
,[0,'2018-12-26','mortgage','🏩 Mortgage','Death, Taxes and Mortgages - in that order','']
,[0,'2018-12-27','book-dracula','📓 Dracula Book','A classic tail of being out for blood.','']
,[0,'2018-12-27','attorney','⚖ Attorneys',"Can't live with them, can't live with them",'']
,[0,'2018-12-27','lawyer','🔨 Lawyers',"The origional ambulance chasers.",'']
,[0,'2018-12-27','loans','🏠 Loans','Payday Predators and compound interest; neither working in your favor','']
,[0,'2018-12-27','donate','🤝 Donate',"It's not your money if you give it away",'']
,[0,'2018-12-28','conferencecall','📞 Conference Call',"Say Wat?! - It's like a game of telephone only more nerdy.",'']
,[0,'2018-12-30','degree','🏫 Degrees',"Edumication - it's not just for Nerd's anymore",'']
,[0,'2018-12-30','clickgame','🏓 ClickGame',"get your mouse or trackball.  this one moves pretty fast.",'']
,[0,'2018-12-31','chat','🎭 Chat',"When you need to ask for help on how to toast your sMoreMail, ask these bots.",'']
,[0,'2018-12-31','email','📩 Email',"<img src='/img/sm-xsm.png' style='height:22px;'/> Shenanigan Protection;  Methods, Tests, and Techniques for email phishing, farming, and spoofing identification and sanitization.",'']
,[0,'2019-01-03','asbestos','⚠ asbestos',"The Lawsuits engulfing the other white meat.",'']
,[0,'2019-01-03','carinsurance','🚓 Car Insurance',"You hit it, they pay",'']
,[0,'2019-01-03','asbestos_trusts','☠ Asbestos Trusts',"You breathe it, they pay",'']
,[0,'2019-01-03','dev','△ Development',"The pyramid of power for the best development cycles",'']
,[0,'2019-01-03','asbestos_map','🌎 Asbestos Map',"If You don't find it, you can't breath the stuff!",'']
,[0,'2019-01-04','gold','🤑 Gold',"They Told you where to look, but you didn't believe them",'']
,[0,'2019-01-04','paranoidbible','😶 Paranoid\'s Bible',"Cyber Stocking and Anti-Doxing, Anonymous Tumblr authors bring you da links to check",'']
,[0,'2019-01-04','asbestos_trusts2','😶 Asbestos Trusts links',"The plot is now friable and airborn, PPE is missing",'']

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

