module.exports = async function (context, req) {
    var dt = new Date();
    context.log('Generating Nonsense...');
    context.res = {
        body: "Automation test, current date: " + dt.toString()
    };
};
