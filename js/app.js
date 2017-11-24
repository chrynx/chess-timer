$(()=>{
  //---------DOM variables-----------
  const $playerOne = $('.playerOne');
  const $playerTwo = $('.playerTwo');
  const $minutesP1 = $('.minutesP1');
  const $minutesP2 = $('.minutesP2');
  const $secondsP1 = $('.secondsP1');
  const $secondsP2 = $('.secondsP2');
  const $millisecondsP1 = $('.millisecondsP1');
  const $millisecondsP2 = $('.millisecondsP2');
  const $playerOnePlus = $('.playerOnePlus');
  const $playerTwoPlus = $('.playerTwoPlus');
  const $playerOneMinus = $('.playerOneMinus');
  const $playerTwoMinus = $('.playerTwoMinus');
  const $resetButton = $('.resetButton');
  //----------------------------------
  // ==========================================
  //--------------normal variables--------------
  let playerTurn = 'begin';
  let minutesP1 = parseInt($minutesP1.text());
  let minutesP2 = parseInt($minutesP2.text());
  let secondsP1 = parseInt($secondsP1.text());
  let secondsP2 = parseInt($secondsP2.text());
  let millisecondsP1 = parseInt($millisecondsP1.text());
  let millisecondsP2 = parseInt($millisecondsP2.text());
  //--------------------------------------------
  //=============================================
  //-------------functions-------------

  const timer = setInterval(() => {
    if(minutesP1 < 0 && secondsP1 === 0 && millisecondsP1 === 0){
      playerTurn = 'end';
      $('.breaker').text('');
      $minutesP1.text('');
      $minutesP2.text('');
      $secondsP2.text('WIN');
      $secondsP1.text('LOSE');
      $millisecondsP1.text('');
      $millisecondsP2.text('');
      clearInterval(timer);
    }
    if(minutesP2 < 0 && secondsP2 === 0 && millisecondsP2 === 0){
      playerTurn = 'end';
      $('.breaker').text('');
      $minutesP1.text('');
      $minutesP2.text('');
      $secondsP2.text('LOSE');
      $secondsP1.text('WIN');
      $millisecondsP1.text('');
      $millisecondsP2.text('');
      clearInterval(timer);
    }
    if(playerTurn === 'p1'){
      millisecondsP1 = millisecondsP1 - 1;
      if(millisecondsP1 >= 0) $millisecondsP1.text(millisecondsP1);
      if(minutesP1 === 0 && secondsP1 === 0 && millisecondsP1 === 0);
      if(millisecondsP1 < 0){
        millisecondsP1 = 59;
        $millisecondsP1.text(millisecondsP1);
        if(minutesP1 === 0 && secondsP1 === 0) $secondsP1.text(0);
        secondsP1 = secondsP1 - 1;
        if(secondsP1 >= 0) $secondsP1.text(secondsP1);
        if(secondsP1 < 0){
          secondsP1 = 59;
          $secondsP1.text(secondsP1);
          minutesP1 = minutesP1 - 1;
          if(minutesP1 > 0) $minutesP1.text(minutesP1);
          if(minutesP1 === 0) $minutesP1.text(0);
        }
      }
    }
    if(playerTurn === 'p2'){
      millisecondsP2 = millisecondsP2 - 1;
      if(millisecondsP2 >= 0) $millisecondsP2.text(millisecondsP2);
      if(minutesP2 === 0 && secondsP2 === 0 && millisecondsP2 === 0) $millisecondsP2.text(0);
      if(millisecondsP2 < 0){
        millisecondsP2 = 59;
        $millisecondsP2.text(millisecondsP2);
        secondsP2 = secondsP2 - 1;
        if(secondsP2 >= 0) $secondsP2.text(secondsP2);
        if(minutesP2 === 0 && secondsP2 === 0) $secondsP2.text(0);
        if(secondsP2 < 0){
          secondsP2 = 59;
          $secondsP2.text(secondsP2);
          minutesP2 = minutesP2 - 1;
          if(minutesP2 > 0) $minutesP2.text(minutesP2);
          if(minutesP2 === 0) $minutesP2.text(0);
        }
      }
    }
  }, 1/60);


  // ----------------------------------
  // =========================================
  //----------------events--------------
  $playerOne.on('click', () => {
    playerTurn = 'p1';
    timer();
  });
  $playerTwo.on('click', () => {
    playerTurn = 'p2';
    timer();
  });

  $playerOnePlus.on('click', () => {
    $minutesP1.text(minutesP1 + 1);
    minutesP1 = minutesP1 + 1;
  });
  $playerTwoPlus.on('click', () => {
    $minutesP2.text(minutesP2 + 1);
    minutesP2 += 1;
  });
  $playerOneMinus.on('click', () => {
    $minutesP1.text(minutesP1 - 1);
    minutesP1 -= 1;
  });
  $playerTwoMinus.on('click', () => {
    $minutesP2.text(minutesP2 - 1);
    minutesP2 -= 1;
  });
  $resetButton.on('click', () => {
    minutesP1 = 20;
    minutesP2 = 20;
    secondsP1 = 0;
    secondsP2 = 0;
    millisecondsP1 = 0;
    millisecondsP2 = 0;
    $('.breaker').text(':');
    $minutesP1.text(minutesP1);
    $secondsP1.text(secondsP1);
    $millisecondsP1.text(millisecondsP1);
    $minutesP2.text(minutesP2);
    $secondsP2.text(secondsP2);
    $millisecondsP2.text(millisecondsP2);
    playerTurn = 'begin';
  });
  // =x=x=x=x=x=x=x=x=x=x=
  // =x END OF THE FILE x=
  // =x=x+x=x=x=x=x=x=x=x=
});
