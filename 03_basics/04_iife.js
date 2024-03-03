// Immediately Invoked Function Expressions (IIFE)

// named IIFE

function dummyFunction() {
    console.log(`DB Connect`);
}

dummyFunction();

(function dummyFun() {
    console.log(`DB Connect`);
})();

(function aurCode() {
    console.log(`DB CONNECT TWO`);
})();

// unamed IIFE

((name) => {
    console.log(`DB CONNECT ARROW FUNCTION ${name}`);
})("RDJ")