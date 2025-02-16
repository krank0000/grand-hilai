# 網頁切版練習

這是一個網頁切版練習專案，用於提升 HTML 和 CSS 的實作能力。

> 原參考網站連結：[漢來日月行館](https://sunmoonlake.grand-hilai.com.tw/)

---

### 主要

- 手切網頁首頁

### 使用技術

- HTML5
- CSS3
- JavaScript
- jQuery
- SCSS、SASS
- GSAP 動畫

### 開發時程

- **第一天**
  : 基本桌機切版
- **第二天**
  : hover 互動效果、右側隱藏菜單、JS 功能
- **第三天**
  : RWD、動畫互動效果

### 學習心得

#### 問題與困難

- 輪播圖動畫 ❌
  - [ ] 第一個輪播圖區塊，用 GPT 幫助生成 JS 寫法，效果卡卡的、不可控，且無法連動下方的 scrollbar。
  - [x] 第二個輪播區塊為最後一個主內容**策畫行程**，無法點擊循環，也沒有左右滑動進入特效。
    > 20250216 解決，使用 [swiper.js](https://swiperjs.com/)
- 右側隱藏菜單 ❌
  1. 觸碰 nav 大標題，會在右方出現**細項分類的 nav**以及**圖片**。
  2. 原本想用 scss `@for`語法寫，但無效，之後用 js。
  3. 無法修正滑鼠 hover 移開內容會消失的問題（細項會消失，圖片不會？）。
  4. RWD 的版本，圖片隱藏，但細項會從大標下方展開來，這個就沒做了。
- RWD❓
  1. 寫到最後，在**螢幕寬度小於 760px 時，出現水平滾動條**。
  2. 因為實在找不到哪個元素寬度超出了，所以直接將`<main>`裡面的所有`<section>`用 `transform: scale(0.9)`縮小。
- 動畫 ✅
  1. 使用 [GSAP](https://gsap.com/)動畫庫呈現。
  2. scroll 滾動浮現元素
  3. 文字漸變使用同背景顏色的遮罩，先預設`right: -100%;`移出畫面。
