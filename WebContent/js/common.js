//JavaScript Document
$(document).ready(function() {
   
	// datepicker
    $("#startDate").datepicker({
        dateFormat: 'yy.mm.dd',
        monthNames: [ "01","02","03","04","05","06","07","08","09","10","11","12" ],
        monthNamesShort: [ "01","02","03","04","05","06","07","08","09","10","11","12" ],
        dayNames: ['일','월','화','수','목','금','토'],
        dayNamesShort: ['일','월','화','수','목','금','토'],
        dayNamesMin: ['일','월','화','수','목','금','토'],
        showMonthAfterYear:true,
        changeMonth: true, 
        changeYear: true,
        maxDate: new Date(),
        onClose: function( selectedDate ) {
        	$("#endDt").datepicker("option", "minDate", selectedDate );
        }
    });
	$("#endDate").datepicker({
        dateFormat: 'yy.mm.dd',
        monthNames: [ "01","02","03","04","05","06","07","08","09","10","11","12" ],
        monthNamesShort: [ "01","02","03","04","05","06","07","08","09","10","11","12" ],
        dayNames: ['일','월','화','수','목','금','토'],
        dayNamesShort: ['일','월','화','수','목','금','토'],
        dayNamesMin: ['일','월','화','수','목','금','토'],
        showMonthAfterYear:true,
        changeMonth: true, 
        changeYear: true,
        maxDate: new Date(),
        onClose: function( selectedDate ) {
            $("#startDt").datepicker( "option", "maxDate", selectedDate );
        }  
    });
	
   // 검색 버튼 클릭
    $('.search_btn').click(function() {
       search();
    });

    // 검색어 입력창 엔터
    $('.search_input').keydown(function(key) {
        if (key.keyCode == 13) {
           search();
        }
    });
    
    // 검색 사용방법 모달창 닫기
    $('.m_info_close').click(function() {
       $('.modal.dark_layer').hide();
    });
    
    // 도움말 클릭 시 검색 사용방법 모달창 오픈
    $('.help_icon').click(function() {
       $('.modal.dark_layer').show();
    });
    
    
    // 검색조건 - 문서종류 (전체 혹은 개별 문서종류 선택) 
    $('#fileAll').click(function(){
    	if ( $('#fileAll').is(':checked') ){
    		for(let i=1; i<7; i++){
    			$('#file0'+i).prop('checked', true);
    		}
    	}else{
    		for(let i=1; i<7; i++){
    			$('#file0'+i).prop('checked', false);
    		}    	
    	}
    });
    for(let i=1; i<7; i++){
    	$('#file0'+i).click(function(){
        	if( $('#file0'+i).is(':checked') === false ){
        		$('#fileAll').prop('checked', false);
        	}    		
    	});
	}
    
    
});


// 현재 카테고리 선택
function setCollection(coll) {
	// 이전결재문서, 파일 탭은 사용자의 권한에 따라 보일 수도 안보일 수도 있음
	// 총 탭 10개
	// 컬렉션 버튼 이미지 초기화
	for (i = 1;i < 9 ;i++) {
		$('#collection0' + i).parent().attr('class','menu_btn');
	}
	
	var cnhClass = 'selected_menu_btn';

	// 컬렉션 버튼 선택
	if (coll == "01") { // 통합검색 
		$('#collection01').parent().attr('class',cnhClass);
		$("#collection").val(coll);
		
	} else if (coll == '02') { // 시큐어디스크 
		$('#collection02').parent().attr('class',cnhClass);
		$("#collection").val(coll);
		
	} else if (coll == '03') { // 전자결재 
		$('#collection03').parent().attr('class',cnhClass);
		$("#collection").val(coll);
		
	} else if (coll == '04') { // ISO
		$('#collection04').parent().attr('class',cnhClass);
		$("#collection").val(coll);
		
	} else if (coll == '05') { // 분임조 
		$('#collection05').parent().attr('class',cnhClass);
		$("#collection").val(coll);
		
	} else if (coll == '06') { // 제안 
		$('#collection06').parent().attr('class',cnhClass);
		$("#collection").val(coll);
		
	} else if (coll == '07') { // 이전전자결재 
		$('#collection07').parent().attr('class',cnhClass);
		$("#collection").val(coll);
		
	} else if (coll == '08') { // 파일서버 
		$('#collection08').parent().attr('class',cnhClass);
		$("#collection").val(coll);
		
	}
	search();
}

