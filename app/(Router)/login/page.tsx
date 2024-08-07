'use client'

import { RiArrowLeftLine, RiMore2Fill } from "react-icons/ri";
import { WelcomeToLens } from "@/components/lnes/Login/WelcomeToLens";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function page() {
    const router = useRouter();

    return (
        <div className="flex justify-center items-center mx-auto max-w-4xl ">

            <div className="card card-compact bg-base-100 shadow-xl sm:max-w-2xl my-4 h-dvh w-dvw ">

                <div className="navbar py-0 ">
                    <div className=" navbar-start">
                        <button className="btn btn-square btn-ghost" onClick={() => { router.back() }}/* onClick={() => router.back()} */>
                            <RiArrowLeftLine size={24} />
                        </button>
                    </div>
                    <div className=" navbar-center">登入界面</div>
                    <div className=" navbar-end">
                        <button className="btn btn-square btn-ghost">
                            <RiMore2Fill size={24} />
                        </button>
                    </div>
                </div>

                <figure> <img src="/lens/Cover04-Text.png"  alt="Cover04-Text.png"/></figure>
                <div className="p-4">
{/*                     <h2 className="card-title">连接 Lens 登入界面</h2>
                    <p>Lens Protocol</p> */}
                </div>
                <div className="card-body">
                    <WelcomeToLens />
                </div>

            </div>


        </div>
    )
}
