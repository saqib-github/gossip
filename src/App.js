import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllPosts from './pages/all_posts/AllPosts';
import { ToastContainer } from 'react-toastify';
import LoginPage from './pages/login/Login';
import SignupPage from './pages/signup/Signup';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AllPosts />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                </Routes>
            </BrowserRouter>

            <ToastContainer />
        </>
    );
}

export default App;
