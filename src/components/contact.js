// const Contact=()=>{
//     return (
//         <div>
//             <h1 className="font-bold text-3xl p-4 m-4">contact us page</h1>
//             <form>
//                 <input type="text" className="border-black p-2 m-bg-gray-100 " placeholder="name"/>
//                 <input type="text" className="" placeholder="message"/>
//                 <button>submit</button>
//             </form>
//         </div>
//     );
// };
// export default Contact;
import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
            <form className="p-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea 
                        id="message" 
                        name="message" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        placeholder="Enter your message"
                        rows="4"
                    ></textarea>
                </div>
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
