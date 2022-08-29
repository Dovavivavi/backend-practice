const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();

app.use(fileUpload());

const port = 9000;

//engedélyezi a fileokat
app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/index.html`));
});

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/style.css`));
});

app.get('/script.js', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/script.js`));
});

//mindent engedélyez a public mappából(nem kellenek a felso requestek)
app.use('/public', express.static(`${__dirname}/../frontend/public`));

app.post('/uploadImg', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('no file was uploaded');
  }

  const file = req.files.imageFile;
  const fileName = req.body.imageName;

  file.mv(`${__dirname}/../frontend/public/${fileName}.jpg`, (error) => {
    if (error) {
      return res.status(500).send(error);
    }

    return res.status(200).send({
      imageName: fileName,
    });
  });
});

app.listen(port, () => {
  console.log(`The server is running at http://127.0.0.1:9000`);
});
