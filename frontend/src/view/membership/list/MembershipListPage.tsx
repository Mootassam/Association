import React from 'react';
import { i18n } from 'src/i18n';
import MembershipListFilter from 'src/view/membership/list/MembershipListFilter';
import MembershipListTable from 'src/view/membership/list/MembershipListTable';
import MembershipListToolbar from 'src/view/membership/list/MembershipListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MembershipListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.membership.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.membership.list.title')}
        </PageTitle>

        <MembershipListToolbar />
        <MembershipListFilter />
        <MembershipListTable />
      </ContentWrapper>
    </>
  );
}

export default MembershipListPage;
