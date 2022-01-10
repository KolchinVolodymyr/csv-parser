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
const csvWriter = require('csv-write-stream');
const fs = require('fs');

const app = express();
app.use(upload({useTempFiles: true}));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) =>{
    if(req.files) {
        const orders = [];
        let getProducts =
        csv()
            .fromFile(req.files.file.tempFilePath)
            .then((jsonObj) => {
                console.log('jsonObj', jsonObj);




var arr = [
    { id: 0, weight: 200 },
    { id: 0, weight: 300 },
    { id: 2, weight: 75  },
    { id: 2, weight: 70  },
    { id: 2, weight: 50  },
    { id: 9, weight: 5   }
];

// var arr2 = arr.reduce( (a,b) => {
//     var i = a.findIndex( x => x.id === b.id);
//     console.log('a', a);
//     console.log('a[i]', a[i]);
//     return i === -1 ? a.push({ id : b.id, times : [] }) : a.times.push('d'), a;
//     // a.push({ id : b.id, times : a[i].times++ })
// }, []);
//
// console.log(arr2);

                var combinedItems = arr.reduce(function(arr, item, index) {
                    var found = false;

                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i].id === item.id) {
                            found = true;
                            arr[i].count++;
                        // console.log('arr[i].count++', arr[i].count++);
                            arr[i].arr.push(arr[i].count)
                        }
                    }

                    if (!found) {
                        item.arr = [];
                        item.count = 0;
                        arr.push(item);
                    }

                    return arr;
                }, [])

                console.log(combinedItems);


//                jsonObj.forEach(function (item) {
//                    let count =0;
//                    orders.forEach((el)=>{
////                        console.log('ORDER', el['Email Address']);
//                        if(el['Email Address'] == item['Email']) {
//                            console.log('email.', el['Email Address'])
//                            count++
//                        } else {
//                            orders.push({
//                               'First Name': item['First Name'],
//                               'Last Name': item['Last Name'],
//                               'Email Address': item['Email'],
//                               'Company': item['Company'],
//                               'Phone': item['Phone'],
//                               'Notes': item['Note'],
//                            });
//                        }
//                    })
////                    console.log('item-Email', item['Email']);
////                    console.log('orders', orders['Email Address'])
//
////                    console.log('item', item)
//                })
//                console.log('orders', orders);
            });

        Promise.all([getProducts]).then(() => {
            const writerExport = csvWriter({})

            writerExport.pipe(fs.createWriteStream('neworders.csv'))
            let arr = [];
            let newLine = {};
//            orders.forEach((el)=>{
//                console.log('el', el['Email Address']);
//            })
            for (const line of orders) {
//            console.log('orders', orders);
//            console.log('line', line);
//            arr.push(line)
//            console.log('newLine.includes(lin)', newLine.includes(line['Email']));
//            if(!newLine.includes(line['Email'])) {
//                console.log('line[Email]', line['Email']);
//                console.log('newLine 23232', newLine['Email Address']);
//                newLine.push({newLine'Email Address': line['Email']})
//            }

//                   newLine['First Name'] = line['First Name']
//                   newLine['Email Address'] = line['Email']
//                   newLine['Company'] = line['Company']
//                   newLine['Phone'] = line['Phone']
//                   newLine['Notes'] = line['Note']
//                   newLine['Address First Name'] = line['Address1']
//                   newLine['Address Last Name'] = line['Address2']
//                   newLine['Address Company'] = line['Address Company']

//                    newLine.push({'Last Name': line['Last Name']})

            }
//            for(const el of Object.values(newLine)) {
//                console.log('el', el)
//            }
//             console.log('arr', arr);
//             arr.forEach((index)=>{
//                console.log('index', index['Email']);
//                if(arr.includes('user1@gmail.com')) {
//                console.log('true')
//                }
//             })
//             console.log('newLine finish', newLine);
//            writerExport.write(newLine);
            return;
        });
    }



})

app.listen(3000 || process.env.PORT, () => {
  console.log("Server on...")
})