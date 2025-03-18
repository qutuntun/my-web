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

};