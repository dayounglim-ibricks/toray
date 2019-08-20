<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ko">
<head>
  <title>TORAY</title>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width==device-width, initial-scale=1.0">
  <meta name="Description" content="도레이검색">
  <meta name="keywords" content="도레이검색">
  <meta property="og:title" content="도레이검색">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://127.0.0.1/">
  <meta property="og:description" content="도레이">
  <link rel='stylesheet' type='text/css' href='./css/ionicons.css'>
  <link rel="stylesheet" type='text/css' href="./css/main.css">
  <script type="text/javascript" src="./js/ref/jquery-3.2.1.min.js"></script>
  <script type="text/javascript" src="./js/ref/moment-2.13.min.js"></script>
  <script type="text/javascript" src="./js/common.js"></script>
  <script type="text/javascript" src="./js/result/results.js"></script>
  <script src="./datepicker/jquery-1.12.4.js"></script>
  <script src="./datepicker/jquery-ui.js"></script>
  <link rel="stylesheet" href="./datepicker/jquery-ui.css">
</head>
<script>
$(document).ready(function() {
   // 검색어 없을 때 검색 사용방법 화면 이동
   var keyword = $('.search_input').val();
   if (!keyword) {
      $('.content_div.result').hide();
      $('.content_div.non_result').show();
   }
});
</script>
<body>
<div class='v_container'>

