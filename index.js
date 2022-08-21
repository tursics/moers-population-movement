function createBoxes(number, age, direction) {
    var c = document.createDocumentFragment();
    for (var i = 0; i < number; ++i) {
        var e = document.createElement('div');
        e.className = `people ${age}-${direction}`;
        c.appendChild(e);
    }
    document.body.appendChild(c);
}

window.addEventListener('load', function() {
    createBoxes(1000, 'adult', 'neumarkt');
    createBoxes(1000, 'adult', 'neuerwall');
    createBoxes(1000, 'children', 'neumarkt');
    createBoxes(1000, 'children', 'neuerwall');
});
