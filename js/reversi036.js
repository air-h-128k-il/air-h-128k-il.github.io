/*まずまず
*/
var board = new Array();
var n_board = new Array();
var e1_board = new Array();
var e2_board = new Array();
var r_orient = new Array();
var player_move = new Array();
var com_move = new Array();
var sz=41;
var gap=2;
var method;
var canvas;
var ctx;
var text;
var turn;
var passpassflag;
var whitestone;
var blackstone;
var totalstone;
var movectr;

window.addEventListener('load',init);


function reversi(){

	
	if(totalstone==64 || passpassflag ==2){
//		text.value="ゲーム終了";
		fin();
	}else{
		if ((method==0 && turn==0) || (method == 1) && (turn==1)){
			var str = "あなたの手番です"
			if(passpassflag==1){
				str= "パスします\n" + str;
			}
			text.value=str;
			player();
		}else{
			computer();
		}	
	
	}

}


function init(){

	for(var i = 0;i<10;i++){
		board[i]=new Array();n_board[i]=new Array();
		for(var j=0;j<10;j++){
		board[i][j]=3;n_board[i][j]=0;
		}
	}

	for(var i = 1;i<9;i++){
		for(var j=1;j<9;j++){
		board[i][j]=0;
		}
	}

	board[5][4]=board[4][5]=1;//黒
	board[4][4]=board[5][5]=2;//白

/*
	e_board[0] = new Array(100,-40, 20,  5,  5, 20,-40,100);
	e_board[1] = new Array(-40,-80, -1, -1, -1, -1,-80,-40);
	e_board[2] = new Array( 20, -1,  5,  1,  1,  5, -1, 20);
	e_board[3] = new Array(  5, -1,  1,  0,  0,  1, -1,  5);
	e_board[4] = new Array(  5, -1,  1,  0,  0,  1, -1,  5);
	e_board[5] = new Array( 20, -1,  5,  1,  1,  5, -1, 20);
	e_board[6] = new Array(-40,-80, -1, -1, -1,  5,-80,-40);
	e_board[7] = new Array(100,-40, 20,  5,  5, 20,-40,100);

*/

	e2_board[0] = new Array( 40,-10,  4,  2,  2,  4,-10, 40);
	e2_board[1] = new Array(-10,-20,  1,  1,  1,  1,-20,-10);
	e2_board[2] = new Array(  4,  1,  1,  1,  1,  1,  1,  4);
	e2_board[3] = new Array(  2,  1,  1,  1,  1,  1,  1,  2);
	e2_board[4] = new Array(  2,  1,  1,  1,  1,  1,  1,  2);
	e2_board[5] = new Array(  4,  1,  1,  1,  1,  1,  1,  4);
	e2_board[6] = new Array(-10,-20,  1,  1,  1,  1,-20,-10);
	e2_board[7] = new Array( 40,-10,  4,  2,  2,  4,-10, 40);


	e1_board[0] = new Array( 30,-15,  0, -2, -2,  0,-15, 30);
	e1_board[1] = new Array(-15,-20, -3, -3, -3, -3,-20,-15);
	e1_board[2] = new Array(  0, -3,  0, -1, -1,  0, -3,  0);
	e1_board[3] = new Array( -2, -2, -1,  0,  0, -1, -3, -2);
	e1_board[4] = new Array( -2, -2, -1,  0,  0, -1, -3, -2);
	e1_board[5] = new Array(  0, -3,  0, -1, -1,  0, -3,  0);
	e1_board[6] = new Array(-15,-20, -3, -3, -3, -3,-20,-15);
	e1_board[7] = new Array( 30,-15,  0, -1, -1,  0,-15, 30);



//	board[4][3]=2;
	
	for(var i=0;i<8;i++){
		r_orient[i]=0;
	}

	canvas = document.getElementById('canvas_board');
 	ctx = canvas.getContext('2d');
 	
 	draw();
 	
 	method=check_method();//0 playerが先手, 1 com が先手
 	
 	turn = 0;// 0 黒 1 白
	passpassflag=0;movectr=0;

	text=document.getElementById('text');
	
	reversi();
 	
}

