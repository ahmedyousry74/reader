if (!window.x) {
    x = {};
}

x.Selector = {};
x.Selector.getSelected = function() {
    var t = '';
    if (window.getSelection) {
        t = window.getSelection();
    } else if (document.getSelection) {
        t = document.getSelection();
    } else if (document.selection) {
        t = document.selection.createRange().text;
    }
    return t;
}

var pageX;
var pageY;
var sideBarStatus =1;

var selectionArray = [];



function setZoom(zoom,el) {
	//alert(zoom);
      originwidth = el.offsetWidth;
      originHeight = el.offsetHeight;
      transformOrigin = [0,0];
	  mleft  = "-" +  zoom * 100 + "px";
	  //alert(mleft);
	  el.style.left= mleft;
	    el = el || instance.getContainer();
	    var p = ["webkit", "moz", "ms", "o"],
            s = "scale(" + zoom + ", " + zoom + ")",
            oString = (transformOrigin[0] * 100) + "% " + (transformOrigin[1] * 100) + "%";

	    for (var i = 0; i < p.length; i++) {
	        el.style[p[i] + "Transform"] = s;
	        el.style[p[i] + "TransformOrigin"] = oString;
	    }

	    el.style["transform"] = s;
	    el.style["transformOrigin"] = oString;
      
}

//setZoom(5,document.getElementsByClassName('container')[0]);

function showVal(a){
	allclasses = document.getElementsByClassName('pf');
	for (var i = 0; i < allclasses.length; ++i) {
		if(allclasses[i].style.display == "block"){
			var zoomScale = Number(a)/10 + 1;
			setZoom(zoomScale,allclasses[i]);
		}			
		
	}
   
   
   //originwidth = document.getElementById("pf1").offsetWidth;
   //alert(originwidth);
   //newWidth = parseInt(originwidth) + 100;
   //originheight = document.getElementById("pf1").style.offsetHeight;
  // document.getElementById("pf1").style.width=newWidth + 'px'   ;
  // documentgetElementsByTagName('img').style.width = newWidth + 'px';

	//document.getElementById("pf1").style.height='100px';
  // document.getElementById("pf1").style.overflow='auto';
}

function showMarker(){
	$.markerPen({
		'color':'#FDD835',
		'background-color':'white'
	});
	$('#marker_pen_controls').css('z-index','10000000000000000000000000000000000000');
	$('#marker_pen_controls').append('<a onclick="takeScreenshotWithDimensions(470, 0, 1000, 600);" style="padding: 0.5% 2%; margin-left: 1%; cursor: pointer;">Take screen</a>');
	$('#marker_pen_controls').css('width','45%');

	$('#marker_pen_controls').css('left','6%');
	$('#marker_pen_controls').css('top','-10px');
	$('#marker_pen_controls').css('color','rgb(51, 51, 51)');
	$('#marker_pen_controls').css('background-color','white !important');
	$('#marker_pen_controls').css('bottom','auto');
	$('#marker_pen_controls').css('background-color','#fff');

}
function showHideSideBar(){
		$('.optionBox').css('display', 'none');
    	if(sideBarStatus == 1)
    	{
    		sideBarStatus =0;
		    $('#outline').css('padding-right', '25px');
		    $('#sidebar').css('width', '80px');
		    $('#page-container').css('left', '0px');
			document.getElementById("sidebar").style.display = "none";
    	}else{
    		sideBarStatus=1;
    		$('#outline').css('padding-right', '0px');
    		$('#sidebar').css('width', '446px');
    		$('#page-container').css('left', '440px');
			document.getElementById("sidebar").style.display = "block";
    	}
		$('#optionsTabs').css('display', 'none');
    }
