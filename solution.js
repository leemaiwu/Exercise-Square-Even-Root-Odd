const sumSquareEvenRootOdd = ns => {
    for (let i = 0; i < ns.length; i++) {
        if (ns[i] % 2 == 0) {
            ns[i] = ns[i] * ns[i]
        } else if (ns[i] % 2 !== 0) {
            ns[i] = Math.sqrt(ns[i])
        }
    }
    return Math.round(ns.reduce((a, b) => a + b, 0) * 100) / 100
}


console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]))
