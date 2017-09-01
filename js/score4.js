//
// 棋譜共通処理
//

var ie6 = (navigator.userAgent.indexOf('MSIE 6.0') >= 0);
var ie7 = (navigator.userAgent.indexOf('MSIE 7.0') >= 0);
var ie8 = (navigator.userAgent.indexOf('MSIE 8.0') >= 0);

var nsArray = new Array();
var nsIndex = -1;// -1 っすか。
var nsInter;
var nsDraw;
var nsSoundEnabled = false;
var nsSoundRequest = false;
var nsSoundName = null;
var nsAudio = null;
var nsAudioIndex = 0;
var nsType;
var nsSpeedCounter = 0;
var nsSpeedCoeff   = 2;
var nsInitialField = "1b191716101617191b0014000000000012001d1d1d1d1d1d1d1d1d"
					 + "0000000000000000000000000000000000000000000000000000000"
					 + "e0e0e0e0e0e0e0e0e0003000000000005000c0a08070207080a0c00";

// 棋譜読み込み



function Start(name, type){
	// ブラウザチェック
	//if ( ie6 ){
	//	alert('Internet Explorer 6 以下には対応していません');
	//	return;
	//}

	// 棋譜
//	var d = name.match(/^[0-9]{8}$/);
//	var t = type.match(/^[is]$/);
//	var q = './score.cgi';
//	if ( (d != null) && (t != null) ){
//		q += '?d=' + d + '&t=' + t;
//	}
//	var q = '..data/';
	var q = name;
//	alert(q);
	var s = httpRead(q);
//	alert(s);
	nsArray = nsMakeScore(s);
	nsType  = 's';	

	if ( nsArray.Title != null ){
		nsSetInfo('sctitle', nsArray.Title);
		//nsSetInfo('scstage', nsArray.Stage);
		var list = nsArray.Stage.split(' ');
		nsSetInfo('scstage', list[0]);
		if ( list.length >= 2 ){
			nsSetInfo('scstage2', list[1]);
		}
		if ( nsArray.Notify != null ){
			nsSetInfo('scnotify', nsArray.Notify);
		}
		if ( nsArray.Notify != null ){
			nsSetInfo('scnotify2', nsArray.Notify2);
		}
	}
	else{
		nsSetInfo('sctitle', 'の棋譜はありません');
		nsSetInfo('scstage', '');
	}
	nsSetInfo('scyear',  '20' + nsArray.OnAir);
	//nsSetInfo('scmonth', nsArray.OnAir.substr(4, 2));
	//nsSetInfo('scday',   nsArray.OnAir.substr(6, 2));
	var p1 = nsSplitName(nsArray.Player1);
	var p2 = nsSplitName(nsArray.Player2);
	nsSetInfo('p1name',  '▲' + p1.familyname + p1.firstname + ' ' + p1.title);
	//nsSetInfo('p1title', p1.title);
	//nsSetInfo('p1title2', p1.title2);
	nsSetInfo('p2name', '△'+ p2.familyname + p2.firstname + ' ' + p2.title);
	//nsSetInfo('p2title', p2.title);
	//nsSetInfo('p2title2', p2.title2);
	
}


// 打音セット
function nsSetSound(name){
	if ( Audio ){
		nsAudio = new Array();
		for ( var i = 0; i < 8; i++ ){
			var audio = new Audio(name);
			audio.preload  = 'auto';
			audio.autoplay = false;
			audio.load();
			nsAudio.push(audio);
		}
	}
	else{
		nsSoundName = name;
	}
}

function nsSoundToggle(elem){
	nsSoundEnabled = elem.checked;
}

// 情報をセット
function nsSetInfo(id, value){
	var e = document.getElementById(id);
	if ( e != null ){
		e.innerText = value;
		e.textContent = value;
	}
}

// スピードセット
function nsSetSpeed(speed){
	nsSpeedCoeff = speed;
}

// 棋譜を配列に整形
function nsMakeScore(str){
	var res = new Array();
	res["buf"] = new Array();

	var list = str.split('\n');
	var idx = -1;
	for ( var i = 1; i < list.length; i++ ){//1行目の NPS100 は捨てる
		var s = list[i];
		if ( s.length > 0 ){
			var pair = s.split('=');
			if ( pair.length == 2 ){
				var n = pair[0];//n name v value でしょうか
				var v = pair[1].replace(";", "");
				v = v.replace("\r", "");
				if ( n.match(/^[phc]/) ){//局面情報やコメントはこちらでしょうか
					if ( n == 'p' ){//局面の最初の行は p 。
						++idx;//最初の行で -1+1=0 から格納
						res.buf[idx] = new Array();
						res.buf[idx][n] = v;
					}
					else{
						res.buf[idx][n] = v;
					}
				}
				else{
					res[n] = v;//OnAir,Title などはこっちか
				}
			}
		}
	}
	return res;
}

