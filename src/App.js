import { jsx as _jsx } from "react/jsx-runtime";
import { LoginForm } from "./features";
import "@/styles/global.scss";
import "@/theme";
function App() {
    return (_jsx("main", { children: _jsx(LoginForm, {}) }));
}
export default App;
