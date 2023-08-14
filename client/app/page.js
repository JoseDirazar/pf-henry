'use client'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux/'
import {increment, decrement, incrementByAmount} from './redux/features/counter/counterSlice'

export default function Home() {
  const count  = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Soy un Home!</h1>
      <button onClick={() => dispatch(increment())}>
        increment
      </button>
      <span>
        {count}
      </span>
      <button onClick={() => dispatch(decrement())}>
        decrement
      </button>

    </main>
  )
}
