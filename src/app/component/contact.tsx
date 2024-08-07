"use client";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Ring } from 'react-css-spinners'
import { set } from 'mongoose';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



function CommentForm() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const notify = () => {

    };


    const templateParams = {
        from_name: name,
        from_email: email,
        message: comment
    };

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send('service_pcimnyt', 'template_mfnpm8o', templateParams, 'VQIN2GoyfiZ9nXTGV')
            .then((response) => {

                console.log('Email successfully sent!', response);


            })
            .catch((error) => {
                console.error('Failed to send email. Error:', error);

            });


        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, comment }),
        });



        const { data } = await res.json();
        console.log(data);

        setComment('');
        setEmail('');
        setName('');
        setLoading(false);
        toast.success("Message send succesfully!", {
            position: "bottom-left",
        });



    };

    return (
        <form className="bg-blue-600 w-full h-screen flex justify-center items-center" onSubmit={sendEmail}>
            <div className="card bg-white rounded-lg shadow-lg p-6 w-80">
                <h2 className="title text-2xl font-semibold text-center mb-4">Leave a Comment</h2>
                <div className="form">
                    <div className="group mb-4 relative">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="p-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        <label
                            htmlFor="name"
                            className="absolute top-0 left-3 bg-white text-gray-500 text-sm transition-all duration-300 ease-in-out"
                        ></label>
                    </div>
                    <div className="group mb-4 relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="p-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        <label
                            htmlFor="email"
                            className="absolute top-0 left-3 bg-white text-gray-500 text-sm transition-all duration-300 ease-in-out"
                        ></label>
                    </div>
                    <div className="group mb-4 relative">
                        <textarea
                            id="comment"
                            name="comment"
                            placeholder="Comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            required
                            className="p-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        ></textarea>
                        <label
                            htmlFor="comment"
                            className="absolute top-0 left-3 bg-white text-gray-500 text-sm transition-all duration-300 ease-in-out"
                        ></label>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg py-2.5 px-5 text-center justify-items-center transition-all duration-300 ease-in-out flex items-center justify-center"
                        style={{ width: '100px', height: '40px' }} // Adjust these values as needed
                    >
                        {loading ? <Ring color="rgba(236,216,234,1)" size={20} thickness={7} /> : 'Submit'}
                    </button>

                    <ToastContainer />
                </div>
            </div>
        </form>

    );
}

export default CommentForm;
