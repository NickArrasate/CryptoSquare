// Business Logic



var encrypt = (function(phrase){

  splitPhrase = phrase.split('');

  var rowArray = removePunc(phrase);
  var rowLength = rowArray.length;
  var roundTop = Math.ceil(Math.sqrt(rowLength));
  var crypto = ""

  console.log(crypto);

  for(var i = 0; i < roundTop; i++){
    for(var j = i; j < rowLength; j += roundTop){
      crypto += rowArray[j];
    }
  }

  return insertSpaces(5, crypto);
});

function removePunc(phrase){
  for (i=0; i <= phrase.length;i++){
    var removed = phrase.replace(/[^a-zA-Z0-9]+/g, "");
    return removed;
  };
};

function insertSpaces(n, phrase){
  var finalPhrase = "";
  for (var i = 0; i < phrase.length; i++){
    finalPhrase += phrase[i];
    if((i+1) % n == 0){
      finalPhrase += " ";
    }
  }
  return finalPhrase;
}

// if (rowLength <= 100){
//   var topRow = rowArray.slice(0,roundTop)
//   var secondRow = rowArray.slice(roundTop,(roundTop * 2))
//   var thirdRow = rowArray.slice((roundTop * 2),(roundTop * 3))
//   var fourthRow = rowArray.slice((roundTop * 3),(roundTop * 4))
//   var fifthRow = rowArray.slice((roundTop * 4),(roundTop * 5))
//   var topRow = rowArray.slice((roundTop * 5),(roundTop * 6))
//   var secondRow = rowArray.slice((roundTop * 6),(roundTop * 7))
//   var thirdRow = rowArray.slice((roundTop * 7),(roundTop * 8))
//   var fourthRow = rowArray.slice((roundTop * 8),(roundTop * 9))
//   var fifthRow = rowArray.slice((roundTop * 9),(roundTop * 10))

// console.log(topRow);
// console.log(secondRow);
// console.log(thirdRow);
// console.log(fourthRow);
// console.log(fifthRow);
// // }






// interface logic
$(document).ready(function(){
  $('#submit').submit(function(event){
    event.preventDefault();

    var phrase = $('#field').val();

    var result = encrypt(phrase);

    $('#display').text(result);
  });
});
