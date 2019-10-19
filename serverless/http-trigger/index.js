exports.helloCloud = (req, res) => {
    const target = process.env.TARGET || 'Cloud';
    res.send(`Hello, ${target}!`);
};
