import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

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

export default Copyright
