try {
    const response = await fetch(
        `https://api.spacexdata.com/v5/launches/latest`,
    )
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
    }
    const json = await response.json()
    console.log(json.date_utc, json.success)
} catch (e) {
    console.log(`Could not get response: ${err}`)
}
