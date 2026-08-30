import Image from "next/image";
import { getCmsData } from "@/lib/cms";
import BrandLogo from "@/components/BrandLogo";

export default async function CmsBrandLogo({className="official-logo"}:{className?:string}){
  const cms=await getCmsData();
  const logoAlbum=cms.albums.find(a=>/^logo$|logo|nhận diện|nhan dien/i.test(a.title));
  const logo=logoAlbum?cms.photos.find(p=>p.albumId===logoAlbum.id):undefined;
  if(!logo) return <BrandLogo className={className}/>;
  return <Image src={logo.url} alt="Logo Thiên Phúc Vĩnh Hằng Viên" width={220} height={100} className={className} priority sizes="220px" quality={82}/>;
}
