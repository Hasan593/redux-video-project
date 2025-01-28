const Navbar = () => {
    return (
        <nav className="bg-slate-100 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
            >
                <a href="/">
                    <img
                        className="h-12"
                        src={''}
                        alt="As Sunnah Skill Development Institute"
                    />
                </a>
                <div
                    className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
                >
                    
                    <img
                        className="inline h-4 cursor-pointer"
                        src={''}
                        alt="Search"
                    />
                </div>
            </div>
        </nav>
    )
};

export default Navbar;