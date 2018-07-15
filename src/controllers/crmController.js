import mongo from 'mongoose';
import {AddressSchema} from '../models/crmModels';

const Address = mongo.model('Address', AddressSchema);

export const addNewAddress = (req, res) => {

    let newAddress = new Address(req.body);

    newAddress.save((err, Address) => {
        if (err) {
            res.send(err);
        }
        res.status(201).json(Address);
       
        
    });
};

export const getAddresses = (req, res) => {

    Address.find({}, (err, address) =>{
        if (err) {
            res.send(err);
        }
        res.json(address);

    });
};

export const getAddressById = (req, res) => {

        Address.findById(req.params.addressId, (err, address) => {
            if (err) {
                res.send(err);
            }
            res.json(address);
    
});

};

export const updateAddressById = (req, res) => {

    Address.findOneAndUpdate({_id: req.params.addressId}, req.body, {new: true}, (err, address) => {
        if (err) {
            res.send(err);
        }
        res.json(address);

});

};


export const deleteAddressById = (req, res) => {

    Address.findOneAndRemove({_id: req.params.addressId }, (err, address) => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Deleted'});

});

};
    

   
       
   
