
// Q2: callbacks and promise 

// callbacks functions
const delayedSuccess = () => {
    setTimeout(() => {
        let success = { message: 'delayed success!'}
        console.log(success)
    }, 500)
}

const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error('error: delyayed exception!')
        } catch (e) {
            console.error(e)
        }
    }, 500)
}

delayedSuccess()
delayedException()


// promise 
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({message: 'resolved promise after 500ms'}), 500)
    })
}

const rejectedPromise = () => {
    return new Promise(( _ , reject) => {
        setTimeout(() => reject(new Error('rejected promise after 500ms')), 500)
    })
}

// test
resolvedPromise()
    .then(msg => console.log(msg))
    .catch(err => console.error(err))
rejectedPromise()
    .then(msg => console.log(msg))
    .catch(err => console.error(err))