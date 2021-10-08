var Invoice = /** @class */ (function () {
    function Invoice() {
        this.invoiceDate = new Date();
        this.invoiceNumber = '';
        this.totalAmount = 0;
    }
    return Invoice;
}());
var invoiceObjectDefault = new Invoice();
console.log(invoiceObjectDefault);
