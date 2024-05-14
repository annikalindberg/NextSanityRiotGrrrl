import Tillganglighet from '../components/Tillganglighet'

export const metadata = {
  title:
    'Fördelar med att ha en tillgänglighetsoptimerad webbplats. | NextToEdit Tech Solutions',
  description:
    'Tillgänglighetsoptimering av din webbplats är en viktig del av att skapa en webbplats som är användbar för alla. Lär dig mer om varför tillgänglighetsoptimering är viktigt och hur du kan göra din webbplats mer tillgänglig.',
}

export default function OmTillganglighet() {
  return (
    <div className="bg-sky-100 dark:bg-sky-950 pt-5 md:pt-10 lg:pt-20 min-h-screen">
      <Tillganglighet />
    </div>
  )
}
