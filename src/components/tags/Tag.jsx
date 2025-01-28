const Tag = () => {
    return (
        <>
            <div
                className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
            >
                CSS
            </div>
            {/* selected */}
            <div
                className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
            >
                JavaScript
            </div>
        </>
    );
};

export default Tag;