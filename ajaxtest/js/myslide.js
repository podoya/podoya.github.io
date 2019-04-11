$(document).ready(function(){
	$(".spring").each(function(i, e){
		let $cur = $(e).find(".cur");
		let $total = $(e).find(".total");
		let $prevBtn = $(e).find(".prev");
		let $nextBtn = $(e).find(".next");
		let $list = $(e).find(".glist");
		let $item = $list.find("figure");

		let cur = 0;
		let view = 4;
		let total = Math.ceil( $item.length / view );

		$total.text(total);

		listSlice();
		function listSlice(){
			lsidx = cur * view;
			$cur.text( cur + 1 );
			$item.hide().slice( lsidx, lsidx + view ).show();
		};

		nextBtn();
		function nextBtn(){
			$nextBtn.on("click", function(){
				cur += 1;
				if ( cur >= total ) {
					cur = 0;
					listSlice();
				} else {
					listSlice();
				};
			});
		};

		prevBtn();
		function prevBtn(){
			$prevBtn.on("click", function(){
				cur -= 1;
				if ( cur < 0 ) {
					cur = total - 1;
					listSlice();
				} else {
					listSlice();
				};
			});
		};
	});
});