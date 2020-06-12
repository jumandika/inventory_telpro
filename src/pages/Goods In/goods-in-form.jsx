import React from 'react';
import { f7, f7ready } from 'framework7-react';
import Framework7, { Device, Request, Support } from 'framework7';

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
    Tabs,
    Tab,
    ListInput,
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
    Card,
    CardContent

} from 'framework7-react';
import swal from 'sweetalert';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tgl_po: '',
            no_po: '',
            estimation_total: '',
            isBottom: true,
        };
        this.myRef = React.createRef()
        this.navbarHandler = this.navbarHandler.bind(this);

    }
    render() {
        return (
            <Page pageContent={false} className="package-bg" style={{ backgroundColor: 'whitesmoke' }} name="goods-in-form" onPageInit={this.onPageInit.bind(this)} onPageBeforeOut={this.onPageBeforeOut.bind(this)} onPageBeforeRemove={this.onPageBeforeRemove.bind(this)}>
                <div className="navbar" style={{ zIndex: "1" }}>
                    <div id="navbar-bg" className="navbar-bg navbar-custom inventory-logo-left" style={{ height: '185px', borderRadius: " 0 0 0px 0px" }}>
                        <div className="center">
                            <div className="title-page">FORM STOCK IN</div>
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
                    <div className="goods-in-icon" style={{ textAlignLast: "center", height: "60px" }}>
                        {/* <i className="icon f7-icons icon-menu icon-title" style={{ textShadow: "rgba(0, 0, 0, 0.17) 0px 2px 0px", color: "rgb(175, 212, 186)" }}>cart_fill_badge_plus</i> */}
                    </div>
                    <Card className="card-list-form ">
                        <List noHairlinesMd>
                            <ListInput
                                type="text"
                                inputId="id-masuk"
                                placeholder="ID Masuk "
                                className="margin-top"
                                readonly
                            >
                                <Icon className="icon-smooth" f7="ID" slot="media" />
                            </ListInput>

                            <ListInput
                                className="margin-bottom"
                                type="text"
                                inputId="tgl-masuk"
                                placeholder="Tanggal"
                                onChange={(e) => this.setState({ tgl_pengambilan: e.target.value })}
                                readonly
                            >
                                <Icon className="icon-smooth" f7="today" slot="media" />
                            </ListInput>
                        </List>
                    </Card>
                    <Card className="card-list-form ">
                        <List noHairlinesMd>

                            <ListInput
                                className="margin-bottom margin-top"
                                type="text"
                                inputId="no-po"
                                placeholder="No. PO "
                                readonly
                            >
                                <Icon className="icon-smooth" f7="doc_checkmark_fill" slot="media" />
                            </ListInput>

                        </List>
                    </Card>
                    <Card className="card-list-form ">
                        <List noHairlinesMd>
                            <li>
                                <Card className="card-in-form label-list " style={{ textAlign: "left" }}>
                                    <CardContent padding={false}>
                                        <ul>
                                            <li className="select-input margin-input ">
                                                <div className="item-content item-input">
                                                    <div className="item-inner">
                                                        <div className="item-input-wrap input-dropdown">
                                                            <select placeholder="ID Supplier" id="id-supplier" onChange={this.showBasedSupplier.bind(this)} className="select-supplier" style={{ textAlignLast: "center" }}>
                                                                <option value="">Pilih Supplier</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="field-separator"></div>
                                        <i className=" icon f7-icons margin-right" style={{ fontSize: "23px", marginLeft: "15px" }}>line_horizontal_3_decrease_circle</i>
                                        List Pengajuan Barang :
                                        <div className="field-separator"></div>
                                        <List id="goods-in-details" className="search-list searchbar-found">
                                            <List id="skeleton" style={{ display: 'none' }} className="skeleton-text skeleton-effect-fade">
                                                <ListItem>
                                                    <Card className="card-list-skeleton">
                                                        <span className="text-menu">jenis_barang kategori </span> |
                                                            <span className="text-menu">Category</span><br />
                                                    </Card>
                                                </ListItem>

                                            </List>
                                        </List>
                                        <div style={{ borderBottom: 'solid 2px #fcc7c76b', marginTop: '10px', marginBottom: '10px' }}></div>
                                    </CardContent>
                                </Card>
                            </li>
                        </List>
                    </Card>
                    {/* <Card className="card-list-form ">
                        <List noHairlinesMd>
                            <li>
                                <Card className="card-in-form label-list " style={{ textAlign: "left" }}>
                                    <CardContent padding={false}>
                                        <i className="margin-right icon f7-icons" style={{ fontSize: "23px", marginLeft: "15px" }}>cart_fill_badge</i>Estimation Total :
                                            <div style={{ borderBottom: 'solid 2px #fcc7c76b', marginTop: '10px' }}></div>
                                        <List noHairlinesMd>
                                            <ListInput
                                                style={{ textAlignLast: "center" }}
                                                type="text"
                                                inputId="estimation-total"
                                                placeholder="Estimation Total"
                                                onChange={(e) => this.setState({ estimation_total: e.target.value })}
                                                readonly
                                            >
                                            </ListInput>
                                        </List>
                                        <div style={{ borderBottom: 'solid 2px #fcc7c76b', marginBottom: '10px' }}></div>
                                    </CardContent>
                                </Card>
                            </li>
                        </List>
                    </Card> */}
                    <Card className="card-list-form ">
                        <List noHairlinesMd>
                            <Button md round outlineMd className="margin margin-top" onClick={this.saveGoodsIn.bind(this)} ><i className="icon f7-icons margin-right">arrow_up_doc_fill</i>Submit</Button>
                        </List>
                    </Card>

                </div>



            </Page>
        )
    }
    onPageInit() {
        const self = this;
        const app = self.$f7;
        if (self.infiniteLoading) return;
        self.infiniteLoading = false;

        var url_api = 'https://api.jumantya.my.id/index.php/api/';

        var date_now = new Date();

        var dd = String(date_now.getDate()).padStart(2, '0');
        var mm = String(date_now.getMonth() + 1).padStart(2, '0');
        var yyyy = date_now.getFullYear();

        var hours = String(date_now.getHours()).padStart(2, '0');
        var minutes = String(date_now.getMinutes()).padStart(2, '0');
        var seconds = String(date_now.getSeconds()).padStart(2, '0');

        var today = dd + '-' + mm + '-' + yyyy;
        var today_state = yyyy + '-' + mm + '-' + dd + ' ' + hours + ':' + minutes + ':' + seconds;
        this.setState({ tgl_po: today_state })

        localStorage.setItem("total_estimation", "")

        Framework7.request({
            url: url_api + 'Pengajuan',
            method: 'GET',
            data: { last_row: 1 },
            dataType: 'json',
            statusCode: {
                404: function (xhr) {
                    alert('page not found');
                }
            },
            beforeSend: function (xhr) { app.progressbar.show(app.theme === 'md' ? 'white' : 'blue'); },
            success: function (data) {

                $('#no-po').val(data[0].no_po);
                $('#tgl-masuk').val(today);

            },
            error: function () { }
        });

        Framework7.request({
            url: url_api + 'Masuk',
            method: 'GET',
            data: { get_id: 1 },
            dataType: 'json',
            statusCode: {
                404: function (xhr) {
                    alert('page not found');
                }
            },
            beforeSend: function (xhr) { },
            success: function (data) {
                var arr = [];
                var row_count = data[0].row_count;
                var id_seq = parseInt(row_count) + 1;
                var id_masuk;
                if (row_count < 9) {
                    id_masuk = ("IN" + "000" + id_seq);
                } else if (row_count >= 9) {
                    id_masuk = ("IN" + "00" + id_seq);
                } else if (row_count >= 99) {
                    id_masuk = ("IN" + "0" + id_seq);
                } else if (row_count >= 999) {
                    id_masuk = ("IN" + id_seq);
                }

                $('#id-masuk').val(id_masuk);

            },
            error: function () { }
        });

        window.setIdSupplier = function (id_supplier) {
            localStorage.setItem("id_supplier_apply", id_supplier)
            localStorage.setItem("no_po", "")
            localStorage.setItem("nama_supplier", "")
            f7.views.main.router.navigate("/goods-application-detail-page/")
        }

        Framework7.request({
            url: url_api + 'Supplier',
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
                var arr = [];
                for (var i = 0; i < data.length; i++) {
                    var id_supplier = data[i].id_supplier;
                    var nama_supplier = data[i].nama_supplier;
                    var html = '';
                    arr.push(
                        html = '<option value="' + id_supplier + '">' + nama_supplier + '</option>'
                    );
                    $('.select-supplier').append(html);
                    app.progressbar.hide()
                }

            },
            error: function () { }
        });

        var device_info = osName + ' ' + osVersion + ' ' + mobileVendor + ' ' + mobileModel + ' ' + engineName + ' ' + engineVersion;
        this.$request({
            url: 'https://api.jumantya.my.id/index.php/api/Delete_Temporary',
            method: 'GET',
            data: { device_info: device_info },
            dataType: 'json',
            statusCode: {
                404: function (xhr) {
                    alert('page not found');
                }
            },
            beforeSend: function (xhr) { },
            success: function (data) {
                console.log('temporary has been reset')


            },
            error: function () { }
        });
    }
    showBasedSupplier() {
        var url_api = 'https://api.jumantya.my.id/index.php/api/';
        var no_po = $("#no-po").val();
        var nama_mitra = $("#id-supplier option:selected").html()
        var device_info = osName + ' ' + osVersion + ' ' + mobileVendor + ' ' + mobileModel + ' ' + engineName + ' ' + engineVersion;
        this.$request({
            url: url_api + 'Delete_Temporary',
            method: 'GET',
            data: { device_info: device_info },
            dataType: 'json',
            statusCode: {
                404: function (xhr) {
                    alert('page not found');
                }
            },
            beforeSend: function (xhr) { },
            success: function (data) {
                console.log('temporary has been reset')
                Framework7.request({
                    url: url_api + 'Detail_Pengajuan',
                    method: 'GET',
                    data: { no_po: no_po, nama_mitra: nama_mitra, device_info: device_info, action: 'insert temporary' },
                    dataType: 'json',
                    statusCode: {
                        404: function (xhr) {
                            alert('page not found');
                        }
                    },
                    beforeSend: function (xhr) { $('#skeleton').show(); },
                    success: function (data) {
                        var arr = [];
                        arr.push(
                            '<li class="">' +
                            '<div class="item-content">' +
                            '<div class="item-inner">' +
                            '<div class="card-list card link" onclick="details()" >' +
                            '<span class="text-list" id="nama-supplier" style="color:#8dad9c">' + nama_mitra + '</span> | Tap for details -> ' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</li>'
                        );

                        $('#goods-in-details').html(arr.join(''));
                        $('#skeleton').hide();
                    },
                    error: function () { }
                });

            },
            error: function () { }
        });

        window.details = function () {
            f7.views.main.router.navigate("/goods-in-detail-page/")
        }

    }

    saveGoodsIn() {
        const self = this;
        const app = self.$f7;
        if (self.infiniteLoading) return;
        self.infiniteLoading = false;

        var url_api = 'https://api.jumantya.my.id/index.php/api/';
        var date_now = new Date();
        var dd = String(date_now.getDate()).padStart(2, '0');
        var mm = String(date_now.getMonth() + 1).padStart(2, '0');
        var yyyy = date_now.getFullYear();

        var hours = String(date_now.getHours()).padStart(2, '0');
        var minutes = String(date_now.getMinutes()).padStart(2, '0');
        var seconds = String(date_now.getSeconds()).padStart(2, '0');

        var today_state = yyyy + '-' + mm + '-' + dd + ' ' + hours + ':' + minutes + ':' + seconds;

        var month = new Array();
        month[0] = "Januari";
        month[1] = "Februari";
        month[2] = "Maret";
        month[3] = "April";
        month[4] = "Mei";
        month[5] = "Juni";
        month[6] = "Juli";
        month[7] = "Agustus";
        month[8] = "September";
        month[9] = "Oktober";
        month[10] = "November";
        month[11] = "Desember";

        var id_masuk = $("#id-masuk").val()
        var no_po = $("#no-po").val()
        var tgl_masuk = today_state
        var id_admin = localStorage.getItem("id_admin")
        var device_info = osName + ' ' + osVersion + ' ' + mobileVendor + ' ' + mobileModel + ' ' + engineName + ' ' + engineVersion;


        f7.dialog.confirm('Pastikan Data sudah disesuaikan dengan Surat Jalan!', function () {

            Framework7.request({
                url: url_api + "Masuk",
                method: 'POST',
                data: { id_masuk: id_masuk, tgl_masuk: tgl_masuk, id_admin: id_admin },
                dataType: 'json',
                statusCode: {
                    404: function (xhr) {
                        alert('page not found');
                    }
                },
                beforeSend: function (xhr) { app.progressbar.show(app.theme === 'md' ? 'white' : 'blue'); },
                success: function (data) {
                    Framework7.request({
                        url: url_api + "Detail_Masuk",
                        method: 'POST',
                        data: { id_masuk: id_masuk, device_info: device_info },
                        dataType: 'json',
                        statusCode: {
                            404: function (xhr) {
                                alert('page not found');
                            }
                        },
                        beforeSend: function (xhr) { },
                        success: function (data) {
                            swal("Stok Barang Terupdate berdasarkan No PO: " + no_po, "", "success")
                            app.progressbar.hide();
                            f7.views.main.router.back();

                        },
                        error: function () {

                        }
                    });


                },
                error: function () { }
            });

        });


    }
    onPageBeforeOut() {
        const self = this;
        // Close opened sheets on page out
        self.$f7.sheet.close();
        $(".title-page").css('margin-top', '20px')
        $(".navbar").css('z-index', '200')
        $(".left").fadeIn(500)

    }
    onPageBeforeRemove() {
        const self = this;
        // Destroy sheet modal when page removed
        if (self.sheet) self.sheet.destroy();
        $(".title-page").css('margin-top', '20px')


    }
    navbarHandler() {
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