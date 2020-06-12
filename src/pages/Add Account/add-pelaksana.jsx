import React from 'react';
import { f7, f7ready } from 'framework7-react';
import Framework7, { Device, Request, Support } from 'framework7';
import swal from 'sweetalert';

import {
    BrowserView,
    MobileView,
    mobileModel,
    mobileVendor,
    isMobile,
    deviceDetect,
    deviceType,
    engineName,
    engineVersion,
    osName,
    osVersion
} from "react-device-detect";

import {
    Page,
    List,
    Input,
    ListInput,
    Icon,
    Card,
    CardContent,
    ListItem,
    Button,
    Fab,
    Toggle,
    Row,
    Col
} from 'framework7-react';


export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nama: '',
            nik: '',
            jabatan: '',
            wilayah: '',
            lokasi_kerja: '',
            sub_lokasi: '',
            jenis_kelamin: '',
            no_telp: '',
            email: '',
            id_admin: '',
            password: '',
            type: 'password',
            score: 'null',
        }
        this.myRef = React.createRef()
        this.navbarHandler = this.navbarHandler.bind(this);
    }

    render() {
        return (
            <Page pageContent={false} name="add-pelaksana" className="city-building-bg" style={{ backgroundColor: 'whitesmoke' }} onPageInit={this.onPageInit.bind(this)}>
                <div className="navbar" style={{ zIndex: "1" }}>
                    <div id="navbar-bg" className="navbar-bg navbar-custom inventory-logo-left" style={{ height: '185px', borderRadius: " 0 0 0px 0px" }}>
                        <div className="center">
                            <div className="title-page">ADD PELAKSANA</div>
                        </div>
                    </div>
                    <div className="navbar-inner sliding">
                        <div style={{ display: "none" }} className="left">
                            <a className="icon-only link back icon-smooth margin-left-10" href="#">
                                <i className="icon f7-icons">arrow_turn_up_left</i>
                                {/* <i className="icon icon-back"></i> */}
                            </a>
                        </div>

                        <div className="right">
                            <a className="link icon-only panel-open" href="#" data-panel="right">
                                {/* <i className="icon f7-icons icon-smooth margin-right-10">ellipsis_vertical</i> */}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="page-content" onScroll={this.navbarHandler} ref={this.myRef}>
                    <div style={{ textAlignLast: "center", height: "60px" }} className="person-icon">
                        {/* <i className="icon f7-icons icon-menu icon-title icon-disable" style={{ textShadow: "rgba(0, 0, 0, 0.17) 0px 2px 0px", color: "rgb(196, 192, 185)" }}>person_crop_circle_fill_badge_plus</i> */}
                    </div>
                    <Card className="card-stepper ">
                        <div className="md-stepper-horizontal orange">
                            <div id="personal-info" className="md-step active editable">
                                <div className="md-step-circle"><span>1</span></div>
                                <div className="md-step-title">Personal</div>
                                <span className="md-step-title">Info</span>
                                <div className="md-step-bar-left"></div>
                                <div className="md-step-bar-right"></div>
                            </div>
                            <div id="position-info" className="md-step">
                                <div className="md-step-circle"><span>2</span></div>
                                <div className="md-step-title">Position</div>
                                <span className="md-step-title">Info</span>
                                {/* <div className="md-step-optional">Optional</div> */}
                                <div className="md-step-bar-left"></div>
                                <div className="md-step-bar-right"></div>
                            </div>
                            <div id="contact-info" className="md-step">
                                <div className="md-step-circle"><span>3</span></div>
                                <div className="md-step-title">Contact</div>
                                <span className="md-step-title">Info</span>
                                <div className="md-step-bar-left"></div>
                                <div className="md-step-bar-right"></div>
                            </div>
                            <div id="preview" className="md-step">
                                <div className="md-step-circle"><span>4</span></div>
                                <div className="md-step-title">Preview</div>
                                <div className="md-step-bar-left"></div>
                                <div className="md-step-bar-right"></div>
                            </div>
                        </div>
                    </Card>


                    <Card className="card-list-form shadow" id="card-personal-info" style={{ display: "block" }}>
                        <List noHairlinesMd>
                            <li>
                                <Card className="card-in-form label-list" ><i className="margin-right  icon f7-icons" style={{ fontSize: "23px" }}>person_crop_circle_fill</i>
                                     Personal Info
                                     <div className="field-separator"></div>
                                    <CardContent padding={false}>
                                        <ul>
                                            <li className="margin-input">
                                                <Card className="card-in-form label-list" >
                                                    <CardContent padding={false}>
                                                        <ul>
                                                            <li className="margin-input">
                                                                <div className="item-content item-input icon-top">
                                                                    <div className="item-media">
                                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>person_fill</i>
                                                                    </div>
                                                                    <div id="label-nama-pelaksana" style={{ display: "none" }}>Name</div>
                                                                </div>
                                                            </li>
                                                            <li className="margin-input">
                                                                <div className="item-input">
                                                                    <div className="item-input-wrap">
                                                                        <input type="text" onInput={this.showLabelInput.bind(this)} placeholder="Name" id="nama-pelaksana" style={{ textAlignLast: "center" }} className=""></input>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <div className="field-separator"></div>
                                                            <li className="margin-input">
                                                                <div className="item-content item-input icon-top">
                                                                    <div className="item-media">
                                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>creditcard_fill</i>
                                                                    </div>
                                                                    <div id="label-nik-pelaksana" style={{ display: "none" }}>NIK</div>
                                                                </div>
                                                            </li>
                                                            <li className="margin-input" >
                                                                <div className="item-input">
                                                                    <div className="item-input-wrap">
                                                                        <input type="number" placeholder="NIK" onInput={this.showLabelInput.bind(this)} id="nik-pelaksana" style={{ textAlignLast: "center" }} className=""></input>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <div className="field-separator"></div>
                                                            <li className="margin-input margin-bottom" >
                                                                <div className="item-input">
                                                                    <div className="item-input-wrap">
                                                                        <button style={{ backgroundColor: '#fb6f6f' }} className=" margin-top button button-fill" onClick={this.scanQrBarcode.bind(this)}>
                                                                            <i className="icon f7-icons">barcode_viewfinder</i>Scan
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <div className="field-separator"></div>
                                                            <li className="select-input margin-input margin-bottom" >
                                                                <div className="item-content item-input">
                                                                    <div className="item-inner">
                                                                        <div className="item-input-wrap input-dropdown">
                                                                            <select placeholder="Jenis Kelamin" id="jenis-kelamin-pelaksana" className="jenis-kelamin" style={{ textAlignLast: "center" }}>
                                                                                <option value="">Gender</option>
                                                                                <option value="Laki-laki">Male</option>
                                                                                <option value="Perempuan">Female</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </CardContent>
                                                </Card>
                                            </li>
                                            <div className="field-separator"></div>

                                            {/* <li >
                                            <div className="item-content item-input icon-top">
                                                <div className="item-media">
                                                    <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>lock</i>
                                                </div>
                                                <div id="label-password" style={{ display: "none" }}>Password</div>
                                            </div>
                                        </li>
                                        <li className="margin-bottom">
                                            <div className="item-input">
                                                <div className="item-input-wrap">
                                                    <input type={this.state.type}
                                                        placeholder="Password"
                                                        className="password__input"
                                                        onChange={this.passwordStrength.bind(this)}
                                                        onInput={this.showLabelInput.bind(this)}
                                                        id="password"
                                                        style={{ textAlignLast: "center" }}
                                                    />
                                                    <i className="password__show icon f7-icons" onClick={this.showHide.bind(this)}>{this.state.type === 'text' ? 'eye_slash' : 'eye'}</i>
                                                    <span className="password__strength" data-score={this.state.score} />

                                                </div>
                                            </div>
                                        </li> */}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </li>

                        </List>
                        <Button md round outline className="margin margin-top" onClick={this.nextStep.bind(this)}>Next Step <i className="icon f7-icons">chevron_right_circle_fill</i></Button>
                    </Card>


                    <Card className="card-list-form shadow" id="card-position-info" style={{ display: "none" }}>
                        <List noHairlinesMd>
                            <li>
                                <Card className="card-in-form label-list" ><i className="margin-right icon f7-icons" style={{ fontSize: "23px" }}>building_2_fill</i>
                                Position Info
                                     <div className="field-separator"></div>
                                    <CardContent padding={false}>
                                        <ul>
                                            <li className="select-input margin-input" >
                                                <div className="item-content item-input">
                                                    <div className="item-inner">
                                                        <div className="item-input-wrap input-dropdown">
                                                            <select placeholder="Jabatan" id="jabatan-pelaksana" className="select-jabatan-pelaksana" style={{ textAlignLast: "center" }}>
                                                                <option value="">Position</option>
                                                                <option value="Housekeeping">Housekeeping</option>
                                                                <option value="Lanscape">Landscape</option>
                                                                <option value="Office Boy">Office Boy</option>
                                                                <option value="Gardener">Gardener</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="select-input margin-input" >
                                                <div className="item-content item-input">
                                                    <div className="item-inner">
                                                        <div className="item-input-wrap input-dropdown">
                                                            <select placeholder="ID Profile" id="id-profile" onChange={this.showLocation.bind(this)} className="select-profile" style={{ textAlignLast: "center" }}>
                                                                <option value="">Select Regionality</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="select-input margin-input" >
                                                <div className="item-content item-input">
                                                    <div className="item-inner">
                                                        <div className="item-input-wrap input-dropdown">
                                                            <select placeholder="ID Location" id="lokasi-kerja" onChange={this.showSublocation.bind(this)} className="select-location" style={{ textAlignLast: "center" }}>
                                                                <option value="">Select Location</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="select-input margin-input" >
                                                <div className="item-content item-input">
                                                    <div className="item-inner">
                                                        <div className="item-input-wrap input-dropdown">
                                                            <select placeholder="ID Sublocation" id="sub-lokasi" className="select-sublocation" style={{ textAlignLast: "center" }}>
                                                                <option value="">Select Sublocation</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </li>

                        </List>
                        <div className="row">
                            <div className="col-45">
                                <Button md round outline className="margin margin-top" onClick={this.previousStep.bind(this)}><i className="icon f7-icons">chevron_left_circle_fill</i> Previous</Button>
                            </div>
                            <div className="col-10">
                            </div>
                            <div className="col-45">
                                <Button md round outline className="margin margin-top" onClick={this.nextStep.bind(this)}>Next <i className="icon f7-icons">chevron_right_circle_fill</i></Button>
                            </div>
                        </div>
                    </Card>

                    <Card className="card-list-form shadow" id="card-contact-info" style={{ display: "none" }}>
                        <List noHairlinesMd>
                            <li>
                                <Card className="card-in-form label-list" ><i className=" margin-right icon f7-icons" style={{ fontSize: "23px" }}>phone_down_circle</i>
                                     Contact Info
                                     <div className="field-separator"></div>
                                    <CardContent padding={false}>
                                        <ul>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>envelope_fill</i>
                                                    </div>
                                                    <div id="label-email-pelaksana" style={{ display: "none" }}>Email</div>
                                                </div>
                                            </li>
                                            <li className="margin-input">
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="email" placeholder="Email" onInput={this.showLabelInput.bind(this)} id="email-pelaksana" style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>phone_fill</i>
                                                    </div>
                                                    <div id="label-phone-number-pelaksana" style={{ display: "none" }}>Phone Number</div>
                                                </div>
                                            </li>
                                            <li className="margin-input margin-bottom">
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="tel" placeholder="Phone Number" onInput={this.showLabelInput.bind(this)} id="phone-number-pelaksana" style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </li>

                        </List>
                        <div className="row">
                            <div className="col-45">
                                <Button md round outline className="margin margin-top" onClick={this.previousStep.bind(this)}><i className="icon f7-icons">chevron_left_circle_fill</i> Previous</Button>
                            </div>
                            <div className="col-10">
                            </div>
                            <div className="col-45">
                                <Button md round outline className="margin margin-top" onClick={this.nextStep.bind(this)}>Preview <i className="icon f7-icons">chevron_right_circle_fill</i></Button>
                            </div>
                        </div>
                    </Card>

                    <Card className="card-list-form shadow" id="card-preview" style={{ display: "none" }}>
                        <List noHairlinesMd>
                            <li>
                                <Card className="card-in-form label-list" ><i className="margin-right icon f7-icons" style={{ fontSize: "23px" }}>person_crop_circle_fill</i>
                                     Preview
                                     <div className="field-separator"></div>
                                    <CardContent padding={false}>
                                        <ul>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>person_fill</i>
                                                    </div>
                                                    <div id="label-nama-pelaksana" >Name</div>
                                                </div>
                                            </li>
                                            <li className="margin-input">
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="text" readOnly placeholder="Name" id="nama-pelaksana-prev" defaultValue={this.state.nama} style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>creditcard_fill</i>
                                                    </div>
                                                    <div id="label-nik-pelaksana" >NIK</div>
                                                </div>
                                            </li>
                                            <li className="margin-input" >
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="number" readOnly placeholder="NIK" id="nik-pelaksana-prev" defaultValue={this.state.nik} style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>

                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>upload_circle_fill</i>
                                                    </div>
                                                    <div id="label-jenis-kelamin">Gender</div>
                                                </div>
                                            </li>
                                            <li className="margin-input" >
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="text" readOnly placeholder="Gender" id="jenis-kelamin-prev" value={this.state.jenis_kelamin} style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>

                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>building_2_fill</i>
                                                    </div>
                                                    <div id="label-position" >Position</div>
                                                </div>
                                            </li>
                                            <li className="margin-input" >
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="text" readOnly placeholder="Position" id="position-prev" defaultValue={this.state.jabatan} style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>building_2_fill</i>
                                                    </div>
                                                    <div id="label-regionality" >Regionality</div>
                                                </div>
                                            </li>
                                            <li className="margin-input" >
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="text" readOnly placeholder="Regionality" id="regionality-prev" defaultValue={this.state.wilayah} style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>building_2_fill</i>
                                                    </div>
                                                    <div id="label-location" >Location</div>
                                                </div>
                                            </li>
                                            <li className="margin-input" >
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="text" readOnly placeholder="Location" id="location-prev" defaultValue={this.state.lokasi_kerja} style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>building_2_fill</i>
                                                    </div>
                                                    <div id="label-sublocation" >Sublocation</div>
                                                </div>
                                            </li>
                                            <li className="margin-input" >
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="text" readOnly placeholder="Sub Location" id="sublocation-prev" defaultValue={this.state.sub_lokasi} style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>

                                            <div className="field-separator"></div>

                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>envelope_fill</i>
                                                    </div>
                                                    <div id="label-email-pelaksana">Email</div>
                                                </div>
                                            </li>
                                            <li className="margin-input">
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="email" placeholder="Email" id="email-pelaksana-prev" defaultValue={this.state.email} style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>phone_fill</i>
                                                    </div>
                                                    <div id="label-phone-number-pelaksana">Phone Number</div>
                                                </div>
                                            </li>
                                            <li className="margin-input margin-bottom">
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="tel" placeholder="Phone Number" id="phone-number-pelaksana-prev" defaultValue={this.state.no_telp} style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </li>

                        </List><div className="row">
                            <div className="col-45">
                                <Button md round outline className="margin margin-top" onClick={this.previousStep.bind(this)}><i className="icon f7-icons">chevron_left_circle_fill</i> Previous</Button>
                            </div>
                            <div className="col-10">
                            </div>
                            <div className="col-45">
                                <Button md round outline className="margin margin-top" onClick={this.savePelaksana.bind(this)}>Submit</Button>
                            </div>
                        </div>
                    </Card>

                </div>
            </Page >
        )
    }
    savePelaksana() {
        var url_api = 'https://api.jumantya.my.id/index.php/api/';

        var nama = $("#nama-pelaksana").val();
        var nik = $("#nik-pelaksana").val();
        var password = nik;
        var lokasi_kerja = $('#lokasi-kerja option:selected').html();
        var sub_lokasi = $('#sub-lokasi option:selected').html();
        if (sub_lokasi == 'No Sublocation Found' || 'Select Sublocation') {
            sub_lokasi = '';
        }
        var email = $("#email-pelaksana").val();
        var no_telp = $("#phone-number-pelaksana").val();
        var jabatan = $("#jabatan-pelaksana").val();
        var jenis_kelamin = $("#jenis-kelamin-pelaksana").val();
        var id_admin = localStorage.getItem("id_admin");

        var nama_admin = localStorage.getItem("nama_admin");

        this.setState({ nama: nama });
        this.setState({ nik: nik });
        this.setState({ lokasi_kerja: lokasi_kerja });
        this.setState({ sub_lokasi: sub_lokasi });
        this.setState({ password: password });
        this.setState({ email: email });
        this.setState({ no_telp: no_telp });
        this.setState({ jabatan: jabatan });
        this.setState({ jenis_kelamin: jenis_kelamin });
        this.setState({ id_admin: id_admin });

        console.log("nama pelaksana : " + this.state.nama)
        console.log("nik : " + this.state.nik)
        console.log("jabatan : " + this.state.jabatan)
        console.log("lokasi kerja : " + this.state.lokasi_kerja)
        console.log("sublokasi : " + this.state.sub_lokasi)
        console.log("jenis kelamin : " + this.state.jenis_kelamin)
        console.log("no telp : " + this.state.no_telp)
        console.log("email : " + this.state.email)
        console.log("password : " + this.state.password)
        console.log("id admin : " + this.state.id_admin)

        if (nama == '') {
            swal("Lengkapi Form Anda untuk melakukan peng-entry-an Pelaksana baru", "", "warning");
        } else if (nik == '') {
            swal("NIK belum terisi", "", "warning");
        } else if (jabatan == '') {
            swal("Position belum dipilih", "", "warning");
        } else if (lokasi_kerja == '') {
            swal("Location belum dipilih", "", "warning");
        }
        // else if (sub_lokasi == '') {
        //     swal("Sublocation belum dipilih", "", "warning");
        // }
        else if (jenis_kelamin == '') {
            swal("Gender belum dipilih", "", "warning");
        } else if (email == '') {
            swal("Email belum terisi", "", "warning");
        } else if (no_telp == '') {
            swal("Phone Number belum terisi", "", "warning");
        } else {
            // nama
            // nik
            // jabatan
            // lokasi_kerja
            // sub_lokasi
            // jenis_kelamin
            // no_telp
            // email
            // id_admin
            Framework7.request({
                url: url_api + 'Pelaksana',
                method: 'POST',
                data: { nama: nama, nik: nik, password: password, jabatan: jabatan, lokasi_kerja: lokasi_kerja, sub_lokasi: sub_lokasi, jenis_kelamin: jenis_kelamin, no_telp: no_telp, email: email, id_admin: id_admin },
                dataType: 'json',
                statusCode: {
                    404: function (xhr) {
                        alert('page not found');
                    }
                },
                beforeSend: function (xhr) { },
                success: function (data) {
                    swal("Add New Pelaksana Successful!", "", "success");
                    Framework7.request({
                        url: 'https://fcm.googleapis.com/fcm/send',
                        method: 'POST',
                        data: {
                            "condition": "'goods_request' in topics",
                            "notification": {
                                "title": "New " + jabatan + " Addition Notification",
                                "body": nama + " (" + jabatan + "), Added by " + nama_admin + ""
                            }, "data": {
                                "title": "New " + jabatan + " Addition Notification",
                                "body": nama + " (" + jabatan + "), Added by " + nama_admin + "",
                                "message": "Hello how are you?",
                                "meta": {
                                    "type": "small",
                                    "info": "Search"
                                }
                            }
                            // "to": "ewZ219dVyPQ:APA91bGiTjzr_Gca2QZfU_DCCWNno0gRnBe5ttoVIzGF2o6hvLuEvMpkFS4Mq5U0bH2c1oR4TJ3ezH9rVZCn4q-Cct2ZAr0YFJuAVGEiI6ehRjMhYL5Zxqcqd6EDcsarAqV27MCsTcdA",
                        },
                        headers: { 'Authorization': 'key=AAAAN3i6dpI:APA91bE2nZqF9ux6Z6iQdUP-Y60ATUx4Whks15O_IjpGYQ3gfI_KgkoykfnUX6WbbonmMj2E4OLEYLGeGKodJkiAWIEkEGfeaqRhqIObMfGL-I1IO7bWj3LdDAg1KldgwOqDlhu52rZ4' },
                        contentType: 'application/json',
                        dataType: 'json',
                        statusCode: {
                            404: function (xhr) {
                                alert('page not found');
                            }
                        },
                        beforeSend: function (xhr) { },
                        success: function (data) {
                            console.log(data);
                            f7.views.main.router.back();
                        },
                        error: function () { }
                    });


                },
                error: function () { }
            });


        }

    }

    onPageInit() {
        var url_api = 'https://api.jumantya.my.id/index.php/api/';
        Framework7.request({
            url: url_api + 'Profile',
            method: 'GET',
            data: {},
            dataType: 'json',
            statusCode: {
                404: function (xhr) {
                    alert('page not found');
                }
            },
            beforeSend: function (xhr) { },
            success: function (data) {
                var arr = [];
                for (var i = 0; i < data.length; i++) {
                    var id_profile = data[i].id_profile;
                    var wilayah = data[i].wilayah;
                    var html = '';
                    arr.push(
                        html = '<option value="' + id_profile + '">' + wilayah + '</option>'
                    );
                    $('.select-profile').append(html);
                }

            },
            error: function () { }
        });


    }
    showLabelInput() {
        if ($("#nama-pelaksana").val() != '') {
            console.log("show label nama barang")
            $("#label-nama-pelaksana").show();
        } else {
            console.log("hide label nama barang")
            $("#label-nama-pelaksana").hide();
        }

        if ($("#nik-pelaksana").val() != '') {
            console.log("show label masa pakai")
            $("#label-nik-pelaksana").show();
        } else {
            $("#label-nik-pelaksana").hide();
        }

        var nik_pelaksana = $("#nik-pelaksana").val();
        nik_pelaksana = parseInt(nik_pelaksana.length);
        console.log('nik pelaksana regex: ' + nik_pelaksana)
        if (nik_pelaksana > 8) {
            swal("NIK Only 8 digits", "", "warning");
            $("#nik-pelaksana").val("");
        } else {

        }



        if ($("#password").val() != '') {
            $("#label-password").show();
        } else {
            $("#label-password").hide();
        }

        if ($("#retype-password").val() != '') {
            $("#label-retype-password").show();
        } else {
            $("#label-retype-password").hide();
        }

        if ($("#email-pelaksana").val() != '') {
            $("#label-email-pelaksana").show();
        } else {
            $("#label-email-pelaksana").hide();
        }

        if ($("#phone-number-pelaksana").val() != '') {
            $("#label-phone-number-pelaksana").show();
        } else {
            $("#label-phone-number-pelaksana").hide();
        }
    }
    showLocation() {
        var url_api = 'https://api.jumantya.my.id/index.php/api/';
        var id_profile = $("#id-profile").val();
        Framework7.request({
            url: url_api + 'Lokasi',
            method: 'GET',
            data: { id_profile: id_profile },
            dataType: 'json',
            statusCode: {
                404: function (xhr) {
                    alert('page not found');
                }
            },
            beforeSend: function (xhr) { },
            success: function (data) {
                $('.select-location').html('<option value="">Select Location</option>');
                var arr = [];
                if (data.length != '') {
                    for (var i = 0; i < data.length; i++) {
                        var id_lokasi = data[i].id_lokasi;
                        var nama_gedung = data[i].nama_gedung;
                        var html = '';
                        arr.push(
                            html = '<option value="' + id_lokasi + '">' + nama_gedung + '</option>'
                        );
                        $('.select-location').append(html);
                    }
                } else {
                    var html = '';
                    arr.push(
                        html = '<option value="">No Location Found</option>'
                    );
                    $('.select-location').append(html);
                }

            },
            error: function () { }
        });
    }
    showSublocation() {
        var url_api = 'https://api.jumantya.my.id/index.php/api/';
        var id_lokasi = $("#lokasi-kerja").val();
        Framework7.request({
            url: url_api + 'Sublokasi',
            method: 'GET',
            data: { id_lokasi: id_lokasi },
            dataType: 'json',
            statusCode: {
                404: function (xhr) {
                    alert('page not found');
                }
            },
            beforeSend: function (xhr) { },
            success: function (data) {
                var arr = []
                $('.select-sublocation').html('<option value="">Select Sublocation</option>');

                if (data.length != '') {
                    for (var i = 0; i < data.length; i++) {
                        var id_sublokasi = data[i].id_sublokasi;
                        var lantai = data[i].lantai;
                        var html = '';
                        arr.push(
                            html = '<option value="' + id_sublokasi + '">' + lantai + '</option>'
                        );
                        $('.select-sublocation').append(html);
                    }
                } else {
                    var html = '';
                    arr.push(
                        html = '<option value="">No Sublocation Found</option>'
                    );
                    $('.select-sublocation').append(html);
                }

            },
            error: function () { }
        });
    }
    onPageBeforeRemove() {
        const self = this;
        const self1 = this;
        // Destroy popup when page removed
        if (self.popup_pelaksana) self.popup_pelaksana.destroy();
        if (self1.popup_barang) self1.popup_barang.destroy();
        $(".navbar").show();
    }
    showHide(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            type: this.state.type === 'text' ? 'password' : 'text'
        })
    }

    passwordStrength(e) {
        if (e.target.value === '') {
            this.setState({
                score: 'null'
            })
        }
        else {
            var zxcvbn = require('zxcvbn');
            var pw = zxcvbn(e.target.value);
            this.setState({
                score: pw.score
            });
        }
    }
    scanQrBarcode() {
        cordova.plugins.barcodeScanner.scan(
            function (result) {
                var fname = /FN:(.*)/g;
                // var org = /ORG:(.*)/g;
                var tel = /TITLE:(.*)/g;
                // var tel = /TITLE;[^:]*:(.*)/g;
                var mname, mtel;
                var str = result.text;

                mname = fname.exec(str);
                mtel = tel.exec(str);
                console.log(mname[1] + " - " + mtel[1])

                $("#nama-pelaksana").val(mname[1])
                $("#nik-pelaksana").val(mtel[1])


                // alert("We got a barcode\n" +
                //     "Result: " + result.text + "\n" +
                //     "Format: " + result.format + "\n" +
                //     "Cancelled: " + result.cancelled);
            },
            function (error) {
                alert("Scanning failed: " + error);
            },
            {
                preferFrontCamera: false, // iOS and Android
                showFlipCameraButton: true, // iOS and Android
                showTorchButton: true, // iOS and Android
                torchOn: false, // Android, launch with the torch switched on (if available)
                saveHistory: true, // Android, save scan history (default false)
                prompt: "Place a barcode inside the scan area", // Android
                resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                formats: "QR_CODE,PDF_417,CODE_39,CODE_128,CODE_93,UPC_A,UPC_E,EAN_8,EAN_13", // default: all but PDF_417 and RSS_EXPANDED
                orientation: "potrait", // Android only (portrait|landscape), default unset so it rotates with the device
                disableAnimations: true, // iOS
                disableSuccessBeep: false // iOS and Android
            }
        );
    }
    nextStep() {
        var personal_info = $("#personal-info");
        var position_info = $("#position-info");
        var contact_info = $("#contact-info");
        var preview = $("#preview");
        var card_personal = $("#card-personal-info");
        var card_postion = $("#card-position-info");
        var card_contact = $("#card-contact-info");
        var card_preview = $("#card-preview");

        if (personal_info.is(".active.editable")) {
            personal_info.removeClass("active")
            personal_info.removeClass("editable")
            personal_info.addClass("done")
            position_info.addClass("active")
            position_info.addClass("editable")
            card_personal.hide()
            card_postion.fadeIn()
        }

        else if (position_info.is(".active.editable")) {
            position_info.removeClass("active")
            position_info.removeClass("editable")
            position_info.addClass("done")
            contact_info.addClass("active")
            contact_info.addClass("editable")
            card_postion.hide();
            card_contact.fadeIn()
        }
        else if (contact_info.is(".active.editable")) {
            var nama = $("#nama-pelaksana").val();
            var nik = $("#nik-pelaksana").val();
            var password = nik;
            var wilayah = $('#id-profile option:selected').html();
            var lokasi_kerja = $('#lokasi-kerja option:selected').html();
            var sub_lokasi = $('#sub-lokasi option:selected').html();
            if (sub_lokasi == 'No Sublocation Found' || 'Select Sublocation') {
                sub_lokasi = '-';
            }
            var email = $("#email-pelaksana").val();
            var no_telp = $("#phone-number-pelaksana").val();
            var jabatan = $("#jabatan-pelaksana").val();
            var jenis_kelamin = $("#jenis-kelamin-pelaksana").val();
            var id_admin = localStorage.getItem("id_admin");

            this.setState({ nama: nama });
            this.setState({ nik: nik });
            this.setState({ lokasi_kerja: lokasi_kerja });
            this.setState({ sub_lokasi: sub_lokasi });
            this.setState({ password: password });
            this.setState({ email: email });
            this.setState({ no_telp: no_telp });
            this.setState({ jabatan: jabatan });
            this.setState({ jenis_kelamin: jenis_kelamin });
            this.setState({ wilayah: wilayah });
            this.setState({ id_admin: id_admin });
            contact_info.removeClass("active")
            contact_info.removeClass("editable")
            contact_info.addClass("done")
            preview.addClass("active")
            preview.addClass("done")
            card_contact.hide();
            card_preview.fadeIn()
        }
    }
    previousStep() {
        var personal_info = $("#personal-info");
        var position_info = $("#position-info");
        var contact_info = $("#contact-info");
        var preview = $("#preview");
        var card_personal = $("#card-personal-info");
        var card_postion = $("#card-position-info");
        var card_contact = $("#card-contact-info");
        var card_preview = $("#card-preview");

        if (preview.is(".active.done")) {
            preview.removeClass("active")
            preview.removeClass("editable")
            preview.removeClass("done")
            contact_info.addClass("active")
            contact_info.addClass("editable")
            card_preview.hide();
            card_contact.fadeIn()
        }
        else if (contact_info.is(".active.editable")) {
            contact_info.removeClass("active")
            contact_info.removeClass("editable")
            contact_info.removeClass("done")
            position_info.addClass("active")
            position_info.addClass("editable")
            card_contact.hide();
            card_postion.fadeIn()
        }
        else if (position_info.is(".active.editable")) {
            position_info.removeClass("active")
            position_info.removeClass("editable")
            position_info.removeClass("done")
            personal_info.addClass("active")
            personal_info.addClass("editable")
            card_postion.hide();
            card_personal.fadeIn()
        }

    }
    navbarHandler() {
        const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
        const scrollTop = this.myRef.current.scrollTop

        if (scrollTop > 20) {
            $("#navbar-bg").css({ 'transform': 'translateY(-65%)', 'border-radius': '0 0 35px 35px' }).removeClass('navbar-slide-down').addClass('navbar-slide-up')
            $(".title-page").css('margin-top', '140px')
            $(".left").fadeIn(500)
            $(".navbar").css('z-index', '200')
        } else {
            $("#navbar-bg").css({ 'transform': 'translateY(0%)', 'border-radius': '0 0 0px 0px' }).removeClass('navbar-slide-up').addClass('navbar-slide-down')
            $(".title-page").css('margin-top', '20px')
            $(".left").fadeOut(500)
            $(".navbar").css('z-index', '1')
        }
    }

}
