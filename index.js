const express = require("express");
const upload = require("express-fileupload");
const csv = require('csvtojson');
const csvWriter = require('csv-write-stream');
const fs = require('fs');

const app = express();
app.use(upload({useTempFiles: true}));

app.get('/', (req, res) => {
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

        var combinedItems = jsonObj.reduce(function(arr, item, index) {
            var found = false;

            for (var i = 0; i < arr.length; i++) {
                if (arr[i].Email === item.Email) {
                    found = true;
                    arr[i].count++;
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
                item.count = 1;
                arr.push(item);
                data.push(arr[i]);
            }

            return arr;
        }, [])

            });

        Promise.all([getProducts]).then(() => {
            const writerExport = csvWriter({})

            writerExport.pipe(fs.createWriteStream('newCustomer.csv'));

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
                // console.log('count', count);
                delete i.arr;
            });


            /*Change arr*/
            var changeArray = data.map((item, index) => ({
                'Last Name': item['Last Name'],
                'First Name': item['First Name'],
                'Email Address': item['Email'],
                'Company': item['Company'],
                'Phone': item['Phone'],
                'Notes': item['Note'],
                'Address First Name - 1': item['First Name'],
                'Address Last Name - 1': item['Last Name'],
                'Address Company - 1': item['Address Company - 1'],
                'Address Line 1 - 1': item['Address Line 1 - 1'],
                'Address Line 2 - 1': item['Address Line 1 - 2'],
                'Address City - 1': item['Address City - 1'],
                'Address Zip - 1': item['Address Zip - 1'],
                'Address Country - 1': item['Address Country - 1'],
                'Address Phone - 1': item['Address Phone - 1'],
                'Address First Name - 2': item['First Name'],
                'Address Last Name - 2': item['Last Name'],
                'Address Company - 2': item['Address Company - 2'],
                'Address Line 1 - 2': item['Address Line 1 - 2'],
                'Address Line 2 - 2': item['Address Line 2 - 2'],
                'Address City - 2': item['Address City - 2'],
                'Address Zip - 2': item['Address Zip - 2'],
                'Address Country - 2': item['Address Country - 2'],
                'Address Phone - 2': item['Address Phone - 2'],
                'Address First Name - 3': item['First Name'],
                'Address Last Name - 3': item['Last Name'],
                'Address Company - 3': item['Address Company - 3'],
                'Address Line 1 - 3': item['Address Line 1 - 3'],
                'Address Line 2 - 3': item['Address Line 2 - 3'],
                'Address City - 3': item['Address City - 3'],
                'Address Zip - 3': item['Address Zip - 3'],
                'Address Country - 3': item['Address Country - 3'],
                'Address Phone - 3': item['Address Phone - 3'],
                'Accepts Marketing': item['Accepts Marketing'],
                'Metafield Namespace': item['Metafield Namespace'],
                'Metafield Key': item['Metafield Key'],
                'Metafield Value': item['Metafield Value'],
                'Metafield Value Type': item['Metafield Value Type'],
            }))

            /*Write CSV*/
            changeArray.map((el)=>{
                writerExport.write(el);
            })

        });
    }
    res.sendFile(__dirname + '/completion.html');
})

app.get('/download', function (req, res, next) {
    res.download(__dirname + '/newCustomer.csv', 'newCustomer.csv');
});

app.listen(3000 || process.env.PORT, () => {
  console.log("Server on...");
})