import React from "react";

export default function Registration() {
    return (
        <section className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="w-1/3 bg-white rounded-lg shadow-md border p-4">
                <div className="flex flex-col items-center mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden ">
                        <img className="object-cover w-full h-full"
                             src="HyperFlow.png"
                             alt="logo"/>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mt-2">Create an account</h1>
                </div>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="firstname" className="block text-sm font-medium text-gray-900">First
                            Name</label>
                        <input type="text" id="firstname"
                               className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                               placeholder="John" required/>
                    </div>
                    <div>
                        <label htmlFor="lastname" className="block text-sm font-medium text-gray-900">Last Name</label>
                        <input type="text" id="lastname"
                               className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                               placeholder="Doe" required/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" id="email"
                               className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                               placeholder="name@company.com" required/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
                        <input type="password" id="password"
                               className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                               placeholder="••••••••" required/>
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-900">Confirm
                            password</label>
                        <input type="password" id="confirm-password"
                               className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                               placeholder="••••••••" required/>
                    </div>
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-900">Upload Profile
                            Image</label>
                        <input type="file" id="image"
                               className="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                               accept="image/*"/>
                    </div>
                    <button type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Create an
                        account
                    </button>
                    <p className="text-sm text-gray-500 text-center">
                        Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login
                        here</a>
                    </p>
                </form>
            </div>
        </section>
    );
}
