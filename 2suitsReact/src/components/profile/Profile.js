import React, { Component, useState, Fragment } from 'react';
import { render } from "react-dom";
import PropTypes from 'prop-types';
import { TabContent, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import MultiSelect from "../../multiselect/index.tsx";
import classnames from 'classnames';
import Select from 'react-select';
import { Button } from 'react-bootstrap';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import Karim from '../../karim.jpg';
import './tabs-style.css';
import FacebookLogin from 'react-facebook-login';
import LinkedinSDK from 'react-linkedin-sdk';

class Profile extends Component {
    state = {
        options: [
            { value: Math.random(), label: 'Srigar' },
            { value: Math.random(), label: 'Sam' },
            { value: Math.random(), label: "afghan" },
            { value: Math.random(), label: "albanian" },
            { value: Math.random(), label: "algerian" },
            { value: Math.random(), label: "american" },
            { value: Math.random(), label: "andorran" },
            { value: Math.random(), label: "angolan" },
            { value: Math.random(), label: "antiguans" },
            { value: Math.random(), label: "argentinean" },
            { value: Math.random(), label: "armenian" },
            { value: Math.random(), label: "australian" },
            { value: Math.random(), label: "austrian" },
            { value: Math.random(), label: "azerbaijani" },
            { value: Math.random(), label: "bahamian" },
            { value: Math.random(), label: "bahraini" },
            { value: Math.random(), label: "bangladeshi" },
            { value: Math.random(), label: "barbadian" },
            { value: Math.random(), label: "barbudans" },
            { value: Math.random(), label: "batswana" },
            { value: Math.random(), label: "belarusian" },
            { value: Math.random(), label: "belgian" },
            { value: Math.random(), label: "belizean" },
            { value: Math.random(), label: "beninese" },
            { value: Math.random(), label: "bhutanese" },
            { value: Math.random(), label: "bolivian" },
            // { country:"bosnian">Bosnian</option>
            // { country:"brazilian">Brazilian</option>
            // { country:"british">British</option>
            // { country:"bruneian">Bruneian</option>
            // { country:"bulgarian">Bulgarian</option>
            // { country:"burkinabe">Burkinabe</option>
            // { country:"burmese">Burmese</option>
            // { country:"burundian">Burundian</option>
            // { country:"cambodian">Cambodian</option>
            // { country:"cameroonian">Cameroonian</option>
            // { country:"canadian">Canadian</option>
            // { country:"cape verdean">Cape Verdean</option>
            // { country:"central african">Central African</option>
            // { country:"chadian">Chadian</option>
            // { country:"chilean">Chilean</option>
            // { country:"chinese">Chinese</option>
            // { country:"colombian">Colombian</option>
            // { country:"comoran">Comoran</option>
            // { country:"congolese">Congolese</option>
            // { country:"costa rican">Costa Rican</option>
            // { country:"croatian">Croatian</option>
            // { country:"cuban">Cuban</option>
            // { country:"cypriot">Cypriot</option>
            // { country:"czech">Czech</option>
            // { country:"danish">Danish</option>
            // { country:"djibouti">Djibouti</option>
            // { country:"dominican">Dominican</option>
            // { country:"dutch">Dutch</option>
            // { country:"east timorese">East Timorese</option>
            // { country:"ecuadorean">Ecuadorean</option>
            // { country:"egyptian">Egyptian</option>
            // { country:"emirian">Emirian</option>
            // { country:"equatorial guinean">Equatorial Guinean</option>
            // { country:"eritrean">Eritrean</option>
            // { country:"estonian">Estonian</option>
            // { country:"ethiopian">Ethiopian</option>
            // { country:"fijian">Fijian</option>
            // { country:"filipino">Filipino</option>
            // { country:"finnish">Finnish</option>
            // { country:"french">French</option>
            // { country:"gabonese">Gabonese</option>
            // { country:"gambian">Gambian</option>
            // { country:"georgian">Georgian</option>
            // { country:"german">German</option>
            // { country:"ghanaian">Ghanaian</option>
            // { country:"greek">Greek</option>
            // { country:"grenadian">Grenadian</option>
            // { country:"guatemalan">Guatemalan</option>
            // { country:"guinea-bissauan">Guinea-Bissauan</option>
            // { country:"guinean">Guinean</option>
            // { country:"guyanese">Guyanese</option>
            // { country:"haitian">Haitian</option>
            // { country:"herzegovinian">Herzegovinian</option>
            // { country:"honduran">Honduran</option>
            // { country:"hungarian">Hungarian</option>
            // { country:"icelander">Icelander</option>
            // { country:"indian">Indian</option>
            // { country:"indonesian">Indonesian</option>
            // { country:"iranian">Iranian</option>
            // { country:"iraqi">Iraqi</option>
            // { country:"irish">Irish</option>
            // { country:"israeli">Israeli</option>
            // { country:"italian">Italian</option>
            // { country:"ivorian">Ivorian</option>
            // { country:"jamaican">Jamaican</option>
            // { country:"japanese">Japanese</option>
            // { country:"jordanian">Jordanian</option>
            // { country:"kazakhstani">Kazakhstani</option>
            // { country:"kenyan">Kenyan</option>
            // { country:"kittian and nevisian">Kittian and Nevisian</option>
            // { country:"kuwaiti">Kuwaiti</option>
            // { country:"kyrgyz">Kyrgyz</option>
            // { country:"laotian">Laotian</option>
            // { country:"latvian">Latvian</option>
            // { country:"lebanese">Lebanese</option>
            // { country:"liberian">Liberian</option>
            // { country:"libyan">Libyan</option>
            // { country:"liechtensteiner">Liechtensteiner</option>
            // { country:"lithuanian">Lithuanian</option>
            // { country:"luxembourger">Luxembourger</option>
            // { country:"macedonian">Macedonian</option>
            // { country:"malagasy">Malagasy</option>
            // { country:"malawian">Malawian</option>
            // { country:"malaysian">Malaysian</option>
            // { country:"maldivan">Maldivan</option>
            // { country:"malian">Malian</option>
            // { country:"maltese">Maltese</option>
            // { country:"marshallese">Marshallese</option>
            // { country:"mauritanian">Mauritanian</option>
            // { country:"mauritian">Mauritian</option>
            // { country:"mexican">Mexican</option>
            // { country:"micronesian">Micronesian</option>
            // { country:"moldovan">Moldovan</option>
            // { country:"monacan">Monacan</option>
            // { country:"mongolian">Mongolian</option>
            // { country:"moroccan">Moroccan</option>
            // { country:"mosotho">Mosotho</option>
            // { country:"motswana">Motswana</option>
            // { country:"mozambican">Mozambican</option>
            // { country:"namibian">Namibian</option>
            // { country:"nauruan">Nauruan</option>
            // { country:"nepalese">Nepalese</option>
            // { country:"new zealander">New Zealander</option>
            // { country:"ni-vanuatu">Ni-Vanuatu</option>
            // { country:"nicaraguan">Nicaraguan</option>
            // { country:"nigerien">Nigerien</option>
            // { country:"north korean">North Korean</option>
            // { country:"northern irish">Northern Irish</option>
            // { country:"norwegian">Norwegian</option>
            // { country:"omani">Omani</option>
            // { country:"pakistani">Pakistani</option>
            // { country:"palauan">Palauan</option>
            // { country:"panamanian">Panamanian</option>
            // { country:"papua new guinean">Papua New Guinean</option>
            // { country:"paraguayan">Paraguayan</option>
            // { country:"peruvian">Peruvian</option>
            // { country:"polish">Polish</option>
            // { country:"portuguese">Portuguese</option>
            // { country:"qatari">Qatari</option>
            // { country:"romanian">Romanian</option>
            // { country:"russian">Russian</option>
            // { country:"rwandan">Rwandan</option>
            // { country:"saint lucian">Saint Lucian</option>
            // { country:"salvadoran">Salvadoran</option>
            // { country:"samoan">Samoan</option>
            // { country:"san marinese">San Marinese</option>
            // { country:"sao tomean">Sao Tomean</option>
            // { country:"saudi">Saudi</option>
            // { country:"scottish">Scottish</option>
            // { country:"senegalese">Senegalese</option>
            // { country:"serbian">Serbian</option>
            // { country:"seychellois">Seychellois</option>
            // { country:"sierra leonean">Sierra Leonean</option>
            // { country:"singaporean">Singaporean</option>
            // { country:"slovakian">Slovakian</option>
            // { country:"slovenian">Slovenian</option>
            // { country:"solomon islander">Solomon Islander</option>
            // { country:"somali">Somali</option>
            // { country:"south african">South African</option>
            // { country:"south korean">South Korean</option>
            // { country:"spanish">Spanish</option>
            // { country:"sri lankan">Sri Lankan</option>
            // { country:"sudanese">Sudanese</option>
            // { country:"surinamer">Surinamer</option>
            // { country:"swazi">Swazi</option>
            // { country:"swedish">Swedish</option>
            // { country:"swiss">Swiss</option>
            // { country:"syrian">Syrian</option>
            // { country:"taiwanese">Taiwanese</option>
            // { country:"tajik">Tajik</option>
            // { country:"tanzanian">Tanzanian</option>
            // { country:"thai">Thai</option>
            // { country:"togolese">Togolese</option>
            // { country:"tongan">Tongan</option>
            // { country:"trinidadian or tobagonian">Trinidadian or Tobagonian</option>
            // { country:"tunisian">Tunisian</option>
            // { country:"turkish">Turkish</option>
            // { country:"tuvaluan">Tuvaluan</option>
            // { country:"ugandan">Ugandan</option>
            // { country:"ukrainian">Ukrainian</option>
            // { country:"uruguayan">Uruguayan</option>
            // { country:"uzbekistani">Uzbekistani</option>
            // { country:"venezuelan">Venezuelan</option>
            // { country:"vietnamese">Vietnamese</option>
            // { country:"welsh">Welsh</option>
            // { country:"yemenite">Yemenite</option>
            // { country:"zambian">Zambian</option>
            // { country:"zimbabwean"}

        ],

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

    onSelect(selectedList, selectedItem) {

    }

    onRemove(selectedList, removedItem) {

    }

    render() {
        const selectStyle = {};
        return (
            <div>
                <div style={{ height: "60px" }} />
                <div className="text-center p-5" style={{ backgroundColor: "#F2F2F2" }}>
                    {/* <img src={Karim} width="150" height="150" style={{ borderRadius: "100%" }} /> */}
                </div>
                <Tabs>
                    <TabList>
                        <Tab>General</Tab>
                        <Tab>Professional</Tab>
                        <Tab>Language</Tab>
                        <Tab>Social</Tab>
                    </TabList>
                    <TabPanel>
                        <div>
                            <div className="container" style={{ paddingTop: '135px', width: "500px" }}>
                                {/* <form onSubmit={this.handleSubmit} className="white"> */}
                                {/* <h5 className="grey-text text-darken-3">Profile</h5> */}
                                {/* <form> */}
                                <div class="row">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="First Name *" style={{paddingLeft:'12px'}} />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Last Name *" style={{paddingLeft:'12px'}} />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <input type="email" class="form-control" placeholder="Email *" style={{paddingLeft:'12px'}} />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div class="col">
                                        <select type="text" class="form-control" placeholder="Gender *" style={selectStyle}>
                                            <option disabled selected value>Gender *</option>
                                            <option> Male </option>
                                            <option> Female </option>
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div class="col">
                                        <select type="text" class="form-control" placeholder="Age *" style={selectStyle}>
                                            <option disabled selected value>Age *</option>
                                            <option> 15 </option>
                                            <option> 16 </option>
                                            <option> 17 </option>
                                            <option> 18 </option>
                                            <option> 19 </option>
                                            <option> 20 </option>
                                            <option> 21 </option>
                                            <option> 22 </option>
                                            <option> 23 </option>
                                            <option> 24 </option>
                                            <option> 25 </option>
                                            <option> 26 </option>
                                            <option> 27 </option>
                                            <option> 28 </option>
                                            <option> 29 </option>
                                            <option> 30 </option>
                                            <option> 31 </option>
                                            <option> 32 </option>
                                            <option> 33 </option>
                                            <option> 34 </option>
                                            <option> 35 </option>
                                            <option> 36 </option>
                                            <option> 37 </option>
                                            <option> 38 </option>
                                            <option> 39 </option>
                                            <option> 40 </option>
                                            <option> 41 </option>
                                            <option> 42 </option>
                                            <option> 43 </option>
                                            <option> 44 </option>
                                            <option> 45 </option>
                                            <option> 46 </option>
                                            <option> 47 </option>
                                            <option> 48 </option>
                                            <option> 49 </option>
                                            <option> 50 </option>
                                            <option> 51 </option>
                                            <option> 52 </option>
                                            <option> 53 </option>
                                            <option> 54 </option>
                                            <option> 55 </option>
                                            <option> 56 </option>
                                            <option> 57 </option>
                                            <option> 58 </option>
                                            <option> 59 </option>
                                            <option> 60+ </option>
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div className="col">
                                        {/* <div class="col"> */}
                                        <select type="text" class="form-control" placeholder="Country of residence *" style={selectStyle}>
                                            <option disabled selected value>Country of residence *</option>
                                            <option> Lebanon </option>
                                            <option> Syria </option>
                                            <option> Turkey </option>
                                        </select>
                                        {/* </div> */}
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col">
                                        <MultiSelect
                                            overrideStrings={{
                                                "selectSomeItems": "Nationality (multiple selection is possible) *"
                                            }}
                                            style={{ fontColor: 'black' }}
                                            options={this.state.options}
                                            // options={options}
                                            value={this.state.selected}
                                            onChange={(x) => this.setState({ selected: x })}
                                        />
                                    </div>
                                </div>
                                <br />
                                {/* </form> */}
                                {/* </form> */}
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>

                        <div className="container" style={{ paddingTop: '135px', width: "500px" }}>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Job Title *" style={{paddingLeft:"12px"}} />
                                </div>
                                {/* <br /> */}
                            </div>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Company / Institution " style={{paddingLeft:"12px"}} />
                                </div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col">
                                    <select type="text" class="form-control" placeholder="Years of experience *" style={selectStyle}>
                                        <option disabled selected value>Years of experience *</option>
                                        <option> 0 </option>
                                        <option> 1 </option>
                                        <option> 2 </option>
                                        <option> 3 </option>
                                        <option> 4 </option>
                                        <option> 5 </option>
                                        <option> 6 </option>
                                        <option> 7 </option>
                                        <option> 8 </option>
                                        <option> 9 </option>
                                        <option> 10 </option>
                                        <option> 11 </option>
                                        <option> 12 </option>
                                        <option> 13 </option>
                                        <option> 14 </option>
                                        <option> 15 </option>
                                        <option> 16 </option>
                                        <option> 17 </option>
                                        <option> 18 </option>
                                        <option> 19 </option>
                                        <option> 20 </option>
                                        <option> 21 </option>
                                        <option> 22 </option>
                                        <option> 23 </option>
                                        <option> 24 </option>
                                        <option> 25+ </option>
                                    </select>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div class="col">
                                    <select type="text" class="form-control" placeholder="Industry worked in *" style={selectStyle}>
                                        <option disabled selected value>Industry worked in *</option>
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
                                        <option> Biotechnology </option>
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
                                        <option> Higher Education	</option>
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
                                        <option> Oil/Energy/Solar	</option>
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
                                        <option> Environment	</option>
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
                                        <option> Writing/Editing</option>
                                    </select>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div class="col">
                                    <select type="text" class="form-control" placeholder="Occupation" style={selectStyle}>
                                        <option disabled selected value>Occupation</option>
                                        <option> Chiropractor</option>
                                        <option> Dentist</option>
                                        <option> Dietitian or Nutritionist</option>
                                        <option> Optometrist</option>
                                        <option> Pharmacist</option>
                                        <option> Physician</option>
                                        <option> Physician Assistant</option>
                                        <option> Podiatrist</option>
                                        <option> Registered Nurse</option>
                                        <option> Therapist</option>
                                        <option> Veterinarian</option>
                                        <option> Health Technologist or Technician</option>
                                        <option> Other Healthcare Practitioners and Technical Occupation</option>
                                        <option> Nursing, Psychiatric, or Home Health Aide</option>
                                        <option> Occupational and Physical Therapist Assistant or Aide</option>
                                        <option> Other Healthcare Support Occupation</option>
                                        <option> Chief Executive</option>
                                        <option> General and Operations Manager</option>
                                        <option> Advertising, Marketing, Promotions, Public Relations, and Sales Manager</option>
                                        <option> Operations Specialties Manager (e.g., IT or HR Manager)</option>
                                        <option> Construction Manager</option>
                                        <option> Engineering Manager</option>
                                        <option> Accountant, Auditor</option>
                                        <option> Business Operations or Financial Specialist</option>
                                        <option> Business Owner</option>
                                        <option> Other Business, Executive, Management, Financial Occupation</option>
                                        <option> Architect, Surveyor, or Cartographer</option>
                                        <option> Engineer</option>
                                        <option> Other Architecture and Engineering Occupation</option>
                                        <option> Postsecondary Teacher (e.g., College Professor)</option>
                                        <option> Primary, Secondary, or Special Education School Teacher</option>
                                        <option> Other Teacher or Instructor</option>
                                        <option> Other Education, Training, and Library Occupation</option>
                                        <option> Arts, Design, Entertainment, Sports, and Media Occupations</option>
                                        <option> Computer Specialist, Mathematical Science</option>
                                        <option> Counselor, Social Worker, or Other Community and Social Service Specialist</option>
                                        <option> Lawyer, Judge</option>
                                        <option> Life Scientist (e.g., Animal, Food, Soil, or Biological Scientist, Zoologist)</option>
                                        <option> Physical Scientist (e.g., Astronomer, Physicist, Chemist, Hydrologist)</option>
                                        <option> Religious Worker (e.g., Clergy, Director of Religious Activities or Education)</option>
                                        <option> Social Scientist and Related Worker</option>
                                        <option> Other Professional Occupation</option>
                                        <option> Supervisor of Administrative Support Workers</option>
                                        <option> Financial Clerk</option>
                                        <option> Secretary or Administrative Assistant</option>
                                        <option> Material Recording, Scheduling, and Dispatching Worker</option>
                                        <option> Other Office and Administrative Support Occupation</option>
                                        <option> Protective Service (e.g., Fire Fighting, Police Officer, Correctional Officer)</option>
                                        <option> Chef or Head Cook</option>
                                        <option> Cook or Food Preparation Worker</option>
                                        <option> Food and Beverage Serving Worker (e.g., Bartender, Waiter, Waitress)</option>
                                        <option> Building and Grounds Cleaning and Maintenance</option>
                                        <option> Personal Care and Service (e.g., Hairdresser, Flight Attendant, Concierge)</option>
                                        <option> Sales Supervisor, Retail Sales</option>
                                        <option> Retail Sales Worker</option>
                                        <option> Insurance Sales Agent</option>
                                        <option> Sales Representative</option>
                                        <option> Real Estate Sales Agent</option>
                                        <option> Other Services Occupation</option>
                                        <option> Construction and Extraction (e.g., Construction Laborer, Electrician)</option>
                                        <option> Farming, Fishing, and Forestry</option>
                                        <option> Installation, Maintenance, and Repair</option>
                                        <option> Production Occupations</option>
                                        <option> Other Agriculture, Maintenance, Repair, and Skilled Crafts Occupation</option>
                                        <option> Aircraft Pilot or Flight Engineer</option>
                                        <option> Motor Vehicle Operator (e.g., Ambulance, Bus, Taxi, or Truck Driver)</option>
                                        <option> Other Transportation Occupation</option>
                                        <option> Military</option>
                                        <option> Homemaker</option>
                                        <option> Other Occupation</option>
                                    </select>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div class="col">
                                    <select type="text" class="form-control" placeholder="Academic Institution" style={selectStyle}>
                                        <option disabled selected value>Academic Institution</option>
                                        <option> BAU </option>
                                        <option> AUB </option>
                                    </select>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div class="col">
                                    <select type="text" class="form-control" placeholder="Highest degree achieved" style={selectStyle}>
                                        <option disabled selected value>Highest degree achieved *</option>
                                        <option> Associate's </option>
                                        <option> Bachelor's </option>
                                        <option> Master's </option>
                                        <option> Phd </option>
                                    </select>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div class="col">
                                    <select type="text" class="form-control" placeholder="Degree major *" style={selectStyle}>
                                        <option disabled selected value>Degree major *</option>
                                        <option> CS </option>
                                        <option> batteekh </option>
                                        <option> ballout </option>
                                        <option> chammem </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="container" style={{ paddingTop: '135px' }}>
                            <div class="row">
                                <div class="col">
                                    <select type="text" class="form-control" placeholder="Mother Tongue *" >
                                        <option disabled selected value>Mother Tongue</option>
                                        <option> Arabic </option>
                                    </select>
                                </div>
                                <div class="col">
                                    <select type="text" class="form-control" placeholder="Fluent in *">
                                        <option disabled selected value>Fluent in</option>
                                        <option> English </option>
                                        <option> Arabic </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="container" style={{ paddingTop: '80px', width: "500px" }}>
                            <div class="row">
                                <textarea className="form-control" rows="4" placeholder="Biography; tell us about yourself"></textarea>
                            </div>
                            <div class="row">
                                <input type="text" class="form-control" placeholder="Icebreakers (hobbies & interests) *" />
                            </div>
                            <div class="row">
                                <input type="text" class="form-control" placeholder="Goals *" />
                            </div>
                            <div class="row">
                                <input type="text" class="form-control" placeholder="Moto *" />
                            </div>


{/* 
                            <div class="fb-login-button" data-size="medium" data-auto-logout-link="true"></div>

                            <div id="fb-root"></div>
                            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0&appId=553247035107756&autoLogAppEvents=1" nonce="lXj8GIMA"></script>

                            <div class="fb-login-button" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false" data-width=""></div> */}



                        </div>
                    </TabPanel>
                </Tabs>
                <div style={{ height: "200px" }}></div>
                <div className="container">
                    <div className="row">
                        {/* <div className="col"><b>Note:</b> <i>kindly, fill all of your details</i></div> */}
                        <div className="col-4"></div>
                        <div className="col"></div>
                        <Button variant="primary">Save Changes</Button>
                        <div className="p-1" />
                        <Button variant="outline-primary">Cancel</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;