import React from "react";
import "../css/style.css";
import "../css/responsive-style.css"
import Prof from "../image/Ellipse 1.png";
import Burger from "../image/homeburger.png";
import Time from "../image/time.svg";
import Ystar from "../image/yellowstar.svg";

function Profile() {
    return (
        <div className="back">
            <div className="top pt-10 flex-row flex justify-center ">
                <div className="topkiri">
                    <img src={Prof} alt="" className="w-40" />
                </div>
                <div className="toptengah ml-20" >
                    <div className="flex-row flex">
                        <div className="username py-[10px] font-semibold">
                            <h1 className="text-xl">With.Ellie</h1>
                        </div>
                        <div className="ml-10">
                            <button className="text-white bg-amber-500 rounded-[10px] p-2 w-24 ">Follow</button>
                        </div>
                    </div>
                    <div className="flex-row flex mt-7">
                        <div className="flex-row flex">
                        <p className="opacity-80">2 </p>
                        <label className="text-grey ml-2 mr-2 opacity-50">posts</label>
                        </div>
                        <div className="flex-row flex">
                        <p className="opacity-80">2 </p>
                        <label className="text-grey ml-2 mr-2 opacity-50">follower</label>
                        </div>
                        <div className="flex-row flex">
                        <p className="opacity-80">2 </p>
                        <label className="text-grey ml-2 opacity-50">following</label>
                        </div>
                    </div>
                    <div className="name mt-3 ">
                        <p className="font-semibold">Cherlie_valentina</p>
                    </div>
                    <div className="mt-3 opacity-70">
                        <p>working mom yang suka masak sejak kecil</p>
                    </div>
                </div>
            </div>
            <div className="isi">
                <div className="flex-row flex mt-14 justify-center">
                    <div className="vidio">
                        <img src={Burger} alt="" className="w-64 "></img>
                        <div className="judul mt-2">
                            <h1 className="text-xl">Kebab daging sapi</h1>
                            <div className="desc flex-row flex text-xs mt-2">
                                <img src={Time} alt="" className="mr-1 w-3" />
                                <p className="mr-5">15 menit</p>
                                <img src={Ystar} alt="" className="mr-1 w-4" />
                                <p>(4,5)</p>
                            </div>
                        </div>
                    </div>
                    <div className="vidio">
                        <img src={Burger} alt="" className="w-64 ml-12 mr-6"></img>
                        <div className="judul ml-12">
                            <h1 className="text-xl">Kebab daging sapi</h1>
                            <div className="desc flex-row flex text-xs mt-2">
                                <img src={Time} alt="" className="mr-1 w-3" />
                                <p className="mr-5">15 menit</p>
                                <img src={Ystar} alt="" className="mr-1 w-4" />
                                <p>(4,5)</p>
                            </div>
                        </div>
                    </div>
                    <div className="vidio">
                        <img src={Burger} alt="" className="w-64 ml-6 mr-12"></img>
                        <div className="judul ml-7">
                            <h1 className="text-xl">Kebab daging sapi</h1>
                            <div className="desc flex-row flex text-xs mt-2">
                                <img src={Time} alt="" className="mr-1 w-3" />
                                <p className="mr-5">15 menit</p>
                                <img src={Ystar} alt="" className="mr-1 w-4" />
                                <p>(4,5)</p>
                            </div>
                        </div>
                    </div>
                    <div className="vidio">
                        <img src={Burger} alt="" className="w-64 "></img>
                        <div className="judul ">
                            <h1 className="text-xl">Kebab daging sapi</h1>
                            <div className="desc flex-row flex text-xs mt-2">
                                <img src={Time} alt="" className="mr-1 w-3" />
                                <p className="mr-5">15 menit</p>
                                <img src={Ystar} alt="" className="mr-1 w-4" />
                                <p>(4,5)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-row flex mt-10 justify-start ml-24">
                    <div className="vidio">
                        <img src={Burger} alt="" className="w-64 "></img>
                        <div className="judul mt-2">
                            <h1 className="text-xl">Kebab daging sapi</h1>
                            <div className="desc flex-row flex text-xs mt-2">
                                <img src={Time} alt="" className="mr-1 w-3" />
                                <p className="mr-5">15 menit</p>
                                <img src={Ystar} alt="" className="mr-1 w-4" />
                                <p>(4,5)</p>
                            </div>
                        </div>
                    </div>
                    <div className="vidio">
                        <img src={Burger} alt="" className="w-64 ml-12 mr-6"></img>
                        <div className="judul ml-12">
                            <h1 className="text-xl">Kebab daging sapi</h1>
                            <div className="desc flex-row flex text-xs mt-2">
                                <img src={Time} alt="" className="mr-1 w-3" />
                                <p className="mr-5">15 menit</p>
                                <img src={Ystar} alt="" className="mr-1 w-4" />
                                <p>(4,5)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Profile;