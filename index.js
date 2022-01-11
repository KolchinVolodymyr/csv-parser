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
        const data = [];
        let getProducts =
        csv()
            .fromFile(req.files.file.tempFilePath)
            .then((jsonObj) => {
//                console.log('jsonObj', jsonObj);
var arrNew = [

           {
             'First Name': '',
             'Last Name': '',
             Email: 'user1@gmail.com',
             Company: 'Company 1 test',
             Address1: '150 Elgin St 1',
             Address2: 'Unit 111',
             City: 'Ottawa',
             Province: 'Ontario',
             'Province Code': 'ON',
             Country: 'Canada',
             'Country Code': 'CA',
             Zip: 'K2P 1L4',
             Phone: '',
             'Accepts Marketing': '',
             Tags: '',
             Note: '',
             'Tax Exempt': '',
             'Metafield Namespace': 'global',
             'Metafield Key': 'email_list',
             'Metafield Value': 'weekly',
             'Metafield Value Type': 'string'
           },
           {
             'First Name': '',
             'Last Name': '',
             Email: 'user1@gmail.com',
             Company: 'Company 1 test',
             Address1: '150 Elgin St 2',
             Address2: 'Unit 333',
             City: 'Ottawa',
             Province: 'Ontario',
             'Province Code': 'ON',
             Country: 'Canada',
             'Country Code': 'CA',
             Zip: 'K3P 1L4',
             Phone: '',
             'Accepts Marketing': '',
             Tags: '',
             Note: '',
             'Tax Exempt': '',
             'Metafield Namespace': 'global',
             'Metafield Key': 'email_list',
             'Metafield Value': 'weekly',
             'Metafield Value Type': 'string'
           },
           {
             'First Name': '',
             'Last Name': '',
             Email: 'user1@gmail.com',
             Company: 'Company 1 test',
             Address1: '150 Elgin St 3',
             Address2: 'Unit 441',
             City: 'Ottawa',
             Province: 'Ontario',
             'Province Code': 'ON',
             Country: 'Canada',
             'Country Code': 'CA',
             Zip: 'K4P 1L4',
             Phone: '',
             'Accepts Marketing': '',
             Tags: '',
             Note: '',
             'Tax Exempt': '',
             'Metafield Namespace': 'global',
             'Metafield Key': 'email_list',
             'Metafield Value': 'weekly',
             'Metafield Value Type': 'string'
           },
           {
             'First Name': '',
             'Last Name': '',
             Email: 'john.doe@acme.com',
             Company: 'Acme Ltd.',
             Address1: '150 Elgin St',
             Address2: 'Unit 56',
             City: 'Ottawa',
             Province: 'Ontario',
             'Province Code': 'ON',
             Country: 'Canada',
             'Country Code': 'CA',
             Zip: 'K2P 1L4',
             Phone: '',
             'Accepts Marketing': '',
             Tags: '',
             Note: '',
             'Tax Exempt': '',
             'Metafield Namespace': 'global',
             'Metafield Key': 'email_list',
             'Metafield Value': 'weekly',
             'Metafield Value Type': 'string'
           },
           {
             'First Name': '',
             'Last Name': '',
             Email: 'john.doe@acmes.com',
             Company: '',
             Address1: '',
             Address2: '',
             City: '',
             Province: '',
             'Province Code': '',
             Country: '',
             'Country Code': '',
             Zip: '',
             Phone: '',
             'Accepts Marketing': '',
             Tags: '',
             Note: '',
             'Tax Exempt': '',
             'Metafield Namespace': 'global',
             'Metafield Key': 'corporate',
             'Metafield Value': 'true',
             'Metafield Value Type': 'string'
           },
           {
             'First Name': 'Jane',
             'Last Name': 'Doe',
             Email: 'jane.doe@acmey.com',
             Company: 'Acme Inc.',
             Address1: '490 Rue de la Gauchetière O',
             Address2: '',
             City: 'Montreal',
             Province: 'Quebec',
             'Province Code': 'QC',
             Country: 'Canada',
             'Country Code': 'CA',
             Zip: 'H2Z 0B2',
             Phone: '613-555-6666',
             'Accepts Marketing': 'false',
             Tags: '',
             Note: 'Tendency to return clothing in size 0.',
             'Tax Exempt': 'true',
             'Metafield Namespace': 'global',
             'Metafield Key': 'frequent_returner',
             'Metafield Value': 'TRUE',
             'Metafield Value Type': 'string'
           },
           {
             'First Name': 'Jane',
             'Last Name': 'Doe',
             Email: 'jane.doe@acmey.com',
             Company: 'Acme Inc.',
             Address1: '560 Random streen name',
             Address2: '',
             City: 'Montreal',
             Province: 'Quebec',
             'Province Code': 'QC',
             Country: 'Canada',
             'Country Code': 'CA',
             Zip: 'H2Z 0B2',
             Phone: '613-555-6666',
             'Accepts Marketing': 'false',
             Tags: '',
             Note: 'Tendency to return clothing in size 0.',
             'Tax Exempt': 'true',
             'Metafield Namespace': 'global',
             'Metafield Key': 'frequent_returner',
             'Metafield Value': 'TRUE',
             'Metafield Value Type': 'string'
           }
         ]


        var combinedItems = jsonObj.reduce(function(arr, item, index) {
            var found = false;

            for (var i = 0; i < arr.length; i++) {
                if (arr[i].Email === item.Email) {
                    found = true;
//                    arr[i].count++;
                    arr[i].arr.push({
                        'Address Line 1': item.Address1,
                        'Address Line 2': item.Address2,
                        'Address Company': item.Company,
                        'Address City': item.City,
                        'Address Zip': item.Zip,
                        'Address Country': item.Country,
                        'Address Phone': item.Phone,
                    })
                }
            }

            if (!found) {
                item.arr = [{
                    'Address Line 1': item.Address1,
                    'Address Line 2': item.Address2,
                    'Address Company': item.Company,
                    'Address City': item.City,
                    'Address Zip': item.Zip,
                    'Address Country': item.Country,
                    'Address Phone': item.Phone,
                }];
//                item.count = 1;
                arr.push(item);
                data.push(arr[i]);
            }

            return arr;
        }, [])

            });

        Promise.all([getProducts]).then(() => {
            const writerExport = csvWriter({})

            writerExport.pipe(fs.createWriteStream('neworders.csv'));
            let newArr = [];

            data.map((i)=>{
                let count = 0;
                i.arr.map((a, index)=>{
                    index++;
                    count++;
                    // loop over keys and values
                    Object.entries(a).forEach(([key, value]) => {
                         i[`${key} - ${index}`] = value;
                    });

                });
                console.log('count', count)
                delete i.arr;
            });
//            console.log('data', data);


            /*Change arr*/
            var changeArray = data.map((item, index) => ({
                'First Name': item['First Name'],
                'Last Name': item['Last Name'],
                'Email Address': item['Email'],
                'Company': item['Company'],
                'Phone': item['Phone'],
                'Notes': item['Note']

            }))
//            console.log('changeArray', changeArray)
console.log('data', data)
            /*Write CSV*/
            data.map((el)=>{
//                console.log('el.length', Object.keys(el[0]).length);
//                Object.keys(el[0]).length
                writerExport.write(el);
            })

//            console.log(changeArray);
//            var ElementList ={}
//            data.map((el)=>{
//                'Address': el['Email']
//            })
//            for (const line of data) {
//               line['Email Address']: line['Email'];
//               delete line['Email'];
//
//                console.log('line', line);
//                Object.assign(ElementList, line.arr)
//                newArr.push(line);
//                 writerExport.write(line);
//                Object.assign(ElementList, line.arr)

//                console.log('Object.assign({', Object.assign({}, line.arr))
//                newLine['First Name'] = line['First Name']
//                newLine['Email Address'] = line['Email']

//                   newLine['First Name'] = line['First Name']
//                   newLine['Email Address'] = line['Email']
//                   newLine['Company'] = line['Company']
//                   newLine['Phone'] = line['Phone']
//                   newLine['Notes'] = line['Note']
//                   newLine['Address First Name'] = line['Address1']
//                   newLine['Address Last Name'] = line['Address2']
//                   newLine['Address Company'] = line['Address Company']
//                   newLine.push({'Last Name': line['Last Name']})
//            }

//            console.log('data', data);
//const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'], ['0', 'adddd'] ];
//const obj = Object.fromEntries(arr);
//console.log(obj); // { 0: "a", 1: "b", 2: "c" }
//             writerExport.write(obj);
        });
    }



})

app.listen(3000 || process.env.PORT, () => {
  console.log("Server on...");
})