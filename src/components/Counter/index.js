import React, { Component } from 'react'
import CountUp from 'react-countup'

export default class Counter extends Component {

  constructor() {
    super();
    this.listenToScroll = this.listenToScroll.bind(this);
    this.state = {
      scrolled: false,
      worksDone: false,
      yearsDone: false,
      clientsDone: false,
      awardsDone: false,
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.listenToScroll);
  }
  
  listenToScroll() {
    const container = document.getElementById('counter-container');
    const point = container.offsetTop - container.clientHeight;

    if( window.scrollY >= point) {
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

    return (
        <div id="counter-container" className="section-counter paralax-mf bg-image" style={{ backgroundImage: 'url(assets/img/counters-bg.jpg)' }}>
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-lg-3">
              <div className="counter-box counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                  <span className="ico-circle"><i className="ion ion-checkmark"></i></span>
                </div>
                <div className="counter-num">
                  <p className="counter"><CountUp end={450} duration={5} redraw={true}
                  onStart={() => {
                    if(!this.state.worksDone) {
                      this.setState({
                        worksDone: true
                      });
                    }
                  }}
                  >{
                    ({countUpRef,start}) => {
                      if( this.state.scrolled && !this.state.worksDone ) {
                        start();
                      }
                      return <span ref={countUpRef}></span>;
                    }
                  }</CountUp></p>
                  <span className="counter-text">WORKS COMPLETED</span>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className="counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                  <span className="ico-circle"><i className="ion ion-calendar"></i></span>
                </div>
                <div className="counter-num">
                  <p className="counter">
                  <CountUp end={15} duration={5} redraw={true}
                  onStart={() => {
                    if(!this.state.yearsDone) {
                      this.setState({
                        yearsDone: true
                      });
                    }
                  }}
                  >{
                    ({countUpRef,start}) => {
                      if( this.state.scrolled && !this.state.yearsDone ) {
                        start();
                      }
                      return <span ref={countUpRef}></span>;
                    }
                  }</CountUp>
                  </p>
                  <span className="counter-text">YEARS OF EXPERIENCE</span>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className="counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                  <span className="ico-circle"><i className="ion ion-people"></i></span>
                </div>
                <div className="counter-num">
                  <p className="counter">
                  <CountUp end={550} duration={5} redraw={true}
                  onStart={() => {
                    if(!this.state.clientsDone) {
                      this.setState({
                        clientsDone: true
                      });
                    }
                  }}
                  >{
                    ({countUpRef,start}) => {
                      if( this.state.scrolled && !this.state.clientsDone ) {
                        start();
                      }
                      return <span ref={countUpRef}></span>;
                    }
                  }</CountUp>
                  </p>
                  <span className="counter-text">TOTAL CLIENTS</span>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className="counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                  <span className="ico-circle"><i className="ion ion-ribbon"></i></span>
                </div>
                <div className="counter-num">
                  <p className="counter">
                  <CountUp end={15} duration={5} redraw={true}
                  onStart={() => {
                    if(!this.state.awardsDone) {
                      this.setState({
                        awardsDone: true
                      });
                    }
                  }}
                  >{
                    ({countUpRef,start}) => {
                      if( this.state.scrolled && !this.state.awardsDone ) {
                        start();
                      }
                      return <span ref={countUpRef}></span>;
                    }
                  }</CountUp>
                  </p>
                  <span className="counter-text">AWARDS WON</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
