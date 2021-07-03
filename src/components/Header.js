export function Header() {
    return(
        <div className="header">
            <div className="logo">
                <p>Tripma</p>
            </div>

            <div className="header-nav">
                <div className="nav-item">Flights</div>
                <div className="nav-item">Hotels</div>
                <div className="nav-item">Packages</div>
                <div className="nav-item">Sign in</div>
                <div className="singup-btn"><button>Sign up</button></div>
            </div>
        </div>
    )
}