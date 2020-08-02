import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import MainBar from './components/layout/NavBar';
import Suit from './suit.PNG';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Profile from './components/profile/Profile';
import Beach from './beach.PNG';
import Language from './language.PNG';
import Professional from './professional.PNG';
import Personal from './personal.PNG';
import Contact from './Contact';
import { Modal, Row, Col } from 'react-bootstrap';  

var sectionStyle = {

  width: "100%",
  height: "50rem",
  backgroundImage: "url(" + Suit + ")",
  justifyContent: 'center',
  alignItems: 'center',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',

};

var Explore = {
}

var slogan = {
  padding: '20px',
  color: 'white'
}

class App extends Component {

  state = {
    isOpen: false
  }

  componentDidMount() {
    fetch('https://localhost:44345/weatherforecast').then(x=>x.json()).then(res => console.log(res));
  }

  setOpen(isOpen) {
    this.setState({
      isOpen: isOpen
    })
  }
  render() {
    return (
      <>
        <Router>
          <MainBar />
          <div className="App" >
            <Switch>
              <Route path="/" exact>
                <div style={{
            backgroundImage: `url(${Beach})`, backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}>
                  <section style={sectionStyle}>
                    <div style={{ width: "100%" }}>
                      <center style={slogan}>
                        <h4 style={{ marginTop: '50px' }}> AMBITION IS THE FIRST STEP TO </h4>
                        <h1 style={{ letterSpacing: 50, fontSize: 100, fontWeight: "bold" }} > SUCCESS </h1>
                        <br /><br /><br /><br />
                        <h4 style={{ marginTop: '50px' }}> TIME FLIES. OUTFLY IT. </h4>
                        <h4 style={{ marginTop: '50px' }}> DON'T LEARN HARD. LEARN SMART. </h4>
                      </center>
                    </div>
                  </section>
                  <div className="container">
                    <h3 style={{ letterSpacing: 12, fontSize: 50, color: 'black', fontWeight: "bold", marginLeft: '150px' }}>START EXPLORING</h3>
                    <Row>
                      <Col>
                        <div style={Explore} onClick={() => this.setOpen(true)}>
                          <center>
                            <ProjectDetails tagline="Language Discovery has developed a revolutionary new product, it enables students to learn second languages in an engaging and fun manner." title={<b>Language Discovery</b>} img={Language} openModal={() => this.setOpen(true)} />
                          </center>
                        </div>
                      </Col>
                      <Col>
                        <div style={Explore} onClick={() => this.setOpen(true)}>
                          <center>
                            <ProjectDetails tagline="Professional empowerment is about choices and the value you place on yourself, the skills you have and what contribution you bring to the table " title={<b>Professional Empowerment</b>} fontSize='9' img={Professional} openModal={() => this.setOpen(true)} />
                          </center>
                        </div>
                      </Col>
                      <Col>
                        <div style={Explore} onClick={() => this.setOpen(true)}>
                          <center>
                            <ProjectDetails tagline="Personal development is a lifelong process. It is a way for people to assess their skills and qualities, consider their aims in life and set goals in order to " title={<b>Personal Development</b>} img={Personal} openModal={() => this.setOpen(true)} />
                          </center>
                        </div>
                      </Col>
                    </Row>
                    <div className="text-center">
                      <button className="btn-lg"
                        style={{ width: "160px" }}
                        onClick={() => this.setOpen(true)}>Join</button>
                    </div>
                  </div>
                  <br />
                  <br />
                  <Contact />
                </div>
              </Route>
              <Router path='/signin'>
                <SignIn />
              </Router>
              <Router path='/signup'>
                <SignUp />
              </Router>
              <Router path='/profile'>
                <Profile />
              </Router>
            </Switch>
          </div >
        </Router >
        <Modal show={this.state.isOpen} onHide={() => this.setOpen(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Sign up to continue</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <a href="/signup">Sign up</a>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default App;