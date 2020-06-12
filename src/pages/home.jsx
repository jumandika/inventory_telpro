import React from 'react';
import { f7, f7ready, Card } from 'framework7-react';
import Framework7, { Device, Request, Support } from 'framework7';

import {
  Page,
  Tabs,
  Tab,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Input,
  Row,
  CardContent,
  ListInput,
  Col,
  Button,
  Sheet,
  PageContent
} from 'framework7-react';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      isBottom: true,
      type: 'password',
      score: 'null',
    };
  }
  render() {
    return (
      <Page pageContent={false} className="package-bg" style={{ backgroundColor: 'whitesmoke' }}
        name="home" onPageAfterIn={this.onPageAfterIn.bind(this)}
        onPageInit={this.onPageInit.bind(this)}
        onPageBeforeOut={this.onPageBeforeOut.bind(this)}
        onPageBeforeRemove={this.onPageBeforeRemove.bind(this)}
      >
        <div className="navbar">
          <div className="navbar-bg navbar-custom inventory-logo">
          </div>
          <div className="navbar-inner sliding ">
            <div className="left">
              <div id="name-initial" className="name-circle">

              </div>
              {/* <a className="icon-only link back icon-smooth margin-left-10" href="#">
                <i className="icon f7-icons">arrow_turn_up_left</i>
              </a> */}
            </div>
            <div className="right">
              <a className="link icon-only" onClick={this.logOut.bind(this)}>
                <i className="icon f7-icons icon-smooth margin-right-10">power</i>
              </a>
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <Toolbar tabbar labels position={this.state.isBottom ? 'bottom' : 'top'}>
          <Link className="button-bg" tabLink="#tab-1" tabLinkActive text="HOME" iconIos="f7:house" iconAurora="f7:house" iconMd="f7:house_alt"></Link>
          <Link className="button-bg" onClick={this.profileInfo.bind(this)} tabLink="#tab-2" text="PROFILE" iconIos="f7:person_alt_circle_fill" iconAurora="f7:person_alt_circle_fill" iconMd="f7:person_alt_circle_fill"></Link>
          <Link className="button-bg" tabLink="#tab-3" text="INFO" iconIos="f7:info_circle" iconAurora="f7:info_circle" iconMd="f7:info_circle"></Link>
        </Toolbar>
        {/* Page content */}

        <Sheet
          className="sheet-change-password sheet-modal-top"
          style={{ height: 'auto', '--f7-sheet-bg-color': '#fff0' }}
          swipeToClose
          backdrop
        >
          <PageContent>
            <Card className="card-sheet">
              <List noHairlinesMd>
                <li>
                  <Card className="card-in-form label-list" style={{ border: "none" }}>
                    <CardContent padding={false}>
                      <ul>
                        <li className="margin-input">
                          <div className="item-content item-input icon-top">
                            <div className="item-media">
                              <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>lock_circle_fill</i>
                            </div>
                            <div id="label-old-password" style={{ display: "none" }}>Old Password</div>
                          </div>
                        </li>
                        <li className="margin-input">
                          <div className="item-input">
                            <div className="item-input-wrap">
                              <input type={this.state.type}
                                placeholder="Old Password"
                                className="password__input"
                                onInput={this.showLabelInput.bind(this)}
                                onKeyUp={this.checkOldPassword.bind(this)}
                                id="old-password"
                                style={{ textAlignLast: "center" }}
                              />
                              <i className="password__show icon f7-icons" onClick={this.showHide.bind(this)}>{this.state.type === 'text' ? 'eye_slash' : 'eye'}</i>
                            </div>
                          </div>
                          <i style={{ display: "none" }} className="icon f7-icons" id="lock-icon" ></i><span style={{ display: "none" }} id="password-bool" />
                        </li>
                        <div className="field-separator"></div>
                        <li className="margin-input">
                          <div className="item-content item-input icon-top">
                            <div className="item-media">
                              <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>lock</i>
                            </div>
                            <div id="label-new-password" style={{ display: "none" }}>New Password</div>
                          </div>
                        </li>
                        <li className=" margin-input">
                          <div className="item-input">
                            <div className="item-input-wrap">
                              <input type={this.state.type}
                                placeholder="New Password"
                                className="password__input"
                                onChange={this.passwordStrength.bind(this)}
                                onInput={this.showLabelInput.bind(this)}
                                id="new-password"
                                style={{ textAlignLast: "center" }}
                              />
                              <i className="password__show icon f7-icons" onClick={this.showHide.bind(this)}>{this.state.type === 'text' ? 'eye_slash' : 'eye'}</i>
                              <span className="password__strength" data-score={this.state.score} />
                            </div>
                          </div>
                        </li>
                        <div className="field-separator"></div>
                        <li className="margin-input">
                          <div className="item-content item-input icon-top">
                            <div className="item-media">
                              <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>pencil_ellipsis_rectangle</i>
                            </div>
                            <div id="label-retype-password" style={{ display: "none" }}>Retype Password</div>
                          </div>
                        </li>
                        <li className="margin-input">
                          <div className="item-input">
                            <div className="item-input-wrap">
                              <input type={this.state.type}
                                placeholder=" Retype Password"
                                className="password__input"
                                onInput={this.showLabelInput.bind(this)}
                                onKeyUp={this.matchingPassword.bind(this)}
                                id="retype-password"
                                style={{ textAlignLast: "center" }}
                              />
                              <i className="password__show icon f7-icons" onClick={this.showHide.bind(this)}>{this.state.type === 'text' ? 'eye_slash' : 'eye'}</i>
                            </div>
                          </div>
                          <i style={{ display: "none" }} className="icon f7-icons" id="lock-retype-icon" ></i><span style={{ display: "none" }} id="retype-password-bool" />
                        </li>
                        <div className="field-separator"></div>
                      </ul>
                    </CardContent>
                  </Card>
                </li>
              </List>
              <Button md round fill className="margin-bottom" onClick={this.updatePassword.bind(this)}><i className="icon f7-icons">arrow_uturn_up_square_fill</i> Submit</Button>
              <div className="field-separator"></div>
              <div className="swipe-close"></div>
            </Card>
          </PageContent>
        </Sheet>



        <Tabs>
          <Tab id="tab-1" className="page-content" tabActive>
            <Block>
              <Row tag="div" style={{ marginTop: '100px' }}>
                <Link TouchRipple={true} className="col goods-list-icon card card-menu" href="/goods-list-page/">
                  <br /><br /><br />
                  <span className="text-menu">Good's</span><br />
                  <span className="text-menu">List</span>
                </Link>
                <Link className="col goods-taking-icon card card-menu" href="/goods-request-page/">
                  <br /><br /><br />
                  <span className="text-menu">Make</span><br />
                  <span className="text-menu">Request</span>
                </Link>
                <Link className="col logbook-icon card card-menu" href="/history-list-page/">
                  <br /><br /><br />
                  <span className="text-menu">Your</span><br />
                  <span className="text-menu">History</span>
                </Link>
              </Row>
              <Row tag="div" style={{ marginTop: '20px' }} className="">
                <Link className="col add-goods-icon card card-menu admin-access icon-disable" href="/goods-add-page/">
                  <br /><br /><br />
                  <span className="text-menu text-disable">Add</span><br />
                  <span className="text-menu text-disable">Goods</span>
                </Link>
                <Link className="col goods-in-icon card card-menu icon-disable admin-access" href="/goods-in-page/">
                  <br /><br /><br />
                  <span className="text-menu text-disable">.</span> <br />
                  <span className="text-menu text-disable">Goods In</span>
                </Link>
                <Link className="col card goods-app-icon card-menu icon-disable admin-access" href="/goods-application-page/">
                  <br /><br /><br />
                  <span className="text-menu text-disable">Goods</span><br />
                  <span className="text-menu text-disable">Application</span>
                </Link>
              </Row>
              <Row tag="div" style={{ marginTop: '20px' }} className="">
                <Link className="col card regionality-icon card-menu admin-access icon-disable" href="/add-regionality-page/">
                  <br /><br /><br />
                  <span className="text-menu text-disable">Add</span><br />
                  <span className="text-menu text-disable">Regionality</span>
                </Link>
                <Link onClick={this.inProgress.bind(this)} className="col supplier-icon icon-disable card card-menu admin-access" href="#">
                  <br /><br /><br />
                  <span className="text-menu text-disable">Add</span><br />
                  <span className="text-menu text-disable">Supplier</span>
                </Link>
                {/* <Link onClick={this.inProgress.bind(this)} className="col card card-menu admin-access" href="#"> */}
                <Link className="col card person-icon card-menu admin-access icon-disable" href="/add-account-page/">
                  <br /><br /><br />
                  <span className="text-menu text-disable">Add</span><br />
                  <span className="text-menu text-disable">Account</span>
                </Link>
              </Row>
              <Row tag="div" style={{ marginTop: '20px' }} className="">
                <Link className="col security-patrol-icon card card-menu icon-disable admin-access" href="/security-patrol-page/">
                  <br /><br /><br />
                  <span className="text-menu text-disable">Security</span><br />
                  <span className="text-menu text-disable">Patrol</span>
                </Link>
                <Link className="col " href="#">

                </Link>
                <Link className="col " href="#">

                </Link>
                {/* <Link onClick={this.inProgress.bind(this)} className="col card card-menu admin-access" href="#">
                  <i className="icon f7-icons icon-menu icon-disable" style={{ textShadow: "rgb(255, 255, 255) 0px 0px 2px", color: "rgb(175, 212, 186)" }}>arrowshape_turn_up_right_circle_fill</i><br></br>
                  <span className="text-menu text-disable">Add</span><br />
                  <span className="text-menu text-disable">Supplier</span>
                </Link>
                <Link className="col card card-menu admin-access" href="/add-account-page/">
                  <i className="icon f7-icons icon-menu icon-disable" style={{ textShadow: "rgb(255, 255, 255) 0px 0px 2px", color: "rgb(196, 192, 185)" }}>person_crop_circle_fill_badge_plus</i><br></br>
                  <span className="text-menu text-disable">Add</span><br />
                  <span className="text-menu text-disable">Account</span>
                </Link> */}
              </Row>
            </Block>
          </Tab>
          <Tab id="tab-2" className="page-content">
            <Block>
              <Card className="card-list shadow" style={{ marginTop: "100px" }}>
                <List noHairlinesMd>
                  <ListItem>
                    <Card className="card-list label-list shadow" style={{ padding: "0", borderTop: "none", borderBottom: "none", paddingTop: '10px' }}><i className=" icon f7-icons" style={{ fontSize: "23px" }}>person</i>
                                     Profil Info
                                <div style={{ borderBottom: 'solid 2px #fcc7c76b', marginTop: '10px' }}></div>
                      <CardContent padding={false}>
                        <Input
                          style={{ textAlignLast: 'center' }}
                          type="text"
                          inputId="nama-pelaksana"
                          placeholder="Nama Anda"
                          // onChange={(e) => this.setState({ nama_pelaksana: e.target.value })}
                          // onFocus={this.createPopup_Pelaksana.bind(this)}
                          readonly
                        >
                        </Input>
                        <div style={{ borderBottom: 'solid 2px #fcc7c76b', marginBottom: '10px' }}></div>
                        {/* <input type="checkbox" className="read-more-state" id="post-2" /> */}
                        <label htmlFor="post-2" className="text-list">Detail Profile</label>
                        <div style={{ borderBottom: 'solid 2px #fcc7c76b', marginTop: '10px' }}></div>
                        <ul >
                          <ListItem><span className="label-list">NIK:</span><span className="text-list textcolor-green" id="nik"></span></ListItem>
                          <ListItem><span className="label-list" id="label-loker">Lokasi Kerja:</span><span className="text-list" id="lokasi-kerja"></span></ListItem>
                          <ListItem><span className="label-list" id="label-sublok">Sublokasi:</span><span className="text-list" id="sub-lokasi"></span></ListItem>
                          <ListItem><span className="label-list">Jabatan:</span><span className="text-list" id="jabatan"></span></ListItem>
                          <ListItem><span className="label-list">Jenis Kelamin:</span><span className="text-list" id="jenis-kelamin"></span></ListItem>
                          <ListItem><span className="label-list">Email:</span><span className="text-list" id="email"></span></ListItem>
                          <ListItem><span className="label-list">No Telepon:</span><span className="text-list" id="no-telp"></span></ListItem>
                        </ul>
                      </CardContent>

                    </Card>
                  </ListItem>
                </List>
                <Row tag="div">
                  <Col>
                    <Button small round outline className="margin margin-top" onClick={this.navigateEditButton.bind(this)}>
                      <i className="icon f7-icons">pencil_circle_fill</i>Edit</Button>
                  </Col>
                  <Col>
                    <Button small round outline sheetOpen=".sheet-change-password" className="margin margin-top" >
                      <i className="icon f7-icons">lock_rotation_open</i> Change Password</Button>
                  </Col>
                </Row>
              </Card>
            </Block>
          </Tab>
          <Tab id="tab-3" className="page-content">
            <Block>
              {/* <p>Tab 3 content</p>
              <BlockTitle>Panels</BlockTitle>
              <Block strong>
                <Row>
                  <Col width="50">
                    <Button fill raised panelOpen="left">Left Panel</Button>
                  </Col>
                  <Col width="50">
                    <Button fill raised panelOpen="right">Right Panel</Button>
                  </Col>
                </Row>
              </Block> */}
            </Block>
          </Tab>
        </Tabs>


      </Page>
    )
  }
  onPageInit() {


  }
  onPageAfterIn() {
    var jabatan = localStorage.getItem("jabatan");
    if (jabatan == 'Housekeeping' || jabatan == 'Landscape' || jabatan == 'Office Boy' || jabatan == 'Gardener') {
      $(".admin-access").removeAttr("href");
      $(".admin-access").css("background-color", "unset");
      $(".icon-disable").css("color", "lightgray");
      $(".text-disable").css("color", "lightgray");
      console.log("pelaksana access")
    } else {

    }
    window.getInitials = function (valStr) {
      var words = valStr.split(" "),
        initials = "";
      words.forEach(function (word) {
        initials += word.charAt(0) + ".";
      });
      return initials.toUpperCase();
    }
    var nama_admin = localStorage.getItem("nama_admin");
    var nama_pelaksana = localStorage.getItem("nama_pelaksana");
    if (nama_admin == '' || nama_admin == null || nama_admin == undefined) {
      $("#name-initial").text(getInitials(nama_pelaksana))
    } else {
      $("#name-initial").text(getInitials(nama_admin))
    }
  }
  inProgress() {
    f7.dialog.alert("Module In Progress");
  }
  navigateEditButton() {
    var jabatan = localStorage.getItem("jabatan");
    if (jabatan == 'Housekeeping' || jabatan == 'Landscape' || jabatan == 'Office Boy' || jabatan == 'Gardener') {
      this.$f7router.navigate('/edit-profile-pelaksana-page/')
    } else {
      this.$f7router.navigate('/edit-profile-admin-page/')
    }
  }
  profileInfo() {
    var url_api = 'https://api.jumantya.my.id/index.php/api/';
    Framework7.request({
      url: url_api + 'Pelaksana',
      method: 'GET',
      data: { nik: localStorage.getItem("username") },
      dataType: 'json',
      statusCode: {
        404: function (xhr) {
          alert('page not found');
        }
      },
      beforeSend: function (xhr) { },
      success: function (data) {
        if (data.length == 0) {
          Framework7.request({
            url: url_api + 'Admin?username=' + localStorage.getItem("username") + '',
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
              console.log("page init home : " + data);
              var nama = data[0].nama_admin;
              var nik = data[0].NIK;
              var id_admin = data[0].id_admin;
              var username = data[0].username;
              var jabatan = data[0].jabatan;
              var jenkel = data[0].jenis_kelamin;
              var email = data[0].email;
              var no_telp = data[0].no_telp;


              $('#nama-pelaksana').val(nama);
              $('#nik').text(nik);
              $('#lokasi-kerja').text(id_admin);
              $('#sub-lokasi').text(username);
              $('#jabatan').text(jabatan);
              $('#jenis-kelamin').text(jenkel);
              $('#email').text(email);
              $('#no-telp').text(no_telp);
              $('#label-loker').text("ID Admin:");
              $('#label-sublok').text("Username:");

            },
            error: function () { }
          });
        } else {
          console.log("page init home : " + data);
          var nama = data[0].nama;
          var nik = data[0].nik;
          var lokasi_kerja = data[0].lokasi_kerja;
          var sub_lokasi = data[0].sub_lokasi;
          var jabatan = data[0].jabatan;
          var jenkel = data[0].jenis_kelamin;
          var email = data[0].email;
          var no_telp = data[0].no_telp;
          $('#nama-pelaksana').val(nama);
          $('#nik').text(nik);
          $('#lokasi-kerja').text(lokasi_kerja);
          $('#sub-lokasi').text(sub_lokasi);
          $('#jabatan').text(jabatan);
          $('#jenis-kelamin').text(jenkel);
          $('#email').text(email);
          $('#no-telp').text(no_telp);
        }

      },
      error: function () { }
    });
  }
  checkOldPassword() {
    var url_api = 'https://api.jumantya.my.id/index.php/api/';
    var jabatan = localStorage.getItem("jabatan");
    var id_admin = localStorage.getItem("id_admin")
    var nik = localStorage.getItem("username")

    if (jabatan == 'Housekeeping' || jabatan == 'Landscape' || jabatan == 'Office Boy' || jabatan == 'Gardener') {
      Framework7.request({
        url: url_api + 'Pelaksana',
        method: 'GET',
        data: { nik: nik },
        dataType: 'json',
        statusCode: {
          404: function (xhr) {
            alert('page not found');
          }
        },
        beforeSend: function (xhr) { },
        success: function (data) {
          var old_password = data[0].password;
          var password_input = $("#old-password").val();
          if (password_input === old_password) {
            $("#password-bool").text("Password True")
            $("#lock-icon").text("lock_shield_fill")
          } else {
            $("#password-bool").text("Wrong Password")
            $("#lock-icon").text("lock_slash_fill")
          }

        },
        error: function () { }
      });

    } else {
      Framework7.request({
        url: url_api + 'Admin',
        method: 'GET',
        data: { id_admin: id_admin },
        dataType: 'json',
        statusCode: {
          404: function (xhr) {
            alert('page not found');
          }
        },
        beforeSend: function (xhr) { },
        success: function (data) {
          var old_password = data[0].password;
          var password_input = $("#old-password").val();
          if (password_input === old_password) {
            $("#password-bool").text("Password True")
            $("#lock-icon").text("lock_shield_fill")
          } else {
            $("#lock-icon").text("lock_slash_fill")
            $("#password-bool").text("Wrong Password")
          }

        },
        error: function () { }
      });
    }

  }
  matchingPassword() {
    var new_password = $("#new-password").val();
    var retype_password = $("#retype-password").val();
    if (retype_password === new_password) {
      $("#retype-password-bool").text("Password Match")
      $("#lock-retype-icon").text("checkmark_shield_fill")
    } else {
      $("#retype-password-bool").text("Password Not Match")
      $("#lock-retype-icon").text("lock_slash_fill")
    }

  }
  updatePassword() {
    var url_api = 'https://api.jumantya.my.id/index.php/api/';

    var jabatan = localStorage.getItem("jabatan");
    var id_admin = localStorage.getItem("id_admin")
    var nik = localStorage.getItem("username")
    var password = $("#new-password").val();

    if (password == '') {
      swal("Password belum terisi", "", "warning");
    } else {
      if (jabatan == 'Housekeeping' || jabatan == 'Landscape' || jabatan == 'Office Boy' || jabatan == 'Gardener') {
        Framework7.request({
          url: url_api + 'Change_Password_Pelaksana',
          method: 'PUT',
          data: { nik: nik, password: password },
          dataType: 'json',
          statusCode: {
            404: function (xhr) {
              alert('page not found');
            }
          },
          beforeSend: function (xhr) { },
          success: function (data) {
            console.log(data)
            swal("Change Password Successful!", "", "success");
            $("old-password").val('')
            $("new-password").val('')
            $("retype-password").val('')

          },
          error: function () { }
        });
      } else {
        Framework7.request({
          url: url_api + 'Change_Password_Admin',
          method: 'PUT',
          data: { id_admin: id_admin, password: password },
          dataType: 'json',
          statusCode: {
            404: function (xhr) {
              alert('page not found');
            }
          },
          beforeSend: function (xhr) { },
          success: function (data) {
            console.log(data)
            swal("Change Password Successful!", "", "success");
            $("old-password").val('')
            $("new-password").val('')
            $("retype-password").val('')

          },
          error: function () { }
        });

      }

    }

  }
  showLabelInput() {

    if ($("#new-password").val() != '') {
      $("#label-new-password").show();
    } else {
      $("#label-new-password").hide();
    }

    if ($("#retype-password").val() != '') {
      $("#label-retype-password").show();
      $("#lock-retype-icon").show();
      $("#retype-password-bool").show();
    } else {
      $("#label-retype-password").hide();
      $("#lock-retype-icon").hide();
      $("#retype-password-bool").hide();
    }

    if ($("#old-password").val() != '') {
      $("#label-old-password").show();
      $("#lock-icon").show();
      $("#password-bool").show();
    } else {
      $("#label-old-password").hide();
      $("#lock-icon").hide();
      $("#password-bool").hide();
    }


  }
  logOut() {
    f7.dialog.confirm('Logout?', function () {
      f7.views.main.router.back();
      StatusBar.overlaysWebView(true);
      if (localStorage.length > 0) {
        localStorage.clear();
      }
    });
  }
  onPageBeforeOut() {
    const self = this;
    // Close opened sheets on page out
    self.$f7.sheet.close();
  }
  onPageBeforeRemove() {
    const self = this;
    // Destroy sheet modal when page removed
    if (self.sheet) self.sheet.destroy();
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
}