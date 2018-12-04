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
