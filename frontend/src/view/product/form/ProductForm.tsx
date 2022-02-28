import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import productEnumerators from 'src/modules/product/productEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import TaxesAutocompleteFormItem from 'src/view/taxes/autocomplete/TaxesAutocompleteFormItem';
import CategoryAutocompleteFormItem from 'src/view/category/autocomplete/CategoryAutocompleteFormItem';
import SubcategoriesAutocompleteFormItem from 'src/view/subcategories/autocomplete/SubcategoriesAutocompleteFormItem';
import ChieldCategoriesAutocompleteFormItem from 'src/view/chieldCategories/autocomplete/ChieldCategoriesAutocompleteFormItem';
import BrandsAutocompleteFormItem from 'src/view/brands/autocomplete/BrandsAutocompleteFormItem';
import GalleryAutocompleteFormItem from 'src/view/gallery/autocomplete/GalleryAutocompleteFormItem';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.product.fields.name'),
    {
      required: true,
    },
  ),
  slug: yupFormSchemas.string(
    i18n('entities.product.fields.slug'),
    {},
  ),
  tags: yupFormSchemas.string(
    i18n('entities.product.fields.tags'),
    {},
  ),
  video: yupFormSchemas.string(
    i18n('entities.product.fields.video'),
    {},
  ),
  specificationName: yupFormSchemas.string(
    i18n('entities.product.fields.specificationName'),
    {},
  ),
  specificationDesciption: yupFormSchemas.string(
    i18n('entities.product.fields.specificationDesciption'),
    {},
  ),
  isSpecification: yupFormSchemas.boolean(
    i18n('entities.product.fields.isSpecification'),
    {},
  ),
  details: yupFormSchemas.string(
    i18n('entities.product.fields.details'),
    {
      required: true,
    },
  ),
  photo: yupFormSchemas.images(
    i18n('entities.product.fields.photo'),
    {
      required: true,
    },
  ),
  discountPrice: yupFormSchemas.decimal(
    i18n('entities.product.fields.discountPrice'),
    {},
  ),
  previousPrice: yupFormSchemas.decimal(
    i18n('entities.product.fields.previousPrice'),
    {},
  ),
  stock: yupFormSchemas.integer(
    i18n('entities.product.fields.stock'),
    {},
  ),
  metaKeywords: yupFormSchemas.string(
    i18n('entities.product.fields.metaKeywords'),
    {},
  ),
  metaDesctiption: yupFormSchemas.string(
    i18n('entities.product.fields.metaDesctiption'),
    {},
  ),
  status: yupFormSchemas.enumerator(
    i18n('entities.product.fields.status'),
    {
      options: productEnumerators.status,
    },
  ),
  isType: yupFormSchemas.string(
    i18n('entities.product.fields.isType'),
    {},
  ),
  date: yupFormSchemas.date(
    i18n('entities.product.fields.date'),
    {},
  ),
  itemType: yupFormSchemas.enumerator(
    i18n('entities.product.fields.itemType'),
    {
      options: productEnumerators.itemType,
    },
  ),
  file: yupFormSchemas.files(
    i18n('entities.product.fields.file'),
    {},
  ),
  link: yupFormSchemas.string(
    i18n('entities.product.fields.link'),
    {},
  ),
  fileType: yupFormSchemas.enumerator(
    i18n('entities.product.fields.fileType'),
    {
      options: productEnumerators.fileType,
    },
  ),
  taxe: yupFormSchemas.relationToOne(
    i18n('entities.product.fields.taxe'),
    {},
  ),
  category: yupFormSchemas.relationToOne(
    i18n('entities.product.fields.category'),
    {},
  ),
  subcategory: yupFormSchemas.relationToOne(
    i18n('entities.product.fields.subcategory'),
    {
      required: true,
    },
  ),
  childcategory: yupFormSchemas.relationToOne(
    i18n('entities.product.fields.childcategory'),
    {
      required: true,
    },
  ),
  brand: yupFormSchemas.relationToOne(
    i18n('entities.product.fields.brand'),
    {},
  ),
  gallery: yupFormSchemas.relationToMany(
    i18n('entities.product.fields.gallery'),
    {},
  ),
});

function ProductForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      slug: record.slug,
      tags: record.tags,
      video: record.video,
      specificationName: record.specificationName,
      specificationDesciption:
        record.specificationDesciption,
      isSpecification: record.isSpecification,
      details: record.details,
      photo: record.photo || [],
      discountPrice: record.discountPrice,
      previousPrice: record.previousPrice,
      stock: record.stock,
      metaKeywords: record.metaKeywords,
      metaDesctiption: record.metaDesctiption,
      status: record.status,
      isType: record.isType,
      date: record.date
        ? moment(record.date, 'YYYY-MM-DD').toDate()
        : null,
      itemType: record.itemType,
      file: record.file || [],
      link: record.link,
      fileType: record.fileType,
      taxe: record.taxe,
      category: record.category,
      subcategory: record.subcategory,
      childcategory: record.childcategory,
      brand: record.brand,
      gallery: record.gallery || [],
    };
  });

  const [newForm, setNewform] = useState([
    { specificationName: '', specificationDesciption: '' },
  ]);

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const addFields = () => {
    setNewform([
      ...newForm,
      {
        specificationName: '',
        specificationDesciption: '',
      },
    ]);
  };

  const removeFields = (index) => {
    let formsDelete = [...newForm];
    formsDelete.splice(index, 1);
    setNewform(formsDelete);
  };
  const handleChange = (e, i) => {
    let formN = [...newForm];
    formN[i][e.target.name] = e.target.value;
    setNewform(formN);
  };
  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, {
      ...values,
      specifications: { ...newForm },
    });
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-8">
              <div className="">
                <InputFormItem
                  name="name"
                  label={i18n(
                    'entities.product.fields.name',
                  )}
                  required={true}
                  autoFocus
                />
              </div>
              <div className="">
                <InputFormItem
                  name="slug"
                  label={i18n(
                    'entities.product.fields.slug',
                  )}
                  required={false}
                />
              </div>
              <div className="">
                <InputFormItem
                  name="tags"
                  label={i18n(
                    'entities.product.fields.tags',
                  )}
                  required={false}
                />
              </div>

              <div className="">
                <SwitchFormItem
                  name="isSpecification"
                  label={i18n(
                    'entities.product.fields.isSpecification',
                  )}
                />
              </div>

              {newForm.map((item, index) => (
                <div
                  key={index + `div`}
                  style={{ display: 'flex' }}
                  className="app__specification"
                >
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      name="specificationName"
                      value={item.specificationName || ''}
                      placeholder={i18n(
                        'entities.product.fields.specificationName',
                      )}
                      onChange={(e) =>
                        handleChange(e, index)
                      }
                    />
                  </div>
                  <div className="col-5">
                    <input
                      className="form-control"
                      type="text"
                      name="specificationDesciption"
                      value={
                        item.specificationDesciption || ''
                      }
                      placeholder={i18n(
                        'entities.product.fields.specificationDesciption',
                      )}
                      onChange={(e) =>
                        handleChange(e, index)
                      }
                    />
                  </div>

                  {index ? (
                    <div className="input-group">
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => removeFields(index)}
                      >
                        <ButtonIcon iconClass="fas fa-minus" />
                      </button>
                    </div>
                  ) : (
                    <div className="input-group">
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => addFields()}
                      >
                        <ButtonIcon iconClass="fas fa-plus" />
                      </button>
                    </div>
                  )}
                </div>
              ))}

              <div id="specificationForm">
                <div className="">
                  <InputFormItem
                    name="metaKeywords"
                    label={i18n(
                      'entities.product.fields.metaKeywords',
                    )}
                    required={false}
                  />
                </div>
                <div className="">
                  <InputFormItem
                    name="metaDesctiption"
                    label={i18n(
                      'entities.product.fields.metaDesctiption',
                    )}
                    required={false}
                  />
                </div>

                <InputFormItem
                  name="details"
                  label={i18n(
                    'entities.product.fields.details',
                  )}
                  required={true}
                />

                <div className="">
                  <ImagesFormItem
                    name="photo"
                    label={i18n(
                      'entities.product.fields.photo',
                    )}
                    required={true}
                    storage={Storage.values.productPhoto}
                    max={undefined}
                  />
                </div>
              </div>

              <div className="">
                <GalleryAutocompleteFormItem
                  name="gallery"
                  label={i18n(
                    'entities.product.fields.gallery',
                  )}
                  required={false}
                  showCreate={!props.modal}
                  mode="multiple"
                />
              </div>
              <div className="">
                <SelectFormItem
                  name="fileType"
                  label={i18n(
                    'entities.product.fields.fileType',
                  )}
                  options={productEnumerators.fileType.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.product.enumerators.fileType.${value}`,
                      ),
                    }),
                  )}
                  required={false}
                />
              </div>
              <div className="">
                <InputFormItem
                  name="link"
                  label={i18n(
                    'entities.product.fields.link',
                  )}
                  required={false}
                />
              </div>
              <div className="">
                <FilesFormItem
                  name="file"
                  label={i18n(
                    'entities.product.fields.file',
                  )}
                  required={false}
                  storage={Storage.values.productFile}
                  max={undefined}
                  formats={undefined}
                />
              </div>
              <div className="">
                <SelectFormItem
                  name="status"
                  label={i18n(
                    'entities.product.fields.status',
                  )}
                  options={productEnumerators.status.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.product.enumerators.status.${value}`,
                      ),
                    }),
                  )}
                  required={false}
                />
              </div>
              <div className="">
                <InputFormItem
                  name="isType"
                  label={i18n(
                    'entities.product.fields.isType',
                  )}
                  required={false}
                />
              </div>
              <div className="">
                <DatePickerFormItem
                  name="date"
                  label={i18n(
                    'entities.product.fields.date',
                  )}
                  required={false}
                />
              </div>
              <div className="">
                <SelectFormItem
                  name="itemType"
                  label={i18n(
                    'entities.product.fields.itemType',
                  )}
                  options={productEnumerators.itemType.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.product.enumerators.itemType.${value}`,
                      ),
                    }),
                  )}
                  required={false}
                />
              </div>
            </div>

            <div className="col-4">
              <div className="">
                <InputFormItem
                  name="discountPrice"
                  label={i18n(
                    'entities.product.fields.discountPrice',
                  )}
                  required={false}
                />
              </div>
              <div className="">
                <InputFormItem
                  name="previousPrice"
                  label={i18n(
                    'entities.product.fields.previousPrice',
                  )}
                  required={false}
                />
              </div>
              <div className="">
                <CategoryAutocompleteFormItem
                  name="category"
                  label={i18n(
                    'entities.product.fields.category',
                  )}
                  required={true}
                  showCreate={!props.modal}
                />
              </div>
              <div className="">
                <SubcategoriesAutocompleteFormItem
                  name="subcategory"
                  label={i18n(
                    'entities.product.fields.subcategory',
                  )}
                  required={true}
                  showCreate={!props.modal}
                />
              </div>
              <div className="">
                <ChieldCategoriesAutocompleteFormItem
                  name="childcategory"
                  label={i18n(
                    'entities.product.fields.childcategory',
                  )}
                  required={true}
                  showCreate={!props.modal}
                />
              </div>
              <div className="">
                <BrandsAutocompleteFormItem
                  name="brand"
                  label={i18n(
                    'entities.product.fields.brand',
                  )}
                  required={false}
                  showCreate={!props.modal}
                />
              </div>
              <div className="">
                <InputNumberFormItem
                  name="stock"
                  label={i18n(
                    'entities.product.fields.stock',
                  )}
                  required={false}
                />
              </div>
              <div className="">
                <TaxesAutocompleteFormItem
                  name="taxe"
                  label={i18n(
                    'entities.product.fields.taxe',
                  )}
                  required={true}
                  showCreate={!props.modal}
                  mode="multiple"
                />
              </div>

              <div className="">
                <InputFormItem
                  name="video"
                  label={i18n(
                    'entities.product.fields.video',
                  )}
                  required={false}
                />
              </div>
            </div>
          </div>

          <div className="form-buttons">
            <button
              className="btn btn-primary"
              disabled={props.saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
            >
              <ButtonIcon
                loading={props.saveLoading}
                iconClass="far fa-save"
              />{' '}
              {i18n('common.save')}
            </button>

            <button
              className="btn btn-light"
              type="button"
              disabled={props.saveLoading}
              onClick={onReset}
            >
              <i className="fas fa-undo"></i>{' '}
              {i18n('common.reset')}
            </button>

            {props.onCancel ? (
              <button
                className="btn btn-light"
                type="button"
                disabled={props.saveLoading}
                onClick={() => props.onCancel()}
              >
                <i className="fas fa-times"></i>{' '}
                {i18n('common.cancel')}
              </button>
            ) : null}
          </div>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default ProductForm;
