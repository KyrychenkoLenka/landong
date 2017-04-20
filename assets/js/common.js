$(document).ready(function () {
    let raf = window.requestAnimFrame;
    raf(sideObserver)
});
function sideObserver() {
    let w = $(window);
    let optns = {
        activeClass: 'active',
        itemsClass: '.numbers li',
        counterClass: '.numbers span',
    };
    let curPos = w.scrollTop() + w.outerHeight() / 2;
    const items = [];

    $('.slide').each((i, v) => {
        v = $(v);
        let item = {};
        item.element = v;
        item.offset = v.offset().top;
        items.push(item);
    });
    items.forEach((v, i) => {
        if (curPos > v.offset) {
            let $numbers = $(optns.itemsClass);
            let $span = $(optns.counterClass);
            $span.html('0' + ++i);
            $numbers
                .removeClass(optns.activeClass)
                [--i]
                .classList
                .add(optns.activeClass);
        }
    });
    window.requestAnimationFrame(sideObserver);
};

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 30);
        };
})();