<input type="hidden" id="collection" name="collection" value="01">
<input type="hidden" id="sort" value="01">
<input type="hidden" id="field" value="01">
<input type="hidden" id="file" value="all">

  <div class="v_head">
    <div class="head_middle">
      <img class='logo_div' src="./images/Toray_logo.svg.png" alt="toray_logo">
      <div class="search_box">
        <div class="search_div">
          <input class='search_input' type="text" placeholder="검색어를 입력해주세요. ">
          <span class="search_btn ion-ios-search"></span>
        </div>
        <div class="search_auto_div">
          <div class="search_auto_content">
            <ul>
              <li><em>폴리에스</em>터</li>
              <li><em>폴리에스</em>테르</li>
              <li><em>폴리에스</em>터 100%</li>
              <li><em>폴리에스</em>터 원단</li>
              <li><em>폴리에스</em>터 섬유</li>
            </ul>
          </div>
          <div class="search_auto_info">
            <ul>
              <li><em class="info_highlight">자동 추천 기능</em>을 사용해보세요.</li>
              <li>검색어 입력시 자동으로 관련어를 추천합니다.
                <span class="search_auto_close">
              <span class="search_auto_closebtn ion-ios-close-outline"></span>
              <span class="search_auto_closetxt">기능끄기</span>
            </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="search_again">
        <span class="check_box"><input type='checkbox' /></span>
        <span class="check_box_txt">결과내 재검색</span>
      </div>
      <div class="search_help">
        <span class="help_icon ion-help-circled"></span>
        <span class="help_icon_txt">도움말</span>
      </div>
      <!-- 검색어 자동완선 추천 영역 -->

    </div>
  </div>
  <div class="v_menu">
    <div class="menu_box">
      <div class="selected_menu_btn"><a href="#" name ="collection01" id="collection01" onClick="javascript:setCollection('01');" >통합검색</a></div>
      <div class="menu_btn"><a href="#" name ="collection02" id="collection02" onClick="javascript:setCollection('02');" >시큐어디스크</a></div>
      <div class="menu_btn"><a href="#" name ="collection03" id="collection03" onClick="javascript:setCollection('03');" >전자결재</a></div>
      <div class="menu_btn"><a href="#" name ="collection03" id="collection07" onClick="javascript:setCollection('07');" >이전결재문서</a></div>
      <div class="menu_btn"><a href="#" name ="collection04" id="collection04" onClick="javascript:setCollection('04');" >ISO</a></div>
      <div class="menu_btn"><a href="#" name ="collection05" id="collection05" onClick="javascript:setCollection('05');" >분임조</a></div>
      <div class="menu_btn"><a href="#" name ="collection06" id="collection06" onClick="javascript:setCollection('06');" >제안</a></div>
      <div class="menu_btn"><a href="#" name ="collection06" id="collection08" onClick="javascript:setCollection('08');" >파일</a></div>
      <!-- 
      <div class="menu_btn"><a href="#" name ="collection07" id="collection09" onClick="javascript:setCollection('09');" >메일</a></div>
      <div class="menu_btn"><a href="#" name ="collection08" id="collection10" onClick="javascript:setCollection('10');" >팀사이트</a></div>
       -->

      <div class="popular_prev_div">
        <span class="popular_prev_icon">1</span>
        <span class="popular_prev_text">폴리에스터
          <span class="popular_arrow ion-android-arrow-dropdown-circle"></span>
        </span>
        <!-- 인기검색어 상세보기 영역 -->
        <!-- -ms-top: -40px; -ms-right:754px;-->

        <div class="popular_box">
          <div class="popular_title">인기검색어</div>
          <!--[if IE]> <div class="popular_div" style="top: -40px; right:754px"> <![endif]-->
          <div class="popular_div">
            <ul>
              <li class="pop_num">1</li>
              <li class="pop_name">폴리에스터</li>
              <li class="pop_arrow up ion-android-arrow-dropup-circle"></li>
              <li class="pop_updown">+3</li>
            </ul>
            <ul>
              <li class="pop_num">2</li>
              <li class="pop_name">공정</li>
              <li class="pop_arrow nochange ion-android-remove-circle"></li>
              <li class="pop_updown">0</li>
            </ul>
            <ul>
              <li class="pop_num">3</li>
              <li class="pop_name">프로세스</li>
              <li class="pop_arrow up ion-android-arrow-dropup-circle"></li>
              <li class="pop_updown">0</li>
            </ul>
            <ul>
              <li class="pop_num">4</li>
              <li class="pop_name">슬리터</li>
              <li class="pop_arrow nochange ion-android-remove-circle"></li>
              <li class="pop_updown">0</li>
            </ul>
            <ul>
              <li class="pop_num">5</li>
              <li class="pop_name">필름</li>
              <li class="pop_arrow down ion-android-arrow-dropdown-circle"></li>
              <li class="pop_updown">-1</li>
            </ul>
            <ul>
              <li class="pop_num">6</li>
              <li class="pop_name">overhole</li>
              <li class="pop_arrow down ion-android-arrow-dropdown-circle"></li>
              <li class="pop_updown">-2</li>
            </ul>
            <ul>
              <li class="pop_num">7</li>
              <li class="pop_name">절차서</li>
              <li class="pop_arrow nochange ion-android-remove-circle"></li>
              <li class="pop_updown">0</li>
            </ul>
            <ul>
              <li class="pop_num">8</li>
              <li class="pop_name">과제</li>
              <li class="pop_arrow up ion-android-arrow-dropup-circle"></li>
              <li class="pop_updown">+4</li>
            </ul>
            <ul>
              <li class="pop_num">9</li>
              <li class="pop_name">폴리에스테르</li>
              <li class="pop_arrow down ion-android-arrow-dropdown-circle"></li>
              <li class="pop_updown">-1</li>
            </ul>
            <ul>
              <li class="pop_num">10</li>
              <li class="pop_name">합성</li>
              <li class="pop_arrow up ion-android-arrow-dropup-circle"></li>
              <li class="pop_updown">+1</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="v_middle">
    <div class='middle_content'>
      
      <!-- 검색 결과 있을 때 검색 결과 노출 -->
      <div class='content_div result'>
      
      	<!-- 검색 결과 요약  -->
        <div class="result_div" style="display: none;">
          <div class="result_txt">
          	<em id="query">"폴리에스터"</em>에 대한 검색 <em></em>결과는 총 <em id="total">813건</em>입니다.
          </div>
          <div class="typo_info info_highlight">"폴리에스티르"</div>
          <div class="typo_fix_btn info_highlight">검색결과 보기 ></div>
        </div>

		  
