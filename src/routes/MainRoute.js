import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import LoginSignup from '../pages/Login';

const MainRoute = createBrowserRouter([

    {
        path: '/',
        element: <App />,
        children: [{

            path: '',
            element: <Home />
        },
        {

            path: 'signup',
            element: <LoginSignup />
        },
      
        ]
    }
]
);

export default MainRoute