import React, { Component, useState, Fragment } from 'react';
// import { render } from "react-dom";
// import PropTypes from 'prop-types';
// import { TabContent, TabList, TabPane, Nav, NavItem, NavLink, Tab, Tabs, Sonnet, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
// import classnames from 'classnames';
// import activeTab from 'activeTab';
// import toggle from 'toggle';
import { Button } from 'react-bootstrap';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import Karim from '../../karim.jpg';

class Profile extends Component {
    state = {
        residenceCountry: '',
        occupation: '',
        company: ''
    }
    handleChange = (e) => {
        //console.log(e);
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        //console.log(e);
        e.preventDefault();
        console.log(this.state);
    }

    // const Example = (props) => {
    //     const [activeTab, setActiveTab] = useState('1');

    //     const toggle = tab => {
    //         if (activeTab !== tab) setActiveTab(tab);
    //     }

    //     function ControlledTabs() {
    //         const [key, setKey] = useState('home');

    //         return (
    //             <Tabs
    //                 id="controlled-tab-example"
    //                 activeKey={key}
    //                 onSelect={(k) => setKey(k)}
    //             >
    //                 <Tab eventKey="home" title="Home">
    //                     <Sonnet />
    //                 </Tab>
    //                 <Tab eventKey="profile" title="Profile">
    //                     <Sonnet />
    //                 </Tab>
    //                 <Tab eventKey="contact" title="Contact" disabled>
    //                     <Sonnet />
    //                 </Tab>
    //             </Tabs>
    //         );
    //     }

    //     render(<ControlledTabs />);


