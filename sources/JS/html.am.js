var dat ='';
window.onload = function(){
	divevent();
	console.log('Idoll Page Done');
}
function divevent() {
	//var adivs = document.getElementsByClassName('am-con-01');
	var adivs = document.getElementsByName("Cards");
	//console.log(adivs);
	for (var i = adivs.length - 1; i >= 0; i--) {
		//console.log(adivs[i]);
		//container.removeChild(this);
		//this.parentNode.removeChild(this);
		//adivs[i].ondblclick = function() {
			//console.log('111');
			//this.parentNode.removeChild(this);
		//}
		adivs[i].addEventListener("dblclick",function() {
			//console.log('declicks');
			this.parentNode.removeChild(this);
		});
	}
}
function dediv(bdivx) {
	//var did = divx.id;
	//console.log(':'+bdivx);
	//var divx = document.getElementById(did);  
	//document.getElementById(did).innerHTML ='';
	bdivx.parentNode.removeChild(bdivx);
}
function PostCard(cn,sdivn){
	var cnn = true;
	var sdiv = document.getElementById(sdivn);
	var dt = new Array('',sdiv.innerHTML);
	if (cnn = false) {
		//sdiv.innerHTML = '<div class="am-con-01">当前存在任务</div>';
		dt[0]='<div class="am-con-01">当前存在任务</div>';
		let ht=dt.join('');
		sdiv.innerHTML = ht;
		//divevent();
		return false;
	}
	cnn = false;
	sdiv.innerHTML = "";
	//sdiv.innerHTML += '<div class="am-con-01">....正在获取数据....</div>';
	//var to = cn + '.php';
	var xhr = new XMLHttpRequest();
	xhr.open('post' , cn ,true);
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	xhr.onreadystatechange = function(){
		if (this.readyState==4) {
			//sdiv.innerHTML = this.responseText;
			let dat = this.responseText;
			
			if ( isjson(dat) ){  
				let datjson = JSON . parse ( dat );
				console.log('json');
				let head = document.getElementsByTagName('head')[0];
				//head.innerHTML += datjson.js;
				var obj = document.createElement('script');
				obj.type = 'text/javascript';
				obj.src = datjson.js;
				head.appendChild(obj);
				dat = datjson.html;
			}
			//console.log(dat);
			dt[0] = '<div name="Cards" class="am-con" ondblclick="dediv(this)">'+dat+'</div>';
			let ht=dt.join('');
			sdiv.innerHTML = ht;
			return false;
		}
	}
	xhr.send('dat=' + Base64.encode(dat));
	cnn = true;
	//divevent();
	return false;
}
function isjson ( str ) { 
	if ( typeof str == 'string' ) {   
		try { 
			var obj = JSON . parse ( str );
			if ( typeof obj == 'object' && obj ){  
				return true ; 
			} else {
				return false ; 
			}
		} catch ( e ) {  
			return false ; 
		}
	}
}