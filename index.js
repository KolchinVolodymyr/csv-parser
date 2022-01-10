//const csv = require('csvtojson');
//const csvWriter = require('csv-write-stream');
//const fs = require('fs');
//
//
//
//const orders = [];
//const weights = [];
//
//    let getProducts =
//    csv()
//        .fromFile('ordersFromShopify.csv')
//        .then((jsonObj) => {
//
//            jsonObj.forEach(function (item) {
//
//                orders.push(item);
//
//            })
//        });
//
//
//Promise.all([getProducts]).then(() => {
//
//
//    const newOrders = [];
//    const writerExport = csvWriter({
//    })
//
//    writerExport.pipe(fs.createWriteStream('neworders.csv'))
//    let orderNum = '';
//    let newLine = {};
//
//    for (const line of orders) {
//        if (line['Name'] !== orderNum) {
//            if (typeof (newLine['Name']) !== 'undefined') {
//                writerExport.write(newLine);
//            }
//            newLine = Object.assign({}, line)
//            orderNum = line['Name'];
//        } else {
//            newLine['Lineitem price'] = newLine['Lineitem price'] + '|' + line['Lineitem price']
//            newLine['Lineitem name'] = newLine['Lineitem name'] + '|' + line['Lineitem name']
//            newLine['Lineitem quantity'] = newLine['Lineitem quantity'] + '|' + line['Lineitem quantity']
//            newLine['Lineitem sku'] = newLine['Lineitem sku'] + '|' + line['Lineitem sku']
//            newLine['Lineitem fulfillment status'] = newLine['Lineitem fulfillment status'] + '|' + line['Lineitem fulfillment status']
//
//        }
//    }
//    writerExport.write(newLine);
//});

const express = require("express");
const upload = require("express-fileupload")
const csv = require('csvtojson');

const app = express();
app.use(upload({useTempFiles: true}));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})
app.post('/', (req, res) =>{
    if(req.files) {
    const orders = [];
//        console.log('files', __dirname+'/'+req.files.file.name);
        console.log('files', req.files);
//        console.log('data', req.files.file.data.toString('utf8'));

            let getProducts =
            csv()
                .fromFile(__dirname+'/'+req.files.file.name)
                .then((jsonObj) => {
                    jsonObj.forEach(function (item) {
                        orders.push(item);
                    })
//                    console.log('orders', orders);
                });
    }

    console.log('hi');

})

app.listen(3000 || process.env.PORT, () => {
  console.log("Server on...")
})