function fin(){

	whitestone=0;blackstone=0;
	for(var i = 1;i<9;i++){
		for(var j=0;j<9;j++){
		if(board[i][j]==1){
			++blackstone;
		}else if(board[i][j]==2){
			++whitestone;
		}
		}
	}

	var str = "黒 : 白 ＝ " + blackstone + ":" + whitestone + " \n";
	if (blackstone == whitestone){
		text.value = str + "引き分けです．";
	}
	if ((blackstone > whitestone && method == 0) || (blackstone < whitestone && method == 1)){
		text.value = str + "あなたの勝ちです";
	}else{
		text.value = str + "COM の勝ちです";
	}

	canvas.removeEventListener("click", mouseClick); 
}


function mouseClick(event){

		text.value="";
/*
		var x_base  = canvas.offsetLeft;   // キャンバスの左上のｘ座標
		var y_base  = canvas.offsetTop;   // キャンバスの左上のｙ座標
		var x       = event.pageX - x_base;    // キャンバス内のクリックされた位置（ｘ座標）
		var y       = event.pageY - y_base;    // キャンバス内のクリックされた位置（ｙ座標）
						// クリックされたマス目を特定
						
		alert("canvas_x = "+ canvas.offsetLeft + " canvas_y = " + canvas.offsetTop);
		alert("click_x = "+ event.pageX + " click_y = " + event.pageY);
*/
		var x = event.clientX ;
		var y = event.clientY ;
		var rect = event.target.getBoundingClientRect() ;
        
		x -= rect.left ;
		y -= rect.top ;


		for (var i = 0; i < 8; i++) {
			if (x >= gap+i*(gap+sz) && x <= (i+1)*(gap+sz)) {
				break;
			}
		}
		for (var j = 0; j < 8; j++) {
			if (y >= gap+j*(gap+sz) && y <= (j+1)*(gap+sz)) {
				break;
			}
		}

//		alert("x="+ (i+1) + "," + "y="+ (j+1));//For debug




		if (r_check(i+1,j+1) == 0){
		
			text.value = "そこには打てません";
						
		}else{
			passpassflag=0;
			movectr++;
			set(i+1,j+1);
			draw();
			turn = 1-turn;
			reversi();
		}
		
		

}

function r_check(x,y){

	x0=x;
	y0=y;
	
	var flag=0;
	var counter=0;

	r_orient[0]=0;
	if(board[x][y] == 0 && board[x][--y] == 2-turn){
		while(board[x][--y] == 2-turn){++counter;};
		if(board[x][y] == turn+1){
			flag= 1;r_orient[0] = ++counter;}			
	}
	else{r_orient[0]=0;
	}
	x=x0;y=y0;counter=0;r_orient[1]=0;
	if(board[x][y] == 0 && board[++x][--y] == 2-turn){
		while(board[++x][--y] == 2-turn){++counter};
		if(board[x][y] == turn+1){
			flag= 1;r_orient[1] = ++counter;}
	}
	else{r_orient[1]=0;
	}
	x=x0;y=y0;counter=0;r_orient[2]=0;
	if(board[x][y] == 0 && board[++x][y] == 2-turn){
		while(board[++x][y] == 2-turn){++counter};
		if(board[x][y] == turn+1){
			flag= 1;r_orient[2] = ++counter;}
	}
	else{r_orient[2]=0;
	}
	x=x0;y=y0;counter=0;r_orient[3]=0;
	if(board[x][y] == 0 && board[++x][++y] == 2-turn){
		while(board[++x][++y] == 2-turn){++counter};
		if(board[x][y] == turn+1){
			flag= 1;r_orient[3] = ++counter;}
	}
	else{r_orient[3]=0;
	}
	x=x0;y=y0;counter=0;r_orient[4]=0;
	if(board[x][y] == 0 && board[x][++y] == 2-turn){
		while(board[x][++y] == 2-turn){++counter};
		if(board[x][y] == turn+1){
			flag= 1;r_orient[4] = ++counter;}
	}
	else{r_orient[4]=0;
	}
	x=x0;y=y0;counter=0;r_orient[5]=0;
	if(board[x][y] == 0 && board[--x][++y] == 2-turn){
		while(board[--x][++y] == 2-turn){++counter};
		if(board[x][y] == turn+1){
			flag= 1;r_orient[5] = ++counter;}
	}
	else{r_orient[5]=0;
	}
	x=x0;y=y0;counter=0;r_orient[6]=0;
	if(board[x][y] == 0 && board[--x][y] == 2-turn){
		while(board[--x][y] == 2-turn){++counter};
		if(board[x][y] == turn+1){
			flag= 1;r_orient[6] = ++counter;}
	}
	else{r_orient[6]=0;
	}
	x=x0;y=y0;counter=0;r_orient[7]=0;
	if(board[x][y] == 0 && board[--x][--y] == 2-turn){
		while(board[--x][--y] == 2-turn){++counter};
		if(board[x][y] == turn+1){
			flag= 1;r_orient[7] = ++counter;}
	}
	else{r_orient[7]=0;
	}	
	x=x0;y=y0;
	
	if (flag==1)
		return 1;
	else
		return 0;

}


