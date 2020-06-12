import Framework7 from "framework7";
import { f7, f7ready } from 'framework7-react';


var cordovaApp = {
  f7: null,
  /*
  This method hides splashscreen after 2 seconds
  */
  handleSplashscreen: function () {
    var f7 = cordovaApp.f7;
    if (!window.navigator.splashscreen || f7.device.electron) return;
    setTimeout(() => {
      window.navigator.splashscreen.hide();
    }, 2000);
  },
  handleNotification: function () {
    // var f7 = cordovaApp.f7;
    // const $ = f7.$;
    // if (f7.device.electron) return;

    document.addEventListener("deviceready", function () {

      cordova.plugins.notification.local.getDefaults();
      cordova.plugins.notification.local.schedule({
        title: 'My first notification',
        text: 'Thats pretty easy...',
        // foreground: true
      });

      //running background app

      // cordova.plugins.backgroundMode.enable();
      // cordova.plugins.backgroundMode.on('activate', function () {
      //   cordova.plugins.backgroundMode.disableWebViewOptimizations();
      //   cordova.plugins.backgroundMode.disableBatteryOptimizations();
      //   console.log('Hi, I am enabled. Signed : backgroundMode.');

      // });

      window.FirebasePlugin.subscribe("goods_request");

      cordova.plugins.firebase.messaging.onMessage(function (payload) {
        console.log("New foreground FCM message: ", payload);
      });

      cordova.plugins.firebase.messaging.onBackgroundMessage(function (payload) {
        console.log("New background FCM message: ", payload);
      });

      window.FirebasePlugin.getToken(function (token) {
        // save this server-side and use it to push notifications to this device
        console.log(token);
      }, function (error) {
        console.error(error);
      });

      // Get notified when a token is refreshed
      window.FirebasePlugin.onTokenRefresh(function (token) {
        // save this server-side and use it to push notifications to this device
        console.log("Refresh to get new token: " + token);
      }, function (error) {
        alert(error);
      });

      // Get notified when the user opens a notification
      window.FirebasePlugin.onNotificationOpen(function (notification) {

        // var time_notif = new Date();
        // time_notif.setSeconds(time_notif.getSeconds() + 10);
        // // Schedule notification for tomorrow to remember about the meeting
        // cordova.plugins.notification.local.schedule({
        //   // id: 10,
        //   title: "Meeting in 15 minutes!",
        //   text: "Jour fixe Produktionsbesprechung",
        //   // foreground: true
        //   // at: time_notif,
        //   // data: { meetingId: "#123FG8" }
        // });

        // Join BBM Meeting when user has clicked on the notification 
        // cordova.plugins.notification.local.on("click", function (notification) {
        //   if (notification.id == 10) {
        //     joinMeeting(notification.data.meetingId);
        //   }
        // });

        // // Notification has reached its trigger time (Tomorrow at 8:45 AM)
        // cordova.plugins.notification.local.on("trigger", function (notification) {
        //   if (notification.id != 10)
        //     return;

        //   // After 10 minutes update notification's title 
        //   setTimeout(function () {
        //     cordova.plugins.notification.local.update({
        //       id: 10,
        //       title: "Meeting in 5 minutes!"
        //     });
        //   }, 600000);
        // });

        console.log(notification)

        if (notification.meta.info == "Pengambilan Barang") {
          f7.views.main.router.navigate('/history-list-page/');
          console.log('navigated')
        } else {
          console.log('not navigated')
        }

        var title = notification.title;
        var body = notification.body;
        var notificationFull = f7.notification.create({
          icon: '<i class="icon f7-icons">info_circle</i>',
          title: 'Telpro Inventory',
          titleRightText: 'now',
          subtitle: title,
          text: body,
          swipeToClose: true,
          closeButton: true,
          // closeTimeout: 10000,
          on: {
            close: function () {

            },
          },
        });
        if (title != null || title != undefined) {
          notificationFull.open();
        }

        // cordova.plugins.backgroundMode.setDefaults({
        //   title: 'Title',
        //   text: 'Text',
        //   icon: 'icon', // this will look for icon.png in platforms/android/res/drawable|mipmap
        //   color: 'fff', // hex format like 'F14F4D'
        //   resume: true,
        //   hidden: true,
        //   bigText: true
        // })



      }, function (error) {
        console.error(error);
      });
    }, false);
  },
  /*
  This method prevents back button tap to exit from app on android.
  In case there is an opened modal it will close that modal instead.
  In case there is a current view with navigation history, it will go back instead.
  */
  handleAndroidBackButton: function () {
    var f7 = cordovaApp.f7;
    const $ = f7.$;
    if (f7.device.electron) return;

    document.addEventListener('backbutton', function (e) {

      if ($('.package-bg.page.page-current').data("name") == "home") {
        f7.dialog.confirm('Press OK to exit App.', function () {
          navigator.app.exitApp();
        });
        e.preventDefault();
        return false;
      }
      if ($('.package-bg.page.page-current').data("name") == "patrol-sublocation-list") {
        f7.dialog.confirm('Keluar Pengisian Barcode Scanner?', function () {
          f7.views.main.router.back();
        });
        e.preventDefault();
        return false;
      }
      if ($('.city-building-bg.page.page-current').data("name") == "add-pelaksana") {
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
          card_contact.show(100)
        }
        else if (contact_info.is(".active.editable")) {
          contact_info.removeClass("active")
          contact_info.removeClass("editable")
          contact_info.removeClass("done")
          position_info.addClass("active")
          position_info.addClass("editable")
          card_contact.hide();
          card_postion.show(100)
        }
        else if (position_info.is(".active.editable")) {
          position_info.removeClass("active")
          position_info.removeClass("editable")
          position_info.removeClass("done")
          personal_info.addClass("active")
          personal_info.addClass("editable")
          card_postion.hide();
          card_personal.show(100)
        } else {
          f7.dialog.confirm('Keluar Pengisian Form Pelaksana?', function () {
            f7.views.main.router.back();
          });
        }
        e.preventDefault();
        return false;
      }

      if ($('.actions-modal.modal-in').length) {
        f7.actions.close('.actions-modal.modal-in');
        e.preventDefault();
        return false;
      }
      if ($('.dialog.modal-in').length) {
        f7.dialog.close('.dialog.modal-in');
        e.preventDefault();
        return false;
      }
      if ($('.sheet-modal.modal-in').length) {
        f7.sheet.close('.sheet-modal.modal-in');
        e.preventDefault();
        return false;
      }
      if ($('.popover.modal-in').length) {
        f7.popover.close('.popover.modal-in');
        e.preventDefault();
        return false;
      }
      if ($('.popup.modal-in').length) {
        if ($('.popup.modal-in>.view').length) {
          const currentView = f7.views.get('.popup.modal-in>.view');
          if (currentView && currentView.router && currentView.router.history.length > 1) {
            currentView.router.back();
            e.preventDefault();
            return false;
          }
        }
        f7.popup.close('.popup.modal-in');
        e.preventDefault();
        return false;
      }
      if ($('.login-screen.modal-in').length) {
        f7.loginScreen.close('.login-screen.modal-in');
        e.preventDefault();
        return false;
      }

      if ($('.searchbar-enabled').length) {
        f7.searchbar.disable();
        e.preventDefault();
        return false;
      }

      const currentView = f7.views.current;
      if (currentView && currentView.router && currentView.router.history.length > 1) {
        currentView.router.back();
        e.preventDefault();
        return false;
      }

      if ($('.panel.panel-in').length) {
        f7.panel.close('.panel.panel-in');
        e.preventDefault();
        return false;
      }


    }, false);
  },
  /*
  This method does the following:
    - provides cross-platform view "shrinking" on keyboard open/close
    - hides keyboard accessory bar for all inputs except where it required
  */
  handleKeyboard: function () {
    var f7 = cordovaApp.f7;
    if (!window.Keyboard || !window.Keyboard.shrinkView || f7.device.electron) return;
    var $ = f7.$;
    window.Keyboard.shrinkView(false);
    window.Keyboard.disableScrollingInShrinkView(true);
    window.Keyboard.hideFormAccessoryBar(true);
    window.addEventListener('keyboardWillShow', () => {
      f7.input.scrollIntoView(document.activeElement, 0, true, true);
    });
    window.addEventListener('keyboardDidShow', () => {
      f7.input.scrollIntoView(document.activeElement, 0, true, true);
    });
    window.addEventListener('keyboardDidHide', () => {
      if (document.activeElement && $(document.activeElement).parents('.messagebar').length) {
        return;
      }
      window.Keyboard.hideFormAccessoryBar(false);
    });
    window.addEventListener('keyboardHeightWillChange', (event) => {
      var keyboardHeight = event.keyboardHeight;
      if (keyboardHeight > 0) {
        // Keyboard is going to be opened
        document.body.style.height = `calc(100% - ${keyboardHeight}px)`;
        $('html').addClass('device-with-keyboard');
      } else {
        // Keyboard is going to be closed
        document.body.style.height = '';
        $('html').removeClass('device-with-keyboard');
      }

    });
    $(document).on('touchstart', 'input, textarea, select', function (e) {
      var nodeName = e.target.nodeName.toLowerCase();
      var type = e.target.type;
      var showForTypes = ['datetime-local', 'time', 'date', 'datetime'];
      if (nodeName === 'select' || showForTypes.indexOf(type) >= 0) {
        window.Keyboard.hideFormAccessoryBar(false);
      } else {
        window.Keyboard.hideFormAccessoryBar(true);
      }
    }, true);
  },
  handleSession: function () {
    if ($('.after-splashscreen-bg.page.page-current').data("name") == "after-splashscreen") {
      StatusBar.overlaysWebView(true);
    }
    if (localStorage.getItem("session") == "has session") {
      f7.views.main.router.navigate('/home-page/');
      if (window.StatusBar) {
        StatusBar.styleLightContent()
        StatusBar.backgroundColorByHexString('#fc4d4d');
      }
      StatusBar.overlaysWebView(false);
    }

  },

  init: function (f7) {
    // Save f7 instance
    cordovaApp.f7 = f7;

    // Handle Android back button
    cordovaApp.handleAndroidBackButton();

    // Handle Splash Screen
    cordovaApp.handleSplashscreen();

    // Handle Keyboard
    cordovaApp.handleKeyboard();

    // Handle Notification
    cordovaApp.handleNotification();

    cordovaApp.handleSession();



  },
};

export default cordovaApp;
