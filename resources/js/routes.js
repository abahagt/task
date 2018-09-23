import ExampleComponent from './components/ExampleComponent';

export const routes = {
    mode: 'history',
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '/test', component: ExampleComponent
        },
    ]
};

