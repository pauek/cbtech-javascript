console.log("Start")

setTimeout(
    () => console.log("A"), 
    2000
)
setTimeout(
    () => console.log("B"), 
    1000
)
setTimeout(
    () => console.log("C"), 
    0
)


console.log("End")
