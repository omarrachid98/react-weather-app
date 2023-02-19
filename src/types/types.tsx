export type SearchProps = {
    search: string,
    onSearchSubmit: React.FormEventHandler<HTMLFormElement>
    onChangeSearch: React.ChangeEventHandler<HTMLInputElement>
}

export type WeatherData = {
    weather: any;
}

export type WeatherProps = {
    error: string,
    loader: boolean,
    weatherData: any
}


