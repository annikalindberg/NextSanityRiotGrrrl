import Link from 'next/link'
import { slugify } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

interface CTAButtonProps {
  title: string // The title to be slugified and used in the URL
  buttonLabel: string // The text that will appear on the button
  additionalClasses?: string // Any additional CSS classes to apply for styling
}
interface SmallCTAButtonProps {
  title: string // The title to be slugified and used in the URL
  buttonLabel: string // The text that will appear on the button
  additionalClasses?: string // Any additional CSS classes to apply for styling
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  title,
  buttonLabel,
  additionalClasses,
}) => {
  return (
    <Link
      role="button"
      href={`/forms/${slugify(buttonLabel)}`}
      aria-label={`Boka ${buttonLabel}`}
      className={`mt-4 rounded bg-rose-900 text-white dark:bg-fuchsia-100 dark:text-slate-900 py-2 px-4 font-medium md:py-6 md:px-6 md:text-xl hover:bg-rose-800   dark:hover:bg-fuchsia-200 focus:ring-4 focus:ring-rose-500 dark:focus:ring-fuchsia-500 focus:ring-offset-4 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 ${additionalClasses}`}
      onClick={e => {
        e.preventDefault()
        console.log(`${buttonLabel} clicked`)
        // Redirect to the href location
        window.location.href = `/forms/${slugify(buttonLabel)}`
      }}
    >
      {buttonLabel}
    </Link>
  )
}

export const SmallCTAButton: React.FC<SmallCTAButtonProps> = ({
  title,
  buttonLabel,
  additionalClasses,
}) => {
  return (
    <Link
      title="Boka kostnadsfri audit"
      role="button"
      href={`/forms/${slugify(buttonLabel)}`}
      aria-label={`Boka ${buttonLabel}`}
      className={` w-48 text-center text-sm justify-center rounded bg-rose-900 text-white dark:bg-fuchsia-100 dark:text-slate-900 py-1 px-1 md:py-2 font-medium   hover:bg-rose-800   dark:hover:bg-fuchsia-200 focus:ring-4 focus:ring-rose-500 dark:focus:ring-fuchsia-500 focus:ring-offset-4 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 ${additionalClasses}`}
      onClick={e => {
        e.preventDefault()
        console.log(`${buttonLabel} clicked`)
        // Redirect to the href location
        window.location.href = `/forms/${slugify(buttonLabel)}`
      }}
    >
      {buttonLabel}
    </Link>
  )
}
