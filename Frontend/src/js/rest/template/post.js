module.exports = (url, data, onReply) => {
    return require('request')
        .post(url, {
            json: true,
            body: data
        }, (error, response, body) => {
            onReply(body);
        });
};