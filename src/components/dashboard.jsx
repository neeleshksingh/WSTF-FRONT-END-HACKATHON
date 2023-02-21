import './styles/dashboard.css'

const Dashboard = () =>{
    return(
        <div className="container">
            <h3 className="font-arc">WSTF FRONT-END HACKATHON</h3>
            <div className='all-user'>
                <div className='all-user-1'>
                    <h3 className='font-pop h3-2'>All users</h3>
                    <p className="font-robo">Details </p>
                </div>
                <div>
                    <h1 className='font-pop user-count'>24444</h1>
                </div>
            </div>
        </div>
    )
}
export default Dashboard