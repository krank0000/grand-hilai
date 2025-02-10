//1-banner
let tl_p1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".banner",
    // markers: true,
    start: "top 50%",
    end: "bottom 50%",
    scrub: false, //動畫播放是否以視窗滾動播放
  },
});

tl_p1.from(".banner img", {
  duration: 0.5,
  y: 50,
  opacity: 0,
});

//3-輪播區塊
let tl_p3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".carousel_area",
    start: "top 50%",
    end: "bottom 50%",
    scrub: false, //動畫播放是否以視窗滾動播放
  },
});

tl_p3
  .from(".title p", {
    duration: 0.5,
    y: 50,
    opacity: 0,
  })
  .from(".title2 h2", {
    duration: 0.3,
    y: 50,
    opacity: 0,
  })
  //文字漸變出現
  .from(".gradient", {
    duration: 1.5,
    right: 100,
  });

//4-房型展示
let tl_p4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".room_area",
    start: "top 50%",
    end: "bottom 50%",
    scrub: false, //動畫播放是否以視窗滾動播放
  },
});

tl_p4.from(".room_area", {
  duration: 0.5,
  y: 50,
  opacity: 0,
});

//5-設施展示
let tl_p5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".facility_area",
    start: "top 50%",
    end: "bottom 50%",
    scrub: false, //動畫播放是否以視窗滾動播放
  },
});

tl_p5.from(".facility_area", {
  duration: 0.5,
  y: 30,
  opacity: 0,
});
