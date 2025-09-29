import { ArticleBanner } from "@/components/article/article-banner";
import { ArticleList } from "@/components/article/article-list";
import { ArticleRecommend } from "@/components/article/article-recommend";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function ArticlePage(){
    return (
        <main className="bg-white h-fit w-full pb-20" >
            <ArticleBanner/>
            <ArticleList/>
            <ArticleRecommend/>
            <CTA/>
            <Footer/>
        </main>
    )
}