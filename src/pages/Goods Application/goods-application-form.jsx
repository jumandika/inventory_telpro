import React from 'react';
import { f7, f7ready } from 'framework7-react';
import Framework7, { Device, Request, Support } from 'framework7';


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
            <Page pageContent={false} className="package-bg" style={{ backgroundColor: 'whitesmoke' }} name="goods-application-form" onPageInit={this.onPageInit.bind(this)} onPageBeforeOut={this.onPageBeforeOut.bind(this)} onPageBeforeRemove={this.onPageBeforeRemove.bind(this)}>
                <div className="navbar" style={{ zIndex: "1" }}>
                    <div id="navbar-bg" className="navbar-bg navbar-custom inventory-logo-left" style={{ height: '185px', borderRadius: " 0 0 0px 0px" }}>
                        <div className="center">
                            <div className="title-page">FORM PENGAJUAN</div>
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
                    <div className="goods-app-icon" style={{ textAlignLast: "center", height: "60px" }}>
                        {/* <i className="icon f7-icons icon-menu icon-title" style={{ textShadow: "rgba(0, 0, 0, 0.17) 0px 2px 0px", color: "rgb(175, 212, 186)" }}>cart_fill_badge_plus</i> */}
                    </div>
                    <Card className="card-list-form ">
                        <List noHairlinesMd>
                            <ListInput
                                // className="input-border"
                                type="text"
                                inputId="no-po"
                                placeholder="No. PO "
                                className="margin-top"
                                readonly
                            // clearButton
                            >
                                <Icon className="icon-smooth" f7="ID" slot="media" />
                            </ListInput>
                            <ListInput
                                className="margin-bottom"
                                type="text"
                                inputId="tgl-po"
                                placeholder="Tanggal"
                                onChange={(e) => this.setState({ tgl_pengambilan: e.target.value })}
                                readonly
                            // clearButton
                            >
                                <Icon className="icon-smooth" f7="today" slot="media" />
                            </ListInput>
                        </List>
                    </Card>
                    <Card className="card-list-form ">
                        <List noHairlinesMd>
                            <li>
                                <Card className="card-in-form label-list " style={{ textAlign: "left" }}>
                                    <CardContent padding={false}>

                                        <i className=" icon f7-icons margin-right" style={{ fontSize: "23px", marginLeft: "15px" }}>line_horizontal_3_decrease_circle</i>
                                        List Pengajuan Barang :
                                        <div className="field-separator"></div>
                                        <List id="supplier-list-apply" className="search-list searchbar-found">
                                            <List id="skeleton" className="skeleton-text skeleton-effect-fade">
                                                <ListItem>
                                                    <Card className="card-list-skeleton">
                                                        <span className="text-menu">jenis_barang kategori </span> |
                                                            <span className="text-menu">Category</span><br />
                                                    </Card>
                                                </ListItem>
                                                <ListItem>
                                                    <Card className="card-list-skeleton">
                                                        <span className="text-menu">jenis_barang kategori </span> |
                                                            <span className="text-menu">Category</span><br />
                                                    </Card>
                                                </ListItem>
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
                    <Card className="card-list-form ">
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
                    </Card>
                    <Card className="card-list-form ">
                        <List noHairlinesMd>
                            <Button md round outlineMd className="margin margin-top" onClick={this.saveApplication.bind(this)} ><i className="icon f7-icons margin-right">arrow_up_doc_fill</i>Submit</Button>
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
            data: {},
            dataType: 'json',
            statusCode: {
                404: function (xhr) {
                    alert('page not found');
                }
            },
            beforeSend: function (xhr) { app.progressbar.show(app.theme === 'md' ? 'white' : 'blue'); },
            success: function (data) {
                var row_count = data.length;
                var month = date_now.getMonth() + 1;
                if (month < 10) {
                    month = '0' + month;
                }
                var year = date_now.getFullYear();
                year = year.toString().substring(2, 4);
                var no_po;
                if (row_count < 9) {
                    no_po = ("PO" + year + month + "0" + month);
                } else if (row_count >= 9) {
                    no_po = ("PO" + year + month + "0" + month);
                }
                $('#no-po').val(no_po);
                $('#tgl-po').val(today);

            },
            error: function () { }
        });

        window.setIdSupplier = function (id_supplier) {
            localStorage.setItem("id_supplier_apply", id_supplier)
            localStorage.setItem("no_po", "")
            localStorage.setItem("nama_supplier", "")


            f7.views.main.router.navigate("/goods-application-detail-page/")
        }

        window.formatMoney = function (number) {
            return number.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
        }

        window.subtotal_supplier = function (id_supplier) {
            var total = 0
            var subtotal = 0
            Framework7.request({
                url: url_api + "Detail_Pengajuan",
                method: 'GET',
                data: { id_supplier: id_supplier },
                dataType: 'json',
                statusCode: {
                    404: function (xhr) {
                        alert('page not found');
                    }
                },
                beforeSend: function (xhr) { },
                success: function (data) {
                    for (var j = 0; j < data.length; j++) {
                        subtotal = parseInt(data[j].Subtotal)
                        total += subtotal
                    }
                    $("#item-amount" + id_supplier + "").text(data.length + " items");
                    $("#subtotal" + id_supplier + "").text(formatMoney(total));

                    localStorage.setItem("subtotal_" + id_supplier + "", total)

                    var total_estimation = localStorage.getItem("total_estimation");
                    if (total_estimation == undefined || total_estimation == null || total_estimation == "" || total_estimation === "NaN") {
                        localStorage.setItem("total_estimation", total)
                    } else {
                        localStorage.setItem("total_estimation", parseInt(total_estimation) + total)
                    }
                    console.log(total_estimation)
                    $("#estimation-total").val(formatMoney(parseInt(localStorage.getItem("total_estimation"))))
                    app.progressbar.hide()

                },
                error: function () { }
            });


        }

        this.$request({
            url: url_api + "Supplier",
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
                    var id_supplier = data[i].id_supplier;
                    var nama_supplier = data[i].nama_supplier;
                    var alamat = data[i].alamat;
                    var email = data[i].email;
                    var no_telp = data[i].no_telp;
                    subtotal_supplier(id_supplier)
                    arr.push(
                        '<li class="">' +
                        '<div class="item-content">' +
                        '<div class="item-inner">' +
                        '<div class="card-list card link" onclick="setIdSupplier($(\'#id-supplier' + i + '\').text())">' +
                        '<span class="text-list" id="id-supplier' + i + '" style="display:none">' + id_supplier + '</span>' +
                        '<span class="text-list" id="nama-supplier' + i + '" style="color:#8dad9c">' + nama_supplier + '</span> | ' +
                        '<span class="text-list" id="item-amount' + id_supplier + '"></span> | ' +
                        '<span class="text-list" id="subtotal' + id_supplier + '"></span></br>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</li>'
                    );

                    $('#supplier-list-apply').html(arr.join(''));
                }

            },
            error: function () { }
        });



    }
    saveApplication() {
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

        var no_po = $("#no-po").val()
        var tgl_po = today_state
        var bulan = month[date_now.getMonth()];
        var subtotal_alat = localStorage.getItem("subtotal_SUP-001")
        var subtotal_chem = localStorage.getItem("subtotal_SUP-002")
        var subtotal_tissue = localStorage.getItem("subtotal_SUP-003")
        var total = localStorage.getItem("total_estimation")
        var id_admin = localStorage.getItem("id_admin")

        window.formatMoney = function (number) {
            return number.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
        }

        this.$request({
            url: url_api + "Pengajuan",
            method: 'GET',
            data: { no_po: no_po },     // cek nomor po
            dataType: 'json',
            statusCode: {
                404: function (xhr) {
                    alert('page not found');
                }
            },
            beforeSend: function (xhr) { app.progressbar.show(app.theme === 'md' ? 'white' : 'blue'); },
            success: function (data) {
                if (data.length == 0) {                 // jika po belum ada maka SAVE, jika po sudah ada maka UPDATE
                    Framework7.request({                // Save Pengajuan
                        url: url_api + "Pengajuan",
                        method: 'POST',
                        data: { no_po: no_po, tanggal: tgl_po, bulan: bulan, subtotal_alat: subtotal_alat, subtotal_chem: subtotal_chem, subtotal_tissue: subtotal_tissue, total: total, id_admin: id_admin },
                        dataType: 'json',
                        statusCode: {
                            404: function (xhr) {
                                alert('page not found');
                            }
                        },
                        beforeSend: function (xhr) { },
                        success: function (data) {
                            console.log("Simpan pengajuan : " + data)

                            Framework7.request({
                                url: url_api + "Supplier",    // cek jumlah supplier
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
                                    for (var i = 0; i < data.length; i++) {
                                        var id_supplier = data[i].id_supplier;
                                        Framework7.request({
                                            url: url_api + "Detail_Pengajuan",      // get detail row per supplier
                                            method: 'GET',
                                            data: { id_supplier: id_supplier },
                                            dataType: 'json',
                                            statusCode: {
                                                404: function (xhr) {
                                                    alert('page not found');
                                                }
                                            },
                                            beforeSend: function (xhr) { },
                                            success: function (data) {
                                                for (var j = 0; j < data.length; j++) {
                                                    var nama_mitra = data[j].Supplier
                                                    var id_barang = data[j].id_barang
                                                    var nama_barang = data[j].nama_barang
                                                    var jenis_barang = data[j].jenis_barang
                                                    var keb_perbulan = data[j].keb_per_bulan
                                                    var masuk = data[j].Masuk
                                                    var keluar = data[j].Keluar
                                                    var stok_akhir = data[j].stok
                                                    var masa_pakai = data[j].masa_pakai
                                                    var order_qty = data[j].Qty
                                                    var satuan = data[j].satuan
                                                    var harga = data[j].harga
                                                    var subtotal = data[j].Subtotal
                                                    Framework7.request({
                                                        url: url_api + "Detail_Pengajuan",      // save detail pengajuan
                                                        method: 'POST',
                                                        data: {
                                                            no_po: no_po, nama_mitra: nama_mitra,
                                                            id_barang: id_barang, nama_barang: nama_barang,
                                                            jenis_barang: jenis_barang, keb_perbulan: keb_perbulan,
                                                            masuk: masuk, keluar: keluar, stok_akhir: stok_akhir,
                                                            masa_pakai: masa_pakai, order_qty: order_qty, satuan: satuan,
                                                            harga: harga, subtotal: subtotal, bulan: bulan
                                                        },
                                                        dataType: 'json',
                                                        statusCode: {
                                                            404: function (xhr) {
                                                                alert('page not found');
                                                            }
                                                        },
                                                        beforeSend: function (xhr) { },
                                                        success: function (data) {
                                                            console.log("simpan detail pengajuan: " + data)
                                                            swal("" + no_po + " Berhasil Disimpan!", "", "success");
                                                            app.progressbar.hide()
                                                            f7.view.main.router.back('/goods-application-page/', { force: true });
                                                        },
                                                        error: function () { }
                                                    });
                                                }


                                            },
                                            error: function () { }
                                        });

                                    }

                                },
                                error: function () { }
                            });


                        },
                        error: function () { }
                    });
                } else {
                    Framework7.request({
                        url: url_api + "Detail_Pengajuan",      // delete detail pengajuan
                        method: 'get',
                        data: { no_po: no_po, action: 'delete' },
                        dataType: 'json',
                        statusCode: {
                            404: function (xhr) {
                                alert('page not found');
                            }
                        },
                        beforeSend: function (xhr) { },
                        success: function (data) {
                            console.log("detail pengajuan delete")
                        },
                        error: function () { }
                    });
                    Framework7.request({                // update Pengajuan
                        url: url_api + "Pengajuan",
                        method: 'PUT',
                        data: { no_po: no_po, tanggal: tgl_po, bulan: bulan, subtotal_alat: subtotal_alat, subtotal_chem: subtotal_chem, subtotal_tissue: subtotal_tissue, total: total, id_admin: id_admin },
                        dataType: 'json',
                        statusCode: {
                            404: function (xhr) {
                                alert('page not found');
                            }
                        },
                        beforeSend: function (xhr) { },
                        success: function (data) {
                            console.log("Update pengajuan : " + data)

                            Framework7.request({
                                url: url_api + "Supplier",    // cek jumlah supplier
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
                                    for (var i = 0; i < data.length; i++) {
                                        var id_supplier = data[i].id_supplier;
                                        Framework7.request({
                                            url: url_api + "Detail_Pengajuan",      // get detail row per supplier
                                            method: 'GET',
                                            data: { id_supplier: id_supplier },
                                            dataType: 'json',
                                            statusCode: {
                                                404: function (xhr) {
                                                    alert('page not found');
                                                }
                                            },
                                            beforeSend: function (xhr) { },
                                            success: function (data) {
                                                for (var j = 0; j < data.length; j++) {
                                                    var nama_mitra = data[j].Supplier
                                                    var id_barang = data[j].id_barang
                                                    var nama_barang = data[j].nama_barang
                                                    var jenis_barang = data[j].jenis_barang
                                                    var keb_perbulan = data[j].keb_per_bulan
                                                    var masuk = data[j].Masuk
                                                    var keluar = data[j].Keluar
                                                    var stok_akhir = data[j].stok
                                                    var masa_pakai = data[j].masa_pakai
                                                    var order_qty = data[j].Qty
                                                    var satuan = data[j].satuan
                                                    var harga = data[j].harga
                                                    var subtotal = data[j].Subtotal
                                                    Framework7.request({
                                                        url: url_api + "Detail_Pengajuan",      // save detail pengajuan
                                                        method: 'POST',
                                                        data: {
                                                            no_po: no_po, nama_mitra: nama_mitra,
                                                            id_barang: id_barang, nama_barang: nama_barang,
                                                            jenis_barang: jenis_barang, keb_perbulan: keb_perbulan,
                                                            masuk: masuk, keluar: keluar, stok_akhir: stok_akhir,
                                                            masa_pakai: masa_pakai, order_qty: order_qty, satuan: satuan,
                                                            harga: harga, subtotal: subtotal, bulan: bulan
                                                        },
                                                        dataType: 'json',
                                                        statusCode: {
                                                            404: function (xhr) {
                                                                alert('page not found');
                                                            }
                                                        },
                                                        beforeSend: function (xhr) { },
                                                        success: function (data) {
                                                            console.log("simpan detail pengajuan: " + data)
                                                            swal("" + no_po + " Berhasil Di-Update!", "", "success");
                                                            app.progressbar.hide()
                                                            f7.view.main.router.back('/goods-application-page/', { force: true });
                                                        },
                                                        error: function () { }
                                                    });
                                                }


                                            },
                                            error: function () { }
                                        });

                                    }

                                },
                                error: function () { }
                            });


                        },
                        error: function () { }
                    });
                }


            },
            error: function () { }
        });


    }
    onPageBeforeOut() {
        const self = this;
        // Close opened sheets on page out
        self.$f7.sheet.close();
        $(".title-page").css('margin-top', '20px')

    }
    onPageBeforeRemove() {
        const self = this;
        // Destroy sheet modal when page removed
        if (self.sheet) self.sheet.destroy();
        $(".title-page").css('margin-top', '20px')

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