
var points = []
var angleMultiplier = 1

function setup() {
    let renderer = createCanvas(windowWidth, windowHeight);
    renderer.parent("flow-field-canvas");
    background(0);
    
    var density = 80

    var space = width / density

    for (var x = 0; x < width; x += space) {
        for (var y = 0; y < height; y += space) {
            var p = createVector(x + random(-10, 10), y + random(-10, 10))
            points.push(p)
        }
    }
}

function draw() {
    noStroke()

    for (var i = 0; i < points.length; i++) {

        var r = map(points[i].x, 0, width, 255, 50)
        var g = map(points[i].x, 0, width, 255, 50)
        var b = map(points[i].x, 0, width, 50, 255)

        fill(r, g, b)

        var angle = map(noise(points[i].x * angleMultiplier, points[i].y * angleMultiplier), 0, 1, 0, 720)
        points[i].add(createVector(cos(angle), sin(angle)))
        ellipse(points[i].x, points[i].y, 2)
    }
}



  