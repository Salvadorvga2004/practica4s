import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <header style={{
                padding: '16px', backgroundColor: '#1a237e', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}>
                <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Práctica 5 - Salvador Vega</h1>
                <nav>
                    <Link to="/" style={{ color: '#fff', textDecoration: 'none', marginRight: '16px' }}>Inicio</Link>
                    <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>Acerca de</Link>
                </nav>
            </header>

            <main style={{ padding: '32px', minHeight: '70vh', background: '#f5f5f5' }}>
                <Outlet />
            </main>

            <footer style={{ padding: '14px', backgroundColor: '#1a237e', color: '#fff', textAlign: 'center' }}>
                <p>Desarrollado por Salvador Vega &copy; 2025 - Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Layout;