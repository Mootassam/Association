import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import MembershipViewItem from 'src/view/membership/view/MembershipViewItem';

function CampaignView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.campaign.fields.name')}
        value={record.name}
      />

      <MembershipViewItem
        label={i18n('entities.campaign.fields.membership')}
        value={record.membership}
      />

      <TextViewItem
        label={i18n('entities.campaign.fields.status')}
        value={
          record.status &&
          i18n(
            `entities.campaign.enumerators.status.${record.status}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.campaign.fields.year')}
        value={record.year}
      />

      <TextViewItem
        label={i18n('entities.campaign.fields.startDate')}
        value={record.startDate}
      />

      <TextViewItem
        label={i18n('entities.campaign.fields.endDate')}
        value={record.endDate}
      />
    </ViewWrapper>
  );
}

export default CampaignView;
