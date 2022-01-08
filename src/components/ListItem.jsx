import React from 'react';
import '../index.css';

class List extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { name } = this.props;
        return (
                <div className="member-item">{name}</div>
        )
    }
}

export default List;