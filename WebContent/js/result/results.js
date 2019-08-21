// 공통 - 검색조건 
function getTerms(index, keyword, from, size){
	
	let terms = {
			index : index,
			keyword : keyword,
			from : from,
			size : size,
			sort : $('#sort').val(),
			startDate : $('#startDate').val(),
			endDate : $('#endDate').val(),
			field : $('#field').val(),
			file : $('#file').val()
	}
	console.log('post request body:',JSON.stringify(terms));
	return terms;
}

// 통합검색   
function resultAll(keyword, from, size) {	//현재페이지, 출력 데이터 수
	var index = "all";
	
	let data = getTerms(index, keyword, from, size);	
	
	$.ajax({
		  url: "http://192.168.0.3:19200/gateway/search", // 요청 할 주소
		  async: true, // false 일 경우 동기 요청으로 변경
		  type: 'POST', // GET, PUT
		  dataType: "json",
		  data: data,
		  success: function(result) {
			   console.log('성공 : ' + JSON.stringify(result));
			  $('.content_div.result .doc_div').remove();
			  
			  // -------------------------------------------------------
			  let securedisk_total = 0;
			  let securedisk_item;
			  let app_total = 0;
			  let app_item;
			  let appold_total = 0;
			  let appold_item;
			  let iso_total = 0;
			  let iso_item;
			  let grp_total = 0;
			  let grp_item;
			  let sug_total = 0;
			  let sug_item;
			  let file_total = 0;
			  let file_item;
			  
			  let allTotal = 0;
			  let print = '';
			  
			  for(let i in result) {
				  if (result[i].index == 'securedisk') {
					  securedisk_total = result[i].total;
					  securedisk_item = result[i].item;
				  }
				  else if (result[i].index == 'app') {
					  app_total = result[i].total;
					  app_item = result[i].item;
				  }
				  else if (result[i].index == 'appold') {
					  appold_total = result[i].total;
					  appold_item = result[i].item;
				  }
				  else if (result[i].index == 'iso') {
					  iso_total = result[i].total;
					  iso_item = result[i].item;
				  }
				  else if (result[i].index == 'grp') {
					  grp_total = result[i].total;
					  grp_item = result[i].item;
				  }
				  else if (result[i].index == 'sug') {
					  sug_total = result[i].total;
					  sug_item = result[i].item;
				  }
				  else if (result[i].index == 'file') {
					  file_total = result[i].total;
					  file_item = result[i].item;
				  }
			  } // for END
			  
			  // 시큐여디스크(securedisk)
			  if(securedisk_total !== 0){
				  let index = '시큐어디스크';
				  let item = securedisk_item;
				  
				  allTotal += securedisk_total;
				  print += '<div class="doc_div">';
				  item.forEach(function(val, idx){
					  if(idx === 0){
						  print += `
							  <div class="result_type_div">
							  <div class="type_txt">${index}(${securedisk_total})</div>
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
			  }
			  
			  // 전자결재(app)
			  if(app_total !== 0){
				  let index = '전자결재';
				  let item = app_item;
				  
				  allTotal += app_total;
				  print += '<div class="doc_div">';
				  item.forEach(function(val, idx){
					  if(idx === 0){
						  print += `
							  <div class="result_type_div">
							  <div class="type_txt">${index}(${app_total})</div>
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
			  }
			  
			  // 이전결재문서(appold)
			  if(appold_total !== 0){
				  let index = '이전결재문서';
				  let item = appold_item;
				  
				  allTotal += appold_total;
				  print += '<div class="doc_div">';
				  item.forEach(function(val, idx){
					  if(idx === 0){
						  print += `
							  <div class="result_type_div">
							  <div class="type_txt">${index}(${appold_total})</div>
							  </div>
							  `;
					  }
					  print += `
						  <div class="doc_box">
							  <div class="doc_title">${val.subject}</div>
							  <div class="doc_prev">${val.content}</div>
							  <div class="doc_elem_div">
								  <span class="doc_info"><em>기안일</em>${val.rdate}</span>
		                          <span class="doc_info"><em>기안자</em>${val.writer}</span>
		                          <span class="doc_info"><em>기안부서</em>${val.sosoc}</span>
		                      </div>
						  </div>
						  `;
				  });
				  print += '</div>';
			  }
			  
			  // ISO
			  if(iso_total !== 0){
				  let index = 'ISO';
				  let item = iso_item;
				  
				  allTotal += iso_total;
				  print += '<div class="doc_div">';
				  item.forEach(function(val, idx){
					  if(idx === 0){
						  print += `
							  <div class="result_type_div">
							  <div class="type_txt">${index}(${iso_total})</div>
							  </div>
							  `;
					  }
					  print += `
						  <div class="doc_box">
							  <div class="doc_title">${val.subject}</div>
							  <div class="doc_prev">${val.content}</div>
							  <div class="doc_elem_div">
								  <span class="doc_info"><em>제/개정일</em>${val.rdate}</span>
		                          <span class="doc_info"><em>개정자1</em>${val.enactor1}</span>
		                          <span class="doc_info"><em>사업장</em></span>
		            	  		  <span class="doc_info"><em>제/개정부서</em>${val.enactdeptname}(${val.enactdept})</span>
	                        </div>
	                        <span class="doc_dir">${val.largegcodename} > ${val.middlecodename}</span>
						  </div>
						  `;
				  });
				  print += '</div>';
			  }
			  
    		  // 분임조(grp)
			  if(grp_total !== 0){
				  let index = '분임조';
				  let item = grp_item;
				  
				  allTotal += grp_total;
				  print += '<div class="doc_div">';
				  item.forEach(function(val, idx){
					  if(idx === 0){
						  print += `
							  <div class="result_type_div">
							  <div class="type_txt">${index}(${grp_total})</div>
							  </div>
							  `;
					  }
					  print += `
						  <div class="doc_box">
							  <div class="doc_title">${val.subject}</div>
							  <div class="doc_prev">${val.content}</div>
							  <div class="doc_elem_div">
							  	<span class="doc_info"><em>팀</em>${val.dept2name}</span>
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
			  }

			  // 제안(sug)
			  if(sug_total !== 0){
				  let index = '제안';
				  let item = sug_item;	
				  
				  allTotal += sug_total;
				  print += '<div class="doc_div">';
				  item.forEach(function(val, idx){
					  if(idx === 0){
						  print += `
							  <div class="result_type_div">
							  <div class="type_txt">${index}(${sug_total})</div>
							  </div>
							  `;
					  }
					  print += `
						  <div class="doc_box">
							  <div class="doc_title">${val.subject}</div>
							  <div class="doc_prev">${val.content}</div>
							  <div class="doc_elem_div">
								  <span class="doc_info"><em>제안종류</em>${val.typecodename}</span>
		                          <span class="doc_info"><em>출원부서</em>${val.submitdeptname}</span>
				            	  <span class="doc_info"><em>실시일자</em>${val.rdate}</span>
				            	  <span class="doc_info"><em>주제안자</em>${val.writer}</span>
							  </div>
						  </div>
						  `;
				  });
				  print += '</div>';
			  }
			  
			  // 파일(file)
			  if(file_total !== 0){
				  let index = '파일';
				  let item = file_item;
				  
				  allTotal += file_total;
				  print += '<div class="doc_div">';
				  item.forEach(function(val, idx){
					  if(idx === 0){
						  print += `
							  <div class="result_type_div">
							  <div class="type_txt">${index}(${file_total})</div>
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
			  }
			  
			  // 검색결과 없을 경우 
			  if(allTotal===0){
				  $(".result_txt").html(`<em id="query">"${keyword}"</em>에 대한 검색 결과는 <em id="total">${allTotal}건</em>입니다.`);
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
function resultSecuredisk(keyword, from, size) {   //현재페이지, 출력 데이터 수
   var index = "securedisk";
   let data = getTerms(index, keyword, from, size);	
   
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
            "from" : from,
            "size" : size
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
function resultApp(keyword, from, size) {   //현재페이지, 출력 데이터 수
   var index = "app";
   let data = getTerms(index, keyword, from, size);	
   $.ajax({
        url: "http://192.168.0.3:19200/gateway/search", // 요청 할 주소
        async: true, // false 일 경우 동기 요청으로 변경
        type: 'POST', // GET, PUT
        dataType: "json",
        data: data,
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
function resultAppoId(keyword, from, size) {   //현재페이지, 출력 데이터 수
   var index = "appold";
   let data = getTerms(index, keyword, from, size);	
   
   console.log('이전결재문서'); // TODO: ajax 실행 안됨
   $.ajax({
        url: "http://192.168.0.3:19200/gateway/search", // 요청 할 주소
        async: true, // false 일 경우 동기 요청으로 변경
        type: 'POST', // GET, PUT
        dataType: "json",
        data: data,
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
                          <span class="doc_info"><em>기안일</em>${val.rdate}</span>
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
function resultIso(keyword, from, size) {   //현재페이지, 출력 데이터 수
   var index = "iso";
   let data = getTerms(index, keyword, from, size);	
   
   $.ajax({
        url: "http://192.168.0.3:19200/gateway/search", // 요청 할 주소
        async: true, // false 일 경우 동기 요청으로 변경
        type: 'POST', // GET, PUT
        dataType: "json",
        data: data,
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
                          <span class="doc_info"><em>제/개정일</em>${val.rdate}</span>
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
function resultGrp(keyword, from, size) {   //현재페이지, 출력 데이터 수
   var index = "grp";
   let data = getTerms(index, keyword, from, size);	
   
   $.ajax({
        url: "http://192.168.0.3:19200/gateway/search", // 요청 할 주소
        async: true, // false 일 경우 동기 요청으로 변경
        type: 'POST', // GET, PUT
        dataType: "json",
        data: data,
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
                          <span class="doc_info"><em>팀</em>${val.dept2name}</span>
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
function resultSug(keyword, from, size) {   //현재페이지, 출력 데이터 수
   var index = "sug";
   let data = getTerms(index, keyword, from, size);	
   
   $.ajax({
        url: "http://192.168.0.3:19200/gateway/search", // 요청 할 주소
        async: true, // false 일 경우 동기 요청으로 변경
        type: 'POST', // GET, PUT
        dataType: "json",
        data: data,
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
                          <span class="doc_info"><em>제안종류</em>${val.typecodename}</span>
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
function resultFile(keyword, from, size) {   //현재페이지, 출력 데이터 수
   var index = "file";
   let data = getTerms(index, keyword, from, size);	
   
   console.log('파일'); // TODO: ajax 실행 안됨
   $.ajax({
        url: "http://192.168.0.3:19200/gateway/search", // 요청 할 주소
        async: true, // false 일 경우 동기 요청으로 변경
        type: 'POST', // GET, PUT
        dataType: "json",
        data: data,
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