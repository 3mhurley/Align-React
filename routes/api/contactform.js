const router = require("express").Router();
const nodemailer = require('nodemailer');
const info = require('../../client/src/components/ContactMain/Config/Config');


var transport = {
    host: 'smtp.yahoo.com',
    auth: {
        user: info.USER,
        pass: info.PASS

    }
}

console.log(info.USER)


var transporter = nodemailer.createTransport(transport);

transporter.verify((err, success) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server is ready to take messages');
    }
});

router.post('/send', (req, res, next) => {
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;
    let content = `name: ${name} \n email: ${email} \n message: ${message}`

    const mail = {
        from: name,
        to: 'bbanderson84@gmail.com',
        subject: 'New Message from Align Contact Form',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({msg: 'fail'})
        } else {
            res.json({msg: 'success'})
        }
    })
})

module.exports = router;




