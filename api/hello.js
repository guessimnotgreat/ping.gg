export default (req, res) => {
    const { input1, input2 } = req.query;
    const result = `Input 1: ${input1}, Input 2: ${input2}`;
    res.status(200).send(result);
};