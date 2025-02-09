// 輪播圖-----------------------------------------------------------------------------

// 獲取DOM元素
const carousel = document.getElementById("carousel");
const scrollbarThumb = document.getElementById("scrollbar-thumb");
const carouselItems = document.querySelectorAll(".carousel_item");

// 設置初始值
let currentIndex = 0;
let startX;
let scrollLeft;
let isDown = false;

// 計算scrollbar-thumb的寬度和移動範圍
// const thumbWidth = (carousel.clientWidth / carousel.scrollWidth) * 100;
// scrollbarThumb.style.width = `${thumbWidth}%`;

// 自動輪播函數
function autoSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  const slideWidth = carouselItems[0].offsetWidth;
  carousel.scrollTo({
    left: currentIndex * slideWidth,
    behavior: "smooth",
  });

  // 更新scrollbar-thumb位置
  const scrollPercentage =
    (carousel.scrollLeft / (carousel.scrollWidth - carousel.clientWidth)) * 100;
  scrollbarThumb.style.left = `${scrollPercentage}%`;
}

// 設置自動輪播計時器
let slideInterval = setInterval(autoSlide, 8000);

// 滑鼠事件監聽器
carousel.addEventListener("mousedown", (e) => {
  isDown = true;
  carousel.classList.add("active");
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
  // 暫停自動輪播
  clearInterval(slideInterval);
});

carousel.addEventListener("mouseleave", () => {
  isDown = false;
  carousel.classList.remove("active");
  // 重新啟動自動輪播
  slideInterval = setInterval(autoSlide, 5000);
});

carousel.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = x - startX;
  carousel.scrollLeft = scrollLeft - walk;

  // 更新scrollbar-thumb位置
  const scrollPercentage =
    (carousel.scrollLeft / (carousel.scrollWidth - carousel.clientWidth)) * 100;
  scrollbarThumb.style.left = `${scrollPercentage}%`;
});

// 監聽輪播區域的滾動事件
carousel.addEventListener("scroll", () => {
  const scrollPercentage =
    (carousel.scrollLeft / (carousel.scrollWidth - carousel.clientWidth)) * 100;
  scrollbarThumb.style.left = `${scrollPercentage}%`;
});

//菜單展開後，滑鼠移動顯示細項===========================================================================
$(document).ready(function () {
  var activeItem = null;
  var activeImage = null;

  // 當滑鼠移入 menu_title 的 <li> 時
  $(".menu_title li").hover(function () {
    var index = $(this).index(); // 取得當前 <li> 的索引
    activeItem = $(".menu_info .menu_info_item").eq(index); // 找到對應的 menu_info_item
    activeImage = $(".menu_img li").eq(index);

    // 隱藏所有 menu_info_item 和 menu_img li，然後顯示對應的項目並加入動畫
    $(".menu_info .menu_info_item, .menu_img li").stop(true, true).fadeOut(200);
    activeItem
      .css({ position: "absolute", right: "-20px", opacity: 0 })
      .show()
      .animate({ right: "0px", opacity: 1 }, 300);
    activeImage.fadeIn(300);
  });

  // 當滑鼠移入 menu_info 本體時，確保它不會立即消失
  $(".menu_info, .menu_img").hover(
    function () {
      if (activeItem) {
        activeItem.stop(true, true).show();
      }
      if (activeImage) {
        activeImage.stop(true, true).show();
      }
    },
    // 當滑鼠移出 menu_info 時，才隱藏當前的 menu_info_item 和 menu_img li
    function () {
      if (activeItem) {
        activeItem.stop(true, true).fadeOut(200);
      }
      if (activeImage) {
        activeImage.stop(true, true).fadeOut(200);
      }
    }
  );
});

//菜單開關===========================================================================
$(document).ready(function () {
  $("#menu").css({ right: "-100%" }); // 初始狀態關閉

  $("#menuBtn").click(function () {
    $("#menu").animate({ right: "0" }, 500);
  });

  $("#closeBtn").click(function () {
    $("#menu").animate({ right: "-100%" }, 500);
  });
});
