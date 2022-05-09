import React from 'react';
import { i18n } from 'src/i18n';
import NewsCategoryListFilter from 'src/view/newsCategory/list/NewsCategoryListFilter';
import NewsCategoryListTable from 'src/view/newsCategory/list/NewsCategoryListTable';
import NewsCategoryListToolbar from 'src/view/newsCategory/list/NewsCategoryListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function NewsCategoryListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.newsCategory.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.newsCategory.list.title')}
        </PageTitle>

        <NewsCategoryListToolbar />
        <NewsCategoryListFilter />
        <NewsCategoryListTable />
      </ContentWrapper>
    </>
  );
}

export default NewsCategoryListPage;
