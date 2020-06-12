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
    Icon

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
            <Page pageContent={false} className="package-bg" style={{ backgroundColor: 'whitesmoke' }} name="patrol-location-list" onPageInit={this.onPageInit.bind(this)}>
                <div className="navbar">
                    <div className="navbar-bg navbar-custom inventory-logo-left" style={{ height: '65px' }}>
                        <div className="center">
                            <div className="title-page">Daftar Gedung</div>
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

                {/* <FabBackdrop slot="fixed" />

                <Fab position="right-bottom" slot="fixed" style={{ marginBottom: "55px", textAlignLast: "center" }}>
                    <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>
                    <Icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></Icon>
                    <FabButtons position="top">
                        <FabButton onClick={() => this.$f7router.navigate('/add-sublocation-page/')} label="Add New Sub Location">+</FabButton>
                        <FabButton onClick={() => this.$f7router.navigate('/add-location-page/')} label="Add New Location">+</FabButton>
                        <FabButton onClick={() => this.$f7router.navigate('/add-regional-page/')} label="Add New Regional">+</FabButton>
                    </FabButtons>
                </Fab> */}

                <Searchbar
                    searchContainer=".search-list"
                    searchIn=".text-list"
                    disableButton={!this.$theme.aurora}
                ></Searchbar>

                <Toolbar tabbar labels scrollable position={this.state.isBottom ? 'bottom' : 'top'}>
                    <Link tabLink="#tab-patrol-location-list" tabLinkActive text="Patrol Location List" iconIos="f7:building_2_fill" iconAurora="f7:building_2_fill" iconMd="f7:building_2_fill"></Link>
                    {/* <Link tabLink="#tab-location-list" text="Location List" iconIos="f7:hammer" iconAurora="f7:building_2_fill" iconMd="f7:building_2_fill"></Link>
                    <Link tabLink="#tab-sublocation-list" text="Sub Location List" iconIos="f7:drop" iconAurora="f7:building_2_fill" iconMd="f7:building_2_fill"></Link> */}

                </Toolbar>

                <Tabs swipeable>
                    <Tab id="tab-patrol-location-list" className="page-content" tabActive>
                        
                            <List className="searchbar-not-found">
                                <ListItem>
                                    <Card className="card-list">
                                        <span className="text-menu">Gedung tidak tersedia</span><br></br>
                                    </Card>
                                </ListItem>
                            </List>
                            <List id="patrol-location-list" className="search-list searchbar-found">
                                <List id="skeleton" className="skeleton-text skeleton-effect-fade">
                                    <ListItem>
                                        <Card className="card-list-skeleton">
                                            <span className="text-menu">Category</span><br></br>
                                            <span className="text-menu">jenis_barang kategori </span><br></br>
                                            <span className="text-menu"> stok satuan </span>
                                        </Card>
                                    </ListItem>
                                    <ListItem>
                                        <Card className="card-list-skeleton">
                                            <span className="text-menu">Category</span><br></br>
                                            <span className="text-menu">jenis_barang kategori </span><br></br>
                                            <span className="text-menu"> stok satuan </span>
                                        </Card>
                                    </ListItem>
                                    <ListItem>
                                        <Card className="card-list-skeleton">
                                            <span className="text-menu">Category</span><br></br>
                                            <span className="text-menu">jenis_barang kategori </span><br></br>
                                            <span className="text-menu"> stok satuan </span>
                                        </Card>
                                    </ListItem>
                                    <ListItem>
                                        <Card className="card-list-skeleton">
                                            <span className="text-menu">Category</span><br></br>
                                            <span className="text-menu">jenis_barang kategori </span><br></br>
                                            <span className="text-menu"> stok satuan </span>
                                        </Card>
                                    </ListItem>
                                    <ListItem>
                                        <Card className="card-list-skeleton">
                                            <span className="text-menu">Category</span><br></br>
                                            <span className="text-menu">jenis_barang kategori </span><br></br>
                                            <span className="text-menu"> stok satuan </span>
                                        </Card>
                                    </ListItem>
                                    <ListItem>
                                        <Card className="card-list-skeleton">
                                            <span className="text-menu">Category</span><br></br>
                                            <span className="text-menu">jenis_barang kategori </span><br></br>
                                            <span className="text-menu"> stok satuan </span>
                                        </Card>
                                    </ListItem>
                                </List>
                            </List>
                        
                    </Tab>
                    {/* <Tab id="tab-location-list" className="page-content">
                        <Block>
                            <List className="searchbar-not-found">
                                <ListItem>
                                    <Card className="card-list">
                                        <span className="text-menu">Barang tidak tersedia</span><br></br>
                                    </Card>
                                </ListItem>
                            </List>
                            <List id="location-list" className="search-list searchbar-found">

                            </List>
                        </Block>
                    </Tab>
                    <Tab id="tab-sublocation-list" className="page-content">
                        <Block>
                            <List className="searchbar-not-found">
                                <ListItem>
                                    <Card className="card-list">
                                        <span className="text-menu">Barang tidak tersedia</span><br></br>
                                    </Card>
                                </ListItem>
                            </List>
                            <List id="sublocation-list" className="search-list searchbar-found">

                            </List>
                        </Block>
                    </Tab> */}

                </Tabs>


            </Page>
        )
    }
    onPageInit() {
        var url_api = 'https://api.jumantya.my.id/index.php/api/';

        window.setIdLocation = function (id_lokasi, nama_gedung) {
            localStorage.setItem("id_location_patrol", id_lokasi)
            localStorage.setItem("location_patrol", nama_gedung)
            f7.views.main.router.navigate("/patrol-sublocation-list-page/")
        }

        var id_profile = localStorage.getItem("id_profile_patrol")
        this.$request({
            url: url_api + "Lokasi",
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
                var arr = [];
                for (var i = 0; i < data.length; i++) {
                    var id_lokasi = data[i].id_lokasi;
                    var nama_gedung = data[i].nama_gedung;
                    arr.push(
                        '<li class="">' +
                        '<div class="item-content">' +
                        '<div class="item-inner">' +
                        '<div class="card-list card link" onclick="setIdLocation($(\'#id-location-patrol-' + i + '\').text(),$(\'#location-patrol-' + i + '\').text())">' +
                        '<span class="text-list" style="display:none" id="id-location-patrol-' + i + '">' + id_lokasi + '</span>' +
                        '<span class="text-list" style="color:#8dad9c" id="location-patrol-' + i + '">' + nama_gedung + '</span></br>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</li>'
                    );

                }
                $('#patrol-location-list').html(arr.join(''));
            },
            error: function () { }
        });
        // this.$request({
        //     url: url_api + "Sublokasi",
        //     method: 'GET',
        //     data: {},
        //     dataType: 'json',
        //     statusCode: {
        //         404: function (xhr) {
        //             alert('page not found');
        //         }
        //     },
        //     beforeSend: function (xhr) { },
        //     success: function (data) {
        //         // localStorage.setItem("chem_amount", data.length);
        //         var arr = [];
        //         for (var i = 0; i < data.length; i++) {
        //             var id_profile = data[i].id_profile;
        //             var wilayah = data[i].wilayah;
        //             var id_lokasi = data[i].id_lokasi;
        //             var nama_gedung = data[i].nama_gedung;
        //             var id_sublokasi = data[i].id_sublokasi;
        //             var lantai = data[i].lantai;
        //             arr.push(
        //                 '<li class="">' +
        //                 '<div class="item-content">' +
        //                 '<div class="item-inner">' +
        //                 '<div class="card-list card">' +
        //                 // '<span class="text-list">' + id_profile + '</span></br>' +
        //                 '<span class="text-list" >Regional : </span></br>' +
        //                 '<span class="text-list">' + wilayah + '</span></br>' +
        //                 '<span class="text-list" >Location : </span></br>' +
        //                 '<span class="text-list">' + nama_gedung + '</span></br>' +
        //                 '<span class="text-list" >Sub Location : </span></br>' +
        //                 '<span class="text-list" style="color:#8dad9c" >' + lantai + '</span></br>' +
        //                 '</div>' +
        //                 '</div>' +
        //                 '</div>' +
        //                 '</li>'
        //             );

        //         }
        //         $('#sublocation-list').html(arr.join(''));
        //         $('#skeleton').hide();
        //     },
        //     error: function () { }
        // });
    }
}