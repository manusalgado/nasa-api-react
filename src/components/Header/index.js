import React from 'react'
import { Wrapper } from './styles'
import logo from './../../assets/images/nasa-logo.png'

const Header = () => {
    return (
        <Wrapper>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col s12 m2 l2'>
                        <a href='/'>
                            <img src={logo} alt='Logo Nasa' width='70'/>
                        </a>
                    </div>
                    <div className='col s12 m10 l10'>
                        <h1>Nasa Photo of the day</h1>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Header