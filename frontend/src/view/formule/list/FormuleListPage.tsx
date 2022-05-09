import React from 'react';
import { i18n } from 'src/i18n';
import FormuleListFilter from 'src/view/formule/list/FormuleListFilter';
import FormuleListTable from 'src/view/formule/list/FormuleListTable';
import FormuleListToolbar from 'src/view/formule/list/FormuleListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FormuleListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.formule.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.formule.list.title')}
        </PageTitle>

        <FormuleListToolbar />
        <FormuleListFilter />
        <FormuleListTable />
      </ContentWrapper>
    </>
  );
}

export default FormuleListPage;
