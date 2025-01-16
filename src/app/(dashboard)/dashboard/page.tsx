import { Suspense } from 'react'
import { Users, Briefcase, UserPlus, Calendar } from 'lucide-react'
import { MetricCard } from "@/components/dashboard/metric-card"
import { StatsChart } from "@/components/dashboard/stats-chart"
import { TaskList } from "@/components/dashboard/task-list"
import { fetchDashboardData } from '@/lib/data'

export const revalidate = 60 // Revalidate every minute

export default async function DashboardPage() {
  const data = await fetchDashboardData()

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Employees"
          value={data.metrics.totalEmployees.value}
          icon={<Users className="h-4 w-4" />}
          description={`${data.metrics.totalEmployees.change} from last month`}
          color="blue"
        />
        <MetricCard
          title="Job Openings"
          value={data.metrics.jobOpenings.value}
          icon={<Briefcase className="h-4 w-4" />}
          description={`${data.metrics.jobOpenings.change} new positions`}
          color="yellow"
        />
        <MetricCard
          title="New Applicants"
          value={data.metrics.newApplicants.value}
          icon={<UserPlus className="h-4 w-4" />}
          description={`${data.metrics.newApplicants.change} increase`}
          color="green"
        />
        <MetricCard
          title="Upcoming Events"
          value={data.metrics.upcomingEvents.value}
          icon={<Calendar className="h-4 w-4" />}
          description={`${data.metrics.upcomingEvents.change} this week`}
          color="purple"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="md:col-span-4">
          <Suspense fallback={<div className="h-[400px] rounded-lg bg-muted animate-pulse" />}>
            <StatsChart data={data.visitorStats} />
          </Suspense>
        </div>
        <div className="md:col-span-3">
          <Suspense fallback={<div className="h-[400px] rounded-lg bg-muted animate-pulse" />}>
            <TaskList tasks={data.tasks} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

