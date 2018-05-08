import React from 'react'
import '../style/WeatherTown_7_days.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTachometerAlt from '@fortawesome/fontawesome-free-solid/faTachometerAlt'
import faThermometerHalf from '@fortawesome/fontawesome-free-solid/faThermometerHalf'
import faCalendarAlt from '@fortawesome/fontawesome-free-solid/faCalendarAlt'

const WeatherTown_7_days = ({
    // today_day
    today_day, temp_today_day, pic_today_day, wind_speed_today_day,
    // today_night
    temp_today_night, pic_today_night, wind_speed_today_night,
    // tomorrow_day
    tomorrow_day, temp_tomorrow_day, pic_tomorrow_day, wind_speed_tomorrow_day,
    // tomorrow_night
    temp_tomorrow_night, pic_tomorrow_night, wind_speed_tomorrow_night,
    // next1_day
    next1_day, temp_next1_day, pic_next1_day, wind_speed_next1_day,
    // next1_night
    temp_next1_night, pic_next1_night, wind_speed_next1_night,
    // next2_day
    next2_day, temp_next2_day, pic_next2_day, wind_speed_next2_day,
    // next2_night
    temp_next2_night, pic_next2_night, wind_speed_next2_night,
    // next3_day
    next3_day, temp_next3_day, pic_next3_day, wind_speed_next3_day,
    // next3_night
    temp_next3_night, pic_next3_night, wind_speed_next3_night,
    // next4_day
    next4_day, temp_next4_day, pic_next4_day, wind_speed_next4_day,
    // next4_night
    temp_next4_night, pic_next4_night, wind_speed_next4_night,
    // next5_day
    next5_day, temp_next5_day, pic_next5_day, wind_speed_next5_day,
    // next5_night
    temp_next5_night, pic_next5_night, wind_speed_next5_night

}) => {
    return (
        <section>
            <section className="date">
                <p><FontAwesomeIcon className="icon_calend" icon={faCalendarAlt} size="xs" />{today_day}</p>
                <p><FontAwesomeIcon className="icon_calend" icon={faCalendarAlt} size="xs" />{tomorrow_day}</p>
                <p><FontAwesomeIcon className="icon_calend" icon={faCalendarAlt} size="xs" />{next1_day}</p>
                <p><FontAwesomeIcon className="icon_calend" icon={faCalendarAlt} size="xs" />{next2_day}</p>
                <p><FontAwesomeIcon className="icon_calend" icon={faCalendarAlt} size="xs" />{next3_day}</p>
                <p><FontAwesomeIcon className="icon_calend" icon={faCalendarAlt} size="xs" />{next4_day}</p>
                <p><FontAwesomeIcon className="icon_calend" icon={faCalendarAlt} size="xs" />{next5_day}</p>
            </section>
            <section className="weather_7_days">
                <section className="sect">
                    <section className="sect_child">

                        <p><FontAwesomeIcon className="icon_term" icon={faThermometerHalf} size="xs" />{temp_today_day}°C</p>
                        <img src={pic_today_day} alt="" />
                        <p><FontAwesomeIcon className="icon_wind_speed" icon={faTachometerAlt} size="xs" />{wind_speed_today_day} км/ч</p>
                    </section>
                    <section className="sect_child">
                        <p><FontAwesomeIcon className="icon_term" icon={faThermometerHalf} size="xs" />{temp_today_night}°C</p>
                        <img src={pic_today_night} alt="" />
                        <p><FontAwesomeIcon className="icon_wind_speed" icon={faTachometerAlt} size="xs" />{wind_speed_today_night} км/ч</p>
                    </section>
                </section>
                <section className="sect">
                    <section className="sect_child">

                        <p><FontAwesomeIcon className="icon_term" icon={faThermometerHalf} size="xs" />{temp_tomorrow_day}°C</p>
                        <img src={pic_tomorrow_day} alt="" />
                        <p><FontAwesomeIcon className="icon_wind_speed" icon={faTachometerAlt} size="xs" />{wind_speed_tomorrow_day} км/ч</p>
                    </section>
                    <section className="sect_child">
                        <p><FontAwesomeIcon className="icon_term" icon={faThermometerHalf} size="xs" />{temp_tomorrow_night}°C</p>
                        <img src={pic_tomorrow_night} alt="" />
                        <p><FontAwesomeIcon className="icon_wind_speed" icon={faTachometerAlt} size="xs" />{wind_speed_tomorrow_night} км/ч</p>
                    </section>
                </section>
                <section className="sect">
                    <section className="sect_child">

                        <p><FontAwesomeIcon className="icon_term" icon={faThermometerHalf} size="xs" />{temp_next1_day}°C</p>
                        <img src={pic_next1_day} alt="" />
                        <p><FontAwesomeIcon className="icon_wind_speed" icon={faTachometerAlt} size="xs" />{wind_speed_next1_day} км/ч</p>
                    </section>
                    <section className="sect_child">
                        <p><FontAwesomeIcon className="icon_term" icon={faThermometerHalf} size="xs" />{temp_next1_night}°C</p>
                        <img src={pic_next1_night} alt="" />
                        <p><FontAwesomeIcon className="icon_wind_speed" icon={faTachometerAlt} size="xs" />{wind_speed_next1_night} км/ч</p>
                    </section>
                </section>
                <section className="sect">
                    <section className="sect_child">

                        <p><FontAwesomeIcon className="icon_term" icon={faThermometerHalf} size="xs" />{temp_next2_day}°C</p>
                        <img src={pic_next2_day} alt="" />
                        <p><FontAwesomeIcon className="icon_wind_speed" icon={faTachometerAlt} size="xs" />{wind_speed_next2_day} км/ч</p>
                    </section>
                    <section className="sect_child">
                        <p><FontAwesomeIcon className="icon_term" icon={faThermometerHalf} size="xs" />{temp_next2_night}°C</p>
                        <img src={pic_next2_night} alt="" />
                        <p><FontAwesomeIcon className="icon_wind_speed" icon={faTachometerAlt} size="xs" />{wind_speed_next2_night} км/ч</p>
                    </section>
                </section>
                <section className="sect">
                    <section className="sect_child">

                        <p><FontAwesomeIcon className="icon_term" icon={faThermometerHalf} size="xs" />{temp_next3_day}°C</p>
                        <img src={pic_next3_day} alt="" />
                        <p><FontAwesomeIcon className="icon_wind_speed" icon={faTachometerAlt} size="xs" />{wind_speed_next3_day} км/ч</p>
                    </section>
                    <section className="sect_child">
                        <p><FontAwesomeIcon className="icon_term" icon={faThermometerHalf} size="xs" />{temp_next3_night}°C</p>
                        <img src={pic_next3_night} alt="" />
                        <p><FontAwesomeIcon className="icon_wind_speed" icon={faTachometerAlt} size="xs" />{wind_speed_next3_night} км/ч</p>
                    </section>
                </section>
                <section className="sect">
                    <section className="sect_child">

                        <p><FontAwesomeIcon className="icon_term" icon={faThermometerHalf} size="xs" />{temp_next4_day}°C</p>
                        <img src={pic_next4_day} alt="" />
                        <p><FontAwesomeIcon className="icon_wind_speed" icon={faTachometerAlt} size="xs" />{wind_speed_next4_day} км/ч</p>
                    </section>
                    <section className="sect_child">
                        <p><FontAwesomeIcon className="icon_term" icon={faThermometerHalf} size="xs" />{temp_next4_night}°C</p>
                        <img src={pic_next4_night} alt="" />
                        <p><FontAwesomeIcon className="icon_wind_speed" icon={faTachometerAlt} size="xs" />{wind_speed_next4_night} км/ч</p>
                    </section>
                </section>
                <section className="sect">
                    <section className="sect_child">

                        <p><FontAwesomeIcon className="icon_term" icon={faThermometerHalf} size="xs" />{temp_next5_day}°C</p>
                        <img src={pic_next5_day} alt="" />
                        <p><FontAwesomeIcon className="icon_wind_speed" icon={faTachometerAlt} size="xs" />{wind_speed_next5_day} км/ч</p>
                    </section>
                    <section className="sect_child">
                        <p><FontAwesomeIcon className="icon_term" icon={faThermometerHalf} size="xs" />{temp_next5_night}°C</p>
                        <img src={pic_next5_night} alt="" />
                        <p><FontAwesomeIcon className="icon_wind_speed" icon={faTachometerAlt} size="xs" />{wind_speed_next5_night} км/ч</p>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default WeatherTown_7_days