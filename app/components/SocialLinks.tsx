import Image from 'next/image'
import Link from 'next/link'

export function SocialLinks() {
  ;<div className="flex space-x-5 pt-6">
    <Link href="#">
      <a>
        <Image
          src="/images/linkedin.svg"
          alt="LinkedIn"
          width={30}
          height={30}
        />
      </a>
    </Link>
    <Link href="#">
      <a>
        <Image src="/images/github.svg" alt="GitHub" width={30} height={30} />
      </a>
    </Link>
    <Link href="#">
      <a>
        <Image src="/images/twitter.svg" alt="Twitter" width={30} height={30} />
      </a>
    </Link>
  </div>
}
