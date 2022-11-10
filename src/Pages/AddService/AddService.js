import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import toast, { Toaster } from 'react-hot-toast';


const AddService = () => {
    const notify = () => toast('service successfully added');

    const handleAddService = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.value;
        const rating = event.target.rating.value;
        const price = event.target.price.value;
        const details = event.target.details.value;
        console.log(name, price);

        const serviceDetails = {

            s_name: name,
            s_image: image,
            s_rating: rating,
            s_price: price,
            s_details: details
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    event.target.reset();
                }
            })
            .catch(error => console.error(error));
            notify()
    }
    return (
        <div>
            <Helmet>
                <title>SNS-add-service</title>
            </Helmet>
            <form onSubmit={handleAddService} action="">
                <input type="text" name="name" id="name" placeholder="Type service name" className="input input-bordered input-warning w-full max-w-xs" required />
                <input type="text" name="image" id="image" placeholder="input image url" className="input input-bordered input-warning w-full max-w-xs" required />
                <input type="text" name="rating" id="rating" placeholder="input service rating" className="input input-bordered input-warning w-full max-w-xs" required />
                <input type="text" name="price" id="price" placeholder="input price" className="input input-bordered input-warning w-full max-w-xs" required />
                <textarea type="text" name="details" id="details" placeholder="Give service details" className="input input-bordered input-warning w-full max-w-xs" required />
                <input className="mt-3 btn btn-primary" type="submit" /><Toaster />
            </form>
        </div>
    );
};

export default AddService;