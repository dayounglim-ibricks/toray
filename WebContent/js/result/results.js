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
			  console.log('성공 : ' + JSON.stringify(result));
			  $('.content_div.result .doc_div').remove();
			  
			  // TODO: multi-search 순서 상관없음. object의 index 확인하여 수정 필요 
			  let securedisk = result[0];
			  let app = result[1];
			  let appold = result[2];
			  let iso = result[3];
			  let grp = result[4];
			  let sug = result[5];
			  let file = result[6];
			  // -------------------------------------------------------
			  
			  let allTotal = 0;
			  let print = '';

			  // iso
			  if (iso) {
				  console.log('iso in');
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
			  }

			  // sug
			  if (sug) {
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

// 시큐어디스크
function resultSecuredisk(keyword, currentPage, rowCnt) {   //현재페이지, 출력 데이터 수
   var index = "securedisk";
   var data = {
	   "index" : index,
       "keyword" : keyword,
       "from" : currentPage,
       "size" : rowCnt
   };
   
   var result = JSON.parse(ajaxJson(data));

   $('.content_div.result .doc_div').remove();
   
   // 검색결과 없을 경우 
   let total = result.total;
   if (total == 0) {
	  $(".result_txt").html(`<em id="query">"${keyword}"</em>에 대한 검색 결과는 <em id="total">${total}건</em>입니다.`);
	  $(".info_highlight").remove();
	  $(".result_div").show();
	  return;
   }

   let item = result.item;
   let print = '<div class="doc_div">';
   item.forEach(function(val, idx){
      if(idx === 0){
         print += `
            <div class="result_type_div">
                <div class="type_txt">시큐어디스크(${total}건)</div>
              </div>
         `;
      }
      print += `
              <div class="doc_box">
                <div class="doc_title">${val.subject}</div>
                <div class="doc_prev">${val.content}</div>
                <div class="doc_elem_div">
                  <span class="doc_info"><em>파일크기</em>${val.filesize} Mb</span>
                  <span class="doc_info"><em>생성일</em>${val.rdate}</span>
                  <span class="doc_info"><em>생성자</em>${val.writer}</span>
                  <span class="doc_info"><em>문서종류</em>${val.extension}</span>
                  <span class="doc_btn prev_doc">미리보기</span>
                  <span class="doc_btn dupl_doc">중복문서(3)</span>
                </div>
                <span class="doc_dir">${val.filepath}</span>
              </div>
         `;
   });
   print += '</div>';

   // 검색결과 있을 경우
   $("#query").text(`"${keyword}"`);
   $("#total").text(`${total}건`);
   $(".result_div").show();
	  
   // print result 
   $(".result_div").after(print);
   $(".paging_div").show();
 
  /* $.ajax({
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
           
           // 검색결과 없을 경우 
           let total = result.total;
           if (total == 0) {
			  $(".result_txt").html(`<em id="query">"${keyword}"</em>에 대한 검색 결과는 <em id="total">${total}건</em>입니다.`);
			  $(".info_highlight").remove();
			  $(".result_div").show();
			  return;
           }

           let item = result.item;
           let print = '<div class="doc_div">';
           item.forEach(function(val, idx){
              if(idx === 0){
                 print += `
                    <div class="result_type_div">
                        <div class="type_txt">시큐어디스크(${total}건)</div>
                      </div>
                 `;
              }
              print += `
                      <div class="doc_box">
                        <div class="doc_title">${val.subject}</div>
                        <div class="doc_prev">${val.content}</div>
                        <div class="doc_elem_div">
                          <span class="doc_info"><em>파일크기</em>${val.filesize} Mb</span>
                          <span class="doc_info"><em>생성일</em>${val.rdate}</span>
                          <span class="doc_info"><em>생성자</em>${val.writer}</span>
                          <span class="doc_info"><em>문서종류</em>${val.extension}</span>
                          <span class="doc_btn prev_doc">미리보기</span>
                          <span class="doc_btn dupl_doc">중복문서(3)</span>
                        </div>
                        <span class="doc_dir">${val.filepath}</span>
                      </div>
                 `;
           });
           print += '</div>';

           // 검색결과 있을 경우
           $("#query").text(`"${keyword}"`);
		   $("#total").text(`${total}건`);
		   $(".result_div").show();
			  
           // print result 
           $(".result_div").after(print);
           $(".paging_div").show();
        },
        error: function(e) {
           console.log(e);
        }
   });*/
}

// 전자결재
function resultApp(keyword, currentPage, rowCnt) {   //현재페이지, 출력 데이터 수
   var index = "app";
   
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
           
           // 검색결과 없을 경우 
           let total = result.total;
           if (total == 0) {
			  $(".result_txt").html(`<em id="query">"${keyword}"</em>에 대한 검색 결과는 <em id="total">${total}건</em>입니다.`);
			  $(".info_highlight").remove();
			  $(".result_div").show();
			  return;
           }

           let item = result.item;
           let print = '<div class="doc_div">';
           item.forEach(function(val, idx){
              if(idx === 0){
                 print += `
                    <div class="result_type_div">
                        <div class="type_txt">전자결재(${total}건)</div>
                      </div>
                 `;
              }
              print += `
                      <div class="doc_box">
                        <div class="doc_title">${val.subject}</div>
                        <div class="doc_prev">${val.content}</div>
                        <div class="doc_elem_div">
                          <span class="doc_info"><em>기안일</em>${val.rdate} Mb</span>
                          <span class="doc_info"><em>기안자</em>${val.writer}</span>
                          <span class="doc_info"><em>기안부서</em>${val.writerdeptname}</span>
                        </div>
                      </div>
                 `;
           });
           print += '</div>';

           // 검색결과 있을 경우
           $("#query").text(`"${keyword}"`);
		   $("#total").text(`${total}건`);
		   $(".result_div").show();
			  
           // print result 
           $(".result_div").after(print);
           $(".paging_div").show();
        },
        error: function(e) {
           console.log(e);
        }
   });
}

