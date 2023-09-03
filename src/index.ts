//FileName : Invoice.ts
import { tutorialPoint } from "./namespaceTutorial2.js";
let invoice = new tutorialPoint.invoiceApp.Invoice();
console.log(invoice.calculateDiscount(500));

import Drawing from "./namespaces/namespaceTutorial.js";
function drawAllShapes(shape:Drawing.IShape):void{
	shape.draw();
};
drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());