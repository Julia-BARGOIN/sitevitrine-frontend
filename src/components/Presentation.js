import React from 'react';

const Presentation = () => {
    return (
        <>
            <div className='container presentation'>
                <img className='image-bienvenue' src={require('../img/Présentation.jpg')} alt="présentation" />
                <div>
                    <h4 className='mb-3'>Présentation</h4>
                    <p>
                        Patricia Chapuis, praticienne en aromathérapie à Noisiel et Lagny-sur-Marne <br /> <br />
                        Je vous accompagne vers ce qui est profondément essentiel pour vous <br />
                        <ul>
                            <li> avec bienveillance et humilité</li>
                            <li> à l’aide des huiles essentielles, concentrés puissants du monde végétal, dotées de propriétés polyvalentes </li>
                            <li>en apportant du sens à vos maux et en vous aidant à en déceler les causes profondes</li>
                            <li> en vous proposant des conseils sur mesure, adapté à votre profil</li>
                            <li>en vous transmettant mes savoirs afin de vous rendre autonome</li>
                        </ul>
                        En cheminant ensemble, vous ne serez plus seul pour recouvrer une santé optimale
                    </p>
                </div>
            </div>
        </>
    )
}

export default Presentation;