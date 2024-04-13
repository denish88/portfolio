import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LandingAnimation } from '../pages/LandingAnimation/LandingAnimation';
import { Loader } from '../components/Loader/Loader';
import Home from '../pages/Home/Home'
import ContactUs from '../pages/ContactUS/ContactUs'
import Education from '../pages/Education&Certificate/Education'
import Project from '../pages/Projects/Project'
import Experiance from '../pages/Experiance/Experiance'

// const Home = lazy(() =>
//     import('../pages/Home/Home'),
// );
// const Education = lazy(() =>
//     import('../pages/Education&Certificate/Education'),
// );
// const ContactUs = lazy(() =>
//     import('../pages/ContactUS/ContactUs'),
// );
// const Project = lazy(() =>
//     import('../pages/Projects/Project'),
// );
// const Experiance = lazy(() =>
//     import('../pages/Experiance/Experiance'),
// );

const MainApp = () => {
    let routeArr = [
        {
            path: "/",
            component: Home,
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