// 이전결재문서
function resultAppoId(keyword, currentPage, rowCnt) {   //현재페이지, 출력 데이터 수
   var index = "appold";
   console.log('이전결재문서'); // TODO: ajax 실행 안됨
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
           
           // 검색결과 없을 경우 
           let total = result.total;
           if (total == 0) {
			  $(".result_txt").html(`<em id="query">"${keyword}"</em>에 대한 검색 결과는 <em id="total">${total}건</em>입니다.`);
			  $(".info_highlight").remove();
			  $(".result_div").show();
			  return;
           }

           let item = result.item;
           let print = '<div class="doc_div">';
           item.forEach(function(val, idx){
              if(idx === 0){
                 print += `
                    <div class="result_type_div">
                        <div class="type_txt">이전결재문서(${total}건)</div>
                      </div>
                 `;
              }
              print += `
                      <div class="doc_box">
                        <div class="doc_title">${val.subject}</div>
                        <div class="doc_prev">${val.content}</div>
                        <div class="doc_elem_div">
                          <span class="doc_info"><em>기안일</em>${val.rdate} Mb</span>
                          <span class="doc_info"><em>기안자</em>${val.writer}</span>
                          <span class="doc_info"><em>기안부서</em>${val.sosoc}</span>
                        </div>
                      </div>
                 `;
           });
           print += '</div>';

           // 검색결과 있을 경우
           $("#query").text(`"${keyword}"`);
		   $("#total").text(`${total}건`);
		   $(".result_div").show();
			  
           // print result 
           $(".result_div").after(print);
           $(".paging_div").show();
        },
        error: function(e) {
           console.log(e);
        }
   });
}

// ISO
function resultIso(keyword, currentPage, rowCnt) {   //현재페이지, 출력 데이터 수
   var index = "iso";
   
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
           
           // 검색결과 없을 경우 
           let total = result.total;
           if (total == 0) {
			  $(".result_txt").html(`<em id="query">"${keyword}"</em>에 대한 검색 결과는 <em id="total">${total}건</em>입니다.`);
			  $(".info_highlight").remove();
			  $(".result_div").show();
			  return;
           }

           let item = result.item;
           let print = '<div class="doc_div">';
           item.forEach(function(val, idx){
              if(idx === 0){
                 print += `
                    <div class="result_type_div">
                        <div class="type_txt">ISO(${total}건)</div>
                      </div>
                 `;
              }
              print += `
                      <div class="doc_box">
                        <div class="doc_title">${val.subject}</div>
                        <div class="doc_prev">${val.content}</div>
                        <div class="doc_elem_div">
                          <span class="doc_info"><em>제/개정일</em>${val.rdate} Mb</span>
                          <span class="doc_info"><em>개정자1</em>${val.enactor1}</span>
                          <span class="doc_info"><em>사업장</em></span>
            	  		  <span class="doc_info"><em>제/개정부서</em>${val.enactdeptname}(${val.enactdept})</span>
                        </div>
                        <span class="doc_dir">${val.largegcodename} > ${val.middlecodename}</span>
                      </div>
                 `;
           });
           print += '</div>';

           // 검색결과 있을 경우
           $("#query").text(`"${keyword}"`);
		   $("#total").text(`${total}건`);
		   $(".result_div").show();
			  
           // print result 
           $(".result_div").after(print);
           $(".paging_div").show();
        },
        error: function(e) {
           console.log(e);
        }
   });
}

