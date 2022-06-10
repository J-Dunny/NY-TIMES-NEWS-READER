// https://api.nytimes.com/svc/topstories/v2/science.json?SN6wVLHAAcm9HJ447DcuhfXe5WLG25mk

// Key: SN6wVLHAAcm9HJ447DcuhfXe5WLG25mk
// secret: Hcz6dIa8DTFHrDgQ

const getArticles = () => {
    const url = 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=SN6wVLHAAcm9HJ447DcuhfXe5WLG25mk'
    const fetchCall = fetch(url)
        .then(response => response.json())
    return fetchCall
}

export default getArticles