import React from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import "./flutterwave.styles.scss"

const Flutterwave = ({ total, email, name }) => {
    const config = {
        public_key: 'FLWPUBK_TEST-4c3ed0af3ed7ac80eb05bac53336dd9b-X',
        tx_ref: Date.now(),
        amount: total,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: email,
            phonenumber: '',
            name: name,
        },
        customizations: {
            title: 'CRWN Clothing',
            description: 'Payment for items in cart',
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    };

    const fwConfig = {
        ...config,
        text: 'Pay with Flutterwave',
        callback: (response) => {
            console.log(response);
            closePaymentModal() // this will close the modal programmatically
        },
        onClose: () => { },
    };

    return (
        <div className="flutterwave-container">
            <FlutterWaveButton className="flutter-button" {...fwConfig} />
        </div>
    );
}

export default Flutterwave;