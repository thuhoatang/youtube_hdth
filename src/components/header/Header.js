import React from 'react'
import "./Header.css"
import youtube from './youtube_3.PNG'

export default function Header() {
    return (
        <div className="header">
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                    <div className="">
                    <div className="menu_left row">
                            <button className="button_menu_bars col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4"><i class="fa-2x fas fa-bars"></i></button>
                            <div className="logo_icon_youtube col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                                <img className="img_logo_youtube" src={youtube}></img>
                            </div>                           
                    </div>
                    </div>
                        
                </div>
                <div className="menu_center col-xl-6 col-lg-6 d-none d-sm-none d-md-block col-md-6 ">
                <input type="email" class="input_button form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search"></input>
                
                </div>
                <div className="right_menu_header col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-muted mx-2"><i class="fas fa-search"></i></button>
                        <button type="button" className="btn btn-muted mx-2"><i class="fas fa-microphone"></i></button>
                        <button type="button" className="btn btn-muted mx-2"><i class="fa fa-th" aria-hidden="true"></i></button>
                        <button type="button" className="btn btn-muted mx-2"><i class="fa fa-bell" aria-hidden="true"></i></button>
                        <button type="button" className="btn btn-muted mx-2"><i class="fa fa-user" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