function showSearchReasult(textClass, c_page)
	{
		$('.pf').css('display', 'none');
    	$('#pf'+c_page).css('display', 'block');
    	$('#pageText').val($('#pf'+c_page).index());
    	$('.'+textClass).focus();
	}
	function goToGoogleTranslate()
    {
    	var text = $('#selectionText').val();
    	//text = text.replace(" ", "_");
    	window.open('https://translate.google.com/?sl=ar&tl=en&text='+text+'&op=translate', '_blank');
    }
    function saySpeech() {
    	alert('ii');
        const voices = window.speechSynthesis.getVoices();
        var text = $('#selectionText').val();
        const speech = new window.SpeechSynthesisUtterance(text);
        speech.voice = voices[4];
        speech.voiceURI = "Microsoft Hoda - Arabic (Egypt)";//Microsoft Hoda - Arabic (Egypt)";//"Google UK English female";
        //Microsoft Hoda - Arabic (Egypt)
        speech.volume = 1; // 0 to 1
        speech.rate = .8; // 0.1 to 10
        speech.pitch = 0; //0 to 2
        speech.lang = 'ar-AE';
        window.speechSynthesis.speak(speech);
        
        
        // var kline = new Object();
        // kline.speakText = function(message) {
        //     document.getElementById("Output").innerHTML = message;
        // };
  }
  function showOptionItem(itemName, tabnumber)
  {
  	$('.optionItem').css('display', 'none');
  	$('#option'+itemName).css('display', 'block');
	
	var allItems = document.querySelectorAll('.tabs');
	  allItems.forEach(function(link) {
        link.style.borderBottom = 'none';
      });
	document.getElementById(tabnumber).style.borderBottom = "solid 1px #006699";	
  }
	function showAddNoteBox()
	{
		
		sideBarStatus = 1;
		showHideSideBar();
		$('#noteBoxHtml').css('display', 'block');
		
	}

