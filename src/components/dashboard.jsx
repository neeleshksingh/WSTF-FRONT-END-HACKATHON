import BarGraph from './bargraph'
import './styles/dashboard.css'

const Dashboard = () =>{
    return(
        <div className="container">
            <h3 className="font-arc">WSTF FRONT-END HACKATHON</h3>
            <div className='all-user'>
                <div className='all-user-1'>
                    <h3 className='font-pop h3-2'>All users</h3>
                    <p className="font-robo">Details &#62;</p>
                </div>
                <div>
                    <h1 className='font-pop user-count'>24,444</h1>
                </div>
            </div>
            <div className='stats'>
                <div className='con'>
                    <div className='box b1'>
                        <img src={require('./Images/Icon.png')} alt="icon" />
                    </div>
                    <div className='box-stat'>
                        <p className='font-robo stat-p'>Total earning</p>
                        <h3 className='font-pop stat-h'>100025</h3>
                    </div>
                </div>
                <div className='con'>
                    <div className='box b2'>
                        <img src={require('./Images/Icon2.png')} alt="icon" />
                    </div>
                    <div className='box-stat'>
                        <p className='font-robo stat-p'>Sales</p>
                        <h3 className='font-pop stat-h'>85542</h3>
                    </div>
                </div>
                <div className='con'>
                    <div className='box b3'>
                        <img src={require('./Images/Vector.png')} alt="icon" />
                    </div>
                    <div className='box-stat'>
                        <p className='font-robo stat-p'>Purchase</p>
                        <h3 className='font-pop stat-h'>79215</h3>
                    </div>
                </div>
            </div>
            <div className='stats2'>
                <div className='cir'>
                    <div className='circle'><p className='font-pop'>27</p></div>
                    <div>
                        <p className='font-robo cir-p'>92800</p>
                        <p className='font-pop cir-p2'>Active users</p>
                    </div>
                </div>
                <div className='cir'>
                    <div className='circle'><p className='font-pop'>67</p></div>
                    <div>
                        <p className='font-robo cir-p'>22652</p>
                        <p className='font-pop cir-p2'>New Users</p>
                    </div>
                </div>
            </div>
            <div className='sales-fig'>
                <div className='sales-box1'>
                    <p className='font-robo sales-p'>Sales Figure</p>
                    <h3 className='font-pop sales-h'>&#36;10,546</h3>
                </div>
                <div className='sales-box2'>
                    <BarGraph/>
                </div>
            </div>
        </div>
    )
}
export default Dashboard