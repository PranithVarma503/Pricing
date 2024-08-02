import React from 'react'
import { useNavigate } from 'react-router-dom'
const OptionsTab = () => {
    const navigate = useNavigate()

    const handleNaveLinkClick = (text) => {
        if(text === 'plans'){
        navigate('/pricing/pro')
        } else if(text ==='cameras') {
            navigate('/cameras')
        } else {
            navigate('/capture-services')
        }
    }
    return(
        <div>
            <ul className="flex space-x-4 px-8">
                <li onClick={() => handleNaveLinkClick('plans')}>
                    <p
                        // href="/pricing/pro"
                        className="inline-block py-2 text-Black hover:text-purple-300"
                    >
                        Plans
                    </p>
                </li>
                <li onClick={() => handleNaveLinkClick('cameras')}>
                    <p
                        // href="/cameras"
                        className="inline-block py-2 text-Black hover:text-purple-300"
                    >
                        Cameras
                    </p>
                </li>
                <li onClick={() => handleNaveLinkClick('services')}>
                    <p
                        // href="/capture-services"
                        className="inline-block py-2 text-Black hover:text-purple-300"
                    >
                        Capture Services
                    </p>
                </li>
            </ul>
        </div>
    )
}
export default OptionsTab