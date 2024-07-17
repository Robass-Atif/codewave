"use client";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Import emailjs-com for EmailJS integration

function CommentForm() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [comment, setComment] = useState<string>('');

    const templateParams = {
        from_name: name,
        from_email: email,
        message: comment
    };

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.send('service_pcimnyt', 'template_mfnpm8o', templateParams, 'VQIN2GoyfiZ9nXTGV')
        .then((response) => {
            console.log('Email successfully sent!', response);
            setComment('');
            setEmail('');
            setName('');
             // show success message
            alert('Your message has been sent successfully. We will get back to you soon.');
            
             
        })
        .catch((error) => {
            console.error('Failed to send email. Error:', error);
            // Optionally, handle the error or provide user feedback
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
        
    };

    return (
        <form className="bg-blue-600 w-full h-screen xl:pt-40 md:pt-14 sm:pt-8" onSubmit={sendEmail}>
            <div className="card bg-white rounded-lg shadow-lg p-6 mx-auto w-80 mt-30  mb-4">
                <h2 className="title text-2xl font-semibold text-center mb-4">Leave a Comment</h2>
                <div className="form">
                    <div className="group mb-4">
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
                        >
                            
                        </label>
                    </div>
                    <div className="group mb-4">
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
                        >
                            
                        </label>
                    </div>
                    <div className="group mb-4">
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
                        >
                            
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg py-2.5 px-5 text-center transition-all duration-300 ease-in-out"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
}

export default CommentForm;
