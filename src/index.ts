interface IInvoice {
    invoiceDate: Date;
    invoiceNumber: string;
    totalAmount: number;
}
class Invoice implements IInvoice {
    invoiceDate: Date = new Date();
    invoiceNumber: string = '';
    totalAmount: number =  0;
}

const invoiceObjectDefault: IInvoice = new Invoice();
console.log( invoiceObjectDefault );