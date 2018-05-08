const loading = () => ({ type: 'FETCH_WEATHER_LOADING' })

const error = () => ({ type: 'FETCH_WEATHER_ERROR' })

const loaded = (town) => ({ type: 'FETCH_WEATHER_SUCCESS', town })


if (navigator.geolocation) {
    console.log('Geolocation is supported!');
}
else {
    console.log('Geolocation is not supported for this Browser/OS version yet.');
}


export const load = (text) => (dispatch, getState) => {
        const addText = text;
        console.log(addText)
        dispatch(loading());

        
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            
        const coords = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=205593667a574bae916183730181704&q=${lat},${lon}&format=json&num_of_days=8&cc=yes&includelocation=yes&tp=3&showlocaltime=yes&lang=ru`
        const towns = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=205593667a574bae916183730181704&q=${addText}&format=json&num_of_days=8&cc=yes&includelocation=yes&tp=3&showlocaltime=yes&lang=ru`
        const guid = () => {
            const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
          }    

            fetch((addText === undefined || addText === '') ? coords : towns) 
                .then(response => response.json())
                .then(obj => {
                                        // current_condition
                    const country = obj.data.nearest_area[0].country[0].value
                    const town = obj.data.nearest_area[0].region[0].value
                    const temp_now = obj.data.current_condition[0].temp_C
                    const data_time = obj.data.time_zone[0].localtime
                    const pic = obj.data.current_condition[0].weatherIconUrl[0].value
                    const state_weather = obj.data.current_condition[0].lang_ru[0].value
                    const wind_speed = obj.data.current_condition[0].windspeedKmph

                                        // today_day
                    const today_day = obj.data.weather[0].date
                    const today_sunrise = obj.data.weather[0].astronomy[0].sunrise
                    const today_suset = obj.data.weather[0].astronomy[0].sunset
                    const temp_today_day = obj.data.weather[0].hourly[4].tempC
                    const state_weather_today_day = obj.data.weather[0].hourly[4].lang_ru[0].value
                    const pic_today_day = obj.data.weather[0].hourly[4].weatherIconUrl[0].value
                    const wind_speed_today_day = obj.data.weather[0].hourly[4].windspeedKmph

                                        //hour_weather_today
                    const am9 = obj.data.weather[0].hourly[3].tempC
                    const am9_pic = obj.data.weather[0].hourly[3].weatherIconUrl[0].value
                    const am9_state = obj.data.weather[0].hourly[3].lang_ru[0].value

                    const pm12 = obj.data.weather[0].hourly[4].tempC
                    const pm12_pic = obj.data.weather[0].hourly[4].weatherIconUrl[0].value
                    const pm12_state = obj.data.weather[0].hourly[4].lang_ru[0].value

                    const pm15 = obj.data.weather[0].hourly[5].tempC
                    const pm15_pic = obj.data.weather[0].hourly[5].weatherIconUrl[0].value
                    const pm15_state = obj.data.weather[0].hourly[5].lang_ru[0].value

                    const pm18 = obj.data.weather[0].hourly[6].tempC
                    const pm18_pic = obj.data.weather[0].hourly[6].weatherIconUrl[0].value
                    const pm18_state = obj.data.weather[0].hourly[6].lang_ru[0].value

                    const pm21 = obj.data.weather[0].hourly[7].tempC
                    const pm21_pic = obj.data.weather[0].hourly[7].weatherIconUrl[0].value
                    const pm21_state = obj.data.weather[0].hourly[7].lang_ru[0].value

                                        // today_night
                    const temp_today_night = obj.data.weather[1].hourly[1].tempC
                    const state_weather_today_night = obj.data.weather[1].hourly[1].lang_ru[0].value
                    const pic_today_night = obj.data.weather[1].hourly[1].weatherIconUrl[0].value
                    const wind_speed_today_night = obj.data.weather[1].hourly[1].windspeedKmph

                                        // tomorrow_day
                    const tomorrow_day = obj.data.weather[1].date
                    const tomorrow_sunrise = obj.data.weather[1].astronomy[0].sunrise
                    const tomorrow_suset = obj.data.weather[1].astronomy[0].sunset
                    const temp_tomorrow_day = obj.data.weather[1].hourly[4].tempC
                    const state_weather_tomorrow_day = obj.data.weather[1].hourly[4].lang_ru[0].value
                    const pic_tomorrow_day = obj.data.weather[1].hourly[4].weatherIconUrl[0].value
                    const wind_speed_tomorrow_day = obj.data.weather[1].hourly[4].windspeedKmph

                                        // tomorrow_night
                    const temp_tomorrow_night = obj.data.weather[2].hourly[1].tempC
                    const state_weather_tomorrow_night = obj.data.weather[2].hourly[1].lang_ru[0].value
                    const pic_tomorrow_night = obj.data.weather[2].hourly[1].weatherIconUrl[0].value
                    const wind_speed_tomorrow_night = obj.data.weather[2].hourly[1].windspeedKmph

                                        // next1_day
                    const next1_day = obj.data.weather[2].date
                    const next1_sunrise = obj.data.weather[2].astronomy[0].sunrise
                    const next1_suset = obj.data.weather[2].astronomy[0].sunset
                    const temp_next1_day = obj.data.weather[2].hourly[4].tempC
                    const state_weather_next1_day = obj.data.weather[2].hourly[4].lang_ru[0].value
                    const pic_next1_day = obj.data.weather[2].hourly[4].weatherIconUrl[0].value
                    const wind_speed_next1_day = obj.data.weather[2].hourly[4].windspeedKmph

                                        // next1_night
                    const temp_next1_night = obj.data.weather[3].hourly[1].tempC
                    const state_weather_next1_night = obj.data.weather[3].hourly[1].lang_ru[0].value
                    const pic_next1_night = obj.data.weather[3].hourly[1].weatherIconUrl[0].value
                    const wind_speed_next1_night = obj.data.weather[3].hourly[1].windspeedKmph

                                        // next2_day
                    const next2_day = obj.data.weather[3].date
                    const next2_sunrise = obj.data.weather[3].astronomy[0].sunrise
                    const next2_suset = obj.data.weather[3].astronomy[0].sunset
                    const temp_next2_day = obj.data.weather[3].hourly[4].tempC
                    const state_weather_next2_day = obj.data.weather[3].hourly[4].lang_ru[0].value
                    const pic_next2_day = obj.data.weather[3].hourly[4].weatherIconUrl[0].value
                    const wind_speed_next2_day = obj.data.weather[3].hourly[4].windspeedKmph
                    
                                        // next2_night
                    const temp_next2_night = obj.data.weather[4].hourly[1].tempC
                    const state_weather_next2_night = obj.data.weather[4].hourly[1].lang_ru[0].value
                    const pic_next2_night = obj.data.weather[4].hourly[1].weatherIconUrl[0].value
                    const wind_speed_next2_night = obj.data.weather[4].hourly[1].windspeedKmph

                                        // next3_day
                    const next3_day = obj.data.weather[4].date
                    const next3_sunrise = obj.data.weather[4].astronomy[0].sunrise
                    const next3_suset = obj.data.weather[4].astronomy[0].sunset
                    const temp_next3_day = obj.data.weather[4].hourly[4].tempC
                    const state_weather_next3_day = obj.data.weather[4].hourly[4].lang_ru[0].value
                    const pic_next3_day = obj.data.weather[4].hourly[4].weatherIconUrl[0].value
                    const wind_speed_next3_day = obj.data.weather[4].hourly[4].windspeedKmph

                                        // next3_night
                    const temp_next3_night = obj.data.weather[5].hourly[1].tempC
                    const state_weather_next3_night = obj.data.weather[5].hourly[1].lang_ru[0].value
                    const pic_next3_night = obj.data.weather[5].hourly[1].weatherIconUrl[0].value
                    const wind_speed_next3_night = obj.data.weather[5].hourly[1].windspeedKmph
                    
                                        // next4_day
                    const next4_day = obj.data.weather[5].date
                    const next4_sunrise = obj.data.weather[5].astronomy[0].sunrise
                    const next4_suset = obj.data.weather[5].astronomy[0].sunset
                    const temp_next4_day = obj.data.weather[5].hourly[4].tempC
                    const state_weather_next4_day = obj.data.weather[5].hourly[4].lang_ru[0].value
                    const pic_next4_day = obj.data.weather[5].hourly[4].weatherIconUrl[0].value
                    const wind_speed_next4_day = obj.data.weather[5].hourly[4].windspeedKmph    
                    
                                        // next4_night
                    const temp_next4_night = obj.data.weather[6].hourly[1].tempC
                    const state_weather_next4_night = obj.data.weather[6].hourly[1].lang_ru[0].value
                    const pic_next4_night = obj.data.weather[6].hourly[1].weatherIconUrl[0].value
                    const wind_speed_next4_night = obj.data.weather[6].hourly[1].windspeedKmph

                                        // next5_day
                    const next5_day = obj.data.weather[6].date
                    const next5_sunrise = obj.data.weather[6].astronomy[0].sunrise
                    const next5_suset = obj.data.weather[6].astronomy[0].sunset
                    const temp_next5_day = obj.data.weather[6].hourly[4].tempC
                    const state_weather_next5_day = obj.data.weather[6].hourly[4].lang_ru[0].value
                    const pic_next5_day = obj.data.weather[6].hourly[4].weatherIconUrl[0].value
                    const wind_speed_next5_day = obj.data.weather[6].hourly[4].windspeedKmph

                                        // next5_night
                    const temp_next5_night = obj.data.weather[7].hourly[1].tempC
                    const state_weather_next5_night = obj.data.weather[7].hourly[1].lang_ru[0].value
                    const pic_next5_night = obj.data.weather[7].hourly[1].weatherIconUrl[0].value
                    const wind_speed_next5_night = obj.data.weather[7].hourly[1].windspeedKmph
                    return [{
                        id: guid(),
                        // current_condition
                        country: country,
                        town: town,
                        temp_now: temp_now,
                        data_time: data_time,
                        pic: pic,
                        state_weather: state_weather,
                        wind_speed: wind_speed,
                        // today_day
                        today_day: today_day,
                        today_sunrise: today_sunrise,
                        today_suset: today_suset,
                        temp_today_day: temp_today_day,
                        state_weather_today_day: state_weather_today_day,
                        pic_today_day: pic_today_day,
                        wind_speed_today_day: wind_speed_today_day,
                        //hour_weather_today
                        am9: am9,
                        am9_pic: am9_pic,
                        am9_state: am9_state,
                        pm12: pm12,
                        pm12_pic: pm12_pic,
                        pm12_state: pm12_state,
                        pm15: pm15,
                        pm15_pic: pm15_pic,
                        pm15_state: pm15_state,
                        pm18: pm18,
                        pm18_pic: pm18_pic,
                        pm18_state: pm18_state,
                        pm21: pm21,
                        pm21_pic: pm21_pic,
                        pm21_state: pm21_state,
                        // today_night
                        temp_today_night: temp_today_night,
                        state_weather_today_night: state_weather_today_night,
                        pic_today_night: pic_today_night,
                        wind_speed_today_night: wind_speed_today_night,
                        // tomorrow_day
                        tomorrow_day: tomorrow_day,
                        tomorrow_sunrise: tomorrow_sunrise,
                        tomorrow_suset: tomorrow_suset,
                        temp_tomorrow_day: temp_tomorrow_day,
                        state_weather_tomorrow_day: state_weather_tomorrow_day,
                        pic_tomorrow_day: pic_tomorrow_day,
                        wind_speed_tomorrow_day: wind_speed_tomorrow_day,
                        // tomorrow_night
                        temp_tomorrow_night: temp_tomorrow_night,
                        state_weather_tomorrow_night: state_weather_tomorrow_night,
                        pic_tomorrow_night: pic_tomorrow_night,
                        wind_speed_tomorrow_night: wind_speed_tomorrow_night,
                        // next1_day
                        next1_day: next1_day, 
                        next1_sunrise: next1_sunrise,
                        next1_suset: next1_suset,
                        temp_next1_day: temp_next1_day,
                        state_weather_next1_day: state_weather_next1_day,
                        pic_next1_day: pic_next1_day,
                        wind_speed_next1_day: wind_speed_next1_day,
                        // next1_night
                        temp_next1_night: temp_next1_night,
                        state_weather_next1_night: state_weather_next1_night,
                        pic_next1_night: pic_next1_night,
                        wind_speed_next1_night: wind_speed_next1_night,
                        // next2_day
                        next2_day: next2_day,
                        next2_sunrise: next2_sunrise,
                        next2_suset: next2_suset,
                        temp_next2_day: temp_next2_day,
                        state_weather_next2_day: state_weather_next2_day,
                        pic_next2_day: pic_next2_day,
                        wind_speed_next2_day: wind_speed_next2_day,              
                        // next2_night
                        temp_next2_night: temp_next2_night,
                        state_weather_next2_night: state_weather_next2_night,
                        pic_next2_night: pic_next2_night,
                        wind_speed_next2_night: wind_speed_next2_night,
                        // next3_day
                        next3_day: next3_day,
                        next3_sunrise: next3_sunrise,
                        next3_suset: next3_suset,
                        temp_next3_day: temp_next3_day,
                        state_weather_next3_day: state_weather_next3_day,
                        pic_next3_day: pic_next3_day,
                        wind_speed_next3_day: wind_speed_next3_day,
                        // next3_night
                        temp_next3_night: temp_next3_night,
                        state_weather_next3_night: state_weather_next3_night,
                        pic_next3_night: pic_next3_night,
                        wind_speed_next3_night: wind_speed_next3_night,
                        // next4_day
                        next4_day: next4_day,
                        next4_sunrise: next4_sunrise,
                        next4_suset: next4_suset,
                        temp_next4_day: temp_next4_day,
                        state_weather_next4_day: state_weather_next4_day,
                        pic_next4_day: pic_next4_day,
                        wind_speed_next4_day: wind_speed_next4_day,
                        // next4_night
                        temp_next4_night: temp_next4_night,
                        state_weather_next4_night: state_weather_next4_night,
                        pic_next4_night: pic_next4_night,
                        wind_speed_next4_night: wind_speed_next4_night,
                        // next5_day
                        next5_day: next5_day,
                        next5_sunrise: next5_sunrise,
                        next5_suset: next5_suset,
                        temp_next5_day: temp_next5_day,
                        state_weather_next5_day: state_weather_next5_day,
                        pic_next5_day: pic_next5_day,
                        wind_speed_next5_day: wind_speed_next5_day,
                        // next5_night
                        temp_next5_night: temp_next5_night,
                        state_weather_next5_night: state_weather_next5_night,
                        pic_next5_night: pic_next5_night,
                        wind_speed_next5_night: wind_speed_next5_night
                    }]
                })
                .then(town => dispatch(loaded(town)))
                .catch(() => dispatch(error()))
        })
    }

