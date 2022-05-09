import React from 'react';
import { i18n } from 'src/i18n';
import CampaignListFilter from 'src/view/campaign/list/CampaignListFilter';
import CampaignListTable from 'src/view/campaign/list/CampaignListTable';
import CampaignListToolbar from 'src/view/campaign/list/CampaignListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CampaignListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.campaign.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.campaign.list.title')}
        </PageTitle>

        <CampaignListToolbar />
        <CampaignListFilter />
        <CampaignListTable />
      </ContentWrapper>
    </>
  );
}

export default CampaignListPage;
