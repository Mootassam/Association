const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    start: 'Start',
    end: 'End',
    select: 'Select',
    continue: 'Continue',
    filters: 'Filters',
  },

  app: {
    title: 'Application',
  },

  api: {
    menu: 'API',
  },

  entities: {
    category: {
        name: 'category',
        label: 'Categories',
        menu: 'Categories',
        exporterFileName: 'category_export',
        list: {
          menu: 'Categories',
          title: 'Categories',
        },
        create: {
          success: 'Category successfully saved',
        },
        update: {
          success: 'Category successfully saved',
        },
        destroy: {
          success: 'Category successfully deleted',
        },
        destroyAll: {
          success: 'Category(s) successfully deleted',
        },
        edit: {
          title: 'Edit Category',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'slug': 'Slug',
          'photo': 'Photo',
          'metaKeywords': 'MetaKeywords',
          'metaDescriptions': 'MetaDescriptions',
          'status': 'Status',
          'isFeature': 'IsFeature',
          'serialRange': 'Serial',
          'serial': 'Serial',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'enable': 'Enable',
            'disable': 'Disable',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Category',
        },
        view: {
          title: 'View Category',
        },
        importer: {
          title: 'Import Categories',
          fileName: 'category_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    subcategories: {
        name: 'subcategories',
        label: 'Subcategories',
        menu: 'Subcategories',
        exporterFileName: 'subcategories_export',
        list: {
          menu: 'Subcategories',
          title: 'Subcategories',
        },
        create: {
          success: 'Subcategories successfully saved',
        },
        update: {
          success: 'Subcategories successfully saved',
        },
        destroy: {
          success: 'Subcategories successfully deleted',
        },
        destroyAll: {
          success: 'Subcategories(s) successfully deleted',
        },
        edit: {
          title: 'Edit Subcategories',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'slug': 'Slug',
          'status': 'Status',
          'categoryId': 'CategoryId',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'enable': 'Enable',
            'disable': 'Disable',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Subcategories',
        },
        view: {
          title: 'View Subcategories',
        },
        importer: {
          title: 'Import Subcategories',
          fileName: 'subcategories_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    chieldCategories: {
        name: 'chieldCategories',
        label: 'ChieldCategories',
        menu: 'ChieldCategories',
        exporterFileName: 'chieldCategories_export',
        list: {
          menu: 'ChieldCategories',
          title: 'ChieldCategories',
        },
        create: {
          success: 'ChieldCategories successfully saved',
        },
        update: {
          success: 'ChieldCategories successfully saved',
        },
        destroy: {
          success: 'ChieldCategories successfully deleted',
        },
        destroyAll: {
          success: 'ChieldCategories(s) successfully deleted',
        },
        edit: {
          title: 'Edit ChieldCategories',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'slug': 'Slug',
          'categoryId': 'CategoryId',
          'subcategoryId': 'SubcategoryId',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'subcategoryId': ' ',
        },
        hints: {

        },
        new: {
          title: 'New ChieldCategories',
        },
        view: {
          title: 'View ChieldCategories',
        },
        importer: {
          title: 'Import ChieldCategories',
          fileName: 'chieldCategories_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    taxes: {
        name: 'taxes',
        label: 'Taxes',
        menu: 'Taxes',
        exporterFileName: 'taxes_export',
        list: {
          menu: 'Taxes',
          title: 'Taxes',
        },
        create: {
          success: 'Taxes successfully saved',
        },
        update: {
          success: 'Taxes successfully saved',
        },
        destroy: {
          success: 'Taxes successfully deleted',
        },
        destroyAll: {
          success: 'Taxes(s) successfully deleted',
        },
        edit: {
          title: 'Edit Taxes',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'valueRange': 'Value',
          'value': 'Value',
          'status': 'Status',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'enable': 'Enable',
            'disable': 'Disable',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Taxes',
        },
        view: {
          title: 'View Taxes',
        },
        importer: {
          title: 'Import Taxes',
          fileName: 'taxes_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    brands: {
        name: 'brands',
        label: 'Brands',
        menu: 'Brands',
        exporterFileName: 'brands_export',
        list: {
          menu: 'Brands',
          title: 'Brands',
        },
        create: {
          success: 'Brands successfully saved',
        },
        update: {
          success: 'Brands successfully saved',
        },
        destroy: {
          success: 'Brands successfully deleted',
        },
        destroyAll: {
          success: 'Brands(s) successfully deleted',
        },
        edit: {
          title: 'Edit Brands',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'slug': 'Slug',
          'photo': 'Photo',
          'status': 'Status',
          'isPopular': 'IsPopular',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'enbale': 'Enbale',
            'disable': 'Disable',
          },
          'isPopular': {
            'enable': 'Enable',
            'disable': 'Disable',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Brands',
        },
        view: {
          title: 'View Brands',
        },
        importer: {
          title: 'Import Brands',
          fileName: 'brands_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    edit: {
        name: 'edit',
        label: 'Edits',
        menu: 'Edits',
        exporterFileName: 'edit_export',
        list: {
          menu: 'Edits',
          title: 'Edits',
        },
        create: {
          success: 'Edit successfully saved',
        },
        update: {
          success: 'Edit successfully saved',
        },
        destroy: {
          success: 'Edit successfully deleted',
        },
        destroyAll: {
          success: 'Edit(s) successfully deleted',
        },
        edit: {
          title: 'Edit Edit',
        },
        fields: {
          id: 'Id',
          'campaignTitle': 'CampaignTitle',
          'campaignLastDateTimeRange': 'CampaignLastDateTime',
          'campaignLastDateTime': 'CampaignLastDateTime',
          'status': 'Status',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'enable': 'Enable',
            'disable': 'Disable',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Edit',
        },
        view: {
          title: 'View Edit',
        },
        importer: {
          title: 'Import Edits',
          fileName: 'edit_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    campaignItems: {
        name: 'campaignItems',
        label: 'CampaignItems',
        menu: 'CampaignItems',
        exporterFileName: 'campaignItems_export',
        list: {
          menu: 'CampaignItems',
          title: 'CampaignItems',
        },
        create: {
          success: 'CampaignItems successfully saved',
        },
        update: {
          success: 'CampaignItems successfully saved',
        },
        destroy: {
          success: 'CampaignItems successfully deleted',
        },
        destroyAll: {
          success: 'CampaignItems(s) successfully deleted',
        },
        edit: {
          title: 'Edit CampaignItems',
        },
        fields: {
          id: 'Id',
          'status': 'Status',
          'isFeature': 'IsFeature',
          'itemId': 'ItemId',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'enable': 'Enable',
            'disable': 'Disable',
          },
          'isFeature': {
            'enable': 'Enable',
            'disable': 'Disable',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New CampaignItems',
        },
        view: {
          title: 'View CampaignItems',
        },
        importer: {
          title: 'Import CampaignItems',
          fileName: 'campaignItems_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    gallery: {
        name: 'gallery',
        label: 'Galleries',
        menu: 'Galleries',
        exporterFileName: 'gallery_export',
        list: {
          menu: 'Galleries',
          title: 'Galleries',
        },
        create: {
          success: 'Gallery successfully saved',
        },
        update: {
          success: 'Gallery successfully saved',
        },
        destroy: {
          success: 'Gallery successfully deleted',
        },
        destroyAll: {
          success: 'Gallery(s) successfully deleted',
        },
        edit: {
          title: 'Edit Gallery',
        },
        fields: {
          id: 'Id',
          'photos': 'Photos',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Gallery',
        },
        view: {
          title: 'View Gallery',
        },
        importer: {
          title: 'Import Galleries',
          fileName: 'gallery_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    product: {
        name: 'product',
        label: 'Products',
        menu: 'Products',
        exporterFileName: 'product_export',
        list: {
          menu: 'Products',
          title: 'Products',
        },
        create: {
          success: 'Product successfully saved',
        },
        update: {
          success: 'Product successfully saved',
        },
        destroy: {
          success: 'Product successfully deleted',
        },
        destroyAll: {
          success: 'Product(s) successfully deleted',
        },
        edit: {
          title: 'Edit Product',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'slug': 'Slug',
          'tags': 'Tags',
          'video': 'Video',
          'specificationName': 'SpecificationName',
          'specificationDesciption': 'SpecificationDesciption',
          'isSpecification': 'IsSpecification',
          'details': 'Details',
          'photo': 'Photo',
          'discountPriceRange': 'DiscountPrice',
          'discountPrice': 'DiscountPrice',
          'previousPriceRange': 'PreviousPrice',
          'previousPrice': 'PreviousPrice',
          'stockRange': 'Stock',
          'stock': 'Stock',
          'metaKeywords': 'MetaKeywords',
          'metaDesctiption': 'MetaDesctiption',
          'status': 'Status',
          'isType': 'IsType',
          'dateRange': 'Date',
          'date': 'Date',
          'itemType': 'ItemType',
          'file': 'File',
          'link': 'Link',
          'fileType': 'FileType',
          'taxe': 'Taxe',
          'category': 'Category',
          'subcategory': 'Subcategory',
          'childcategory': 'Childcategory',
          'brand': 'Brand',
          'gallery': 'Gallery',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'enable': 'Enable',
            'disable': 'Disable',
          },
          'itemType': {
            'normal': 'Normal',
            'digitale': 'Digitale',
          },
          'fileType': {
            'file': 'File',
            'link': 'Link',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Product',
        },
        view: {
          title: 'View Product',
        },
        importer: {
          title: 'Import Products',
          fileName: 'product_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    shippingservice: {
        name: 'shippingservice',
        label: 'Shippingservices',
        menu: 'Shippingservices',
        exporterFileName: 'shippingservice_export',
        list: {
          menu: 'Shippingservices',
          title: 'Shippingservices',
        },
        create: {
          success: 'Shippingservice successfully saved',
        },
        update: {
          success: 'Shippingservice successfully saved',
        },
        destroy: {
          success: 'Shippingservice successfully deleted',
        },
        destroyAll: {
          success: 'Shippingservice(s) successfully deleted',
        },
        edit: {
          title: 'Edit Shippingservice',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'priceRange': 'Price',
          'price': 'Price',
          'status': 'Status',
          'minimumPriceRange': 'MinimumPrice',
          'minimumPrice': 'MinimumPrice',
          'isCondition': 'IsCondition',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'enable': 'Enable',
            'disable': 'Disable',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Shippingservice',
        },
        view: {
          title: 'View Shippingservice',
        },
        importer: {
          title: 'Import Shippingservices',
          fileName: 'shippingservice_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    coupons: {
        name: 'coupons',
        label: 'Coupons',
        menu: 'Coupons',
        exporterFileName: 'coupons_export',
        list: {
          menu: 'Coupons',
          title: 'Coupons',
        },
        create: {
          success: 'Coupons successfully saved',
        },
        update: {
          success: 'Coupons successfully saved',
        },
        destroy: {
          success: 'Coupons successfully deleted',
        },
        destroyAll: {
          success: 'Coupons(s) successfully deleted',
        },
        edit: {
          title: 'Edit Coupons',
        },
        fields: {
          id: 'Id',
          'title': 'Title',
          'codeName': 'CodeName',
          'discountRange': 'Discount',
          'discount': 'Discount',
          'noOfTimesRange': 'NoOfTimes',
          'noOfTimes': 'NoOfTimes',
          'status': 'Status',
          'type': 'Type',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'enable': 'Enable',
            'disable': 'Disable',
          },
          'type': {
            'Percentage (%)': 'Percentage (%)',
            'amount ( TND)': 'Amount ( TND)',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Coupons',
        },
        view: {
          title: 'View Coupons',
        },
        importer: {
          title: 'Import Coupons',
          fileName: 'coupons_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    transaction: {
        name: 'transaction',
        label: 'Transactions',
        menu: 'Transactions',
        exporterFileName: 'transaction_export',
        list: {
          menu: 'Transactions',
          title: 'Transactions',
        },
        create: {
          success: 'Transaction successfully saved',
        },
        update: {
          success: 'Transaction successfully saved',
        },
        destroy: {
          success: 'Transaction successfully deleted',
        },
        destroyAll: {
          success: 'Transaction(s) successfully deleted',
        },
        edit: {
          title: 'Edit Transaction',
        },
        fields: {
          id: 'Id',
          'amountRange': 'Amount',
          'amount': 'Amount',
          'email': 'Email',
          'tax': 'Tax',
          'currencySign': 'CurrencySign',
          'currencyValue': 'CurrencyValue',
          'orderId': 'OrderId',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Transaction',
        },
        view: {
          title: 'View Transaction',
        },
        importer: {
          title: 'Import Transactions',
          fileName: 'transaction_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    trackOrder: {
        name: 'trackOrder',
        label: 'TrackOrders',
        menu: 'TrackOrders',
        exporterFileName: 'trackOrder_export',
        list: {
          menu: 'TrackOrders',
          title: 'TrackOrders',
        },
        create: {
          success: 'TrackOrder successfully saved',
        },
        update: {
          success: 'TrackOrder successfully saved',
        },
        destroy: {
          success: 'TrackOrder successfully deleted',
        },
        destroyAll: {
          success: 'TrackOrder(s) successfully deleted',
        },
        edit: {
          title: 'Edit TrackOrder',
        },
        fields: {
          id: 'Id',
          'title': 'Title',
          'item': 'Item',
          'order': 'Order',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New TrackOrder',
        },
        view: {
          title: 'View TrackOrder',
        },
        importer: {
          title: 'Import TrackOrders',
          fileName: 'trackOrder_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    order: {
        name: 'order',
        label: 'Orders',
        menu: 'Orders',
        exporterFileName: 'order_export',
        list: {
          menu: 'Orders',
          title: 'Orders',
        },
        create: {
          success: 'Order successfully saved',
        },
        update: {
          success: 'Order successfully saved',
        },
        destroy: {
          success: 'Order successfully deleted',
        },
        destroyAll: {
          success: 'Order(s) successfully deleted',
        },
        edit: {
          title: 'Edit Order',
        },
        fields: {
          id: 'Id',
          'userId': 'UserId',
          'cart': 'Cart',
          'shipping': 'Shipping',
          'discountRange': 'Discount',
          'discount': 'Discount',
          'paymentMethod': 'PaymentMethod',
          'taxe': 'Taxe',
          'transactionNumber': 'TransactionNumber',
          'orderStatus': 'OrderStatus',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'orderStatus': {
            'pending': 'Pending',
            'in_progress': 'In_progress',
            'delivered': 'Delivered',
            'canceled': 'Canceled',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Order',
        },
        view: {
          title: 'View Order',
        },
        importer: {
          title: 'Import Orders',
          fileName: 'order_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    state: {
        name: 'state',
        label: 'States',
        menu: 'States',
        exporterFileName: 'state_export',
        list: {
          menu: 'States',
          title: 'States',
        },
        create: {
          success: 'State successfully saved',
        },
        update: {
          success: 'State successfully saved',
        },
        destroy: {
          success: 'State successfully deleted',
        },
        destroyAll: {
          success: 'State(s) successfully deleted',
        },
        edit: {
          title: 'Edit State',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'priceRange': 'Price',
          'price': 'Price',
          'status': 'Status',
          'type': 'Type',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'enable': 'Enable',
            'disable': 'Disable',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New State',
        },
        view: {
          title: 'View State',
        },
        importer: {
          title: 'Import States',
          fileName: 'state_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    attributeOptions: {
        name: 'attributeOptions',
        label: 'AttributeOptions',
        menu: 'AttributeOptions',
        exporterFileName: 'attributeOptions_export',
        list: {
          menu: 'AttributeOptions',
          title: 'AttributeOptions',
        },
        create: {
          success: 'AttributeOptions successfully saved',
        },
        update: {
          success: 'AttributeOptions successfully saved',
        },
        destroy: {
          success: 'AttributeOptions successfully deleted',
        },
        destroyAll: {
          success: 'AttributeOptions(s) successfully deleted',
        },
        edit: {
          title: 'Edit AttributeOptions',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'priceRange': 'Price',
          'price': 'Price',
          'keyword': 'Keyword',
          'item': 'Item',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New AttributeOptions',
        },
        view: {
          title: 'View AttributeOptions',
        },
        importer: {
          title: 'Import AttributeOptions',
          fileName: 'attributeOptions_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    cart: {
        name: 'cart',
        label: 'Carts',
        menu: 'Carts',
        exporterFileName: 'cart_export',
        list: {
          menu: 'Carts',
          title: 'Carts',
        },
        create: {
          success: 'Cart successfully saved',
        },
        update: {
          success: 'Cart successfully saved',
        },
        destroy: {
          success: 'Cart successfully deleted',
        },
        destroyAll: {
          success: 'Cart(s) successfully deleted',
        },
        edit: {
          title: 'Edit Cart',
        },
        fields: {
          id: 'Id',
          'optionsId': 'OptionsId',
          'attribute': 'Attribute',
          'name': 'Name',
          'slug': 'Slug',
          'qtyRange': 'Qty',
          'qty': 'Qty',
          'priceRange': 'Price',
          'price': 'Price',
          'mainPriceRange': 'MainPrice',
          'mainPrice': 'MainPrice',
          'photo': 'Photo',
          'itemType': 'ItemType',
          'itemLN': 'ItemLN',
          'itemLK': 'ItemLK',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Cart',
        },
        view: {
          title: 'View Cart',
        },
        importer: {
          title: 'Import Carts',
          fileName: 'cart_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    paymentsettings: {
        name: 'paymentsettings',
        label: 'Paymentsettings',
        menu: 'Paymentsettings',
        exporterFileName: 'paymentsettings_export',
        list: {
          menu: 'Paymentsettings',
          title: 'Paymentsettings',
        },
        create: {
          success: 'Paymentsettings successfully saved',
        },
        update: {
          success: 'Paymentsettings successfully saved',
        },
        destroy: {
          success: 'Paymentsettings successfully deleted',
        },
        destroyAll: {
          success: 'Paymentsettings(s) successfully deleted',
        },
        edit: {
          title: 'Edit Paymentsettings',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'information': 'Information',
          'uniqueKeywords': 'UniqueKeywords',
          'photo': 'Photo',
          'text': 'Text',
          'status': 'Status',
          'type': 'Type',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'enable': 'Enable',
            'disable': 'Disable',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Paymentsettings',
        },
        view: {
          title: 'View Paymentsettings',
        },
        importer: {
          title: 'Import Paymentsettings',
          fileName: 'paymentsettings_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    review: {
        name: 'review',
        label: 'Reviews',
        menu: 'Reviews',
        exporterFileName: 'review_export',
        list: {
          menu: 'Reviews',
          title: 'Reviews',
        },
        create: {
          success: 'Review successfully saved',
        },
        update: {
          success: 'Review successfully saved',
        },
        destroy: {
          success: 'Review successfully deleted',
        },
        destroyAll: {
          success: 'Review(s) successfully deleted',
        },
        edit: {
          title: 'Edit Review',
        },
        fields: {
          id: 'Id',
          'review': 'Review',
          'ratingRange': 'Rating',
          'rating': 'Rating',
          'status': 'Status',
          'subject': 'Subject',
          'item': 'Item',
          'user': 'User',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'enable': 'Enable',
            'disable': 'Disable',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Review',
        },
        view: {
          title: 'View Review',
        },
        importer: {
          title: 'Import Reviews',
          fileName: 'review_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    custom: {
      label: 'Custom Role',
      description: 'Custom role access',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
    },
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'Users',
    menu: 'Users',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess:
      'Users successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'Invite User(s)',
      titleModal: 'Invite User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      tenantUrl: 'Workspace URL',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url:
        'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
      logos: 'Logo',
      backgroundImages: 'Background Image',
    },
    colors: {
      default: 'Dark',
      light: 'Light',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },

  preview: {
    error:
      'Sorry, this operation is not allowed in preview mode.',
  },
  
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} is required`
          : `${path} field must have at least ${min} items`,
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
    noOptions: 'No data found',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  table: {
    noData: 'No records found',
    loading: 'Loading...',
  },

  pagination: {
    items_per_page: '/ page',
    jump_to: 'Goto',
    jump_to_confirm: 'confirm',
    page: '',

    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages',
  },
};

export default en;