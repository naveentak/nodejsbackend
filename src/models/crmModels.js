import mongo from 'mongoose';

const Schema = mongo.Schema;

export const AddressSchema = new Schema({
    addressId:{
        type: String,
        required: 'Auto generated'
    },
    unitNumber: {
        type: String
    },
    complexName: {
        type: String
    },
    streetName: {
        type: String
    },
    streetNumber: {
        type: String
    },
    suburbName: {
        type: String
    },
    city: {
        type: String
    },
    postalCode: {
        type: String
    },
    province: {
        type: String
    },
    created_date:{
        type: Date,
        default: Date.now
    }
   

});

 
