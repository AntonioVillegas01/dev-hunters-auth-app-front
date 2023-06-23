import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface UserProfileCardProps {
    name: string;
    email: string;
}

const useStyles = makeStyles(() => ({
    cardContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    },
    cardContent: {
        textAlign: 'center',
    },
}));

const Profile: React.FC<UserProfileCardProps> = ({ name, email }) => {
    const classes = useStyles();

    return (
        <div className={classes.cardContainer}>
            <Card>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5" component="h2">
                        Name: {name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Email: {email}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Profile;
