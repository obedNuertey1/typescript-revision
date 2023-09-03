////<reference path="IShape.ts"/>
namespace Drawing{
	export interface IShape{
		draw():void;
	};
};

//FileName :Circle.ts
//// <reference path="IShape.ts"/>
namespace Drawing{
	export class Circle implements IShape{
		public draw(){
			console.log("Circle is drawn");
		};
	};

	
	//FileName : Triangle.ts
	
};
////<reference path="IShape.ts"/>
namespace Drawing{
	export class Triangle implements IShape{
		public draw(){
			console.log("Triangle is drawn");
		};
	}
};

//FileName : TestShape.ts
//// <reference path="IShape.ts"/>
//// <reference path="Circle.ts"/>
//// <reference path="Triangle.ts"/>
export default Drawing;