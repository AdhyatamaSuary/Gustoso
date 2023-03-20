import React from "react";
import "../css/index.css";
import "../css/style.css";
import Logo from "../image/gus/logo.png"


function Home() {
    return (
        <div className="back">
            <div className=" flex-row flex ">
                <div className="w-32 ml-40 mt-8"> 
                    <img src={Logo} alt="" />
                </div>
                <div className="flex-row flex ml-5">
                    <div className="font-semibold ml-60 mt-8">
                        <button>Home</button>
                    </div>
                    <div className="font-semibold ml-10 mr-10 mt-8">
                        <button>About Us</button>
                    </div>
                    <div className="font-semibold mt-8">
                        <button>Contact Us</button>
                    </div>
                    <div className="flex-row flex font-semibold ml-44">
                        <div className="text-white mr-10 mt-8">
                            <button>Log in</button>
                        </div>
                        <div className="ml-5 mt-7">
                            <button className="text-orange-600 bg-white py-2 px-5 rounded-[10px]">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20 ml-40 pt-10">
                <div className="text-6xl font-black ">
                    <p className="">Write and </p>
                    <p className="mt-5">Share <label className="text-amber-400">Recipe</label> </p>
                </div>
                <div className="">
                    <p className="mt-5">Bored of cooking the same thing week in, week out? Application </p>
                    <p className="mt-1">of cooking recipes, food, drinks, cake recipes, cook donuts, </p>
                    <p className="mt-1">practical snack recipes, easy .... </p>
                </div>
                <div className="ml-5 mt-20">
                    <button className="text-white text-xl bg-amber-400 p-6 w-52 rounded-xl">Find More</button>
                </div>
            </div>
        </div>
    );
}

export default Home;