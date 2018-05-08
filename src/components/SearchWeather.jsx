import React, { Component } from 'react'
import { connect } from 'react-redux'
import { load } from '../Actions'
import '../style/SearchWeather.css'

class SearchWeather extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)

    }
    render() {
        return (
            <section className="search">
                <input type="text" value={this.state.text} onChange={this.onChange} />
                <button onClick={this.onClick}>Search</button>
            </section>
        )
    }
    onChange(e) {
        this.setState({ text: e.target.value })
    }

    onClick() {
        this.props.addText(this.state.text)
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        addText: (text) => dispatch(load(text))
    }
}




export default connect(undefined, mapDispatchToProps)(SearchWeather)