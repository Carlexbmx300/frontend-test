export interface Game {
    id: number,
    title: string,
    thumbnail: string,
    short_description: string,

}

export interface GameSearch{
    value:string;
    key:string;
}

export interface GameInfo extends Game{
    description:string;
    minimum_system_requirements: SystemsRequiremnts;
    screenshots: GameScreenshoot[];
    genre: string;
    platform: string;
    publisher: string;
    developer:string;
    release_date: string;
    freetogame_profile_url: string;
    game_url: string;


}

export interface GameScreenshoot{
    id:number;
    image:string;
}

export interface SystemsRequiremnts {
    graphics: string;
    memory: string;
    os: string;
    processor: string;
    storage: string;
    
}
