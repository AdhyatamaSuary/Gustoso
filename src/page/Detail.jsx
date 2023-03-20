import React from "react";
import "../css/detail.css";
import "../css/style.css";
import Logo from "../image/gus/logo.png";
import Search from "../image/gus/search.png";
import Menu5 from "../image/menu-5.svg";
import Profile from "../image/Ellipse 1.png";
import Star from "../image/star.png";
import Time from  "../image/time.svg";

function Detail() {
    return (
        <div className="back">
            <div className="flex-row flex pt-3 justify-center">
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
            </div>
            <div className="text-[16px] ">
                <p className="ml-72 mt-8">Home v Sandwidth Jamur Goreng</p>
            </div>
            <div className="badan flex-row flex mt-12">
                <div className="splitkiri">

                </div>
                <div className="splittengah pl-6 font-Nunito">
                    <div className="gambar flex-row flex ">
                        <img src={Menu5} alt="" className="w-96 h-[370px]  rounded-xl " />
                        <div className="desc ml-4 ">
                            <h3 className="font-bold text-2xl">Sandwich Jamur Jagung</h3>
                            <div className="rating flex-row flex pb-2 ">
                                <img id="bd" src={Profile} alt="" className="w-10"></img>
                                <p id="bd" className="text-[15px] ml-5 mt-2">Fajar Sed</p>
                                <p id="bd" className="ml-5 text-[10px] mt-3">&#9733; 4.5</p>
                                <p id="bd" className="text-[10px] mt-3">(10 bintang)</p>
                            </div>
                            <div className="deskripsi mt-3 pb-2">
                                <h1 className="text-sm">Deskripsi : Resep cara membuat bakwan udang dengan isian udang dan seafood lainya , dijamin enak dan mudah dibuat di rumah</h1>
                            </div>
                            <div className="but flex-row flex pt-2 ">
                                <div className="share mr-5">
                                    <button className="p-2 text-xs text-amber-500 border-amber-500 border-[1px] rounded-[10px]">Simpan Resep</button>
                                </div>
                                <div className="share">
                                    <button className="p-2 text-xs text-amber-500 border-amber-500 border-[1px] rounded-[10px]">Bagikan Resep</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="bahan mt-5 rounded-lg">
                        <div className="judulbahan">
                            <h1 className="mb-8 text-2xl">Bahan-Bahan </h1>
                            <div className="flex-row flex ">
                            <img src={Time} alt="" className="mr-1" />
                            <h2>  15menit    &#xf406; orang</h2>
                            </div>
                        </div>
                        <div className="isibahan mt-8">
                            <div className="bor border-zinc-900">
                                <b className=" ">2 batang <span className="font-normal"> wortel</span></b>
                            </div>
                            <div className="bor border-zinc-900">
                                <b>1/4 <span className="font-normal"> kol iris tipis</span></b>
                            </div>
                            <div className="bor border-zinc-900">
                                <b>2 batang  <span className="font-normal"> wortel</span></b>
                            </div>
                            <div className="bor2">
                                <b>1/4 <span className="font-normal"> wortel</span></b>
                            </div>
                        </div>
                    </div>
                    <div className="how mt-5 rounded-lg">
                        <div className="judul">
                            <h1 className="mb-8 text-2xl">Cara Membuat </h1>
                        </div>
                        <div className="isibahan mt-8 text-xs font-semibold">
                            <div className="des border-zinc-900">
                                <p className=" "> 1.Siapkan semua bahan yang dibutuhkan untuk membuat Ximilu</p>
                            </div>
                            <div className="des border-zinc-900">
                                <p>2.Pertama-tama buat nutrijel melonnya terlebih dahulu dengan mencampurkan semua bahan lalu tuang jelly ke dalam cetakan sampai mengeras.</p>
                            </div>
                            <div className="des border-zinc-900">
                                <p>3.Siapkan semua bahan yang dibutuhkan untuk membuat Ximilu</p>
                            </div>
                            <div className="des2">
                                <p>4.Pertama-tama buat nutrijel melonnya terlebih dahulu dengan mencampurkan semua bahan lalu tuang jelly ke dalam cetakan sampai mengeras.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="splitkanan pl-10 pr-24">
                    <div className="star p-3 rounded-[10px]">
                        <p className="text-ms font-semibold mb-1">Yuk rating resep ini.</p>
                        <p className="text-xs text-gray-500 mb-4">Nilai resep dari 5 bintang ya.</p>
                        <div className="flex-row flex ">
                            <img src={Star} alt="" className="h-7" />
                            <img src={Star} alt="" className="ml-2 h-7" />
                            <img src={Star} alt="" className="ml-2 h-7" />
                            <img src={Star} alt="" className="ml-2 h-7" />
                            <img src={Star} alt="" className="ml-2 h-7" />
                        </div>
                        <div className="button p-1 mt-3">
                            <button className="reting2 text-xs h-8 text-white  rounded-[10px] p-1 w-[240px]">Beri Rating</button>
                        </div>
                    </div>
                    <div className="komen mt-8">
                        <h1 className="text-xl font-semibold text-[#717171]">Komentar</h1>
                        <div>
                            <input className="input placeholder:text-xs focus:outline-none" placeholder="Beri Komentar" type="text" name="search" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer ">
                <h1 className="">test</h1>
                <h1 className="">test</h1>
                <h1 className="">test</h1>
                <h1 className="">test</h1>
            </div>
        </div>
    );
}

export default Detail;