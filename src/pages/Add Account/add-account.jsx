import React from 'react';
import { f7, f7ready, Card } from 'framework7-react';


import {
    Page,
    Tabs,
    Tab,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Searchbar,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button,
    FabBackdrop,
    FabButtons,
    FabButton,
    Fab,
    Icon,
    Popover

} from 'framework7-react';

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            isBottom: true,
        };

    }
    render() {
        return (
            <Page pageContent={false} className="package-bg" style={{ backgroundColor: 'whitesmoke' }} name="add-account" onPageInit={this.onPageInit.bind(this)}>
                <div className="navbar">
                    <div className="navbar-bg navbar-custom inventory-logo-left" style={{ height: '65px' }}>
                        <div className="center">
                            <div className="title-page">ADD ACCOUNT</div>
                        </div>
                    </div>
                    <div className="navbar-inner sliding">
                        <div className="left">
                            <a className="icon-only link back icon-smooth margin-left-10" href="#">
                                <i className="icon f7-icons">arrow_turn_up_left</i>
                            </a>
                        </div>

                        <div className="right">
                            <a className="link icon-only panel-open" href="#" data-panel="right">
                                <i className="icon f7-icons icon-smooth margin-right-10">ellipsis_vertical</i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* FAB Backdrop */}
                <FabBackdrop slot="fixed" />

                {/* FAB Right Bottom */}
                <Fab className="fab-send-color" position="right-bottom" slot="fixed" style={{ marginBottom: "55px", textAlignLast: "center" }}>
                    <Icon ios="f7:plus" aurora="f7:plus" md="material:add" style={{ fontSize: "-webkit-xxx-large" }}></Icon>
                    <Icon ios="f7:xmark" aurora="f7:xmark" md="material:close" style={{ fontSize: "-webkit-xxx-large" }}></Icon>
                    <FabButtons position="top">
                        <FabButton onClick={() => this.$f7router.navigate('/add-administrator-page/')} label="Add New Administrator">+</FabButton>
                        <FabButton onClick={() => this.$f7router.navigate('/add-pelaksana-page/')} label="Add New Pelaksana">+</FabButton>
                    </FabButtons>
                </Fab>

                <Searchbar
                    searchContainer=".search-list"
                    searchIn=".text-list-search"
                    ignore=".searchbar-ignore"
                    disableButton={!this.$theme.aurora}
                ></Searchbar>

                {/* <Popover className="popover-menu">
                    <List>
                        <ListItem link="#" popoverClose title="Change Regionality" />
                        <ListItem link="#" popoverClose title="Edit" />
                    </List>
                </Popover> */}
                <div className="popover-menu popover " >
                    <div className="popover-angle">
                    </div>
                    <div className="popover-inner">
                        <div className="list">
                            <ul>
                                <li className="">
                                    <a className="item-link popover-close" href="/change-regionality-page/">
                                        <div className="item-content">
                                            <div className="item-inner">
                                                <div className="item-title">
                                                    <i className="icon f7-icons margin-right" style={{ color: '#febbbb' }}>building_2_fill</i>Change Regionality</div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="">
                                    <a className="item-link popover-close" href="#">
                                        <div className="item-content">
                                            <div className="item-inner">
                                                <div className="item-title"><i className="icon f7-icons margin-right" style={{ color: '#febbbb' }}>pencil_outline</i>Edit</div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Toolbar tabbar labels scrollable position={this.state.isBottom ? 'bottom' : 'top'}>
                    <Link className="button-bg" tabLink="#tab-administrator-list" tabLinkActive text="Administrator List" iconIos="f7:rectangle_stack_person_crop_fill" iconAurora="f7:rectangle_stack_person_crop_fill" iconMd="f7:rectangle_stack_person_crop_fill"></Link>
                    <Link className="button-bg" tabLink="#tab-pelaksana-list" text="Pelaksana List" iconIos="f7:person_2_square_stack_fill" iconAurora="f7:person_2_square_stack_fill" iconMd="f7:person_2_square_stack_fill"></Link>
                </Toolbar>

                <Tabs swipeable>
                    <Tab id="tab-administrator-list" className="page-content" tabActive>
                        <Block>
                            <List className="searchbar-not-found">
                                <ListItem>
                                    <Card className="card-list">
                                        <span className="text-menu">Administrator tidak ditemukan</span><br></br>
                                    </Card>
                                </ListItem>
                            </List>
                            <List id="account-administrator-list" className="search-list searchbar-found">
                                <List id="skeleton" className="skeleton-text skeleton-effect-fade">
                                    <ListItem>
                                        <Card className="card-list-skeleton">
                                            <span className="text-menu">jenis_barang kategori kategori</span><br></br>
                                        </Card>
                                    </ListItem>
                                    <ListItem>
                                        <Card className="card-list-skeleton">
                                            <span className="text-menu">jenis_barang kategori kategori</span><br></br>
                                        </Card>
                                    </ListItem>
                                    <ListItem>
                                        <Card className="card-list-skeleton">
                                            <span className="text-menu">jenis_barang kategori kategori</span><br></br>
                                        </Card>
                                    </ListItem>
                                    <ListItem>
                                        <Card className="card-list-skeleton">
                                            <span className="text-menu">jenis_barang kategori kategori</span><br></br>
                                        </Card>
                                    </ListItem>
                                    <ListItem>
                                        <Card className="card-list-skeleton">
                                            <span className="text-menu">jenis_barang kategori kategori</span><br></br>
                                        </Card>
                                    </ListItem>
                                    <ListItem>
                                        <Card className="card-list-skeleton">
                                            <span className="text-menu">jenis_barang kategori kategori</span><br></br>
                                        </Card>
                                    </ListItem>
                                    <ListItem>
                                        <Card className="card-list-skeleton">
                                            <span className="text-menu">jenis_barang kategori kategori</span><br></br>
                                        </Card>
                                    </ListItem>
                                    <ListItem>
                                        <Card className="card-list-skeleton">
                                            <span className="text-menu">jenis_barang kategori kategori</span><br></br>
                                        </Card>
                                    </ListItem>
                                    <ListItem>
                                        <Card className="card-list-skeleton">
                                            <span className="text-menu">jenis_barang kategori kategori</span><br></br>
                                        </Card>
                                    </ListItem>
                                </List>
                            </List>
                        </Block>
                    </Tab>
                    <Tab id="tab-pelaksana-list" className="page-content">
                        <Block>
                            <List className="searchbar-not-found">
                                <ListItem>
                                    <Card className="card-list">
                                        <span className="text-menu">Pelaksana tidak ditemukan</span><br></br>
                                    </Card>
                                </ListItem>
                            </List>
                            <List id="account-pelaksana-list" className="search-list searchbar-found">

                            </List>
                        </Block>
                    </Tab>

                </Tabs>



            </Page>
        )
    }
    onPageInit() {
        // do something on page init
        // var url_api = 'http://127.0.0.1/rest_ci/index.php/api/list_barang';
        // var url_api = 'http://192.168.43.117/rest_ci/index.php/api/list_barang/';
        var url_api = 'https://api.jumantya.my.id/index.php/api/';


        this.$request({
            url: url_api + "Admin",
            method: 'GET',
            data: {},
            dataType: 'json',
            statusCode: {
                404: function (xhr) {
                    alert('page not found');
                }
            },
            beforeSend: function (xhr) { $('#skeleton').show(); },
            success: function (data) {
                var arr = [];
                for (var i = 0; i < data.length; i++) {
                    var id_admin = data[i].id_admin;
                    var nama_admin = data[i].nama_admin;
                    var nik = data[i].NIK;
                    var jabatan = data[i].jabatan;
                    var username = data[i].username;
                    var password = data[i].password;
                    var jenis_kelamin = data[i].jenis_kelamin;
                    var no_telp = data[i].no_telp;
                    var email = data[i].email;
                    arr.push(
                        '<li class="margin-bottom">' +
                        '<div class="card-list label-list card" style=" text-align:left;background-color: white; ">' +
                        '<input type="checkbox" class="read-more-state" id="detail-admin-' + i + '">' +
                        '<label for="detail-admin-' + i + '" style="font-size:16px; color: #747474;"  class="text-list-search">' + nama_admin + ' (' + jabatan + ')</label > ' +
                        '<ul class="read-more-wrap">' +
                        '<li class="read-more-target searchbar-ignore">' +
                        '<div class="item-content">' +
                        '<div class="item-inner">' +
                        '<span class="label-list">ID Admin :</span>' +
                        '<span class="text-list textcolor-green">' + id_admin + '</span>' +
                        '</div>' +
                        '</div>' +
                        '</li>' +
                        '<li class="read-more-target searchbar-ignore">' +
                        '<div class="item-content">' +
                        '<div class="item-inner">' +
                        '<span class="label-list">NIK :</span>' +
                        '<span class="text-list" id="nik-admin-' + i + '">' + nik + '</span>' +
                        '</div>' +
                        '</div>' +
                        '</li>' +
                        '<li class="read-more-target searchbar-ignore">' +
                        '<div class="item-content">' +
                        '<div class="item-inner">' +
                        '<span class="label-list">Username :</span>' +
                        '<span class="text-list">' + username + '</span>' +
                        '</div>' +
                        '</div>' +
                        '</li>' +
                        '<li class="read-more-target searchbar-ignore">' +
                        '<div class="item-content">' +
                        '<div class="item-inner">' +
                        '<span class="label-list">Password :</span>' +
                        '<span class="text-list" >' + password + '</span>' +
                        '</div>' +
                        '</div>' +
                        '</li>' +
                        '<li class="read-more-target searchbar-ignore">' +
                        '<div class="item-content">' +
                        '<div class="item-inner">' +
                        '<span class="label-list">Jenis Kelamin:</span>' +
                        '<span class="text-list" >' + jenis_kelamin + '</span>' +
                        '</div>' +
                        '</div>' +
                        '</li>' +
                        '<li class="read-more-target searchbar-ignore">' +
                        '<div class="item-content">' +
                        '<div class="item-inner">' +
                        '<span class="label-list">Email:</span>' +
                        '<span class="text-list" >' + email + '</span>' +
                        '</div>' +
                        '</div>' +
                        '</li>' +
                        '<li class="read-more-target searchbar-ignore">' +
                        '<div class="item-content">' +
                        '<div class="item-inner">' +
                        '<span class="label-list">No Telepon:</span>' +
                        '<span class="text-list">' + no_telp + '</span>' +
                        '</div>' +
                        '</div>' +
                        '</li>' +
                        '</ul>' +
                        '</div>' +
                        '</div>' +
                        '</li>'
                    );

                }
                $('#account-administrator-list').html(arr.join(''));
            },
            error: function () { }
        });

        window.set_nik = function (nik) {
            localStorage.setItem("nik_pelaksana_edit", nik)
        }

        this.$request({
            url: url_api + "Pelaksana",
            method: 'GET',
            data: {},
            dataType: 'json',
            statusCode: {
                404: function (xhr) {
                    alert('page not found');
                }
            },
            beforeSend: function (xhr) { $('#skeleton').show(); },
            success: function (data) {
                var arr = [];
                for (var i = 0; i < data.length; i++) {
                    var nama = data[i].nama;
                    var nik = data[i].nik;
                    var lokasi_kerja = data[i].lokasi_kerja;
                    var sub_lokasi = data[i].sub_lokasi;
                    var jabatan = data[i].jabatan;
                    var jenkel = data[i].jenis_kelamin;
                    var email = data[i].email;
                    var no_telp = data[i].no_telp;

                    arr.push(
                        '<li class="margin-bottom">' +
                        '<div class="card-list label-list card" style=" text-align:left; background-color: white; ">' +
                        '<input type="checkbox" class="read-more-state" id="detail-pelaksana-' + i + '">' +
                        '<label for="detail-pelaksana-' + i + '" style="font-size:16px;padding-left: 22px; color: #747474;" class="text-list-search">' + nama + ' (' + jabatan + ')</label > ' +
                        '<span style="" class=""><a class="link popover-open" onclick="set_nik(' + nik + ')" href="#" data-popover=".popover-menu" style="margin-top: -4px;float: right;"><i class="icon f7-icons" style="color: #febbbb;">ellipsis_vertical_circle</i></a></span>' +
                        '<ul class="read-more-wrap">' +
                        '<li class="read-more-target searchbar-ignore">' +
                        '<div class="item-content">' +
                        '<div class="item-inner">' +
                        '<span class="label-list">NIK :</span>' +
                        '<span class="text-list textcolor-green" id="nik-pelaksana-' + i + '">' + nik + '</span>' +
                        '</div>' +
                        '</div>' +
                        '</li>' +
                        '<li class="read-more-target searchbar-ignore">' +
                        '<div class="item-content">' +
                        '<div class="item-inner">' +
                        '<span class="label-list">Lokasi Kerja :</span>' +
                        '<span class="text-list">' + lokasi_kerja + '</span>' +
                        '</div>' +
                        '</div>' +
                        '</li>' +
                        '<li class="read-more-target searchbar-ignore">' +
                        '<div class="item-content">' +
                        '<div class="item-inner">' +
                        '<span class="label-list">Sub Lokasi :</span>' +
                        '<span class="text-list">' + sub_lokasi + '</span>' +
                        '</div>' +
                        '</div>' +
                        '</li>' +
                        '<li class="read-more-target searchbar-ignore">' +
                        '<div class="item-content">' +
                        '<div class="item-inner">' +
                        '<span class="label-list">Jenis Kelamin :</span>' +
                        '<span class="text-list" >' + jenkel + '</span>' +
                        '</div>' +
                        '</div>' +
                        '</li>' +
                        '<li class="read-more-target searchbar-ignore">' +
                        '<div class="item-content">' +
                        '<div class="item-inner">' +
                        '<span class="label-list">Email:</span>' +
                        '<span class="text-list" >' + email + '</span>' +
                        '</div>' +
                        '</div>' +
                        '</li>' +
                        '<li class="read-more-target searchbar-ignore">' +
                        '<div class="item-content">' +
                        '<div class="item-inner">' +
                        '<span class="label-list">No Telepon:</span>' +
                        '<span class="text-list">' + no_telp + '</span>' +
                        '</div>' +
                        '</div>' +
                        '</li>' +
                        '</ul>' +
                        '</div>' +
                        '</div>' +
                        '</li>'
                    );

                }
                $('#account-pelaksana-list').html(arr.join(''));
            },
            error: function () { }
        });
    }
    setNik(event, nik) {
        localStorage.setItem("nik_pelaksana_edit", nik);
    }
}