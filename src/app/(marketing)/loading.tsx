"use client"
import { Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default  function LoadingSpinner() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <Loader2 className="h-12 w-12 text-purple-600" />
      </motion.div>
    </motion.div>
  )
}

