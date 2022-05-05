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
import paymentsettingsEnumerators from 'src/modules/paymentsettings/paymentsettingsEnumerators';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.paymentsettings.fields.name'),
    {},
  ),
  information: yupFormSchemas.string(
    i18n('entities.paymentsettings.fields.information'),
    {},
  ),
  uniqueKeywords: yupFormSchemas.string(
    i18n('entities.paymentsettings.fields.uniqueKeywords'),
    {},
  ),
  photo: yupFormSchemas.images(
    i18n('entities.paymentsettings.fields.photo'),
    {},
  ),
  text: yupFormSchemas.string(
    i18n('entities.paymentsettings.fields.text'),
    {},
  ),
  status: yupFormSchemas.enumerator(
    i18n('entities.paymentsettings.fields.status'),
    {
      options: paymentsettingsEnumerators.status,
    },
  ),
  type: yupFormSchemas.string(
    i18n('entities.paymentsettings.fields.type'),
    {},
  ),
});

function PaymentsettingsForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      information: record.information,
      uniqueKeywords: record.uniqueKeywords,
      photo: record.photo || [],
      text: record.text,
      status: record.status,
      type: record.type,
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
                label={i18n(
                  'entities.paymentsettings.fields.name',
                )}
                required={false}
                autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="information"
                label={i18n(
                  'entities.paymentsettings.fields.information',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="uniqueKeywords"
                label={i18n(
                  'entities.paymentsettings.fields.uniqueKeywords',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ImagesFormItem
                name="photo"
                label={i18n(
                  'entities.paymentsettings.fields.photo',
                )}
                required={false}
                storage={
                  Storage.values.paymentsettingsPhoto
                }
                max={undefined}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="text"
                label={i18n(
                  'entities.paymentsettings.fields.text',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="status"
                label={i18n(
                  'entities.paymentsettings.fields.status',
                )}
                options={paymentsettingsEnumerators.status.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.paymentsettings.enumerators.status.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="type"
                label={i18n(
                  'entities.paymentsettings.fields.type',
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
              />
              &nbsp;
              {i18n('common.save')}
            </button>

            <button
              className="btn btn-light"
              type="button"
              disabled={props.saveLoading}
              onClick={onReset}
            >
              <i className="fas fa-undo"></i>
              &nbsp;
              {i18n('common.reset')}
            </button>

            {props.onCancel ? (
              <button
                className="btn btn-light"
                type="button"
                disabled={props.saveLoading}
                onClick={() => props.onCancel()}
              >
                <i className="fas fa-times"></i>&nbsp;
                {i18n('common.cancel')}
              </button>
            ) : null}
          </div>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default PaymentsettingsForm;
