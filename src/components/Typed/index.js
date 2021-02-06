import React, { Component } from 'react'
import Typed from 'typed.js'

export default class TypedComponent extends Component {
    componentDidMount() {
      const { strings } = this.props;
     
      const options = {
            strings: strings,
            typeSpeed: 100,
            backSpeed: 80,
            loop: true
      };
      this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() {
      this.typed.destroy();
    }
  
    render() {
      return (
        <div className={`wrap ${this.props.className}`}>
          <div className="type-wrap type-slider">
            <span
              style={{ whiteSpace: 'pre' }}
              ref={(el) => { this.el = el; }}
            />
          </div>
        </div>
      );
    }
  }