// index 番目の手番へ
function nsSetIndex(draw, index){
	nsDraw = draw;
	if (index != nsIndex){
		nsIndex = index;

		// 描画
		if ( nsIndex >= 0 ){
			if ( nsType == 'i' ){
				// 囲碁の場合はそのまま
				draw(nsArray.buf[nsIndex]);
				nsSound();
			}
			else{
				// 将棋の場合は遅延描画
				draw((nsIndex > 0)? nsArray.buf[nsIndex - 1]: null);
				nsAnalyzeMarkPos(nsArray.buf[nsIndex].p,
								 (nsIndex > 1)? nsArray.buf[nsIndex- 1].p: nsInitialField);
				setTimeout("nsDelayDraw()", 500);
			}
		}
		else{
			draw(null);
			cmMoveMark(0, 0);
		}

		// ステップ数表示
		var s = '';
		if ( (nsType == 'i') && (nsIndex >= nsArray.buf.length - 1) ){
			s = nsIgoResult();
		}
		else if ( nsIndex >= 0 ){
			s = (nsIndex + 1) + '手目';
		}
		nsSetInfo('move', s);//修正
	}
}



// 結果を文字列に変換
function nsShogiResult(){
	var res = (nsIndex + 1) + '手　';
	switch ( nsArray.Result ){
	case '1':
		var p1 = nsSplitName(nsArray.Player1);
		res += '先手　' + p1.familyname + p1.firstname + p1.title +  'の勝ち';
		break;
	case '2':
		var p2 = nsSplitName(nsArray.Player2);
		res += '後手　' + p2.familyname + p2.firstname + p2.title +  'の勝ち';
		break;
	default:
		res = '持将棋';
	}

	return res;
}

// 姓名・タイトルを取得
function nsSplitName(text){
	var res = new Array();
	var p = text.split(' ');

	res.familyname = p[0];
	res.firstname  = '';
	res.title      = '';
	res.title2     = '';
	switch ( p.length ){
	case 2:
		res.title = p[1];
		break;
	case 3:
		res.firstname = p[1];
		res.title = p[2];
		break;
	case 4:
		res.firstname = p[1];
		res.title = p[2];
		res.title2 = p[3];
		break;
	}

	return res;
}

// 再生
function nsPlay(draw){
	var src = '';
	if ( nsInter == null ){
		nsDraw = draw;
		// 最初は即座に描画
		nsInterval();
		// タイマーセット
		nsInter = setInterval("nsInterval()", 1200);
		src = "https://air-h-128k-il.github.io/img/move_item05a.png";
	}
	else{
		clearInterval(nsInter);
		nsInter = null;
		src = "https://air-h-128k-il.github.io/img/move_item05.png";
	}
	var e = document.getElementById('playbutton');
	e.src = src;
}

// 自動再生処理
function nsInterval(){
	if ( ++nsSpeedCounter >= nsSpeedCoeff ){
		nsStep(nsDraw, 1);
		if ( nsIndex >= nsArray.buf.length - 1 ){
			clearInterval(nsInter);
			var e = document.getElementById('playbutton');
			e.src = "https://air-h-128k-il.github.io/img/move_item05.png";
		}
		nsSpeedCounter = 0;
	}
}

// 一時停止
function nsPause(){
	clearInterval(nsInter);
}

// n手進める
function nsStep(draw, n){
	if ( nsSoundEnabled ){
		nsSoundRequest = true;
	}
	nsSetIndex(draw, Math.min(nsIndex + n, nsArray.buf.length - 1));
}

// n手戻す
function nsBack(draw, n){
	nsSetIndex(draw, Math.max(nsIndex - n, -1));
}

// 先頭へ
function nsHead(draw){
	nsSetIndex(draw, -1);
}

// 末尾へ
function nsTail(draw){
	nsSetIndex(draw, nsArray.buf.length - 1);
}

// マーカー位置計算
function nsAnalyzeMarkPos(curr, prev){
	var x0 = 0;
	var y0 = 0;
	if ( (curr != null) && (prev != null) ){
		var x1 = parseInt(curr.substr(81 * 2,     1));
		var y1 = parseInt(curr.substr(81 * 2 + 1, 1));
		var pos1 = (x1 - 1) + (y1 - 1) * 9;
		for ( var i = 0; i < 81; i++ ){
			if ( (curr.substr(i * 2, 2) != prev.substr(i * 2, 2)) && (i != pos1) ){
				x0 = (i % 9) + 1;
				y0 = Math.floor(i / 9) + 1;
				break;
			}
		}
	}
	cmMoveMark(x0, y0);
}

// マーカー移動描画
function nsDelayDraw(){
	// マーカー移動
	if ( nsIndex >= 0 ){
		nsDraw(nsArray.buf[nsIndex]);
		nsSound();
	}

	// 将棋の最終結果遅延表示
	if ( (nsType != 'i') && (nsIndex >= nsArray.buf.length - 1) ){
		// 最終手の移動完了と同時に表示
		nsSetInfo('move', nsShogiResult());
		// 最終手の移動完了よりさらに遅らせる場合
		//var s = "nsSetInfo('bante', '" + nsShogiResult() + "')";
		//setTimeout(s, 500);
	}
}

// 音
function nsSound(){
	if ( nsSoundRequest ){
		if ( nsAudio != null ){
			nsAudio[nsAudioIndex].play();
			nsAudioIndex = (nsAudioIndex + 1) % nsAudio.length;
		}
		else if ( nsSoundName != null ){
			var e = document.getElementById('sound2');
			if ( e != null ){
				e.innerHTML = '<embed id="sound2embed" src="'
							  + nsSoundName
							  + '" autostart="true" hidden="true">';
			}
		}
		nsSoundRequest = false;
	}
}

