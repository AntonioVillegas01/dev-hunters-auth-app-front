import * as yup from "yup";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {fetchProfile, fetchRegister} from "../helpers/fetchs/auth";
import {TLoginResponse} from "../interfaces/auth.interface";
import {setUser} from "../helpers/localStorage/authStorage";
import {setUserAction} from "../redux/actions/user.action";
import Swal from "sweetalert2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const validationSchema = yup.object({
    name: yup.string().required("Este campo es requerido"),
    email: yup.string().required("Este campo es requerido").email("Debe ser un email Válido"),
    password: yup.string().required("Este campo es requerido"),
});
const RegistrationForm = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);



    const dispatch:Dispatch<any>  = useDispatch();

    const formik = useFormik({
        initialValues: {
            name:"",
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: (values) => {
            setLoading(true);
            console.log(values);

            fetchRegister(values)
                .then((res: TLoginResponse) => {
                    setLoading(false);
                    fetchProfile(res.access_token).then((prof:any) => {
                        setUser(prof);
                        dispatch(
                            setUserAction(prof)
                        )
                        navigate("/");
                    });
                })
                .catch((e) => {
                    // devuelve statusCode y message
                    setLoading(false);
                    Swal.fire({
                        title: "Error!",
                        text: `${e.msg}`,
                        icon: "error",
                        confirmButtonText: "Aceptar",
                    });
                });

        },
    });

    return (

        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nombre"
                name="name"
                autoComplete="name"
                placeholder="Escriba su name aquí"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo electrónico"
                name="email"
                autoComplete="email"
                placeholder="Escriba su email aquí"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                placeholder="Escriba su contraseña aquí"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={loading}
            >
                Ingresar
            </Button>

        </Box>
    );
};

export default RegistrationForm;
