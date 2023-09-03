//Nested namespaces
export namespace tutorialPoint{
	export namespace invoiceApp{
		export class Invoice{
			public calculateDiscount(price: number):number{
				return price * .40;
			};
		};
	}
};

