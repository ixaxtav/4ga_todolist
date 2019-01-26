import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap';


const List = props => (
    
    <div className="card">
        <ul className="list-group list-group-flush">
            <li className="list-group-item">{props.children}<i className="fa fa-trash float-right" aria-hidden="true"></i></li>
        </ul>
    </div>
);

List.propTypes = {
    children: PropTypes.li

};


export default List;