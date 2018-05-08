import React from 'react'
import SearchWeather from './SearchWeather'
import '../style/WeatherTown.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faThermometerHalf from '@fortawesome/fontawesome-free-solid/faThermometerHalf'
import faCalendarAlt from '@fortawesome/fontawesome-free-solid/faCalendarAlt'
import faClock from '@fortawesome/fontawesome-free-solid/faClock'
import faGlobe from '@fortawesome/fontawesome-free-solid/faGlobe'
import faTachometerAlt from '@fortawesome/fontawesome-free-solid/faTachometerAlt'
import faBinoculars from '@fortawesome/fontawesome-free-solid/faBinoculars'


const WeatherTown = ({
    // current_condition
    country, town, temp_now, data_time, pic, state_weather, wind_speed,
    //hour_weather_today
    am9, am9_pic, am9_state, pm12, pm12_pic, pm12_state, pm15, pm15_pic, pm15_state, pm18, pm18_pic, pm18_state, pm21, pm21_pic, pm21_state,
}) => {
    return (
        <section>
            <section className="main">
                <section className="backMain">
                    <p className="weather_now">Wether Now</p>
                    <p className="country">
                        <FontAwesomeIcon className="icon_country" icon={faGlobe} color="grey" size="xs" />
                        {country}, {town}
                    </p>
                    <p className="data_time">
                        <FontAwesomeIcon className="icon_calend" icon={faCalendarAlt} size="xs" />
                        <FontAwesomeIcon className="icon_clock" icon={faClock} size="xs" />
                        {data_time}
                    </p>
                    <img className="pic" src={pic} alt="" />

                    <p className="temp">
                        <FontAwesomeIcon className="icon_term" icon={faThermometerHalf} size="xs" />
                        {temp_now}°C
                    </p>
                    <p>
                        <SearchWeather />
                    </p>
                    <p className="state_weather">
                        <FontAwesomeIcon className="icon_state_weather" icon={faBinoculars} size="xs" />
                        {state_weather}
                    </p>
                    <p className="wind_speed">
                        <FontAwesomeIcon className="icon_wind_speed_1" icon={faTachometerAlt} size="xs" />
                        {wind_speed} км/ч
                    </p>
                </section>
            </section>
            <section className="hourl_weather">
                <section>
                    <p>
                        <FontAwesomeIcon className="hourl_icon" icon={faClock} size="xs" />
                        9 am
                    </p>
                    <p>
                        <FontAwesomeIcon className="hourl_icon_temp" icon={faThermometerHalf} size="xs" />
                        {am9}°C
                    </p>
                    <img src={am9_pic} alt="" />
                </section>
                <section>
                    <p>
                        <FontAwesomeIcon className="hourl_icon" icon={faClock} size="xs" />
                        12 pm
                    </p>
                    <p>
                        <FontAwesomeIcon className="hourl_icon_temp" icon={faThermometerHalf} size="xs" />
                        {pm12}°C
                    </p>
                    <img src={pm12_pic} alt="" />
                </section>
                <section>
                    <p>
                        <FontAwesomeIcon className="hourl_icon" icon={faClock} size="xs" />
                        15 pm
                    </p>
                    <p>
                        <FontAwesomeIcon className="hourl_icon_temp" icon={faThermometerHalf} size="xs" />
                        {pm15}°C
                        </p>
                    <img src={pm15_pic} alt="" />
                </section>
                <section>
                    <p>
                        <FontAwesomeIcon className="hourl_icon" icon={faClock} size="xs" />
                        18 pm
                    </p>
                    <p>
                        <FontAwesomeIcon className="hourl_icon_temp" icon={faThermometerHalf} size="xs" />
                        {pm18}°C
                        </p>
                    <img src={pm18_pic} alt="" />
                </section>
                <section>
                    <p>
                        <FontAwesomeIcon className="hourl_icon" icon={faClock} size="xs" />
                        21 pm
                    </p>
                    <p>
                        <FontAwesomeIcon className="hourl_icon_temp" icon={faThermometerHalf} size="xs" />
                        {pm21}°C
                    </p>
                    <img src={pm21_pic} alt="" />
                </section>
            </section>
        </section>
    )
}

export default WeatherTown