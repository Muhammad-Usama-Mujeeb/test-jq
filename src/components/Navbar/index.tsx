import { AppBar, Toolbar, Link } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5rem' }}>
                <Link href="/process" color="inherit" sx={{ textDecoration: 'none', '&:hover': { fontWeight: 'bold' } }}>
                    Process
                </Link>
                <Link href="/about" color="inherit" sx={{ textDecoration: 'none', '&:hover': { fontWeight: 'bold' } }}>
                    About
                </Link>
                <Link href="/faq" color="inherit" sx={{ textDecoration: 'none', '&:hover': { fontWeight: 'bold' } }}>
                    FAQ
                </Link>
                <Link href="/policy" color="inherit" sx={{ textDecoration: 'none', '&:hover': { fontWeight: 'bold' } }}>
                    Policy
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
