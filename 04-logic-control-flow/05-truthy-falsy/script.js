//falsy : false, 0, "", null, NaN, undefined;

//tuthy: everything that no falsy, true; "0", " ", "false", [], {}, function(){(empty function)}

const children = 0;

if (children !== undefined) {
  console.log(`You have ${children} kids`);
} else {
  console.log('You entered wrong amount');
}

// !isNaN(children)

//checking for empty arrays

const posts = [];

if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts');
}

//checking for empty objects

const user = {};

if (Object.keys(user).length > 0) {
  console.log('Обьект user есть');
} else {
  console.log('Обьект user пуст');
}
