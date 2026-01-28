import React from 'react'

// 1. Define the shape
type AppItem = {
  title: string
  link: string
  category: string
}

const items: AppItem[] = [
  // --- Native Apps (Self-developed) ---
  {
    title: 'Notes',
    link: '/note-system',
    category: 'native'
  },

  // --- External Apps (Hosted/OSS) ---
  {
    title: 'Drive',
    link: '/drive',
    category: 'external'
  },
  {
    title: 'Terminal',
    link: '/terminal',
    category: 'external'
  },
]

const AppsMenu = () => {
  const nativeApps = items.filter( item => item.category === 'native' )
  const externalApps = items.filter( item => item.category === 'external' )

  // 2. Apply the type to the prop
  const AppLink = ( { item }: { item: AppItem } ) => (
    <a
      href={ item.link }
      className="mt-4 first:mt-2 text-secondary-foreground bg-primary p-4 rounded-full hover:underline w-full text-center block"
    >
      { item.title }
    </a>
  )

  return (
    // Fixed height wrapper to prevent page scroll
    <div className="overflow-hidden p-4 py-2">

      {/* Grid Layout:
         - Mobile: 1 Column, 2 Rows (Split screen top/bottom 50%)
         - Desktop: 2 Columns, 1 Row (Split screen left/right)
      */ }
      <main
        className="flex flex-col md:flex-row w-full h-full text-3xl lg:text-4xl max-w-6xl mx-auto">

        {/* Native Column */ }
        <div className={ ' w-full' }>
          <h2
            className="sticky top-0 w-full text-center py-4 text-muted-foreground text-xl font-bold uppercase tracking-widest z-10">
            Native
          </h2>
          <div
            className="flex flex-col items-center overflow-y-auto pr-2 h-44 md:h-88 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {/* Sticky Header */ }
            <div className="w-full flex flex-col items-center pb-4">
              { nativeApps.map( item => (
                <AppLink key={ item.title } item={ item }/>
              ) ) }
            </div>
          </div>
        </div>

        {/* External Column */ }
        <div className={ ' w-full' }>
          <h2
            className="sticky top-0 w-full text-center py-4 pt-2 md:pt-4 text-muted-foreground text-xl font-bold uppercase tracking-widest z-10">
            External
          </h2>
          <div
            className="flex flex-col items-center overflow-y-auto pr-2 h-44 md:h-88 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {/* Sticky Header */ }
            <div className="w-full flex flex-col items-center pb-4">
              { externalApps.map( item => (
                <AppLink key={ item.title } item={ item }/>
              ) ) }
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}

export default AppsMenu