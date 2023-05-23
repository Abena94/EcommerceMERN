import React from 'react'
import { Link } from 'react-router-dom'

export const HomeFooter = () => {
    return (
        <div className='bg-secondary p-2 text-dark bg-opacity-50 mt-4'>
            <div className='container d-flex justify-content-around'>
                <div>
                    <h4 className="text-center fw-bold text-primary">Quick links</h4>
                    <div className='container d-flex flex-column'>
                        <Link className='btn' to='/'>Home</Link>
                        <Link className='btn' to='/products'>Products</Link>
                        <Link className='btn' to='/auth'>Log in</Link>
                    </div>
                </div>
                <div>
                    <h4 className="text-center fw-bold text-primary">Contact</h4>
                    <div className='container'>
                        <p>+1 8734557190 </p>
                        <p>ahmedbna709@gmail.com</p>
                        <p>ahmedbna708@gmail.com</p>
                    </div>
                </div>
                <div>
                    <h4 className="text-center fw-bold text-primary">Follow us</h4>
                    <div className='container d-flex flex-column'>
                        <Link className='btn' to='/'>Instagram</Link>
                        <Link className='btn' to='/'>Facebook</Link>
                        <Link className='btn' to='/'>Twitter</Link>
                        <Link className='btn' to='/'>Linkedin</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
