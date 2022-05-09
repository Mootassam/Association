import React from 'react';
import { i18n } from 'src/i18n';
import NewsListFilter from 'src/view/news/list/NewsListFilter';
import NewsListTable from 'src/view/news/list/NewsListTable';
import NewsListToolbar from 'src/view/news/list/NewsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function NewsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.news.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.news.list.title')}
        </PageTitle>

        <NewsListToolbar />
        <NewsListFilter />
        <NewsListTable />
      </ContentWrapper>
    </>
  );
}

export default NewsListPage;
