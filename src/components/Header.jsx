import React, { Component } from 'react'
import WeatherList from './WeatherList'
import '../style/HeaderLink.css'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return(
            <section>
                <section>
                    <WeatherList />
                </section>
                <section className="link">                  
                    <Link className="linkWeather" to='/weather_seven_days'>Weather 7 days</Link>
                    <Link className="linkWeather" to='/'>OK.Thank</Link>                   
                </section>
            </section>

        )
    }
}

export default Header