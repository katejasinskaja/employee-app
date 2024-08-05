import './app-info.css';

const AppInfo = ({increased, employees}) => {
   return (
    <div className="app-info" >
        <h1>Report on company's empoyees</h1>
        <h2>Total number of employees: {employees} </h2>
        <h2>The bonus will  be received: {increased} </h2>
    </div>
   )
}

export default AppInfo;