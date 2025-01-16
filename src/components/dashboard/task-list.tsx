"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface Task {
  id: string
  title: string
  dueDate: string
  assignee: {
    name: string
    avatar: string
  }
  status: "active" | "completed" | "ended"
}

interface TaskListProps {
  tasks: Task[]
}

export function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="space-y-4">
      <AnimatePresence>
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="flex items-center justify-between p-4 bg-card rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={task.assignee.avatar} />
                <AvatarFallback>{task.assignee.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium">{task.title}</h4>
                <p className="text-sm text-muted-foreground">Due: {task.dueDate}</p>
              </div>
            </div>
            <Badge
              variant={
                task.status === "active"
                  ? "default"
                  : task.status === "completed"
                  ? "outline"
                  : "destructive"
              }
            >
              {task.status}
            </Badge>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

