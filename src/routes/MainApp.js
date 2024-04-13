import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LandingAnimation } from '../pages/LandingAnimation/LandingAnimation';
import { Loader } from '../components/Loader/Loader';

const Home = lazy(() =>
    import('../pages/Home/Home'),
);
const About = lazy(() =>
    import('../pages/About/About'),
);
const Education = lazy(() =>
    import('../pages/Education&Certificate/Education'),
);
const ContactUs = lazy(() =>
    import('../pages/ContactUS/ContactUs'),
);
const Project = lazy(() =>
    import('../pages/Projects/Project'),
);
const Experiance = lazy(() =>
    import('../pages/Experiance/Experiance'),
);

const MainApp = () => {
    let routeArr = [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/about",
            component: About,
        },
        {
            path: "/education",
            component: Education,
        },
        {
            path: "/contact",
            component: ContactUs,
        },
        {
            path: '/projects',
            component: Project
        },
        {
            path: '/experience',
            component: Experiance
        }

    ];

    return (
        <>
            <Suspense fallback={<Loader />}>
                <LandingAnimation />
                <Routes>
                    {routeArr.map((item, index) => (
                        <Route key={index} path={item.path} element={React.createElement(item.component)} />
                    ))}
                </Routes>
            </Suspense>
        </>
    );
};

export default MainApp;
