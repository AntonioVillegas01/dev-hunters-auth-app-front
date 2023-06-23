import ButtonAppBar from "../components/AppBar";
import Profile from "../components/Profile";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store/store";


const HomePage = () => {
    const authUser = useSelector((state: RootState) => state.userReducer);

    return (
        <div>
            <ButtonAppBar></ButtonAppBar>
            <Profile name={authUser?.name} email={authUser?.email} />

        </div>
    );
};

export default HomePage;
