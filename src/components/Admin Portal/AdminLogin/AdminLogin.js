import React, { useState, useEffect } from 'react';
import logo from "../../learningportal.svg";
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../../features/auth/authApi';
const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const [login, { data, isLoading, error: responseError }] =
        useLoginMutation();

    const navigate = useNavigate();
    // admin@learnwithsumit.com
    // lws@123456
    useEffect(() => {
        if (responseError ?.data) {
            setError(responseError.data);
        }
        if (data ?.accessToken && data ?.user) {
            navigate("/Dashboard/dashboard");
        }
    }, [data, responseError, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");

        login({
            email,
            password,
        });
    };
    return (
        <section className="py-6 bg-primary h-screen grid place-items-center">
            <div className="mx-auto max-w-md px-5 lg:px-0">
                <div>
                    <Link to='/'><img className="h-12 mx-auto" src={logo} /></Link>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
                        Sign in to Admin Account
                </h2>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-6" action="#" method="POST">
                    {/* <input

                        type="hidden" name="remember" value="true" /> */}
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label for="email-address" className="sr-only">Email address</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id="email-address" name="email" type="email" autocomplete="email" required
                                className="login-input rounded-t-md" placeholder="Email address" />
                        </div>
                        <div>
                            <label for="password" className="sr-only">Password</label>
                            <input
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                id="password" name="password" type="password" autocomplete="current-password" required
                                className="login-input rounded-b-md" placeholder="Password" />
                        </div>
                    </div>

                    <div className="flex items-center justify-end">
                        <div className="text-sm">
                            <a href="#" className="font-medium text-violet-600 hover:text-violet-500">
                                Forgot your password?
                        </a>
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                            Sign in
                    </button>
                    </div>
                </form>
            </div>
        </section>

    );
};

export default AdminLogin;