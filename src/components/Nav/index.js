import React from 'react'
import { Link } from 'gatsby'

export default class Nav extends React.Component {

  constructor() {
    super();
    this.listenToScroll = this.listenToScroll.bind(this);
    this.state = {
      scrolled: false
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.listenToScroll);
  }
  
  listenToScroll() {
    if( window.scrollY > 100) {
      this.setState({
        scrolled: true
      });
    } else {
      this.setState({
        scrolled: false
      });
    }
  }

  render() {

    const { scrolled } = this.state;

    return (
      <nav className={`navbar navbar-b navbar-expand-md fixed-top ${scrolled?'navbar-reduce':'navbar-trans'}`} id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll" href="#page-top">DevFolio</a>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link js-scroll active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#service">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#work">Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }

}
