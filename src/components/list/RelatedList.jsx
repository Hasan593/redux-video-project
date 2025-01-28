import RelatedItem from "./RelatedItem";

const RelatedList = () => {
    return (
        <div
            className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
        >
            {/* single related video */}
            <RelatedItem />
        </div>
    )
};

export default RelatedList;