import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import brandsEnumerators from 'src/modules/brands/brandsEnumerators';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.brands.fields.name'),
    {
      "required": true
    },
  ),
  slug: yupFormSchemas.string(
    i18n('entities.brands.fields.slug'),
    {},
  ),
  photo: yupFormSchemas.images(
    i18n('entities.brands.fields.photo'),
    {
      "required": true
    },
  ),
  status: yupFormSchemas.enumerator(
    i18n('entities.brands.fields.status'),
    {
      "required": true,
      "options": brandsEnumerators.status
    },
  ),
  isPopular: yupFormSchemas.enumerator(
    i18n('entities.brands.fields.isPopular'),
    {
      "options": brandsEnumerators.isPopular
    },
  ),
});

function BrandsForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      slug: record.slug,
      photo: record.photo || [],
      status: record.status,
      isPopular: record.isPopular,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
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
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="name"
                label={i18n('entities.brands.fields.name')}
                required={true}
              autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="slug"
                label={i18n('entities.brands.fields.slug')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ImagesFormItem
                name="photo"
                label={i18n('entities.brands.fields.photo')}
                required={true}
                storage={Storage.values.brandsPhoto}
                max={undefined}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="status"
                label={i18n('entities.brands.fields.status')}
                options={brandsEnumerators.status.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.brands.enumerators.status.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="isPopular"
                label={i18n('entities.brands.fields.isPopular')}
                options={brandsEnumerators.isPopular.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.brands.enumerators.isPopular.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
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

export default BrandsForm;
