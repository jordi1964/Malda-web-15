/* dissenymalda.cat-v15 JavaScript
========================================== */


/* ANIMACIÓ CADIRES QUE CAUEN */


/** CONJUNT-2 --> Formats horitzontals **/

function activaConjunt2() {
  document.getElementById("escenari-2").style.animation = "ani-tarima-2 12s ease-in 2s both";
  document.getElementById("flipper-2").style.animation = "ani-flip-2 12s ease-in 2s both";
  document.getElementById("cadira-21").style.animation = "ani-cad-21 12s ease-in 2s both";
  document.getElementById("cadira-22").style.animation = "ani-cad-22 12s ease-in 2s both";
  // Code for Safari 4.0 - 8.0:
  document.getElementById("escenari-2").style.WebkitAnimation = "ani-tarima-2 12s ease-in 2s both";
  document.getElementById("flipper-2").style.WebkitAnimation = "ani-flip-2 12s ease-in 2s both";
  document.getElementById("cadira-21").style.WebkitAnimation = "ani-cad-21 12s ease-in 2s both";
  document.getElementById("cadira-22").style.WebkitAnimation = "ani-cad-22 12s ease-in 2s both";
}


/** CONJUNT 3 --> Formats verticals **/

function activaConjunt3() {
  document.getElementById("escenari-3").style.animation = "ani-tarima-3 12s ease-in 2s both";
  document.getElementById("flipper-3").style.animation = "ani-flip-3 12s ease-in 2s both";
  document.getElementById("cadira-31").style.animation = "ani-cad-31 12s ease-in 2s both";
  document.getElementById("cadira-32").style.animation = "ani-cad-32 12s ease-in 2s both";
  // Code for Safari 4.0 - 8.0:
  document.getElementById("escenari-3").style.animation = "ani-tarima-3 12s ease-in 2s both";
  document.getElementById("flipper-3").style.animation = "ani-flip-3 12s ease-in 2s both";
  document.getElementById("cadira-31").style.animation = "ani-cad-31 12s ease-in 2s both";
  document.getElementById("cadira-32").style.animation = "ani-cad-32 12s ease-in 2s both";
}




/* Imatge 1 - Butaca */

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}



/* Imatge 2 - Taula */

function openModal2() {
  document.getElementById('myModal2').style.display = "block";
}

function closeModal2() {
  document.getElementById('myModal2').style.display = "none";
}

var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }
  slides2[slideIndex2-1].style.display = "block";
}


/* Imatge 3 - Cadira */

function openModal3() {
  document.getElementById('myModal3').style.display = "block";
}

function closeModal3() {
  document.getElementById('myModal3').style.display = "none";
}

var slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  var i;
  var slides3 = document.getElementsByClassName("mySlides3");
  if (n > slides3.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";
  }
  slides3[slideIndex3-1].style.display = "block";
}


/* Imatge 4 - Cofre */

function openModal4() {
  document.getElementById('myModal4').style.display = "block";
}

function closeModal4() {
  document.getElementById('myModal4').style.display = "none";
}

var slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
  var i;
  var slides4 = document.getElementsByClassName("mySlides4");
  if (n > slides4.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = slides4.length}
  for (i = 0; i < slides4.length; i++) {
      slides4[i].style.display = "none";
  }
  slides4[slideIndex4-1].style.display = "block";
}



/* Imatge 5 - Tamboret */

function openModal5() {
  document.getElementById('myModal5').style.display = "block";
}

function closeModal5() {
  document.getElementById('myModal5').style.display = "none";
}

var slideIndex5 = 1;
showSlides5(slideIndex5);

function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

function currentSlide5(n) {
  showSlides5(slideIndex5 = n);
}

function showSlides5(n) {
  var i;
  var slides5 = document.getElementsByClassName("mySlides5");
  if (n > slides5.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = slides5.length}
  for (i = 0; i < slides5.length; i++) {
      slides5[i].style.display = "none";
  }
  slides5[slideIndex5-1].style.display = "block";
}



/* Imatge 6 - Taula-2 */

