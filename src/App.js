import DataTable from 'react-data-table-component';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { Container } from '@mui/material';
import { CircularProgress } from '@mui/material';

function App() {

    const navigate = useNavigate();

    const [records, setRecords] = useState([])
    const [loading, setLoading] = useState(false)

    const columns = [
        {
            name: 'S.No',
            selector: column_type => column_type.sno,
            width: '75px'
        },
        {
            name: 'Avatar',
            selector: column_type => <Avatar alt="Avatar" src={column_type.avatar_url} />
        },
        {
            name: 'First Name',
            selector: column_type => column_type.first_name,
        },
        {
            name: 'Last Name',
            selector: column_type => column_type.last_name,
        },
        {
            name: 'User Name',
            selector: column_type => column_type.name,
        },
    ]

    useEffect(() => {
        userList()
    }, [])

    async function userList() {
        setLoading(true)
        const api_call = await axios.get('https://api.github.com/user', {
            headers: {
                Authorization: `Bearer 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`,
            },
        })
        const fullName = api_call.data.name.split(' ');
        const firstName = fullName.slice(0, -1).join(' ');
        const lastName = fullName.slice(-1).join(' ');
        const userData = { ...api_call.data, sno: 1, first_name: firstName, last_name: lastName };
        setRecords([userData]);
        setLoading(false);
    }

    return (
        <Container >
            <div class="logo is-animation">
                <span>C</span>
                <span>L</span>
                <span>O</span>
                <span>U</span>
                <span>D</span>
                <span>B</span>
                <span>E</span>
                <span>E</span>
                <span>S</span>
            </div>
            <b className='title'>Users List</b>
            {loading
                ?
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <CircularProgress />
                </div>
                :
                <DataTable
                    columns={columns}
                    data={records}
                    highlightOnHover
                    onRowClicked={user => navigate('/user_details', { state: { user } })}
                />
            }
        </Container>
    );
}

export default App;
