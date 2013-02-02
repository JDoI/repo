function doClickLabel1(e) {  
    alert($.label1.text);
}

function doClickButton1(e) {  
    alert('クリックされました');
}

function doClickSwitch1(e) {  
    alert('変更されました');
}

function doOptionDialog1(e) { 
	var dialogOptions = {
		title:'なにでシェアしますか？',
		//aa:0 bb:1 キャンセル:2　と番号がふられる
		options:['aa','bb','キャンセル'],
		//キャンセルは何番か
		cancel:2,
		//削除カラー（赤）にするオプションを指定
		destructive:0
	};
	var dialog = Titanium.UI.createOptionDialog(dialogOptions);
    dialog.show();
}

$.index.open();
