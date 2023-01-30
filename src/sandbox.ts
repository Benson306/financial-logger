type stringOrNum = string | number;

const logDetails = (uid: stringOrNum, item: string) =>{
    console.log(`${item} has uid of  ${uid}`);
}

type objWithName = {name: string, uid: stringOrNum };

const greet = (user: objWithName) => {
    console.log(`${user.name} says hello!`)
}

greet({name:'ben',uid:10});