var zhujpew1eu684e;
(function(d, t) {
    var s = d.createElement(t);
    var options = {
        'userName': 'ftrianakast',
        'formHash': 'zhujpew1eu684e',
        'autoResize': true,
        'height': '456',
        'async': true,
        'host': 'wufoo.com',
        'header': 'show',
        'ssl': true
    };
    s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
    s.onload = s.onreadystatechange = function() {
        var rs = this.readyState;
        if (rs)
            if (rs != 'complete')
                if (rs != 'loaded') return;
        try {
            zhujpew1eu684e = new WufooForm();
            zhujpew1eu684e.initialize(options);
            zhujpew1eu684e.display();
        } catch (e) {}
    };
    var scr = d.getElementsByTagName(t)[0],
        par = scr.parentNode;
    par.insertBefore(s, scr);
})(document, 'script');