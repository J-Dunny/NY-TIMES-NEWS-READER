const getArticles = () => {
    const fetchCall = fetch(`https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
        if (response.status === 404) {
            throw new Error("404: Not Found")
        } else if (response.status === 500) {
            throw new Error("500: Server is having issues")
        }
        return response.json()
    })
    return fetchCall
}

export default getArticles