var IAn = true;
function iapt() {
	if (IAn = false) {
		document.getElementById("WEA").innerHTML = "请勿重复提交。";
		return false;
	}
	IAn = false;
	var IAs = document.getElementById("WEA");
	IAs.innerHTML = "";
	IAs.innerHTML += "....请等待....<br>";
	var mail = document.getElementById("mail");
	var QQ = document.getElementById("QQ");
	var xhr = new XMLHttpRequest();
	xhr.open("post" ,"pp.php" ,true);
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	xhr.onreadystatechange = function(){
		if (this.readyState==4) {
			IAs.innerHTML = this.responseText;
			return false;
		}
	}
	if (mail.value == "" || QQ.value == "") {
		IAs.innerHTML = "内容为空";
		IAn = true;
		return false;
	}
	xhr.send('mail=' + Base64.encode(mail.value) + '&QQ=' + Base64.encode(QQ.value));
	IAn = true;
	return false;
}