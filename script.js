window.onload = function () {
    alert('欢迎访问我的网站！');

 // 获取按钮、弹窗和关闭按钮元素
 const playSnakeGameButton = document.getElementById('playSnakeGame');
 const snakeGameModal = document.getElementById('snakeGameModal');
 const closeModalButton = document.querySelector('.close');

 // 点击按钮显示弹窗
 playSnakeGameButton.addEventListener('click', function () {
     snakeGameModal.style.display = 'block';
       // 聚焦到游戏 iframe
       snakeGameIframe.focus(); 
 });

 // 点击关闭按钮隐藏弹窗
 closeModalButton.addEventListener('click', function () {
     snakeGameModal.style.display = 'none';
 });

 // 点击弹窗外部区域隐藏弹窗
 window.addEventListener('click', function (event) {
     if (event.target === snakeGameModal) {
         snakeGameModal.style.display = 'none';
     }
 });
 // 电视机相册功能
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const images = carousel.querySelectorAll('img');
let currentIndex = 0;

// 在窗口加载完成或窗口大小改变时更新 slideWidth
function updateSlideWidth() {
    const slideWidth = carousel.offsetWidth;
    return slideWidth;
}

// 初始化 slideWidth
let slideWidth = updateSlideWidth();

// 监听窗口大小改变事件
window.addEventListener('resize', () => {
    slideWidth = updateSlideWidth();
});

// 轮播函数
function slideTo(index) {
    const offset = -index * slideWidth;
    carousel.style.transform = `translateX(${offset}px)`;
    currentIndex = index;
}

// 上一张
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    slideTo(currentIndex);
});

// 下一张
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    slideTo(currentIndex);
});

// 滑动功能
let startX = 0;

carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const threshold = 50;

    if (endX > startX + threshold) {
        // 右滑
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        slideTo(currentIndex);
    } else if (endX < startX - threshold) {
        // 左滑
        currentIndex = (currentIndex + 1) % images.length;
        slideTo(currentIndex);
    }
});

}