        render() {
            return (
                // <>
                // <div>
                //     <Nav tabs>
                //         <NavItem>
                //             <NavLink
                //                 className={classnames({ active: activeTab === '1' })}
                //                 onClick={() => { toggle('1'); }}
                //             >
                //                 Tab1
                // </NavLink>
                //         </NavItem>
                //         <NavItem>
                //             <NavLink
                //                 className={classnames({ active: activeTab === '2' })}
                //                 onClick={() => { toggle('2'); }}
                //             >
                //                 More Tabs
                // </NavLink>
                //         </NavItem>
                //     </Nav>
                //     <TabContent activeTab={activeTab}>
                //         <TabPane tabId="1">
                //             <Row>
                //                 <Col sm="12">
                //                     <h4>Tab 1 Contents</h4>
                //                 </Col>
                //             </Row>
                //         </TabPane>
                //         <TabPane tabId="2">
                //             <Row>
                //                 <Col sm="6">
                //                     <Card body>
                //                         <CardTitle>Special Title Treatment</CardTitle>
                //                         <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                //                         <Button>Go somewhere</Button>
                //                     </Card>
                //                 </Col>
                //                 <Col sm="6">
                //                     <Card body>
                //                         <CardTitle>Special Title Treatment</CardTitle>
                //                         <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                //                         <Button>Go somewhere</Button>
                //                     </Card>
                //                 </Col>
                //             </Row>
                //         </TabPane>
                //     </TabContent>
                // </div>

                <div>
                    <div className="container" style={{ paddingTop: '100px', width: "500px", float: 'left' }}>
                        <img src={Karim} style={{ width: "300px", height: "500px", paddingTop: "150px", marginLeft: "50px" }} />
                    </div>
                    <br /><br /><br /><br /><br /><br />
                    <div className="container" style={{ paddingTop: '135px', width: "500px" }}>
                        <form onSubmit={this.handleSubmit} className="white">
                            <h5 className="grey-text text-darken-3">Profile</h5>
                            <form>

                               {/* <Tabs defaultActiveKey="profile" transition={false} id="uncontrolled-tab-example">
                                 id="noanim-tab-example" 
                                    <Tab eventKey="general" title="General">
                                        {/* <Sonnet />
                                    </Tab>
                                    <Tab eventKey="professional" title="Professional">
                                        {/* <Sonnet />
                                    </Tab>
                                    <Tab eventKey="language" title="Language">
                                        {/* <Sonnet />
                                    </Tab>
                                    <Tab eventKey="social" title="Social">
                                        {/* <Sonnet />
                                    </Tab>
                                </Tabs>*/}

                                <div class="form-row">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Name *" />
                                    </div>
                                    <div class="col">
                                        <input type="email" class="form-control" placeholder="Email *" />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col">
                                        <select type="text" class="form-control" placeholder="Industry  `````````````` *">
                                            <option disabled selected value>Industry</option>
                                            <option> Accounting	</option>
                                            <option> Airlines/Aviation	</option>
                                            <option> Alternative Dispute Resolution	</option>
                                            <option> Alternative Medicine	</option>
                                            <option> Animation	</option>
                                            <option> Apparel/Fashion	</option>
                                            <option> Architecture/Planning	</option>
                                            <option> Arts/Crafts	</option>
                                            <option> Automotive	</option>
                                            <option> Aviation/Aerospace	</option>
                                            <option> Banking/Mortgage	</option>
                                            <option> Biotechnology/ Greentech	</option>
                                            <option> Broadcast Media	</option>
                                            <option> Building Materials	</option>
                                            <option> Business Supplies/Equipment	</option>
                                            <option> Capital Markets/Hedge Fund/Private Equity	</option>
                                            <option> Chemicals	</option>
                                            <option> Civic/Social Organization	</option>
                                            <option> Civil Engineering	</option>
                                            <option> Commercial Real Estate	</option>
                                            <option> Computer Games	</option>
                                            <option> Computer Hardware	</option>
                                            <option> Computer Networking	</option>
                                            <option> Computer Software/Engineering	</option>
                                            <option> Computer/Network Security	</option>
                                            <option> Construction	</option>
                                            <option> Consumer Electronics	</option>
                                            <option> Consumer Goods	</option>
                                            <option> Consumer Services	</option>
                                            <option> Cosmetics	</option>
                                            <option> Dairy	</option>
                                            <option> Defense/Space	</option>
                                            <option> Design	</option>
                                            <option> E-Learning	</option>
                                            <option> Education Management	</option>
                                            <option> Electrical/Electronic Manufacturing	</option>
                                            <option> Entertainment/Movie Production	</option>
                                            <option> Environmental Services	</option>
                                            <option> Events Services	</option>
                                            <option> Executive Office	</option>
                                            <option> Facilities Services	</option>
                                            <option> Farming	</option>
                                            <option> Financial Services	</option>
                                            <option> Fine Art	</option>
                                            <option> Fishery	</option>
                                            <option> Food Production	</option>
                                            <option> Food/Beverages	</option>
                                            <option> Fundraising	</option>
                                            <option> Furniture	</option>
                                            <option> Gambling/Casinos	</option>
                                            <option> Glass/Ceramics/Concrete	</option>
                                            <option> Government Administration	</option>
                                            <option> Government Relations	</option>
                                            <option> Graphic Design/Web Design	</option>
                                            <option> Health/Fitness	</option>
                                            <option> Higher Education/Acadamia	</option>
                                            <option> Hospital/Health Care	</option>
                                            <option> Hospitality	</option>
                                            <option> Human Resources/HR	</option>
                                            <option> Import/Export	</option>
                                            <option> Individual/Family Services	</option>
                                            <option> Industrial Automation	</option>
                                            <option> Information Services	</option>
                                            <option> Information Technology/IT	</option>
                                            <option> Insurance	</option>
                                            <option> International Affairs	</option>
                                            <option> International Trade/Development	</option>
                                            <option> Internet	</option>
                                            <option> Investment Banking/Venture	</option>
                                            <option> Investment Management/Hedge Fund/Private Equity	</option>
                                            <option> Judiciary	</option>
                                            <option> Law Enforcement	</option>
                                            <option> Law Practice/Law Firms	</option>
                                            <option> Legal Services	</option>
                                            <option> Legislative Office	</option>
                                            <option> Leisure/Travel	</option>
                                            <option> Library	</option>
                                            <option> Logistics/Procurement	</option>
                                            <option> Luxury Goods/Jewelry	</option>
                                            <option> Machinery	</option>
                                            <option> Management Consulting	</option>
                                            <option> Maritime	</option>
                                            <option> Market Research	</option>
                                            <option> Marketing/Advertising/Sales	</option>
                                            <option> Mechanical or Industrial Engineering	</option>
                                            <option> Media Production	</option>
                                            <option> Medical Equipment	</option>
                                            <option> Medical Practice	</option>
                                            <option> Mental Health Care	</option>
                                            <option> Military Industry	</option>
                                            <option> Mining/Metals	</option>
                                            <option> Motion Pictures/Film	</option>
                                            <option> Museums/Institutions	</option>
                                            <option> Music	</option>
                                            <option> Nanotechnology	</option>
                                            <option> Newspapers/Journalism	</option>
                                            <option> Non-Profit/Volunteering	</option>
                                            <option> Oil/Energy/Solar/Greentech	</option>
                                            <option> Online Publishing	</option>
                                            <option> Other Industry	</option>
                                            <option> Outsourcing/Offshoring	</option>
                                            <option> Package/Freight Delivery	</option>
                                            <option> Packaging/Containers	</option>
                                            <option> Paper/Forest Products	</option>
                                            <option> Performing Arts	</option>
                                            <option> Pharmaceuticals	</option>
                                            <option> Philanthropy	</option>
                                            <option> Photography	</option>
                                            <option> Plastics	</option>
                                            <option> Political Organization	</option>
                                            <option> Primary/Secondary Education	</option>
                                            <option> Printing	</option>
                                            <option> Professional Training	</option>
                                            <option> Program Development	</option>
                                            <option> Public Relations/PR	</option>
                                            <option> Public Safety	</option>
                                            <option> Publishing Industry	</option>
                                            <option> Railroad Manufacture	</option>
                                            <option> Ranching	</option>
                                            <option> Real Estate/Mortgage	</option>
                                            <option> Recreational Facilities/Services	</option>
                                            <option> Religious Institutions	</option>
                                            <option> Renewables/Environment	</option>
                                            <option> Research Industry	</option>
                                            <option> Restaurants	</option>
                                            <option> Retail Industry	</option>
                                            <option> Security/Investigations	</option>
                                            <option> Semiconductors	</option>
                                            <option> Shipbuilding	</option>
                                            <option> Sporting Goods	</option>
                                            <option> Sports	</option>
                                            <option> Staffing/Recruiting	</option>
                                            <option> Supermarkets	</option>
                                            <option> Telecommunications	</option>
                                            <option> Textiles	</option>
                                            <option> Think Tanks	</option>
                                            <option> Tobacco	</option>
                                            <option> Translation/Localization	</option>
                                            <option> Transportation	</option>
                                            <option> Utilities	</option>
                                            <option> Venture Capital/VC	</option>
                                            <option> Veterinary	</option>
                                            <option> Warehousing	</option>
                                            <option> Wholesale	</option>
                                            <option> Wine/Spirits	</option>
                                            <option> Wireless	</option>
                                            <option> Writing/Editing</option>"
                                    </select>
                                    </div>
                                    <div class="col">
                                        <select type="text" class="form-control" placeholder="Occupation DROP REQUIRED">
                                            <option disabled selected value>Occupation</option>
                                            <option value="1">Chiropractor</option>
                                            <option value="2">Dentist</option>
                                            <option value="3">Dietitian or Nutritionist</option>
                                            <option value="4">Optometrist</option>
                                            <option value="5">Pharmacist</option>
                                            <option value="6">Physician</option>
                                            <option value="7">Physician Assistant</option>
                                            <option value="8">Podiatrist</option>
                                            <option value="9">Registered Nurse</option>
                                            <option value="10">-  Therapist</option>
                                            <option value="11">-  Veterinarian</option>
                                            <option value="12">-  Health Technologist or Technician</option>
                                            <option value="13">-  Other Healthcare Practitioners and Technical Occupation</option>
                                            <option value="14">-  Nursing, Psychiatric, or Home Health Aide</option>
                                            <option value="15">-  Occupational and Physical Therapist Assistant or Aide</option>
                                            <option value="16">-  Other Healthcare Support Occupation</option>
                                            <option value="17">-  Chief Executive</option>
                                            <option value="18">-  General and Operations Manager</option>
                                            <option value="19">-  Advertising, Marketing, Promotions, Public Relations, and Sales Manager</option>
                                            <option value="20">-  Operations Specialties Manager (e.g., IT or HR Manager)</option>
                                            <option value="21">-  Construction Manager</option>
                                            <option value="22">-  Engineering Manager</option>
                                            <option value="23">-  Accountant, Auditor</option>
                                            <option value="24">-  Business Operations or Financial Specialist</option>
                                            <option value="25">-  Business Owner</option>
                                            <option value="26">-  Other Business, Executive, Management, Financial Occupation</option>
                                            <option value="27">-  Architect, Surveyor, or Cartographer</option>
                                            <option value="28">-  Engineer</option>
                                            <option value="29">-  Other Architecture and Engineering Occupation</option>
                                            <option value="30">-  Postsecondary Teacher (e.g., College Professor)</option>
                                            <option value="31">-  Primary, Secondary, or Special Education School Teacher</option>
                                            <option value="32">-  Other Teacher or Instructor</option>
                                            <option value="33">-  Other Education, Training, and Library Occupation</option>
                                            <option value="34">-  Arts, Design, Entertainment, Sports, and Media Occupations</option>
                                            <option value="35">-  Computer Specialist, Mathematical Science</option>
                                            <option value="36">-  Counselor, Social Worker, or Other Community and Social Service Specialist</option>
                                            <option value="37">-  Lawyer, Judge</option>
                                            <option value="38">-  Life Scientist (e.g., Animal, Food, Soil, or Biological Scientist, Zoologist)</option>
                                            <option value="39">-  Physical Scientist (e.g., Astronomer, Physicist, Chemist, Hydrologist)</option>
                                            <option value="40">-  Religious Worker (e.g., Clergy, Director of Religious Activities or Education)</option>
                                            <option value="41">-  Social Scientist and Related Worker</option>
                                            <option value="42">-  Other Professional Occupation</option>
                                            <option value="43">-  Supervisor of Administrative Support Workers</option>
                                            <option value="44">-  Financial Clerk</option>
                                            <option value="45">-  Secretary or Administrative Assistant</option>
                                            <option value="46">-  Material Recording, Scheduling, and Dispatching Worker</option>
                                            <option value="47">-  Other Office and Administrative Support Occupation</option>
                                            <option value="48">-  Protective Service (e.g., Fire Fighting, Police Officer, Correctional Officer)</option>
                                            <option value="49">-  Chef or Head Cook</option>
                                            <option value="50">-  Cook or Food Preparation Worker</option>
                                            <option value="51">-  Food and Beverage Serving Worker (e.g., Bartender, Waiter, Waitress)</option>
                                            <option value="52">-  Building and Grounds Cleaning and Maintenance</option>
                                            <option value="53">-  Personal Care and Service (e.g., Hairdresser, Flight Attendant, Concierge)</option>
                                            <option value="54">-  Sales Supervisor, Retail Sales</option>
                                            <option value="55">-  Retail Sales Worker</option>
                                            <option value="56">-  Insurance Sales Agent</option>
                                            <option value="57">-  Sales Representative</option>
                                            <option value="58">-  Real Estate Sales Agent</option>
                                            <option value="59">-  Other Services Occupation</option>
                                            <option value="60">-  Construction and Extraction (e.g., Construction Laborer, Electrician)</option>
                                            <option value="61">-  Farming, Fishing, and Forestry</option>
                                            <option value="62">-  Installation, Maintenance, and Repair</option>
                                            <option value="63">-  Production Occupations</option>
                                            <option value="64">-  Other Agriculture, Maintenance, Repair, and Skilled Crafts Occupation</option>
                                            <option value="65">-  Aircraft Pilot or Flight Engineer</option>
                                            <option value="66">-  Motor Vehicle Operator (e.g., Ambulance, Bus, Taxi, or Truck Driver)</option>
                                            <option value="67">-  Other Transportation Occupation</option>
                                            <option value="68">-  Military</option>
                                            <option value="69">-  Homemaker</option>
                                            <option value="70">-  Other Occupation</option>
                                            <option value="71">-  Don't Know</option>
                                            <option value="72">-  Not Applicable</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Company / Institution REQUIRED" />
                                    </div>
                                    <div>
                                        <div className="col p-3">
                                            <ReactFlagsSelect />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Gender OPTIONAL" />
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Age OPTIONAL" />
                                    </div>
                                </div>
                                <br />
                            </form>
                            <div class="form-actions">
                                <button type="submit" class="btn btn-primary">Save changes</button>
                            &nbsp;&nbsp;&nbsp;
                            <button type="button" class="btn btn-light">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>   
                // </>
        )
        }
    }

    export default Profile;