<!--         <div class="doc_div">
          <div class="result_type_div">
            <div class="type_txt">시큐어디스크(349건)</div>
          </div>
          <div class="doc_box">
            <div class="doc_title">폴리에스터 필름의 광투과도</div>
            <div class="doc_prev">본 발명은 폴리에스테르 수지조성물 및 이를 이용한 폴리에스테르 필름에 관한 것으로,
              보다 구체적으로 폴리에스테르 수지 및 금속화합물로 코팅된 실리카 입자를 포함한 내용물로 구성되어 있다.
            </div>
            <div class="doc_elem_div">
              <span class="doc_info"><em>파일크기</em>2.3 Mb</span>
              <span class="doc_info"><em>생성일</em>2019.04.10</span>
              <span class="doc_info"><em>생성자</em>김철희</span>
              <span class="doc_btn prev_doc">미리보기</span>
              미리보기 상세창 영역
              <span class="prev_doc_div" style="display: none">
                <div class="prev_title">미리보기 <em>(2건)</em>
                  <span class="prev_close_btn ion-ios-close-outline"></span>
                </div>
                <ul>
                  <img class="filetype_img" src="./images/ppt.png" alt="ppt_icon">
                  <li>01_필름기술자산화_현업검토사항_20190423.pptx</li>
                </ul>
                <ul>
                  <img class="filetype_img" src="./images/xls.png" alt="xls_icon">
                  <li>1000-2호기 경유라인 철거로 안전사고 예방.xlsx</li>
                </ul>
              </span>

              <span class="doc_btn dupl_doc">중복문서(3)</span>
            </div>
            <span class="doc_dir">/정보팀/팀문서</span>
          </div>
          <div class="doc_box">
            <div class="doc_title">폴리에스터 필름의 광투과도</div>
            <div class="doc_prev">본 발명은 폴리에스테르 수지조성물 및 이를 이용한 폴리에스테르 필름에 관한 것으로,
              보다 구체적으로 폴리에스테르 수지 및 금속화합물로 코팅된 실리카 입자를 포함한 내용물로 구성되어 있다.
            </div>
            <div class="doc_elem_div">
              <span class="doc_info"><em>파일크기</em>2.3 Mb</span>
              <span class="doc_info"><em>생성일</em>2019.04.10</span>
              <span class="doc_info"><em>생성자</em>김철희</span>
              <span class="doc_btn dupl_doc">중복문서(3)</span>
              <span class="doc_btn prev_doc">미리보기</span>
            </div>
            <span class="doc_dir">/정보팀/팀문서</span>
          </div>
          <div class="doc_box">
            <div class="doc_title">폴리에스터 필름의 광투과도</div>
            <div class="doc_prev">본 발명은 폴리에스테르 수지조성물 및 이를 이용한 폴리에스테르 필름에 관한 것으로,
              보다 구체적으로 폴리에스테르 수지 및 금속화합물로 코팅된 실리카 입자를 포함한 내용물로 구성되어 있다.
            </div>
            <div class="doc_elem_div">
              <span class="doc_info"><em>파일크기</em>2.3 Mb</span>
              <span class="doc_info"><em>생성일</em>2019.04.10</span>
              <span class="doc_info"><em>생성자</em>김철희</span>
              <span class="doc_btn prev_doc">미리보기</span>
              <span class="doc_btn dupl_doc">중복문서(3)</span>
              중복문서 상세창 영역
              <span class="dupl_doc_div" style="display: none">
                <span class="dupl_table_div">
                  <div class="dupl_title">중복문서 <em>(3건)</em>
                    <span class="dupl_close_btn ion-ios-close-outline"></span>
                  </div>
                  <table>
                  <tbody>
                  <tr>
                    <td>제목</td>
                    <td>작성일</td>
                    <td>작성자</td>
                    <td>파일 사이즈</td>
                  </tr>
                  <tr>
                    <td>폴리에스터 필름의 광투과도</td>
                    <td>23 Kb</td>
                    <td>2018.04.30</td>
                    <td>홍길수</td>
                  </tr>
                  <tr>
                    <td>폴리에스터 필름의 광투과도</td>
                    <td>23 Kb</td>
                    <td>2018.04.30</td>
                    <td>홍길수</td>
                  </tr>
                  <tr>
                    <td>폴리에스터 필름의 광투과도</td>
                    <td>23 Kb</td>
                    <td>2018.04.30</td>
                    <td>홍길수</td>
                  </tr>
                  </tbody>
                  </table>
                </span>
              </span>
            </div>
            <span class="doc_dir">/정보팀/팀문서</span>
          </div>
        </div>

        <div class="doc_div">
          <div class="result_type_div">
            <div class="type_txt">전자결재(349건)</div>
          </div>
          <div class="doc_box">
            <div class="doc_title">[ITSM 보고] Cloud PC 신청의 건(One Company 프로젝트 HUB 개발자 1용)</div>
            <div class="doc_prev">본 발명은 폴리에스테르 수지조성물 및 이를 이용한 폴리에스테르 필름에 관한 것으로,
              보다 구체적으로 폴리에스테르 수지 및 금속화합물로 코팅된 실리카 입자를 포함한 내용물로 구성되어 있다.
            </div>
            <div class="doc_elem_div">
              <span class="doc_info"><em>파일크기</em>2.3 Mb</span>
              <span class="doc_info"><em>생성일</em>2019.04.10</span>
              <span class="doc_info"><em>생성자</em>김철희</span>
              <span class="doc_btn dupl_doc">미리보기</span>
              <span class="doc_btn prev_doc">중복문서(3)</span>
            </div>
          </div>
          <div class="doc_box">
            <div class="doc_title">폴리에스터 필름의 광투과도</div>
            <div class="doc_prev">본 발명은 폴리에스테르 수지조성물 및 이를 이용한 폴리에스테르 필름에 관한 것으로,
              보다 구체적으로 폴리에스테르 수지 및 금속화합물로 코팅된 실리카 입자를 포함한 내용물로 구성되어 있다.
            </div>
            <div class="doc_elem_div">
              <span class="doc_info"><em>파일크기</em>2.3 Mb</span>
              <span class="doc_info"><em>생성일</em>2019.04.10</span>
              <span class="doc_info"><em>생성자</em>김철희</span>
              <span class="doc_btn dupl_doc">미리보기</span>
              <span class="doc_btn prev_doc">중복문서(3)</span>
            </div>
          </div>
          <div class="doc_box">
            <div class="doc_title">폴리에스터 필름의 광투과도</div>
            <div class="doc_prev">본 발명은 폴리에스테르 수지조성물 및 이를 이용한 폴리에스테르 필름에 관한 것으로,
              보다 구체적으로 폴리에스테르 수지 및 금속화합물로 코팅된 실리카 입자를 포함한 내용물로 구성되어 있다.
            </div>
            <div class="doc_elem_div">
              <span class="doc_info"><em>파일크기</em>2.3 Mb</span>
              <span class="doc_info"><em>생성일</em>2019.04.10</span>
              <span class="doc_info"><em>생성자</em>김철희</span>
              <span class="doc_btn dupl_doc">미리보기</span>
              <span class="doc_btn prev_doc">중복문서(3)</span>
            </div>
          </div>
        </div> -->
        
        

        <div class="paging_div" style="display: none;">
          <span class="p_elem paging_bbefore">
            <span class="ion-android-arrow-dropleft"></span><em>10</em>
          </span>
          <span class="p_elem paging_before ion-android-arrow-dropleft"></span>
          <span class="p_elem paging_num">1</span>
          <span class="p_elem paging_num selected">2</span>
          <span class="p_elem paging_num">3</span>
          <span class="p_elem paging_num">4</span>
          <span class="p_elem paging_num">5</span>
          <span class="p_elem paging_next ion-android-arrow-dropright"></span>
          <span class="p_elem paging_nnext">
            <em>10</em><span class="ion-android-arrow-dropright"></span>
          </span>
        </div>
        
 
      </div>
      
	  <!-- 검색 결과 없을 때 검색 사용방법 노출 -->
      <div class='content_div non_result'>
        <div class="doc_div">
          <div class="result_type_div" style="margin-bottom:50px;">
            <div class="type_txt">검색 사용방법</div>
          </div>
          <!-- <div class="doc_box">
            <div class="doc_title">폴리에스터 필름의 광투과도</div>
            <div class="doc_prev">본 발명은 폴리에스테르 수지조성물 및 이를 이용한 폴리에스테르 필름에 관한 것으로,
              보다 구체적으로 폴리에스테르 수지 및 금속화합물로 코팅된 실리카 입자를 포함한 내용물로 구성되어 있다.
            </div>
            <div class="doc_elem_div">
              <span class="doc_info"><em>파일크기</em>2.3 Mb</span>
              <span class="doc_info"><em>생성일</em>2019.04.10</span>
              <span class="doc_info"><em>생성자</em>김철희</span>
              <span class="doc_btn prev_doc">미리보기</span>
              <span class="doc_btn dupl_doc">중복문서(3)</span>
            </div>
            <span class="doc_dir">/정보팀/팀문서</span>
          </div> -->
          <div class="m_i_body" style="line-height: 1.5; font-size:15px; margin-left:10px;">
            <ul style="margin-bottom:30px;">
              <li>
                      검색어 입력 시 연산자를 지정하면 아래와 같은 검색조건을 만들 수 있습니다. <br>
                      통합검색에서 지원하는 검색 조건은 다음과 같습니다. <br>
                      각 연산자는 서로 조합되어 사용될 수 있습니다. <br>
              </li>
            </ul>
            <ul style="margin-bottom:30px;">
              <li class="info_highlight"><em class="cir"></em>AND 검색 : (+) 을 이용하여 검색조건을 만들 수 있습니다.</li>
              <li>예) 사과+포도 : '사과'와 '포도'가 모두 존재하는 문서를 검색합니다.</li>
            </ul>
            <ul style="margin-bottom:30px;">
              <li class="info_highlight"><em class="cir"></em>OR 검색 : (|) 을 이용하여 검색조건을 만들 수 있습니다.</li>
              <li>예) 사과|포도 : '사과'가 존쟈하거나 '포도'가 존재하는 문서를 검색합니다.</li>
            </ul>
            <ul style="margin-bottom:30px;">
              <li class="info_highlight"><em class="cir"></em>NOT 검색 : (-) 을 이용하여 검색조건을 만들 수 있습니다.</li>
              <li>예) 사과+포도 : '사과'로 검색 된 결과 중 '포도'가 존재하는 문서를 제외시킵니다.</li>
            </ul>
          </div>
        </div>
      </div>      
      
    </div>
    
    
    <!-- 오른쪽 검색설정 영역 -->
    <div class='middle_right'>
      <div class='set_search_div'>
        <div class="sort_box result_sort">
          <div class="ss_tit">결과정렬</div>
          <div class='cont'>
            <ul>
              <li id="sort01" onClick="setSort('01');" class="sel">정확도순</li>
              <li id="sort02" onClick="setSort('02');">최신순</li>
            </ul>
          </div>
        </div>

        <div class="sort_box time_sort">
          <div class='ss_tit'>기간검색</div>
          <div class='cont'>
            <ul>
              <li id="date01" onClick="setDate('01');" class="sel">전체</li>
              <li id="date02" onClick="setDate('02');">1일</li>
            </ul>
            <ul>
              <li id="date03" onClick="setDate('03');">1주</li>
              <li id="date04" onClick="setDate('04');">1개월</li>
            </ul>
            <ul>
              <li id="date05" onClick="setDate('05');">1년</li>
              <li id="date06" onClick="setDate('06');">직접입력</li>
            </ul>
          </div>
          <div class="set_time_box">
            <ul>
              <input class="sort_from" id="startDate" onClick="openDatepicker(this);" autocomplete="off">
              <li class="s_wave">~</li>
              <input class="sort_to" id="endDate" onClick="openDatepicker(this);" autocomplete="off">
              <li class="set_time_btn">적용</li>
            </ul>
          </div>
        </div>

        <div class="sort_box search_range">
          <div class='ss_tit'>검색영역</div>
          <div class='cont'>
            <ul>
              <li id="field01" onClick="setField('01');" class="sel">전체</li>
              <li id="field02" onClick="setField('02');">제목</li>
            </ul>
            <ul>
              <li id="field03" onClick="setField('03');">내용</li>
              <li id="field04" onClick="setField('04');">첨부내용</li>
            </ul>
            <ul>
              <li id="field05" onClick="setField('05');">첨부파일명</li>
              <li id="field06" onClick="setField('06');">작성자</li>
            </ul>
          </div>
        </div>

        <div class="sort_box filetype_sort">
          <div class="sort_box ss_tit">문서종류</div>
          <div class="type_box">
            <div class="type_div">
              <span class="filetype_chk"><input id='fileAll' type='checkbox' value='all'/></span>
              <img class='filetype_img' src="./images/search.png" alt="searchAll_icon">
              <span class="filetype_name">전체</span>
            </div>
            <div class="type_div">
              <span class="filetype_chk"><input id='file01' type='checkbox' value='pdf'/></span>
              <img class='filetype_img' src="./images/pdf.png" alt="pdf_icon">
              <span class="filetype_name">PDF</span>
            </div>
            <div class="type_div">
              <span class="filetype_chk"><input id='file02' type='checkbox' value='xls'/></span>
              <img class='filetype_img' src="./images/xls.png" alt="xls_icon">
              <span class="filetype_name">XLS</span>
            </div>
            <div class="type_div">
              <span class="filetype_chk"><input id='file03' type='checkbox' value='doc'/></span>
              <img class='filetype_img' src="./images/doc.png" alt="doc_icon">
              <span class="filetype_name">DOC</span>
            </div>
            <div class="type_div">
              <span class="filetype_chk"><input id='file04' type='checkbox' value='ppt'/></span>
              <img class='filetype_img' src="./images/ppt.png" alt="ppt_icon">
              <span class="filetype_name">PPT</span>
            </div>
            <div class="type_div">
              <span class="filetype_chk"><input id='file05' type='checkbox' value='jpg'/></span>
              <img class='filetype_img' src="./images/jpeg.png" alt="jpg_icon">
              <span class="filetype_name">JPG</span>
            </div>
            <div class="type_div">
              <span class="filetype_chk"><input id='file06' type='checkbox' value='txt'/></span>
              <img class='filetype_img' src="./images/txt.png" alt="txt_icon">
              <span class="filetype_name">TXT</span>
            </div>
          </div>
          <div class='cont'>
            <ul>
              <li id="setFile" onClick="setFile();" class="sel">적용</li>
              <li id="resetFile" onClick="resetFile();">초기화</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- modal 영역 -->
