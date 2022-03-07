import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auth/authActions';
import selectors from 'src/modules/auth/authSelectors';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import Content from 'src/view/auth/styles/Content';
import Logo from 'src/view/auth/styles/Logo';
import OtherActions from 'src/view/auth/styles/OtherActions';
import Wrapper from 'src/view/auth/styles/Wrapper';
import I18nFlags from 'src/view/layout/I18nFlags';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import SocialButtons from 'src/view/auth/styles/SocialButtons';
import config from 'src/config';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Message from 'src/view/shared/message';

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
  rememberMe: yupFormSchemas.boolean(
    i18n('user.fields.rememberMe'),
  ),
});

function SigninPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const loading = useSelector(selectors.selectLoading);

  const { socialErrorCode } = queryString.parse(
    location.search,
  );

  const externalErrorMessage = useSelector(
    selectors.selectErrorMessage,
  );

  const backgroundImageUrl = useSelector(
    selectors.selectBackgroundImageUrl,
  );
  const logoUrl = useSelector(selectors.selectLogoUrl);

  useEffect(() => {
    dispatch(actions.doClearErrorMessage());
  }, [dispatch]);

  useEffect(() => {
    if (socialErrorCode) {
      if (socialErrorCode === 'generic') {
        Message.error(i18n('errors.defaultErrorMessage'));
      } else {
        Message.error(
          i18n(`auth.social.errors.${socialErrorCode}`),
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [initialValues] = useState({
    email: '',
    password: '',
    rememberMe: true,
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: initialValues,
  });

  const onSubmit = ({ email, password, rememberMe }) => {
    dispatch(
      actions.doSigninWithEmailAndPassword(
        email,
        password,
        rememberMe,
      ),
    );
  };

  return (
    <Wrapper
      style={{
        backgroundImage: `url(${
          backgroundImageUrl || '/images/signin.jpg'
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
                          <div className="reset-pass">
                            <a href="#">
                              <Link
                                className="btn btn-sm btn-link"
                                style={{ float: 'right' }}
                                to="/auth/forgot-password"
                              >
                                {i18n(
                                  'auth.forgotPassword',
                                )}
                              </Link>
                            </a>
                          </div>
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
                      <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                        <label htmlFor="checkbox">
                          <input
                            type="checkbox"
                            id={'rememberMe'}
                            name={'rememberMe'}
                            ref={form.register}
                          />
                          Stay signed in for a week
                        </label>
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
                  Don't have an account?{' '}
                  <a href="">
                    <Link
                      className="btn btn-sm btn-link"
                      to="/auth/signup"
                    >
                      {i18n('auth.createAnAccount')}
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

export default SigninPage;
