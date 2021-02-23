import EmployeeListUI from "./component 2/TableUI/EmployeeListUI";
// import User from "./component/User";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import EmployeeTable from "./component 2/EmployeeTable";
import EmployeeGridUI from "./component 2/GridUI/EmployeeGridUI";
import { EmployeeProvider } from "./context 2/EmployeeProvider";

function App() {
  return (
    <EmployeeProvider>
      <BrowserRouter>
        <Switch>
          <Route component={EmployeeListUI} path="/" exact />
          <Route component={EmployeeGridUI} path="/grid" />
        </Switch>
      </BrowserRouter>
    </EmployeeProvider>
  );
}

export default App;

{
  /* <BrowserRouter>
  <Switch>
    
    <Route component={EmployeeListUI} path="/" exact />
    <Route component={EmployeeTable} path="/table" />
    <Route component={EmployeeGrid} path="/grid" />
  </Switch>
</BrowserRouter>; */
}
