import Link from "next/link"
import {
  GitForkIcon,
  GitPullRequestIcon,
  CodeIcon,
  BookOpenIcon,
  ExternalLinkIcon,
  CheckCircleIcon,
} from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const ContributeGuide = () => {
  const steps = [
    {
      title: "Fork Repository",
      icon: GitForkIcon,
      description: "Create your own copy of the project to work on.",
      instructions: ["Navigate to the repository", "Click 'Fork' button", "Select destination"],
      link: {
        text: "Fork Guide",
        url: "https://docs.github.com/en/get-started/quickstart/fork-a-repo",
      },
    },
    {
      title: "Clone & Branch",
      icon: CodeIcon,
      description: "Get the code locally and create a new branch.",
      instructions: ["Clone your fork locally", "Create feature branch", "Make your changes"],
      link: {
        text: "Cloning Guide",
        url: "https://docs.github.com/en/get-started/quickstart/contributing-to-projects",
      },
    },
    {
      title: "Pull Request",
      icon: GitPullRequestIcon,
      description: "Submit your changes for review.",
      instructions: ["Push your changes", "Open pull request", "Await review"],
      link: {
        text: "PR Guide",
        url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request",
      },
    },
  ]

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">How to Contribute</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We welcome contributions from the community! Follow these steps to get started.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden border-muted-foreground/20 dark:bg-secondary/50 transition-colors hover:border-muted-foreground/50"
          >
            {/* Gradient overlay for dark mode */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-background/0 dark:from-background/80 dark:to-background/0 pointer-events-none" />

            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-lg bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </div>
              <CardDescription className="text-sm text-muted-foreground dark:text-muted-foreground/90">
                {step.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3 mb-6">
                {step.instructions.map((instruction, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm">
                    <CheckCircleIcon className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-foreground/90 dark:text-foreground/80">{instruction}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button
                variant="outline"
                size="sm"
                className="w-full dark:bg-secondary dark:hover:bg-secondary/80"
                asChild
              >
                <Link
                  href={step.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <BookOpenIcon className="mr-2 h-4 w-4" />
                  {step.link.text}
                  <ExternalLinkIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default ContributeGuide

