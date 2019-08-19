function resultAll(keyword, currentPage, rowCnt) {	//현재페이지, 출력 데이터 수
	var index = "all";
	
	$.ajax({
		  url: "http://192.168.0.3:19200/gateway/search", // 요청 할 주소
		  async: true, // false 일 경우 동기 요청으로 변경
		  type: 'POST', // GET, PUT
		  dataType: "json",
		  data: { 
				"index" : index,
				"keyword" : keyword,
				"from" : currentPage,
				"size" : rowCnt
		  	},
		  success: function(result) {

			  $('.content_div.result .doc_div').remove();
			  
			  let iso = result[0];
			  let sug = result[1];
			  let allTotal = 0;
			  let print = '';
			  
			  // iso
			  let total = iso.total;
			  if(total !== 0){
				  allTotal += total;
				  let index = iso.index;
				  let item = iso.item;
				  print = '<div class="doc_div">';
				  item.forEach(function(val, idx){
					  if(idx === 0){
						  print += `
							  <div class="result_type_div">
							  <div class="type_txt">${index}(${total})</div>
							  </div>
							  `;
					  }
					  print += `
						  <div class="doc_box">
						  <div class="doc_title">${val.subject}</div>
						  <div class="doc_prev">${val.content}</div>
						  <div class="doc_elem_div">
						  <span class="doc_info"><em>표준번호</em>${val.isono}</span>
						  <span class="doc_info"><em>생성일</em>${val.rdate}</span>
						  <span class="doc_info"><em>생성자</em>${val.enactor1}, ${val.enactor2}</span>
						  <span class="doc_info"><em>사업장</em>${val.location}</span>
						  <span class="doc_info"><em>제/개정부서</em>${val.enactdeptname}</span>
						  <span class="doc_btn prev_doc">미리보기</span>
						  <span class="doc_btn dupl_doc">중복문서(3)</span>
						  </div>
						  <span class="doc_dir">${val.largegcodename} > ${val.middlecodename}</span>
						  </div>
						  `;
				  });
				  print += '</div>';
			  }

			  // sug
			  total = sug.total;
			  if(total !== 0){
				  allTotal += total;
				  index = sug.index;
				  item = sug.item;			  
				  print += '<div class="doc_div">';
				  item.forEach(function(val, idx){
					  if(idx === 0){
						  print += `
							  <div class="result_type_div">
							  <div class="type_txt">${index}(${total})</div>
							  </div>
							  `;
					  }
					  print += `
						  <div class="doc_box">
						  <div class="doc_title">${val.subject}</div>
						  <div class="doc_prev">${val.content}</div>
						  <div class="doc_elem_div">
						  <span class="doc_info"><em>제안번호</em>${val.docid}</span>
						  <span class="doc_info"><em>제안등급</em>${val.gradecodename}</span>
						  <span class="doc_info"><em>제안종류</em>${val.typecodename}</span>
						  <span class="doc_info"><em>제안부분</em>${val.sectioncodename}</span>
						  <span class="doc_info"><em>출원부서</em>${val.submitdeptname}</span>
						  <span class="doc_info"><em>주제안자</em>${val.writer}</span>
						  <span class="doc_btn dupl_doc">미리보기</span>
						  <span class="doc_btn prev_doc">중복문서(3)</span>
						  </div>
						  </div>
						  `;
				  });
				  print += '</div>';
			  }
			  
			  // 검색결과 없을 경우 
			  if(allTotal===0){
				  $(".result_txt").html(`<em id="query">"${keyword}"</em>에 대한 검색 결과는 <em id="total">${total}건</em>입니다.`);
				  $(".info_highlight").remove();
				  $(".result_div").show();
				  return;
			  }else{
				  $("#query").text(`"${keyword}"`);
				  $("#total").text(`${allTotal}건`);
				  $(".result_div").show();				  
			  }
			  
			  // requery
			  //  결과 중 <em id="requery">"필름"</em>을 포함한 상세검색어에 대한
			  
			  // print result 
			  $(".result_div").after(print);
			  $(".paging_div").show();
		  },
		  error: function(e) {
			  console.log(e);
		  }
	});
	
}