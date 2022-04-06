import Roles from 'src/security/roles';
import Plans from 'src/security/plans';
import Storage from 'src/security/storage';

const storage = Storage.values;
const roles = Roles.values;
const plans = Plans.values;

class Permissions {
  static get values() {
    return {
      tenantEdit: {
        id: 'tenantEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      tenantDestroy: {
        id: 'tenantDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planEdit: {
        id: 'planEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planRead: {
        id: 'planRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userEdit: {
        id: 'userEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userDestroy: {
        id: 'userDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userCreate: {
        id: 'userCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userImport: {
        id: 'userImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userRead: {
        id: 'userRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userAutocomplete: {
        id: 'userAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.settingsBackgroundImages,
          storage.settingsLogos,
        ],
      },
      categoryImport: {
        id: 'categoryImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      categoryCreate: {
        id: 'categoryCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.categoryPhoto],
      },
      categoryEdit: {
        id: 'categoryEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.categoryPhoto],
      },
      categoryDestroy: {
        id: 'categoryDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.categoryPhoto],
      },
      categoryRead: {
        id: 'categoryRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      categoryAutocomplete: {
        id: 'categoryAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      subcategoriesImport: {
        id: 'subcategoriesImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      subcategoriesCreate: {
        id: 'subcategoriesCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      subcategoriesEdit: {
        id: 'subcategoriesEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      subcategoriesDestroy: {
        id: 'subcategoriesDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      subcategoriesRead: {
        id: 'subcategoriesRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      subcategoriesAutocomplete: {
        id: 'subcategoriesAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      chieldCategoriesImport: {
        id: 'chieldCategoriesImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      chieldCategoriesCreate: {
        id: 'chieldCategoriesCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      chieldCategoriesEdit: {
        id: 'chieldCategoriesEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      chieldCategoriesDestroy: {
        id: 'chieldCategoriesDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      chieldCategoriesRead: {
        id: 'chieldCategoriesRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      chieldCategoriesAutocomplete: {
        id: 'chieldCategoriesAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      taxesImport: {
        id: 'taxesImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      taxesCreate: {
        id: 'taxesCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      taxesEdit: {
        id: 'taxesEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      taxesDestroy: {
        id: 'taxesDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      taxesRead: {
        id: 'taxesRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      taxesAutocomplete: {
        id: 'taxesAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      brandsImport: {
        id: 'brandsImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      brandsCreate: {
        id: 'brandsCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.brandsPhoto],
      },
      brandsEdit: {
        id: 'brandsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.brandsPhoto],
      },
      brandsDestroy: {
        id: 'brandsDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.brandsPhoto],
      },
      brandsRead: {
        id: 'brandsRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      brandsAutocomplete: {
        id: 'brandsAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      editImport: {
        id: 'editImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      editCreate: {
        id: 'editCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      editEdit: {
        id: 'editEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      editDestroy: {
        id: 'editDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      editRead: {
        id: 'editRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      editAutocomplete: {
        id: 'editAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      campaignItemsImport: {
        id: 'campaignItemsImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      campaignItemsCreate: {
        id: 'campaignItemsCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      campaignItemsEdit: {
        id: 'campaignItemsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      campaignItemsDestroy: {
        id: 'campaignItemsDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      campaignItemsRead: {
        id: 'campaignItemsRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      campaignItemsAutocomplete: {
        id: 'campaignItemsAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      galleryImport: {
        id: 'galleryImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      galleryCreate: {
        id: 'galleryCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.galleryPhotos],
      },
      galleryEdit: {
        id: 'galleryEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.galleryPhotos],
      },
      galleryDestroy: {
        id: 'galleryDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.galleryPhotos],
      },
      galleryRead: {
        id: 'galleryRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      galleryAutocomplete: {
        id: 'galleryAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      productImport: {
        id: 'productImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      productCreate: {
        id: 'productCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.productPhoto,
          storage.productFile,
        ],
      },
      productEdit: {
        id: 'productEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.productPhoto,
          storage.productFile,
        ],
      },
      productDestroy: {
        id: 'productDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.productPhoto,
          storage.productFile,
        ],
      },
      productRead: {
        id: 'productRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      productAutocomplete: {
        id: 'productAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      shippingserviceImport: {
        id: 'shippingserviceImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      shippingserviceCreate: {
        id: 'shippingserviceCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      shippingserviceEdit: {
        id: 'shippingserviceEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      shippingserviceDestroy: {
        id: 'shippingserviceDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      shippingserviceRead: {
        id: 'shippingserviceRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      shippingserviceAutocomplete: {
        id: 'shippingserviceAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      couponsImport: {
        id: 'couponsImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      couponsCreate: {
        id: 'couponsCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      couponsEdit: {
        id: 'couponsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      couponsDestroy: {
        id: 'couponsDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      couponsRead: {
        id: 'couponsRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      couponsAutocomplete: {
        id: 'couponsAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      transactionImport: {
        id: 'transactionImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      transactionCreate: {
        id: 'transactionCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      transactionEdit: {
        id: 'transactionEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      transactionDestroy: {
        id: 'transactionDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      transactionRead: {
        id: 'transactionRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      transactionAutocomplete: {
        id: 'transactionAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      trackOrderImport: {
        id: 'trackOrderImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      trackOrderCreate: {
        id: 'trackOrderCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      trackOrderEdit: {
        id: 'trackOrderEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      trackOrderDestroy: {
        id: 'trackOrderDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      trackOrderRead: {
        id: 'trackOrderRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      trackOrderAutocomplete: {
        id: 'trackOrderAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      orderImport: {
        id: 'orderImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      orderCreate: {
        id: 'orderCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      orderEdit: {
        id: 'orderEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      orderDestroy: {
        id: 'orderDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      orderRead: {
        id: 'orderRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      orderAutocomplete: {
        id: 'orderAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      stateImport: {
        id: 'stateImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      stateCreate: {
        id: 'stateCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      stateEdit: {
        id: 'stateEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      stateDestroy: {
        id: 'stateDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      stateRead: {
        id: 'stateRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      stateAutocomplete: {
        id: 'stateAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      attributeOptionsImport: {
        id: 'attributeOptionsImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      attributeOptionsCreate: {
        id: 'attributeOptionsCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      attributeOptionsEdit: {
        id: 'attributeOptionsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      attributeOptionsDestroy: {
        id: 'attributeOptionsDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      attributeOptionsRead: {
        id: 'attributeOptionsRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      attributeOptionsAutocomplete: {
        id: 'attributeOptionsAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      cartImport: {
        id: 'cartImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      cartCreate: {
        id: 'cartCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.cartPhoto],
      },
      cartEdit: {
        id: 'cartEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.cartPhoto],
      },
      cartDestroy: {
        id: 'cartDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.cartPhoto],
      },
      cartRead: {
        id: 'cartRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      cartAutocomplete: {
        id: 'cartAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      paymentsettingsImport: {
        id: 'paymentsettingsImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      paymentsettingsCreate: {
        id: 'paymentsettingsCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.paymentsettingsPhoto],
      },
      paymentsettingsEdit: {
        id: 'paymentsettingsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.paymentsettingsPhoto],
      },
      paymentsettingsDestroy: {
        id: 'paymentsettingsDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.paymentsettingsPhoto],
      },
      paymentsettingsRead: {
        id: 'paymentsettingsRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      paymentsettingsAutocomplete: {
        id: 'paymentsettingsAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      reviewImport: {
        id: 'reviewImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      reviewCreate: {
        id: 'reviewCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      reviewEdit: {
        id: 'reviewEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      reviewDestroy: {
        id: 'reviewDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      reviewRead: {
        id: 'reviewRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      reviewAutocomplete: {
        id: 'reviewAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      attributesImport: {
        id: 'attributesImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      attributesCreate: {
        id: 'attributesCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      attributesEdit: {
        id: 'attributesEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      attributesDestroy: {
        id: 'attributesDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      attributesRead: {
        id: 'attributesRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      attributesAutocomplete: {
        id: 'attributesAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
