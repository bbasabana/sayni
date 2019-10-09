import React, { Component } from 'react'
import { connect } from 'react-redux';
import logo from './../../../assets/signlogo.png';
import facebook from './../../../assets/icons/facebook.svg';
import github from './../../../assets/icons/github.svg';
import instagram from './../../../assets/icons/instagram.svg';
import linkedin from './../../../assets/icons/linkedin.svg';
import skype from './../../../assets/icons/skype.svg';

export class PartialCard extends Component {
    render() {
        const {form} = this.props
        return (
            <div  class="drc_Blod_signature">
                <div sayni="signatureBest_drc">
                <table cellspacing="0" cellpadding="0" style={{borderCollapse:'collapse',color:'#212529',fontFamily:'Arial', fontSize:'14px', tableLayout:'fixed',maxWidth:'450px', paddingBottom:'20px',lineHeight:'1.3'}}>
                        <tbody>
            <tr>
                <td style={{paddingBottom:'15px',backgroundImage: 'url(' + { logo } + ')100% 87%/100px no-repeat'}}>
                    <table style={{borderCollapse:'collapse',tableLayout:'fixed'}}>
                        <tbody>
                            <tr style={{height:'153px',width:'352px'}}>
                                <td style={{verticalAlign:'middle',maxWidth:'119px'}}>
                                    <div style={{width:'119px', borderRight:'1px solid #ffff'}}>
                                        <div style={{height:'99px', width:'99px', borderRadius:'100%', backgroundColor:'#f0f0f0'}}>
                                            <img 
                                              src={form.photo || "https://pbs.twimg.com/profile_images/1113391996406829056/5EAomi6X_400x400.jpg"} 
                                               alt="" 
                                            style={{borderStyle:'none',verticalAlign:'middle',borderRadius:'100%',width:'99px',height:'99px',background:'#ffffff'}}/>
                                        </div>
                                        </div>
                                        </td>
                                        <td style={{paddingLeft:'20px', wordBreak:'break-all'}}>
                                            <div style={{fontSize:'12px',color:'#000000',marginBottom:'7px', fontFamily:form.font}}>
                                                <p style={{margin:'3px 0px',fontSize:'20px',fontWeight:'bold'}}>
                                                    <span style={{marginRight:'5px'}}>{form.firstName}</span>
                                                    <span>{form.lastName}</span></p>
                                                    <p style={{margin:'2.7px 0px 10px', fontSize:'14px'}}>
                                                        <span style={{fontWeight:'bold'}}>
                                                            <span>{form.profesional} | {form.enterpriseName} |</span><span>
                                                                &nbsp; {form.department}</span>
                                                            </span>
                                                    </p>
                                                    <p style={{marginTop:'0px',marginBottom:'3px'}}>
                                                        <span style={{color:'#000000'}}>Phone(s):&nbsp;</span
                                                            ><a href={`tel:${form.phone}`}  target="_blank"><span  className="font-bold" style={{color: form.color}}>{form.phone}</span></a>
                                                    </p>
                                                    <p style={{marginTop:'0px',marginBottom:'3px'}}>
                                                        <span style={{color:'#000000'}}>Email:&nbsp;</span>
                                                        <a href={`mailto:${form.email}`} target="_blank"><span className="font-bold" style={{color: form.color}}>{form.email}</span></a>
                                                    </p>
                                                    <p style={{marginTop:'0px',marginBottom:'3px'}}>
                                                        <span style={{color:'#000000'}}>Site web:&nbsp;</span>
                                                        <a href={form.website}  target="_blank"> <span className="font-bold" style={{color: form.color}}>{form.website}</span></a>
                                                    </p>
                                                    <p style={{marginTop:'0px',marginBottom:'3px'}}>
                                                        <span style={{color:'#000000'}}>Adresse:&nbsp;</span>
                                                        <span className="font-bold" style={{color: form.color}}>{form.address}</span>
                                                    </p>
                                                    <p style={{marginTop:'0px',marginBottom:'3px'}}>
                                                        <span style={{color:'#000000'}}></span>
                                                    </p>
                                                </div>
                                                <div style={{marginBottom:'7px'}}>
                                                    <table cellpadding="0" cellspacing="0" style={{borderCollapse:'collapse'}}>
                                                        <tbody>
                                                            <tr> 
                                                            {form.socialfacebook ? 
                                                               (<td style={{paddingRight:'7px', paddingTop:'7px'}}>
                                                                    <table cellpadding="0" cellspacing="0" border="0" align="center" style={{borderCollapse:'collapse'}}>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align="center" style={{borderRadius:'0px',width:'26px',height:'26px',color:'#FFFFFF'}}>
                                                                                    <a href={`https://web.facebook.com/${form.socialfacebook}`} style={{display:'block',height:'22px',width:'22px'}} target="_blank">
                                                                                        <img src={facebook} alt={form.lastName}  style={{borderStyle:'none',verticalAlign:'middle',maxWidth:'100%', maxHeight:'100%',display:'block'}}/>
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>):null}

                                                                {form.socialgithub ? 
                                                                (<td style={{paddingRight:'7px', paddingTop:'7px'}}>
                                                                    <table cellpadding="0" cellspacing="0" border="0" align="center" style={{borderCollapse:'collapse'}}>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align="center" style={{borderRadius:'0px',width:'26px',height:'26px',color:'#FFFFFF'}}>
                                                                                    <a  href={`https://github.com/${form.socialgithub}`} style={{display:'block',height:'22px',width:'22px'}} target="_blank">
                                                                                        <img src={github} alt={form.lastName} style={{borderStyle:'none',verticalAlign:'middle',maxWidth:'100%', maxHeight:'100%',display:'block'}} />
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>):null}

                                                                {form.socialinstagram ? 
                                                                (<td style={{paddingRight:'7px', paddingTop:'7px'}}>
                                                                    <table cellpadding="0" cellspacing="0" border="0" align="center" style={{borderCollapse:'collapse'}}>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align="center" style={{borderRadius:'0px',width:'26px',height:'26px',color:'#FFFFFF'}}>
                                                                                    <a href={`https://www.instagram.com/${form.socialinstagram}`} style={{display:'block',height:'22px',width:'22px'}} target="_blank">
                                                                                        <img src={instagram} alt={form.lastName} style={{borderStyle:'none',verticalAlign:'middle',maxWidth:'100%', maxHeight:'100%',display:'block'}}/>
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>):null}

                                                                {form.socialLinkedin ? 
                                                                (<td style={{paddingRight:'7px', paddingTop:'7px'}}>
                                                                    <table cellpadding="0" cellspacing="0" border="0" align="center" style={{borderCollapse:'collapse'}}>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align="center" style={{borderRadius:'0px',width:'26px',height:'26px',color:'#FFFFFF'}}>
                                                                                    <a href={`https://www.linkedin.com/${form.socialLinkedin}`} style={{display:'block',height:'22px',width:'22px'}}  target="_blank">
                                                                                        <img src={linkedin} alt={form.lastName}  style={{borderStyle:'none',verticalAlign:'middle',maxWidth:'100%', maxHeight:'100%',display:'block'}}/>
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>):null}

                                                                {form.socialskype ? 
                                                                (<td style={{paddingRight:'7px', paddingTop:'7px'}}>
                                                                    <table cellpadding="0" cellspacing="0" border="0" align="center" style={{borderCollapse:'collapse'}}>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align="center" style={{borderRadius:'0px',width:'26px',height:'26px',color:'#FFFFFF'}}>
                                                                                    <a href={`@/${form.socialskype}`} style={{display:'block',height:'22px',width:'22px'}}  target="_blank">
                                                                                        <img src={skype} alt={form.lastName}  style={{borderStyle:'none',verticalAlign:'middle',maxWidth:'100%', maxHeight:'100%',display:'block'}}/>
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>):null}
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div>
                        <div style={{paddingRight:'7px',paddingTop:'7px', marginLeft: '2em', display:'inline'}}>
                               <div className="flex sm:inline-flex md:block lg:hidden xl:flex">
                                <div class="text-gray-700 text-center  text-sm"><span>Generated by</span> </div>
                                <div class="text-gray-700 text-center ">
                                    <img src={logo} style={{verticalAlign:'middle',maxWidth:'45px', maxHeight:'45px',position:'absolute'}}/>🌹🇨🇩
                                </div>
                               </div>
                         </div>
                     </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state,
  })

export default connect(mapStateToProps)(PartialCard)
