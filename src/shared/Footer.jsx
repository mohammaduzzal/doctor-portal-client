import footerPic from '../assets/images/footer.png'
const Footer = () => {
    return (
        <div className='relative'>
            {/* image container */}
            <div className='absolute inset-0 z-0'>
                <img src={footerPic} alt="footer background" className='w-full h-full object-cover opacity-80' />
            </div>
            <div className='relative z-10'>
            <footer className="footer sm:footer-horizontal text-base-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </nav>
                <nav>
                    <h6 className="footer-title">ORAL HEALTH</h6>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teeth Whitening</a>
                </nav>
                <nav>
                    <h6 className="footer-title">OUR ADDRESS</h6>
                    <a className="link link-hover">New York - 101010 Hudson</a>
                </nav>
            </footer>
            <footer className="footer text-base-content border-base-300 border-t px-10 py-4">
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </footer>
            </div>
        </div>
    );
};

export default Footer;