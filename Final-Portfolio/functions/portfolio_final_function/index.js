module.exports = async (event, context) => {

console.log("EVENT:");
console.log(JSON.stringify(event));

console.log("CONTEXT:");
console.log(JSON.stringify(context));


return {
statusCode:200,
body:JSON.stringify({
message:"received"
})
};

};
