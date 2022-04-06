import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import config from 'src/config';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: 'fas fa-th-large',
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: 'fas fa-credit-card',
    label: i18n('plan.menu'),
  },

  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: 'fas fa-user-plus',
  },

  {
    path: '/audit-logs',
    icon: 'fas fa-history',
    label: i18n('auditLog.menu'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: 'fas fa-cog',
    label: i18n('settings.menu'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '**',
    permissionRequired: permissions.categoryRead,
    icon: 'fas fa-th-large',
    label: i18n('entities.category.menu'),
    subMenue: [
      {
        path: '/category',
        permissionRequired: permissions.subcategoriesRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.category.menu'),
      },
      {
        path: '/subcategories',
        permissionRequired: permissions.subcategoriesRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.subcategories.menu'),
      },
      {
        path: '/chield-categories',
        permissionRequired:
          permissions.chieldCategoriesRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.chieldCategories.menu'),
      },
    ],
  },

  {
    path: '**',
    permissionRequired: permissions.productRead,
    icon: 'fab fa-product-hunt',
    label: i18n('entities.product.menu'),
    subMenue: [
      {
        path: '/brands',
        permissionRequired: permissions.brandsRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.brands.menu'),
      },
      {
        path: '/product',
        permissionRequired: permissions.brandsRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.product.menu'),
      },
      // {
      //   path: '/gallery',
      //   permissionRequired: permissions.galleryRead,
      //   icon: 'fas fa-chevron-right',
      //   label: i18n('entities.gallery.menu'),
      // },
      {
        path: '/campaign-items',
        permissionRequired: permissions.campaignItemsRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.campaignItems.menu'),
      },
      {
        path: '/edit',
        permissionRequired: permissions.editRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.edit.menu'),
      },
      // {
      //   path: '/attribute-options',
      //   permissionRequired:
      //     permissions.attributeOptionsRead,
      //   icon: 'fas fa-chevron-right',
      //   label: i18n('entities.attributeOptions.menu'),
      // },
    ],
  },

  {
    path: '/order',
    permissionRequired: permissions.orderRead,
    icon: 'fab fa-first-order',
    label: i18n('entities.order.menu'),
  },
  {
    path: '/transaction',
    permissionRequired: permissions.transactionRead,
    icon: 'fas fa-random',
    label: i18n('entities.transaction.menu'),
  },
  {
    path: '**',
    permissionRequired: permissions.attributeOptionsRead,
    icon: 'fas fa-newspaper',
    label: i18n('e-commerce'),
    subMenue: [
      {
        path: '/coupons',
        permissionRequired: permissions.couponsRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.coupons.menu'),
      },
      {
        path: '/shippingservice',
        permissionRequired: permissions.shippingserviceRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.shippingservice.menu'),
      },
      {
        path: '/state',
        permissionRequired: permissions.stateRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.state.menu'),
      },
      {
        path: '/taxes',
        permissionRequired: permissions.taxesRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.taxes.menu'),
      },

      // {
      //   path: '/track-order',
      //   permissionRequired: permissions.trackOrderRead,
      //   icon: 'fas fa-chevron-right',
      //   label: i18n('entities.trackOrder.menu'),
      // },

      {
        path: '/paymentsettings',
        permissionRequired: permissions.paymentsettingsRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.paymentsettings.menu'),
      },
      // {
      //   path: '/cart',
      //   permissionRequired: permissions.cartRead,
      //   icon: 'fas fa-chevron-right',
      //   label: i18n('entities.cart.menu'),
      // },
    ],
  },
].filter(Boolean);