// 검색
function search() { 
	
	// 검색어 가져오기
   var keyword = $('.search_input').val().replace(/ /g, '');
   
   // 검색어 없을 때 검색 사용방법 화면 이동
   if (!keyword) {
      $('.content_div.result').hide();
      $('.content_div.non_result').show();
      return;
   }
   else {
      $('.content_div.non_result').hide();
      $('.content_div.result').show();
   }

	// IE keyword 한글 깨짐 문제로 강제 인코딩 처리
	// keyword = encodeURIComponent(keyword);
	
	var currentPage = 0; // 현재 페이지 
	var printCnt = 10; // 출력 데이터 수 
	
	var coll = $('#collection').val(); // 메뉴
	
	if(coll == '01') { // 통합검색 
		resultAll(keyword, currentPage, 3);
		
	} else if(coll == '02') { // 시큐어디스크 
		resultSecuredisk(keyword, currentPage, printCnt);
		
	} else if(coll == '03') { // 전자결재 
	
	} else if(coll == '04') { // ISO
	
	} else if(coll == '05') { // 분임조 
	
	} else if(coll == '06') { // 제안 
		
	} else if(coll == '07') { // 이전전자결재 
	
	} else if(coll == '08') { // 파일서버 
	
	}
}


/**
 * 검색 조건 - 결과정렬, 기간검색, 검색영역, 문서종류 
 */

// 결과정렬 
function setSort(num){
	// console.log(num);
	$('#sort').val(num);
	for(let i = 1; i < 3; i++){
		$("#sort0"+i).attr('class', '');
	}
	$('#sort'+num).attr('class', 'sel');
	
	search();
}

// 기간검색 
function setDate(num){
	
	let startDate = ""; // 시작일 
	let endDate = ""; // 마감일 
	
	let currentDate = new Date(); // 현재 시각
	
	let year = currentDate.getFullYear(); // 년도 
	let month = currentDate.getMonth() +1; // 월  
	let day = currentDate.getDate(); // 일 
	
	
	if (parseInt(month) < 10) { // 월 2자리수 통일 
		month = "0" + month;
	}
	if (parseInt(day) < 10) { // 일 2자리수 통일 
		day = "0" + day;
	}
	
	
	let toDate = year + "-" + month + "-" + day;
	
	// 검색영역 버튼 초기화 
	for (i = 1;i < 7 ;i++) {
		$('#date0' + i).attr('class','');
	}
	
	let cnhClass = "sel";
	
	// 검색영역 버튼 선택	
	switch(num){
		case '01':
			$('#date01').attr('class',cnhClass);
			
			break;
		case '02':
			startDate = getAddDay(currentDate, -0); // 1일 
			console.log(startDate);
			$('#date02').attr('class',cnhClass);
			
			break;
		case '03':
			startDate = getAddDay(currentDate, -6); // 1주 
			$('#date03').attr('class',cnhClass);

			break;
		case '04':
			startDate = getAddDay(currentDate, -29); // 1개월 
			$('#date04').attr('class',cnhClass);

			break;
		case '05':
			startDate = getAddDay(currentDate, -365); // 1년 
			$('#date05').attr('class',cnhClass);

			break;
		case '06':
			startDate = $("#startDate").val();
			endDate = $("#endDate").val();
			$('#date06').attr('class',cnhClass); // 직접입력 

			break;
	}	
	
	if (num != "01" && num != "06" && startDate != "") { 
		year = startDate.getFullYear();
		month = startDate.getMonth()+1; 
		day = startDate.getDate();

		if (parseInt(month) < 10) {
			month = "0" + month;
		}

		if (parseInt(day) < 10) {
			day = "0" + day;
		}

		startDate = year + "-" + month + "-" + day;			
		endDate = toDate;
	}
		
	$("#startDate").val(startDate);
	$("#endDate").val(endDate);
	
	search();
}


// 기간검색 - 날짜 계산 
function getAddDay ( targetDate, dayPrefix ){
	
	var newDate = new Date();
	var processTime = targetDate.getTime () + ( parseInt ( dayPrefix ) * 24 * 60 * 60 * 1000 );
	newDate.setTime ( processTime );
	return newDate;
}


// 기간검색 - datepicker 열기 
function openDatepicker() {
	
	for (i = 1;i < 6 ;i++) {
		$('#date0' + i).attr('class','');
	}
	$("#date06").attr('class', 'sel');

}


// 검색영역 
function setField(num){
	$('#field').val(num);
	for(let i = 1; i < 7; i++){
		$("#field0"+i).attr('class', '');
	}
	$('#field'+num).attr('class', 'sel');
	
	search();
}

// 문서종류 [적용] 
function setFile(){
	
	$('#setFile').attr('class', 'sel');
	$('#resetFile').attr('class', '');
	
	let file = '';
	
	if( $('#fileAll').is(':checked') ){
		$('#file').val('all');
	}else{
		for(let i=1; i<7; i++){
			if( $('#file0'+i).is(':checked') ){
				file = file + $('#file0'+i).val() + ' ';
			}
		}
		$('#file').val(file);
	}
	
	search();
}

// 문서종류 [초기화]
function resetFile(){
	
	$('#setFile').attr('class', '');
	$('#resetFile').attr('class', 'sel');
	
	$(".filetype_chk > input").prop("checked", false);
	
}



