import React from 'react';
import WalletConnect from '../components/WalletConnect';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-neutral-light dark:bg-neutral-darkest transition-colors duration-300">
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <header className="mb-12">
                    <h1 className="text-5xl font-bold text-primary-DEFAULT dark:text-primary-light mb-4">
                        sBTC Lending Protocol
                    </h1>
                    <p className="text-xl text-neutral-DEFAULT dark:text-neutral-light max-w-2xl">
                        Leverage your Bitcoin to borrow STX seamlessly and securely on the Stacks blockchain.
                        Monitor your loans and manage your collateral with our intuitive dashboard.
                    </p>
                </header>

                <WalletConnect />

                <section className="mt-16 w-full max-w-3xl p-8 bg-neutral-lightest dark:bg-neutral-dark rounded-xl shadow-2xl">
                    <h2 className="text-3xl font-semibold text-neutral-darkest dark:text-neutral-lightest mb-6">
                        Your Dashboard
                    </h2>
                    <div className="space-y-6 text-left">
                        <div className="p-6 bg-neutral-light dark:bg-neutral-darkest rounded-lg shadow">
                            <h3 className="text-xl font-medium text-primary-DEFAULT dark:text-primary-light mb-2">Loan Status</h3>
                            <p className="text-neutral-DEFAULT dark:text-neutral-light">
                                {/* Add loan status logic here. Example: */}
                                <span className="font-semibold">Active</span> - Partially Repaid
                            </p>
                        </div>
                        <div className="p-6 bg-neutral-light dark:bg-neutral-darkest rounded-lg shadow">
                            <h3 className="text-xl font-medium text-primary-DEFAULT dark:text-primary-light mb-2">Health Ratio</h3>
                            <p className="text-neutral-DEFAULT dark:text-neutral-light">
                                {/* Add health ratio logic here. Example: */}
                                <span className="text-2xl font-bold text-green-500">175%</span> (Safe)
                            </p>
                        </div>
                        {/* Add more dashboard items here */}
                    </div>
                </section>
            </main>

            <footer className="w-full text-center py-8 mt-16 border-t border-neutral-DEFAULT dark:border-neutral-dark">
                <p className="text-neutral-DEFAULT dark:text-neutral-light">
                    &copy; {new Date().getFullYear()} sBTC Lending Protocol. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Home;