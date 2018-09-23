import Full from './components/Full';
import ExampleComponent from './components/ExampleComponent';
import Form from './app/views/Form';
import DisplayData from './app/views/DisplayData';

export const routes = {
    mode: 'history',
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '/',
            component: Full,
            children: [
                {
                    path: '/test', component: ExampleComponent
                },
                {
                    path: '/add', component: Form
                },
                {
                    path: '/display', component: DisplayData
                },
            ]
        }
    ]
};

