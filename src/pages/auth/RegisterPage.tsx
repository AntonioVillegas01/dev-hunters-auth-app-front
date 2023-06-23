import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Face5Icon from '@mui/icons-material/Face5';
import RegistrationForm from "../../components/RegistrationForm";

const Copyright = (props: any) =>  {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://antoniodeveloper.com/" target="_blank">
                Marco Antonio Garcia
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();


const RegisterPage = () =>  {

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
                       Registro de Usuario
                    </Typography>
                    <RegistrationForm/>
                </Box>
                <Grid container>

                    <Grid item>
                        <Link href="/auth" variant="body2">
                            {"Ya tengo Cuenta "}
                        </Link>
                    </Grid>
                </Grid>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}


export default RegisterPage;
