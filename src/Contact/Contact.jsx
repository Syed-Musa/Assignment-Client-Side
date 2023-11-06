import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaUserClock } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';

const Contact = () => {
    return (
        <div className='mx-auto max-w-7xl'>
            <h2 className='text-5xl text-emerald-900 italic font-bold text-center uppercase'>Contact Us</h2>
            <div className='bg-gradient-to-r from-blue-600 to-sky-400 text-white p-14 flex lg:flex-row flex-col justify-center items-center gap-10 my-14'>
            <div>
                <FaUserClock className='text-yellow-600 text-4xl'></FaUserClock>
            </div>
            <div>
                <h3 className='text-xl italic'>We are open Monday to Friday</h3>
                <h2 className='text-2xl font-bold italic'>11:00 am - 8:00 pm</h2>
            </div>

            <div>
                <BsFillTelephoneFill className='text-yellow-600 text-4xl'></BsFillTelephoneFill>
            </div>
            <div>
                <h3 className='text-xl italic'>Have a question</h3>
                <h2 className='text-2xl font-bold italic'>+2546 251 2658</h2>
            </div>

            <div>
                <ImLocation className='text-yellow-600 text-4xl'></ImLocation>
            </div>
            <div>
                <h3 className='text-xl italic'>Need a repair? our address</h3>
                <h2 className='text-2xl font-bold italic'>Liza Street, New York</h2>
            </div>
        </div>
        </div>
    );
};

export default Contact;