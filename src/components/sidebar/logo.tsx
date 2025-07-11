import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <div className=" py-2 px-2">
            <Link href={'/'} className="flex flex-col items-center">
                <Image
                    className="object-cover"
                    src="/MainLogo.svg"
                    alt="logo"
                    width={100}
                    height={100}
                />
                <h2 className="text-xl text-green-500 font-bold">
                    VIETTRIPTOURIST
                    </h2>

            </Link>
        </div>
    )
}