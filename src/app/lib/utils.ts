

export async function getMovie() {
  try {
    const res = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies", {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch movies: ${res.status} ${res.statusText}`);
    }

    const json = await res.json();
    // if (!Array.isArray(json)) {
    //   throw new Error("Movie API did not return an array");
    // }

    return json;
  } catch (error) {
    console.error("getMovie error:", error);
    return [];
  }
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