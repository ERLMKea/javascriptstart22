
const a = 5 //const you cannot assign to other variable
let b3 = "hej" //let , normal assign, you can reassign
b3 = 8
var c = null //is not allowed, because of scope
c = 9

function testScope() {
    let x = 5
    let y = 6
    if (y>x) {
        console.log("inside scope2")
        let a = 4
        var b = 5
        if (b>a) {
            let a1 = 10
            var b1 = 11
        }
    }
    console.log(b1) //kan tilgås og det er en fejl ved var
    console.log(a1) //kan ikke tilgås som forventet.
}
testScope()

