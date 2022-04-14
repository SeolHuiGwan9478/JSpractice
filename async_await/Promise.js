const p = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('success'); }, 2000);
});

const p = new Promise((resolve, reject) => {
    setTimeout(() => { reject(new Error('fail')); }, 2000);
});

p.catch((error) => {console.log(error)});
