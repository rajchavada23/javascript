# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript

const buttons = document.querySelectorAll('.button');
console.log(buttons);

const body = document.querySelector('body');
console.log(body);

// buttons.forEach((button) => {
//   console.log(button);
//   button.addEventListener('click', (e) => {
//     console.log(e);
//     console.log(e.target);
//     switch (e.target.id) {
//       case 'grey':
//         body.style.backgroundColor = e.target.id;
//         break;
//       case 'white':
//         body.style.backgroundColor = e.target.id;
//         break;
//       case 'blue':
//         body.style.backgroundColor = e.target.id;
//         break;
//       case 'yellow':
//         body.style.backgroundColor = e.target.id;
//         break;
//       case 'green':
//         body.style.backgroundColor = e.target.id;
//         break;
//       default:
//         body.style.backgroundColor = 'white';
//         break;
//     }
//   });
// });

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```