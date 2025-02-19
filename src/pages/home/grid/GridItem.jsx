import { Link } from "react-router-dom";

const GridItem = () => {
    return (
        <div
            className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]"
        >
            <div className="w-full flex flex-col">
                <div className="relative">
                    <Link to={'/video'}>
                        <img
                            src="https://i.ytimg.com/vi/MDCp_rjGCrQ/hqdefault.jpg"
                            className="w-full h-auto"
                            alt="Some video title"
                        />
                    </Link>

                    <p
                        className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
                    >
                        12:10
                    </p>
                </div>

                <div className="flex flex-row mt-2 gap-2">
                    <Link to={'/video'} className="shrink-0">
                        <img
                            src="https://yt3.ggpht.com/nNEmhShVcDCCheeg7UwwuH9FjHdrm6jdFSd50negDqhhmD3lXpLKJnoGQzH7swiNyqtHVKdf8jE=s48-c-k-c0x00ffffff-no-rj"
                            className="rounded-full h-6 w-6"
                            alt="As Sunnah Skill Development Institute"
                        />
                    </Link>

                    <div className="flex flex-col">
                        <Link to={'/video'}>
                            <p
                                className="text-slate-900 text-sm font-semibold"
                            >
                                Video title
                            </p>
                        </Link>
                        <a
                            className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                            href="#"
                        >
                            As Sunnah Skill Development Institute
                        </a>
                        <p className="text-gray-400 text-xs mt-1">
                            200 views . May 3, 2022
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridItem;