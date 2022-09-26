import React from 'react';
const styles ={
    backgroundColor: '#114C36',
    color: '#fff',
    padding: '0.6rem',
    textTransform:'capitalize',
    textAlign: 'center',
}
const Alert = (props) => {
    return (
        <div style={styles}>
            {props.alert}
        </div>
    );
}

export default Alert;