// 분임조(grp)
function resultGrp(keyword, currentPage, rowCnt) {   //현재페이지, 출력 데이터 수
   var index = "grp";
   
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
           
           // 검색결과 없을 경우 
           let total = result.total;
           if (total == 0) {
			  $(".result_txt").html(`<em id="query">"${keyword}"</em>에 대한 검색 결과는 <em id="total">${total}건</em>입니다.`);
			  $(".info_highlight").remove();
			  $(".result_div").show();
			  return;
           }

           let item = result.item;
           let print = '<div class="doc_div">';
           item.forEach(function(val, idx){
              if(idx === 0){
                 print += `
                    <div class="result_type_div">
                        <div class="type_txt">분임조(${total}건)</div>
                      </div>
                 `;
              }
              print += `
                      <div class="doc_box">
                        <div class="doc_title">${val.subject}</div>
                        <div class="doc_prev">${val.content}</div>
                        <div class="doc_elem_div">
                          <span class="doc_info"><em>팀</em>${val.dept2name} Mb</span>
                          <span class="doc_info"><em>분임조</em>${val.teamname}</span>
                          <span class="doc_info"><em>과제유형</em>${val.proj_typename}</span>
		            	  <span class="doc_info"><em>상태</em>${val.improvement_typename}</span>
		            	  <span class="doc_info"><em>진척률</em>${val.avg}%</span>
		            	  <span class="doc_info"><em>우수사례</em></span>
                        </div>
                      </div>
                 `;
           });
           print += '</div>';

           // 검색결과 있을 경우
           $("#query").text(`"${keyword}"`);
		   $("#total").text(`${total}건`);
		   $(".result_div").show();
			  
           // print result 
           $(".result_div").after(print);
           $(".paging_div").show();
        },
        error: function(e) {
           console.log(e);
        }
   });
}

// 제안(sug)
function resultSug(keyword, currentPage, rowCnt) {   //현재페이지, 출력 데이터 수
   var index = "sug";
   
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
           
           // 검색결과 없을 경우 
           let total = result.total;
           if (total == 0) {
			  $(".result_txt").html(`<em id="query">"${keyword}"</em>에 대한 검색 결과는 <em id="total">${total}건</em>입니다.`);
			  $(".info_highlight").remove();
			  $(".result_div").show();
			  return;
           }

           let item = result.item;
           let print = '<div class="doc_div">';
           item.forEach(function(val, idx){
              if(idx === 0){
                 print += `
                    <div class="result_type_div">
                        <div class="type_txt">제안(${total}건)</div>
                      </div>
                 `;
              }
              print += `
                      <div class="doc_box">
                        <div class="doc_title">${val.subject}</div>
                        <div class="doc_prev">${val.content}</div>
                        <div class="doc_elem_div">
                          <span class="doc_info"><em>제안종류</em>${val.typecodename} Mb</span>
                          <span class="doc_info"><em>출원부서</em>${val.submitdeptname}</span>
		            	  <span class="doc_info"><em>실시일자</em>${val.rdate}</span>
		            	  <span class="doc_info"><em>주제안자</em>${val.writer}</span>
                        </div>
                      </div>
                 `;
           });
           print += '</div>';

           // 검색결과 있을 경우
           $("#query").text(`"${keyword}"`);
		   $("#total").text(`${total}건`);
		   $(".result_div").show();
			  
           // print result 
           $(".result_div").after(print);
           $(".paging_div").show();
        },
        error: function(e) {
           console.log(e);
        }
   });
}

// 파일
function resultFile(keyword, currentPage, rowCnt) {   //현재페이지, 출력 데이터 수
   var index = "file";
   console.log('파일'); // TODO: ajax 실행 안됨
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
           
           // 검색결과 없을 경우 
           let total = result.total;
           if (total == 0) {
			  $(".result_txt").html(`<em id="query">"${keyword}"</em>에 대한 검색 결과는 <em id="total">${total}건</em>입니다.`);
			  $(".info_highlight").remove();
			  $(".result_div").show();
			  return;
           }

           let item = result.item;
           let print = '<div class="doc_div">';
           item.forEach(function(val, idx){
              if(idx === 0){
                 print += `
                    <div class="result_type_div">
                        <div class="type_txt">파일(${total}건)</div>
                      </div>
                 `;
              }
              print += `
                      <div class="doc_box">
                        <div class="doc_title">${val.subject}</div>
                        <div class="doc_prev">${val.content}</div>
                        <div class="doc_elem_div">
                          <span class="doc_info"><em>파일사이즈</em>${val.filesize} Mb</span>
                          <span class="doc_info"><em>생성일</em>${val.rdate}</span>
                        </div>
                        <span class="doc_dir">${val.filepath}</span>
                      </div>
                 `;
           });
           print += '</div>';

           // 검색결과 있을 경우
           $("#query").text(`"${keyword}"`);
		   $("#total").text(`${total}건`);
		   $(".result_div").show();
			  
           // print result 
           $(".result_div").after(print);
           $(".paging_div").show();
        },
        error: function(e) {
           console.log(e);
        }
   });
}

// 공통 ajax function
function ajaxJson(data) {
	var rResult; // ajax 내에서 rResult 선언하지 않고 return 하면 undefined 됨
	
	$.ajax({
        url: "http://192.168.0.3:19200/gateway/search", // 요청 할 주소
        async: false, // false 일 경우 동기 요청으로 변경
        type: 'POST', // GET, PUT
        dataType: "json",
        data: data,
        success: function(result) {
        	var resultJson = JSON.stringify(result);
        	rResult = resultJson;
        },
        error: function(e) {
            console.log(e);
         }
	});
	
	return rResult;
}