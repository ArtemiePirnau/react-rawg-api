import { createRoot } from "react-dom/client";
import App from "./components/app/app.jsx";
import { Container } from "./components/container/container.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import "./index.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