function openModal6() {
  document.getElementById('myModal6').style.display = "block";
}

function closeModal6() {
  document.getElementById('myModal6').style.display = "none";
}

var slideIndex6 = 1;
showSlides6(slideIndex6);

function plusSlides6(n) {
  showSlides6(slideIndex6 += n);
}

function currentSlide6(n) {
  showSlides6(slideIndex6 = n);
}

function showSlides6(n) {
  var i;
  var slides6 = document.getElementsByClassName("mySlides6");
  if (n > slides6.length) {slideIndex6 = 1}
  if (n < 1) {slideIndex6 = slides6.length}
  for (i = 0; i < slides6.length; i++) {
      slides6[i].style.display = "none";
  }
  slides6[slideIndex6-1].style.display = "block";
}



/* Imatge 7 - Caseta Anubis */

function openModal7() {
  document.getElementById('myModal7').style.display = "block";
}

function closeModal7() {
  document.getElementById('myModal7').style.display = "none";
}

var slideIndex7 = 1;
showSlides7(slideIndex7);

function plusSlides7(n) {
  showSlides7(slideIndex7 += n);
}

function currentSlide7(n) {
  showSlides7(slideIndex7 = n);
}

function showSlides7(n) {
  var i;
  var slides7 = document.getElementsByClassName("mySlides7");
  if (n > slides7.length) {slideIndex7 = 1}
  if (n < 1) {slideIndex7 = slides7.length}
  for (i = 0; i < slides7.length; i++) {
      slides7[i].style.display = "none";
  }
  slides7[slideIndex7-1].style.display = "block";
}



/* Imatge 8 - Jardinera */

function openModal8() {
  document.getElementById('myModal8').style.display = "block";
}

function closeModal8() {
  document.getElementById('myModal8').style.display = "none";
}

var slideIndex8 = 1;
showSlides8(slideIndex8);

function plusSlides8(n) {
  showSlides8(slideIndex8 += n);
}

function currentSlide8(n) {
  showSlides8(slideIndex8 = n);
}

function showSlides8(n) {
  var i;
  var slides8 = document.getElementsByClassName("mySlides8");
  if (n > slides8.length) {slideIndex8 = 1}
  if (n < 1) {slideIndex8 = slides8.length}
  for (i = 0; i < slides8.length; i++) {
      slides8[i].style.display = "none";
  }
  slides8[slideIndex8-1].style.display = "block";
}



/* Imatge 9 - Canelobres */

function openModal9() {
  document.getElementById('myModal9').style.display = "block";
}

function closeModal9() {
  document.getElementById('myModal9').style.display = "none";
}

var slideIndex9 = 1;
showSlides9(slideIndex9);

function plusSlides9(n) {
  showSlides9(slideIndex9 += n);
}

function currentSlide9(n) {
  showSlides9(slideIndex9 = n);
}

function showSlides9(n) {
  var i;
  var slides9 = document.getElementsByClassName("mySlides9");
  if (n > slides9.length) {slideIndex9 = 1}
  if (n < 1) {slideIndex9 = slides9.length}
  for (i = 0; i < slides9.length; i++) {
      slides9[i].style.display = "none";
  }
  slides9[slideIndex9-1].style.display = "block";
}



/* Imatge 11 - Caixa Birres */

function openModal11() {
  document.getElementById('myModal11').style.display = "block";
}

function closeModal11() {
  document.getElementById('myModal11').style.display = "none";
}

var slideIndex11 = 1;
showSlides11(slideIndex11);

function plusSlides11(n) {
  showSlides11(slideIndex11 += n);
}

function currentSlide11(n) {
  showSlides11(slideIndex11 = n);
}

function showSlides11(n) {
  var i;
  var slides11 = document.getElementsByClassName("mySlides11");
  if (n > slides11.length) {slideIndex11 = 1}
  if (n < 1) {slideIndex11 = slides11.length}
  for (i = 0; i < slides11.length; i++) {
      slides11[i].style.display = "none";
  }
  slides11[slideIndex11-1].style.display = "block";
}



/* Imatge 12 - BANC MALDÀ */

