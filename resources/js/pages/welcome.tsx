import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="System Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                                {canRegister && (
                                    <Link
                                        href={register()}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    >
                                        Register
                                    </Link>
                                )}
                            </>
                        )}
                    </nav>
                </header>
                
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col lg:max-w-4xl">
                        <div className="flex-1 rounded-lg bg-white p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:p-12 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                            
                            <div className="mb-10 max-w-2xl">
                                <h1 className="mb-3 text-2xl font-semibold tracking-tight lg:text-3xl">
                                    Enterprise Resource & Workflow Management
                                </h1>
                                <p className="text-base text-[#706f6c] dark:text-[#A1A09A]">
                                    A centralized platform to manage your day-to-day operations. Streamline your processes, organize your personnel, and keep your business moving forward efficiently.
                                </p>
                            </div>

                            <div className="mb-8 grid gap-6 lg:grid-cols-3">
                                <div className="rounded-md border border-[#e3e3e0] bg-[#FDFDFC] p-5 shadow-sm dark:border-[#3E3E3A] dark:bg-[#161615]">
                                    <h2 className="mb-2 text-sm font-semibold">Team Management</h2>
                                    <p className="text-[#706f6c] dark:text-[#A1A09A]">
                                        Centralize your employee data, roles, departments, and administrative records in one secure location.
                                    </p>
                                </div>
                                <div className="rounded-md border border-[#e3e3e0] bg-[#FDFDFC] p-5 shadow-sm dark:border-[#3E3E3A] dark:bg-[#161615]">
                                    <h2 className="mb-2 text-sm font-semibold">Workflow Automation</h2>
                                    <p className="text-[#706f6c] dark:text-[#A1A09A]">
                                        Standardize daily processes, track task progress, and reduce manual overhead across your organization.
                                    </p>
                                </div>
                                <div className="rounded-md border border-[#e3e3e0] bg-[#FDFDFC] p-5 shadow-sm dark:border-[#3E3E3A] dark:bg-[#161615]">
                                    <h2 className="mb-2 text-sm font-semibold">Unified Dashboard</h2>
                                    <p className="text-[#706f6c] dark:text-[#A1A09A]">
                                        Get instant insights and manage approvals from a clean, responsive interface tailored for productivity.
                                    </p>
                                </div>
                            </div>

                            {!auth.user && (
                                <div className="flex gap-3 text-sm leading-normal">
                                    <Link
                                        href={login()}
                                        className="inline-block rounded-sm border border-black bg-[#1b1b18] px-6 py-2 text-sm font-medium leading-normal text-white transition hover:border-black hover:bg-black dark:border-[#eeeeec] dark:bg-[#eeeeec] dark:text-[#1C1C1A] dark:hover:border-white dark:hover:bg-white"
                                    >
                                        Access System
                                    </Link>
                                </div>
                            )}
                        </div>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}