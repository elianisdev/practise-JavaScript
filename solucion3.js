// Step 1: Iterate over the dairy array
function logDairy() {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
    for (const item of dairy) {
        console.log(item);
    }
}

// Step 2: Iterate over the bird object's properties
function birdCan() {
    const animal = {
        canJump: true
    };

    const bird = Object.create(animal);
    bird.canFly = true;
    bird.hasFeathers = true;

    for (const key of Object.keys(bird)) {
        console.log(`${key}: ${bird[key]}`);
    }
}

// Step 3: Iterate over all properties in bird and its prototype
function animalCan() {
    const animal = {
        canJump: true
    };

    const bird = Object.create(animal);
    bird.canFly = true;
    bird.hasFeathers = true;

    for (const key in bird) {
        console.log(`${key}: ${bird[key]}`);
    }
}