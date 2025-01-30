import { useEffect } from "react";
import GridItem from "./GridItem";
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from "../../../features/videos";

const Grid = () => {

    const videos = useSelector(state => state.videoSlice.videos)
    console.log(videos)
    const dispatche = useDispatch();
    useEffect(()=>{
        dispatche(fetchVideos())
    }, [dispatche]);

    return (
        <section className="pt-12">
            <section className="pt-12">
                <div
                    className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                >
                    <GridItem />
                </div>
            </section>
        </section>
    );
};

export default Grid;