export async function fetchDashboardData() {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
  
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    
    return {
      metrics: {
        totalEmployees: {
          value: 1259,
          change: "+12%",
          description: "Total Employees"
        },
        jobOpenings: {
          value: 23,
          change: "+3",
          description: "Job Openings"
        },
        newApplicants: {
          value: 123,
          change: "+18%",
          description: "New Applicants"
        },
        upcomingEvents: {
          value: 4,
          change: "+1",
          description: "Upcoming Events"
        }
      },
      visitorStats: {
        labels: months,
        datasets: [
          {
            label: 'Last 6 Months',
            data: [475273, 521234, 542345, 485273, 523456, 478234],
            borderColor: 'rgb(59, 130, 246)',
            tension: 0.4
          },
          {
            label: 'Previous',
            data: [423456, 445678, 467890, 489012, 501234, 523456],
            borderColor: 'rgb(34, 197, 94)',
            tension: 0.4
          }
        ]
      },
      tasks: [
        {
          id: '1',
          title: 'Review Q3 Performance Reports',
          dueDate: '2024-01-15',
          assignee: {
            name: 'Rebecca Moore',
            avatar: '/placeholder.svg'
          },
          status: 'active'
        },
        {
          id: '2',
          title: 'Quarterly Team Meeting',
          dueDate: '2024-01-20',
          assignee: {
            name: 'John Smith',
            avatar: '/placeholder.svg'
          },
          status: 'completed'
        },
        {
          id: '3',
          title: 'Update Employee Handbook',
          dueDate: '2024-01-25',
          assignee: {
            name: 'Sarah Johnson',
            avatar: '/placeholder.svg'
          },
          status: 'ended'
        }
      ]
    }
  }
  
  