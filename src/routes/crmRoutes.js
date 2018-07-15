import { addNewAddress, getAddresses, getAddressById, updateAddressById, deleteAddressById } from '../controllers/crmController';


const routes = (appserver) => {
    appserver.route('/contact/address')

    
    .get(getAddresses)
    //     (req, res, next) => {
    //     //middleware
    //     console.log(`Request from: ${req.originalUrl}`)
    //     console.log(`Request type: ${req.method}`)
    //     next();
    // }, (req, res, next) => {
    //     res.send('GET request success')
    // })

    .post(addNewAddress);
        
    //     (req, res) => {
    //     res.send('POST request success')
    // });

    appserver.route('/contact/address/:addressId')

    .get(getAddressById)

    .put(updateAddressById)
    //     (req, res) => {
    //     res.send('PUT request success')
    // })
    
    .delete(deleteAddressById);
        
    //     (req, res) => {
    //     res.send('DELETE request success')
    // });
}

export default routes;