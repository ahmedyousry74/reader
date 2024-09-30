document.addEventListener("DOMContentLoaded", function () {
    // Loader HTML


    // Modal HTML for translate, Wikipedia, and Google search
    const modalHtml = `
		<audio id="flip-sound" src="../../../assets/img/sound.mp3" preload="auto"></audio>
        <!-- Translate Modal -->
        <div class="modal fade" id="translateModal" tabindex="-1" role="dialog" aria-labelledby="translateModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <iframe id="translateFrame" src="" width="100%" height="500" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        </div>

        <!-- Wikipedia Modal -->
        <div class="modal fade" id="wikipediaModal" tabindex="-1" role="dialog" aria-labelledby="wikipediaModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <iframe id="wikipediaFrame" width="100%" height="500" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        </div>

        <!-- Google Search Modal -->
        <div class="modal fade" id="googleModal" tabindex="-1" role="dialog" aria-labelledby="googleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <iframe id="googleFrame" width="100%" height="500" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
});


if (!window.x) {
	x = {};
}

x.Selector = {};
x.Selector.getSelected = function () {
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
var sideBarStatus = 1;
var user_id = 1;//getCookie('URCookie');
if (user_id) {

} else {
	window.location.href = "https://alfikr-schools.com/student/login";
}

var selectionArray = [];





function setZoom(zoom, el) {
	console.log(zoom + '==' + el);
	//alert(zoom);
	originwidth = el.offsetWidth;
	originHeight = el.offsetHeight;
	transformOrigin = [0, 0];
	mleft = "-" + zoom * 100 + "px";
	//alert(mleft);
	el.style.left = mleft;
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

let currentZoomVal = 0;

function showVal(a) {
	currentZoomVal = a;  // Store the new zoom value globally
	allclasses = document.getElementsByClassName('pf');
	for (var i = 0; i < allclasses.length; ++i) {
		if (allclasses[i].style.display == "block") {
			var zoomScale = Number(a) / 10 + 1;
			setZoom(zoomScale, allclasses[i]);
		}
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
// }

function showMarker() {
	$.markerPen({
		'color': '#FDD835',
		'background-color': 'white'
	});
	$('#marker_pen_controls').css('z-index', '10000000000000000000000000000000000000');
	$('#marker_pen_controls').append('<a onclick="takeScreenshotWithDimensions(470, 0, 1000, 600);" style="padding: 0.5% 2%; margin-left: 1%; cursor: pointer;background-color: #75AA76;border-color: #75AA76;color: #fff !important;">Take screen</a>');
	$('#marker_pen_controls').css('width', '62%');
	$('#marker_pen_controls').css('padding', '0');
	$('#marker_pen_controls').css('left', '6%');
	$('#marker_pen_controls').css('top', '5px');
	$('#marker_pen_controls').css('color', 'rgb(51, 51, 51)');
	$('#marker_pen_controls').css('background-color', 'white !important');
	$('#marker_pen_controls').css('bottom', 'auto');
	$('#marker_pen_controls').css('background-color', '#fff');

}
function showHideSideBar() {
	$('.optionBox').css('display', 'none');
	if (sideBarStatus == 1) {
		sideBarStatus = 0;
		$('#outline').css('padding-right', '25px');
		$('#sidebar').css('width', '80px');
		$('#page-container').css('left', '0px');
		document.getElementById("sidebar").style.display = "none";
	} else {
		sideBarStatus = 1;
		$('#outline').css('padding-right', '0px');
		$('#sidebar').css('width', '446px');
		$('#page-container').css('left', '440px');
		document.getElementById("sidebar").style.display = "block";
	}
	$('#optionsTabs').css('display', 'none');
}
function showSearchReasult(textClass, c_page) {
	$('.pf').css('display', 'none');
	$('#pf' + c_page).css('display', 'block');
	// alert(c_page)
	$('#pageText').val($('#pf' + c_page).index());
	$('.' + textClass).focus();
	$('#pageText').change();
}
// function goToGoogleTranslate() {
// 	var text = $('#selectionText').val();
// 	//text = text.replace(" ", "_");
// 	window.open('https://translate.google.com/?sl=ar&tl=en&text=' + text + '&op=translate', '_blank');
// }

function goToGoogleTranslate() {
	var text = encodeURIComponent(document.getElementById('selectionText').value);
	var url = 'https://www.bing.com/translator/?sl=ar&tl=en&text=' + text;
	document.getElementById('translateFrame').src = url;
	$('#translateModal').modal('show');
}

// document.querySelector('[data-toggle="modal"]').addEventListener('click', function () {
// 	var text = encodeURIComponent(document.getElementById('selectionText').value);
// 	var url = 'https://translate.google.com/?sl=ar&tl=en&text=' + text + '&op=translate';
// 	document.getElementById('translateFrame').src = url;
// });

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
function showOptionItem(itemName, tabnumber) {
	$('.optionItem').css('display', 'none');
	$('#option' + itemName).css('display', 'block');

	var allItems = document.querySelectorAll('.tabs');
	allItems.forEach(function (link) {
		link.style.borderBottom = 'none';
	});
	document.getElementById(tabnumber).style.borderBottom = "solid 1px #006699";

	const url = "https://jeddah.scientific-thought.com/student-panel/find-exam/1/www1?type=1";

	// Fetch the exam data from the URL
	fetch(url)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.json(); // Assuming the response is JSON
		})
		.then(data => {
			const tableBody = document.getElementById('examTableBody');
			tableBody.innerHTML = ''; // Clear existing rows

			// Iterate through each exam and create a new row
			data.forEach(exam => {
				const row = document.createElement('tr');

				// Create and append cells
				const titleCell = document.createElement('td');
				titleCell.textContent = exam.booktitle; // Replace with the appropriate property
				row.appendChild(titleCell);

				const dateCell = document.createElement('td');
				dateCell.textContent = exam.end_date; // Replace with the appropriate property
				row.appendChild(dateCell);

				const gradeCell = document.createElement('td');
				gradeCell.textContent = exam.end_date || '__'; // Replace with the appropriate property
				row.appendChild(gradeCell);

				const statusCell = document.createElement('td');
				if (exam.status === 'complete') {
					statusCell.innerHTML = '<span class="complete">مكتمل</span>';
				} else {
					statusCell.innerHTML = `<a href="${exam.link}" target="_blank" class="available">متاح</a>`;
				}
				row.appendChild(statusCell);

				// Append the row to the table body
				tableBody.appendChild(row);
			});
		})
		.catch(error => {
			console.error('There was an error fetching the exam data:', error);
		});
}
function showAddNoteBox() {

	sideBarStatus = 1;
	showHideSideBar();
	$('#noteBoxHtml').css('display', 'block');


}

$(function () {

	var pagesNum = $('.pf').length;
	$('#togglebtn').click();
	// $.markerPen({
	//    "color":"#FDD835"
	//  });

	$('.pf').eq(configData.page).css('display', 'block');
	$('body').prepend('<div id="header"><span style="display:flex;justifu-content:flex-start;align-items:center;gap:15px" ><div id="sidebarMenu" style="text-align: center;  float: left; " onclick="showHideSideBar();"><div class="sandwishbar"></div><div class="sandwishbar" style="width: 19px;"></div><div class="sandwishbar"></div></div>' +
		'<a href="https://scientific-thought.com/" target="_blank"> <img src="../../../assets/img/logo.jpg" width="55" height="55" style="object-fit:contain" />  </a>  </span>' +
		//'<span style="float:right;" ><img src="../../../assets/img/more.png" class="header_img"></span><span style="float:right;" ><img src="../../../assets/img/flash-card.png"  class="header_img"></span><span style="float:right;" ><img src="../../../assets/img/reference.png" class="header_img"></span>'+
		'<input style="" id="zoomscroll" min="1" max="10" value="0" step="1" onchange="showVal(this.value)" type="range"/>' +
		'<div style="display: flex; justify-content: flex-start; align-items: center; flex-direction: row; gap: 20px;"><a href="https://wa.me/+201070113399?text=" target="_blank" style="float:right;" ><img src="../../../assets/img/headphones-01.svg" width="30" height="30"></a>' +
		'<img  src="../../../assets/img/pencil-line.svg" width="30" height="30" onclick="showMarker();" >' +
		'<div class="search_div"><img id="searchOption" src="../../../assets/img/search-refraction.svg" width="30" height="30"></div>' +
		'<span style="float:right;" ><img src="../../../assets/img/dots-horizontal.svg" id="allOptions" width="30" height="30"></span></div>');

	$('body').attr('oncontextmenu', 'return false;');
	// $('#sidebar').css('direction','rtl');
	var sidebarAddition = '';
	sidebarAddition += '<table style="margin-right: 20px;"  width="90%" dir="rtl" id="bookInfo"><tr><td style="text-align:right; padding: 5px; width: auto;"><img src="' + configData.cover + '" style="width:50px;"></td>';
	sidebarAddition += '<td style="text-align:center; font-size: 20px;padding: 5px;">' + configData.title + '</td></tr></table>';
	$('#sidebar').prepend(sidebarAddition);
	var highLightTool = '<ul class="tools">';

	highLightTool += '<li class="highlightItems"><span class="highlightItem highlightImportant" color="important"></span>';
	highLightTool += '<span  class="highlightItem highlightExam" color="exam"></span>';
	highLightTool += '<span  class="highlightItem highlightOther" color="other"></span></li>';
	// highLightTool+='<li><span class="highLightMotion">❤️</span>';
	// highLightTool+='<span class="highLightMotion">👀</span>';
	// highLightTool+='<span class="highLightMotion">😀</span>';
	// highLightTool+='<span class="highLightMotion">🤔</span>';
	// highLightTool+='<span class="highLightMotion">😱</span></li>';
	highLightTool += '<li id="optionCopy"> نسخ <img src="../../../assets/img/copy-07.svg" width="24" height="24" style="margin-inline-start: 8px" /> </li>';
	highLightTool += '<li onclick="showAddNoteBox();">أضافة ملاحظات <img src="../../../assets/img/pencil-01.svg" width="24" height="24" style="margin-inline-start: 8px" /> </li>';
	highLightTool += '<li onclick="goToGoogleTranslate();">ترجمة <img src="../../../assets/img/translate-01.svg" width="24" height="24" style="margin-inline-start: 8px" /> </li>';
	//highLightTool+='<li>Define</li><li>أسأل المعلم</li>';
	highLightTool += '<li id="optionWikipedia">ويكبيديا <img src="../../../assets/img/Wikipedia-logo-v2.svg.png" width="24" height="24" style="margin-inline-start: 8px" /> </li>';
	highLightTool += '<li id="optionGoogle">بحث  جوجل <img src="../../../assets/img/7123025_logo_google_g_icon.svg" width="30" height="30" style="margin-inline-start: 8px" /> </li>';
	highLightTool += '<button id="speakButton" type="button"> القارئ الصوتي <img src="../../../assets/img/microphone-01.svg" width="24" height="24" style="margin-inline-start: 8px" /> </button>';
	//highLightTool+='<li>البطاقات التعليمية</li>';
	// highLightTool+='<li>Read Aloud from here</li>';
	highLightTool += '</ul>';
	$('body').append(highLightTool);


	var noteBoxHtml = '<div id="noteBoxHtml" class="optionBox"> <img src="../../../assets/img/x-close.svg" > <h1>أضافة ملاحظات </h1><textarea id="noteInput"></textarea><span id="addNoteBtn" class="addNote">حفظ</span></div>';
	$('body').append(noteBoxHtml);

	var optionsTabs = '<div id="optionsTabs"> <img src="../../../assets/img/x-close.svg" >';
	optionsTabs += '<ul id="optionUrl">';
	optionsTabs += '<li onclick="showOptionItem(\'Colors\', \'tab1\');" class="tabs " id="tab1"> التمييزات </li>';
	optionsTabs += '<li onclick="showOptionItem(\'Notes\', \'tab2\');" class="tabs tab2" id="tab2">الملاحظات</li>';
	optionsTabs += '<li onclick="showOptionItem(\'Videos\', \'tab5\');" class="tabs tab5" id="tab5"> الشروحات </li>';
	optionsTabs += '<li onclick="showOptionItem(\'BookMarks\', \'tab3\');"  class="tabs tab3" id="tab3"> العلامات المرجعية </li>';
	//optionsTabs+='<li onclick="showOptionItem(\'Cards\', \'tab4\');"  class=" tabs tab4" id="tab4"> البطاقات التعليمية </li>';
	optionsTabs += '<li onclick="showOptionItem(\'Questions\', \'tab6\');"  class=" tabs tab4" id="tab6"> التمارين </li>';
	optionsTabs += '<li onclick="showOptionItem(\'Exams\', \'tab7\');"  class=" tabs tab7" id="tab7"> الواجبات </li>';
	//optionsTabs+='<li onclick="showOptionItem(\'teacher\', \'tab4\');"  class=" tabs tab4" id="tab4"> تواصل </li></ul>';
	optionsTabs += '<div id="optionResult">';
	optionsTabs += '<div id="optionColors" class="optionItem">';
	optionsTabs += '<div id="tabsColorsSelection"><table width="100%" dir="rtl"><tr><Td style="text-align: right;">التمييزات والشروحات</td></tr></table>';
	optionsTabs += '<table width="100%" dir="rtl"><tr><td style="width:20px;"><span class="highlightItem highlightImportant active" color="important" onclick="toggleActive(this);  getAllHighlight(\'importantHighlight\');"></span></td><td style="width:20px;"><span onclick="toggleActive(this);  getAllHighlight(\'examHighlight\')" class="highlightItem highlightExam" color="exam" ></span></td><td style="width:20px;"><span  onclick="toggleActive(this);  getAllHighlight(\'otherHighlight\');" class="highlightItem highlightOther" color="other"></span></td>';
	optionsTabs += '<td><i class="fa fa-file"></i></td></tr></table></div>';
	optionsTabs += '<table id="highlightTable" width="100%" style="border-spacing: 30px;"><tr style="padding: 5px;"><td style="margin: 10px; padding: 15px; border-right: solid 5px #FFEB3B; text-align: right " id="notes1">بعض الملاحظات الهامة</td></tr>';
	optionsTabs += '<tr><td style="padding: 15px; border-right: solid 5px #FFEB3B; text-align: right " id="notes2">بعض الملاحظات الهامة</td></tr></table>';
	optionsTabs += '</div>';
	optionsTabs += '<div id="optionNotes" class="optionItem"><div style="margin-top: 10px; padding: 15px; background: #f2f2f2;">ملاحظاتى<div  style="float: left; text-align: center; font-size: 19px; background: #006699; height: 25px; width: 25px; line-height: 20px; border-radius: 50%; color: #fff;cursor:pointer;" id="addNewNote">+</div></div><table width="100%" id="notesTable"></table></div>';
	optionsTabs += '<div id="optionVideos" class="optionItem"><div style="margin-top: 10px; padding: 15px; background: #f2f2f2;">شروحات بالفيديو</div><table width="100%" id="VideosTable"></table></div>';
	optionsTabs += '<div id="optionBookMarks" class="optionItem"><div style="margin-top: 10px; padding: 15px; background: #f2f2f2;">العلامات المرجعية الخاصة بي <div  style="float: left; text-align: center; font-size: 19px; background: #006699; height: 25px; width: 25px; line-height: 20px; border-radius: 50%; color: #fff;pointer:cursor;" onclick="$(\'#markIt\').click();">+</div></div><table width="100%" id="BookMarksTable"><tr><Td align="left" style="border-bottom: solid 1px #f1f1f1;"><img width="15" style="width:20px; cursor: pointer;" src="../../../assets/img/bookmark_marked.png" id="un_markIt_" ></td><td  style="border-bottom: solid 1px #f1f1f1; padding: 15px; ">علامة استعلم تدريبية</td></tr><tr style="border-bottom: solid 1px #f1f1f1;"><Td align="left" style="border-bottom: solid 1px #f1f1f1;"><img width="15" style="border-bottom: solid 1px #f1f1f1; width:20px; cursor: pointer;" src="../../../assets/img/bookmark_marked.png" id="markIt_" ></td><td style="padding: 15px; ">علامة استعلم تدريبية</td></tr></table></div>';
	//optionsTabs+='<div id="optionCards" class="optionItem"></div>';
	optionsTabs += '<div id="optionQuestions" class="optionItem"><div style="margin-top: 10px; padding: 15px; background: #f2f2f2;">تمارين الدرس<div  style="float: left; text-align: center; font-size: 19px; background: #006699;  width: 200px;  color: #fff;pointer:cursor;display:none;" id="examResult"></div></div><div id="qContainer"></div></div>';
	optionsTabs += `
	<div id="optionExams" class="optionItem">
	  <div style="margin-top: 10px; padding: 15px; background: #f2f2f2;">
		الواجبات
		<div style="float: left; text-align: center; font-size: 19px; background: #006699; height: 25px; width: 200px; line-height: 20px; color: #fff;pointer:cursor;display:none;" id="examResult"></div>
	  </div>
	  <div id="qContainer">
		<table class="table table-bordered table-striped">
		  <thead class="thead-dark">
			<tr>
			  <th scope="col">العنوان</th>
			  <th scope="col">تاريخ الانتهاء</th>
			  <th scope="col">الدرجة</th>
			  <th scope="col">الحالة</th>
			</tr>
		  </thead>
		  <tbody id="examTableBody">
			
		  </tbody>
		</table>
	  </div>
	</div>`;
	optionsTabs += '</div>';
	optionsTabs += '</div>';
	$('body').append(optionsTabs);

	var footerMarked = '<div id="bookMark"><img style="width:20px;cursor: pointer;" src="../../../assets/img/bookmark.png" id="markIt"><img style="width:30px;display:none;cursor: pointer;" src="../../../assets/img/bookmark_marked.png" id="un_markIt"></div>';
	var pages_nav = '<div id="footer_pages" style="float:right;margin-right:60px;width:200px;"><table><tr><td><img src="../../../assets/img/chevron-left.svg" class="bi arrow" style="font-size: 36px;margin-left: -29px;float: left;margin-top: -12px;cursor: pointer;" id="back_page" /></td><td><input type="text" value="' + configData.page + '" id="pageText" style=" border: solid 1px #a1a1a1; border-radius: 5px; padding: 4px; width:23px; text-align: center;"></td><td> / ' + pagesNum + '</td><td><img src="../../../assets/img/chevron-right.svg" class="bi arrow" style="font-size: 36px;float: left;margin-top: -12px;    cursor: pointer; margin-left: 1px;" id="next_page" /> </td></tr></table></div>';
	var htmlFooter = '<div id="footer">' + footerMarked + pages_nav + '</div>';
	$('body').append(htmlFooter);

	var optionsSearch = '<div id="optionsSearch" class="optionBox"><h3>بحث</h3> <img src="../../../assets/img/x-close.svg" >';
	optionsSearch += '<input type="text" id="searchBox" placeholder="البحث عن" > ';
	optionsSearch += '<div id="searchResult"></div></div>';
	$('body').append(optionsSearch);
	$('body').append('<div style=""><textarea id="selectionText"></textarea></div>');
	//$("#page-container").bind("mouseup", function() {
	$('.pf').on('click', function () {
		//$('.selectedText').removeClass('selectedText');
	});
	$('.pf').bind("mouseup", function () {
		var selectedText = x.Selector.getSelected();

		if (selectedText != '') {
			console.log(selectedText);
			$('#selectionText').html(getTextFromHtml(getSelectionHtml()));//.select();



			// console.log(getSelectionHtml());

			var totalhieght = pageY + 300;
			if (window.innerHeight < totalhieght) {
				$('ul.tools').css({
					'left': pageX + 5,
					'top': pageY - 300
				}).fadeIn(200);
			}
			else {
				$('ul.tools').css({
					'left': pageX + 5,
					'top': pageY - 55
				}).fadeIn(200);
			}
		} else {
			$('ul.tools').fadeOut(200);
			$('.selectedText').removeClass('selectedText');
		}
		$(document).on('click', function (event) {
			if (!$(event.target).closest('.tools').length && !$(event.target).closest('.pf').length) {
				$('ul.tools').fadeOut(200);
			}
		});

		// Hide the context menu when clicking on an <li> item
		$('ul.tools li').on('click', function () {
			$('ul.tools').fadeOut(200);
		});

	});

	$('#addNoteBtn').on('click', function () {
		sideBarStatus = 0;
		showHideSideBar();
		$('#noteBoxHtml').css('display', 'none');
		setNote();
	});
	$('#noteBoxHtml img').on('click', function () {
		showHideSideBar();
		$('#noteBoxHtml').css('display', 'none');
	});
	$('#tab2').on('click', function () {
		getAllNotes();
	});
	$('#tab3').on('click', function () {
		getAllBookMarks();
	});
	$('#tab6').on('click', function () {
		getAllQuestions();
	});
	$('#tab1').on('click', function () {
		getAllHighlight('importantHighlight');
	});
	$('#tab5').on('click', function () {
		getAllVideos();
	});
	$(document).on("mousedown", function (e) {
		pageX = e.pageX;
		pageY = e.pageY;
	});
	$('.l').each(function () {
		// alert('test')
		var cId = $(this).attr('href');
		cId = cId.replace('#', '');
		console.log('value is : ' + cId)
		$(this).attr('href', 'javascript:;');
		$(this).attr('page', $('#' + cId).index());
		$(this).attr('data-dest-detail', '');
	});
	$('#addNewNote').on('click', function () {
		showAddNoteBox();
	});
	$('#pageText').on('change', function () {
		$('.pf').css('display', 'none');
		$('.pf').eq(parseInt($('#pageText').val())).css('display', 'block');
		chekIsBookMark();
	});


	const flipSound = document.getElementById('flip-sound');
	$('#next_page').on('click', function () {
		$('.pf').css('display', 'none');
		$('.pf').eq(parseInt($('#pageText').val()) + 1).css('display', 'block').addClass('flip').removeClass('reverse-flip');
		$('#pageText').val(parseInt($('#pageText').val()) + 1);
		$('#pageText').change();
		const flipSound = document.getElementById('flip-sound');
		flipSound.play();
	});
	$('#back_page').on('click', function () {
		$('.pf').css('display', 'none');
		$('.pf').eq(parseInt($('#pageText').val()) - 1).css('display', 'block').removeClass('flip').addClass('reverse-flip');
		$('#pageText').val(parseInt($('#pageText').val()) - 1);
		$('#pageText').change();
		const flipSound = document.getElementById('flip-sound');
		flipSound.play();
	});
	$('.l').click(function (event) {
		var c_page = $(this).attr('page');
		$('.pf').css('display', 'none');
		$('.pf').eq(c_page).css('display', 'block').addClass('flip').removeClass('reverse-flip');;
		// Set the zoom value based on the global zoom setting
		applyZoomToPage($('.pf').eq(c_page));

		$('#pageText').val(c_page);
		$('#pageText').change();
		const flipSound = document.getElementById('flip-sound');
		flipSound.play();
	});
	$('#optionCopy').click(function () {

		// $('#selectionText').select();
		// document.execCommand('copy');


		var copyText = document.getElementById("selectionText");

		// Select the text field
		copyText.select();
		copyText.setSelectionRange(0, 99999); // For mobile devices

		// Copy the text inside the text field
		navigator.clipboard.writeText(copyText.value).then(function () {
			// Success
			//alert("Copied the text: " + copyText.value);
		}).catch(function (error) {
			// Error
			//alert("Error copying text: " + error);
		});

	});

	// $('#optionWikipedia').click(function () {
	// 	var text = $('#selectionText').val();
	// 	text = text.replace(" ", "_");
	// 	window.open('https://ar.wikipedia.org/wiki/' + text, '_blank');
	// });
	// $('#optionGoogle').click(function () {
	// 	var text = $('#selectionText').val();
	// 	text = text.replace(" ", "+");
	// 	window.open('https://www.google.com/search?q=' + text, '_blank');
	// });

	// <script>
	$('#optionWikipedia').click(function () {
		var text = $('#selectionText').val();
		text = text.replace(" ", "_");
		var url = 'https://ar.wikipedia.org/wiki/' + text;
		$('#wikipediaFrame').attr('src', url);
		$('#wikipediaModal').modal('show');
	});

	$('#optionGoogle').click(function () {
		var text = $('#selectionText').val();
		text = text.replace(" ", "+");
		var url = 'https://www.bing.com/search?q=' + text;
		$('#googleFrame').attr('src', url);
		$('#googleModal').modal('show');
	});


	$('#searchBox').on('keyup', function () {
		var searchText = $('#searchBox').val();
		searchText = searchText.split(" ");
		$('#searchResult').empty();
		$(searchText).each(function (key, value) {
			$('#searchResult').append('<h4>' + value + '</h4>');
			var resultOptions = '';
			$('.searchRes').removeClass('searchRes');
			$('.t span').each(function () {
				var cText = $(this).html();
				cText = $.trim(cText);
				if (cText == value) {
					// Add the 'searchRes' class
					// $(this).addClass('searchRes');
					$(this).closest('.t').addClass('searchRes');
					// Select the parent element and check its data-page-no attribute
					var parentElement = $(this).closest('[data-page-no]');
					if (parentElement.length > 0) {
						var cPageNumber = parentElement.attr('data-page-no');
						// alert(cPageNumber);  // Alert the page number to debug
					} else {
						console.error("Parent element with 'data-page-no' not found.");
					}

					var cIndex = $(this).index();
					var finalText = $(this).prev().prev().html() + ' ' + $(this).prev().html() + ' ' + cText + ' ' + $(this).next().html() + ' ' + $(this).next().next().html();
					finalText = stripTags(finalText);

					// Handle other replacements for special characters
					finalText = finalText.replace(/["“'']/g, '');

					if (cPageNumber) {
						resultOptions += '<li onclick=\"showSearchReasult(\'' + finalText + '\', \'' + cPageNumber + '\')\">' + finalText + '</li>';
					}
				}
			});

			if (resultOptions == '') {
				resultOptions += '<li>No match</li>';
			}
			$('#searchResult').append('<ul>' + resultOptions + '</ul><br/>');

		});
	});
	$('#searchOption').on('click', function () {

		sideBarStatus = 1;
		showHideSideBar();
		$('#optionsSearch').css('display', 'block');

	});

	$('#optionsSearch img').on('click', function () {
		showHideSideBar();
		$('#optionsSearch').css('display', 'none');
	});

	$('#allOptions').on('click', function () {

		sideBarStatus = 1;
		showHideSideBar();
		if (document.getElementById("optionsTabs").style.display == "block") {
			$('#optionsTabs').css('display', 'none');
		}
		else {
			$('#optionsTabs').css('display', 'block');
		}
		$('#tab6').click();


	});

	$('#optionsTabs img').on('click', function () {
		showHideSideBar();
		$('#optionsTabs').css('display', 'none');
	});

	$('#markIt').on('click', function () {
		$('#un_markIt').css('display', 'block');
		$('#markIt').css('display', 'none');
		setBookMark();
	});
	$('#un_markIt').on('click', function () {
		$('#markIt').css('display', 'block');
		$('#un_markIt').css('display', 'none');
		unSetBookMark();
	});

	$('.highlightItem').on('click', function () {
		// $('.m203').insertAfter('<div style="background-color: #FFEB3B;">');
		// $('.m203').insertBefore('</div>');
		// console.log(selectionArray[0]);
		// console.log(selectionArray[selectionArray.length-1]);
		// $('.m203').insertBefore('</div>');
		// insertAfter($('.m203'), '<div style="background-color: #FFEB3B;">');
		// insertBefore($('.m203'), '</div>');
		var cClass = $(this).attr('color');
		var mergeClass = '';
		var newClass = '';
		console.log(cClass);
		$(selectionArray).each(function (key, value) {

			mergeClass = '.' + value.seconde + '.' + value.first;
			newClass = cClass + 'Highlight';
			$(mergeClass).addClass(newClass);

		});

		if (mergeClass != '') {
			saveHighLight(mergeClass, newClass);
		}


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
	function getSelectionsClasses(selectedText) {
		selectionArray = [];
		var count = 0;
		$(selectedText).find('div').each(function () {
			var cClass = $(this).attr('class');
			if (cClass != '') {
				var allClasses = cClass.split(" ");
				$('.' + allClasses[1]).addClass('selectedText');
				selectionArray[count] = { first: allClasses[1], seconde: allClasses[2] };//allClasses[1];
				count--;

			}

		});
		console.log(selectionArray);
	}

	function getTextFromHtml(selectedText) {
		var div = document.createElement("div");
		div.innerHTML = selectedText;
		var text = div.textContent;//|| div.innerText || "";
		return text;
	}




});

function takeScreenshotWithDimensions(x, y, width, height) {
	html2canvas(document.body, {
		x: x,
		y: y,
		width: width,
		height: height
	}).then(function (canvas) {
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


//--------------------------------------------------------------------------------------
//-----------------API Part------------------------------------------------------------
getHighLight();
function getHighLight() {
	$.ajax({
		url: configData.reader + '/api/getHighlight',
		type: 'POST',
		data: JSON.stringify({
			user_id: user_id,
			book_id: configData.book,
			fn: 1,
			source_id: configData.source

		}),
		contentType: 'application/json',
		success: function (response) {
			$(response.data).each(function () {
				var mergeClass = this.div;
				var newClass = this.color;
				$(mergeClass).addClass(newClass);

			});
		},
		error: function (xhr, status, error) {
			// alert('An error occurred while creating the highlight color.');
			console.log(xhr.responseText);
		}
	});
}
function saveHighLight(div, color) {
	$.ajax({
		url: configData.reader + '/api/setHighlight',
		type: 'POST',
		data: JSON.stringify({
			user_id: user_id,
			book_id: configData.book,
			color: color,
			source_id: configData.source,
			str: $('#selectionText').val(),
			page: $('#pageText').val(),
			div: div
		}),
		contentType: 'application/json',
		success: function (response) {
			// alert('Highlight color created successfully!');
			// console.log(response);
		},
		error: function (xhr, status, error) {
			// alert('An error occurred while creating the highlight color.');
			console.log(xhr.responseText);
		}
	});
}

function setBookMark() {
	$.ajax({
		url: configData.reader + '/api/setBookMark',
		type: 'POST',
		data: JSON.stringify({
			user_id: user_id,
			book_id: configData.book,
			source_id: configData.source,
			page: $('#pageText').val()
		}),
		contentType: 'application/json',
		success: function (response) {
			// alert('Highlight color created successfully!');
			// console.log(response);
		},
		error: function (xhr, status, error) {
			// alert('An error occurred while creating the highlight color.');
			console.log(xhr.responseText);
		}
	});
}
function unSetBookMark() {
	$.ajax({
		url: configData.reader + '/api/unSetBookMark',
		type: 'POST',
		data: JSON.stringify({
			user_id: user_id,
			book_id: configData.book,
			source_id: configData.source,
			page: $('#pageText').val()
		}),
		contentType: 'application/json',
		success: function (response) {
			// alert('Highlight color created successfully!');
			// console.log(response);
		},
		error: function (xhr, status, error) {
			// alert('An error occurred while creating the highlight color.');
			console.log(xhr.responseText);
		}
	});
}
function chekIsBookMark() {
	$.ajax({
		url: configData.reader + '/api/chekIsBookMark',
		type: 'POST',
		data: JSON.stringify({
			user_id: user_id,
			book_id: configData.book,
			source_id: configData.source,
			// page: $('#pageText').val()
			page: 7
		}),
		contentType: 'application/json',
		success: function (response) {
			if (response.marked == 1) {
				$('#un_markIt').css('display', 'block');
				$('#markIt').css('display', 'none');
			} else {
				$('#markIt').css('display', 'block');
				$('#un_markIt').css('display', 'none');
			}
			// alert('Highlight color created successfully!');
			// console.log(response);
		},
		error: function (xhr, status, error) {
			// alert('An error occurred while creating the highlight color.');
			console.log(xhr.responseText);
		}
	});
}

function setNote() {
	$.ajax({
		url: configData.reader + '/api/setNote',
		type: 'POST',
		data: JSON.stringify({
			user_id: user_id,
			book_id: configData.book,
			source_id: configData.source,
			page: $('#pageText').val(),
			note: $('#noteInput').val()
		}),
		contentType: 'application/json',
		success: function (response) {

		},
		error: function (xhr, status, error) {
			// alert('An error occurred while creating the highlight color.');
			console.log(xhr.responseText);
		}
	});
}
function getAllNotes() {
	$.ajax({
		url: configData.reader + '/api/getNotes',
		type: 'POST',
		data: JSON.stringify({
			user_id: user_id,
			book_id: configData.book,
			source_id: configData.source
		}),
		contentType: 'application/json',
		success: function (response) {
			$('#notesTable').empty();
			$(response.notes).each(function () {
				var page = this.page;
				var note = this.note;
				$('#notesTable').append('<tr><td align="left" style="border-bottom: solid 1px #f1f1f1;"><span width="15" style="border-bottom: solid 1px #f1f1f1; width:20px; cursor: pointer;" onclick="gotToPage(' + page + ')">صفحة ' + page + '</span></td><Td align="left" style="border-bottom: solid 1px #f1f1f1;"></td><td  style="border-bottom: solid 1px #f1f1f1; padding: 15px; "><span  onclick="gotToPage(' + page + ')"  style="cursor: pointer;">' + note + '</span></td></tr>');

			});

		},
		error: function (xhr, status, error) {
			// alert('An error occurred while creating the highlight color.');
			console.log(xhr.responseText);
		}
	});
}
function getAllBookMarks() {
	$.ajax({
		url: configData.reader + '/api/getAllBookmarks',
		type: 'POST',
		data: JSON.stringify({
			user_id: user_id,
			book_id: configData.book,
			source_id: configData.source
		}),
		contentType: 'application/json',
		success: function (response) {
			$('#BookMarksTable').empty();
			$(response.bookmarks).each(function () {
				var page = this.page;
				$('#BookMarksTable').append('<tr><Td align="left" style="border-bottom: solid 1px #f1f1f1;"><img width="15" style="width:20px; cursor: pointer;" onclick="gotToPage(' + page + ')" src="../../../assets/img/bookmark_marked.png" id="un_markIt_" ></td><td  style="border-bottom: solid 1px #f1f1f1; padding: 15px; ">' + page + 'صفحة رقم</td></tr>');

			});

		},
		error: function (xhr, status, error) {
			// alert('An error occurred while creating the highlight color.');
			console.log(xhr.responseText);
		}
	});
}
function getAllVideos() {
	$.ajax({
		url: configData.reader + '/api/getVideos',
		type: 'POST',
		data: JSON.stringify({
			user_id: user_id,
			book_id: configData.book,
			source_id: configData.source,
			page: $('#pageText').val()
		}),
		contentType: 'application/json',
		success: function (response) {
			$('#VideosTable').empty();
			$(response.videos).each(function () {
				var title = this.title;
				var url = this.url;

				$('#VideosTable').append('<tr class="video-item"><Td style="border-bottom: solid 1px #f1f1f1;"><video width="320" height="120" controls><source src="' + url + '" type="video/mp4">Your browser does not support the video tag.</video></td><td  style="padding: 15px 0;font-size: 15px;color: #222; ">' + title + '</td></tr>');

			});

		},
		error: function (xhr, status, error) {
			// alert('An error occurred while creating the highlight color.');
			console.log(xhr.responseText);
		}
	});
}

function getAllQuestions() {
	$('#examResult').empty();
	$('#examResult').css('display', 'none');
	$.ajax({
		url: configData.reader + '/api/getQuestions',
		type: 'POST',
		data: JSON.stringify({
			user_id: user_id,
			book_id: configData.book,
			source_id: configData.source,
			page: $('#pageText').val()
		}),
		contentType: 'application/json',
		success: function (response) {
			$('#qContainer').empty();
			var count = 1;
			var qHtml = '';
			var length = response.questions.length;
			$(response.questions).each(function () {
				var question = this.question;
				var answers = this.answers;
				var true_answer = this.true_answer;
				qHtml += '<div class="q_' + count + ' question"><h1>' + question + '</h1>';
				var answers = JSON.parse(answers);

				// Use $.each to iterate over the object
				$.each(answers, function (key, value) {
					var is_true = 0;
					if (key == true_answer) {
						is_true = '1';
					}
					qHtml += '<div class="q_a">' + value + '<input type="radio" name="q_' + count + '" class="a_' + count + '" a="' + is_true + '"></div>';
				});
				qHtml += '</div>';
				count++;
			});
			if (qHtml != '') {
				qHtml += '<br/><input type="button" id="submitExam" onclick="submitExam();" c="' + length + '" style="" value="ارسال">';

			} else {
				qHtml += '<br/><p style="text-align:center">لا يوجد تمارين لهذا الدرس.</p>';
			}
			$('#qContainer').html(qHtml);
			//        	$('#VideosTable').empty();
			//        	$(response.videos).each(function(){
			//            	var title = this.title;
			//            	var url = this.url;

			// $('#VideosTable').append('<tr><Td align="left" style="border-bottom: solid 1px #f1f1f1;"><video width="320" height="120" controls><source src="http://localhost/video/IMG_0.MOV" type="video/mp4">Your browser does not support the video tag.</video></td><td  style="border-bottom: solid 1px #f1f1f1; padding: 15px; ">'+title+'</td></tr>');

			//            });

		},
		error: function (xhr, status, error) {
			// alert('An error occurred while creating the highlight color.');
			console.log(xhr.responseText);
		}
	});
}

function submitExam() {
	$('#examResult').empty();
	var total = $('#submitExam').attr('c');
	var degree = 0;
	for (var i = 1; i <= total; i++) {
		$('.a_' + i).each(function () {
			//console.log(this);
			var a = $(this).attr('a');

			if ($(this).is(':checked')) {
				console.log(a);
				if (a == '1') {
					degree++;
				}
			} else {
				if (a == '1') {
					$(this).parent().addClass('correct-answer');
				}
			}

		});
	}
	$('#examResult').html('درجتك ' + degree + '/' + total);
	$('#examResult').css('display', 'block');
}
function getAllHighlight(color) {
	$.ajax({
		url: configData.reader + '/api/getHighlight',
		type: 'POST',
		data: JSON.stringify({
			user_id: user_id,
			book_id: configData.book,
			source_id: configData.source,
			fn: 2,
			color: color
		}),
		contentType: 'application/json',
		success: function (response) {
			$('#highlightTable').empty();
			$(response.data).each(function () {
				var page = this.page;
				var str = this.str;


				$('#highlightTable').append('<tr style="padding: 5px;"><td style="margin: 10px; padding: 15px; border-right: 5px solid rgb(0, 150, 136); text-align: right;cursor:pointer" onclick="gotToPage(' + page + ')">' + str + '</td></tr>');

			});

		},
		error: function (xhr, status, error) {
			// alert('An error occurred while creating the highlight color.');
			console.log(xhr.responseText);
		}
	});
}
function stripTags(html) {
	var tmp = document.createElement("DIV");
	tmp.innerHTML = html;
	return tmp.textContent || tmp.innerText || "";
}

function speak(text) {
	responsiveVoice.speak(text, "Arabic Female");
}

function ask() {
	var question = $('#question').val();
	$.ajax({
		url: configData.reader + '/api/ask',
		type: 'POST',
		data: {
			question: 'ما هى الجاذبية'
		},
		success: function (response) {
			$('#response').text(response.choices[0].text);
		},
		error: function (error) {
			console.error(error);
			$('#response').text('An error occurred.');
		}
	});
}
function getCookie(name) {
	let cookieArr = document.cookie.split(";");

	for (let i = 0; i < cookieArr.length; i++) {
		let cookiePair = cookieArr[i].split("=");

		// Remove whitespace at the beginning of the cookie name and compare it with the given name
		if (name == cookiePair[0].trim()) {
			// Decode the cookie value and return
			return decodeURIComponent(cookiePair[1]);
		}
	}
	// Return null if not found
	return null;
}
function gotToPage(c_page) {
	$('.pf').css('display', 'none');
	$('.pf').eq(c_page).css('display', 'block');
	// Apply zoom when the page changes
	applyZoomToPage($('.pf').eq(c_page));

	$('#pageText').val(c_page);
	$('#pageText').change();
}

// Helper function to apply the zoom to the current page
function applyZoomToPage(pageElement) {
	var zoomScale = Number(currentZoomVal) / 10 + 1;
	setZoom(zoomScale, pageElement[0]);  // Apply the zoom scale
}

//--------------------------------------------------------------------------------------





$('.rvTextRow strong').text('Scientific Thought');


  function toggleActive(element) {
    // Remove the 'active' class from all spans with the 'highlightItem' class
    var highlightItems = document.querySelectorAll('.highlightItem');
    highlightItems.forEach(function(item) {
      item.classList.remove('active');
    });

    // Add the 'active' class to the clicked element
    element.classList.add('active');
  }



  $(document).on('click', '#speakButton', function() {
	// Function to get selected text
	function getSelectedText() {
	  let selectedText = '';
	  if (window.getSelection) {
		selectedText = window.getSelection().toString(); // Get the selected text
	  }
	  return selectedText;
	}

	// Get the selected text
	const text = getSelectedText();
	
	// Check if text is selected
	if (text.trim() === "") {
	  alert('Please select some text to speak.');
	} else {
	  // Speak the selected text in Arabic
	  responsiveVoice.speak(text, "Arabic Male", { rate: 1 });
	  $('ul.tools').fadeOut(200);
	}
  });


  window.addEventListener("load", function () {
	// Hide the loader after the page is fully loaded
	document.getElementById("loader").style.display = "none";
});