import React from 'react'
import './home.css'
import homePageImage from '../../assets/images/home-page-image.jpg'
import vector from '../../assets/images/Vector.jpg'
import activity from '../../assets/images/activity.jpg'
import pieChart from '../../assets/images/pie-chart 1.jpg'
import command from '../../assets/images/command 1.jpg'
const home = () => {
  return (
    <div>
    <div className=' container mt-3  pb-5 '>
    <div className='boxx pt-4 ps-5 pb-5'>
        <div className='nav-wrapper ms-3 me-2   Nav-container d-flex justify-content-between align-items-center'>
            <h1 className='logo' >Buisness Partener </h1>
            <div className='nav-items d-flex gap-5'>
                <h6 className='active'>Acceuil</h6>
                <h6>Produit</h6>
                <h6>FAQ</h6>
                <h6>A propos de nous</h6>
            </div>
            <div className='nav-buttons d-flex align-items-center justify-content-between gap-4'>
                <h6 className='pt-1' style={{color:"#A6A6A6",cursor:"pointer"}}>Connexion</h6>
                <button className='btn btn-success ' style={{borderRadius:"10px",backgroundColor:"#54BD95",borderColor:"#54BD95"}}> Inscription</button>
            </div>
        </div>
    
        <div className="home-page-body-container ms-4">
            <div className='row '>
                    <div className="col-6 ">
                        
                        <h1  style={{fontSize:"90px"}}>
                        Trouvez des <br/>associés qui<br/> partagent<br/> votre vision
                        </h1>
                        <br/>
                        <img src={vector} style={{backgroundColor:'transparent'}} alt="home page image" srcset="" />
                        <br />
                        <button className='demo btn btn-success px-4 py-3' style={{borderRadius:"44px",backgroundColor:"#54BD95",borderColor:"#54BD95"}}> Démo gratuite</button>
                    </div>
                    <div className="col-6">
                        <img src={homePageImage} alt="home page image" srcset="" style={{height:"550px"}}/>
                    </div>              
            </div>
    </div> 
    </div>
    <div className="home-page-body-container2 ms-4  py-5" style={{backgroundColor:"#F9F8FE"}}>
        <div className="row ms-4">
            <div className="col-6 " style={{marginTop:"125px"}}>
                <h1>Comment est-ce qu’on vous trouve le partenaire idéal ?</h1>
            </div>
            <div className="col-6">
                <div className='d-flex gap-4 '>
                   <div className=' shadow bg-white' style={{height:"60px",width:"60px"}}> <img src={activity}  style={{padding:"15px"}}alt=""  /></div>
                    <div> 
                        <h3 className='fw-bold'>Analyse de votre profil</h3>
                        <h5 className='' style={{color:"#A6A6A6"}}>Sélectionné des valeurs et compétences qui vous correspondent et partagez votre projet.</h5>
                    </div>
                </div>
                <br />
                <div className='d-flex gap-4 pt-4'>
                   <div className=' shadow bg-white' style={{height:"60px",width:"60px"}}> <img src={pieChart}  style={{padding:"15px"}}alt=""  /></div>
                    <div> 
                        <h3 className='fw-bold'>Recherche selon vos critères</h3>
                        <h5 className='' style={{color:"#A6A6A6"}}>Notre système de matchmaking recherche des associés qui vous correspondent.</h5>
                    </div>
                </div>
                <br />
                <div className='d-flex gap-4 mt-4 '>
                   <div className=' shadow bg-white' style={{height:"60px",width:"60px"}}> <img src={command}  style={{padding:"15px"}}alt=""  /></div>
                    <div> 
                        <h3 className='fw-bold'>Match avec le partenaire idéal </h3>
                        <h5 className='' style={{color:"#A6A6A6"}}>Explorez les propositions et engagez la conversation avec votre nouveau partenaire.</h5>
                    </div>
                </div>
            </div>
        </div>    
    </div>   
</div>
</div>
    
  )
}

export default home