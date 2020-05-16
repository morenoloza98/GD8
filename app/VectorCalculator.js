exports.sum = (a, b) => {
    return {x: a.x + b.x, y: a.y + b.y };
}

exports.sub = (a, b) => {
    return {x: a.x - b.x, y: a.y - b.y };
}

exports.scalar = (a, x) => {
    return { x: a.x * x, y: a.y * x };
}

exports.dot = (a, b) => {
    let x = a.x * b.x + a.y * b.y;
    return x;
}