import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auth/authActions';
import selectors from 'src/modules/auth/authSelectors';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import Content from 'src/view/auth/styles/Content';
import Wrapper from 'src/view/auth/styles/Wrapper';
import Logo from 'src/view/auth/styles/Logo';
import OtherActions from 'src/view/auth/styles/OtherActions';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yupFormSchemas.string(i18n('user.fields.email'), {
    required: true,
    max: 255,
  }),
});

function ForgotPasswordPage() {
  const dispatch = useDispatch();

  const loading = useSelector(
    selectors.selectLoadingPasswordResetEmail,
  );

  const backgroundImageUrl = useSelector(
    selectors.selectBackgroundImageUrl,
  );
  const logoUrl = useSelector(selectors.selectLogoUrl);

  const [initialValues] = useState(() => ({ email: '' }));

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: initialValues,
  });

  const onSubmit = async ({ email }) => {
    await dispatch(actions.doSendPasswordResetEmail(email));
    Object.keys(initialValues).forEach((key: any) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <Wrapper>
      <div className="login-root">
        <div
          className="box-root flex-flex flex-direction--column"
          style={{ minHeight: '100vh', flexGrow: 1 }}
        >
          <div
            className="box-root padding-top--24 flex-flex flex-direction--column"
            style={{ flexGrow: 1, zIndex: 9 }}
          >
            <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
              <h1>
                <a
                  href="http://blog.stackfindover.com/"
                  rel="dofollow"
                >
                  Stackfindover
                </a>
              </h1>
            </div>
            <div className="formbg-outer">
              <div className="formbg">
                <div className="formbg-inner padding-horizontal--48">
                  <span className="padding-bottom--15">
                    Sign in to your account
                  </span>
                  <FormProvider {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                    >
                      <div className="field padding-bottom--24">
                        <InputFormItem
                          name={'email'}
                          label={i18n('user.fields.email')}
                          autoComplete={'email'}
                          disabled={loading}
                          autoFocus
                        />
                      </div>

                      <div className="field padding-bottom--24">
                        <input
                          type="submit"
                          name="submit"
                          defaultValue="Continue"
                          disabled={loading}
                        />
                      </div>
                    </form>
                  </FormProvider>
                </div>
              </div>
              <div className="footer-link padding-top--24">
                <span>
                  <a href="">
                    <Link
                      className="btn btn-sm btn-link"
                      to="/auth/signin"
                    >
                      {i18n('common.cancel')}
                    </Link>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ForgotPasswordPage;
