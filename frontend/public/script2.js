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

   //ARRAY METHODS:
   const items = [
    {name: 'Bike', price: 200},
    {name: 'Game', price: 500},
    {name: 'Soap', price: 800},
    {name: 'Book', price: 60},
    {name: 'Phone', price: 800},
    {name: 'CD', price: 900},
    {name: 'Console', price: 273},
    {name: 'TV', price: 221},
    {name: 'Shoe', price: 189},
    {name: 'T-shirt', price: 145},
    {name: 'Trousers', price: 150}
  ];
  console.log(items)

  //filter:
  const filteredArr = items.filter((item) => {
    return item.price >= 800
  });
  console.log(filteredArr);

  //map:
  const mappedArr = items.map((item) => {
    return item.name
  });
  console.log(mappedArr);

  //find:
  const foundItem = items.find((item) => {
    return item.name === 'CD'
  });
  console.log(foundItem)

  //forEach:
  items.forEach((i) => {
    console.log(i.name)
  });

  //some (checks if there are any matched items):
  const hasFreeItem = items.some((it) => {
    return it.price = 0
  });
  console.log(hasFreeItem);

  //every (checks if every item matches the param):
  const isEveryBelow1k = items.every((item) => {
    return item.price < 1000
  })
  console.log(isEveryBelow1k)

  
});
