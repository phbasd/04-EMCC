
	$(function() {
		$("#detail").click(function() {
			$(".item-detail")//.show("slow"); // ex) 300 : 300ms
				.removeClass("d-none");	//removeClass() : 클래스 선택자 제거 메소드 vs .addClass()
		})
		$("#close").click(function() {
			$(".item-detail")//.hide("fast");
				.addClass("d-none");	//addClass() : 클래스 선택자 추가 메소드 vs .
		})
	})
	// $ : 찾아라~
	// .click(function()(....)) : 클릭하면 처리할 코드
	// .show(), hide() : effect method
