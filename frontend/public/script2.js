window.addEventListener('load', () => {
  console.log('loaded from a public directory');

  const formElement = document.querySelector('form');
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    const imgName = event.target.querySelector('input[type="text"]').value;
    const imgFile = event.target.querySelector('input[type="file"]').files[0];

    const formData = new FormData();
    formData.append('imageName', imgName);
    formData.append('imageFile', imgFile);

    const fetchSettings = {
      method: 'POST',
      body: formData,
    };

    fetch('/uploadImg', fetchSettings)
      .then(async (data) => {
        if (data.status === 200) {
          const response = await data.json();
          event.target.outerHTML = `<img src="public/${response.imageName}.jpg">`;
        } else {
          event.target.outerHTML = 'hülye vagy teso';
        }
      })
      .catch((error) => {
        event.target.outerHTML = 'hülye vagy teso';
        console.log(error);
      });

    console.log(event.target, imgName, imgFile);
  });

  // input field from

  const yourName = document.querySelector('.your-name');
  const yourAge = document.querySelector('.your-age');
  const yourMail = document.querySelector('.your-mail');
  const yourAdd = document.querySelector('.your-add');
  const submit = document.querySelector('.submit');

  submit.addEventListener('click', () => {
    // console.log(yourName.value);
    // console.log(yourNum.value);

    let yourValue = {
      name: `${yourName.value}`,
      age: `${yourAge.value}`,
      address: `${yourAdd.value}`,
      email: `${yourMail.value}`,
    };

    console.log(yourValue);

    // const jsonYour = JSON.stringify(yourValue);
    // console.log(jsonYour);

    //   fs.writeFile('../backend/yourData', JSON.stringify(yourValue), (err) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       console.log('file successfully added');
    //     }
    //   });
    // });
  });
});
