$(function(){
	$(".nav li").each(function(){
		var _this = $(this);
		_this.click = function (){
			_this.addClass('active').siblings().removeClass('active')
		}
	});
	var height = $(window).height();
	var bodyHeight = $("body").height();
	var headerHeight = $(".header").height();
	var footerHeight = $(".footer").height();
	if(bodyHeight < height){
		$(".cooperation-con").height(height - headerHeight - footerHeight)
	}
	
	//file
	$(".coo-btn").click(function(){
		if($("#people").val().length <= 0){
			alert('请输入用户名');
			return
		}
		if($("#phone").val().length <= 0){
			alert("请输入电话")
			return
		}
		if($("#company").val().length <= 0){
			alert("请输入公司名称")
			return
		}
		var content = {
			"user" : $("#people").val(),
			"phone" : $("#phone").val(),
			"company" : $("#company").val()
		}
	    var blob = new Blob([JSON.stringify(content)], {type: "text/plain;charset=utf-8"});
	    saveAs(blob, "file.txt");
	})
})