function openModal12() {
  document.getElementById('myModal12').style.display = "block";
}

function closeModal12() {
  document.getElementById('myModal12').style.display = "none";
}

var slideIndex12 = 1;
showSlides12(slideIndex12);

function plusSlides12(n) {
  showSlides12(slideIndex12 += n);
}

function currentSlide12(n) {
  showSlides12(slideIndex12 = n);
}

function showSlides12(n) {
  var i;
  var slides12 = document.getElementsByClassName("mySlides12");
  if (n > slides12.length) {slideIndex12 = 1}
  if (n < 1) {slideIndex12 = slides12.length}
  for (i = 0; i < slides12.length; i++) {
      slides12[i].style.display = "none";
  }
  slides12[slideIndex12-1].style.display = "block";
}



/* Imatge 13 - PENJA-ROBA REBEDOR */

function openModal13() {
  document.getElementById('myModal13').style.display = "block";
}

function closeModal13() {
  document.getElementById('myModal13').style.display = "none";
}

var slideIndex13 = 1;
showSlides13(slideIndex13);

function plusSlides13(n) {
  showSlides13(slideIndex13 += n);
}

function currentSlide13(n) {
  showSlides13(slideIndex13 = n);
}

function showSlides13(n) {
  var i;
  var slides13 = document.getElementsByClassName("mySlides13");
  if (n > slides13.length) {slideIndex13 = 1}
  if (n < 1) {slideIndex13 = slides13.length}
  for (i = 0; i < slides13.length; i++) {
      slides13[i].style.display = "none";
  }
  slides13[slideIndex13-1].style.display = "block";
}



/* Imatge 14 - PENJA-ROBA MURAL */

function openModal14() {
  document.getElementById('myModal14').style.display = "block";
}

function closeModal14() {
  document.getElementById('myModal14').style.display = "none";
}

var slideIndex14 = 1;
showSlides14(slideIndex14);

function plusSlides14(n) {
  showSlides14(slideIndex14 += n);
}

function currentSlide14(n) {
  showSlides14(slideIndex14 = n);
}

function showSlides14(n) {
  var i;
  var slides14 = document.getElementsByClassName("mySlides14");
  if (n > slides14.length) {slideIndex14 = 1}
  if (n < 1) {slideIndex14 = slides14.length}
  for (i = 0; i < slides14.length; i++) {
      slides14[i].style.display = "none";
  }
  slides14[slideIndex14-1].style.display = "block";
}



/* Imatge 15 - BUFET */

function openModal15() {
  document.getElementById('myModal15').style.display = "block";
}

function closeModal15() {
  document.getElementById('myModal15').style.display = "none";
}

var slideIndex15 = 1;
showSlides15(slideIndex15);

function plusSlides15(n) {
  showSlides15(slideIndex15 += n);
}

function currentSlide15(n) {
  showSlides15(slideIndex15 = n);
}

function showSlides15(n) {
  var i;
  var slides15 = document.getElementsByClassName("mySlides15");
  if (n > slides15.length) {slideIndex15 = 1}
  if (n < 1) {slideIndex15 = slides15.length}
  for (i = 0; i < slides15.length; i++) {
      slides15[i].style.display = "none";
  }
  slides15[slideIndex15-1].style.display = "block";
}



/* Imatge 16 - EXPOSITORS */

function openModal16() {
  document.getElementById('myModal16').style.display = "block";
}

function closeModal16() {
  document.getElementById('myModal16').style.display = "none";
}

var slideIndex16 = 1;
showSlides16(slideIndex16);

function plusSlides16(n) {
  showSlides16(slideIndex16 += n);
}

function currentSlide16(n) {
  showSlides16(slideIndex16 = n);
}

function showSlides16(n) {
  var i;
  var slides16 = document.getElementsByClassName("mySlides16");
  if (n > slides16.length) {slideIndex16 = 1}
  if (n < 1) {slideIndex16 = slides16.length}
  for (i = 0; i < slides16.length; i++) {
      slides16[i].style.display = "none";
  }
  slides16[slideIndex16-1].style.display = "block";
}
