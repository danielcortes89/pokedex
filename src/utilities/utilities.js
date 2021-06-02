import axios from 'axios'

export const getKanto = async () => {

    try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=150')
        console.log(res.data.results)
        return res.data.results
    } catch (error) {
        console.log(error)
        return null
    }
}