// create object to be used to compose other objects
var distortion = {
    distortion: 1,
    intensity: 0
};
var volume = {
    volume: 1
}
var cabinet = {
    cabinet: 'maple'
}
var lowCut = {
    lowCut: 1
}
var inputLevel = {
    inputLevel: 1
}

var GuitarAmp = function (options) {
    return Object.assign({}, distortion, volume, cabinet, options)
}

var BassAmp = function BassAmp(options) {
    return Object.assign({}, lowCut, volume, cabinet, options)
}

var ChannelStrip = function ChannelStrip(options) {
    return Object.assign({}, inputLevel, lowCut, volume, options)
}

var MarshallAmp = GuitarAmp({
    logo: 'gold'
});
var PeaveyAmp = GuitarAmp({
    logo: 'black'
});

console.log(MarshallAmp);
console.log(PeaveyAmp);

// test('GuitarAmp', function (assert) {
//     var msg = 'should have distortion, volume, and cabinet'
//     var level = 2;
//     var cabinet = 'vintage'

//     var actual = GuitarAmp({
//         distortion: level,
//         volume: level,
//         cabinet: cabinet
//     });

//     var expected = {
//         distortion: level,
//         volume: level,
//         cabinet: cabinet
//     }

//     assert.deepEqual(actual, expected, msg);
//     assert.end();
// });

// test('BassAmp', function (assert) {
//     var msg = 'should have volume, lowCut, and cabinet';
//     var level = 2;
//     var cabinet = 'vintage';

//     var actual = BassAmp({
//         lowCut: level,
//         volume: level,
//         cabinet: cabinet
//     })

//     var expected = {
//         lowCut: level,
//         volume: level,
//         cabinet: cabinet
//     }

//     assert.deepEqual(actual, expected, msg);
//     assert.end()
// });

// test('ChannelStrip', function (assert) {
//     var msg = 'should have inputLevel, lowCut, and volume';
//     var level = 2;

//     var actual = ChannelStrip({
//         inputLevel: level,
//         lowCut: level,
//         volume: level
//     });

//     var expected = {
//         inputLevel: level,
//         lowCut: level,
//         volume: level
//     }

//     assert.deepEqual(actual, expected, msg);
//     assert.end();
// })