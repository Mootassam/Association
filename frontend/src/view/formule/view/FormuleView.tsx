import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import MembershipViewItem from 'src/view/membership/view/MembershipViewItem';

function FormuleView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.formule.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.formule.fields.description')}
        value={record.description}
      />

      <TextViewItem
        label={i18n('entities.formule.fields.amount')}
        value={record.amount}
      />

      <MembershipViewItem
        label={i18n('entities.formule.fields.membership')}
        value={record.membership}
      />
    </ViewWrapper>
  );
}

export default FormuleView;
