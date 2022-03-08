import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auth/authActions';
import selectors from 'src/modules/auth/authSelectors';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import Content from 'src/view/auth/styles/Content';
import Logo from 'src/view/auth/styles/Logo';
import OtherActions from 'src/view/auth/styles/OtherActions';
import Wrapper from 'src/view/auth/styles/Wrapper';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yupFormSchemas.string(i18n('user.fields.email'), {
    required: true,
  }),
  password: yupFormSchemas.string(
    i18n('user.fields.password'),
    {
      required: true,
    },
  ),
});

function SignupPage() {
  const dispatch = useDispatch();
  const location = useLocation();

  const loading = useSelector(selectors.selectLoading);

  const externalErrorMessage = useSelector(
    selectors.selectErrorMessage,
  );

  const emailFromInvitation = queryString.parse(
    location.search,
  ).email;

  const backgroundImageUrl = useSelector(
    selectors.selectBackgroundImageUrl,
  );
  const logoUrl = useSelector(selectors.selectLogoUrl);

  useEffect(() => {
    dispatch(actions.doClearErrorMessage());
  }, [dispatch]);

  const [initialValues] = useState({
    email: emailFromInvitation || '',
    password: '',
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: initialValues,
  });

  const onSubmit = ({ email, password }) => {
    dispatch(
      actions.doRegisterEmailAndPassword(email, password),
    );
  };

  return (
    <Wrapper
      style={{
        backgroundImage: `url(${
          backgroundImageUrl || '/images/signup.jpg'
        })`,
      }}
    >
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
                        <label htmlFor="email">Email</label>
                        <InputFormItem
                          name="email"
                          placeholder={i18n(
                            'user.fields.email',
                          )}
                          autoComplete="email"
                          autoFocus
                          externalErrorMessage={
                            externalErrorMessage
                          }
                        />
                      </div>

                      <div className="field padding-bottom--24">
                        <div className="grid--50-50">
                          <label htmlFor="password">
                            Password
                          </label>
                        </div>
                        <InputFormItem
                          name="password"
                          placeholder={i18n(
                            'user.fields.password',
                          )}
                          autoComplete="password"
                          type="password"
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
                      <div className="field">
                        <ButtonIcon loading={loading} />
                        {externalErrorMessage && (
                          <a
                            className="ssolink"
                            style={{ color: 'red' }}
                          >
                            {externalErrorMessage}
                          </a>
                        )}
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
                      {i18n('auth.alreadyHaveAnAccount')}
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

export default SignupPage;
