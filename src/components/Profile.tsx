import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';


interface UserProfileCardProps {
    name: string;
    email: string;
}


const Profile: React.FC<UserProfileCardProps> = ({ name, email }) => {

    const cardContainer = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
        };



    return (
        <div style={cardContainer}>
            <Card>
                <CardContent >
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
