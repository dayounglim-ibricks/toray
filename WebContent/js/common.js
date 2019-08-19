//JavaScript Document
$(document).ready(function() {
   
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
    })
    
});

// 현재 카테고리 선택
function setCollection(coll) {
	// 컬렉션 버튼 이미지 초기화
	for (i = 1;i < 9 ;i++) {
		$('#collection0' + i).parent().attr('class','menu_btn');
	}
	
	var cnhClass = "selected_menu_btn";

	// 컬렉션 버튼 선택
	if (coll == "01") { // 통합검색 
		$('#collection01').parent().attr('class',cnhClass);
		$("#collection").val(coll);
		
	} else if (coll == "02") { // 시큐어디스크 
		$('#collection02').parent().attr('class',cnhClass);
		$("#collection").val(coll);
		
	} else if (coll == "03") { // 전자결재 
		$('#collection03').parent().attr('class',cnhClass);
		$("#collection").val(coll);
		
	} else if (coll == "04") { // ISO
		$('#collection04').parent().attr('class',cnhClass);
		$("#collection").val(coll);
		
	} else if (coll == "05") { // 분임조 
		$('#collection05').parent().attr('class',cnhClass);
		$("#collection").val(coll);
		
	} else if (coll == "06") { // 제안 
		$('#collection06').parent().attr('class',cnhClass);
		$("#collection").val(coll);
		
	} else if (coll == "07") { // 이전전자결재 
		$('#collection07').parent().attr('class',cnhClass);
		$("#collection").val(coll);
		
	} else if (coll == "08") { // 파일서버 
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
	
	var coll = $("#collection").val(); // 메뉴
	
	if(coll == "01") { // 통합검색 
		resultAll(keyword, currentPage, 3);
		
	} else if(coll == "02") { // 시큐어디스크 
		resultSecuredisk(keyword, currentPage, printCnt);
		
	} else if(coll == "03") { // 전자결재 
	
	} else if(coll == "04") { // ISO
	
	} else if(coll == "05") { // 분임조 
	
	} else if(coll == "06") { // 제안 
		
	} else if(coll == "07") { // 이전전자결재 
	
	} else if(coll == "08") { // 파일서버 
	
	}
}
