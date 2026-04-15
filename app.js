function foo(callback) {
    console.log("Hi, Tom!")
    callback();
}

function bar() {
    console.log("Hi, Ken!")
}

foo(bar);

const sonicBoom = () => {
    return 20;
}

console.log(sonicBoom());

function metalBurst(lastdamage) {
    return lastdamage *= 1.5;

}

console.log(metalBurst(50));

function hornDrill(theirHp) {
    if (Math.random() <= 0.3) {
        return theirHp;
    } else {
        return 0;
    }
}

console.log(hornDrill(100));
function thunderWave() {
    if (Math.random() <= 0.9) {
        return "Paralyzed";
    } else {
        return "Not Paralyzed";
    }
}
