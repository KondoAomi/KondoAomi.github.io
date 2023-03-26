'use strict'


//ポップアップ
const clickBtn = document.getElementById('click-btn');
const popupWrapper = document.getElementById('popup-wrapper');
const close = document.getElementById('close');
const people1 = document.getElementById('arrList');



// ボタンをクリックしたときにポップアップを表示させる
clickBtn.addEventListener('click', () => {
  popupWrapper.style.display = "block";
});

// ポップアップの外側又は「x」のマークをクリックしたときポップアップを閉じる
popupWrapper.addEventListener('click', e => {
  if (e.target.id === popupWrapper.id || e.target.id === close.id) {
    popupWrapper.style.display = 'none';
  }
});

// ボタンをクリックしたときにポップアップを表示させる
people1.addEventListener('click', () => {
  popupWrapper.style.display = "block";
});
// 



//ポップアップ入力後反映
//送信ボタン
let send = document.getElementById("send");

let area1 = 0;
let period1 = 0;
let time1 = 0;
let clickdId = 0;
let num = 0;

//💙💙💙💚💙💙💙
  function reply_click(clicked_id)
  {
      // alert(clicked_id);
      area1 = document.getElementById(clicked_id).getElementsByClassName("area");
      period1 = document.getElementById(clicked_id).getElementsByClassName("period");
  }
function  destination () {
  console.log(area1[0].innerText);
 
    const aaa = document.getElementById("location").value;
    const bbb = document.getElementById("period").value;
	  // const ccc = document.getElementById("time").value;

  
  area1[0].innerText = aaa;
	period1[0].innerText = bbb;
	// time1[0].innerText = ccc; 

    console.log("🐊");
}
send.addEventListener("click",destination);
//💙💙💙💚💙💙💙





