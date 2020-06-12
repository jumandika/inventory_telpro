
import HomePage from '../pages/home.jsx';
import LoginPage from '../pages/login.jsx';
import AfterSplashscreen from '../pages/after-splashscreen.jsx';
import AboutPage from '../pages/about.jsx';
import FormPage from '../pages/form.jsx';
import GoodRequestPage from '../pages/Make Request/goods-request.jsx';
import GoodsAddPage from '../pages/Add Goods/goods-add.jsx';
import GoodsListPage from '../pages/Goods List/goods-list.jsx';
import HistoryListPage from '../pages/Your History/history-list.jsx';
import AddAccountPage from '../pages/Add Account/add-account.jsx';
import AddRegionalityPage from '../pages/Add Regionality/add-regionality.jsx';
import AddRegionalPage from '../pages/Add Regionality/add-regional.jsx';
import AddLocationPage from '../pages/Add Regionality/add-location.jsx';
import AddSublocationPage from '../pages/Add Regionality/add-sublocation.jsx';
import AddAdministratorPage from '../pages/Add Account/add-adminintrator.jsx';
import AddPelaksanaPage from '../pages/Add Account/add-pelaksana.jsx';
import EditProfileAdminPage from '../pages/edit-profile-admin.jsx';
import EditProfilePelaksanaPage from '../pages/edit-profile-pelaksana.jsx';
import ChangeRegionalityPage from '../pages/Add Account/change-regionality.jsx';
import SecurityPatrolPage from '../pages/Security Patrol/security-patrol.jsx';
import PatrolLocationListPage from '../pages/Security Patrol/patrol-location-list.jsx';
import PatrolSublocationListPage from '../pages/Security Patrol/patrol-sublocation-list.jsx';
import GoodsApplicationPage from '../pages/Goods Application/goods-application.jsx';
import GoodsApplicationFormPage from '../pages/Goods Application/goods-application-form.jsx';
import GoodsApplicationViewPage from '../pages/Goods Application/goods-application-view.jsx';
import GoodsApplicationDetailPage from '../pages/Goods Application/goods-application-detail.jsx';
import GoodsInPage from '../pages/Goods In/goods-in-form.jsx';
import GoodsInDetailPage from '../pages/Goods In/goods-in-detail.jsx';


import DynamicRoutePage from '../pages/dynamic-route.jsx';
import RequestAndLoad from '../pages/request-and-load.jsx';
import NotFoundPage from '../pages/404.jsx';

var routes = [
  {
    path: '/',
    component: AfterSplashscreen,
    // component: HomePage,
  },
  {
    path: '/login-page/',
    component: LoginPage,
    // component: HomePage,
    options: {
      transition: 'f7-dive',
    },
  },
  {
    path: '/home-page/',
    component: HomePage,
  },
  {
    path: '/goods-list-page/',
    component: GoodsListPage,
  },
  {
    path: '/goods-request-page/',
    component: GoodRequestPage,
  },
  {
    path: '/goods-add-page/',
    component: GoodsAddPage,
  },
  {
    path: '/history-list-page/',
    component: HistoryListPage,
  },
  {
    path: '/add-account-page/',
    component: AddAccountPage,
  },
  {
    path: '/add-regionality-page/',
    component: AddRegionalityPage,
  },
  {
    path: '/add-regional-page/',
    component: AddRegionalPage,
  },
  {
    path: '/add-location-page/',
    component: AddLocationPage,
  },
  {
    path: '/add-sublocation-page/',
    component: AddSublocationPage,
  },
  {
    path: '/add-administrator-page/',
    component: AddAdministratorPage,
  },
  {
    path: '/add-pelaksana-page/',
    component: AddPelaksanaPage,
  },
  {
    path: '/edit-profile-admin-page/',
    component: EditProfileAdminPage,
  },
  {
    path: '/edit-profile-pelaksana-page/',
    component: EditProfilePelaksanaPage,
  },
  {
    path: '/change-regionality-page/',
    component: ChangeRegionalityPage,
  },
  {
    path: '/security-patrol-page/',
    component: SecurityPatrolPage,
  },
  {
    path: '/patrol-location-list-page/',
    component: PatrolLocationListPage,
  },
  {
    path: '/patrol-sublocation-list-page/',
    component: PatrolSublocationListPage,
  },
  {
    path: '/goods-application-page/',
    component: GoodsApplicationPage,
  },
  {
    path: '/goods-application-form-page/',
    component: GoodsApplicationFormPage,
  },
  {
    path: '/goods-application-view-page/',
    component: GoodsApplicationViewPage,
  },
  {
    path: '/goods-application-detail-page/',
    component: GoodsApplicationDetailPage,
  },
  {
    path: '/goods-in-page/',
    component: GoodsInPage,
  },
  {
    path: '/goods-in-detail-page/',
    component: GoodsInDetailPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/login-page/',
    component: LoginPage,
  },


  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
