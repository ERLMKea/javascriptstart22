// der er 7 (3+2+2) primitive typer i JavaScript
// Number String Boolean
// Undefined Null
// Symbol og BigInt .. dem bruger vi ikke

//der er yderligere 2 typer
// object function

function showTypes(lst) {
    console.log("STARTER Udskrivning")
    for (const obj of lst) {
        console.log(obj + " er af typen=" + typeof obj)
    }
}

function out(any) {
    console.log(any)
}

function outtype(any) {
    console.log("type= " + typeof any)
    console.log(any)
}


let b
let arr = [5, "hej", 5.6, 'a', b, null, [1,2,3], {"navn": "erik"}, out]
out(5)
arr.forEach(outtype)