<div class="modal dark_layer" style="display: none">
  <div class="m_info_div">
    <div class="m_i_head">
      <div class="m_i_title">검색 사용방법</div>
      <div class="m_info_close ion-ios-close-outline"></div>
    </div>
    <div class="m_i_body">
      <ul>
        <li>
          검색어 입력 시 연산자를 지정하면 아래와 같은 검색조건을 만들 수 있습니다. <br>
          통합검색에서 지원하는 검색 조건은 다음과 같습니다. <br>
          각 연산자는 서로 조합되어 사용될 수 있습니다. <br>
        </li>
      </ul>
      <ul>
        <li class="info_highlight"><em class="cir"></em>AND 검색 : (+) 을 이용하여 검색조건을 만들 수 있습니다.</li>
        <li>예) 사과+포도 : '사과'와 '포도'가 모두 존재하는 문서를 검색합니다.</li>
      </ul>
      <ul>
        <li class="info_highlight"><em class="cir"></em>OR 검색 : (|) 을 이용하여 검색조건을 만들 수 있습니다.</li>
        <li>예) 사과|포도 : '사과'가 존쟈하거나 '포도'가 존재하는 문서를 검색합니다.</li>
      </ul>
      <ul>
        <li class="info_highlight"><em class="cir"></em>NOT 검색 : (-) 을 이용하여 검색조건을 만들 수 있습니다.</li>
        <li>예) 사과+포도 : '사과'로 검색 된 결과 중 '포도'가 존재하는 문서를 제외시킵니다.</li>
      </ul>
    </div>
  </div>
</div>

</body>
</html>