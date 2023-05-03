import { useState, useEffect } from "react"
import { Pedometer } from "expo-sensors"

const useStepCount = () => {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState("checking")
  const [stepCount, setStepCount] = useState(0)

  const subscribe = async () => {
    const isAvailable = await Pedometer.isAvailableAsync()
    setIsPedometerAvailable(String(isAvailable))

    if (isAvailable) {
      const end = new Date()
      const start = new Date(end)
      start.setHours(0, 0, 0, 0)

      const stepCountResult = await Pedometer.getStepCountAsync(start, end)
      if (stepCountResult) {
        setStepCount(stepCountResult.steps)
      }
      return Pedometer.watchStepCount((stepCount) => {
        setStepCount(stepCount.steps)
      })
    }
    return Promise.reject("Pedometer not available")
  }

  useEffect(() => {
    let subscription: any

    const getSubscription = async () => {
      subscription = await subscribe()
    }
    getSubscription()

    return () => subscription && subscription.remove()
  }, [])

  return { isPedometerAvailable, stepCount }
}

export default useStepCount
