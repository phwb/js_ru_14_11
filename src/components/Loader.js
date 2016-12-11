import React, { PropTypes } from 'react'

function Loader(props) {
    const text = props.text || 'Loading...'
    return (
        <h2>{text}</h2>
    )
}

Loader.propTypes = {
}

export default Loader