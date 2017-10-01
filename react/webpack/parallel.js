
let parallel;

export default parallel = function (input, execute, limit) {
    var output = [], count = 0;
    (limit > 0) || (limit = 1);
    return new Promise(function (resolve) {
        (function next() {
            if (input.length) {
                if (count < limit) {
                    count += 1;
                    execute(input.shift()).then(function (data) {
                        output.push(data);
                        count -= 1;
                        next();
                    });
                    next();
                }
                return;
            }
            count || resolve(output);
        }());
    });
};
