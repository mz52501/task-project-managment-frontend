import React from "react";

export default function Login() {
    return (
        <section className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="w-1/3 bg-white rounded-lg shadow-md border p-6">
                <div className="flex flex-col items-center mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden ">
                        <img className="w-full h-full object-cover"
                             src="HyperFlow.png" alt="logo"/>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mt-2">Sign in to your account</h1>
                </div>
                <form className="space-y-4">
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
                    {/*<div className="flex items-center justify-between">
                        <label className="flex items-center text-sm text-gray-500">
                            <input type="checkbox" className="mr-2 w-4 h-4"/> Remember me
                        </label>
                        <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                    </div>*/}
                    <button type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Sign in
                    </button>
                    <p className="text-sm text-gray-500 text-center">
                        Don’t have an account? <a href="/registration" className="text-blue-600 hover:underline">Sign
                        up</a>
                    </p>
                </form>
            </div>
        </section>
    );
}
