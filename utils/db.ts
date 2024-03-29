import { apiVersion, dataset, projectId } from 'lib/providers/sanity/env'

export async function fetchSanity (query: string) {
    const res = await fetch(`https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`)
    const data = await res.json()
    return data.result
}

export const getSongs = async () => {
    const query = `*%5B_type+%3D%3D+%22song%22%5D`
    const res = await fetchSanity(query)
    return res
}

const getCollectibles = async () => {
    const query =  `%5B_type+%3D%3D+%22collection%22%5D%0A%0A`
    const res = await fetchSanity(query)
    return res
}
export const getShows = async () => {
    const query = `*%5B_type+%3D%3D+%22shows%22%5D%0A%0A`
    const res = await fetchSanity(query)
    return res
}
export const getProducts = async () => {
    const query = `*%5B_type+%3D%3D+%22product%22%5D`
    const res = await fetchSanity(query)
    return res
}

export const getProductbyId = async (_id: string) => {
    const query = `*%5B_type+%3D%3D+%22product%22+%26%26+_id+%3D%3D+%27${_id}%27%5D%5B0%5D%0A%0A`
    const res = await fetchSanity(query)
    return res
}

export const getLinks = async () => {
    const query = `*%5B_type+%3D%3D+%22linksPage%22%5D`
    const res = await fetchSanity(query)
    return res
}

export const getSiteSettings = async () => {
    const query = `*%5B_type+%3D%3D+%22siteconfig%22%5D`
    const res = await fetchSanity(query)
    return res
}