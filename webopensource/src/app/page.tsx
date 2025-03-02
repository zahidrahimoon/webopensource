import Hero from "@/components/Hero"
import LanguageMarquee from "@/components/LanguageMarquee"
import ProjectList from "@/components/ProjectList"
import ContributorGrid from "@/components/ContributorGrid"
import OpenSourceBenefits from "@/components/OpenSourceBenefits"
import ContributeGuide from "@/components/HowToContribute"

export default function Home() {
  return (
    <div>
      <Hero />
      <LanguageMarquee />
      <div className="container mx-auto px-4 py-8">
        <OpenSourceBenefits />
        <h2 className="text-3xl text-center font-bold mb-8">Featured Projects</h2>
        <ProjectList />
        <h2 className="text-3xl text-center font-bold my-8">Our Contributors</h2>
        <ContributorGrid />
        <ContributeGuide />
        
      </div>
    </div>
  )
}

