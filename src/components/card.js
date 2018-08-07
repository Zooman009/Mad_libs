import React, { Component } from 'react';

import Input from './input';

class Card extends Component {
    render() {
        return (
            <div className="card">
                { Input('Color') }
                { Input('Name') }
            </div>
        )
    }
}

export default Card;