// // import './bootstrap';
// import '../css/app.css';
// import '../css/NoteHintPopover.css';
// import '../css/NotePopo.css';


// import { createRoot } from 'react-dom/client';
// import { createInertiaApp } from '@inertiajs/react';
// import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// import DefaultLayout from './Components/compon/DefaultLayout';
// // import.meta.global(['../img/**'])

// const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// createInertiaApp({
//     title: (title) => `${title} - ${appName}`,
//     resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
//     setup({ el, App, props }) {
//         const root = createRoot(el);

//         root.render(
//             <DefaultLayout>
//         <App {...props}/> 
//         </DefaultLayout>
//         );
//     },
//     progress: {
//         color: '#4B5563',
//     },
// });
// app.js
import './bootstrap';
// import '../css/app.css';
import '../css/custom.css';
import '../css/summernote.css';
import '../css/app.min.css';
import '../css/NoteHintPopover.css';
import '../css/NotePopo.css';
import '../css/forma.css';
import '../css/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Resume.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import DefaultLayout from './Components/compon/DefaultLayout';


const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            // <DefaultLayout>
              <App {...props}/>
            // </DefaultLayout>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
