import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {logout} from "../redux/actions/auth.action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Dispatch} from "redux";
import {clearUserAction} from "../redux/actions/user.action";

export default function ButtonAppBar() {

    const navigate = useNavigate();
    const dispatch:Dispatch<any>  = useDispatch();
    const handlelogout = () => {
        dispatch(logout());
        dispatch(clearUserAction())
        navigate("/auth");
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Inicio
                    </Typography>
                    <Button color="inherit" onClick={handlelogout}>LogOut</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