function set(x, y){

		x0=x;
		y0=y;

		board[x][y]=turn+1;

		for(i=0;i < r_orient[0];i++){
			board[x][--y]=turn+1;
//			console.log(y);
		}
		x=x0;y=y0;
		for(i=0;i < r_orient[1];i++){
			board[++x][--y]=turn+1;
		}
		x=x0;y=y0;
		for(i=0;i < r_orient[2];i++){
			board[++x][y]=turn+1;
		}
		x=x0;y=y0;
		for(i=0;i < r_orient[3];i++){
			board[++x][++y]=turn+1;
		}
		x=x0;y=y0;
		for(i=0;i < r_orient[4];i++){
			board[x][++y]=turn+1;
		}
		x=x0;y=y0;
		for(i=0;i < r_orient[5];i++){
			board[--x][++y]=turn+1;
		}
		x=x0;y=y0;
		for(i=0;i < r_orient[6];i++){
			board[--x][y]=turn+1;
		}
		x=x0;y=y0;
		for(i=0;i < r_orient[7];i++){
			board[--x][--y]=turn+1;
		}
		x=x0;y=y0;

//		draw();

/*		
		if(method==1 && turn==0 || method == 0 && turn==1){
			ctx.beginPath();
			ctx.fillStyle = "rgb(255, 0, 0)";
			ctx.arc(gap + (x0-1) * (sz + gap)+ Math.floor(sz/2), gap + (y0-1) * (sz + gap)+ Math.floor(sz/2), 2, 0, 2*Math.PI);//floor 小数点以下切り捨て
			ctx.fill();
		}
*/
}

function can_move(){

	var pnum,max_p;
	pnum=0;
	max_p=0;
	var k;
	
	for(var i = 1;i<9;i++){
		for(var j=1;j<9;j++){
			if(r_check(i,j)==1){
				for(k=0;k<8;k++){
					pnum = pnum + r_orient[k];
				}
			}
			if( pnum > max_p){
				max_p=pnum;
			}			
		}
	}
	
	return max_p; 
}

function player(){
	
	if(can_move()==0){
		turn=1-turn;
		++passpassflag;++movectr;
		reversi();
	}
	
	canvas.addEventListener("click", mouseClick);

}

function computer(){

	var pnum,max_p;
		pnum=0;max_p=0;
	var evnum,max_e;
		evnum=0;max_e=-1000;	
	var k;
	
	for(var i = 1;i<9;i++){
		for(var j=1;j<9;j++){
			if(r_check(i,j)==1){
				for(k=0;k<8;k++){
					pnum = pnum + r_orient[k];
				}
				if( pnum > max_p){
					max_p=pnum;
//					com_move[0]=i;com_move[1]=j;
				}
				pnum=0;	
			}
		}
	}

	if(max_p>0){	
		for(var i = 1;i<9;i++){
			for(var j=1;j<9;j++){
				if(r_check(i,j)==1){
					evnum=eval(i,j);
					if( evnum > max_e){
						max_e=evnum;
						com_move[0]=i;com_move[1]=j;
					}
				}
			}
		}
	}

//opening
	if(movectr==1 && board[4][4]==2){
		switch(Math.floor(Math.random()*3)){
			case 0:
				com_move[0]=4;com_move[1]=6;
				break;
			case 1:
				com_move[0]=6;com_move[1]=6;
				break;
			case 2:
				com_move[0]=6;com_move[1]=4;
				break;
		}
	}

	if(movectr==1 && board[5][5]==2){
		switch(Math.floor(Math.random()*3)){
			case 0:
				com_move[0]=3;com_move[1]=3;
				break;
			case 1:
				com_move[0]=3;com_move[1]=5;
				break;
			case 2:
				com_move[0]=5;com_move[1]=3;
				break;
		}
	}

	if(max_p > 0){
		r_check(com_move[0],com_move[1]);
		set(com_move[0],com_move[1]);
		draw();
		passpassflag=0;++movectr;
		turn=1-turn;
	}else{
		com_move[0]=0;com_move[1]=0;
		++passpassflag;++movectr;
		turn=1-turn;
		text.value="パスします"
	}
	
	reversi();
}

