import React from "react";
import "../css/home.css";
import "../css/style.css";
import "../css/responsive-style.css"
import Search from "../image/gus/search.png";
import Logo from "../image/gus/logo.png";
import Profile from "../image/Ellipse 1.png";
import Burger from "../image/homeburger.png";

function Home() {
  return (
    <div className="back">
      <div className="flex-rox flex pt-5 justify-center">
        <div className="w-32 mt-10">
          <img src={Logo} alt="" />
        </div>
        <div className="mt-10 ml-10 ">
        <label class="relative block">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <img src={Search} alt="" />
          </span>
          <input class="placeholder:text-slate-400 rounded placeholder:bg-grey-500  w-[950px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
        </label>
        </div>
        <div className="w-10 mt-10 ml-10">
          <img src={Profile} alt=""></img>
        </div>
      </div>
      <div className="flex-row flex justify-center text-sm ">
          <div className="font-semibold ">
            <button className="text-white bg-amber-500 py-2 px-2 rounded-[10px]">Semua</button>
          </div>
          <div className="font-semibold  ml-10 mr-10">
            <button className="border-amber-500 border-[1px] rounded-[10px] py-2 px-2">Populer</button>
          </div>
          <div className="font-semibold ">
            <button className="border-amber-500 border-[1px] rounded-[10px] py-2 px-2">Rekomendasi</button>
          </div>
          <div className="font-semibold ml-10 mr-10">
            <button className="border-amber-500 border-[1px] rounded-[10px] py-2 px-2">Trending</button>
          </div>
          <div className="font-semibold">
            <button className="border-amber-500 border-[1px] rounded-[10px] py-2 px-2">Baru diuploud</button>
          </div>
        </div>
        <div className="flex-row flex mt-10 justify-center">
          <div className="vidio">
            <img src={Burger} alt="" className="w-64 "></img>
            <div className="judul flex-row flex">
              <img src={Profile} alt="" className="w-10 mt-1 mr-2"></img>
              <p>Grilled Steak - Yummy <br />
              Steak Meal </p>
            </div>
          </div>
          <div className="vidio">
            <img src={Burger} alt="" className="w-64 ml-12 mr-6"></img>
            <div className="judul flex-row flex">
              <img src={Profile} alt="" className="w-10 mt-1 mr-2 ml-12"></img>
              <p>Grilled Steak - Yummy <br />
              Steak Meal</p>
            </div>
          </div>
          <div className="vidio">
            <img src={Burger} alt="" className="w-64 ml-6 mr-12"></img>
            <div className="judul flex-row flex">
              <img src={Profile} alt="" className="w-10 mt-1 mr-2 ml-6"></img>
              <p>Grilled Steak - Yummy <br />
              Steak Meal</p>
            </div>
          </div>
          <div className="vidio">
            <img src={Burger} alt="" className="w-64 "></img>
            <div className="judul flex-row flex">
              <img src={Profile} alt="" className="w-10 mt-1 mr-2"></img>
              <p>Grilled Steak - Yummy <br />
              Steak Meal</p>
            </div>
          </div>
        </div>
        <div className="flex-row flex mt-10 justify-center">
          <div className="vidio">
            <img src={Burger} alt="" className="w-64 "></img>
            <div className="judul flex-row flex">
              <img src={Profile} alt="" className="w-10 mt-1 mr-2"></img>
              <p>Grilled Steak - Yummy <br />
              Steak Meal </p>
            </div>
          </div>
          <div className="vidio">
            <img src={Burger} alt="" className="w-64 ml-12 mr-6"></img>
            <div className="judul flex-row flex">
              <img src={Profile} alt="" className="w-10 mt-1 mr-2 ml-12"></img>
              <p>Grilled Steak - Yummy <br />
              Steak Meal</p>
            </div>
          </div>
          <div className="vidio">
            <img src={Burger} alt="" className="w-64 ml-6 mr-12"></img>
            <div className="judul flex-row flex">
              <img src={Profile} alt="" className="w-10 mt-1 mr-2 ml-6"></img>
              <p>Grilled Steak - Yummy <br />
              Steak Meal</p>
            </div>
          </div>
          <div className="vidio">
            <img src={Burger} alt="" className="w-64 "></img>
            <div className="judul flex-row flex">
              <img src={Profile} alt="" className="w-10 mt-1 mr-2"></img>
              <p>Grilled Steak - Yummy <br />
              Steak Meal</p>
            </div>
          </div>
        </div>
        <div className="flex-row flex mt-10 justify-center">
          <div className="vidio">
            <img src={Burger} alt="" className="w-64 "></img>
            <div className="judul flex-row flex">
              <img src={Profile} alt="" className="w-10 mt-1 mr-2"></img>
              <p>Grilled Steak - Yummy <br />
              Steak Meal </p>
            </div>
          </div>
          <div className="vidio">
            <img src={Burger} alt="" className="w-64 ml-12 mr-6"></img>
            <div className="judul flex-row flex">
              <img src={Profile} alt="" className="w-10 mt-1 mr-2 ml-12"></img>
              <p>Grilled Steak - Yummy <br />
              Steak Meal</p>
            </div>
          </div>
          <div className="vidio">
            <img src={Burger} alt="" className="w-64 ml-6 mr-12"></img>
            <div className="judul flex-row flex">
              <img src={Profile} alt="" className="w-10 mt-1 mr-2 ml-6"></img>
              <p>Grilled Steak - Yummy <br />
              Steak Meal</p>
            </div>
          </div>
          <div className="vidio">
            <img src={Burger} alt="" className="w-64 "></img>
            <div className="judul flex-row flex">
              <img src={Profile} alt="" className="w-10 mt-1 mr-2"></img>
              <p>Grilled Steak - Yummy <br />
              Steak Meal</p>
            </div>
          </div>
        </div>
        <div className="flex-row flex mt-10 justify-center">
          <div className="vidio">
            <img src={Burger} alt="" className="w-64 "></img>
            <div className="judul flex-row flex">
              <img src={Profile} alt="" className="w-10 mt-1 mr-2"></img>
              <p>Grilled Steak - Yummy <br />
              Steak Meal </p>
            </div>
          </div>
          <div className="vidio">
            <img src={Burger} alt="" className="w-64 ml-12 mr-6"></img>
            <div className="judul flex-row flex">
              <img src={Profile} alt="" className="w-10 mt-1 mr-2 ml-12"></img>
              <p>Grilled Steak - Yummy <br />
              Steak Meal</p>
            </div>
          </div>
          <div className="vidio">
            <img src={Burger} alt="" className="w-64 ml-6 mr-12"></img>
            <div className="judul flex-row flex">
              <img src={Profile} alt="" className="w-10 mt-1 mr-2 ml-6"></img>
              <p>Grilled Steak - Yummy <br />
              Steak Meal</p>
            </div>
          </div>
          <div className="vidio">
            <img src={Burger} alt="" className="w-64 "></img>
            <div className="judul flex-row flex">
              <img src={Profile} alt="" className="w-10 mt-1 mr-2"></img>
              <p>Grilled Steak - Yummy <br />
              Steak Meal</p>
            </div>
          </div>
        </div>
        <div className="flex-row flex mt-10 justify-center">
          <div className="vidio">
            <img src={Burger} alt="" className="w-64 "></img>
            <div className="judul flex-row flex">
              <img src={Profile} alt="" className="w-10 mt-1 mr-2"></img>
              <p>Grilled Steak - Yummy <br />
              Steak Meal </p>
            </div>
          </div>
          <div className="vidio">
            <img src={Burger} alt="" className="w-64 ml-12 mr-6"></img>
            <div className="judul flex-row flex">
              <img src={Profile} alt="" className="w-10 mt-1 mr-2 ml-12"></img>
              <p>Grilled Steak - Yummy <br />
              Steak Meal</p>
            </div>
          </div>
          <div className="vidio">
            <img src={Burger} alt="" className="w-64 ml-6 mr-12"></img>
            <div className="judul flex-row flex">
              <img src={Profile} alt="" className="w-10 mt-1 mr-2 ml-6"></img>
              <p>Grilled Steak - Yummy <br />
              Steak Meal</p>
            </div>
          </div>
          <div className="vidio">
            <img src={Burger} alt="" className="w-64 "></img>
            <div className="judul flex-row flex">
              <img src={Profile} alt="" className="w-10 mt-1 mr-2"></img>
              <p>Grilled Steak - Yummy <br />
              Steak Meal</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;
