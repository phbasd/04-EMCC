
	$(function() {
		$("#detail").click(function() {
			$(".item-detail")//.show("slow"); // ex) 300 : 300ms
				.removeClass("d-none");	//removeClass() : 클래스 선택자 제거 메소드 vs .addClass()
		})
		$("#close").click(function() {
			$(".item-detail")//.hide("fast");
				.addClass("d-none");	//addClass() : 클래스 선택자 추가 메소드 vs .
		})
		
		
		$(function(){
			$(".small-img").click(function() {
				$(".")
			})
		})
		
		
		
		const closeBT = $("#close");
        const detailBT = $("#detail");
        const itemDIV = $(".item-detail");
     
        
        detailBT.addEventListener("click", function(){
           itemDIV.classList.remove("d-none");
        });
        closeBT.addEventListener("click", function(){
           itemDIV.classList.add("d-none");
        });
		
		
		
		
		
		
		
		const smallIMG = $(".mall-img li");
        const img1= $("#img1");
		
		smallIMG[0].addEventListener("mouseover", function(){ 
           img1.setAttribute("src","https://picsum.photos/id/1/2000/2000")
        })            
        
        smallIMG[1].addEventListener("mouseover", function(){
           img1.setAttribute("src","https://picsum.photos/id/10/2000/2000")
        })            
        
        smallIMG[2].addEventListener("mouseover", function(){
           img1.setAttribute("src","https://picsum.photos/id/100/2000/2000")
        })            
        /* smallIMG.forEach(function(){ 
           console.log("클릭했습니다")
        })     */
		
	})
	// $ : 찾아라~
	// .click(function()(....)) : 클릭하면 처리할 코드
	// .show(), hide() : effect method
