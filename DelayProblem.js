delay()
async function delay() {
    console.log(5)
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log(6)
}