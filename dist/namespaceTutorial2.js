//Nested namespaces
export var tutorialPoint;
(function (tutorialPoint) {
    let invoiceApp;
    (function (invoiceApp) {
        class Invoice {
            calculateDiscount(price) {
                return price * .40;
            }
            ;
        }
        invoiceApp.Invoice = Invoice;
        ;
    })(invoiceApp = tutorialPoint.invoiceApp || (tutorialPoint.invoiceApp = {}));
})(tutorialPoint || (tutorialPoint = {}));
;
//# sourceMappingURL=namespaceTutorial2.js.map