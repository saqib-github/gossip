import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL_LIST } from '../../API/API-List';
import { post } from '../../API';
import Spinner from '../../components/Spinner';
import Cookies from 'js-cookie';

function SignupPage() {
    // -------------------------[]
    const navigate = useNavigate();
    // -------------------------[]
    const [loader, setLoader] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoader(true);
        try {
            const response = await post(API_URL_LIST.create_author_account, { name, email, password }, {});
        
            if (response.status === 200) {
                Cookies.set('token', response?.data?.token || '');
                navigate('/');
            }
        } catch (error) {
        }
        // handle form submission logic
        setLoader(false);
    };

    return (
        <div className="container-fluid bg-dark">
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-md-6 col-lg-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <h4 className="card-title mb-4">Signup</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                <button disabled={loader} type="submit" className="btn btn-primary btn-block mt-4">
                                    {loader ? <Spinner /> : 'Signup'}
                                </button>
                                <button onClick={() => navigate('/login')} type="submit" className="btn btn-primary btn-block mx-2 mt-4">
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
