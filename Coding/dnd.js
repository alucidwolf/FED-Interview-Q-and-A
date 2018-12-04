function hpm(currentHp, multiplier) {
    var newHp = function (multiplier) {
        var tempHp = currentHp * multiplier;
        return {
            hp: tempHp
        }
    }

    if (typeof multiplier === 'undefined') {
        return newHp;
    } else {
        return newHp(multiplier);
    }
}

// console.log(hpm(100, 2));
// console.log(hpm(100)(2));

function hp(multi) {
    var curr = 100;
    if (multi) {
        return {
            hp: curr * multi
        }
    } else {
        return {
            hp: curr
        }
    }
}

function hpUpdate(curr, multi) {
    if (multi) {
        return curr * multi
    } else {
        return curr
    }
}

// console.log(hp(100));
// console.log(hp(100, 2));

var Fighter = function (options) {
    return Object.assign({}, hp(2), options)
}

var Verwin = Fighter({
    standard: 'red and black'
});

Verwin.hp = hpUpdate(Verwin.hp, 3);

console.log(Verwin);
