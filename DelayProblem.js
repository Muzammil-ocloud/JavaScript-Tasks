const promise1 = () => new Promise(resolve => setTimeout(() => resolve(1), 1000));
const promise2 = () => new Promise(resolve => setTimeout(() => resolve(2), 500));
const promise3 = () => new Promise(resolve => setTimeout(() => resolve(3), 800));
const promise4 = () => new Promise(resolve => setTimeout(() => resolve(4), 300));
const promiseFunctions = [promise1, promise2, promise3, promise4];
const delay = 1000;
delayedPromiseChain(promiseFunctions, delay);


async function delayedPromiseChain(promiseFunctions, delay) {
    for await (let promise of promiseFunctions) {
        let data = await promise()
        console.log(data)
        await delay_func(delay);
    }
}
async function delay_func(d) {
    await new Promise(resolve => setTimeout(resolve, d));
}