import React from 'react';

const Terms = () => {
  return (
    <div className="terms-page" style={{ paddingTop: '100px', paddingBottom: '5rem', background: '#fcfcfc' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>

        {/* Terms and Conditions Section */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{
            background: '#ffc107',
            padding: '0.8rem 1.5rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '2rem',
            color: '#000',
            fontWeight: '600',
            fontSize: '1.2rem'
          }}>
            <span style={{ fontSize: '1.5rem' }}>›</span> Terms And Conditions
          </div>

          <div style={{ color: '#555', lineHeight: '1.8', fontSize: '1.05rem' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              The BK Education and Welfare Society takes your privacy seriously and treats all financial information about any transaction you have with the Foundation as highly confidential. In addition, BK Education and Welfare Society does not share e-mail addresses or phone numbers of any of our donors or constituents.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              The Foundation deeply values all contributions to sustain our mission. To protect the privacy of our donors and their special relationship with BK Education and Welfare Society, we maintain the following policies:
            </p>
            <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.8rem' }}>We may request personal information online, such as name, pan, address, phone number, email address, and credit card number ONLY for the purposes of accepting donations.</li>
              <li style={{ marginBottom: '0.8rem' }}>We will not release or use this information for any other purpose unless we have your consent.</li>
              <li style={{ marginBottom: '0.8rem' }}>We do not trade or sell your personal information with any other organisations.</li>
              <li style={{ marginBottom: '0.8rem' }}>Donors may request, at any time, to not receive our solicitations.</li>
              <li style={{ marginBottom: '0.8rem' }}>Donors may request to not receive certain mailings, such as our newsletter.</li>
            </ul>
          </div>
        </div>

        {/* Donation Refund Policy Section */}
        <div>
          <div style={{
            background: '#ffc107',
            padding: '0.8rem 1.5rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '2rem',
            color: '#000',
            fontWeight: '600',
            fontSize: '1.2rem'
          }}>
            <span style={{ fontSize: '1.5rem' }}>›</span> Donation Refund Policy
          </div>

          <div style={{ color: '#555', lineHeight: '1.8', fontSize: '1.05rem' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              BK Education and Welfare Society follows a reliable refund policy to let our donors feel privileged about their association with us. We take utmost care about processing donations as per the mandates signed by our donors in the donor forms, both offline and online. But in case of an unlikely event of an erroneous deduction or If the Donor wants to cancel/deduct the donation, The BK Education and Welfare Society will respond within 7 working days from the date of receiving the complaint from donor in writing (Email/Letter). The timely refund of the requested amount will depend on type of card used during transaction. We would require a proof of deduction of the donation amount and a written communication for refund from the donor within two days after donation.
            </p>
            <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.8rem' }}>Tax exemption certificate will be issued to the donor by the 10th day of next month.</li>
              <li style={{ marginBottom: '0.8rem' }}>In cases if the receipt already has been issued, then the Donor need to return the original receipt at our official address.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Terms;
