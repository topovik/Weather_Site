import React, { Component } from 'react'
import WeatherTown from './WeatherTown'
import { connect } from 'react-redux'
import { load } from '../Actions'

class WeatherList extends Component {

    componentDidMount() {
        this.props.load();
    }

    render() {

        if (this.props.status === 'LOADING')
            return (<p>Loading</p>);
        if (this.props.status === 'ERROR')
            return (<p>ERROR</p>);

        const list = this.props.town.map(t => {
            return <WeatherTown
                // current_condition
                country={t.country}
                town={t.town}
                temp_now={t.temp_now}
                data_time={t.data_time}
                pic={t.pic}
                state_weather={t.state_weather}
                wind_speed={t.wind_speed}
                key={t.id}
                //hour_weather_today
                am9={t.am9}
                am9_pic={t.am9_pic}
                am9_state={t.am9_state}

                pm12={t.pm12}
                pm12_pic={t.pm12_pic}
                pm12_state={t.pm12_state}

                pm15={t.pm15}
                pm15_pic={t.pm15_pic}
                pm15_state={t.pm15_state}

                pm18={t.pm18}
                pm18_pic={t.pm18_pic}
                pm18_state={t.pm18_state}

                pm21={t.pm21}
                pm21_pic={t.pm21_pic}
                pm21_state={t.pm21_state} />
        })
        return (
            <section>
                {list}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        town: state.fetchReducer.town,
        status: state.status
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        load: (text) => dispatch(load(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList)

