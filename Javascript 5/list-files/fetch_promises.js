
fetch(`https://api.spacexdata.com/v5/launches/latestttt`)
    .then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error(`Error: ${response.status}`)
        }
    })
    .then((json) => {
        console.log(json.date_utc, json.success)
    })
    .catch((err) => {
        console.log(`Could not get response: ${err}`)
    })
