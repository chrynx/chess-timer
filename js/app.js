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
  const timer = () => {
    if(playerTurn === 'p1'){
      millisecondsP1 = millisecondsP1 - 1;
      if(millisecondsP1 >= 0) $millisecondsP1.text(millisecondsP1);
      if(millisecondsP1 < 0){
        console.log('got inside milli if');
        millisecondsP1 = 59;
        $millisecondsP1.text(millisecondsP1);
        secondsP1 = secondsP1 - 1;
        if(secondsP1 >= 0) $secondsP1.text(secondsP1);
        if(secondsP1 < 0){
          secondsP1 = 59;
          $secondsP1.text(secondsP1);
          minutesP1 = minutesP1 - 1;
          if(minutesP1 > 0) $minutesP1.text(minutesP1);
          if(minutesP1 === 0){
            $minutesP1.text('LOSE');
            $secondsP1.text('LOSE');
            $millisecondsP1.text('LOSE');
          }
        }
      }
    }
    if(playerTurn === 'p2'){
      millisecondsP2 = millisecondsP2 - 1;
      if(millisecondsP2 >= 0) $millisecondsP2.text(millisecondsP2);
      if(millisecondsP2 < 0){
        console.log('got inside milli if');
        millisecondsP2 = 59;
        $millisecondsP2.text(millisecondsP2);
        secondsP2 = secondsP2 - 1;
        if(secondsP2 >= 0) $secondsP2.text(secondsP2);
        if(secondsP2 < 0){
          secondsP2 = 59;
          $secondsP2.text(secondsP2);
          minutesP2 = minutesP2 - 1;
          if(minutesP2 > 0) $minutesP2.text(minutesP2);
          if(minutesP2 === 0){
            $minutesP2.text('LOSE');
            $secondsP2.text('LOSE');
            $millisecondsP2.text('LOSE');
          }
        }
      }
    }
  };
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

  // =x=x=x=x=x=x=x=x=x=x=
  // =x END OF THE FILE x=
  // =x=x+x=x=x=x=x=x=x=x=
});
