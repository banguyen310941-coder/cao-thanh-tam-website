import Link from "next/link";

export default function InnerHero({eyebrow,title,description}:{eyebrow:string;title:string;description:string}){
  return <section className="inner-hero"><div className="shell"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p><div className="breadcrumbs"><Link href="/">Trang chủ</Link><span>•</span><span>{title}</span></div></div></section>
}
