$(function() {

	const closeBT = $("#close");
	const openBT = $("#open");
	const itemDIV = $(".item-detail");

	openBT.click(function() {
		itemDIV.removeClass("d-none");
	});
	closeBT.click(function() {
		itemDIV.addClass("d-none");
	});


	const smallIMG = $(".small-img li"); // NodeList로 반환
	const img1 = $("#img1");

	smallIMG[0].mouseenter(function() {  // jQuery : .attr("src"), .attr("src", "value")
		//console.log(img1.getAttribute("src")); // .getAttribute(), .setAttribute()
		img1.attr("src", "https://picsum.photos/id/1/2000/2000")
	})
	smallIMG[1].mouseenter(function() {
		img1.attr("src", "https://picsum.photos/id/10/2000/2000")
	})
	smallIMG[2].mouseenter(function() {
		img1.attr("src", "https://picsum.photos/id/100/2000/2000")
	})


	const toggleSidePanel = $("#closePanel");
	const sidePanel = $("#sidePanel");
	const screen = $(".screen")

	toggleSidePanel.click(function() {
		if (sidePanel.hasClass("collapsed")) {
			sidePanel.removeClass("collapsed");
			screen.removeClass("d-none");
		} else {
			sidePanel.addClass("collapsed");
			screen.addClass("d-none");
		}
	});

         