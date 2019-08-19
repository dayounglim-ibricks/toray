function resultSecuredisk(keyword, currentPage, rowCnt) {   //현재페이지, 출력 데이터 수
   var index = "securedisk";
   
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
                        <div class="type_txt">시큐어디스크(${total})</div>
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
                       <span class="doc_btn prev_doc">미리보기</span>
                         <span class="doc_btn dupl_doc">중복문서(3)</span>
                        </div>
                        <!-- <span class="doc_dir"></span> -->
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