$(function(){
	var pagesNum = $('.pf').length;
	$('#togglebtn').click();
	// $.markerPen({
 //    "color":"#FDD835"
 //  });



	$('.pf').eq(configData.page).css('display', 'block');
	$('body').prepend('<div id="header"><span style="float:left;" ><div id="sidebarMenu" style="text-align: center;  float: left; " onclick="showHideSideBar();"><div class="sandwishbar"></div><div class="sandwishbar" style="width: 19px;"></div><div class="sandwishbar"></div></div><span class="arrow left" style="border-width: 0 4px 4px 0; padding: 5px; margin-left: 20px;" ></span></span><div style="float:right"><span style="float:right;" ><img src="../../../assets/img/more.png" class="header_img"></span><span style="float:right;" ><img src="../../../assets/img/flash-card.png"  class="header_img"></span><span style="float:right;" ><img src="../../../assets/img/reference.png" class="header_img"></span><span style="float:right;" ><img src="../../../assets/img/flash-card.png" id="allOptions" class="header_img"></span><span style="float:right;" ><img id="searchOption" src="../../../assets/img/find.png" class="header_img"><img  src="../../../assets/img/pen.png" class="header_img" onclick="showMarker();" ></span> <input style="margin-right: 150px;" id="zoomscroll" min="1" max="10" value="0" step="1" onchange="showVal(this.value)" type="range"/></div></div>');
	
	$('body').attr('oncontextmenu','return false;');
	// $('#sidebar').css('direction','rtl');
	var sidebarAddition = '';
	sidebarAddition+='<table style="margin-right: 20px;"  width="90%" dir="rtl" id="bookInfo"><tr><td style="text-align:right; padding: 5px; width: 75px;"><img src="'+configData.cover+'" style="width:50px;"></td>';
	sidebarAddition+='<td style="text-align:center; font-size: 20px;padding: 5px;">'+configData.title+'</td></tr></table>';
	$('#sidebar').prepend(sidebarAddition);
	var highLightTool = '<ul class="tools">';

	highLightTool+='<li><span class="highlightItem highlightImportant" color="important"></span>';
	highLightTool+='<span  class="highlightItem highlightExam" color="exam"></span>';
	highLightTool+='<span  class="highlightItem highlightOther" color="other"></span></li>';
	highLightTool+='<li><span class="highLightMotion">❤️</span>';
	highLightTool+='<span class="highLightMotion">👀</span>';
	highLightTool+='<span class="highLightMotion">😀</span>';
	highLightTool+='<span class="highLightMotion">🤔</span>';
	highLightTool+='<span class="highLightMotion">😱</span></li>';
	highLightTool+='<li id="optionCopy">نسخ</li>';
	highLightTool+='<li onclick="showAddNoteBox();">أضافة ملاحظات</li>';
	highLightTool+='<li onclick="goToGoogleTranslate();">ترجمة</li>';
	highLightTool+='<li>Define</li><li>أسأل المعلم</li>';
	highLightTool+='<li id="optionWikipedia">ويكبيديا</li>';
	// highLightTool+='<li onclick="saySpeech();">أقرء من هنا</li>';
	highLightTool+='<li>البطاقات التعليمية</li>';
	// highLightTool+='<li>Read Aloud from here</li>';
	highLightTool+='</ul>';
	$('body').append(highLightTool);


	var noteBoxHtml = '<div id="noteBoxHtml" class="optionBox"><h1>أضافة ملاحظات </h1><textarea></textarea><br/><br/><span class="addNote">حفظ</span></div>';
	$('body').append(noteBoxHtml);

	var optionsTabs = '<div id="optionsTabs">';
	optionsTabs+='<ul id="optionUrl">';
	optionsTabs+='<li onclick="showOptionItem(\'Colors\', \'tab1\');" class="tabs " id="tab1"> التمييزات </li>';
	optionsTabs+='<li onclick="showOptionItem(\'Notes\', \'tab2\');" class="tabs tab2" id="tab2"> الشروحات </li>';
	optionsTabs+='<li onclick="showOptionItem(\'BookMarks\', \'tab3\');"  class="tabs tab3" id="tab3"> العلامات المرجعية </li>';
	optionsTabs+='<li onclick="showOptionItem(\'Cards\', \'tab4\');"  class=" tabs tab4" id="tab4"> البطاقات التعليمية </li>';
	optionsTabs+='<li onclick="showOptionItem(\'questions\', \'tab4\');"  class=" tabs tab4" id="tab4"> التمارين </li>';
	optionsTabs+='<li onclick="showOptionItem(\'teacher\', \'tab4\');"  class=" tabs tab4" id="tab4"> تواصل </li></ul>';
	optionsTabs+='<div id="optionResult">';
	optionsTabs+='<div id="optionColors" class="optionItem">';
	optionsTabs+='<div id="tabsColorsSelection"><table width="100%" dir="rtl"><tr><Td style="text-align: right;">التمييزات والشروحات</td><td><input type="button" style="border-radius: 15px; border: none; width: 100px; padding: 10px; background:#006699; color: #fff;" value="تصدير" /></td></tr></table>';
	optionsTabs+='<table width="100%" dir="rtl"><tr><td style="width:20px;"><span class="highlightItem highlightImportant" color="important" onclick="document.getElementById(\'notes1\').style.borderRight=\'solid 5px #FFEB3B\'; document.getElementById(\'notes2\').style.borderRight=\'solid 5px #FFEB3B\';"></span></td><td style="width:20px;"><span onclick="document.getElementById(\'notes1\').style.borderRight=\'solid 5px #2196f3\'; document.getElementById(\'notes2\').style.borderRight=\'solid 5px #2196f3\';" class="highlightItem highlightExam" color="exam" ></span></td><td style="width:20px;"><span  onclick="document.getElementById(\'notes1\').style.borderRight=\'solid 5px #009688\'; document.getElementById(\'notes2\').style.borderRight=\'solid 5px #009688\';" class="highlightItem highlightOther" color="other"></span></td>';
	optionsTabs+='<td><i class="fa fa-file"></i></td><td style="tex-align: right;"><a href="#">واضح</a></td><td style="tex-align: left"><div  style="float: left; text-align: center; font-size: 19px; background: #006699; height: 25px; width: 25px; line-height: 20px; border-radius: 50%; color: #fff;"  data-toggle="modal" data-target="#exampleModal">+</div></td></tr></table></div>';
	optionsTabs+='<table width="100%" style="border-spacing: 30px;"><tr style="padding: 5px;"><td style="margin: 10px; padding: 15px; border-right: solid 5px #FFEB3B; text-align: right " id="notes1">بعض الملاحظات الهامة</td></tr>';
	optionsTabs+='<tr><td style="padding: 15px; border-right: solid 5px #FFEB3B; text-align: right " id="notes2">بعض الملاحظات الهامة</td></tr></table>';
	optionsTabs+='</div>';
	optionsTabs+='<div id="optionNotes" class="optionItem"></div>';
	optionsTabs+='<div id="optionBookMarks" class="optionItem"><div style="margin-top: 10px; padding: 15px; background: #f2f2f2;">العلامات المرجعية الخاصة بي <div  style="float: left; text-align: center; font-size: 19px; background: #006699; height: 25px; width: 25px; line-height: 20px; border-radius: 50%; color: #fff;">+</div></div><table width="100%"><tr><Td align="left" style="border-bottom: solid 1px #f1f1f1;"><img width="15" style="width:20px; cursor: pointer;" src="../../../assets/img/bookmark_marked.png" id="markIt" ></td><td  style="border-bottom: solid 1px #f1f1f1; padding: 15px; ">علامة استعلم تدريبية</td></tr><tr style="border-bottom: solid 1px #f1f1f1;"><Td align="left" style="border-bottom: solid 1px #f1f1f1;"><img width="15" style="border-bottom: solid 1px #f1f1f1; width:20px; cursor: pointer;" src="../../../assets/img/bookmark_marked.png" id="markIt" ></td><td style="padding: 15px; ">علامة استعلم تدريبية</td></tr></table></div>';
	optionsTabs+='<div id="optionCards" class="optionItem"></div>';
	optionsTabs+='</div>';
	optionsTabs+='</div>';
	$('body').append(optionsTabs);

	var footerMarked = '<div id="bookMark"><img style="width:20px;cursor: pointer;" src="../../../assets/img/bookmark.png" id="markIt"><img style="width:30px;display:none;cursor: pointer;" src="../../../assets/img/bookmark_marked.png" id="markIt"></div>';
	var pages_nav = '<div id="footer_pages" style="float:right;margin-right:60px;width:200px;"><table><tr><td><span class="bi bi-caret-left" style="font-size: 36px;margin-left: -29px;float: left;margin-top: -43px;cursor: pointer;" id="back_page"></span></td><td><input type="text" value="'+configData.page+'" id="pageText" style=" border: solid 1px #a1a1a1; border-radius: 5px; padding: 4px; width:23px; text-align: center;"></td><td> / '+pagesNum+'</td><td><span class="bi bi-caret-right" style="font-size: 36px;float: left;margin-top: -43px;    cursor: pointer;" id="next_page"></span></td></tr></table></div>';
	var htmlFooter = '<div id="footer">'+footerMarked+pages_nav+'</div>';
	$('body').append(htmlFooter);

	var optionsSearch = '<div id="optionsSearch" class="optionBox"><h3>بحث</h3>';
	optionsSearch+= '<input type="text" id="searchBox" placeholder="البحث عن" > ';
	optionsSearch+= '<div id="searchResult"></div></div>';
	$('body').append(optionsSearch);
	$('body').append('<div style=""><textarea id="selectionText"></textarea></div>');
	$("#page-container").bind("mouseup", function() {
        var selectedText = x.Selector.getSelected();
        if(selectedText != ''){

        	$('#selectionText').html(getTextFromHtml(getSelectionHtml()));//.select();

        	// console.log(getSelectionHtml());
			
				var totalhieght = pageY + 300;
				if(window.innerHeight < totalhieght){
					$('ul.tools').css({
				
				
						'left': pageX + 5,
						'top' : pageY -300
					}).fadeIn(200);
				}
				else{
					$('ul.tools').css({
				
				
						'left': pageX + 5,
						'top' : pageY - 55
					}).fadeIn(200);
				}
				
            
        } else {
            $('ul.tools').fadeOut(200);
        }
    });
    $(document).on("mousedown", function(e){
        pageX = e.pageX;
        pageY = e.pageY;
    });
    $('.l').each(function(){
    	var cId = $(this).attr('href');
    	cId = cId.replace('#','');
    	$(this).attr('href', 'javascript:;');
    	$(this).attr('page', $('#'+cId).index());
    	$(this).attr('data-dest-detail','');
    	
    });
    $('#pageText').on('change', function(){
    	$('.pf').css('display', 'none');
    	$('.pf').eq(parseInt($('#pageText').val())).css('display', 'block');
    });

    $('#next_page').on('click', function(){
    	$('.pf').css('display', 'none');
    	$('.pf').eq(parseInt($('#pageText').val())+1).css('display', 'block');
    	$('#pageText').val(parseInt($('#pageText').val())+1);

    });
    $('#back_page').on('click', function(){
    	$('.pf').css('display', 'none');
    	$('.pf').eq(parseInt($('#pageText').val())-1).css('display', 'block');
    	$('#pageText').val(parseInt($('#pageText').val())-1);

    });
    $('.l').click(function(event){
    	var c_page = $(this).attr('page');
    	$('.pf').css('display', 'none');
    	$('.pf').eq(c_page).css('display', 'block');
		document.getElementById("zoomscroll").value = 0;
    	$('#pageText').val(c_page);
    });
    $('#optionCopy').click(function(){

    	// $('#selectionText').select();
    	// document.execCommand('copy');


    	var copyText = document.getElementById("selectionText");

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value).then(function() {
            // Success
            //alert("Copied the text: " + copyText.value);
        }).catch(function(error) {
            // Error
            //alert("Error copying text: " + error);
        });

    });

    $('#optionWikipedia').click(function(){
    	var text = $('#selectionText').val();
    	text = text.replace(" ", "_");
    	window.open('https://ar.wikipedia.org/wiki/'+text, '_blank');
    });


    $('#searchBox').on('keyup', function(){
    	var searchText = $('#searchBox').val();
    	searchText = searchText.split(" ");
    	$('#searchResult').empty();
    	$(searchText).each(function(key,value){
    		$('#searchResult').append('<h4>'+value+'</h4>');
    		var resultOptions = '';
    		$('.searchRes').removeClass('searchRes');
    		$('.t').each(function(){
    			var cText = $(this).html();
    			cText = $.trim(cText);
    			if(cText == value)
    			{
    				//console.log(cText);
    				$(this).addClass('searchRes');
    				var cClass = $(this).attr('class');
    				cClass = cClass.replace(" ", "-");
    				$(this).attr('showDiv', cClass);
    				console.log($(this).index());
    				var cPageNumber = $(this).parent().parent().attr('data-page-no');
    				var cIndex = $(this).index();
    				var finalText = '';
    				// if($(this).prev().prev().html() !='' && $(this).prev().prev().html() !='undefined')
    				// {
    				// 	finalText+=$(this).prev().prev().html()+' ';
    				// }
    				// if($(this).prev().html() !='' && $(this).prev().html() !='undefined')
    				// {
    				// 	finalText+=$(this).prev().html()+' ';
    				// }
    				// finalText+=cText;
    				// if($(this).next().html() !='' && $(this).next().html() !='undefined')
    				// {
    				// 	finalText+=$(this).next().html()+' ';
    				// }
    				// if($(this).next().next().html() !='' && $(this).next().next().html() !='undefined')
    				// {
    				// 	finalText+=$(this).next().next().html()+' ';
    				// }
    				finalText = $(this).prev().prev().html()+' '+ $(this).prev().html()+' '+cText+' '+$(this).next().html()+' '+$(this).next().next().html();
    				resultOptions+='<li onclick="showSearchReasult(\''+finalText+'\', \''+cPageNumber+'\')">'+finalText+'</li>';

    			}
    		});
    		if(resultOptions == '')
    		{
    			resultOptions+='<li>No match</li>';
    		}
    		$('#searchResult').append('<ul>'+resultOptions+'</ul><br/>');
    		
    	});
    });
    $('#searchOption').on('click', function(){
    	
    	sideBarStatus = 1;
		showHideSideBar();
		$('#optionsSearch').css('display', 'block');

    });

	$('#allOptions').on('click', function(){
    	
    	sideBarStatus = 1;
		showHideSideBar();
		if(document.getElementById("optionsTabs").style.display == "block"){
			$('#optionsTabs').css('display', 'none');
		}
		else{
			$('#optionsTabs').css('display', 'block');
		}
		

    });

    $('.highlightItem').on('click', function(){
    	// $('.m203').insertAfter('<div style="background-color: #FFEB3B;">');
    	// $('.m203').insertBefore('</div>');
    	// console.log(selectionArray[0]);
    	// console.log(selectionArray[selectionArray.length-1]);
    	// $('.m203').insertBefore('</div>');
    	// insertAfter($('.m203'), '<div style="background-color: #FFEB3B;">');
    	// insertBefore($('.m203'), '</div>');
    	var cClass = $(this).attr('color');
    	console.log(cClass);
    	$(selectionArray).each(function(key,value){
    		$('.'+value.seconde+'.'+value.first).addClass(cClass+'Highlight');
    	});
    });
    
    
    function getSelectionHtml() {
	  var html = "";
	  if (typeof window.getSelection != "undefined") {
	    var sel = window.getSelection();
	    if (sel.rangeCount) {
	      var container = document.createElement("div");
	      for (var i = 0, len = sel.rangeCount, range; i < len; ++i) {
	        range = sel.getRangeAt(i);
	        console.log(range);
	        if (range.startContainer === range.endContainer
	            && range.startContainer.nodeType === Node.TEXT_NODE
	            && range.startOffset === 0
	            && range.endOffset === range.startContainer.length) {
	          range.selectNode(range.startContainer.parentElement);
	      
	        }
	        container.appendChild(range.cloneContents());
	      }
	      
	      getSelectionsClasses(container);
	      html = container.innerHTML;
	    }
	  } else if (typeof document.selection != "undefined") {
	    if (document.selection.type == "Text") {
	      html = document.selection.createRange().htmlText;
	    }
	  }
	  return html;
	}
	function getSelectionsClasses(selectedText)
	{
		selectionArray = [];
		var count = 0;
		$(selectedText).find('div').each(function(){
			var cClass = $(this).attr('class');
			if(cClass !='')
			{
				var allClasses = cClass.split(" ");
				selectionArray[count] = {first:allClasses[1],seconde:allClasses[2]};//allClasses[1];
				count++;
				
			}
			
		});
		console.log(selectionArray);
	}

	function getTextFromHtml(selectedText)
	{
		var div = document.createElement("div");
		div.innerHTML = selectedText;
		var text = div.textContent ;//|| div.innerText || "";
		return text;
	}




});

function takeScreenshotWithDimensions(x, y, width, height) {
        html2canvas(document.body, {
            x: x,
            y: y,
            width: width,
            height: height
        }).then(function(canvas) {
            // Convert the canvas to a data URL
            var imgData = canvas.toDataURL('image/png');

            // Create a temporary link element
            var link = document.createElement('a');
            link.href = imgData;
            link.download = 'screenshot.png';

            // Append the link to the document body and trigger the download
            document.body.appendChild(link);
            link.click();

            // Clean up
            document.body.removeChild(link);
        });
    }


    document.addEventListener('touchstart', function(event) {
            // Enable proper text selection
            if (event.targetTouches.length === 1) {
                var touch = event.targetTouches[0];
                var selection = window.getSelection();
                var range = document.caretRangeFromPoint(touch.clientX, touch.clientY);
                if (range) {
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            }
        }, false);

