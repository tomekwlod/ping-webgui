
const delay = time => {
    return new Promise((resolve) => {

        if (time) {

            return setTimeout(resolve, time);
        }

        return resolve();
    })
};

export default delay;

export const reject = time => {
    return new Promise((resolve, reject) => {

        if (time) {

            return setTimeout(reject, time);
        }

        return reject();
    })
}