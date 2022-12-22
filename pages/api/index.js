const handler =async (req, res) => {
    // fetch data from external API
    const result = await fetch('https://62dbfbe157ac3c3f3c531088.mockapi.io/Houses')
    result.json().then(resuuult =>{
        res.status(result.status).json(resuuult)
    })
}

export default handler ;