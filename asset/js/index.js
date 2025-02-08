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
