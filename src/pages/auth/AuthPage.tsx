
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Face5Icon from '@mui/icons-material/Face5';

import LoginForm from "../../components/LoginForm";
import Copyright from "../../components/Copyright";


const theme = createTheme();


const AuthPage = () =>  {

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <Face5Icon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Bienvenido
                    </Typography>
                    <LoginForm/>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}


export default AuthPage;
