import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/attributeOptions/view/attributeOptionsViewActions';
import selectors from 'src/modules/attributeOptions/view/attributeOptionsViewSelectors';
import AttributeOptionsView from 'src/view/attributeOptions/view/AttributeOptionsView';
import AttributeOptionsViewToolbar from 'src/view/attributeOptions/view/AttributeOptionsViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AttributeOptionsPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.attributeOptions.menu'), '/attribute-options'],
          [i18n('entities.attributeOptions.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.attributeOptions.view.title')}
        </PageTitle>

        <AttributeOptionsViewToolbar match={match} />

        <AttributeOptionsView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default AttributeOptionsPage;
