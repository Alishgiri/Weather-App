import React, { Component } from "react";
import FormRow from "./FormRow";

import "./style.css";

class CustomerEligibilityVerificationForm extends Component {
  render() {
    const { customer, onDismiss, onUpdate } = this.props;
    return (
      <div className="form-modal">
        <div className="form-overlay" onClick={onDismiss} />
        <div className="form-body">
          <div className="form-header">
            <span>Customer Eligibility Verification (Editable)</span>
          </div>
          <FormRow title="Noblr Policy ID" value={customer.noblrPlicyId} />
          <FormRow title="First Name" value={customer.firstName} />
          <FormRow title="Last Name" value={customer.lastName} />
          <FormRow title="Email Address" value={customer.email} />
          <FormRow title="Phone Number" value={customer.phoneNumber} />
          <FormRow title="Member ID" value={customer.noblrPlicyId} />
          <FormRow title="DOB" value={customer.dob} />
          <FormRow title="Zip Code" value={customer.zipCode} />
          <FormRow
            title="multipleSearchIndicator"
            value={customer.multipleSearchIndicator ? "YES" : "NO"}
          />
          <FormRow title="Purchased Date" value={customer.purchaseDate} />
          <div className="form-footer">
            <button onClick={onDismiss} className="form-btn btn-cancel">
              Cancel
            </button>
            <button onUpdate={onUpdate} className="form-btn btn-update">
              Update
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerEligibilityVerificationForm;
