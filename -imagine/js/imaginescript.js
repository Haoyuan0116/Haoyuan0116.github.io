window.addEventListener("scroll",function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var alpha = 1 - scrollTop / 500; // 根据页面滚动距离计算透明度

    if (alpha < 0) alpha = 0; // 透明度最小为0
    if (alpha > 1) alpha = 1; // 透明度最大为1

    document.querySelector('.imaginepic').style.opacity = alpha; // 设置遮罩层的透明度
})