
//featured, date, folder, title, description,thumbnail
var article = [
 [0,'2018-12-26','mesothelioma','Mesothelioma','Bringing Lawyers and Plantifs together since 1972.','']
,[0,'2018-12-26','insurance','Insurance','What ails ya, coasts ya.','']
,[0,'2018-12-26','utility','Utility','Gas and Electric - heat and light since 1892.','']
,[0,'2018-12-26','mortgage','Mortgage','Death, Taxes and Mortgages - in that order','']
,[0,'2018-12-27','book-dracula','Dracula Book','A classic tail of being out for blood.','']
,[0,'2018-12-27','attorney','Attorneys and Lawyers',"Can't live with them, can't live with them",'']
,[0,'2018-12-27','loans','Loans','Payday Predators and compound interest; neither working in your favor','']

];

var div = document.getElementById('tableindex');
if (div){ 
for (var i = 0, len = article.length; i < len; i++) {
  console.log(article[i]);
div.innerHTML += '<tr><td class="lpage mod'+ div.rows.length % 2 +'"><a href="/best/'+article[i][2]+'/" title="'+article[i][3]+'">'+article[i][3]+' - '+article[i][4]+'</a></td></tr>';

}
document.getElementById('lcount').innerHTML = "Total Page Count: " + div.rows.length;
}
