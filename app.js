var userSelect,
    random, coin;
function setHead() {
    userSelect = 'head';
}
function setTail() {
    userSelect = 'tail';
}
function startToss() {
    if (userSelect !== undefined) {
        random = Math.floor(Math.random() * 2);
        if (random === 1) {
            coin = 'head';
        }
        else if (random === 0) {
            coin = 'tail';
        }
        if (userSelect === coin) {
            alert('Congratulation! you win the toss');
        }
        else {
            alert('you loss the toss');
        }
    }
    else {
        alert('select some options');
    }
}
function setUndefined(){
    userSelect = undefined;
}