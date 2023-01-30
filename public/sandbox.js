"use strict";
const logDetails = (uid, item) => {
    console.log(`${item} has uid of  ${uid}`);
};
const greet = (user) => {
    console.log(`${user.name} says hello!`);
};
greet({ name: 'ben', uid: 10 });
