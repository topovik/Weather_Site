import React, { Component } from 'react'
import { connect } from 'react-redux'
import WeatherTown_7_days from './WeatherTown_7_days'

class Weather_7_days extends Component {
    render() {
        const list2 = this.props.town.map(t => {
            return(<WeatherTown_7_days key={t.id} 
                // today_day
                today_day={t.today_day}
                today_sunrise={t.today_sunrise}
                today_suset={t.today_suset}
                temp_today_day={t.temp_today_day}
                state_weather_today_day={t.state_weather_today_day}
                pic_today_day={t.pic_today_day}
                wind_speed_today_day={t.wind_speed_today_day}
                // today_night
                temp_today_night={t.temp_today_night}
                state_weather_today_night={t.state_weather_today_night}
                pic_today_night={t.pic_today_night}
                wind_speed_today_night={t.wind_speed_today_night}
                // tomorrow_day
                tomorrow_day={t.tomorrow_day}
                tomorrow_sunrise={t.tomorrow_sunrise}
                tomorrow_suset={t.tomorrow_suset}
                temp_tomorrow_day={t.temp_tomorrow_day}
                state_weather_tomorrow_day={t.state_weather_tomorrow_day}
                pic_tomorrow_day={t.pic_tomorrow_day}
                wind_speed_tomorrow_day={t.wind_speed_tomorrow_day}
                // tomorrow_night
                temp_tomorrow_night={t.temp_tomorrow_night}
                state_weather_tomorrow_night={t.state_weather_tomorrow_night}
                pic_tomorrow_night={t.pic_tomorrow_night}
                wind_speed_tomorrow_night={t.wind_speed_tomorrow_night}
                // next1_day
                next1_day={t.next1_day}
                next1_sunrise={t.next1_sunrise}
                next1_suset={t.next1_suset}
                temp_next1_day={t.temp_next1_day}
                state_weather_next1_day={t.state_weather_next1_day}
                pic_next1_day={t.pic_next1_day}
                wind_speed_next1_day={t.wind_speed_next1_day}
                // next1_night
                temp_next1_night={t.temp_next1_night}
                state_weather_next1_night={t.state_weather_next1_night}
                pic_next1_night={t.pic_next1_night}
                wind_speed_next1_night={t.wind_speed_next1_night}
                // next2_day
                next2_day={t.next2_day}
                next2_sunrise={t.next2_sunrise}
                next2_suset={t.next2_suset}
                temp_next2_day={t.temp_next2_day}
                state_weather_next2_day={t.state_weather_next2_day}
                pic_next2_day={t.pic_next2_day}
                wind_speed_next2_day={t.wind_speed_next2_day  }            
                // next2_night
                temp_next2_night={t.temp_next2_night}
                state_weather_next2_night={t.state_weather_next2_night}
                pic_next2_night={t.pic_next2_night}
                wind_speed_next2_night={t.wind_speed_next2_night}
                // next3_day
                next3_day={t.next3_day}
                next3_sunrise={t.next3_sunrise}
                next3_suset={t.next3_suset}
                temp_next3_day={t.temp_next3_day}
                state_weather_next3_day={t.state_weather_next3_day}
                pic_next3_day={t.pic_next3_day}
                wind_speed_next3_day={t.wind_speed_next3_day}
                // next3_night
                temp_next3_night={t.temp_next3_night}
                state_weather_next3_night={t.state_weather_next3_night}
                pic_next3_night={t.pic_next3_night}
                wind_speed_next3_night={t.wind_speed_next3_night} 
                // next4_day
                next4_day={t.next4_day}
                next4_sunrise={t.next4_sunrise}
                next4_suset={t.next4_suset}
                temp_next4_day={t.temp_next4_day}
                state_weather_next4_day={t.state_weather_next4_day}
                pic_next4_day={t.pic_next4_day}
                wind_speed_next4_day={t.wind_speed_next4_day}
                // next4_night
                temp_next4_night={t.temp_next4_night}
                state_weather_next4_night={t.state_weather_next4_night}
                pic_next4_night={t.pic_next4_night}
                wind_speed_next4_night={t.wind_speed_next4_night}
                // next5_day
                next5_day={t.next5_day}
                next5_sunrise={t.next5_sunrise}
                next5_suset={t.next5_suset}
                temp_next5_day={t.temp_next5_day}
                state_weather_next5_day={t.state_weather_next5_day}
                pic_next5_day={t.pic_next5_day}
                wind_speed_next5_day={t.wind_speed_next5_day}
                // next5_night
                temp_next5_night={t.temp_next5_night}
                state_weather_next5_night={t.state_weather_next5_night}
                pic_next5_night={t.pic_next5_night}
                wind_speed_next5_night={t.wind_speed_next5_night} />)
        })
        return(
            <section>
                {list2}
            </section>
        )
    }
}

const mapsStateToProps = (state) => {
    return {
        town: state.fetchReducer.town
    }
}

export default connect(mapsStateToProps)(Weather_7_days)