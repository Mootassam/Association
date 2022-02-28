const es = {
  common: {
    or: 'o',
    cancel: 'Cancelar',
    reset: 'Reiniciar',
    save: 'Guardar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Eliminar',
    new: 'Nuevo',
    export: 'Exportar a Excel',
    noDataToExport: 'No hay datos para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Si',
    no: 'No',
    pause: 'Pausa',
    areYouSure: '¿Estás seguro?',
    view: 'Ver',
    destroy: 'Eliminar',
    mustSelectARow: 'Debe seleccionar una fila',
    start: 'Comienzo',
    end: 'Final',
    select: 'Seleccione',
    continue: 'Continúa',
    filters: 'Filtros',
  },
  app: {
    title: 'Aplicación',
  },

  api: {
    menu: 'API',
  },

  entities: {
    category: {
        name: 'category',
        label: 'Categories',
        menu: 'Categories',
        exporterFileName: 'exportacion_category',
        list: {
          menu: 'Categories',
          title: 'Categories',
        },
        create: {
          success: 'Category guardado con éxito',
        },
        update: {
          success: 'Category guardado con éxito',
        },
        destroy: {
          success: 'Category eliminado con éxito',
        },
        destroyAll: {
          success: 'Category(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Category',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Category',
        },
        view: {
          title: 'Ver Category',
        },
        importer: {
          title: 'Importar Categories',
          fileName: 'category_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    subcategories: {
        name: 'subcategories',
        label: 'Subcategories',
        menu: 'Subcategories',
        exporterFileName: 'exportacion_subcategories',
        list: {
          menu: 'Subcategories',
          title: 'Subcategories',
        },
        create: {
          success: 'Subcategories guardado con éxito',
        },
        update: {
          success: 'Subcategories guardado con éxito',
        },
        destroy: {
          success: 'Subcategories eliminado con éxito',
        },
        destroyAll: {
          success: 'Subcategories(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Subcategories',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'slug': 'Slug',
          'status': 'Status',
          'categoryId': 'CategoryId',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Subcategories',
        },
        view: {
          title: 'Ver Subcategories',
        },
        importer: {
          title: 'Importar Subcategories',
          fileName: 'subcategories_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    chieldCategories: {
        name: 'chieldCategories',
        label: 'ChieldCategories',
        menu: 'ChieldCategories',
        exporterFileName: 'exportacion_chieldCategories',
        list: {
          menu: 'ChieldCategories',
          title: 'ChieldCategories',
        },
        create: {
          success: 'ChieldCategories guardado con éxito',
        },
        update: {
          success: 'ChieldCategories guardado con éxito',
        },
        destroy: {
          success: 'ChieldCategories eliminado con éxito',
        },
        destroyAll: {
          success: 'ChieldCategories(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar ChieldCategories',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'slug': 'Slug',
          'categoryId': 'CategoryId',
          'subcategoryId': 'SubcategoryId',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {
          'subcategoryId': ' ',
        },
        hints: {

        },
        new: {
          title: 'Nuevo ChieldCategories',
        },
        view: {
          title: 'Ver ChieldCategories',
        },
        importer: {
          title: 'Importar ChieldCategories',
          fileName: 'chieldCategories_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    taxes: {
        name: 'taxes',
        label: 'Taxes',
        menu: 'Taxes',
        exporterFileName: 'exportacion_taxes',
        list: {
          menu: 'Taxes',
          title: 'Taxes',
        },
        create: {
          success: 'Taxes guardado con éxito',
        },
        update: {
          success: 'Taxes guardado con éxito',
        },
        destroy: {
          success: 'Taxes eliminado con éxito',
        },
        destroyAll: {
          success: 'Taxes(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Taxes',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'valueRange': 'Value',
          'value': 'Value',
          'status': 'Status',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Taxes',
        },
        view: {
          title: 'Ver Taxes',
        },
        importer: {
          title: 'Importar Taxes',
          fileName: 'taxes_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    brands: {
        name: 'brands',
        label: 'Brands',
        menu: 'Brands',
        exporterFileName: 'exportacion_brands',
        list: {
          menu: 'Brands',
          title: 'Brands',
        },
        create: {
          success: 'Brands guardado con éxito',
        },
        update: {
          success: 'Brands guardado con éxito',
        },
        destroy: {
          success: 'Brands eliminado con éxito',
        },
        destroyAll: {
          success: 'Brands(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Brands',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'slug': 'Slug',
          'photo': 'Photo',
          'status': 'Status',
          'isPopular': 'IsPopular',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Brands',
        },
        view: {
          title: 'Ver Brands',
        },
        importer: {
          title: 'Importar Brands',
          fileName: 'brands_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    edit: {
        name: 'edit',
        label: 'Edits',
        menu: 'Edits',
        exporterFileName: 'exportacion_edit',
        list: {
          menu: 'Edits',
          title: 'Edits',
        },
        create: {
          success: 'Edit guardado con éxito',
        },
        update: {
          success: 'Edit guardado con éxito',
        },
        destroy: {
          success: 'Edit eliminado con éxito',
        },
        destroyAll: {
          success: 'Edit(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Edit',
        },
        fields: {
          id: 'Id',
          'campaignTitle': 'CampaignTitle',
          'campaignLastDateTimeRange': 'CampaignLastDateTime',
          'campaignLastDateTime': 'CampaignLastDateTime',
          'status': 'Status',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Edit',
        },
        view: {
          title: 'Ver Edit',
        },
        importer: {
          title: 'Importar Edits',
          fileName: 'edit_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    campaignItems: {
        name: 'campaignItems',
        label: 'CampaignItems',
        menu: 'CampaignItems',
        exporterFileName: 'exportacion_campaignItems',
        list: {
          menu: 'CampaignItems',
          title: 'CampaignItems',
        },
        create: {
          success: 'CampaignItems guardado con éxito',
        },
        update: {
          success: 'CampaignItems guardado con éxito',
        },
        destroy: {
          success: 'CampaignItems eliminado con éxito',
        },
        destroyAll: {
          success: 'CampaignItems(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar CampaignItems',
        },
        fields: {
          id: 'Id',
          'status': 'Status',
          'isFeature': 'IsFeature',
          'itemId': 'ItemId',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo CampaignItems',
        },
        view: {
          title: 'Ver CampaignItems',
        },
        importer: {
          title: 'Importar CampaignItems',
          fileName: 'campaignItems_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    gallery: {
        name: 'gallery',
        label: 'Galleries',
        menu: 'Galleries',
        exporterFileName: 'exportacion_gallery',
        list: {
          menu: 'Galleries',
          title: 'Galleries',
        },
        create: {
          success: 'Gallery guardado con éxito',
        },
        update: {
          success: 'Gallery guardado con éxito',
        },
        destroy: {
          success: 'Gallery eliminado con éxito',
        },
        destroyAll: {
          success: 'Gallery(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Gallery',
        },
        fields: {
          id: 'Id',
          'photos': 'Photos',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Gallery',
        },
        view: {
          title: 'Ver Gallery',
        },
        importer: {
          title: 'Importar Galleries',
          fileName: 'gallery_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    product: {
        name: 'product',
        label: 'Products',
        menu: 'Products',
        exporterFileName: 'exportacion_product',
        list: {
          menu: 'Products',
          title: 'Products',
        },
        create: {
          success: 'Product guardado con éxito',
        },
        update: {
          success: 'Product guardado con éxito',
        },
        destroy: {
          success: 'Product eliminado con éxito',
        },
        destroyAll: {
          success: 'Product(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Product',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Product',
        },
        view: {
          title: 'Ver Product',
        },
        importer: {
          title: 'Importar Products',
          fileName: 'product_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    shippingservice: {
        name: 'shippingservice',
        label: 'Shippingservices',
        menu: 'Shippingservices',
        exporterFileName: 'exportacion_shippingservice',
        list: {
          menu: 'Shippingservices',
          title: 'Shippingservices',
        },
        create: {
          success: 'Shippingservice guardado con éxito',
        },
        update: {
          success: 'Shippingservice guardado con éxito',
        },
        destroy: {
          success: 'Shippingservice eliminado con éxito',
        },
        destroyAll: {
          success: 'Shippingservice(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Shippingservice',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Shippingservice',
        },
        view: {
          title: 'Ver Shippingservice',
        },
        importer: {
          title: 'Importar Shippingservices',
          fileName: 'shippingservice_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    coupons: {
        name: 'coupons',
        label: 'Coupons',
        menu: 'Coupons',
        exporterFileName: 'exportacion_coupons',
        list: {
          menu: 'Coupons',
          title: 'Coupons',
        },
        create: {
          success: 'Coupons guardado con éxito',
        },
        update: {
          success: 'Coupons guardado con éxito',
        },
        destroy: {
          success: 'Coupons eliminado con éxito',
        },
        destroyAll: {
          success: 'Coupons(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Coupons',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Coupons',
        },
        view: {
          title: 'Ver Coupons',
        },
        importer: {
          title: 'Importar Coupons',
          fileName: 'coupons_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    transaction: {
        name: 'transaction',
        label: 'Transactions',
        menu: 'Transactions',
        exporterFileName: 'exportacion_transaction',
        list: {
          menu: 'Transactions',
          title: 'Transactions',
        },
        create: {
          success: 'Transaction guardado con éxito',
        },
        update: {
          success: 'Transaction guardado con éxito',
        },
        destroy: {
          success: 'Transaction eliminado con éxito',
        },
        destroyAll: {
          success: 'Transaction(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Transaction',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Transaction',
        },
        view: {
          title: 'Ver Transaction',
        },
        importer: {
          title: 'Importar Transactions',
          fileName: 'transaction_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    trackOrder: {
        name: 'trackOrder',
        label: 'TrackOrders',
        menu: 'TrackOrders',
        exporterFileName: 'exportacion_trackOrder',
        list: {
          menu: 'TrackOrders',
          title: 'TrackOrders',
        },
        create: {
          success: 'TrackOrder guardado con éxito',
        },
        update: {
          success: 'TrackOrder guardado con éxito',
        },
        destroy: {
          success: 'TrackOrder eliminado con éxito',
        },
        destroyAll: {
          success: 'TrackOrder(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar TrackOrder',
        },
        fields: {
          id: 'Id',
          'title': 'Title',
          'item': 'Item',
          'order': 'Order',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo TrackOrder',
        },
        view: {
          title: 'Ver TrackOrder',
        },
        importer: {
          title: 'Importar TrackOrders',
          fileName: 'trackOrder_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    order: {
        name: 'order',
        label: 'Orders',
        menu: 'Orders',
        exporterFileName: 'exportacion_order',
        list: {
          menu: 'Orders',
          title: 'Orders',
        },
        create: {
          success: 'Order guardado con éxito',
        },
        update: {
          success: 'Order guardado con éxito',
        },
        destroy: {
          success: 'Order eliminado con éxito',
        },
        destroyAll: {
          success: 'Order(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Order',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Order',
        },
        view: {
          title: 'Ver Order',
        },
        importer: {
          title: 'Importar Orders',
          fileName: 'order_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    state: {
        name: 'state',
        label: 'States',
        menu: 'States',
        exporterFileName: 'exportacion_state',
        list: {
          menu: 'States',
          title: 'States',
        },
        create: {
          success: 'State guardado con éxito',
        },
        update: {
          success: 'State guardado con éxito',
        },
        destroy: {
          success: 'State eliminado con éxito',
        },
        destroyAll: {
          success: 'State(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar State',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'priceRange': 'Price',
          'price': 'Price',
          'status': 'Status',
          'type': 'Type',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo State',
        },
        view: {
          title: 'Ver State',
        },
        importer: {
          title: 'Importar States',
          fileName: 'state_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    attributeOptions: {
        name: 'attributeOptions',
        label: 'AttributeOptions',
        menu: 'AttributeOptions',
        exporterFileName: 'exportacion_attributeOptions',
        list: {
          menu: 'AttributeOptions',
          title: 'AttributeOptions',
        },
        create: {
          success: 'AttributeOptions guardado con éxito',
        },
        update: {
          success: 'AttributeOptions guardado con éxito',
        },
        destroy: {
          success: 'AttributeOptions eliminado con éxito',
        },
        destroyAll: {
          success: 'AttributeOptions(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar AttributeOptions',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'priceRange': 'Price',
          'price': 'Price',
          'keyword': 'Keyword',
          'item': 'Item',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo AttributeOptions',
        },
        view: {
          title: 'Ver AttributeOptions',
        },
        importer: {
          title: 'Importar AttributeOptions',
          fileName: 'attributeOptions_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    cart: {
        name: 'cart',
        label: 'Carts',
        menu: 'Carts',
        exporterFileName: 'exportacion_cart',
        list: {
          menu: 'Carts',
          title: 'Carts',
        },
        create: {
          success: 'Cart guardado con éxito',
        },
        update: {
          success: 'Cart guardado con éxito',
        },
        destroy: {
          success: 'Cart eliminado con éxito',
        },
        destroyAll: {
          success: 'Cart(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Cart',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Cart',
        },
        view: {
          title: 'Ver Cart',
        },
        importer: {
          title: 'Importar Carts',
          fileName: 'cart_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    paymentsettings: {
        name: 'paymentsettings',
        label: 'Paymentsettings',
        menu: 'Paymentsettings',
        exporterFileName: 'exportacion_paymentsettings',
        list: {
          menu: 'Paymentsettings',
          title: 'Paymentsettings',
        },
        create: {
          success: 'Paymentsettings guardado con éxito',
        },
        update: {
          success: 'Paymentsettings guardado con éxito',
        },
        destroy: {
          success: 'Paymentsettings eliminado con éxito',
        },
        destroyAll: {
          success: 'Paymentsettings(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Paymentsettings',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Paymentsettings',
        },
        view: {
          title: 'Ver Paymentsettings',
        },
        importer: {
          title: 'Importar Paymentsettings',
          fileName: 'paymentsettings_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    review: {
        name: 'review',
        label: 'Reviews',
        menu: 'Reviews',
        exporterFileName: 'exportacion_review',
        list: {
          menu: 'Reviews',
          title: 'Reviews',
        },
        create: {
          success: 'Review guardado con éxito',
        },
        update: {
          success: 'Review guardado con éxito',
        },
        destroy: {
          success: 'Review eliminado con éxito',
        },
        destroyAll: {
          success: 'Review(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Review',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Review',
        },
        view: {
          title: 'Ver Review',
        },
        importer: {
          title: 'Importar Reviews',
          fileName: 'review_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },
  },
  auth: {
    tenants: 'Espacios de trabajo',
    profile: {
      title: 'Perfil',
      success: 'Perfil actualizado con éxito',
    },
    createAnAccount: 'Crea una cuenta',
    rememberMe: 'Recuérdame',
    forgotPassword: 'Se te olvidó tu contraseña',
    signin: 'Iniciar Sesión',
    signup: 'Registrarse',
    signout: 'Desconectar',
    alreadyHaveAnAccount:
      '¿Ya tienes una cuenta? Registrarse.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Inicia sesión con otra cuenta',
    passwordChange: {
      title: 'Cambia la contraseña',
      success: 'Contraseña cambiada correctamente',
      mustMatch: 'Las contraseñas deben coincidir',
    },
    emailUnverified: {
      message:
        'Confirme su correo electrónico en <strong>{0}</strong> para continuar.',
      submit: 'Reenviar verificación de correo electrónico',
    },
    emptyPermissions: {
      message:
        'Aún no tienes permisos. Espera a que el administrador te otorgue privilegios.',
    },
    passwordResetEmail: {
      message:
        'Enviar contraseña restablecer correo electrónico',
      error: 'Correo electrónico no reconocido',
    },
    passwordReset: {
      message: 'Restablecer la contraseña',
    },
    emailAddressVerificationEmail: {
      error: 'Correo electrónico no reconocido',
    },
    verificationEmailSuccess:
      'Correo electrónico de verificación enviado con éxito',
    passwordResetEmailSuccess:
      'Correo electrónico de restablecimiento de contraseña enviado correctamente',
    passwordResetSuccess:
      'Contraseña cambiada correctamente',
    verifyEmail: {
      success: 'Correo electrónico verificado con éxito.',
      message:
        'Solo un momento, su correo electrónico está siendo verificado ...',
    },
  },
  tenant: {
    name: 'inquilino',
    label: 'Espacios de trabajo',
    menu: 'Espacios de trabajo',
    list: {
      menu: 'Espacios de trabajo',
      title: 'Espacios de trabajo',
    },
    create: {
      button: 'Crear espacio de trabajo',
      success: 'Espacio de trabajo guardado correctamente',
    },
    update: {
      success: 'Espacio de trabajo guardado correctamente',
    },
    destroy: {
      success: 'Espacio de trabajo eliminado correctamente',
    },
    destroyAll: {
      success:
        'Espacio(s) de trabajo eliminado(s) correctamente',
    },
    edit: {
      title: 'Editar espacio de trabajo',
    },
    fields: {
      id: 'Id',
      name: 'Nombre',
      url: 'URL',
      tenantName: 'Nombre del espacio de trabajo',
      tenantId: 'Espacio de trabajo',
      tenantUrl: 'URL del espacio de trabajo',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'Nuevo espacio de trabajo',
    },
    invitation: {
      view: 'Ver invitaciones',
      invited: 'Invitado',
      accept: 'Aceptar la invitacion',
      decline: 'Rechazar invitación',
      declined: 'Invitación rechazada con éxito',
      acceptWrongEmail:
        'Aceptar invitación con este correo electrónico',
    },
    select: 'Seleccionar espacio de trabajo',
    validation: {
      url:
        'La URL de su espacio de trabajo solo puede contener letras minúsculas, números y guiones (y debe comenzar con una letra o número).',
    },
  },
  roles: {
    admin: {
      label: 'Administración',
      description: 'Acceso total a todos los recursos.',
    },
    custom: {
      label: 'Rol personalizado',
      description: 'Acceso personalizado a recursos',
    },
  },
  user: {
    invite: 'Invitación',
    title: 'Usuarios',
    menu: 'Usuarios',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nombre completo',
      firstName: 'Nombre',
      lastName: 'Apellido',
      status: 'Estado',
      disabled: 'Discapacitado',
      phoneNumber: 'Número de teléfono',
      role: 'Rol',
      createdAt: 'Creado el',
      updatedAt: 'Actualizado el',
      roleUser: 'Rol/Usuario',
      roles: 'Roles',
      createdAtRange: 'Creado el',
      password: 'Contraseña',
      rememberMe: 'Recuérdame',
      oldPassword: 'Contraseña anterior',
      newPassword: 'Nueva contraseña',
      newPasswordConfirmation:
        'Nueva confirmación de contraseña',
    },
    enabled: 'Habilitado',
    disabled: 'Discapacitado',
    validations: {
      // eslint-disable-next-line
      email: 'El correo electrónico ${value} no es válido',
    },
    disable: 'Inhabilitar',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuario habilitado con éxito',
    doDisableSuccess: 'Usuario deshabilitado con éxito',
    doDisableAllSuccess:
      'Usuario(s) deshabilitado con éxito',
    doEnableAllSuccess:
      'Usuario(s) habilitados correctamente',
    doAddSuccess: 'Usuario(s) guardado correctamente',
    doUpdateSuccess: 'Usuario guardado con éxito',
    status: {
      active: 'Activo',
      invited: 'Invitado',
      'empty-permissions': 'Esperando permisos',
    },
    exporterFileName: 'usuarios_exportacion',
    doDestroySuccess: 'Usuario eliminado con éxito',
    doDestroyAllSelectedSuccess:
      'Usuario(s) eliminado correctamente',
    edit: {
      title: 'Editar Usuario',
    },
    new: {
      title: 'Invitar Usuario(s)',
      titleModal: 'Nuevo Usuario',
      emailsHint:
        'Separe varias direcciones de correo electrónico utilizando el carácter de coma.',
    },
    view: {
      title: 'Ver Usuario',
      activity: 'Actividad',
    },
    importer: {
      title: 'Importar Usuarios',
      fileName: 'users_import_template',
      hint:
        'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los roles deben ser los identificadores de roles separados por espacio.',
    },
    errors: {
      userAlreadyExists:
        'El usuario con este correo electrónico ya existe',
      userNotFound: 'Usuario no encontrado',
      disablingHimself: 'No puedes inhabilitarte',
      revokingOwnPermission:
        'No puede revocar su propio permiso de administrador',
    },
  },
  plan: {
    menu: 'Planes',
    title: 'Planes',
    free: {
      label: 'Gratis',
      price: '$0',
    },
    growth: {
      label: 'Crecimiento',
      price: '$10',
    },
    enterprise: {
      label: 'Empresa',
      price: '$50',
    },
    pricingPeriod: '/mes',
    current: 'Plan Actual',
    subscribe: 'Suscribir',
    manage: 'Administrar Suscripción',
    cancelAtPeriodEnd:
      'Este plan se cancelará al final del período.',
    somethingWrong:
      'Hay algo mal con su suscripción. Vaya a administrar la suscripción para obtener más detalles.',
    notPlanUser:
      'No eres el administrador de esta suscripción.',
    demoHintHtml:
      'Sugerencia: Use esas <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">tarjetas de prueba</a> para la demostración.',
  },
  auditLog: {
    menu: 'Registros de auditoría',
    title: 'Registros de auditoría',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separe varias entidades con el carácter de coma.',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidad',
      entityNames: 'Entidades',
      entityId: 'ID de entidad',
      action: 'Acción',
      values: 'Valores',
      timestamp: 'Fecha',
      createdByEmail: 'Email del usuario',
    },
  },
  settings: {
    title: 'Configuraciones',
    menu: 'Configuraciones',
    save: {
      success:
        'Configuración guardada con éxito. La página se volverá a cargar en {0} segundos para que los cambios surtan efecto.',
    },
    fields: {
      theme: 'Tema',
      logos: 'Logo',
      backgroundImages: 'Imagen de fondo',
    },
    colors: {
      default: 'Oscuro',
      light: 'Claro',
      cyan: 'Cian',
      'geek-blue': 'Geek Blue',
      gold: 'Oro',
      lime: 'Lima',
      magenta: 'Magenta',
      orange: 'Naranja',
      'polar-green': 'Verde polar',
      purple: 'Púrpura',
      red: 'Rojo',
      volcano: 'Volcán',
      yellow: 'Amarillo',
    },
  },
  dashboard: {
    menu: 'Tablero',
    message:
      'Esta página utiliza datos falsos solo con fines de demostración. Puede editarlo en frontend/view/dashboard/DashboardPage.ts.',
    charts: {
      day: 'Día',
      red: 'Rojo',
      green: 'Verde',
      yellow: 'Amarillo',
      grey: 'Gris',
      blue: 'Azul',
      orange: 'Naranja',
      months: {
        '1': 'Enero',
        '2': 'Febrero',
        '3': 'Marzo',
        '4': 'Abril',
        '5': 'Mayo',
        '6': 'Junio',
        '7': 'Julio',
      },
      eating: 'Comiendo',
      drinking: 'Bebiendo',
      sleeping: 'Dormiendo',
      designing: 'Diseñando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Corriendo',
      customer: 'Cliente',
    },
  },
  errors: {
    '403': 'Lo sentimos, no tienes acceso a esta página',
    '404': 'Lo sentimos, la página que visitaste no existe',
    '500': 'Lo sentimos, el servidor informa un error',
    '429':
      'Demasiadas solicitudes. Por favor, inténtelo de nuevo más tarde.',
    backToHome: 'Volver a Inicio',
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Ocurrió un error',
    },
    defaultErrorMessage: 'Ops, ocurrió un error',
  },

  preview: {
    error:
      'Lo sentimos, esta operación no está permitida en el modo de vista previa.',
  },
  
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} no es válido',
      required: '${path} es obligatorio',
      oneOf:
        '${path} debe ser uno de los siguientes valores: ${values}',
      notOneOf:
        '${path} no debe ser uno de los siguientes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} debe ser un ${type}`;
      },
    },
    string: {
      length:
        '${path} debe tener exactamente ${length} caracteres',
      min: '${path} debe tener al menos ${min} caracteres',
      max:
        '${path} debe tener como máximo ${max} caracteres',
      matches:
        '${path} debe coincidir con lo siguiente: "${regex}"',
      email:
        '${path} debe ser un correo electrónico válido',
      url: '${path} debe ser una URL válida',
      trim: '${path} debe ser una cadena recortada',
      lowercase:
        '${path} debe ser una cadena en minúsculas',
      uppercase: '${path} debe ser una cadena en mayúscula',
      selected: '${path} debe estar seleccionado',
    },
    number: {
      min: '${path} debe ser mayor o igual que ${min}',
      max: '${path} debe ser menor o igual que ${max}',
      lessThan: '${path} debe ser menor que ${less}',
      moreThan: '${path} debe ser mayor que ${more}',
      notEqual: '${path} no debe ser igual a ${notEqual}',
      positive: '${path} debe ser un número positivo',
      negative: '${path} debe ser un número negativo',
      integer: '${path} debe ser un número entero',
    },
    date: {
      min: 'El campo ${path} debe ser posterior a ${min}',
      max: 'El campo ${path} debe ser anterior a ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        'El campo ${path} no puede tener claves no especificadas en la forma del objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} es obligatorio`
          : `'El campo ${path} debe tener al menos ${min} elementos`,
      max:
        'El campo ${path} debe tener elementos menores o iguales a ${max}',
    },
  },
  fileUploader: {
    upload: 'Subir',
    image: 'Debes subir una imagen',
    size:
      'El archivo es muy grande. El tamaño máximo permitido es {0}',
    formats: 'Formato inválido. Debe ser uno de: {0}.',
  },
  importer: {
    line: 'Línea',
    status: 'Estado',
    pending: 'Pendiente',
    imported: 'Importado',
    error: 'Error',
    total: '{0} importado, {1} pendiente y {2} con error',
    importedMessage: 'Procesado {0} de {1}.',
    noNavigateAwayMessage:
      'No navegue fuera de esta página o la importación se detendrá.',
    completed: {
      success:
        'Importación completada. Todas las filas se importaron correctamente.',
      someErrors:
        'Procesamiento completado, pero algunas filas no se pudieron importar.',
      allErrors:
        'Importación fallida. No hay filas válidas.',
    },
    form: {
      downloadTemplate: 'Descargar la plantilla',
      hint:
        'Haga clic o arrastre el archivo a esta área para continuar.',
    },
    list: {
      discardConfirm:
        '¿Estás seguro? Los datos no importados se perderán.',
    },
    errors: {
      invalidFileEmpty: 'El archivo esta vacio',
      invalidFileExcel:
        'Solo se permiten archivos de Excel(.xlsx)',
      invalidFileUpload:
        'Archivo inválido. Asegúrese de estar utilizando la última versión de la plantilla.',
      importHashRequired: 'Se requiere hash de importación',
      importHashExistent:
        'Los datos ya han sido importados',
    },
  },

  autocomplete: {
    loading: 'Cargando...',
    noOptions: 'Datos no encontrados',
  },
  imagesViewer: {
    noImage: 'Sin imágen',
  },
  table: {
    noData: 'No se encontraron registros',
    loading: 'Cargando...',
  },
  pagination: {
    items_per_page: '/ página',
    jump_to: 'Ir',
    jump_to_confirm: 'confirmar',
    page: '',

    prev_page: 'Pagina anterior',
    next_page: 'Siguiente página',
    prev_5: '5 páginas anteriores',
    next_5: '5 páginas siguientes',
    prev_3: '3 páginas anteriores',
    next_3: 'Siguientes 3 páginas',
  },
};

export default es;
