const health = {
    health: 1000
}

const shapes = {
    boomkin: 'boomkin',
    cat: 'cat',
    bear: 'bear'
}

const mana = {
    mana: 200
}

const rage = {
    rage: 80
}

const energy = {
    energy: 120
}

const maelstrom = {
    maelstrom: 75
}

const currentShape = {
    currentShape: 'Night Elf'
}

const checkShape = {
    checkShape: function () {
        switch (this.currentShape) {
            case 'boomkin':
                this.health = increaseHp(health.health, 1);
                break;
            case 'cat':
                this.health = increaseHp(health.health, 1.5);
                break;
            case 'bear':
                this.health = increaseHp(health.health, 2);
                break;
        }
    }
}

const shapeShift = {
    shapeShift: function (shape) {
        let shapeList = Object.values(shapes);
        if (shapeList.indexOf(shape) !== -1) {
            this.currentShape = shape;
            this.checkShape();
        } else {
            console.log('shape does not exist');
        }
    }
}

function increaseHp(currentHealth, multiple) {
    return currentHealth * multiple;
}

const Druid = (opts) => {
    return Object.assign({},
        health,
        mana,
        rage,
        energy,
        currentShape,
        checkShape,
        shapeShift,
        opts
    )
}

const Verwin = Druid({
    guild: 'Exception'
});

Verwin.shapeShift('cat');
console.log(Verwin);
