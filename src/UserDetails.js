import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Card } from '@mui/material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function UserDetails() {
    const navigate = useNavigate();
    const location = useLocation();
    const user = location.state.user;

    return (
        <>
            <Container className='container_des'>
                <Button variant="contained" onClick={() => navigate('/')}>Back</Button>
                <b className='title'>User Details</b>

                <Grid container >
                    <Grid item md={6} >
                        <Container>
                            <Card className='card_design'>
                                <b className='heading_text'> Profile Info</b>
                                <p>Company: {user.company || "N/A"}</p>
                                <p>Bio: {user.bio || "N/A"}</p>
                                <p>Twitter Username: {user.twitter_username || "N/A"}</p>
                            </Card>
                        </Container>
                    </Grid>
                    <Grid item md={6} >
                        <Container>
                            <Card className='card_design'>
                                <b className='heading_text'>Summary Info</b>
                                <p>Followers: {user.followers}</p>
                                <p>Following: {user.following}</p>
                                <p>Public Repos: {user.public_repos}</p>
                            </Card>
                        </Container>
                    </Grid>
                </Grid>
            </Container >
        </>
    )
}

export default UserDetails;