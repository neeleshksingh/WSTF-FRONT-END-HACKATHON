import './styles/navbar.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () =>{
    return(
        <div className='nav'>
            <div className='logo nav-flex'>
                <img src={require("./Images/logo.png")} alt="" />
                <h3 className='font-arc'>WASSERSTOFF</h3>
            </div>
            <div className='search'>
                <input type="text" id='search'/><SearchIcon className='ser-icon'/>
            </div>
            <div className='list nav-flex font-pop'>
                <li className='l2'>Statistics</li>
                <div className='l1-flex'>
                    <li className='l1'>Overview</li>
                    <img src={require('./Images/Tab.png')} alt="" />
                </div>
                <li className='l2'>Dashboard</li>
                <li className='l2'>Analytics</li>
            </div>
            <div className='user nav-flex'>
                <PermIdentityIcon/>
                <TuneIcon/>
            </div>
        </div>
    )
}
export default Navbar