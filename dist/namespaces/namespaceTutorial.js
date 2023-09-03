////<reference path="IShape.ts"/>
var Drawing;
(function (Drawing) {
    ;
})(Drawing || (Drawing = {}));
;
//FileName :Circle.ts
//// <reference path="IShape.ts"/>
(function (Drawing) {
    class Circle {
        draw() {
            console.log("Circle is drawn");
        }
        ;
    }
    Drawing.Circle = Circle;
    ;
    //FileName : Triangle.ts
})(Drawing || (Drawing = {}));
;
////<reference path="IShape.ts"/>
(function (Drawing) {
    class Triangle {
        draw() {
            console.log("Triangle is drawn");
        }
        ;
    }
    Drawing.Triangle = Triangle;
})(Drawing || (Drawing = {}));
;
//FileName : TestShape.ts
//// <reference path="IShape.ts"/>
//// <reference path="Circle.ts"/>
//// <reference path="Triangle.ts"/>
export default Drawing;
//# sourceMappingURL=namespaceTutorial.js.map