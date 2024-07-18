import { useState } from 'react'
import { Button } from './components/button'
import { DisplayedDate } from './components/displayedDate'

export function App() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)

  function subStep() {
    step == 1 ? null : setStep((step) => step - 1)
  }
  function addStep() {
    setStep((step) => step + 1)
  }
  function subCount() {
    setCount((count) => count - step)
  }
  function addCount() {
    setCount((count) => count + step)
  }

  return (
    <div className="flex flex-col items-center justify-center pt-4 gap-3 text-xl">
      <div className="bg-slate-300 flex p-3 rounded-md space-x-4 w-60 items-center justify-between">
        <Button onClick={subStep}>
          <p>-</p>
        </Button>
        <p>Step: {step}</p>
        <Button onClick={addStep}>
          <p>+</p>
        </Button>
      </div>
      <div className="bg-slate-300 flex p-3 rounded-md space-x-4 w-60 items-center justify-between">
        <Button onClick={subCount}>
          <p>-</p>
        </Button>
        <p>Count: {count}</p>
        <Button onClick={addCount}>
          <p>+</p>
        </Button>
      </div>
      <DisplayedDate count={count} />
    </div>
  )
}
