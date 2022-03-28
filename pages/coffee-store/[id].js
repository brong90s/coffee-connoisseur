import Link from 'next/link'
import {useRouter} from 'next/router'

const CoffeeStore = () => {
  const router = useRouter()
  return (
    <div>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <Link href="/coffee-store/dynamic">
        <a>go to page dynamic</a>
      </Link>
    </div>
  )
}

export default CoffeeStore