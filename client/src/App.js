import './App.css';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { BlogPage } from './pages/BlogPage/BlogPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { PostProvider } from './providers/PostProvider';
import { AuthProvider } from './providers/AuthProvider';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          
        <PostProvider>
          <Routes>
            <Route exact path='/' element={ <Navigate to='/blog' />} />
            <Route path='/blog' element={ <BlogPage /> } />
            <Route path='/login' element={ <LoginPage /> }/>
            <Route path='/register' element={ <RegisterPage /> }/>
          </Routes>
        </PostProvider>

        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
