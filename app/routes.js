
import MainListVisible from './components/MainListVisible';

import Form from './components/FormComponent';

let routes;

export default routes = [
    {
        path: "/gui",
        component: MainListVisible,
        exact: true
    },
    {
        path: "/gui/create",
        component: Form,
        exact: true
    },
    {
        path: "/gui/edit/:id",
        component: Form,
        exact: true
    }
];