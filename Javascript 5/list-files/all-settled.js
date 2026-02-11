const promise1 = fetch(`https://api.spacexdata.com/v5/launches/5eb87cdbffd86e000604b32c`)
const promise2 = fetch(`https://api.spacexdata.com/v5/launches/5eb87cd9ffd86e000604b32a`)

const result = await Promise.allSettled([promise1, promise2])
for (const response of result) {
    if (response.status === "fulfilled") {
        console.log(await response.value.json())
    } else {
        console.log(response.reason)
    }
}
