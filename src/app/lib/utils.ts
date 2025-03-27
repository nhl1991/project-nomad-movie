

export async function getMovie() {

    const res = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies', {
        method: 'get'
    })

    const json = await res.json()

    return json;
}

export async function getMovieById(id: string) {
    const res = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}`, {
        method: 'get'
    })

    const json = await res.json()

    return json;
}

export async function getVideosById(id: string) {

    const res = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}/videos`, {
        method: 'get'
    })

    const json = await res.json()

    return json;
}

export async function getProviderById(id: string){
    const res = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}/providers`, {
        method: 'get'
    })

    const json = await res.json()

    return json;
}

export async function  getCreditById(id:string) {
    const res = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}/credits`, {
        method: 'get'
    })

    const json = await res.json()

    return json;
    
}