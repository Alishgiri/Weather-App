import React, { Component } from "react";

import CustomerEligibilityVerificationForm from "../../components/usaa_project/custoemr_eligiblity_verification_form/CustomerEligibilityVerificationForm";

import "./style.css";

class UsaaProject extends Component {
  state = { customersList: null, showCustomerEligiblilityFormWith: null };

  componentDidMount() {
    this.fetchCustomers();
  }

  async fetchCustomers() {
    try {
      setTimeout(() => {
        const customersList = [
          {
            id: 1,
            noblrPlicyId: 3242,
            oneIncPolicyNum: 3243,
            firstName: "Kane",
            lastName: "Matt",
            dob: "1991-05-06",
            street1: "1929 Preston Rd",
            street2: "Sle 250",
            city: "Bridge City",
            State: "TX",
            zipCode: 12345,
            email: "kat@gmail.com",
            phoneNumber: 3412421321,
            multipleSearchIndicator: true,
            purchaseDate: "11/09/2021",
            policyEffectiveDate: "11/09/2021",
            termEndDate: "11/09/2021",
            dueDate: "11/09/2021",
          },
          {
            id: 2,
            noblrPlicyId: 3242,
            oneIncPolicyNum: 3243,
            firstName: "Kane",
            lastName: "Matt",
            dob: "1991-05-06",
            street1: "1929 Preston Rd",
            street2: "Sle 250",
            city: "Bridge City",
            State: "TX",
            zipCode: 12345,
            email: "kat@gmail.com",
            phoneNumber: 3412421321,
            multipleSearchIndicator: true,
            purchaseDate: "11/09/2021",
            policyEffectiveDate: "11/09/2021",
            termEndDate: "11/09/2021",
            dueDate: "11/09/2021",
          },
          {
            id: 3,
            noblrPlicyId: 3242,
            oneIncPolicyNum: 3243,
            firstName: "Kane",
            lastName: "Matt",
            dob: "1991-05-06",
            street1: "1929 Preston Rd",
            street2: "Sle 250",
            city: "Bridge City",
            State: "TX",
            zipCode: 12345,
            email: "kat@gmail.com",
            phoneNumber: 3412421321,
            multipleSearchIndicator: true,
            purchaseDate: "11/09/2021",
            policyEffectiveDate: "11/09/2021",
            termEndDate: "11/09/2021",
            dueDate: "11/09/2021",
          },
          {
            id: 4,
            noblrPlicyId: 3242,
            oneIncPolicyNum: 3243,
            firstName: "Kane",
            lastName: "Matt",
            dob: "1991-05-06",
            street1: "1929 Preston Rd",
            street2: "Sle 250",
            city: "Bridge City",
            State: "TX",
            zipCode: 12345,
            email: "kat@gmail.com",
            phoneNumber: 3412421321,
            multipleSearchIndicator: true,
            purchaseDate: "11/09/2021",
            policyEffectiveDate: "11/09/2021",
            termEndDate: "11/09/2021",
            dueDate: "11/09/2021",
          },
          {
            id: 5,
            noblrPlicyId: 3242,
            oneIncPolicyNum: 3243,
            firstName: "Kane",
            lastName: "Matt",
            dob: "1991-05-06",
            street1: "1929 Preston Rd",
            street2: "Sle 250",
            city: "Bridge City",
            State: "TX",
            zipCode: 12345,
            email: "kat@gmail.com",
            phoneNumber: 3412421321,
            multipleSearchIndicator: true,
            purchaseDate: "11/09/2021",
            policyEffectiveDate: "11/09/2021",
            termEndDate: "11/09/2021",
            dueDate: "11/09/2021",
          },
        ];
        this.setState({ customersList });
      }, 2000);
    } catch (e) {
      console.error(e);
    }
  }

  onEditCustomerEligiblilityForm = (data) => {
    this.setState({ showCustomerEligiblilityFormWith: data });
  };

  onDimissCustomerEligiblilityForm = () => {
    this.setState({ showCustomerEligiblilityFormWith: null });
  };

  render() {
    const { customersList, showCustomerEligiblilityFormWith } = this.state;
    return (
      <div className="container-fluid overflow-auto h-100">
        <table>
          <thead>
            <tr>
              <th>Noblr Policy ID</th>
              <th>One Inc Policy Number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>DOB</th>
              <th>Street 1</th>
              <th>Street 2</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
              <th>Email Address</th>
              <th>Phone Number</th>
              <th>Multiple Search Indicator</th>
              <th>Purchase Date</th>
              <th>Policy Effective Date</th>
              <th>Term End Date</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customersList &&
              customersList.map((customer) => {
                return (
                  <tr key={customer.id}>
                    <td>{customer.noblrPlicyId}</td>
                    <td>{customer.oneIncPolicyNum}</td>
                    <td>{customer.firstName}</td>
                    <td>{customer.lastName}</td>
                    <td>{customer.dob}</td>
                    <td>{customer.street1}</td>
                    <td>{customer.street2}</td>
                    <td>{customer.city}</td>
                    <td>{customer.State}</td>
                    <td>{customer.zipCode}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phoneNumber}</td>
                    <td>{customer.multipleSearchIndicator ? "YES" : "NO"}</td>
                    <td>{customer.purchaseDate}</td>
                    <td>{customer.policyEffectiveDate}</td>
                    <td>{customer.termEndDate}</td>
                    <td>{customer.dueDate}</td>
                    <td>
                      <button
                        className="btn-edit"
                        onClick={() => {
                          this.onEditCustomerEligiblilityForm(customer);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {!customersList && (
          <div id="loading-indicator">
            <span>Loading...</span>
          </div>
        )}
        {showCustomerEligiblilityFormWith && (
          <CustomerEligibilityVerificationForm
            onUpdate={() => {}}
            customer={showCustomerEligiblilityFormWith}
            onDismiss={this.onDimissCustomerEligiblilityForm}
          />
        )}
      </div>
    );
  }
}

export default UsaaProject;
