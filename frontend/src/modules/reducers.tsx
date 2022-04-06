import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import plan from 'src/modules/plan/planReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import category from 'src/modules/category/categoryReducers';
import subcategories from 'src/modules/subcategories/subcategoriesReducers';
import chieldCategories from 'src/modules/chieldCategories/chieldCategoriesReducers';
import taxes from 'src/modules/taxes/taxesReducers';
import brands from 'src/modules/brands/brandsReducers';
import edit from 'src/modules/edit/editReducers';
import campaignItems from 'src/modules/campaignItems/campaignItemsReducers';
import gallery from 'src/modules/gallery/galleryReducers';
import product from 'src/modules/product/productReducers';
import shippingservice from 'src/modules/shippingservice/shippingserviceReducers';
import coupons from 'src/modules/coupons/couponsReducers';
import transaction from 'src/modules/transaction/transactionReducers';
import trackOrder from 'src/modules/trackOrder/trackOrderReducers';
import order from 'src/modules/order/orderReducers';
import state from 'src/modules/state/stateReducers';
import attributeOptions from 'src/modules/attributeOptions/attributeOptionsReducers';
import cart from 'src/modules/cart/cartReducers';
import paymentsettings from 'src/modules/paymentsettings/paymentsettingsReducers';
import review from 'src/modules/review/reviewReducers';
import attributes from 'src/modules/attributes/attributesReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    category,
    subcategories,
    chieldCategories,
    taxes,
    brands,
    edit,
    campaignItems,
    gallery,
    product,
    shippingservice,
    coupons,
    transaction,
    trackOrder,
    order,
    state,
    attributeOptions,
    cart,
    paymentsettings,
    review,
    attributes,
  });
