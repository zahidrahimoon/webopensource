import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Skeleton } from "./ui/skeleton"

const ProjectCardSkeleton = () => (
  <Card className="overflow-hidden">
    <CardHeader className="p-0">
      <Skeleton className="h-48 w-full" />
    </CardHeader>
    <CardContent className="p-4">
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-full mb-4" />
      <div className="flex flex-wrap gap-2">
        {[...Array(5)].map((_, index) => (
          <Skeleton key={index} className="h-6 w-16" />
        ))}
      </div>
    </CardContent>
    <CardFooter className="p-4 pt-0">
      <Skeleton className="h-4 w-32" />
    </CardFooter>
  </Card>
)

const ProjectListSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    {[...Array(9)].map((_, index) => (
      <ProjectCardSkeleton key={index} />
    ))}
  </div>
)

export default ProjectListSkeleton

