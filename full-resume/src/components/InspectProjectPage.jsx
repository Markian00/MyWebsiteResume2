import {useParams} from "react-router-dom";
import NavGap from "./NavGap.jsx";

const InspectProjectPage = () => {
    const {slug} = useParams();
    return (
        <div>
            <NavGap/>
            This isn't really set up yet, though I know the slug you entered is {slug} which corresponds to a project ID.
            Give me some time and all the slugs will be working.
        </div>
    )
}

export default InspectProjectPage