function openGenre(evt,genName){
  var i, tabContent,testlinks;

  tabContent = document.getElementsByClassName("tabContent");
  for (i=0; i<tabContent.length; i++){
    tabContent[i].style.display=none;}

  testlinks = document.getElementsByClassName("testlinks");
  for(i=0; i<testlinks.length; i++){
    testlinks[i].className = testlinks[i].className.replace(" active", "");}

  document.getElementById(genName).style.display = "block";
  evt.currentTarget.className += " active";
}
