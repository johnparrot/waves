!function () {

    var Waves = function (e) {
        var d = document.createElement('div');

        var w = this.clientWidth * 2;

        var props = [
            [w, 'width'],
            [w, 'height'],
            [e.layerX - w / 2, 'left'],
            [e.layerY - w / 2, 'top']
        ];

        for (let [v, p] of props)
            d.style[p] = v + 'px';

        d.classList.add('wave');

        this.appendChild(d);

        var cl = () => (setTimeout(() => d.remove(), 1000), (d.style.opacity = 0));

        for (let ev of ['mouseup', 'mouseout'])
            this.addEventListener(ev, cl);
    };

    document.querySelectorAll('.waves').forEach(x => x.addEventListener('mousedown', Waves));

}();