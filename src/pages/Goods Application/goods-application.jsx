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
            <Page pageContent={false} className="package-bg" style={{ backgroundColor: 'whitesmoke' }} name="goods-application" onPageInit={this.onPageInit.bind(this)}>
                <div className="navbar">
                    <div className="navbar-bg navbar-custom inventory-logo-left" style={{ height: '65px' }}>
                        <div className="center">
                            <div className="title-page">Daftar Pengajuan</div>
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

                <FabBackdrop slot="fixed" />

                <Fab className="fab-send-color" position="right-bottom" slot="fixed" text="Apply New" onClick={() => this.$f7router.navigate('/goods-application-form-page/')}>
                    <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>
                </Fab>
                <Searchbar
                    searchContainer=".search-list"
                    searchIn=".text-list"
                    disableButton={!this.$theme.aurora}
                ></Searchbar>

                <Toolbar tabbar labels scrollable position={this.state.isBottom ? 'bottom' : 'top'}>
                    <Link tabLink="#tab-po-list" tabLinkActive text="Apply List" iconIos="f7:arrowshape_turn_up_right_circle_fill" iconAurora="f7:arrowshape_turn_up_right_circle_fill" iconMd="f7:arrowshape_turn_up_right_circle_fill"></Link>
                    {/* <Link tabLink="#tab-location-list" text="Location List" iconIos="f7:hammer" iconAurora="f7:building_2_fill" iconMd="f7:building_2_fill"></Link>
                    <Link tabLink="#tab-sublocation-list" text="Sub Location List" iconIos="f7:drop" iconAurora="f7:building_2_fill" iconMd="f7:building_2_fill"></Link> */}

                </Toolbar>

                <Tabs swipeable>
                    <Tab id="tab-po-list" className="page-content" tabActive>
                        <List className="searchbar-not-found">
                            <ListItem>
                                <Card className="card-list">
                                    <span className="text-menu">PO tidak ditemukan</span><br></br>
                                </Card>
                            </ListItem>
                        </List>
                        <List id="po-list" className="search-list searchbar-found">
                            <List id="skeleton" className="skeleton-text skeleton-effect-fade">
                                <ListItem>
                                    <Card className="card-list-skeleton">
                                        <span className="text-menu">jenis_barang kategori </span><br></br>
                                        <span className="text-menu"> stok satuan </span>
                                    </Card>
                                </ListItem>
                                <ListItem>
                                    <Card className="card-list-skeleton">
                                        <span className="text-menu">jenis_barang kategori </span><br></br>
                                        <span className="text-menu"> stok satuan </span>
                                    </Card>
                                </ListItem>
                                <ListItem>
                                    <Card className="card-list-skeleton">
                                        <span className="text-menu">jenis_barang kategori </span><br></br>
                                        <span className="text-menu"> stok satuan </span>
                                    </Card>
                                </ListItem>
                                <ListItem>
                                    <Card className="card-list-skeleton">
                                        <span className="text-menu">jenis_barang kategori </span><br></br>
                                        <span className="text-menu"> stok satuan </span>
                                    </Card>
                                </ListItem>
                                <ListItem>
                                    <Card className="card-list-skeleton">
                                        <span className="text-menu">jenis_barang kategori </span><br></br>
                                        <span className="text-menu"> stok satuan </span>
                                    </Card>
                                </ListItem>
                                <ListItem>
                                    <Card className="card-list-skeleton">
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

        window.setNoPO = function (no_po) {
            localStorage.setItem("no_po", no_po)

            f7.views.main.router.navigate("/goods-application-view-page/")
        }

        window.formatMoney = function (number) {
            return number.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
        }

        this.$request({
            url: url_api + "Pengajuan",
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
                    var no_po = data[i].no_po;
                    var tanggal = data[i].tanggal;
                    var bulan = data[i].bulan;
                    var subtotal_alat = data[i].subtotal_alat;
                    var subtotal_chem = data[i].subtotal_chem;
                    var subtotal_tissue = data[i].subtotal_tissue;
                    var total = formatMoney(parseInt(data[i].total));
                    arr.push(
                        '<li class="">' +
                        '<div class="item-content">' +
                        '<div class="item-inner">' +
                        '<div class="card-list card link" onclick="setNoPO($(\'#no-po' + i + '\').text())">' +
                        '<span class="text-list" id="no-po' + i + '" >' + no_po + '</span> | ' +
                        '<span class="text-list" id="tanggal-po' + i + '" style="color:#8dad9c">' + bulan + '</span></br>' +
                        '<span class="text-list">' + total + '</span></br>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</li>'
                    );

                }
                $('#po-list').html(arr.join(''));
            },
            error: function () { }
        });


    }

}