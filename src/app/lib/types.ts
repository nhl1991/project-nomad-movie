export type Movie = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: Array<number>,
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,

}

export type Detail = {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: null,
    budget: number,
    genres: genre[],
    homepage: string,
    id: number,
    imdb_id: string,
    origin_country: string[],
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: production_company[],
    production_countries: production_country[],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: spoken_language[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}


export type Video = {
    iso_639_1: string,
    iso_3166_1: string,
    name: string,
    key: string,
    site: string,
    size: number,
    type: string,
    official: boolean,
    published_at: string,
    id: string
}

type genre = {
    id: number,
    name: string
};

type production_company = {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string
}

type production_country = {
    iso_3166_1: string,
    name: string,
}

type spoken_language = {
    english_name: string,
    iso_639_1: string,
    name: string
}


export type WatchProviders = {
    [countryCode: string]: {
      link: string;
      flatrate?: Provider[];
      buy?: Provider[];
      rent?: Provider[];
    };
  }
  
  export type Provider = {
    logo_path: string;
    provider_id: number;
    provider_name: string;
    display_priority: number;
  }

  export type Credit = {
    adult: boolean,
    gender: number,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string,
    cast_id: number,
    character: string,
    credit_id: string,
    order: number
  }