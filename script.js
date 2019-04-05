$(document).ready(function(){
	let $rproduct = $(".rproduct");

	$rproduct.each(function(i, e){
		let $pageWrap = $(e).find(".pageWrap");
		let $curP = $(e).find(".curP");
		let $totalP = $(e).find(".totalP");
		let $leftBtn = $(e).find(".left_btn");
		let $rightBtn = $(e).find(".right_btn");
		let $rimgWrap = $(e).find(".rimgWrap");
		let $ritem = $(e).find(".rimgWrap li");
		let $ritemview = $ritem.length;

		let current = 0;
		let view = 5;

		let total = Math.ceil( $ritemview / view );

		$totalP.text(total);

		rslide( current );
		function rslide( num ){
			$curP.text( num + 1 );
			let sliceItem = num * view;
			$ritem.hide().slice( sliceItem , sliceItem + view ).show();
		};

		nextBtn();
		function nextBtn(){
			$rightBtn.on("click", function(){
				current += 1;
				if ( current >= total ) {
					current = 0;
					rslide(current);
				} else {
					rslide(current);
				};
				return false;
			});
		};
		prevBtn();
		function prevBtn(){
			$leftBtn.on("click", function(){
				current -= 1;
				if ( current < 0 ) {
					current = total-1;
					rslide(current);
				} else {
					rslide(current);
				};
				return false;
			});
		};
	});

	let $quickBn = $(".quick_bn");

	$quickBn.each(function(i, e){
		$quickCur = $(e).find(".quickCur");
		$quickTotal = $(e).find(".quickTotal");
		$lquickBtn = $(e).find(".lquick_btn");
		$rquickBtn = $(e).find(".rquick_btn");
		$quickLst = $(e).find(".quick_img");
		$quickItem = $(e).find(".quick_img a");
		$quickItemTotal = $quickItem.length;

		let currentQ = 0;
		let viewQ = 3;

		let totalQ = Math.ceil($quickItemTotal / viewQ);

		$quickTotal.text(totalQ);

		quickSlice( currentQ );
		function quickSlice( num ){
			$quickCur.text( num + 1 );
			let sliceNum = num * viewQ;
			$quickItem.hide().slice( sliceNum, sliceNum + viewQ ).show();
		};

		rightBtn();
		function rightBtn(){
			$rquickBtn.on("click", function(){
				currentQ++;
				if ( currentQ >= totalQ ) {
					currentQ = 0;
					quickSlice( currentQ );
				} else {
					quickSlice( currentQ );
				}
				return false;
			});
		};

		leftBtn();
		function leftBtn(){
			$lquickBtn.on("click", function(){
				currentQ--;
				if ( currentQ < 0 ) {
					currentQ = totalQ - 1;
					quickSlice( currentQ );
				} else {
					quickSlice( currentQ );
				}
				return false;
			});
		};
	});
});