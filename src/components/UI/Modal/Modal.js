import React, { Component } from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {
    // This could be a functional component, doesn't have to be
    shouldComponentUpdate(nextProps, nextState) {
            return nextProps.show !== this.props.show;
        }
    
    componentDidUpdate () {
        console.log('[Modal] DidUpdate');
    }

     render () {
        return (
            <>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
            <div
             className={classes.Modal}
             style={{
                 transform: this.props.show ? 'translateY(0)' : 'translate(-100vh)',
                 opacity: this.props.show ? '1': '0'
             }}>
                {this.props.children}
            </div>
             </>
             );
    }
}

export default Modal;