function eval(x, y){

	var sum;sum=0;
	var evalnum;evalnum=0;
	var ctr1;ctr1=0;
	var ctr2;ctr2=0;
	var ctr3;ctr3=0;
	
	for(var i = 1;i<9;i++){
		for(var j=1;j<9;j++){
			n_board[i][j]=board[i][j];
		}
	}

	//一手読みしてるわけですね
	r_check(x,y);set(x,y);

	if(movectr<17){
		for(var i = 1;i<9;i++){
			for(var j=1;j<9;j++){
				if(board[i][j]!=0){
					switch(board[i][j]){
						case 2-method:
							++ctr1;//com の石数
							sum += e1_board[i-1][j-1];
							break;
						case 1+method:
							sum -= e1_board[i-1][j-1];
							++ctr3;//player の石数
							break;
					}
				}
			}
		}
	}else{
		for(var i = 1;i<9;i++){
			for(var j=1;j<9;j++){
				if(board[i][j]!=0){
					switch(board[i][j]){
						case 2-method:
							++ctr1;//com の石数
							sum += e2_board[i-1][j-1];
							break;
						case 1+method:
							sum -= e2_board[i-1][j-1];
							++ctr3;
							break;
					}
				}
			}
		}		
	}

	turn=1-turn;
	for(var i = 1;i<9;i++){
		for(var j=1;j<9;j++){
			if(r_check(i,j)==1){ //着手可能かどうか調べる
				++ctr2;
			}
		}
	}
	turn=1-turn;

	
	//序盤、中盤、終盤の評価関数を変える
	//着手可能手数も考えたいところだが
	
	if(movectr < 17){
		evalnum = (10*sum-5*ctr1-5*ctr2)/10;
	}else if(movectr>=17 && movectr < 45){
		evalnum = (10*sum - 2*ctr1-8*ctr2)/10; 
	}else{
		evalnum= (5*sum + 4*(ctr1-ctr3) - ctr2)/10;
	}

	for(var i = 1;i<9;i++){
		for(var j=1;j<9;j++){
			board[i][j]=n_board[i][j];
		}
	}


	return evalnum;

}


function check_method(){
 	radiobutton=document.getElementById("radio_black");
 	if(radiobutton.checked==true)
 		return 0;//method=0;
 	else
 		return 1;//method=1;
}

function swap_method(){
		method=1-method;
}

function draw(){
		ctx.clearRect(0, 0,canvas.width, canvas.height);
						// 描画
		ctx.beginPath();
		ctx.fillStyle = "rgb(10, 10, 10)";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.fill();
	
		for (var i = 1; i < 9; i++) {
			for (var j = 1; j < 9; j++) {
				var x = gap + (i-1) * (sz + gap);
				var y = gap + (j-1) * (sz + gap);
				ctx.beginPath();
				ctx.fillStyle = "rgb(30, 100, 30)";
				ctx.fillRect(x, y, sz, sz);
				ctx.fill();
				if (board[i][j] != 0) {
					x += Math.floor(sz / 2);
					y += Math.floor(sz / 2);
					ctx.beginPath();
					if (board[i][j] == 1 ) // == を=とすると代入になって常に真。気をつけよう。
						ctx.fillStyle = "rgb(0, 0, 0)";
					else
						ctx.fillStyle = "rgb(255, 255, 255)";
					ctx.arc(x, y, Math.floor(sz/2)-4, 0, 2*Math.PI);//floor 小数点以下切り捨て
					ctx.fill();
				}
			}
		}

}
