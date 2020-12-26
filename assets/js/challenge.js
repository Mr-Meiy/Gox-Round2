var ballKicked=0;

/*function saveGoal() {
    var goalLeft,goalTop;
    var ballTop,ballLeft;
    goalLeft=$("#goalKeeper1").position().left;
    goalTop=$("#goalKeeper1").position().top;

    ballLeft=$('#footBall').position().left;
    ballTop=$('#footBall').position().top;

    $("#goalKeeper1").css('top', ballTop-200);
    $("#goalKeeper1").css('left', ballLeft);
    $("#goalKeeper1").css('position', 'absolute');
    clearInterval(kickAction);
    
    //document.getElementById("#goalKeeper1").style.left=100;
    //document.getElementById("#goalKeeper1").style.top=100;
}
*/
function kick(ball,x,y){
    
    kickAction = setInterval(function () {   

        if (y <310){
            clearInterval(kickAction);
        }
        
        y=y-10;
        ballSize =y/7;       
        ball.css('top', y );   
        ball.css('height', ballSize );  
     }, 60);
}

function hanldeMouse(){

    footBall = $('#footBall');

    $(document).mousemove(function(event){
        footBall.css('left', event.pageX );
        footBall.css('top', event.pageY );
      });

    footBall.click(function() {
        kick(footBall,event.pageX,event.pageY);
        ballKicked=1;
        /*var block=setTimeout(function() {
            $("#goalKeeper1").css(position: absolute,top: ballTop,left: ballLeft);
        },500);*/
        if(ballKicked==1) {
        setTimeout(function(){
            var goalLeft,goalTop;
            var ballTop,ballLeft;
            goalLeft=$("#goalKeeper1").position().left;
            goalTop=$("#goalKeeper1").position().top;

            ballLeft=$('#footBall').position().left;
            ballTop=$('#footBall').position().top;

            $("#goalKeeper1").css('top', ballTop-200);
            $("#goalKeeper1").css('left', ballLeft);
            $("#goalKeeper1").css('position', 'absolute');
            clearInterval(kickAction);
        },1000);
        ballKicked=0;
        }
    });
    
    
}

$(window).on('load', function() {
    hanldeMouse();
})


