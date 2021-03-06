// JavaScript Document 
$(function(){

	$('#div1 li').simpleTip({ 
		content : "I'm a <br/> tooltip!"
		,show : {
			action : 'mouseenter'
			,delay : 200
			,animate : 'fade'
		}
		,hide : {
			action : 'mouseleave'
			,delay : 200
			,animate : 'fade'
		}
		,position : 'right'		// tip 位置
		,spacing : 2			// tip 间距
		,offset: {x:0, y:0}		// 定位偏移
		,follow : false			// 跟随鼠标
		,keep : true // 鼠标移上去保持显示
		,events	 : {
			beforeShow : function(tip) {
				//console.info('beforeShow');
			}
			,afterShow : function(tip) {
				//console.info('afterShow')
			}
			,beforeHide : function(tip) {
				//console.info('beforeHide')
			}
			,afterHide : function(tip) {
				//console.info('afterHide')
			}
			,beforeDestroy : function(tip) {
				//console.info('beforeDestroy');
			}
			,afterDestroy : function(tip) {
				//console.info('afterDestroy')
			}
		}
	})
	.css("fontFamily","微软雅黑")//.eq(1).simpleTip('show');	


	$('#div1 li').eq(2).on('click', function() {
		$(this).simpleTip('position', (['top', 'right', 'bottom', 'left'])[Math.floor(Math.random()*4)])
	})


	$('#showAll').bind('click', function(){
		$('#div1 li').simpleTip('show');
	});

	$('#hideAll').bind('click', function(){
		$('#div1 li').simpleTip('hide');
	});


	$('#setPosition').bind('click', function(){
		$('#div1 li').eq(1).simpleTip('position', 'left');
	});

	$('#setContent').bind('click', function(){
		$('#div1 li').eq(3).simpleTip('content', 'new Content!!');
	});

	$('#destoryTip').bind('click', function(){
		$('#div1 li').eq(0).simpleTip('destroy');
	});

	$('#createTip').bind('click', function(){
		$('#div1 li').eq(0).simpleTip({
			content:'what\'s you name',
			events: {
				beforeShow : function(tip) {
					//console.info('beforeShow')
				}
				,beforeHide : function(tip) {
					//console.info('beforeHide');
					return 0;
				}
				,afterShow : function(tip) {
					//console.info('afterShow')
				}
				,afterHide : function(tip) {
					//console.info('afterHide')
				}
			}
		}).simpleTip('show');
	});

	$('#followTip').bind('click', function(){
		$('#div1 li').eq(1).simpleTip('follow', true);
	});


});