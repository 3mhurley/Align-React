const router = require("express").Router();
const nodemailer = require('nodemailer');
const info = require('./config/contactFormConfig');

// router.post("/", (req, res, next) => {

// var transport = ({
//         host: 'smtp.mail.yahoo.com',
//         port: 465,
//         secure: true,
//         auth: {
//             user: info.USER,
//             pass: info.PASS
    
//         },
//         tls: {
//             rejectUnauthorized: false
//         }
//     });

// var transporter = nodemailer.createTransport(transport);

// transporter.verify((err, success) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Server up and running');
//     }   
// });


//     let name = req.body.name;
//     let email = req.body.email;
//     let message = req.body.message;
//     let content = `name: ${name} \n email: ${email} \n message: ${message}`

//     const mail = {
//         from: 'alignteamdu@yahoo.com',
//         to: 'alignteamdu@yahoo.com',
//         subject: 'New Message from Align Contact Form',
//         text: content
//     }


//     transporter.sendMail(mail, (err, data) => {
//         if (err) {
//             res.json({err})
//         } else {
//             res.json({msg: 'success'})
//         }
//     })
// })

var transport = ({
            host: 'smtp.mail.yahoo.com',
            port: 465,
            secure: true,
            auth: {
                user: info.USER,
                pass: info.PASS
        
            },
            tls: {
                rejectUnauthorized: false
            }
        });

var transporter = nodemailer.createTransport(transport);

transporter.verify((err, success) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server up and running');
    }   
});

router.post("/", (req, res, next) => {
    console.log(req.body.data);


    let name = req.body.data.name
    let email = req.body.data.email
    let message = req.body.data.message
    let content = `name: ${name} \n email: ${email} \n message: ${message} `

    console.log(name);
    console.log(email);
    console.log(message);

    let mail = {
        from: 'alignteamdu@yahoo.com',
        to: 'alignteamdu@yahoo.com',
        subject: 'New New Message from Align Contact Form',
        text: content
    }

        transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({err})
        } else {
            res.json({msg: 'success'})
        }
    })
})



module.exports = router;




