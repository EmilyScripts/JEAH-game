
 var input = document.querySelector('#alphabet');
 var reset = document.querySelector('#reset');
 var result = document.querySelector('.result')


 var startTime = 0; 
 var endTime = 0; 
 var alphabet = "abcdefghijklmnopqrstuvwxyz";
 var score = null;
 



 input.addEventListener('keyup', function(e) {
  
    if (startTime == 0) {
    startTime = new Date();
  } else if (endTime == 0 && input.value == alphabet) {
      endTime = new Date();
      score = (endTime - startTime)/1000;
      result.textContent = "Your score is: " + score + " seconds";
  }
  var matcher = new RegExp(input.value)
//   console.log(matcher);
 console.log( matcher.test(alphabet));
 if (matcher.test(alphabet) === true) {
     input.classList.remove('mistake');
 } else {
     input.classList.add('mistake');
 }

 });

 reset.addEventListener('click', function(e){
     e.preventDefault();
     startTime = 0;
     endTime = 0; 
     score = null;
     input.value = null;
     input.focus();
     result.textContent = null;
 })