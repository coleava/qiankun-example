import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('react'));
function render() {
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
    // ReactDOM.render(
    //     <React.StrictMode>
    //         <App />
    //     </React.StrictMode>,
    //     document.getElementById('root')
    // );
}
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap(props) {
    console.log('bootstrap:', props);
}

export async function mount(props) {
    console.log('mount:', props);
    render();
}

export async function unmount(props) {
    console.log('unmount:', props);
    // 卸载节点
    // ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    root.unmount();
}

