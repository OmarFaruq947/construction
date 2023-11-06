import React from 'react';
import Heading from '../../components/Heading/Heading';
import BookingForm from './BookingForm';

const Booking = () => {
    const description = 'Welcome to Wecons service booking form for all your construction needs. Whether youre planning a new build, renovation, or any construction project, our expert team is here to assist you. Please fill out the form below to request a booking, and we will get in touch with you shortly to discuss your project in detail and provide you with a customized quote.'
    return (
        <div>
            <Heading text1='Booking' text2='Form' description={description} />
           <BookingForm />
            <p>Reservation</p>
            <p>Purchasing  </p>
        </div>
    );
};

export default Booking;