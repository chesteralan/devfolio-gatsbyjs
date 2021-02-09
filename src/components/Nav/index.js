import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'



class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      scrolled: false,
      active_nav: 'home'
    }
    this.listenToScroll = this.listenToScroll.bind(this);
    this.setActiveNav = this.setActiveNav.bind(this);
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

  activeNav(current_nav) {
    if( this.state.active_nav === current_nav ) {
      return 'active';
    }
  }

  setActiveNav(value) {
    this.setState(state => ({
      active_nav: value
    }));
  }

  render() {

    const { data: { allDataJson: { nodes: [{ navigation_sitename, navigation_menus }] } } } = this.props;
    const { scrolled } = this.state;

    return (
      <nav className={`navbar navbar-b navbar-expand-md fixed-top ${scrolled?'navbar-reduce':'navbar-trans'}`} id="mainNav">
      <div className="container">
        <Link className="navbar-brand js-scroll" to="/">{navigation_sitename}</Link>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
          <ul className="navbar-nav">
            <li className="nav-item" key="home">
              <Link className={`nav-link js-scroll ${this.activeNav('home')}`} to="/" onClick={() => this.setActiveNav('home') }>Home</Link>
            </li>
            {navigation_menus.map(({id,name,url}) => {
              return (
            <li key={id} className="nav-item">
              <a className={`nav-link js-scroll ${this.activeNav(id)}`} onClick={() => this.setActiveNav(id) } href={url}>{name}</a>
            </li>
            )
            })}
          </ul>
        </div>
      </div>
    </nav>
    )
  }

}

const NavComponent = () => (
  <StaticQuery
    query={graphql`
    {
      allDataJson(filter: {navigation_menus: {elemMatch: {name: {ne: null}}}, navigation_sitename: {ne: null}}) {
        nodes {
          navigation_sitename
          navigation_menus {
            name
            url
          }
        }
      }
    }
    `}
    render={data => <Nav data={data} />}
  ></StaticQuery>
)

export default NavComponent